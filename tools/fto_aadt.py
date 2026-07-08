#!/usr/bin/env python3
"""
fto_aadt.py — pull FDOT AADT segments for a county straight from the
FDOT Open Data Hub feature service (Transportation Data & Analytics).

What it does
------------
Queries the "Annual Average Daily Traffic TDA" hosted feature layer:

  https://services1.arcgis.com/O1JpcwDW8sjYuddV/arcgis/rest/services/
      Annual_Average_Daily_Traffic_TDA/FeatureServer/0

for a given county (name or 2-digit FDOT county code), optionally filtered
by roadway ID or segment description, and writes the records — station
(COSITE), roadway, from/to descriptions, AADT, year, and K/K100/D/T
factors — to a CSV. Prints a short summary table to the console.

Usage
-----
  python tools/fto_aadt.py --county Hillsborough
  python tools/fto_aadt.py --county 10 --route "I-275" --limit 50
  python tools/fto_aadt.py --county Orange --out orange_aadt.csv

Stdlib only (urllib, json, csv, argparse) — no pip installs.

CAVEAT: screening-level data. This is the current-year GIS event layer,
convenient for scoping and sanity checks. For official published AADT,
axle-adjusted factors, and historical counts, use Florida Traffic Online
(https://tdaappsprod.dot.state.fl.us/fto/) or FDOT's published reports.
"""

import argparse
import csv
import json
import sys
import urllib.error
import urllib.parse
import urllib.request

SERVICE_URL = (
    "https://services1.arcgis.com/O1JpcwDW8sjYuddV/arcgis/rest/services/"
    "Annual_Average_Daily_Traffic_TDA/FeatureServer/0/query"
)

# Fields we pull, in output order. COSITE = count station (county code + site).
FIELDS = [
    "COSITE", "ROADWAY", "COUNTY", "COUNTYDOT", "DISTRICT",
    "DESC_FRM", "DESC_TO", "BEGIN_POST", "END_POST",
    "AADT", "YEAR_", "KFCTR", "K100FCTR", "DFCTR", "TFCTR",
]

PAGE_SIZE = 2000  # service maxRecordCount


def sql_quote(text: str) -> str:
    """Escape single quotes for the ArcGIS SQL where clause."""
    return text.replace("'", "''")


def build_where(county: str, route: str | None) -> str:
    county = county.strip()
    if county.isdigit():
        # FDOT county code, stored zero-padded in COUNTYDOT (e.g. '10').
        clauses = [f"COUNTYDOT = '{county.zfill(2)}'"]
    else:
        clauses = [f"UPPER(COUNTY) = '{sql_quote(county.upper())}'"]
    if route:
        r = sql_quote(route.upper())
        clauses.append(
            f"(ROADWAY LIKE '%{r}%' OR UPPER(DESC_FRM) LIKE '%{r}%' "
            f"OR UPPER(DESC_TO) LIKE '%{r}%')"
        )
    return " AND ".join(clauses)


def fetch_page(where: str, offset: int, count: int) -> dict:
    params = urllib.parse.urlencode({
        "where": where,
        "outFields": ",".join(FIELDS),
        "returnGeometry": "false",
        "orderByFields": "ROADWAY,BEGIN_POST",
        "resultOffset": offset,
        "resultRecordCount": count,
        "f": "json",
    })
    req = urllib.request.Request(
        f"{SERVICE_URL}?{params}",
        headers={"User-Agent": "fto_aadt.py (traffic-brain screening tool)"},
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        sys.exit(f"HTTP error from FDOT service: {exc.code} {exc.reason}")
    except urllib.error.URLError as exc:
        sys.exit(f"Could not reach FDOT service: {exc.reason}")
    except json.JSONDecodeError:
        sys.exit("FDOT service returned a non-JSON response (service may be down).")
    if "error" in data:
        sys.exit(f"FDOT service error: {data['error'].get('message', data['error'])}")
    return data


def fetch_all(where: str, limit: int | None) -> list[dict]:
    rows, offset = [], 0
    while True:
        want = PAGE_SIZE if limit is None else min(PAGE_SIZE, limit - len(rows))
        if want <= 0:
            break
        data = fetch_page(where, offset, want)
        feats = data.get("features", [])
        rows.extend(f["attributes"] for f in feats)
        offset += len(feats)
        if not data.get("exceededTransferLimit") or not feats:
            break
    return rows


def main() -> None:
    ap = argparse.ArgumentParser(
        description="Pull FDOT AADT segments for a county from the FDOT Open "
                    "Data Hub (screening-level; official values live on "
                    "Florida Traffic Online).")
    ap.add_argument("--county", required=True,
                    help="County name (e.g. Hillsborough) or 2-digit FDOT county code (e.g. 10)")
    ap.add_argument("--route", help="Filter: roadway ID or text matched against segment descriptions")
    ap.add_argument("--limit", type=int, help="Max records to fetch")
    ap.add_argument("--out", help="Output CSV path (default: aadt_<county>.csv)")
    args = ap.parse_args()

    where = build_where(args.county, args.route)
    print(f"Querying FDOT AADT layer where {where} ...")
    rows = fetch_all(where, args.limit)
    if not rows:
        sys.exit("No records returned — check the county name/code (and route filter).")

    out_path = args.out or f"aadt_{args.county.strip().lower().replace(' ', '_')}.csv"
    with open(out_path, "w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(rows)

    aadts = [r["AADT"] for r in rows if isinstance(r.get("AADT"), (int, float))]
    print(f"\n{len(rows)} segments -> {out_path}")
    if aadts:
        print(f"AADT range {min(aadts):,} - {max(aadts):,} "
              f"(year {rows[0].get('YEAR_')})")

    print(f"\n{'COSITE':<8} {'ROADWAY':<10} {'AADT':>8}  {'K':>5} {'D':>5} {'T':>5}  FROM - TO")
    print("-" * 100)
    for r in rows[:10]:
        seg = f"{(r.get('DESC_FRM') or '')[:30]} - {(r.get('DESC_TO') or '')[:30]}"
        print(f"{r.get('COSITE',''):<8} {r.get('ROADWAY',''):<10} "
              f"{r.get('AADT') or 0:>8,}  {r.get('KFCTR') or 0:>5} "
              f"{r.get('DFCTR') or 0:>5} {r.get('TFCTR') or 0:>5}  {seg}")
    if len(rows) > 10:
        print(f"... and {len(rows) - 10} more (see CSV)")
    print("\nScreening-level only - verify against Florida Traffic Online for design/reports.")


if __name__ == "__main__":
    main()

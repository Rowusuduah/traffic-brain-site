---
tags: [type/workflow, domain/code]
title: "Starter Automation Projects (each = a code-script note when shipped)"
description: Payoff-ordered build list for traffic automation scripts — plus the first shipped tool, a stdlib-only FDOT AADT puller.
---
Ordered by payoff-per-effort; ✔ = you've effectively built it — formalize + verify + share:
1. ✔ **Traffic volume chart generator** (counts → per-intersection hourly charts) — generalize beyond the one workbook; team-ready CLI.
2. **TMC sheet cleaner/balancer:** vendor CSVs → standard tab + node-balance checks flagged.
3. ✔ **Crash summary generator:** S4A CSV → year/severity/type tables + charts + top-locations map (folium).
4. **PDF table extractor:** old studies/agency PDFs → dataframes (pdfplumber; QC prints).
5. **Project folder + file-namer:** one command scaffolds [[File Naming and Project Folders]] structure.
6. **Trip-gen calculator:** rates table + IC/pass-by stages → report-ready table (mirrors [[Trip Generation - Internal Capture and Pass-By]]).
7. **Parking study workbook builder + ULI QA/QC script:** re-derives ULI matrix independently and diffs vs the analyst workbook — the definition of a second-method check.
8. ✔ **KML/KMZ ↔ GIS converter** (your parser, packaged).
9. **Agency reference DB:** scrape/refresh your `03 Agencies` link lists, flag dead URLs monthly (feeds [[Standards Update Tracker]]).
10. **Comp-sites database:** comp-site note frontmatter → searchable table (Dataview does v1 free).
11. **Countermeasure/CMF lookup:** local CSV of your vetted CMFs with star/context fields.
12. **Excel QC bot:** opens workbook, checks sum-ties/broken links/hidden errors, prints report.

## Shipped: FTO AADT puller
First one actually in the repo: [`tools/fto_aadt.py`](https://github.com/Rowusuduah/traffic-brain-site/blob/v4/tools/fto_aadt.py). Stdlib-only Python — hits FDOT's Open Data Hub AADT feature service (the TDA "Annual Average Daily Traffic" layer on services1.arcgis.com) and pulls every segment for a county: station (COSITE), roadway ID, from/to descriptions, AADT, year, and K/K100/D/T factors. Writes a CSV and prints a quick summary table so you can eyeball ranges before opening anything.

Usage: `python tools/fto_aadt.py --county Hillsborough` (county name or 2-digit FDOT code; add `--route "I-275"` to filter, `--limit N` to cap, `--out file.csv` to name the output).

Caveat that goes on everything downstream: this is **screening-level** — the current-year GIS event layer, great for scoping and sanity checks; official published AADT and historical counts come from Florida Traffic Online. Extending it is mostly swapping the layer URL — the same query/paginate skeleton works for any FDOT hosted layer (historical AADT, TMSCOUNT stations, RCI), so this doubles as the template for #9's agency-data refreshers.

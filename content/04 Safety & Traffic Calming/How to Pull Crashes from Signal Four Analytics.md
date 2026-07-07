---
tags: [type/workflow, domain/safety, src/official, status/verify]
link: https://signal4analytics.com
source: Signal Four Analytics (UF GeoPlan / FDOT) — FL crash records
last-checked: 
---
## Summary

S4A is Florida's crash-query front end (long/short form reports, geocoded). Standard pull = 5 most recent complete years, corridor or intersection polygon, export CSV + report PDFs for the fatal/serious.

## When to use

Any safety study, TIA safety section, calming justification, corridor screening.

## Steps

1. Define study geography FIRST (writing: "[Route] from X to Y incl. intersections within 250 ft" — record exactly; reviewers ask). Draw polygon/buffer accordingly.
2. Date range: 5 complete calendar years (note if latest year is provisional/incomplete — S4A flags data currency).
3. Filters: on/off system as needed; keep both long & short forms unless told otherwise; note S4A's non-redacted access rules (user agreement) — treat person data as confidential.
4. Export: CSV of all records + summary dashboards; save raw export untouched (`_RAW`), work on a copy.
5. Immediately log in project note: pull date, geography definition, years, filters. This paragraph goes verbatim into the report methodology.
6. Spot-verify 3 crashes against report PDFs (location snapping errors are common near interchanges/parallel roads).

## Free companions

- [FDOT SSOGis Crash Query Tool](https://fdotewp1.dot.state.fl.us/ssogis/home.aspx) — the no-login alternative when you don't have an S4A agreement: query By Shape or By Value, up to 5,000 records per public pull, plus ARCA/CRASH project layers
- [FLHSMV Crash Dashboard](https://www.flhsmv.gov/traffic-crash-reports/crash-dashboard/) — topline statewide stats from the official records custodian for report narratives; full long-form reports purchasable after the confidentiality window
- [FDOT crash-records explainer](https://www.fdot.gov/Safety/safetyengineering/crash-data.shtm) — who holds what, the 60-day exemption under s.119.07 F.S., and what's shareable; read this before forwarding raw records to a client.

## Cleaning gotchas

Duplicate report numbers; crashes geocoded to wrong parallel facility; "SR/US/local name" aliases splitting one corridor; intersection-vs-segment assignment near ramp termini.

## Example application

A recent corridor safety pull followed exactly this shape — fold the cleaning scripts it produced into [[Starter Automation Projects]].

**Cross-links:** [[How to Summarize 5-Year Crash Data]] · the Signal Four entry in [[MOC - Data Sources]]

> [!question] Practice question
> A crash shows on the frontage road but narrative says mainline — which controls, and what do you document?

> [!warning] QA/QC reminder
> Geography definition + pull date recorded, or the pull didn't happen.

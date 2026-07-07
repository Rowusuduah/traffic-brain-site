---
tags: [type/workflow, domain/safety, src/official, status/verify]
link: https://signal4analytics.com
source: Signal Four Analytics (UF GeoPlan / FDOT) — FL crash records
last-checked: 
---
# ★ How to Pull Crashes from Signal Four Analytics
**Summary:** S4A is Florida's crash-query front end (long/short form reports, geocoded). Standard pull = 5 most recent complete years, corridor or intersection polygon, export CSV + report PDFs for the fatal/serious.
**When to use:** any safety study, TIA safety section, calming justification, corridor screening.

**Steps**
1. Define study geography FIRST (writing: "SR 78 from X to Y incl. intersections within 250 ft" — record exactly; reviewers ask). Draw polygon/buffer accordingly.
2. Date range: 5 complete calendar years (note if latest year is provisional/incomplete — S4A flags data currency).
3. Filters: on/off system as needed; keep both long & short forms unless told otherwise; note S4A's non-redacted access rules (user agreement) — treat person data as confidential.
4. Export: CSV of all records + summary dashboards; save raw export untouched (`_RAW`), work on a copy.
5. Immediately log in project note: pull date, geography definition, years, filters. This paragraph goes verbatim into the report methodology.
6. Spot-verify 3 crashes against report PDFs (location snapping errors are common near interchanges/parallel roads).

**Cleaning gotchas:** duplicate report numbers; crashes geocoded to wrong parallel facility; "SR/US/local name" aliases splitting one corridor; intersection-vs-segment assignment near ramp termini.
**Example application:** your Lee SR-78 / Polk US-92 corridor reports followed exactly this shape — fold those cleaning scripts into [[Starter Automation Projects]].
**Cross-links:** [[How to Summarize 5-Year Crash Data]] · [[T - Data Source]] entry in [[MOC - Data Sources]]
**Practice question:** a crash shows on the frontage road but narrative says mainline — which controls, and what do you document?
**QA/QC reminder:** geography definition + pull date recorded, or the pull didn't happen.

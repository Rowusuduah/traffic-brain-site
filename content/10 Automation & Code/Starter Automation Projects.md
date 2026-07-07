---
tags: [type/workflow, domain/code]
title: "Starter Automation Projects (each = a code-script note when shipped)"
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

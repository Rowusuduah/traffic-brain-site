---
tags: [type/reference, domain/software]
---
**Core toolkit:** XLOOKUP / INDEX-MATCH · SUMIFS/COUNTIFS · pivot tables · dynamic arrays (FILTER/UNIQUE/SORT) · data validation dropdowns · conditional formatting for QC flags · Power Query for count/crash file ingestion (the underused superpower) · charts standards (your chart-forward, minimal-text style already works — systematize it as a template workbook).
**Traffic workbooks to templatize:** TMC summary & balancing · crash summary tabs (auto tables from S4A CSV) · trip-gen calculator (rates table + IC/pass-by stages) · turn-lane/queue checker · parking occupancy + accumulation curve · ULI shared parking matrix ([[ULI Shared Parking Calculation]]) · utilization/timesheet mirrors.
**QC formulas pattern:** every workbook gets a CHECKS tab — sum ties, cross-tab reconciliation, out-of-range flags, broken-link detector — green wall or it doesn't ship.
**Version control:** date-suffixed saves + a changelog cell; VBA/macros documented in code-script notes; you already automate via openpyxl — decide per task: formulas (reviewer-transparent) vs Python (scale) and note the choice.

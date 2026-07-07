---
title: "10 Automation & Code"
aliases: ["MOC - Automation"]
tags: [type/reference, domain/code]
description: "Python stack and iron rules for traffic automation — pandas, openpyxl, geopandas, PDF table extraction, and the ship list."
---
*Python that survives QA/QC — the stack, the ship list, and the iron rules.*

**Your existing edge — port it in week 1:** openpyxl chart-generation (40-intersection volume charts), S4A crash-cleaning scripts, Overpass/OSM query patterns, ArcGIS REST pulls, KMZ parsing. Each becomes a code-script note with run instructions + a verified-against-manual date.
**Stack for this job:** pandas/numpy · openpyxl (+ xlwings when Excel-live needed) · matplotlib (agency-style figure template!) · geopandas/shapely/folium · requests/BeautifulSoup (respect robots/ToS; public data only) · pdfplumber/camelot for PDF tables · python-docx for report shells · pathlib/os for file ops.
**Ship list:** [[Starter Automation Projects]].
**Iron rules:** raw data immutable (`_RAW` never edited) · scripts print their assumptions · every automated output hand-verified once against manual method before trusted · code that touches deliverables gets a second pair of eyes like any calc · client data never leaves approved environments ([[AI Usage Rules]] applies to code assistants too).

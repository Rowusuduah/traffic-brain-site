---
tags: [type/reference, domain/data, status/verify]
last-checked: 
---
# MOC — Data Sources (Florida consultant's shelf)
Spawn a full [[T - Data Source]] note the first time you actually pull from one; until then this table is the index. ALL links `#status/verify` on first use; date them.

| Source | Use for | Format | Watch-outs |
|---|---|---|---|
| **Signal Four Analytics** (signal4analytics.com) | FL crash records, geocoded | web query → CSV/PDF | geocoding snaps; latest-year completeness; access agreement/privacy — [[How to Pull Crashes from Signal Four Analytics]] |
| **FDOT Traffic Online / Traffic Data** | AADT, K/D/T factors, seasonal factors, count stations | web map/CSV | station ≠ your segment; factor category choice matters |
| **FDOT RCI** (Roadway Characteristics Inventory) | lanes, functional class, features on SHS | GIS/db extracts | SHS only; field-verify vintage |
| **FDOT Straight-Line Diagrams** | corridor features by milepost | PDF/app | historic vintages vary |
| **FDOT Open Data Hub** (gis-fdot.opendata.arcgis.com) | statewide GIS layers | REST/shp/GeoJSON | layer metadata before trusting |
| **County GIS portals** | parcels, centerlines, signals, sidewalks | REST/shp | schema differs per county — note per agency |
| **MPO/TPO data** | LRTP/TIP, model outputs, counts, safety dashboards | varies | ask for select-link protocol |
| **Census / ACS** | population, commuting (means, times) | data.census.gov API | margins of error on small geos |
| **LEHD / OnTheMap** | job flows O-D | web/CSV | modeled, not counted |
| **OpenStreetMap / Overpass** | networks, features (your stop-sign pulls) | OSM/JSON | community data — screening only |
| **NHTSA FARS** | fatal-crash national details | query/CSV | fatal-only; FL cases cross-check S4A |
| **Google Earth/Maps + Street View** | desk field review, historical imagery | — | imagery dates! cite them on figures |
| **Agency dashboards** (Vision Zero, crash, calming pages) | context, HIN, program status | web | screenshots dated; methodology varies |
| **Public study examples** (agency project pages) | comp studies, accepted formats | PDF | class-4 sources — style guide, not authority |
**Data ethics line:** crash records contain personal data — minimum necessary, secure handling, nothing identifying in deliverables.

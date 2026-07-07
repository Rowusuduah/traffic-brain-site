---
title: "11 Data Sources"
aliases: ["MOC - Data Sources"]
tags: [type/reference, domain/data]
description: "Where counts, crash data, GIS layers, and travel-time data live — with the pull procedures"
---
*The Florida consultant's data shelf. Spawn a full source note the first time you actually pull from something new; until then this table is the index.*

**Pull procedures:** [[How to Pull AADT and K-D-T Factors from Florida Traffic Online]] ★ · [[How to Pull Crashes from Signal Four Analytics]]

| Source | Use for | Format | Watch-outs |
|---|---|---|---|
| **Signal Four Analytics** | FL crash records, geocoded | web query → CSV/PDF | geocoding snaps; latest-year completeness; access agreement/privacy — [[How to Pull Crashes from Signal Four Analytics]] |
| [[Florida Traffic Online (FTO)]] | AADT, K/D/T factors, count stations | web map/CSV | station ≠ your segment; factor category choice matters |
| [[FDOT Traffic Data (TDA)]] | bulk downloads, handbooks, bike/ped counts | mdb/shp/CSV/PDF | annual stats post ~April; cite handbook editions |
| [[FDOT Open Data Hub]] | statewide GIS layers (AADT, RCI, functional class, crashes) | REST/shp/GeoJSON | layer metadata before trusting; RCI = SHS only, field-verify vintage |
| [[FDOT Straight-Line Diagrams (SLD)]] | corridor features by milepost | PDF/app | historic vintages vary |
| [[County & MPO Count Programs (Tampa Bay)]] | local-road AADT, HIN multimodal counts | web map/PDF | methodology differs from FDOT; Pinellas is PDF-only |
| [[NPMRDS Analytics (RITIS)]] | travel time, speed, reliability on NHS | web analytics → CSV | free login for agency work; probe averages ≠ spot speeds |
| [[FL511]] | live closures, incidents, cameras | web | live-only — screenshot and date; check before counts |
| [[FDOT Source Book]] | citable statewide/MPO performance trends | web report | cite edition year + measure |
| [[Florida Transit Information System (FTIS)]] | GTFS, transit GIS, NTD ridership | GTFS/GIS/query | check registration terms; GTFS drops into GIS |
| [[Florida Geographic Data Library (FGDL)]] | 600+ layers incl. historical vintages | shp/viewer | republished — FGDL copy can lag source agency |
| [[Florida Geospatial Open Data Portal (Florida GIO)]] | cross-agency layers (imagery, elevation, boundaries) | REST/shp | note owning agency + vintage per item |
| [[LEHD OnTheMap]] | job flows O-D, trip distribution checks | web/CSV | modeled, not counted |
| **County GIS portals** | parcels, centerlines, signals, sidewalks | REST/shp | schema differs per county — note per agency in `03 Agencies` |
| **Census / ACS** | population, commuting (means, times) | data.census.gov API | margins of error on small geos |
| **OpenStreetMap / Overpass** | networks, features (your stop-sign pulls) | OSM/JSON | community data — screening only |
| **NHTSA FARS** | fatal-crash national details | query/CSV | fatal-only; FL cases cross-check S4A |
| [[GIS and Google Earth]] | desk field review, historical imagery | — | imagery dates! cite them on figures |
| **Agency dashboards** (Vision Zero, crash, calming pages) | context, HIN, program status | web | screenshots dated; methodology varies |
| **Public study examples** (agency project pages) | comp studies, accepted formats | PDF | class-4 sources — style guide, not authority |

> [!quote] Data ethics line
> Crash records contain personal data — minimum necessary, secure handling, nothing identifying in deliverables.

---
tags: [type/reference, domain/tia, src/official, status/verify]
link: "https://www.fdot.gov/planning/systems/systems-management/quality-level-of-service (FDOT Q/LOS program — handbook, tables, LOSPLAN)"
last-checked: 
description: When multimodal LOS is required, HCM MMLOS vs FDOT Q/LOS, bike facility selection by speed and volume, and ped/transit LOS drivers.
---
Auto delay is one lens. In urban Florida contexts, agencies increasingly ask what the corridor does *to* people walking, biking, and riding the bus — and there are established methods for answering, so "we'll describe it qualitatively" is no longer a free pass.

## When agencies require multimodal measures

- **Context classification:** on the SHS, C4–C6 contexts push complete-streets criteria and multimodal evaluation into scopes — pull the class first per [[FDOT Context Classification]].
- **Local TIA guidelines:** several Tampa Bay agencies' methodologies ask for ped/bike/transit assessment in urban areas, and **mobility-plan / mobility-fee jurisdictions** have replaced vehicle-LOS concurrency with multimodal measures entirely — which measures, and with what method, varies by ordinance, so confirm at the methodology meeting and write it into the memo ([[Methodology Memo Skeleton]]).
- **Safety overlays:** projects on Vision Zero / High Injury Network corridors draw multimodal scrutiny regardless of what the TIA guidelines say — see [[Vision Zero and the HIN (Tampa Bay)]].

## HCM MMLOS vs FDOT Q/LOS

Two families, two purposes — know which one the agency expects before running anything:

- **HCM MMLOS** (lineage: NCHRP 3-70): pedestrian, bicycle, and transit LOS *scores* computed alongside auto in the HCM urban-streets chapters (segments and facilities; ped methods updated in the 7th Edition — `#status/verify` chapter numbers against the edition you cite). Operational and data-hungry (cross-sections, volumes, speeds, signal timing); the letter grade comes from a numeric score, so report both. Lives in [[Highway Capacity Manual (HCM)]] and the software that implements it.
- **FDOT Q/LOS**: the Multimodal Quality/Level of Service Handbook plus the generalized service volume tables — planning-level screening with Florida defaults, the method most comp-plan and concurrency-style checks quote. Lives in [[FDOT Quality LOS Handbook]].

> [!warning]
> Don't mix families in one results table. A planning-level Q/LOS letter next to an HCM operational letter looks like the same measure and isn't — label the method per row, and never defend an operational conclusion with a generalized table.

> [!tip]
> FDOT's **LOSPLAN** suite (ARTPLAN / FREEPLAN / HIGHPLAN) is free and implements HCM-based multimodal methods with Florida defaults — ARTPLAN covers ped, bike, and bus LOS on arterials. Download and details in [[FDOT Quality LOS Handbook]]; it's the no-license way to produce a defensible multimodal number.

## Bike facility selection — the speed/volume ladder

The logic is universal: **as motor-vehicle speed and volume rise, the required separation rises** — shared lane → conventional bike lane → buffered bike lane → separated bike lane or shared-use path. What changes between documents is where the thresholds sit:

- **FDM 223 (Bicycle Facilities)** and **FDM 224 (Shared Use Paths)** — the criteria that control on the SHS, keyed to context classification.
- **FHWA Bikeway Selection Guide** (FHWA-SA-18-077, 2019) — the federal chart relating speed/volume to facility type; good justification language everywhere.
- **NACTO** *Designing for All Ages & Abilities* — the urban-agency version cities like Tampa and St. Pete reference; see [[NACTO Design Guides]].

> [!warning]
> The speed/volume breakpoints differ between FDM, FHWA, and NACTO and get revised — read them from the current edition of whichever document governs your project, never from memory or from this note `#status/verify per project`.

## Pedestrian LOS drivers

- **Segment comfort:** what the models actually score is dominated by the **buffer** (separation width, planted strips, parked cars) and the volume/speed of traffic in the adjacent lane — an 8-ft sidewalk against a 45-mph curb lane scores worse than a 5-ft walk behind a swale.
- **Crossing spacing:** the driver the segment score misses — if safe crossings are far apart, the real ped experience is a long detour or a midblock dash, whatever the letter says. Where spacing is the problem, evaluate a treatment per [[Midblock Crossing Evaluation (RRFB PHB Signal)]].
- **At intersections:** crossing distance (curb-to-curb, number of lanes), signal delay, and conflicts from permissive/RTOR turns. Accessibility is a separate, non-negotiable layer — [[PROWAG and ADA]].

## Transit considerations

- **Frequency dominates** perceived transit LOS; reliability and span come next — infrastructure fixes can't buy back a 60-minute headway.
- The walk **to** the stop is part of transit LOS: sidewalk connectivity, a crossing near the stop, shelter/pad. A TIA that adds a stop without a crossing has created a midblock dash.
- Deep reference: TRB's *Transit Capacity and Quality of Service Manual* (TCQSM, free from National Academies Press); ARTPLAN covers the bus mode at planning level; ridership and route data via [[Florida Transit Information System (FTIS)]].

> [!example]
> Scoping a TIA on a C4 arterial: agency methodology asks for multimodal measures. Pull context class and AADT → screen ped/bike/bus with ARTPLAN (free, Florida defaults) → flag the segment where the bike score collapses (no buffer, high speed) → check the governing selection guidance (FDM 223 on the SHS) for what facility that speed/volume implies → recommend, and note crossing spacing at the two transit stops. One page per mode beats a paragraph of adjectives.

**See also:** [[FDOT Quality LOS Handbook]] · [[Highway Capacity Manual (HCM)]] · [[FDOT Context Classification]] · [[NACTO Design Guides]] · [[Workflow - TIA from Request to Submittal]]

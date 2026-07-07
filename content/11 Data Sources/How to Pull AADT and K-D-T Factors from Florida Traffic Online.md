---
tags: [type/workflow, domain/data, src/official, status/verify]
description: "Step-by-step FTO pull — find the station, grab AADT history, retrieve K/D/T, apply seasonal adjustment (MOCF) without double-counting."
link: "https://tdaappsprod.dot.state.fl.us/fto/"
last-checked: 
---
**Summary:** the standard pull for any Florida study segment — station, AADT history, K/D/T — plus what each factor means and where the factor traps are.

## Find your station
1. Open FTO (link above; if the app URL rots, re-enter via [[FDOT Traffic Data (TDA)]]).
2. Navigate by county + roadway, or search by roadway ID / station number if you have one from an SLD or prior study.
3. Note the station type: **telemetered/continuous** stations count year-round (these generate the factors); **portable** stations are short counts factored up to AADT.
4. Confirm the station's position relative to your study segment — same side of the major intersection/driveway, same cross-section. If it sits across a big trip generator from your site, its volume is not your volume.
5. Record the station number, roadway ID, and year in your project note before anything else.

## Pull AADT history
1. Click the station and pull AADT for the most recent year **and** at least 5 back.
2. Use the history for a growth check: does the implied annual growth rate look like the corridor's story (development, COVID-era dip, new parallel route)? An unexplained jump usually means the station moved or the count method changed — check the station notes.
3. Log whether the published value is a two-way total and any direction notation.

## Pull K, D, T — and what they mean
- **K** — the design-hour factor: the proportion of AADT occurring in the design hour. DHV = AADT × K. FDOT practice uses **standard K** values set by area/facility type rather than a station-measured K30 — confirm which applies to your study in the FDM / Project Traffic Forecasting Handbook `#status/verify standard-K policy and values`.
- **D** — directional distribution: the share of design-hour traffic in the peak direction. DDHV = AADT × K × D.
- **T** — truck factor: trucks as a percentage of traffic. Note which basis FTO reports (daily vs design-hour truck percentages differ — design-hour truck share is typically lower) `#status/verify basis of published T`.

Pull all three from the station (or the assigned factor category), and record the factor category with the values.

## Seasonal adjustment — the MOCF concept
Florida volumes swing seasonally (winter peak in much of the state). FDOT maintains weekly **seasonal factors** from the continuous stations to convert a raw short count to AADT, and a **MOCF (Model Output Conversion Factor)** to convert between peak-season model volumes and AADT `#status/verify current factor tables via the TDA page`. The concept that matters:

- A short count you commissioned is a *seasonal snapshot* — apply the correct week's seasonal factor to state it as AADT.
- Published FTO AADT is **already annualized** — never apply a seasonal factor to it again.

> [!example]
> AADT 42,000, K = 0.090, D = 55%: DHV = 42,000 × 0.090 = 3,780 vph two-way; DDHV = 3,780 × 0.55 ≈ 2,080 vph peak direction. That DDHV is what feeds turn-lane and LOS checks.

> [!warning]
> Factor traps that get studies rejected: applying a measured K from one facility type to another instead of the applicable standard K; stacking seasonal adjustment onto already-annualized AADT; mixing FDOT factors with county counts that were adjusted a different way; and quoting daily T where the analysis needs design-hour trucks. When a factor drives a threshold, cite the factor category and source year.

## QA/QC
Station ID, count year(s), factor category, and each factor's source recorded in the report methodology — a reviewer must be able to re-pull your numbers. If they can't, the pull didn't happen.

**See also:** [[Florida Traffic Online (FTO)]] · [[Turn Lane and Queue Checks]] · [[Workflow - TIA from Request to Submittal]]

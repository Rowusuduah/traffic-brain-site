---
tags: [type/moc]
description: "Work queue for every note tagged status/verify — what to check, against what source, ordered by how badly an error would bite."
---
Every note tagged `#status/verify` carries at least one claim transcribed from a statute, manual, or agency policy that has not been confirmed against the current official text. This queue lists all of them, ordered by consequence: statute numbers and numeric thresholds that feed calculations first, edition names second, URLs and coverage facts last (links are machine-checked monthly, so a dead URL costs minutes, not a deliverable). When you verify a note, log today's date in its `last-checked` frontmatter field and clear or update the inline `#status/verify` markers.

## Tier 1 — Check before first real use

An error here goes straight into a calculation, a review comment, or a statutory citation.

| Note | What to verify | Against |
|---|---|---|
| [[Speed Limits in Florida]] | Statutory defaults (30 business/residence, 55 other) and alteration caps (70 limited-access / 65 rural divided / 60 other state roads) in ss. 316.183, 316.187, 316.189; residential 25/20 mechanics | Ch. 316 F.S. current text on Online Sunshine, this session year |
| [[School Zones in Florida]] | s.316.1895 values: 15–20 mph band, 30-min before/after windows, post-2008 "Speeding Fines Doubled" requirement; identify the separate speed-camera enforcement statute | s.316.1895 F.S. current text; FDOT TEM school-zone chapter |
| [[Signal Warrants (MUTCD Ch 4C)]] | All nine warrant thresholds as summarized — Table 4C-1 volumes, 70% conditions, 20-schoolchildren minimum, 140-ft rail proximity, Warrant 7's 80% volume condition, 300-ft ped adjacency — note text is from the Dec 2023 print | MUTCD 11th Edition **Revision 1 (Dec 2025)** Ch. 4C + FDOT TEM supplements |
| [[Clearance Intervals and Ped Timing]] | Kinematic parameters (t=1.0 s, a=10 ft/s²), agency yellow lookup tables, 3.5 fps FDW speed, 3.0 fps total-crossing check, and where crossing distance D is measured | FDOT TEM / maintaining agency's signal timing policy; MUTCD 4I |
| [[Signal Head and Ped Signal Placement]] | Every transcribed number: 20° cone, 40–180 ft longitudinal, 8-ft face separation, 15–25.6 ft height, 7–10 ft ped-head mounting, 7-s countdown trigger, Table 4D-1/4D-2 values | MUTCD 11th Ed. Rev 1 Ch. 4D/4I/4K; FDOT Standard Plans and TEM (stricter SHS defaults) |
| [[Intersection Sight Distance]] | Time-gap values per maneuver, grade/added-lane adjustments, eye/object heights, decision-point setback; which speed basis (posted/design/85th) the reviewing agency requires | AASHTO Green Book intersections chapter, current edition; FDM ISD section for SHS |
| [[Turn Lane and Queue Checks]] | FDM deceleration/storage table values and the exact FDM section numbers; volume thresholds for adding a turn lane | Current-edition FDM (plus interim RDBs); agency turn-lane guidelines |
| [[Trip Generation - Internal Capture and Pass-By]] | ITE Handbook internal-capture and pass-by procedures; the ~10–25% agency pass-by caps and how pass-by is re-assigned at driveways | ITE Trip Generation Handbook current edition; each reviewing agency's TIA methodology |
| [[How to Pull AADT and K-D-T Factors from Florida Traffic Online]] | Standard-K policy and values, the basis of published T (daily vs design-hour), and current seasonal-factor/MOCF tables | FDM / FDOT Project Traffic Forecasting Handbook; FDOT TDA factor pages |
| [[Countermeasure Selection and CMFs]] | FDOT/agency-accepted crash cost figures by severity; local policy capping combined CMF reduction | FDOT crash cost guidance (KABCO values) and district/agency HSIP policy |
| [[Highway Capacity Manual (HCM)]] | LOS delay thresholds quoted (signalized A≤10 s … F>80 s; unsignalized F>50 s) | HCM 7th Edition exhibit tables |
| [[FDOT Access Management (Rules 14-96 14-97 + Guidebook)]] | Access class 1–7 connection, median-opening, and signal spacing standards before citing any spacing number | Rules 14-96 and 14-97 FAC current text; Access Management Guidebook |
| [[Midblock Crossing Evaluation (RRFB PHB Signal)]] | STEP matrix speed/lane/AADT breakpoints; RRFB and PHB chapter numbers and placement criteria in the current MUTCD | FHWA STEP Guide current tables; MUTCD 11th Ed. Rev 1 Part 4; FDOT TEM enhanced-crossing criteria |
| [[EIT Boundaries Ethics and Liability]] | Current rule text on signing/sealing prohibitions and responsible charge | Ch. 471 F.S. and Rule 61G15 FAC at fbpe.org |

## Tier 2 — Check this quarter

Edition names, adoption status, and process details — wrong here means citing a superseded book or misstating a process, caught at review rather than in the field.

| Note | What to verify | Against |
|---|---|---|
| [[MUTCD]] | Florida adoption status of the 11th Edition per s.316.0745 F.S.; Revision 1 incorporation; current Interim Approvals list | FHWA MUTCD site; FDOT TEM |
| [[FDOT Design Manual (FDM)]] | Current annual edition (Jan cycle) and any RDB/RDM criteria changes since | FDOT FDM page + Roadway Design Bulletins feed |
| [[FDOT Standard Plans]] | Current FY set and interim revisions; that the cited index families (700-series, 711, 102-series, 522-002) still carry those numbers | FDOT Standard Plans page, current FY eBooklet |
| [[Florida Greenbook]] | Current edition and its adoption status under Rule 14-15.002 FAC | FDOT Florida Greenbook page; FAC |
| [[FDOT Traffic Engineering Manual (TEM)]] | Chapter revision dates; the separate Speed Zoning Manual topic number | FDOT TEM page; Traffic Eng & Ops bulletins |
| [[PROWAG and ADA]] | DOJ/USDOT adoption status of the 2023 PROWAG final rule (USDOT transit-stop adoption Dec 2024 already noted) and FDOT implementation | Access Board / Federal Register; FDM ped chapters |
| [[AASHTO Green Book]] | 7th Edition (2018) still current — watch for the 8th | AASHTO store / announcements |
| [[Highway Safety Manual (HSM)]] | 1st Ed. + 2014 supplement still current — watch HSM2 release | AASHTO HSM site |
| [[AASHTO Roadside Design Guide]] | 4th Edition still current | AASHTO store |
| [[ITE Trip Generation]] | 11th Edition still current (ITETripGen web app) and which edition local agencies accept | ITE; agency TIA guidelines |
| [[ITE Parking Generation]] | 6th Edition still current | ITE |
| [[ULI Shared Parking]] | 3rd Edition still current; agency acceptance for reductions | ULI; local parking codes |
| [[Intersection Control Evaluation (ICE)]] | Current ICE Manual edition (2026 = Bulletin 25-02), applicability triggers, Stage 1–3 names, exact roundabout-first policy language | FDOT ICE Manual via current TEO bulletin; TEM |
| [[FDOT Context Classification]] | C1–C6 subcategory labels (C2T, C3R/C3C, C6) as listed | FDOT Context Classification Guide PDF |
| [[Flashing Yellow Arrow (FYA)]] | Ch. 4F section numbers (4F.02/.04/.07/.08) and 4A.04 meanings quoted from the Dec 2023 print | MUTCD 11th Ed. Rev 1 Part 4 |
| [[TTC-MOT Plan Review Checklist]] | 102-series index numbers vs the current-FY Standard Plans; taper formulas/tables; agency lane-closure policy; district approval path | Current FY Standard Plans; MUTCD Part 6; district MOT desk |
| [[PE PTOE RSP Roadmaps]] | FBPE early-PE-exam policy, experience requirements, PTOE eligibility rules — all requirement claims | fbpe.org, ncees.org, tpcb.org |
| [[Standards Update Tracker]] | The tracker's own edition/cycle rows are current — this queue and that tracker should agree | Each linked reference note after its check |

## Tier 3 — Low risk

URLs, coverage/deployment facts, and counts. Links are machine-checked monthly; the rest only misdirects a lookup, never a calculation.

| Note | What to verify | Against |
|---|---|---|
| [[FHWA Resources]] | Current count of Proven Safety Countermeasures ("28-ish") | highways.dot.gov/safety PSC page |
| [[ATSPM Basics]] | Current FDOT/district ATSPM deployment, platform, and public access; active repo location | District traffic ops; OpenSourceTransportation GitHub |
| [[Vision Zero and the HIN (Tampa Bay)]] | Current Hillsborough TPO Action Plan edition and top-corridor study list | planhillsborough.org/vision-zero |
| [[How to Pull Crashes from Signal Four Analytics]] | S4A access/user-agreement rules; SSOGis 5,000-record public limit; the 60-day s.119.07 exemption framing | signal4analytics.com; FDOT crash-records page |
| [[FDOT Straight-Line Diagrams (SLD)]] | SLD Handbook edition (April 2023 cited) and app URL | fdot.gov/statistics/sld.shtm |
| [[County & MPO Count Programs (Tampa Bay)]] | Latest published count years (Hillsborough Spring 2024, Pinellas through 2024) and the ~80 HIN multimodal locations | planhillsborough.org and forwardpinellas.org count pages |
| [[Detection Basics]] | Chapter reference for detection in FHWA-SA-13-027 (cited as Ch. 5) | FHWA Signalized Intersections Guide PDF |
| [[Offsets and Coordination]] | Platoon-dispersion spacing guidance (half to three-quarter mile) — don't quote a threshold from memory | STM2 (NCHRP 812) Ch. 7; MUTCD Warrant 6 text |

**See also:** [[Standards Update Tracker]] — the quarterly cycle that keeps this queue from refilling silently.

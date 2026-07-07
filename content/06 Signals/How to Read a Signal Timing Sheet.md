---
tags: [type/workflow, domain/signals]
source: agency timing sheets; NEMA conventions; MUTCD Part 4
link: "request current sheets from the maintaining agency — D7 / county / city per road"
last-checked: 
---
**Summary:** the timing sheet is the signal's DNA: phases, intervals, recalls, detector mapping, and TOD coordination plans. Reading one cold is a rite of passage; here's the decode order.

**Decode order**
1. **Phase diagram:** NEMA standard — odd = lefts, even = through (2/6 typically main street); ring-barrier shows concurrency (1+5, 2+6 | 3+7, 4+8).
2. **Per-phase intervals:** min green · passage/extension · max1/max2 · **yellow** · **all-red** · walk · FDW (ped clearance).
3. **Recalls:** min recall (always serves min green) · max recall (serves to max — effectively "pretend constant demand") · ped recall · soft recall. Existing-conditions models must mirror these.
4. **Detection table:** which loops/video zones call/extend which phase; delay/extend settings; failed detectors = phase behaves like recall (field notes matter!).
5. **Coordination block per TOD plan:** cycle length · splits (must sum to cycle) · **offset** (start-of-green ref vs adjacent signals) · **reference phase** (usually coordinated 2+6) · permissive periods. Sheet times often in seconds AND percent — check units.
6. **Ped timing check:** WALK ≥ 7 s typical (4 s min conditions) `#status/verify`; FDW ≥ crossing distance ÷ 3.5 ft/s (MUTCD); confirm curb-to-curb distance used.
7. **Clearance check:** see [[Clearance Intervals and Ped Timing]] — recompute one approach; flag if sheet < computed.

**Example application:** before coding Existing in Synchro, transcribe the sheet into the model and note sheet date + plan # in assumptions.
**Cross-links:** [[Synchro QAQC Checklist]] · offsets and coordination (planned note) · unclear fields → ask a senior, with the sheet in hand
**Free companions:** [[Signal Timing Manual (STM2) and Free Training|STM2 (NCHRP 812, free PDF)]] — the chapter-by-chapter explanation of how every value on the sheet was developed.
**Practice question:** splits for phases 2,4,6,8 read 42/28/42/28 on a 140 s cycle — what's wrong?
**QA/QC reminder:** never "optimize" existing conditions — model what the sheet says, cite sheet date.

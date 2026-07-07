---
tags: [type/calculation, domain/tia, domain/design, status/verify]
source: FDM (intersections chapter) for SHS; agency/Greenbook otherwise; HCM/Synchro for queues
link: "https://www.fdot.gov/roadway/fdm (FDOT Design Manual)"
last-checked: 
title: "Turn Lane & Queue Checks"
---
## Turn lane length = deceleration + storage

(+ taper per standard): decel from FDM tables by design speed `#status/verify FDM section`; storage ≥ 95th-percentile queue (Synchro/HCM/SimTraffic per agency preference) and ≥ agency minimum.

## Warrant to ADD a turn lane

Volume-based thresholds (FDM/NCHRP-derived charts; agency guidelines) — check before designing length.

## Queue checks that bite

- 95th queue vs storage bay (spillback into through)
- vs upstream driveway/intersection spacing
- internal site queues at gates/drive-thru vs throat length (**throat length** is the #1 site-plan comment — measure from ROW to first internal conflict)

## Worked habit

One-page calc per movement: volumes → queue source → storage provided vs required → verdict.

> [!question] Practice question
> Dual lefts, 95th queue 310 ft, bays 250 ft, 200 ft to upstream driveway — enumerate the failures and two fixes.

> [!warning] QA/QC reminder
> Queue SOURCE named (Synchro 95th? HCM? SimTraffic max?) — mixing sources across a table is an audit finding.

**See also:** [[FDOT Design Manual (FDM)]] · [[Workflow - TIA from Request to Submittal]] · [[Synchro QAQC Checklist]]

---
tags: [type/checklist, domain/software, domain/tia]
applies-to: every Synchro network before results leave your desk
link: "https://www.cubic.com/transportation/products/intelligent-transportation-solutions/intersection-optimization/synchro-studio (Synchro Studio — Cubic/Trafficware)"
last-checked: 
---
**Source:** HCM-aligned practice + accumulated review pain. **When to use:** existing AND future scenarios, every submittal.

**Volumes & demand**
- [ ] Volumes match count sheets/balancing figure exactly (spot 3 nodes); AM/PM not swapped
- [ ] PHF: measured for existing (per approach if agency wants); future per agency policy — SOURCED, not default 0.92 by habit
- [ ] Heavy vehicle % from counts; growth applied per memo
**Geometry & lanes**
- [ ] Lanes/storage/taper = field/plan truth (Street View pass); storage lengths real, not defaults
- [ ] Lane utilization, shared/exclusive assignments sane; RTOR allowed only where legal/geometry supports
**Signals**
- [ ] Existing timing = timing sheet (cycle, splits, offsets, ref phase, recalls, ped times + walk/FDW) — cite sheet date
- [ ] Coordinated? reference phase & offsets consistent along corridor; actuated params (min/max/passage) not left at defaults for existing
- [ ] Future timing method stated (optimized? capped cycle? agency policy?)
**Model settings**
- [ ] Ideal sat flow, area type, link speeds per agency/HCM basis; HCM vs Percentile results — reporting the one the agency asked for
- [ ] Unserved/spillback flags reviewed — a pretty LOS with unmet demand is fiction
**Outputs**
- [ ] Report exports match tables in the doc (no stale re-runs); queues: source labeled ([[Turn Lane and Queue Checks]])
- [ ] File hygiene: scenario naming, one change-log note per version
**Free companions:** [FHWA Traffic Analysis Toolbox](https://ops.fhwa.dot.gov/trafficanalysistools/) — Volume III calibration/validation thresholds are what a reviewer cites when your SimTraffic queues face scrutiny; earlier volumes cover picking the right tool before defaulting to Synchro.
**Practice question:** delay dropped 20 s between v3 and v4 with "no changes" — list the six settings you diff first.
**QA/QC reminder:** your name goes on the assumptions page; if a setting isn't sourced, it's not done.

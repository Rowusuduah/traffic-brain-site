---
tags: [type/workflow, domain/tia]
description: "12-step TIA workflow from methodology memo to comment-cycle close-out, with QA/QC gates at every analysis stage."
link: "https://www.fdot.gov/planning/systems/systems-management/site-impact-analysis (FDOT Multimodal Transportation Site Impact Handbook)"
last-used: 
---
**Trigger:** development application meets agency study threshold (trips/size — check agency note).
**Inputs:** site program, site plan w/ access, agency TIA guidelines, prior studies nearby.

1. **Methodology memo FIRST** (scope insurance): study area/intersections, count plan, trip gen (LU codes, IC/pass-by caps), growth rate & committed devs, horizon years, analysis method (HCM/Synchro settings), LOS standards. Get written agency concurrence.
2. Data: TMCs at study intersections (typical Tue–Thu, school in session), tubes for dailies; apply FDOT seasonal factor `#status/verify`; photograph existing lane geometry & control.
3. Existing conditions: code Existing per field + timing sheets ([[How to Read a Signal Timing Sheet]]); calibrate to observed queues where required; [[Synchro QAQC Checklist]] pass.
4. Trip generation table: [[Trip Generation - Internal Capture and Pass-By]] — show gross → IC → pass-by → net external, with sources per line.
5. Distribution/assignment: justify % (existing patterns, model select-link, gravity logic); arrow figure; volumes balance node-to-node.
6. Future No-Build = existing × growth + committed; Future Build = No-Build + project.
7. Operations: LOS/delay/queue per scenario; flag 95th-percentile queues vs storage ([[Turn Lane and Queue Checks]]).
8. Mitigation where standards fail: turn lanes, signal mods (warrants!), timing, access changes; re-run Build-with-Mitigation.
9. Site access review: driveway spacing/corner clearance vs access class; internal queue storage at gates/drive-thrus.
10. Report assembly per [[MOC - Report Writing]]; every figure = its table = its text.
11. QA/QC full [[QAQC System]] pass; assumptions appendix from the project note.
12. Submit → comment cycle via a comment-response matrix → resubmit; archive per [[Project Close-Out and Lessons]].

**Example application:** save each accepted methodology memo — the next one starts at 70%.
**Practice question:** agency demands a 2% growth rate but counts show decline — what goes in the memo, and who decides?
**QA/QC reminder:** volumes balance across the network in every scenario; PM ≠ AM copy-paste.

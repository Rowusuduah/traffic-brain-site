---
tags: [type/calculation, domain/signals, status/verify]
source: ITE kinematic method; MUTCD; agency policy governs — verify FL/agency values
last-checked: 
title: "Clearance Intervals (Y + AR) & Ped Timing"
---
**Yellow (ITE kinematic):** y = t + v/(2a + 64.4g). Legend: t = perception-reaction time (typically 1.0 s); v = approach speed in ft/s; a = deceleration (typically 10 ft/s²); g = grade as a decimal (downgrade negative). Practical FL range ~3.0–6.0 s by speed; many agencies use posted-speed lookup tables — the AGENCY TABLE governs `#status/verify`.
**All-red:** AR = (W + L) / v — intersection width + vehicle length (≈20 ft) over speed; commonly 1–3 s.
**Ped:** WALK (≥7 s typ.) + FDW = D/3.5 fps; verify agency use of 3.0 fps total-crossing check and where D is measured (curb-to-curb vs to far side) `#status/verify`.
**Worked example:** 45 mph (66 ft/s), flat: y ≈ 1.0 + 66/20 = 4.3 s. W=90 ft: AR ≈ (90+20)/66 ≈ 1.7 s.
**Common mistake:** using design speed instead of the speed the agency's policy specifies (posted vs 85th) — ask which.
**QA/QC:** recomputed vs sheet; discrepancies flagged to PE, never silently "fixed."
**Free companions:** [[Signal Timing Manual (STM2) and Free Training|FHWA Signalized Intersections Guide (FHWA-SA-13-027) and STM2]] — free PDFs covering clearance and ped-timing practice behind these formulas.

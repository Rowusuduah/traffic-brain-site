---
tags: [type/reference, domain/signals, src/official, status/verify]
link: "https://mutcd.fhwa.dot.gov/kno_11th_Edition.htm"
last-checked: 
description: "One head per lane, the 20-degree cone, 40-180 ft longitudinal limits, ped head and APS rules, and the plan-review comments you'll write."
---
Head placement is one of the most Standard-heavy corners of MUTCD Part 4 — Chapters 4D (design features), 4E (indications), 4I (pedestrian features), and 4K (APS) in the 11th Edition. Placement errors are cheap to fix on paper and expensive to fix on a mast arm, so this is prime plan-review territory.

## Vehicle heads: how many

- Baseline (4D.05): minimum **two primary signal faces** for the through movement (or the major turning movement if there's no through).
- Approaches at **45 mph or higher** (posted, statutory, or 85th-percentile; new/reconstructed signals): Table 4D-1 scales faces with lanes — effectively the **one-head-per-lane era**. Three through lanes → three primary faces (≥2 overhead); each mandatory turn lane gets its own overhead face; **all primary faces far side**; all faces get backplates. The MUTCD says to consider the same layout on any 4+ lane urban arterial even under 45 mph.
- Far-side overhead placement is called out as safer — fewer late entries on yellow, fewer red-light runs — than post-mounted or diagonal-span placement.
- Two or more left-turn lanes with a separate left phase → two or more left-turn faces.

## Visibility: the cone and the window

The concept: a driver approaching, and a driver stopped first-out at the stop bar, must both have heads comfortably in view.

- **Lateral — the 20° cone (4D.07):** at least one (preferably both) primary faces must sit within lines drawn ±20° from the approach centerline, measured from a point **10 ft behind the stop line**. Required through faces must be ≥ **8 ft apart** horizontally.
- **Longitudinal (4D.08):** primary faces between **40 and 180 ft** beyond the stop line; closer than 40 ft they're too high in the stopped driver's windshield, farther than 180 ft you must add a near-side supplemental face (consider one from 150 ft).
- **Approach visibility (4D.06):** the two primary faces should be continuously visible from a minimum sight distance keyed to 85th-percentile speed (Table 4D-2); if geometry blocks it, add a Signal Ahead sign, optionally with a warning beacon.
- **Height (4D.09):** bottom of housing ≥ 15 ft over the roadway; top ≤ 25.6 ft.

## Ped signal heads

- **Placement/height (4I.03):** mount with the bottom of the housing **7–10 ft above sidewalk**, positioned for maximum visibility at the beginning of the controlled crosswalk — ped heads live on the **far end** of the crossing, facing the waiting pedestrian. Physically separate them from vehicle heads on a shared pole.
- **Countdown (4I.04):** required wherever the pedestrian change interval exceeds **7 seconds** — i.e., nearly every crosswalk. The countdown runs only during the flashing hand (never during walk or the vehicle red clearance) and goes dark at zero. If the countdown logic lives in a separate device, a retiming change can silently desynchronize it — check.

## APS and where PROWAG pushes

- **Chapter 4K:** accessible pedestrian signals give audible + vibrotactile walk indications from the push button housing, with a locator tone; speech walk messages are required when two buttons on a corner are under 10 ft apart or share a pole; a two-stage crossing with a median needs its own detector in the median.
- **Button placement (4I.05, 4K.02):** close to the crosswalk line furthest from the intersection center and close to the curb ramp, reachable from a level all-weather surface.
- **PROWAG:** the Access Board's final rule (Federal Register, Aug 8, 2023) requires APS on **new and altered pedestrian signals** — and "altered" reaches controller/software changes and head replacements, not just full rebuilds. USDOT adopted PROWAG for transit stops in the public right-of-way (Dec 2024); check current DOJ/USDOT adoption status and FDOT implementation before citing it as mandatory `#status/verify`. Practical takeaway: any Florida project touching signal heads or the controller should scope and price APS.

## Common plan-review comments

- Primary faces outside the 20° cone, or under 40 ft / over 180 ft from the stop line with no supplemental — the stopped driver literally can't see the indication under the visor.
- **Missing backplates** on a ≥45 mph approach; missing **retroreflective borders** — backplates with retroreflective borders are an FHWA **Proven Safety Countermeasure** (roughly a 15% reduction in total crashes at signalized intersections, and the heads stay findable in a power outage — a Florida hurricane bonus). Cheap retrofit; flag it every time.
- Left-turn arrows shown in a near-right supplemental face (prohibited by 4D.07) — check every supplemental head's display.
- Ped head not aligned with its crosswalk, or blocked by signs/landscaping; push button not reachable from a level landing; APS omitted on an "alteration" project.
- Faces for adjacent approaches at a skewed intersection without louvers/visibility-limited heads — drivers see the wrong signal first.

> [!warning]
> Every number above (20°, 40/180 ft, 8 ft, 7–10 ft, 7 s, 15 ft, Table 4D-1/4D-2 values) is transcribed from the Dec 2023 11th Edition `#status/verify against Revision 1 (Dec 2025)` — reread the current text plus FDOT Standard Plans and TEM before you write the review comment. FDOT's defaults (e.g., one head per lane on the SHS) can be stricter than the MUTCD floor.

> [!tip]
> Free Part 4 PDF at the MUTCD 11th Edition page (link above). FHWA's Proven Safety Countermeasures pages and *Signalized Intersections: An Informational Guide* (FHWA-SA-13-027) are the free backup you attach when an agency pushes back on backplate comments.

**See also:** [[PROWAG and ADA]] · [[Clearance Intervals and Ped Timing]] · [[Flashing Yellow Arrow (FYA)]]

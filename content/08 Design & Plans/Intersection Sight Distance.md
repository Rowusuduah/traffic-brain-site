---
tags: [type/calculation, domain/design, status/verify]
source: AASHTO Green Book (intersections chapter) for cases/derivation; FDM for SHS criteria
last-checked: 
description: ISD vs SSD, departure sight triangles (left/right/crossing from stop), eye-object heights, field procedure, the landscaping comment.
---
**ISD ≠ SSD.** Stopping sight distance is the along-the-road minimum every road must give a driver to stop; **intersection sight distance** is what a driver at a minor approach needs to SEE along the major road to depart safely. ISD is almost always longer. Meeting SSD but failing ISD is a real (and common) condition — flag both separately.

**The departure sight triangle (stop control):** vertex at the minor-road driver's eye, legs along the minor approach setback and along the major road. The Green Book builds ISD from a **time gap** (seconds a departing driver needs) converted to distance at the major-road **design speed** — gap values differ by maneuver and vehicle, with adjustments for grades and added lanes crossed `#status/verify gap values & adjustments in current Green Book edition; FDM section for SHS criteria`. Three cases you'll actually run:
- **Left turn from stop** — longest gap (cross near lanes + accelerate into far side); governs most driveways onto divided roads (check each roadway of a divided highway separately; the median may store the design vehicle or not).
- **Right turn from stop** — shorter gap; look-left leg only, but don't forget bikes/peds approaching from the right.
- **Crossing maneuver** — full crossing of all lanes; governs at full-median openings and 4-leg minor crossings.

**Eye/object conventions:** driver eye height and the opposing **vehicle** object height are set by the Green Book (passenger-car values; higher for trucks as the design vehicle), and the driver's decision point sits a set distance back from the edge of the traveled way — use the book's values, not memory `#status/verify heights & setback distance`. This is why a 2-ft wall can pass and a 4-ft hedge can't.

**Field measurement (two-person):** mark the decision point on the minor approach at the specified setback; observer holds eye-height at that point, rodman walks the major road each direction with a target at object height; record the distance where the target stays continuously visible; repeat both directions, photograph the limiting obstruction. Compare measured vs required at the **appropriate speed** — posted, design, or measured operating speed per the reviewing agency `#status/verify which speed basis your agency requires`.

> [!warning]
> The classic review comment: **landscaping plans and monument signs are drawn by people who never ran ISD.** Plot the sight triangles ON the landscape/signage plan and call out max mature height inside them. "Clear sight triangle to be maintained" as a note without a drawn triangle is an unenforceable comment.

> [!tip]
> Speed input shaky (no posted limit, rural transition, "everyone does 50")? A spot-speed study — or FHWA's free **USLIMITS2** (highways.dot.gov/safety/speed-management/uslimits2) for the speed-zoning question behind it — beats arguing about the right V. See [[Speed Limits in Florida]].

> [!example]
> Driveway (left turn out) onto a 45 mph 4-lane divided road: required ISD = gap time for the left-turn case (plus added-lane adjustment) × 1.47 × 45 `#status/verify` — measure available along the near roadway from the decision point; if a proposed monument sign at the corner clips the triangle, the fix is relocate/lower the sign or restrict the driveway to right-in/right-out. Write all three options in the comment.

**Practice question:** stop-controlled minor street, crest curve 400 ft left of the intersection limits sight to 380 ft, required ISD ≈ 500 ft — list three fixes in order of cost and which one changes the control type.
**QA/QC reminder:** every ISD table states its speed basis, case, edition, and eye/object heights — an unlabeled "sight distance OK" is not a finding.

**See also:** [[AASHTO Green Book]] · [[Turn Lane and Queue Checks]] · [[Speed Limits in Florida]]

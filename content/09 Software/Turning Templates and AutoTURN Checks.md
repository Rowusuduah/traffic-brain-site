---
tags: [type/reference, domain/software, domain/design]
source: AASHTO Green Book design vehicles; FDM/agency for required vehicle; AutoTURN (Transoft)
last-checked: 
description: Picking the design vehicle, running swept-path checks, the failures reviewers catch, and the manual-template fallback.
---
**What:** swept-path analysis — can the design vehicle physically make the turn without hitting anything or leaving its intended path. AutoTURN (in CAD) is the standard tool; the Green Book's turning templates are the source geometry.

## Design-vehicle selection logic

Two different questions — answer both: which vehicle must be **accommodated** (may encroach on other lanes, mount a truck apron), and which must be **designed for** (stays in its lane)? The agency/FDM sets the required vehicle by facility and context `#status/verify agency & FDM requirements`; absent direction, reason from who actually shows up:
- **Site driveways with truck service** (grocery, retail, industrial): the delivery semi — commonly **WB-62** — checked at the driveway throat AND through the internal route to the dock and back out. A driveway that admits the truck but strands it inside is a failed check.
- **Roundabouts / traffic circles**: the design truck on the circulating path (apron use per design intent) plus the **transit bus** if on a route — buses can't use aprons the way trailers do; check the bus stays off them.
- **Fire access**: the local fire marshal's apparatus (aerial/ladder dims vary by department) on every required fire lane and cul-de-sac — this one is a permit condition, not a courtesy `#status/verify local fire code vehicle`.
- Passenger car (P) and single-unit (SU) cover the everyday movements; don't design every corner for the WB-62 — an oversized radius invites high-speed right turns across the crosswalk.

## Where the check happens in review

Site plan / driveway permit review (throat, radii, internal circulation), roundabout and median-U-turn design, bus stop/terminal layouts, MOT detours and temporary routes (trucks through a shifted alignment), and loading-dock approvals. If a reviewer asks "can a truck make that?", the answer is a plotted swept path, not a radius callout.

## Common failures reviewers catch

- **Encroachment** into opposing lanes or adjacent same-direction lanes not flagged as intentional — state the encroachment policy on the exhibit.
- **Wheel over the curb return** — the swept path clears the travel lane but the trailer's rear wheels track over the curb, landscaping, or a ped ramp.
- **Curb-return radius ≠ effective turning radius**: parking lanes, bike lanes, and shoulders widen the effective path; a 25-ft curb return can serve a truck the raw radius says it can't (and vice versa when those lanes disappear).
- Run settings that flatter the design: unrealistically low speed, maximum steering articulation, starting/ending positions no driver would use. Reviewers rerun with defaults.
- Checking only the inbound movement — trucks also leave, reverse into docks, and arrive when the lot is full.

> [!warning]
> AutoTURN proves geometry, not judgment. A movement can "pass" while sweeping the crosswalk where peds stand, or requiring a 3-point maneuver blocking the arterial. Say what the plot means, not just that it fits.

> [!tip]
> **Manual fallback:** the Green Book publishes minimum turning-path templates for each design vehicle — print at the exhibit's exact scale (verify with a scale bar before trusting anything) and trace. Fine for a feasibility answer in a meeting; submittals get the CAD run.

**Practice question:** shopping-center driveway, WB-62 inbound passes but outbound left requires the full opposing approach — three fixes, and which one the access-management reviewer will prefer?
**QA/QC reminder:** every exhibit states vehicle, software version, speed, and lane assumptions in a legend — an unlabeled swept path is unreviewable.

**See also:** [[AASHTO Green Book]] · [[FDOT Access Management (Rules 14-96 14-97 + Guidebook)]] · [[SPM Plan Review Checklist]]

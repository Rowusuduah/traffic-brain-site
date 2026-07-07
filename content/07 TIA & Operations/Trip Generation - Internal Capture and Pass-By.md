---
tags: [type/calculation, domain/tia, status/verify]
source: ITE Trip Gen Manual + Handbook procedures; agency caps govern
link: "https://www.ite.org/technical-resources/topics/trip-and-parking-generation-v2/trip-generation-info/ (ITE Trip Generation Manual)"
last-checked: 
title: "Trip Generation — Internal Capture & Pass-By"
---
## Order of operations (show every stage in the table)

Gross (rate/equation per LU) → − Internal capture (mixed-use trips staying on site; ITE procedure) → − Pass-by (trips already on the adjacent street — they add no NEW volume to the network; at the site they convert existing through trips into driveway turns, so deduct them from the through movement passing the driveways and re-assign them as turns, unless the reviewing agency's methodology directs otherwise `#status/verify`) → = Net new external.

## Rate vs equation

ITE guidance by data quality/size — note which you used and why; agencies sometimes mandate one.

## Caps

Many FL agencies cap pass-by (e.g., ~10–25% by use) and internal capture — the AGENCY table beats ITE defaults; record in agency note.

## The classic reviewer catch

Pass-by trips reduce *new* trips but still turn in/out of driveways — driveway volumes keep them; and they redistribute (in from one direction, out to another).

> [!question] Practice question
> 200 gross PM trips, 10% IC, 30% pass-by on the remainder — net new? driveway total? (200 → 180 external → 54 pass-by → **126 net new**; driveways still see all **180**.)

> [!warning] QA/QC reminder
> Trip-gen table sums audit clean; every % has a source cell (ITE table or agency guideline §).

**See also:** [[ITE Trip Generation]] · [[Workflow - TIA from Request to Submittal]] · [[MOC - TIA and Operations]]

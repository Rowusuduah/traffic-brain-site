---
tags: [type/reference, domain/signals, src/official, status/verify]
link: "https://highways.dot.gov/sites/fhwa.dot.gov/files/2022-06/fhwasa13027.pdf"
last-checked: 
description: "Loops vs video vs radar in Florida weather, presence vs passage, recalls, gap-out vs max-out, and the broken-detection diagnostic."
---
An actuated signal is only as smart as its detection. Half of "the timing is terrible" complaints are actually "a detector is dead." Learn the vocabulary here; read the site-specific values off the maintaining agency's timing sheet.

## Technologies — and the Florida tradeoff

- **Inductive loops:** wire coils sawcut into the pavement. Accurate presence, immune to weather. Die with milling/resurfacing, pavement cracking, and utility cuts — every resurfacing project is a detection project. Ask when the road was last paved before trusting old loops.
- **Video:** cameras on the mast arm, zones drawn in software. No pavement cut, easy to redraw after restriping. Degraded by exactly what Florida delivers daily: blinding afternoon rain, sun glare at dawn/dusk, night contrast, fog, dirty lenses and spiders. Most systems fail "on" (constant call) in bad weather — the safe failure, but it wrecks efficiency.
- **Radar/microwave:** weather-independent, excellent for advance detection on high-speed approaches. Watch for occlusion (a truck shadows the car beside it); stop-bar presence performance has improved but verify with the agency's experience.
- Common hybrid: loops or video at the stop bar + radar upstream for dilemma-zone protection.

> [!tip]
> Free deep dives: FHWA *Traffic Detector Handbook*, FHWA *Signalized Intersections: An Informational Guide* (FHWA-SA-13-027, 2nd Ed. — detection is in Ch. 5 `#status/verify`), and [[Signal Timing Manual (STM2) and Free Training|STM2]] for how detection drives phase timing.

## Presence vs passage

- **Presence:** detector outputs as long as the zone is occupied — stop-bar zones, left-turn calls, queue detection.
- **Passage (pulse):** a brief output as a vehicle crosses — advance detectors that count and extend green.

Related controller setting: **locking vs non-locking memory.** Locking holds a call after the vehicle leaves (needed with pulse detection); non-locking drops it (used with presence, so a right-on-red that clears doesn't call the phase).

## Recalls

- **Min recall:** phase is served every cycle at least to its minimum green, call or no call.
- **Max recall:** controller pretends there's constant demand — phase runs to max every cycle. Legitimate for approaches with no detection; also the standard *fallback when detection fails*.
- **Soft recall:** return to the phase when nothing conflicting is calling (typically the main-street throughs).
- **Ped recall:** walk served every cycle without a button press.

## Extension time, gap-out vs max-out

Each actuation during green extends the phase by the **passage/gap/extension time**. Two ways a green ends:

- **Gap-out:** no new actuation arrives within the gap — demand genuinely ended, the phase terminates efficiently. This is the designed, healthy ending.
- **Max-out:** vehicles kept extending until **max green** hit and the controller forced termination. Occasional max-out at peak is normal; *chronic* max-out means the max is too short, the gap is too long, detection is over-calling — or the approach is simply oversaturated. Max-out also ends green at an arbitrary instant, defeating dilemma-zone protection on fast approaches.

> [!example]
> Side street, gap time 3.0 s. Cars arrive at 2 s headways → each one re-extends; green holds. Headways stretch to 4 s → 3.0 s passes with no actuation → gap-out, green ends within a second or two of the last car. Same street with a failed loop calling constantly → green runs to max every cycle while the main street stacks up.

## Zones by lane type

- **Through lanes:** presence zone at the stop bar to call and hold the phase; on high-speed approaches add advance (passage) detection upstream, placed for dilemma-zone coverage, so green isn't dropped while a platoon is in the decision zone.
- **Left-turn lanes:** presence zone at the stop bar calling the left phase, often with a **delay** setting — where the left runs permissive (FYA), a car that finds a gap and clears during the delay never calls the protected arrow. **Extend/stretch** settings carry fast vehicles across the gap between advance and stop-bar zones.

## The classic diagnostic

Detection breaks → the channel fails constant-call or a tech places **max recall** → that phase maxes every cycle → side street gets long empty greens, arterial queues → the public (and sometimes the client) concludes "the timing is bad" → someone scopes a retiming study. Check detector status *first*: cabinet detector panel, ATMS alarms, or 15 minutes watching whether greens track actual demand. Retiming on top of dead detection is wasted money — the new plan inherits the same constant calls.

## What to check on the timing sheet's detector page

- Channel-to-phase mapping: which detector **calls** and which **extends** each phase.
- Delay and extend values (and whether they change by TOD).
- Presence vs pulse mode; locking vs non-locking memory per channel.
- Failed-detector action: which recall the controller places when a channel is flagged bad.
- Field reality check: compare zones to an aerial and as-builts; if the road was resurfaced after the sheet date, assume the loops are suspect until proven otherwise.

> [!warning]
> Gap, delay, extend, and max values are agency- and intersection-specific and change with retimings. Never quote or model them from memory or from this note — request the current signed timing sheet from the maintaining agency and cite its date.

**See also:** [[How to Read a Signal Timing Sheet]] · [[Signal Timing Manual (STM2) and Free Training]] · [[Clearance Intervals and Ped Timing]]

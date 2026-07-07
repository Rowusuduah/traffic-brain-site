---
tags: [type/reference, domain/signals, status/verify]
link: "https://nap.nationalacademies.org/catalog/22097/signal-timing-manual-second-edition"
last-checked: 
description: Cycle, split, offset, and reference phase — plus the wrong-reference-phase mistake, time-space thinking, and transition basics.
---
Coordination makes a string of signals behave like one system: platoons released by one signal arrive at the next on green. Three numbers per intersection do all the work. STM2 (NCHRP 812) Chapter 7 is the governing text.

## The three knobs

- **Cycle length:** time for one complete sequence of all phases. Every signal in a coordinated group runs the *same* cycle (or a half/double harmonic) — that shared clock is what makes fixed time relationships possible.
- **Split:** the slice of the cycle given to each phase — green + yellow + all-red, in seconds or percent. Splits must sum to the cycle.
- **Offset:** the time shift between this intersection's coordinated phase and the system master clock. Offsets are what line the greens up along the corridor; cycle and splits just make offsets meaningful.

## Reference phase — and the classic mistake

The offset is measured *to something*: a **reference point** on the **reference phase** (the coordinated phase, normally 2/6 per [[NEMA Phasing and Ring-Barrier]]). Controllers differ on what that point is — start of green, start of yellow, start of flashing-don't-walk — and Synchro has its own selectable convention.

> [!warning]
> The vault's common-EIT-mistake list includes this one for a reason: coding field offsets into a model (or new offsets into a controller) against the **wrong reference phase or reference point** produces offsets that are pure nonsense — the corridor "coordinates" on paper and platoons hit red in the field. Before transcribing any offset, confirm (1) which phase(s) are coordinated, (2) what event the offset references, (3) seconds or percent. If the sheet doesn't say, ask the maintaining agency — don't guess.

## Time-space diagram thinking

Distance along the corridor on one axis, time on the other; each signal's green/red pattern drawn at its location; vehicle trajectories are sloped lines (slope = speed, horizontal = stopped). The green band a platoon can ride end-to-end is the **bandwidth**. Sketching one — even by hand — answers most coordination questions: an ideal one-way offset is just travel time between signals.

> [!example]
> Two signals 1,320 ft apart, progression speed 40 mph ≈ 59 ft/s. Downstream offset for one-way progression ≈ 1,320 / 59 ≈ 22 s after the upstream green — the platoon's front arrives exactly as the downstream signal turns green. (Subtract a few seconds if a standing queue must clear first.)

## One-way vs two-way progression

One-way progression is easy — shift each offset by travel time and the band is wide. Two-way progression is a zero-sum tradeoff: except at lucky signal-spacing/cycle combinations, widening the band one direction narrows it the other. Tools: favor the peak direction by time of day, use lead-lag left turns to widen the band (lagging one left separates the through starts), or accept the geometry. Protected lefts eat arterial green in both directions, which is why heavy left-turn phasing and great progression rarely coexist.

## When coordination is worth it

Coordination pays when arrivals are **platooned**; it buys little when arrivals are random. Platoons disperse with distance — beyond roughly half a mile to three-quarters of a mile of spacing the platoon has spread enough that coordination benefits fade and you should check volumes and platoon structure before tying signals together `#status/verify — spacing guidance against current STM2 Ch. 7 and MUTCD text; don't quote a threshold from memory`. Closely spaced signals on a Florida arterial are almost always coordinated; the judgment call lives at the fringes and on long suburban spacings. MUTCD Warrant 6 is the flip side — see [[Signal Warrants (MUTCD Ch 4C)]].

## Transition (resync) basics

When a controller changes plans — new cycle, splits, or offsets at a time-of-day change (see [[Time-of-Day Plans]]) — it can't jump instantly; it must drift its local clock to the new offset over several cycles by temporarily lengthening or shortening cycles.

> [!quote]
> "Traffic control can be significantly less efficient during the transition between timing plans than it was during coordination." — FHWA Signal Timing Manual (FHWA-HOP-08-024), Ch. 6

Typical modes: **dwell** (hold the coordinated phase until the offset lines up — deterministic, brutal on side streets), **add** (stretch cycles), **subtract** (shrink cycles, limited by minimum greens), **shortway/smooth** (pick add or subtract, whichever gets there faster — usually least disruptive). Practical consequences: don't schedule plan changes back-to-back, and don't judge a corridor's timing while it's mid-transition.

> [!tip]
> STM2 downloads free from National Academies Press (link above); the FHWA 1st-edition manual is free searchable HTML at ops.fhwa.dot.gov. To see whether offsets *actually* work, the Purdue coordination diagram in ATSPM plots arrivals on green vs red from controller logs — see the ATSPM entry in [[Signal Timing Manual (STM2) and Free Training]].

**See also:** [[NEMA Phasing and Ring-Barrier]] · [[Time-of-Day Plans]] · [[How to Read a Signal Timing Sheet]]

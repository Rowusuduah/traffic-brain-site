---
tags: [type/reference, domain/signals, src/official, status/verify]
link: "https://mutcd.fhwa.dot.gov/kno_11th_Edition.htm"
last-checked: 
description: "What a flashing yellow arrow tells drivers, why it replaced the doghouse, the left-turn trap, and time-of-day protected/permissive modes."
---
A flashing yellow arrow (FYA) is the permissive left-turn display in a *separate* left-turn signal face — it replaced the circular green ball as the "turn when clear" message. One four-section head (or a three-section head with a bimodal section) can run protected, permissive, or both, and can change modes by time of day.

## What it means to drivers

> [!quote]
> "Vehicular traffic, on an approach to an intersection, facing a flashing YELLOW ARROW signal indication, displayed alone or in combination with another signal indication, is permitted to cautiously enter the intersection only to make the movement indicated by such arrow..." — and it shall yield to pedestrians in the crosswalk and oncoming traffic. (Sec. 4A.04, 11th Ed., Dec 2023)

So: FYA = yield, then go. Green arrow = protected, opposing traffic stopped. Steady yellow arrow = your movement is ending.

## Why agencies dumped the doghouse

The 5-section "doghouse" showed permissive lefts a **circular green** — the same ball the through lanes see. Two problems:

- **Comprehension.** Drivers read the green ball as "I have the right of way." NCHRP driver-comprehension research behind the FYA found the flashing arrow communicated "yield" far better.
- **Display lock-in.** A doghouse *shares* the circular indications with the adjacent through face, so the left can never show something different from the through — which forbids lead-lag phasing (see the trap below) and time-of-day mode changes. Section 4F.08 explicitly permits the FYA to keep flashing while the adjacent through shows red and the *opposing* left runs its green arrow. That independence is the whole point.

Retrofits are cheap in concept: same 4-section face runs protected-only, protected/permissive, or permissive-only without rewiring displays.

## The left-turn trap ("yellow trap"), concretely

> [!example]
> Lead-lag phasing with doghouses: NB left leads, SB left lags. You're NB, waiting to turn left on the permissive circular green. Your through signal turns **yellow**. You assume opposing SB traffic sees yellow too, so you commit the turn on the tail of yellow — but SB through is *still green* (it stays green through the SB lagging left). You turn across live opposing traffic. That's the trap: your yellow falsely implies their yellow.
>
> With FYA, your left face just keeps **flashing yellow** while your through goes yellow-then-red. No false "all clear" cue — you keep yielding. This is why FYA unlocked lead-lag phasing for coordination.

## Time-of-day operation

Section 4F.02 defines four left-turn modes: permissive only, protected only, protected/permissive, and **variable** — the mode changes by time of day or by traffic conditions. Typical Florida arterial pattern: protected-only during peaks (heavy opposing volume = no usable gaps, so the FYA is suppressed and the head runs arrow-yellow-red only), protected/permissive midday and nights. The controller's TOD plans drive it — check the phasing notes on the timing sheet, not just the head on the pole.

> [!warning]
> Whether a left may run permissive at all is an engineering call — opposing speed and volume, number of opposing lanes, sight distance, crash history, dual-left geometry. Agencies (FDOT districts, counties) have their own PPLT screening criteria; never set or review the mode from remembered thresholds. And never assume the mode you saw at 2 pm is the mode at 5 pm.

## Where the MUTCD governs it

Chapter 4F (Steady Stop-and-Go Operation), 11th Edition: 4F.02 modes and general rules, 4F.04 permissive-only in a separate face (three-section red arrow / steady yellow arrow / FYA), 4F.07 shared-face PPLT, 4F.08 protected/permissive in a separate face (four-section, or three-section with bimodal FYA/green-arrow section). Meanings live in 4A.04; a flashing **red** arrow variant exists for offset lefts where every vehicle must stop first (4F.04/4F.08). Section numbers are from the Dec 2023 11th Edition `#status/verify against Revision 1 (Dec 2025)`.

> [!tip]
> Free Part 4 PDF on the MUTCD 11th Edition page (link above). FHWA also publishes FYA outreach materials (driver-education one-pagers) you can crib for public meeting exhibits.

**See also:** [[Clearance Intervals and Ped Timing]] · [[How to Read a Signal Timing Sheet]] · [[Signal Warrants (MUTCD Ch 4C)]]

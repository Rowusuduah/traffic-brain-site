---
tags: [type/reference, domain/signals]
link: "https://nap.nationalacademies.org/catalog/22097/signal-timing-manual-second-edition"
last-checked: 
description: The standard 8-phase numbering (odd = lefts, even = throughs, 2/6 mainline), rings and barriers, and how to read the diagram.
---
The NEMA phase-numbering convention is the shared language of controllers, timing sheets, and Synchro models. Learn it once and every signal in Florida reads the same way. STM2 (NCHRP 812) Chapters 3–4 are the full treatment; this is the working decode.

## The 8-phase convention

- **Even phases (2, 4, 6, 8) = through movements.** Right turns ride along with their through phase — they don't get their own number.
- **Odd phases (1, 3, 5, 7) = protected left turns.** Each odd phase is the left turn that *conflicts with* the through phase numbered one higher: Ø1 crosses Ø2's traffic, Ø3 crosses Ø4's, and so on.
- **Ø2 and Ø6 are conventionally the major street** (the opposing through pair); Ø4 and Ø8 are the side street. Coordination usually references 2/6 — see [[Offsets and Coordination]].
- Ring 1 holds phases 1–4; Ring 2 holds phases 5–8.

> [!warning]
> "Conventionally" is doing work in that sentence. Which compass direction Ø2 points varies by agency (many assign Ø2 to the northbound or eastbound mainline, but not all), and T-intersections, one-ways, and diamond interchanges renumber freely. Read the phase diagram on the actual timing sheet — never assume Ø2's direction from memory.

## Rings and barriers — the concurrency bookkeeping

A **ring** is a sequence of phases that time one after another — the two phases in a ring can never show green together. A **barrier** is a hard wall in the cycle separating the major-street phases from the side-street phases: nothing on one side of a barrier can time with anything on the other side.

> [!quote]
> "The barrier represents a reference point in the cycle at which a phase in each ring has reached a point of termination; both rings must cross the barrier simultaneously." — FHWA Signal Timing Manual (FHWA-HOP-08-024), Ch. 4; carried forward in STM2 Ch. 4

The payoff: any phase in Ring 1 may run concurrently with any phase in Ring 2 *on the same side of the barrier*. That is the entire compatibility rule.

## Reading a ring-barrier diagram

```text
         ‖   MAIN STREET side    ‖   SIDE STREET side    ‖
 Ring 1  ‖  Ø1 (L)  |   Ø2 (T)   ‖  Ø3 (L)  |   Ø4 (T)   ‖
 Ring 2  ‖  Ø5 (L)  |   Ø6 (T)   ‖  Ø7 (L)  |   Ø8 (T)   ‖
         ‖ = barrier      | = phase change within a ring
```

Time flows left to right. Legal concurrent combinations on the main-street side: 1+5 (dual lefts), 1+6, 2+5 (a left with the through it doesn't conflict with), 2+6 (both throughs). Same pattern on the side-street side with 3/4/7/8. Swapping the order within a ring (Ø2 before Ø1) gives you a **lagging left**; different orders in each ring give **lead-lag** — the diagram shows which without any prose.

> [!example]
> Timing sheet shows Ring 1 = 1, 2 | 3, 4 and Ring 2 = 5, 6 | 7, 8, all leading. Ø1 and Ø5 start together (dual protected lefts on the main street), each terminates independently into its adjacent through (Ø2, Ø6), both rings hit the barrier together, then the side street repeats the pattern. If Ø5 gapped out early, Ø2 starts early while Ø1 keeps timing — the rings are independent between barriers.

## Left-turn modes on top of the numbering

- **Protected only:** left moves on a green arrow (its odd phase) and at no other time. Safest, most delay.
- **Permissive only:** no odd phase used — lefts yield through gaps on the circular green (or flashing yellow arrow) during the through phase.
- **Protected-permissive (PPLT):** green arrow first, then continue permissively during the adjacent through. Common Florida default on mainlines; the FYA display is the modern permissive indication.

Mode selection is a safety/capacity judgment call (opposing volume, speeds, sight distance, crash history) — governed by agency policy and the [[FDOT Traffic Engineering Manual (TEM)]], not by preference.

## Why phase pairs matter when you read a controller or Synchro

- A movement on a timing sheet is *always* named by phase number. "Split for Ø4" means nothing until you know which approach Ø4 is.
- Synchro's phase template mirrors NEMA: mis-assign phases (e.g., putting the mainline on 4/8) and the model runs but every comparison to the field sheet silently breaks.
- Concurrency errors show up as impossible timing: if a model shows Ø2 and Ø4 green together, the barrier is coded wrong.
- When transcribing an existing signal, copy the sheet's ring-barrier structure exactly — sequence, lead/lag, and all — per [[Synchro QAQC Checklist]].

> [!tip]
> STM2 (NCHRP 812) is a free PDF from National Academies Press (link above). The older FHWA Signal Timing Manual (FHWA-HOP-08-024) is free *HTML* at ops.fhwa.dot.gov — faster to search when you just need the ring-barrier chapter on screen.

**See also:** [[How to Read a Signal Timing Sheet]] · [[Offsets and Coordination]] · [[Signal Timing Manual (STM2) and Free Training]]

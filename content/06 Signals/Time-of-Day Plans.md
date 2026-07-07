---
tags: [type/workflow, domain/signals]
link: "https://nap.nationalacademies.org/catalog/22097/signal-timing-manual-second-edition"
last-checked: 
description: TOD plan structure (AM/midday/PM/off-peak/free), time-clock vs traffic-responsive selection, and the model-period-vs-plan check.
---
A signal doesn't run one timing — it runs a **schedule of plans**. Each time-of-day (TOD) plan is a complete package: cycle length, splits, offset, sometimes phasing sequence (lead/lag flips), each built for a different traffic condition. STM2 (NCHRP 812) Chapters 5 and 7 cover plan development and scheduling.

## Typical weekday structure

> [!quote]
> "The simplest schedules typically define an a.m., off-peak, and p.m. peak for weekdays and a different set of plans for weekends." — FHWA Signal Timing Manual (FHWA-HOP-08-024), Ch. 6

A common Florida arterial weekday looks like:

```text
 Plan       When (typical)      Character
 ─────      ──────────────      ─────────
 AM peak    ~06:30–09:00        Long cycle, splits/offsets favor peak direction
 Midday     ~09:00–15:30        Moderate cycle, balanced splits
 PM peak    ~15:30–19:00        Longest cycle, offsets favor opposite direction
 Off-peak   evening             Short cycle or coordination dropped
 Free       late night          Uncoordinated, fully actuated — first come, first served
```

Weekends usually get their own plans; agencies may also program holiday, school-day, event, or hurricane-evacuation plans. "Free" isn't a plan so much as the *absence* of coordination — the controller just answers detector calls.

## How the plan gets picked

- **Time-of-day clock (the default):** the controller (or central system) activates plans by day-of-week and time from a stored schedule, all synced to a master clock. Cheap, predictable — and blind: it runs the PM-peak plan on a rainy game day and on a quiet holiday alike.
- **Traffic responsive:** the system picks among the stored plans based on what system detectors currently measure. Better fit to unusual days, but it needs healthy detection and tuning — many agencies own the feature and still run the clock.
- **Manual/operator override:** events, incidents, evacuation.

Every plan change triggers a transition period of degraded operation — see [[Offsets and Coordination]] for why schedule boundaries shouldn't be stacked close together.

## Before you retime: what to collect

- **Turning-movement counts for each plan period you'll rebuild** — not just the AM/PM peak hours. A midday plan built from PM counts is fiction.
- **The current timing sheets and the TOD schedule itself** (plan numbers, start times, day plans) from the maintaining agency — the schedule page is part of the timing sheet package; ask for it explicitly.
- **Existing cycle/splits/offsets per plan** as your baseline, plus any coordination diagrams.
- **Detector status/maintenance notes** — a failed detector puts a phase on recall and quietly reshapes how the "same" plan actually serves traffic.
- **Field observation during each period** — queues, split failures, where platoons actually arrive. If the agency has ATSPM, pull it instead of guessing (see [[Signal Timing Manual (STM2) and Free Training]]).

## The review question

**"Does the model period match the plan actually running?"** Ask it on every existing-conditions review:

- Counts collected 4–6 PM must be modeled against the **PM plan**, not whatever plan happens to be first on the sheet.
- Check the *boundaries*: a 4:00–5:00 count at a signal whose PM plan starts at 4:30 straddles two plans (plus a transition) — pick the period or footnote the mismatch.
- Saturday analysis with weekday plans, or a school-zone study during summer TOD settings, is the same error in different clothes.

> [!warning]
> The timing sheet in the project file shows *all* the plans; it doesn't tell you which one was live during your count. Match count timestamps to the TOD schedule, and confirm the sheet's date — plans get retimed, and an old sheet plus new counts is a silent mismatch. Note plan number and sheet date in the model assumptions, per [[How to Read a Signal Timing Sheet]].

> [!example]
> Synchro existing-conditions review: model says 120 s cycle, counts stamped 12:00–13:00, TOD schedule shows the midday plan is 100 s and 120 s doesn't start until 15:30. Comment: "Existing midday model uses PM-plan timing; recode to Plan 2 (100 s) per TOD schedule dated on the sheet."

> [!tip]
> STM2 is a free PDF from National Academies Press (link above) — Chapter 5 for how many plans a day actually needs and Chapter 8 for implementation. FDOT's free Signal 101/102 CBTs cover Florida conventions for the same material.

**See also:** [[Offsets and Coordination]] · [[How to Read a Signal Timing Sheet]] · [[Synchro QAQC Checklist]]

---
tags: [type/reference, domain/signals, src/official, status/verify]
link: "https://www.ite.org/technical-resources/topics/standards/atc-standards/ (ATC standards — AASHTO/ITE/NEMA Joint Committee)"
last-checked: 
description: What's inside a signal cabinet, controller families (TS2, 2070, ATC), preemption vs priority, and the lines an EIT never crosses.
---
Everything a signal *does* is decided inside the cabinet. You'll never program one as an EIT, but you'll review plans that place them, timing sheets that describe them, and preempt tables that can kill people if wrong — so learn what's in the box and who's allowed to open it.

## What lives in the cabinet

- **Controller unit:** the computer running the ring-barrier logic from [[NEMA Phasing and Ring-Barrier]] — phases, timing, coordination, TOD plans, preempt routines.
- **MMU / conflict monitor:** an *independent* watchdog wired to the field terminals. If it sees conflicting greens, missing clearance, or bad voltages, it seizes the intersection into flash regardless of what the controller says. TS1-era name: conflict monitor; TS2 name: Malfunction Management Unit — same job, more checks. This is the reason a software bug doesn't display two conflicting greens.
- **Load switches and flash transfer relays:** the muscle — solid-state switches that put controller logic onto 120 V signal-head circuits, and relays that cut the controller out entirely in flash.
- **Detector rack:** loop amplifier cards and video/radar interface channels that turn field sensors into calls — the cabinet half of [[Detection Basics]]. In TS2 cabinets, Bus Interface Units (BIUs) move detector and load-switch data over a serial (SDLC) bus instead of one wire per function.
- **Comms:** fiber transceiver or cellular modem tying the intersection to the agency's central system/ATMS — how retimings get downloaded and how [[ATSPM Basics|ATSPM]] data gets out.
- **Power, surge protection, and (often) battery backup** — plus the police panel in the door: a manual flash switch accessible without opening the main compartment.

> [!quote]
> "A conflict monitor (malfunction management unit) circuit and, if appropriate, an automatic means shall also be provided to initiate the flashing mode." — MUTCD 11th Edition, Section 4G.01. The same section adds that flashing operation *shall not* be terminated by removing or turning off the controller or the monitor — the safety net can't be unplugged around.

## Controller families, conceptually

- **NEMA TS2:** the NEMA standards define the controller's functions, connectors, and the cabinet around it (SDLC bus, BIUs, MMU). The dominant style in Florida county/city cabinets. TS1 is the older per-wire generation you'll still meet in the field.
- **2070:** a modular rack-mount controller *model specification* out of Caltrans/agency consortia — a hardware platform that runs agency-selected software rather than a fixed function set. Historically common in some states and the conceptual ancestor of ATC.
- **ATC:** the open-architecture family from the AASHTO/ITE/NEMA Joint Committee (link above) — ATC 5201 (controller: standardized "engine board" running Linux), ATC 5301 (ITS cabinet), ATC 5401 (application programming interface). The idea: hardware, cabinet, and software decoupled so agencies aren't locked to one supplier.

The family question that actually matters to you: **which one does the maintaining agency run?** It dictates the timing-sheet format, the plans callouts, and the pay items — not which brand is "best." Phase logic is NEMA ring-barrier everywhere; the box around it varies.

## What an EIT touches — and never touches

You touch **paper and models**: plans, timing sheets, detector tables, preempt forms, Synchro files, and the cabinet *location* on a plan sheet. You may look inside an open cabinet **only** with the maintaining agency's tech standing there running the visit.

> [!warning]
> An energized cabinet is agency/contractor territory — period. Never open a cabinet door, place or remove recalls, flip the flash switch, connect a laptop, or "just check a detector card." It's 120 V+ equipment controlling live traffic; an uncommanded change is a tort with your name on it and your firm's contract doesn't cover it. Request data through the agency instead — see [[EIT Boundaries Ethics and Liability]].

## Preemption vs priority

Two different contracts with the controller (MUTCD 11th Ed. Sections 4F.18–4F.20):

- **Preemption (4F.19):** *interrupts* normal operation and transfers control — trains, boats/movable bridges, emergency vehicles. The controller drops what it's doing, runs a special sequence, then recovers.
- **Priority (4F.20):** *adjusts* normal operation without breaking it — early green or green extension for transit (TSP), staying inside coordination.

> [!quote]
> "The order of priority should be: train, boat, heavy vehicle (fire vehicle, emergency medical service), light vehicle (law enforcement), light rail transit, rubber-tired transit." — MUTCD 11th Edition, Section 4F.18

- **EVP (emergency-vehicle preemption):** fire/EMS request green via optical emitter, GPS/radio, or acoustic detection — technology is an agency choice; the controller-side rule set is 4F.19 either way.
- **Railroad preemption — the safety-critical case:** the crossing's train detection is interconnected to the nearby signal, which must clear queued vehicles *off the tracks* (a track-clearance green) before the train arrives. Design math and traps live in FDOT [[FDOT Traffic Engineering Manual (TEM)|TEM]] Chapter 3 — Section 3.8, *Calculating Railroad Traffic Signal Preemption Time*, including the **preempt trap** check and vehicle–gate interaction check (2026 TEM `#status/verify` section number against the current edition) — and MUTCD Sections 8D.09–8D.12 (grade-crossing preemption, prohibiting movements toward the tracks, pre-signals, queue cutters). Per 4F.19, the transition into preempt shall never shorten a yellow or its following all-red, but *may* truncate walk/ped-clearance intervals — and railroad-preempted signals should have backup power.

> [!example]
> Train hits the approach circuit → crossing flashers/gates activate and the interconnect calls the signal's preempt → controller finishes (never shortens) the current yellow + all-red, may cut the ped clearance short → runs the **track-clearance phase** to flush the queue over the tracks → dwells in a hold pattern that keeps all movements *toward* the crossing red until the train clears → exits through a programmed recovery sequence. Every value in that chain comes from the TEM 3.8 worksheet, not judgment on the fly.

## What to check on plans

- **Cabinet location:** clear zone or barrier-protected, out of the sidewalk/ADA path, above drainage/flood grades, door opening that lets a tech see the signal heads while working, power and comm source shown, and sight triangles kept clear — signalization plans criteria are in FDM 232 `#status/verify` and agency standards.
- **Detection assignments:** the detector table's channel → phase mapping must match the phasing diagram, the lane geometry, and the timing sheet — cross-check per [[Detection Basics]] and [[How to Read a Signal Timing Sheet]].
- **Preempt phases:** which phases serve track clearance, what dwells, what's omitted, and how peds are handled — confirm the preempt table matches the signed preemption calculation for the crossing, and that any geometry change (added storage, new lane) triggered a recalc.

**See also:** [[NEMA Phasing and Ring-Barrier]] · [[Detection Basics]] · [[How to Read a Signal Timing Sheet]] · [[EIT Boundaries Ethics and Liability]] · [[FDOT Traffic Engineering Manual (TEM)]]

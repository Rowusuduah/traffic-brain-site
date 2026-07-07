---
tags: [type/reference, domain/signals, src/official, status/verify]
link: "https://udottraffic.utah.gov/atspm"
last-checked: 
description: What high-resolution signal controller data unlocks, the core ATSPM plots and the question each answers, and where to see it live.
---
Automated Traffic Signal Performance Measures. Modern controllers can log every event — detector on/off, phase green/yellow/red, ped calls, preempts — with ~0.1-second timestamps. ATSPM software turns that "high-resolution" event log into performance plots for every signal, every day, without sending anyone to the field. Grew out of a Purdue University / Indiana DOT partnership; UDOT built the open-source implementation most agencies run.

## What high-resolution data unlocks

A turning movement count is one snapshot on one day. High-res data is a continuous recording: volumes, arrivals, delay, and failures for every phase, 24/7, before and after any change you make. That means you can *detect* a problem (a phase failing every cycle since last Tuesday), *diagnose* it (bad offset vs. not enough split), and *verify* the fix — all from your desk.

## The core plots and what each answers

- **Purdue Coordination Diagram (PCD):** plots each vehicle arrival against where the signal was in its cycle. Answers: *are platoons arriving on green?* Percent arrivals on green (AoG) is the coordination scorecard; a band of dots landing on red means the offset is wrong.
- **Split failures:** a phase "split fails" when it maxes out with demand still waiting (occupancy high at both start and end of green). Answers: *which phases are out of capacity, and how often?* Chronic split failures on one phase = retime; on all phases = the intersection is saturated.
- **Approach delay:** estimated delay per vehicle by approach, plotted through the day. Answers: *where and when does it hurt?* Use it to rank intersections and to show before/after benefit of a retiming.
- **Ped delay:** time from ped actuation to walk. Answers: *how long do people actually wait to cross?* Long ped delay is invisible in vehicle-centric studies — this plot surfaces it.

Other measures in the standard toolkit: Purdue phase termination (gap-out vs. max-out vs. force-off — is actuation working?), split monitor, arrivals on red, approach volume and speed, yellow/red actuations (red-light-running risk), preemption details, turning movement counts, and Purdue Link Pivot for optimizing offsets along a corridor.

## Complaint-driven → data-driven retiming

The traditional model: retime a corridor every 3–5 years, or when complaints pile up. With ATSPMs you watch AoG, split failures, and delay continuously — you retime *where the data says*, when it says, and you can prove the improvement with the same plots. Detector health flags (constant calls, dead detectors) also surface silently broken actuation that would otherwise waste green for years.

> [!tip]
> Two free resources: UDOT's live public site at [udottraffic.utah.gov/atspm](https://udottraffic.utah.gov/atspm) — pick any Utah signal and generate real PCDs, split failure, and ped delay charts today, no login. And the open-source codebase: the original repo at [github.com/udotdevelopment/ATSPM](https://github.com/udotdevelopment/ATSPM) (C#/.NET, Apache 2.0) holds ATSPM v4.3 and below and is now deprecated — active development of v5+ moved to [github.com/OpenSourceTransportation/Atspm](https://github.com/OpenSourceTransportation/Atspm). FHWA's "Every Day Counts" ATSPM pages and the Purdue/Indiana research reports explain the measures in depth.

> [!example]
> Complaint: "the light at Main & 5th never gives me a green." Pull the PCD for the coordinated phase — arrivals landing on red right after the platoon should arrive → offset problem, fix with Link Pivot. Same complaint but the split-failure chart shows the side street failing every PM cycle → split problem, shift green time. Same complaint, phase-termination plot shows the left turn never being called → dead detector, dispatch maintenance. Three different fixes, one afternoon, zero field visits.

> [!warning]
> FDOT and several districts/counties have deployed ATSPMs, but coverage, platform (UDOT-based vs. vendor), and public access vary by district and change year to year — don't state what's available on a Florida project from memory. Ask the district traffic operations office or the maintaining agency what high-res data exists for your signals `#status/verify current FDOT/district ATSPM deployment`. Also verify detection: ATSPMs are only as good as the detectors feeding them — no advance detection, no PCD.

Good study project: the event log is just a big timestamped table (signal ID, event code, parameter), so it's ideal Python practice — parse a day of events and compute AoG yourself before trusting the dashboard. See [[Starter Automation Projects]].

**See also:** [[Starter Automation Projects]] · [[Signal Timing Manual (STM2) and Free Training]] · [[How to Read a Signal Timing Sheet]]

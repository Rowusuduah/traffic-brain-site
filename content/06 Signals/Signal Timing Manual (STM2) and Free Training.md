---
tags: [type/source, src/official, domain/signals]
link: "https://nap.nationalacademies.org/catalog/22097/signal-timing-manual-second-edition"
last-checked: 
description: NCHRP 812 (STM2) free PDF plus FDOT Signal 101/102 CBTs, the FHWA Signalized Intersections Guide, and UDOT's open-source ATSPM.
---
**What:** the free national signal-timing library, four items deep. **NCHRP Report 812 — Signal Timing Manual, Second Edition (STM2)**, free PDF from National Academies Press (link above): phasing, cycle/split/offset development, coordination, preemption/priority, oversaturated and adaptive strategies — the source document behind nearly every planned note on this shelf (NEMA phasing, offsets, TOD plans, FYA). Plus: **FDOT Traffic Signal 101/102 CBTs** and signal-timing/performance-measure trainings at fdot.gov/traffic/training (some carry PDHs); the **FHWA Signalized Intersections Informational Guide, 2nd Ed (FHWA-SA-13-027)**, free PDF — safety, geometric design, and operations from low-cost timing/signing fixes up to reconstruction, with multimodal treatments; and **UDOT's open-source ATSPM** codebase at github.com/udotdevelopment/ATSPM (live public example: udottraffic.utah.gov/atspm).

**Why:** everything here is free and citable — STM2 for how timing values are *developed* (not just what the sheet says), the FHWA guide for justifying head placement/ped features/intersection treatments in review comments, FDOT CBTs for Florida-specific conventions, ATSPM because it's where signal ops is going.

**When:** a timing sheet field confuses you → STM2 chapter on that topic before asking. Writing a plan-review comment on a signalized intersection → FHWA-SA-13-027. First month touching FDOT signals → Signal 101, then 102. Handed high-resolution controller data → ATSPM.

**What ATSPMs tell you:** automated performance measures from high-resolution controller logs — **Purdue coordination diagrams** (arrivals on green vs red → is the offset actually working?), **split failures** (phase maxed out with demand left → splits wrong), arrivals on green, ped delay, detector health. They replace "drive the corridor and feel it" with evidence, and the UDOT repo doubles as an automation/code study project.

> [!tip]
> STM2 and other NCHRP reports download free from nap.nationalacademies.org (free account) — never pay for NCHRP. The FDOT training page also hosts recorded TEM symposiums and the MUTS course.

> [!warning]
> STM2 is national guidance; FDOT/maintaining-agency policy governs actual timing values in Florida — use STM2 to understand, the agency table to comply. URLs and training catalog contents rot `#status/verify links and CBT list`.

**See also:** [[How to Read a Signal Timing Sheet]] · [[Clearance Intervals and Ped Timing]] · [[Signal Warrants (MUTCD Ch 4C)]]

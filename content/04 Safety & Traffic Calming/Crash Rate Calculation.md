---
tags: [type/calculation, domain/safety, status/verify]
title: "Crash Rate Calculation"
last-checked: 
description: Segment (MVMT) and intersection (MEV) crash-rate formulas with a worked example, exposure sources, and when rates mislead.
---
A crash *rate* normalizes crash frequency by exposure so a busy arterial and a quiet collector can be compared. Two standard forms: segments per **million vehicle-miles traveled (MVMT)** and intersections per **million entering vehicles (MEV)**. This note is the math behind the rate bullets in [[How to Summarize 5-Year Crash Data]].

## Segment rate (per MVMT)

```text
R = (C × 1,000,000) / (365 × N × AADT × L)

C    = crashes on the segment in the study period
N    = number of years
AADT = annual average daily traffic (two-way, veh/day)
L    = segment length in miles
```

Many agencies (and the summary note in this vault) report segment rates **per 100 MVMT** — same formula with 100,000,000 in the numerator, i.e., the per-MVMT rate × 100. State which basis you used; a 100× labeling mix-up is a classic reviewer catch.

## Intersection rate (per MEV)

```text
R = (C × 1,000,000) / (365 × N × V)

C = crashes at the intersection in the study period
N = number of years
V = total daily entering volume (veh/day)
```

`V` is *entering* vehicles, not the sum of two-way leg AADTs: if all you have is two-way AADT per leg, entering volume ≈ half the sum of the leg AADTs (assumes balanced directional split); turning movement counts expanded to daily volumes are better where available.

> [!example] Worked example
> **Intersection** (the practice question in [[How to Summarize 5-Year Crash Data]]): 12 crashes over 5 years, 25,000 entering ADT.
> `R = (12 × 1,000,000) / (365 × 5 × 25,000) = 12,000,000 / 45,625,000 ≈ 0.26 crashes/MEV`
>
> **Segment:** 30 crashes over 5 years on a 2.0-mile segment with 20,000 AADT.
> `R = (30 × 1,000,000) / (365 × 5 × 20,000 × 2.0) = 30,000,000 / 73,000,000 ≈ 0.41 crashes/MVMT` (= 41 per 100 MVMT)

## Exposure data sources

- Segment AADT: [[Florida Traffic Online (FTO)]] — pull per [[How to Pull AADT and K-D-T Factors from Florida Traffic Online]]; note the count-station year and whether the value is an estimate.
- Off-system/local roads: [[County & MPO Count Programs (Tampa Bay)]] or project counts.
- Use the AADT that matches the crash years — a 5-year crash period paired with a single-year AADT is common practice but say so; averaging available years across the period is cleaner.
- Crash counts: [[How to Pull Crashes from Signal Four Analytics]] — the geography definition (segment limits, intersection buffer) must match between the C and the exposure, or the rate is fiction.

## Rate vs frequency vs EB-expected

Three tiers, increasing rigor:

1. **Frequency** (crashes/yr): fine for ranking sites with similar volumes; severity-weight it before it means anything (see [[KABCO Injury Scale]]).
2. **Rate** (this note): controls for exposure, but *assumes crashes scale linearly with volume* — they don't.
3. **EB-expected** (SPF + observed, Empirical Bayes): corrects both the nonlinearity and regression-to-the-mean; the [[Highway Safety Manual (HSM)]] Part B method and the right answer for serious screening or before/after work.

## When rates mislead

- **Low-volume sites:** a tiny denominator inflates the rate — 2 crashes on a 500-AADT local street posts a huge rate from what may be pure chance. Never rank a mixed network by raw rate; the top of the list fills with low-volume sites.
- **Nonlinearity:** because SPFs are nonlinear in AADT, low-volume facilities systematically show higher per-exposure rates than high-volume ones even when performing "normally" for their class.
- **Regression to the mean:** a site picked *because* it spiked will tend to drop with no treatment; rates don't fix this — EB does.
- **Comparator abuse:** "above average" requires a stated comparator (district/statewide average for the same facility type and area type) `#status/verify` current FDOT district values — never quote a comparator average from memory.

## Critical rate

The statistically honest version of "above average": compare the site rate to a **critical rate** — the average rate for similar facilities plus an allowance for random variation at the site's own exposure (HSM network screening, Crit. Rate method):

```text
Rc = Ra + P × sqrt(Ra / M) + 1 / (2 × M)

Ra = average rate for the reference population (same facility type)
P  = z-value for the chosen confidence level
M  = site exposure in MEV (intersections) or MVMT (segments)
```

Only sites with `R > Rc` are flagged — high-exposure sites face a tighter threshold, which is exactly the low-volume correction the raw rate lacks.

> [!warning]
> A crash rate with an unstated denominator basis (MEV vs MVMT vs 100 MVMT), an unmatched geography, or no comparator is a number, not a finding. Document C, N, AADT/V source and year, and length in the methodology — same discipline as the pull log in [[How to Pull Crashes from Signal Four Analytics]].

**See also:** [[How to Summarize 5-Year Crash Data]] · [[KABCO Injury Scale]] · [[Highway Safety Manual (HSM)]] · [[Florida Traffic Online (FTO)]]

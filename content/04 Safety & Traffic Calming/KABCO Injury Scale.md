---
tags: [type/reference, domain/safety, src/official, status/verify]
title: "KABCO Injury Scale"
last-checked: 
description: The five police-reported injury codes, who assigns them, how they differ from MAIS, and why severity weighting drives everything downstream.
---
KABCO is the five-level injury scale the investigating officer records on the crash report — the severity field behind every crash summary, HIN score, and B/C ratio you will ever produce. It comes from ANSI D16.1 via the MMUCC national data standard; a *crash's* severity is the worst *person-level* injury in it (so one "A" occupant makes it an "A crash").

## The five codes

| Code | Name (current MMUCC wording) | Working meaning |
|---|---|---|
| **K** | Fatal injury | Death resulting from the crash (the standard convention counts deaths within 30 days `#status/verify`) |
| **A** | Suspected serious injury (formerly "incapacitating") | Injury preventing normal activities — severe lacerations, broken limbs, crush injuries, unconsciousness at scene, unable to leave without assistance |
| **B** | Suspected minor injury (formerly "non-incapacitating / evident") | Visible but not serious — lumps, abrasions, minor lacerations |
| **C** | Possible injury | Claimed or implied, not visible — complaint of pain, limping |
| **O** | No apparent injury | At crash level this is your **PDO** (property damage only) bucket |

"K+A" (fatal + serious) is the pair that matters: it is the federal safety performance measure (23 CFR 490 defines "serious injury" as KABCO A per MMUCC 4th edition) and the Vision Zero target — see [[Vision Zero and the HIN (Tampa Bay)]].

## Who assigns it — and why it's noisy

The responding officer, at the scene, based on what they can observe — **before** any medical diagnosis, usually with no medical training, often under time pressure. Nobody goes back and corrects the code when the hospital outcome differs. Consequences you must expect in the data:

- The A/B and B/C boundaries are judgment calls; misclassification in both directions is well documented in state validation studies.
- K is the most reliable code (fatalities get follow-up); C is the least (self-reported pain).
- Always read the narrative and full report PDF for every K and A crash rather than trusting the coded field alone — that rule from [[How to Summarize 5-Year Crash Data]] exists because of this error source.

## KABCO vs MAIS

Two different instruments — don't conflate them:

- **KABCO**: police-reported, 5 levels, assigned at the scene from observation. Universal in state crash databases; cheap; noisy.
- **MAIS** (Maximum Abbreviated Injury Scale): medically assigned, 6 injury levels (plus uninjured), from clinical records. Accurate; unavailable for routine crash data.

Because economic values are studied on MAIS, USDOT publishes probability matrices translating KABCO to MAIS to build per-severity crash costs (a KABCO "A" is a probability *distribution* over MAIS levels, not one severity). You'll meet this inside FHWA's *Crash Costs for Highway Safety Analysis* and its updates — use the current edition and FDOT/agency-accepted dollar values, never memorized figures `#status/verify`.

## Why severity weighting drives everything downstream

Every downstream product multiplies crash counts by severity-based weights, so the KABCO field silently controls the answer:

- **Crash costs / B/C:** benefit = Σ(reduced crashes by severity × per-severity cost). A single K or A can dominate five years of PDO — which is why a countermeasure targeting rare severe crashes can out-score one targeting frequent fender-benders. See [[Countermeasure Selection and CMFs]].
- **HIN and network screening:** High Injury Networks are built on K+A density, not total crashes ([[Vision Zero and the HIN (Tampa Bay)]]).
- **HSIP eligibility and performance targets:** the federal measures are fatalities and serious injuries (counts and rates) — [[Safety Funding and Formal Studies (HSIP SS4A RSA)]].

## Florida crash-form context

Florida crashes are reported on the FLHSMV uniform crash report (long form HSMV 90010S; a short form exists for minor crashes). Injury severity is a per-person numeric field that maps onto KABCO — 1 none (O) through 5 fatal (K), per FHWA's state-by-state injury-code conversion table `#status/verify` against the current form revision and instruction manual. [[How to Pull Crashes from Signal Four Analytics]] exports carry these fields; keep long *and* short forms in the pull or you undercount O/C crashes.

> [!warning] Comparing severity across agencies or years
> Severity distributions are **not** directly comparable across agencies, years, or states without checking for breaks:
> - States were required to adopt the MMUCC 4th-edition "suspected serious injury" definition for federal reporting (deadline in 2019) `#status/verify` — "A" counts before and after a definition/form change are different populations. Check when Florida's form and instructions changed before trending A crashes across that boundary.
> - Agencies differ in training, in long- vs short-form usage, and in how aggressively officers code C vs O.
> - The latest year in any pull may be provisional and severity codes can lag.
> If a severity trend appears exactly at a form-revision or definition-change year, suspect the paperwork before the roadway.

**See also:** [[How to Summarize 5-Year Crash Data]] · [[Crash Rate Calculation]] · [[Countermeasure Selection and CMFs]] · [[How to Pull Crashes from Signal Four Analytics]]

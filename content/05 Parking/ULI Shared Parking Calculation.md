---
tags: [type/calculation, domain/parking, status/verify]
source: ULI Shared Parking, 3rd Ed. (verify agency-accepted edition)
last-checked: 
---
# ★ ULI Shared Parking Calculation
**Summary:** shared demand = Σ over uses of [base ratio × size × month factor × day factor × hour % × modal adj × non-captive %], evaluated for every hour/day-type/month; governing condition = the max cell. Reduction = governing shared peak vs Σ individual peaks.

**Build order (spreadsheet)**
1. Program table: each use, size, base ratio (ULI or accepted local/ITE substitute — cite which per use).
2. Pull ULI time-of-day %, monthly, weekday/weekend factors per use — record table numbers.
3. Adjustments row per use: modal (transit/walk context — justify), non-captive % (share arriving *for that use* vs already on site), internal-capture interplay documented (don't double-discount).
4. Matrix: uses × 24 hrs, one sheet per day-type × critical months (or all 12) → hourly totals.
5. Governing peak: value, hour, day-type, month. Sanity-check: does Dec-retail / weekday-office logic match intuition?
6. Compare: governing shared peak vs supply vs code vs Σ individual peaks.

**Worked micro-example (illustrative):** Office 40k SF + Restaurant 6k SF: office peaks ~10am–2pm weekday, restaurant ~7–9pm & weekend — shared peak lands early-afternoon weekday or Fri eve depending on ratios; a ~10–25% reduction vs sum-of-peaks is a common outcome *when factors are defensible* (never promise a number before the model runs).
**Hand-check:** recompute one governing-hour cell per use with a calculator; matches sheet exactly.
**Example application:** attach workbook to [[T - ULI Shared Parking]]; assumptions table into report appendix verbatim.
**Cross-links:** [[Workflow - Parking Study]] · [[ITE Parking Generation]] · [[Parking Code Comparison]]
**Practice question:** why can a 100%-captive hotel-restaurant add ~zero demand, and what evidence supports a captive claim?
**QA/QC reminder:** every factor cell traceable to a ULI table number or a written justification — no naked percentages.

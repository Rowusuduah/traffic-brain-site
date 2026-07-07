---
tags: [type/workflow, domain/cad, status/verify]
source: FDOT CADD Manual; FDOTConnect workspace
last-checked: 
title: "★ OpenRoads / MicroStation File Review (traffic engineer's pass)"
---
**Summary:** you'll review dgn sets long before you produce them. Goal: navigate confidently, check the traffic content, and not break anything.

**Open safely:** correct FDOTConnect workspace/version (ask which the project pins) · open a COPY or read-only · never purge/compress someone's file.
**Orient (MicroStation):** References dialog — what's attached, live nesting, who's master? · Level Display — traffic levels on/off to isolate S&PM/signal content · Models — design vs sheet models · Saved views.
**ORD specifics:** alignments/profiles are civil elements — inspect via Project Explorer/Civil Model; don't drag civil geometry; terrain & corridor live in referenced files (know WHICH file owns what — file-federation is the FDOT way).
**Traffic-content checks:** signs/markings on correct FDOT levels (CADD Manual) · cells from FDOT cell libraries not ad-hoc drawings · text styles/annotation scale right per sheet model · stationing matches roadway files · your redlines reference sheet + level so the designer finds them fast.
**Plot/PDF:** print organizer/pen tables per workspace — a "review PDF" plotted wrong wastes everyone's cycle.
**Free training:** FDOT CADD office videos/webinars ([[FDOT CADD Manual and FDOTConnect]]) — best ORD onboarding available, cost: $0.
**Cross-links:** CAD-workflow notes spawn per task · [[Redline Response Workflow]]
**Practice question:** markings show in the design file but not the sheet — three most likely causes, in check order? (reference attach, level display, annotation scale.)
**QA/QC reminder:** note workspace version + file list you reviewed; dgn sets shift under you between submittals.

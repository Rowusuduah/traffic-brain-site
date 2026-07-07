# 🧠 Home

**Today:** open today's daily note (Ctrl/Cmd+P → "Open today's daily note")
**Capture:** [[Inbox]] · **Ask list:** [[Questions for Senior Engineers]] · **Skills:** [[Skill Tracker]]

## Active projects
```dataview
TABLE status, client, due AS "Next deadline"
FROM "20 Projects"
WHERE status != "closed" AND file.name != "20 Projects"
SORT due ASC
```
*(No Dataview? Keep a manual list here:)*
- [ ] —

## Open questions for seniors
```dataview
TASK FROM "00 System/Questions for Senior Engineers"
WHERE !completed
LIMIT 10
```

## Needs verification before use
```dataview
LIST FROM #status/verify
LIMIT 15
```

## Recently touched
```dataview
TABLE file.mtime AS "Modified"
FROM "" WHERE file.name != "00 Home"
SORT file.mtime DESC
LIMIT 8
```

## Jump table
| Do the work | Learn the craft | Run the system |
|---|---|---|
| [[Workflow - TIA from Request to Submittal]] | [[MOC - Core References]] | [[Daily Capture Routine]] |
| [[Workflow - Parking Study]] | [[MOC - Safety and Traffic Calming]] | [[Weekly Review Routine]] |
| [[Workflow - Comparable Sites Research]] | [[MOC - Signals]] | [[Monthly Technical Growth Review]] |
| [[Workflow - New Task Intake]] | [[MOC - Design and CAD]] | [[Lessons Learned System]] |
| [[Workflow - Research and Source Vetting]] | [[MOC - Software]] | [[Standards Update Tracker]] |
| [[Synchro QAQC Checklist]] | [[MOC - Parking]] | [[Plans - 30 to 90 to 3 Years]] |
| [[Redline Response Workflow]] | [[Free Learning Library]] | [[Career Roadmap - EIT to Mastery]] |
| [[AI Prompt Library]] | [[MOC - Agencies]] | [[QAQC System]] |

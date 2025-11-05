# Current Sprint - Living Focus Document

*This file is THE SINGLE SOURCE of what we're building RIGHT NOW*

## Sprint: 3 - Content Expansion & Onboarding (Nov 18, 2025 → target Dec 2, 2025)
**Vision Check**: "Every feature must help students get JOBS, not just certificates"
**Status**: ACTIVE – Shipping ClaimCenter content and learner onboarding improvements

---

## 🎯 Sprint Goal
Deliver a guided first-lesson experience backed by a meaningful ClaimCenter content set so beta learners complete Topic 1 within 24 hours and build momentum through their first 10 topics.

## 📋 Sprint Backlog

### IN PROGRESS


### COMPLETED ✅
- [x] Sprint 3 planning and backlog definition
- [x] Build ClaimCenter content ingestion tooling (admin uploader + snake_case content schema update)
- [x] Seed first 50 ClaimCenter topics with videos, slides, learning objectives, and prerequisite chains
- [x] Implement stalled-learner reminder (Supabase Edge Function email, opt-in, RLS-safe)
- [x] Instrument activation metrics for time-to-first-completion and per-learner topic averages (dashboard/report)
- [x] Enhance onboarding flow: persona guidance, first-topic checklist, contextual tips in topic view
- [x] Capture beta feedback loop (weekly check-in form + changelog integration)

### POST-SPRINT WATCHLIST
- Quiz engine (multiple choice, attempt history)
- Interview simulator (scenario scoring)
- Payment/subscription integration
- Advanced analytics dashboards

---

## 🔗 Context Chain for This Sprint
```
VISION: "Students must get jobs"
  ↓
MASTER ROADMAP: "Sprint 3 – Content Expansion & Onboarding"
  ↓
THIS SPRINT: "Deliver guided first-topic success + rich ClaimCenter content"
  ↓
CURRENT TASK: "Build ClaimCenter content ingestion tooling"
```

---

## 📊 Sprint Targets
- **Velocity**: 5 committed backlog items
- **Content**: 50 ClaimCenter topics published with validated prerequisite sequencing
- **Learner Activation**: ≥70% of new beta learners finish Topic 1 within 24h; average 10 topics completed per active learner
- **Engagement**: Reminder workflow running with opt-in tracking + weekly feedback entries
- **Quality**: Onboarding satisfaction ≥4/5 in beta survey (target sample >=5 responses)

---

## 🎨 Current Working Context

### What's Open in Editor
- `/project-docs/00_PROJECT_PLAN.md` – Roadmap baseline
- `/project-docs/06_CURRENT_SPRINT.md` – This document
- `/project-docs/99_CHANGELOG.md` – Session log

### Current Branch
`main` (pre-deployment)

### Last Session
Session 003 (Sprint 2 wrap) – November 18, 2025

### Next Task
Design content ingestion workflow (schema adjustments, admin UI, or import script) and update runbook sample payloads to snake_case.

### Terminal Commands
```bash
# Content tooling & verification
npm run lint
npm run build
npm run dev
```

---

## 🧭 Decision Log (Sprint 3 Focus)

### Why invest in ingestion tooling first?
- Reliable, structured imports ensure consistency across 50 topics and reduce manual admin effort.
- Snake_case schema aligns with Supabase conventions, easing future analytics and API exposure.

### Why prioritize first-topic onboarding experience?
- Early success is the best predictor of completion—guided walkthrough reduces churn and aligns with jobs-first vision.

### Why automate learner nudges?
- Maintains cohort momentum without manual intervention, keeping costs low while supporting human-quality mentorship.

---

## 🔄 Session Updates

### Session 002 Kickoff – Nov 4, 2025 – 1 hour (Planning)
**Completed**:
- ✅ Drafted Sprint 2 roadmap and backlog
- ✅ Identified production hardening gaps (mentor API, env docs)
- ✅ Defined beta launch success metrics

**Next Session Focus**:
- [ ] Standardize mentor API response + logging
- [ ] Update deployment docs with environment variable canonical names
- [ ] Prepare topic seeding playbook

**Vision Alignment Check**:
Does today's work help students get jobs? **YES**
- Deployment unlocks real learners and job-ready feedback loops.
- Ensures mentor guidance remains cost-effective and reliable in production.

---

## 🔄 Session Update Template
```markdown
### Session [NUMBER] - [DATE] - [HOURS]
**Completed**:
- ✅ [Feature/task]

**Next Session Focus**:
- [ ] [Next priority]

**Vision Alignment Check**:
Does today's work help students get jobs? YES/NO - Why:
```
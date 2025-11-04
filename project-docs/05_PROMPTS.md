# Reusable Prompts for Cursor - Living Library

*Every prompt references the chain: Vision → Current Sprint → Specific Task*

## The Master Chain Reference
Always start prompts with:
```
@project-docs/01_VISION.md → @project-docs/06_CURRENT_SPRINT.md → [SPECIFIC_TASK]
```

---

## 🚀 Session Starter Prompts

### Daily Standup Prompt
```
Good morning! Let's continue building our Guidewire training platform.

Chain check:
@project-docs/01_VISION.md - Remind yourself WHY we're building this
@project-docs/06_CURRENT_SPRINT.md - See TODAY's focus
@project-docs/99_CHANGELOG.md - See yesterday's progress

Current sprint goal: [FROM CURRENT_SPRINT.md]
Yesterday we completed: [FROM CHANGELOG.md]

Today, let's tackle the next item in our sprint. Show me what we're building.
```

### Context Recovery Prompt (After Break)
```
I'm back to continue the Guidewire platform. Restore my full context:

@project-docs/01_VISION.md - The mission
@project-docs/99_CHANGELOG.md - Last 3 sessions
@project-docs/06_CURRENT_SPRINT.md - Current objectives
@project-docs/04_TECHNICAL_SPEC.md - Technical constraints

Summarize:
1. What's built and working
2. What's in progress  
3. What's blocking us
4. Today's priority

Then continue from where we left off.
```

---

## 🏗️ Feature Building Prompts

### New Feature Start
```
Building new feature: [FEATURE_NAME]

Context chain:
@project-docs/01_VISION.md - How does this serve our vision?
@project-docs/02_METHODOLOGY.md - Which part of my process does this automate?
@project-docs/04_TECHNICAL_SPEC.md - Technical patterns to follow
@project-docs/03_MASTER_PLAN.md - Reference implementation approach

Build [FEATURE_NAME] that [SPECIFIC_REQUIREMENT].

Success criteria from vision:
- Must maintain my training quality standards
- Must be scalable to 1000+ users
- Must feel personal despite being automated

Begin implementation.
```

### AI Feature Implementation
```
Implementing AI feature: [FEATURE]

Vision alignment check:
@project-docs/01_VISION.md - "AI must maintain my standards"
@project-docs/02_METHODOLOGY.md - Replacing my [SPECIFIC_PROCESS]
@project-docs/04_TECHNICAL_SPEC.md - Use GPT-4o-mini, implement streaming

Requirements:
- Socratic method (never give direct answers)
- Stream responses for perceived speed
- Track token usage for cost control
- Store conversations for context

Build this maintaining my personal teaching style.
```

---

## 🐛 Debugging Prompts

### Debug With Context
```
Bug in [FEATURE]. Full context needed:

@project-docs/01_VISION.md - Core requirement being violated?
@project-docs/99_CHANGELOG.md - When did this last work?
@project-docs/04_TECHNICAL_SPEC.md - Which spec are we violating?

Error: [ERROR_MESSAGE]
Expected: [EXPECTED_BEHAVIOR]
Actual: [ACTUAL_BEHAVIOR]

Fix this while maintaining our vision of quality training.
```

---

## 📊 Progress Check Prompts

### Sprint Review
```
Sprint review time. Let's assess:

@project-docs/01_VISION.md - Original goals
@project-docs/06_CURRENT_SPRINT.md - Sprint objectives
@project-docs/99_CHANGELOG.md - What we actually built

Generate:
1. Sprint velocity (features completed vs planned)
2. Vision alignment score (are we building the right things?)
3. Technical debt accumulated
4. Next sprint priorities

Update @project-docs/06_CURRENT_SPRINT.md with next sprint.
```

---

## 🚢 Deployment Prompts

### Pre-Deployment Checklist
```
Ready to deploy. Final checks:

@project-docs/01_VISION.md - MVP must deliver core value
@project-docs/04_TECHNICAL_SPEC.md - All specs met?
@project-docs/99_CHANGELOG.md - All critical features complete?

Verify:
- [ ] Auth working
- [ ] 50+ topics loaded
- [ ] AI mentor responding
- [ ] Progress tracking active
- [ ] Mobile responsive
- [ ] Costs within budget

Deploy only if we're delivering on the vision.
```
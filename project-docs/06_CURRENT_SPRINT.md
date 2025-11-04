# Current Sprint - Living Focus Document

*This file is THE SINGLE SOURCE of what we're building RIGHT NOW*

## Sprint: 1 - Foundation Setup (Nov 4-8, 2025)
**Vision Check**: "Every feature must help students get JOBS, not just certificates"

---

## 🎯 Sprint Goal
Build the foundation: project setup, database schema, authentication, and basic topic browsing.

## 📋 Sprint Backlog

### MUST HAVE (Vision Critical)
- [x] ✅ Next.js 15 + TypeScript + Tailwind setup
- [x] ✅ shadcn/ui component library
- [x] ✅ Documentation system (instructions.md, .cursorrules)
- [ ] 🎯 Supabase database schema with RLS
- [ ] 🎯 Authentication system (email + Google OAuth)
- [ ] Topic browsing with sequential locks
- [ ] Progress tracking system

### IN PROGRESS (Session 001)
- [x] ✅ Project initialization - COMPLETE
- [ ] 🎯 Database schema design - NEXT UP

### NOT STARTED
- [ ] Topic browser UI
- [ ] Video player integration
- [ ] AI Mentor integration
- [ ] Admin panel

### POST-MVP (v2)
- [ ] Quiz system
- [ ] Interview simulator
- [ ] Payment/subscription system

---

## 🔗 Context Chain for This Sprint

Every task traces back:
```
VISION: "Students must get jobs"
  ↓
METHODOLOGY: "250 sequential topics with 4-part learning"
  ↓
THIS SPRINT: "Build topic delivery system"
  ↓
CURRENT TASK: "Implement prerequisite checking"
```

---

## 📊 Sprint Metrics
- **Velocity Target**: 7 features
- **Completed**: 3/7
- **Hours Logged**: 2 / 20-28 target
- **Budget Used**: $0 / $600 (6-month budget)

---

## 🎨 Current Working Context

### What's Open in Editor
- `/instructions.md` - Architecture guide
- `/package.json` - Dependencies
- `/project-docs/99_CHANGELOG.md` - Session log

### Current Branch
`main` (initial setup)

### Last Session
Session 001 - November 4, 2025

### Next Task
Setup Supabase and create database schema

### Terminal Commands
```bash
# Not running yet - will start dev server after Supabase setup
# npm run dev  # localhost:3000
```

---

## 🧭 Decision Log for This Sprint

### Why Modular Monolith over Microservices?
- Saves 8-10 hours of infrastructure complexity
- Faster development for MVP
- Can extract modules later if scaling requires it
Implementation: Feature-based modules in /modules directory

### Why GPT-4o-mini as Primary AI Model?
- 10x cheaper than GPT-4o ($0.15/M vs $1.50/M input tokens)
- 90% of capability for training Q&A
- Estimated $46/month for 1,000 users vs $460/month
Implementation: Use Vercel AI SDK for streaming, upgrade to Claude for complex reasoning only

### Why YouTube/Loom for MVP Videos?
- Free CDN and encoding
- Saves 5+ hours of video infrastructure
- Focus on content quality first
Implementation: Store video URLs in topics.content JSONB, migrate to Cloudflare Stream post-MVP

### Why Sequential Learning?
From @project-docs/01_VISION.md: "Sequential learning is KEY - no skipping"
Implementation: Prerequisites array in topics table with server-side checking

### Why Row Level Security (RLS)?
- Database-level security (not just app-level)
- Users can only access their own data
- Prevents security bugs from code errors
Implementation: RLS policies on all Supabase tables

---

## 🔄 Session Updates

### Session 001 - Nov 4, 2025 - 2 hours
**Completed**:
- ✅ Next.js 15 + TypeScript + Tailwind setup
- ✅ Installed all dependencies (Supabase, AI SDK, shadcn/ui, zod, zustand)
- ✅ shadcn/ui configured with 14 components
- ✅ Created instructions.md and .cursorrules
- ✅ Documentation system established

**Next Session Focus**:
- [ ] Setup Supabase project (local + cloud)
- [ ] Design and implement database schema
- [ ] Create RLS policies
- [ ] Build Supabase client utilities

**Vision Alignment Check**:
Does today's work help students get jobs? **YES**
- Solid foundation enables rapid feature development
- Quality tooling ensures professional, maintainable code
- Clear documentation prevents context loss across sessions
- Architecture designed for sequential learning from day one

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
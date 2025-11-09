# 📅 Week 1: Foundation - Database & Architecture

## **Goal**
Build the rock-solid foundation for the InTime Command Center before writing any UI code.

---

## **Day 1: Database Schema ✅**

### **Completed:**
- [x] Comprehensive database schema document
- [x] User profiles with role-based access
- [x] Candidates table with skills, ratings, documents
- [x] Jobs table with client relationships
- [x] Applications table with pipeline stages
- [x] Clients & Contacts tables
- [x] RBAC permissions matrix

### **Files Created:**
- `DATABASE-SCHEMA.md` - Complete entity documentation
- `RBAC-PERMISSIONS.md` - Role-based access control matrix
- `supabase/migrations/crm-ats/001_user_profiles.sql`
- `supabase/migrations/crm-ats/002_candidates.sql`
- `supabase/migrations/crm-ats/003_clients.sql`
- `supabase/migrations/crm-ats/004_jobs_applications.sql`

---

## **Day 2: Complete Migrations & RLS Policies**

### **Tasks:**
- [ ] Create remaining SQL migrations:
  - `005_placements_timesheets.sql` (Operations module)
  - `006_opportunities.sql` (CRM deals)
  - `007_activities.sql` (Activity tracking)
  - `008_system_tables.sql` (Audit logs, notifications)
  - `009_indexes_performance.sql` (Optimize queries)
  - `010_functions_triggers.sql` (Helper functions)

- [ ] Run all migrations on Supabase:
  ```bash
  # Test locally first
  supabase db reset
  supabase migration up
  
  # Then push to production
  supabase db push
  ```

- [ ] Verify RLS policies are working:
  - Test as admin user
  - Test as recruiter (should see only own candidates)
  - Test as sales (should see only own clients)
  - Test cross-role access (recruiter viewing client for their job)

---

## **Day 3: Seed Data & Testing**

### **Tasks:**
- [ ] Create comprehensive seed data script:
  - 5 user profiles (1 admin, 2 recruiters, 1 sales, 1 operations)
  - 20 candidates (various skills, stages, owners)
  - 10 clients (various statuses, tiers)
  - 15 jobs (various priorities, statuses)
  - 30 applications (across all pipeline stages)
  - 10 placements (active, ending soon)
  - 50 activities (notes, calls, emails)

- [ ] Test data relationships:
  - Candidate → Applications → Jobs → Clients
  - Applications → Interviews
  - Jobs → Placements → Timesheets
  - Activities linked to all entities

- [ ] Create TypeScript types from database schema:
  ```bash
  supabase gen types typescript --local > types/supabase.ts
  ```

---

## **Day 4-5: Workflow Documentation**

### **Recruiter Daily Workflow:**
```
8:00 AM - Log in → Check dashboard
        - Review today's interviews (3)
        - Check pipeline (12 candidates in "submitted" stage)
        - New job alert (Senior Guidewire Dev @ BigCorp)

9:00 AM - Source candidates
        - Search internal database (skills: Guidewire, GOSU)
        - Import from LinkedIn (5 new profiles)
        - Parse resumes (AI extraction)
        - Add to pipeline for BigCorp job

10:30 AM - Screen candidates
         - Phone screen with Rajesh K. (30 min)
         - Update notes, technical rating
         - Move to "screening" stage
         - Schedule client interview

12:00 PM - Client check-in
         - Email BigCorp hiring manager
         - Submit 3 candidate profiles
         - Log activity (email sent)

2:00 PM - Interview prep
        - Send calendar invite to candidate
        - Prepare interview scorecard
        - Brief client on candidate background

4:00 PM - Pipeline review
        - 2 offers accepted (celebrate! 🎉)
        - 1 candidate rejected (update status, add notes)
        - Follow up on 5 pending submissions
        - Create tasks for tomorrow

5:00 PM - Wrap up
        - Update candidate statuses
        - Log all activities
        - Set reminders for follow-ups
```

### **Sales Daily Workflow:**
```
8:00 AM - Log in → Check CRM dashboard
        - Review deal pipeline ($2.4M weighted)
        - Hot leads (3 requiring immediate attention)
        - Opportunities closing this week (2)

9:00 AM - Lead qualification
        - New leads from website (4)
        - Research companies (LinkedIn, Clearbit)
        - Send introduction emails
        - Schedule discovery calls

10:30 AM - Discovery call with FinTech Startup
         - Understand hiring needs (10 developers)
         - Discuss contract terms
         - Create opportunity ($180K)
         - Move to "qualified" stage

12:00 PM - Proposal preparation
         - Draft MSA for Insurance Co.
         - Define SOW for 5 placements
         - Price: $150K annual value
         - Send for legal review

2:00 PM - Follow-ups
        - BigCorp (waiting on PO approval)
        - HealthCo (negotiating rates)
        - RetailX (close to signing)

4:00 PM - Deal reviews
        - Update probabilities
        - Log all activities
        - Create tasks for next steps

5:00 PM - Forecasting
        - Review pipeline health
        - Update close dates
        - Report to leadership
```

### **Operations Daily Workflow:**
```
8:00 AM - Check placements dashboard
        - 45 active placements
        - 3 ending in 2 weeks (renewal alert)
        - 7 pending timesheets (send reminders)

9:00 AM - Timesheet review
        - Approve 12 timesheets
        - Reject 1 (overtime not pre-approved)
        - Generate invoices for approved hours

10:30 AM - Contract management
         - Review expiring contracts (30/60/90 days)
         - Send renewal discussions to Account Managers
         - Upload signed documents

12:00 PM - Compliance checks
         - I-9 verification for 2 new placements
         - Background check status
         - Update contract database

2:00 PM - Client satisfaction surveys
        - Send to 5 clients with active placements
        - Review feedback
        - Escalate issues to Account Managers

4:00 PM - Placement transitions
        - Onboard 2 new placements (start next week)
        - Offboard 1 ending placement
        - Update consultant availability

5:00 PM - Reporting
        - Generate weekly placement report
        - Revenue tracking
        - Margin analysis
```

---

## **Day 5: Integration Planning**

### **Priority 1: Email Integration (Gmail API)**
```typescript
// Auto-log emails to candidates/clients
- Detect email to/from candidates
- Extract subject, body, timestamp
- Create activity record
- Link to candidate/client profile
- Show in activity timeline
```

**Implementation:**
- OAuth 2.0 setup with Google
- Webhook for incoming emails
- Background job to sync sent emails
- Parse email content for entity matching

### **Priority 2: Calendar Integration (Google Calendar)**
```typescript
// Interview scheduling
- Create calendar event
- Invite candidate + interviewer
- Auto-generate Zoom/Meet link
- Send reminders (24hr, 2hr before)
- Update application stage when completed
```

**Implementation:**
- Google Calendar API
- Event creation/update/delete
- Attendee management
- Reminder configuration

### **Priority 3: Website Lead Capture**
```typescript
// Auto-create leads from contact form
- Form submission webhook
- Parse form data
- Create client record (if new)
- Create opportunity (lead stage)
- Assign to sales rep
- Send notification
```

**Implementation:**
- Webhook endpoint `/api/webhooks/contact-form`
- Parse form fields (name, email, company, message)
- Lead scoring logic
- Auto-assignment rules

### **Priority 4: LinkedIn Import**
```typescript
// Manual profile import (MVP)
- Paste LinkedIn profile URL
- Scrape public data
- Extract: name, title, company, skills, experience
- Create candidate record
- Upload to database

// Future: LinkedIn API (requires partnership)
```

---

## **Success Criteria for Week 1**

✅ **Database:**
- [ ] All tables created in Supabase
- [ ] RLS policies tested and working
- [ ] Seed data loaded successfully
- [ ] Relationships validated

✅ **Documentation:**
- [ ] Complete schema documentation
- [ ] RBAC matrix defined
- [ ] Workflows documented
- [ ] Integration plan ready

✅ **Testing:**
- [ ] Can create/read/update/delete records as different roles
- [ ] Permissions work correctly (recruiters can't see other's candidates)
- [ ] Foreign keys enforce relationships
- [ ] Indexes improve query performance

✅ **TypeScript:**
- [ ] Types generated from Supabase schema
- [ ] Helper functions for common queries
- [ ] Type-safe database client

---

## **Risks & Mitigation**

**Risk 1:** RLS policies too complex → Performance issues
- **Mitigation:** Test with 10,000+ records, optimize indexes

**Risk 2:** Schema changes needed after UI development
- **Mitigation:** Thorough workflow mapping upfront, flexible migration strategy

**Risk 3:** Supabase storage limits exceeded
- **Mitigation:** Store large files (resumes) in Supabase Storage, only URLs in database

---

## **Next: Week 2 Preview**

Once Week 1 foundation is complete, Week 2 will focus on:
1. Fix employee vs student login routing
2. Build employee dashboard (role-based)
3. Start ATS UI (candidate list, job list)
4. Basic search & filters
5. Candidate detail view

**No UI until foundation is solid! 🏗️**


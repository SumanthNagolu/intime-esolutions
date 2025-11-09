# 🎯 Recruiter Daily Workflow

## **Complete Day in the Life of a Recruiter**

---

## **Morning Routine (8:00 AM - 10:00 AM)**

### **1. Dashboard Check-in (8:00 AM - 8:15 AM)**

```typescript
// Navigate to /employee/dashboard
// Auto-filtered to show recruiter's data

View Summary Cards:
✓ Active Candidates: 47
✓ Open Jobs: 12
✓ Active Applications: 64
✓ Interviews This Week: 8
✓ Placements This Month: 3

Quick Actions:
→ Today's Interviews (3)
→ Pending Submissions (5)
→ Follow-up Required (7)
→ Hot Jobs (2)
```

**Tasks:**
- Review overnight activity (emails, candidate responses)
- Check today's interview schedule
- Identify urgent follow-ups
- Review new job postings from clients

---

### **2. Interview Preparation (8:15 AM - 9:00 AM)**

**Today's Interviews:**
```
10:00 AM - Rajesh Kumar (Phone Screen) → BigCorp Guidewire Job
2:00 PM - Sarah Johnson (Client Interview) → HealthTech Full Stack
4:00 PM - Michael Chen (Technical Round) → Insurance Co Architect
```

**For Each Interview:**

```sql
-- Pull interview details
SELECT
  i.*,
  c.first_name, c.last_name, c.resume_url,
  j.title, j.client_id,
  cl.name as client_name
FROM interviews i
JOIN applications a ON a.id = i.application_id
JOIN candidates c ON c.id = a.candidate_id
JOIN jobs j ON j.id = a.job_id
JOIN clients cl ON cl.id = j.client_id
WHERE i.interviewer_id = auth.uid()
AND i.scheduled_at::date = CURRENT_DATE
AND i.status = 'scheduled'
ORDER BY i.scheduled_at;
```

**Preparation Checklist:**
- ✅ Review candidate resume
- ✅ Check application notes
- ✅ Review job requirements
- ✅ Prepare scorecard
- ✅ Test meeting link (Zoom/Meet)
- ✅ Send calendar reminder to candidate
- ✅ Brief interviewer (if client interview)

---

### **3. Candidate Sourcing (9:00 AM - 10:00 AM)**

**Hot Job Alert:** Senior Guidewire Developer @ BigCorp (Priority: HOT 🔥)

#### **Sourcing Channels:**

**A. Internal Database Search**
```sql
-- Search for Guidewire candidates
SELECT *
FROM candidates
WHERE status = 'active'
AND deleted_at IS NULL
AND 'Guidewire' = ANY(skills)
AND (
  'ClaimCenter' = ANY(skills)
  OR 'PolicyCenter' = ANY(skills)
  OR 'BillingCenter' = ANY(skills)
)
AND availability IN ('immediate', 'within_2_weeks')
ORDER BY overall_rating DESC, years_of_experience DESC
LIMIT 20;
```

**Results:** 8 matching candidates  
**Action:** Review profiles, shortlist top 3

**B. LinkedIn Search**
```
Search: "Guidewire Developer" + "ClaimCenter" + "Available"
Location: 50 miles from Jersey City, NJ
Filter: Open to new opportunities
```

**Found:** 12 potential candidates  
**Action:** Send InMail to top 5

**C. Resume Database Import**
```typescript
// Upload 5 resumes (PDF)
// AI parsing extracts:
- Name, Email, Phone
- Skills, Certifications
- Experience, Education
- Current Title, Location

// Auto-create candidate records
// Auto-assign to recruiter (you)
```

---

## **Mid-Morning (10:00 AM - 12:00 PM)**

### **4. Phone Screen Interview (10:00 AM - 10:30 AM)**

**Candidate:** Rajesh Kumar  
**Job:** Senior Guidewire Developer @ BigCorp  
**Type:** Phone Screen

**Interview Flow:**

```
1. Introduction (2 min)
   - Thank candidate for time
   - Explain interview format
   - Build rapport

2. Background Review (5 min)
   - Walk through resume
   - Clarify Guidewire experience (8 years)
   - Projects: ClaimCenter implementation at 3 Fortune 500s
   - Technical stack: GOSU, Java, Integration

3. Job Alignment (5 min)
   - Describe BigCorp opportunity
   - Location: Hybrid (Jersey City, NJ)
   - Rate: $90-110/hr
   - Duration: 12 months contract
   - Start date: ASAP

4. Technical Assessment (10 min)
   - Guidewire ClaimCenter knowledge
   - GOSU coding experience
   - Integration patterns
   - Cloud migration experience

5. Logistics (5 min)
   - Availability: Within 2 weeks ✓
   - Authorization: H1B ✓
   - Rate expectation: $95/hr ✓
   - Relocation: Not needed ✓

6. Next Steps (3 min)
   - Submit to client (if strong)
   - Expected timeline
   - Questions from candidate
```

**Post-Interview Actions:**

```typescript
// Update application
UPDATE applications
SET
  stage = 'screening',
  interview_completed_at = NOW(),
  interview_feedback = 'Strong candidate. 8 years Guidewire exp. ClaimCenter expert. GOSU proficient. Available in 2 weeks. Rate aligned. Ready to submit.'
WHERE id = application_id;

// Add activity
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description
) VALUES (
  'candidate', rajesh_id, 'call',
  'Phone Screen Completed - Strong Pass',
  'Excellent technical background. 8 years Guidewire experience across ClaimCenter, PolicyCenter. Led 3 major implementations. GOSU expert. Rate: $95/hr. Available: Nov 25. Recommend immediate submission to BigCorp.'
);

// Update candidate rating
UPDATE candidates
SET
  technical_rating = 5,
  communication_rating = 4,
  overall_rating = 5
WHERE id = rajesh_id;

// Create notification for account manager
INSERT INTO notifications (
  user_id, type, title, message, entity_type, entity_id
) VALUES (
  account_manager_id, 'candidate_ready',
  'Rajesh Kumar ready for submission to BigCorp',
  'Strong technical screen. Ready to submit for Senior Guidewire Developer role.',
  'candidate', rajesh_id
);
```

---

### **5. Client Communication (10:45 AM - 11:30 AM)**

**Task:** Submit 3 candidates to BigCorp for review

**Submission Packet:**
- Rajesh Kumar (just screened)
- Priya Sharma (screened yesterday)
- Michael Chen (existing candidate, available again)

**Email Template:**

```
To: john.smith@bigcorp.com
CC: account_manager@intimesolutions.com
Subject: 3 Strong Guidewire ClaimCenter Candidates - Ready for Review

Hi John,

I'm excited to share 3 exceptional Guidewire ClaimCenter developers for your Senior Developer position (Req #GW-2024-001).

All candidates:
✓ 5+ years Guidewire experience
✓ ClaimCenter implementation expertise
✓ Available within 2 weeks
✓ Rate range: $90-105/hr

📎 Attachments:
- Rajesh_Kumar_Resume.pdf (8 yrs exp, H1B, $95/hr)
- Priya_Sharma_Resume.pdf (6 yrs exp, GC, $85/hr)
- Michael_Chen_Resume.pdf (12 yrs exp, USC, $105/hr)

I've included a comparison matrix highlighting their key strengths.

Can we schedule a brief call this week to discuss? I'm confident one of these candidates will be a great fit.

Best regards,
Jane Recruiter
InTime eSolutions
jane.recruiter@intimesolutions.com
```

**System Actions:**

```sql
-- Update applications to 'submitted'
UPDATE applications
SET
  stage = 'submitted',
  submitted_to_client_at = NOW(),
  submitted_by = auth.uid()
WHERE id IN (rajesh_app_id, priya_app_id, michael_app_id);

-- Log activity
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description, direction
) VALUES
  ('job', job_id, 'email', '3 Candidates Submitted to BigCorp',
   'Submitted Rajesh Kumar, Priya Sharma, Michael Chen for review. All meet requirements. Awaiting client feedback.',
   'outbound');
```

---

### **6. Pipeline Management (11:30 AM - 12:00 PM)**

**Review Kanban Board:**

```
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ SOURCED  │ SCREENING│ SUBMITTED│ INTERVIEW│  OFFER   │ PLACED   │
│   (12)   │   (8)    │   (15)   │   (10)   │   (2)    │   (1)    │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
```

**Actions:**
- **Sourced (12):** Schedule phone screens for top 5
- **Screening (8):** Complete 3 screens today
- **Submitted (15):** Follow up on 5 pending > 3 days
- **Interview (10):** Prep for 3 today
- **Offer (2):** Check acceptance status
- **Placed (1):** Celebrate! 🎉

**Follow-ups Required:**

```sql
-- Candidates in 'submitted' for > 3 days without client response
SELECT
  a.id,
  c.first_name || ' ' || c.last_name as candidate_name,
  j.title as job_title,
  cl.name as client_name,
  a.submitted_to_client_at,
  NOW() - a.submitted_to_client_at as days_pending
FROM applications a
JOIN candidates c ON c.id = a.candidate_id
JOIN jobs j ON j.id = a.job_id
JOIN clients cl ON cl.id = j.client_id
WHERE a.owner_id = auth.uid()
AND a.stage = 'submitted'
AND a.submitted_to_client_at < NOW() - INTERVAL '3 days'
ORDER BY a.submitted_to_client_at;
```

**Result:** 5 applications need follow-up

**Action:** Send follow-up email to each client contact

---

## **Lunch & Admin (12:00 PM - 1:00 PM)**

- Quick lunch
- Respond to candidate emails
- Review LinkedIn messages
- Update notes in system

---

## **Afternoon (1:00 PM - 5:00 PM)**

### **7. New Job Intake (1:00 PM - 1:45 PM)**

**New Job Alert:** Liberty Mutual - Guidewire PolicyCenter Lead

**Intake Call with Client:**

```
Attendees:
- Michael Brown (Client - Director of Technology)
- Jane Recruiter (InTime - You)
- Account Manager (InTime)

Agenda:
1. Job Overview (10 min)
2. Requirements Deep-Dive (15 min)
3. Interview Process (10 min)
4. Timeline & Logistics (10 min)
```

**Job Intake Form:**

```typescript
{
  title: "Guidewire PolicyCenter Lead",
  client: "Liberty Mutual",
  location: "Boston, MA",
  remote_policy: "remote",
  employment_type: "contract",
  duration_months: 6,
  rate_min: 120,
  rate_max: 140,
  
  requirements: [
    "Guidewire PolicyCenter 10.x",
    "Leadership experience (team of 3-5)",
    "8+ years Guidewire",
    "GOSU expert",
    "Cloud migration experience (AWS/Azure)"
  ],
  
  nice_to_have: [
    "Consulting background",
    "Prior Big 4 experience",
    "Insurance domain knowledge"
  ],
  
  interview_process: [
    "Phone screen with hiring manager",
    "Technical interview (2 hours)",
    "Leadership interview",
    "Final round with VP"
  ],
  
  timeline: {
    target_fill_date: "2024-12-15",
    start_date: "2025-01-02"
  },
  
  priority: "hot",
  openings: 1
}
```

**Post-Call Actions:**

```sql
-- Create job in system
INSERT INTO jobs (
  title, client_id, client_contact_id, location, remote_policy,
  employment_type, duration_months, rate_min, rate_max,
  requirements, nice_to_have, status, priority, openings,
  owner_id, posted_date, target_fill_date
) VALUES (...);

-- Create activity
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description
) VALUES (
  'job', job_id, 'meeting',
  'Job Intake Call - PolicyCenter Lead',
  'Discussed requirements with Michael Brown. Hot priority. Target fill: Dec 15. Rate: $120-140/hr. Looking for leadership + technical expert.'
);

-- Notify team
INSERT INTO notifications (
  user_id, type, title, message
) VALUES (
  team_lead_id, 'new_job',
  'HOT Job: Guidewire PolicyCenter Lead @ Liberty Mutual',
  'Remote, $120-140/hr, 6 months. Target fill: Dec 15.'
);
```

---

### **8. Client Interview Coordination (2:00 PM - 3:00 PM)**

**Sarah Johnson - Client Interview @ HealthTech**

**Pre-Interview:**
- Sent calendar invite to candidate (done yesterday)
- Briefed client interviewer (David Lee - CTO)
- Prepared interview scorecard
- Tested Zoom link

**During Interview:**
- Monitor time (recruiter not in the room)
- Available for questions
- Track interview completion

**Post-Interview:**

```
3:15 PM - Interview completed
3:20 PM - Quick debrief with client

Client Feedback:
✓ Strong technical skills (React, Node.js)
✓ Good cultural fit
✓ Communication excellent
⚠️ Rate slightly higher than budget ($110 vs $100)
→ Decision: Move forward, negotiate rate

Next Steps:
1. Collect formal feedback
2. Discuss rate with candidate
3. Schedule final round (if rate aligns)
```

**System Update:**

```sql
-- Update interview status
UPDATE interviews
SET
  status = 'completed',
  feedback = 'Strong technical performance. Client impressed with React/Node.js skills. Cultural fit confirmed. Rate discussion needed ($110 vs $100 budget).',
  rating = 4,
  recommendation = 'yes'
WHERE id = interview_id;

-- Update application stage
UPDATE applications
SET stage = 'interview_completed'
WHERE id = application_id;

-- Create task for rate negotiation
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'application', application_id, 'task',
  'Negotiate rate with Sarah Johnson ($110 → $105)',
  NOW() + INTERVAL '1 day',
  auth.uid()
);
```

---

### **9. Candidate Counseling (3:00 PM - 3:30 PM)**

**Call with Priya Sharma** (submitted to BigCorp 2 days ago)

**Topics:**
1. Status update (BigCorp reviewing resumes)
2. Interview prep tips
3. Expected timeline
4. Rate negotiation strategy
5. Answer questions

**Post-Call:**

```sql
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description
) VALUES (
  'candidate', priya_id, 'call',
  'Status Update & Interview Prep',
  'Discussed BigCorp opportunity. Candidate very interested. Provided interview tips. Confirmed availability (immediate). Discussed rate flexibility ($80-85/hr).'
);
```

---

### **10. Administrative Work (3:30 PM - 4:30 PM)**

**A. Update Candidate Records**
- Add notes from today's calls
- Upload new resumes
- Update availability status
- Tag candidates by skill

**B. Job Board Posting**
- Post 3 jobs to LinkedIn
- Post 2 jobs to Indeed
- Update company career page

**C. Metrics Review**

```sql
-- This week's performance
SELECT
  'candidates_added' as metric,
  COUNT(*) as value
FROM candidates
WHERE owner_id = auth.uid()
AND created_at >= DATE_TRUNC('week', CURRENT_DATE)

UNION ALL

SELECT
  'applications_submitted',
  COUNT(*)
FROM applications
WHERE owner_id = auth.uid()
AND submitted_to_client_at >= DATE_TRUNC('week', CURRENT_DATE)

UNION ALL

SELECT
  'interviews_completed',
  COUNT(*)
FROM interviews i
JOIN applications a ON a.id = i.application_id
WHERE a.owner_id = auth.uid()
AND i.status = 'completed'
AND i.scheduled_at >= DATE_TRUNC('week', CURRENT_DATE);
```

**This Week:**
- Candidates Added: 7
- Applications Submitted: 12
- Interviews Completed: 5
- Placements: 1 🎉

---

### **11. Technical Interview (4:00 PM - 5:00 PM)**

**Michael Chen - Technical Round @ Insurance Co**

(Similar flow to earlier interview, but more technical depth)

---

## **End of Day (5:00 PM - 5:30 PM)**

### **12. Wrap-Up & Planning**

**Tasks:**
- ✅ Update all application statuses
- ✅ Log all activities
- ✅ Send follow-up emails
- ✅ Review tomorrow's calendar
- ✅ Set reminders for pending items
- ✅ Check notifications (mark as read)

**Tomorrow's Preview:**

```
8:00 AM - Dashboard review
9:00 AM - Phone screen (2 candidates)
11:00 AM - Client check-in call (BigCorp)
1:00 PM - Interview prep
2:00 PM - Technical interview
4:00 PM - Pipeline review meeting
```

**Pending Follow-ups:**

```sql
-- Open tasks due this week
SELECT *
FROM activities
WHERE assigned_to = auth.uid()
AND activity_type = 'task'
AND is_completed = false
AND due_date <= CURRENT_DATE + INTERVAL '7 days'
ORDER BY due_date;
```

---

## **Key Metrics (Daily Tracking)**

```typescript
{
  candidates_contacted: 15,
  phone_screens: 3,
  candidates_submitted: 3,
  client_calls: 2,
  interviews_coordinated: 3,
  follow_ups_sent: 8,
  new_candidates_added: 5,
  pipeline_updates: 47
}
```

---

## **Success Patterns**

### **What Makes a Great Recruiter:**

1. **Speed:** Respond to candidates within 2 hours
2. **Quality:** Only submit candidates who meet 80%+ requirements
3. **Communication:** Keep candidates informed every 2-3 days
4. **Organization:** Update system in real-time
5. **Proactivity:** Don't wait for client to follow up
6. **Relationship:** Build trust with candidates & clients

### **Red Flags to Avoid:**

❌ Submitting unqualified candidates  
❌ Not screening before submission  
❌ Forgetting to follow up  
❌ Missing interview prep  
❌ Not updating system  
❌ Over-promising to candidates  

### **Best Practices:**

✅ Screen every candidate before submission  
✅ Set clear expectations with candidates  
✅ Follow up every 3 days on pending applications  
✅ Prepare for every interview  
✅ Log every interaction immediately  
✅ Build long-term candidate relationships  

---

**End of Recruiter Workflow** 🎯


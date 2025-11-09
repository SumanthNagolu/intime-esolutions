# ⚙️ Operations Manager Daily Workflow

## **Complete Day in the Life of an Operations Manager**

---

## **Morning Routine (8:00 AM - 10:00 AM)**

### **1. Operations Dashboard Check (8:00 AM - 8:30 AM)**

```typescript
// Navigate to /employee/operations-dashboard
// Real-time metrics for all active placements

View Summary Cards:
✓ Active Placements: 45
✓ Ending in 30 Days: 3
✓ Pending Timesheets: 7
✓ Timesheets to Approve: 12
✓ Expiring Contracts: 5 (30-day alert)
✓ Compliance Items: 2

Weekly Billing:
→ Total Hours Submitted: 1,800
→ Pending Approval: 280 hours
→ Approved for Invoicing: 1,520 hours
→ Estimated Revenue: $152,000
```

**Priority Actions:**
- Approve 12 pending timesheets
- Follow up on 7 missing timesheets
- Address 2 compliance items (I-9, background check)
- Review 3 placements ending soon (renewal discussions)
- Process 2 new placement onboarding

---

### **2. Timesheet Management (8:30 AM - 9:30 AM)**

**Pending Timesheets (Submitted, Awaiting Approval):**

```sql
-- Timesheets submitted but not yet approved
SELECT
  t.id,
  t.week_start_date,
  t.week_end_date,
  t.hours_worked,
  t.overtime_hours,
  t.submitted_at,
  c.first_name || ' ' || c.last_name as consultant_name,
  cl.name as client_name,
  p.bill_rate,
  (t.hours_worked * p.bill_rate) as billing_amount
FROM timesheets t
JOIN placements p ON p.id = t.placement_id
JOIN candidates c ON c.id = p.candidate_id
JOIN clients cl ON cl.id = p.client_id
WHERE t.status = 'submitted'
AND t.submitted_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY t.submitted_at;
```

**Review Process (for each timesheet):**

```typescript
// Timesheet Review Checklist
{
  consultant: "Rajesh Kumar",
  client: "Progressive Insurance",
  week: "Nov 4-10, 2024",
  hours: {
    regular: 40,
    overtime: 5,
    total: 45
  },
  
  validation_checks: [
    {
      check: "Hours within expected range (35-50)",
      status: "✅ Pass",
      value: 45
    },
    {
      check: "Overtime pre-approved",
      status: "⚠️ Review",
      note: "Check with account manager"
    },
    {
      check: "Consultant availability status",
      status: "✅ Pass",
      value: "Active placement"
    },
    {
      check: "Client PO not expired",
      status: "✅ Pass",
      expiry: "2025-03-31"
    }
  ],
  
  decision: "Approve with note (overtime needs AM approval)"
}
```

**Approve Timesheet:**

```sql
-- Approve timesheet
UPDATE timesheets
SET
  status = 'approved',
  approved_by = auth.uid(),
  approved_at = NOW()
WHERE id = timesheet_id;

-- Log activity
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description
) VALUES (
  'placement', placement_id, 'note',
  'Timesheet Approved - Week of Nov 4',
  '45 hours (40 reg + 5 OT). Billing: $4,275. Overtime pre-approved by AM. Ready for invoicing.'
);

-- Notify accounts receivable
INSERT INTO notifications (
  user_id, type, title, message
) VALUES (
  ar_user_id, 'timesheet_approved',
  'Timesheet approved: Rajesh Kumar @ Progressive',
  'Week of Nov 4. 45 hours. $4,275. Ready for invoicing.'
);
```

**Reject Timesheet (if issues found):**

```sql
UPDATE timesheets
SET
  status = 'rejected',
  rejected_at = NOW(),
  rejection_reason = 'Overtime not pre-approved. Please resubmit with correct hours or provide approval from client.'
WHERE id = timesheet_id;

-- Notify consultant & recruiter
INSERT INTO notifications (
  user_id, type, title, message, priority
) VALUES
  (consultant_user_id, 'timesheet_rejected', 'Timesheet rejected - Week of Nov 4', 'Reason: Overtime not pre-approved. Please resubmit.', 'high'),
  (recruiter_id, 'timesheet_rejected', 'Timesheet rejected - Rajesh Kumar', 'OT not approved. Follow up with client.', 'medium');
```

**Results:**
- ✅ Approved: 10 timesheets ($48,500 billing)
- ❌ Rejected: 2 timesheets (awaiting corrections)

---

**Missing Timesheets (Overdue):**

```sql
-- Placements without timesheets for current week (Friday reminder)
SELECT
  p.id,
  c.first_name || ' ' || c.last_name as consultant_name,
  c.email,
  cl.name as client_name,
  p.recruiter_id,
  DATE_TRUNC('week', CURRENT_DATE)::date as expected_week_start
FROM placements p
JOIN candidates c ON c.id = p.candidate_id
JOIN clients cl ON cl.id = p.client_id
WHERE p.status = 'active'
AND NOT EXISTS (
  SELECT 1 FROM timesheets t
  WHERE t.placement_id = p.id
  AND t.week_start_date = DATE_TRUNC('week', CURRENT_DATE)::date
)
AND EXTRACT(DOW FROM CURRENT_DATE) = 5; -- Friday only
```

**Send Reminders:**

```typescript
// For each missing timesheet
{
  to: consultant_email,
  subject: "Timesheet Reminder - Week of Nov 4",
  body: `
    Hi ${consultant_name},

    This is a friendly reminder to submit your timesheet for the week of November 4-10, 2024.

    Please submit by end of day Friday to ensure timely payment processing.

    If you need assistance, please contact your recruiter.

    Thank you!
    InTime Operations Team
  `
}

// Log reminder
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject
) VALUES (
  'placement', placement_id, 'email',
  'Timesheet reminder sent to consultant'
);
```

---

### **3. New Placement Onboarding (9:30 AM - 10:00 AM)**

**New Starts This Week:**
1. **Sarah Johnson** @ HealthTech (starts Monday)
2. **David Martinez** @ RetailMax (starts Wednesday)

**Onboarding Checklist (for each):**

```typescript
{
  placement_id: sarah_johnson_placement_id,
  consultant: "Sarah Johnson",
  client: "HealthTech",
  start_date: "2024-11-11",
  
  pre_start_checklist: [
    {
      task: "I-9 verification",
      status: "✅ Complete",
      date: "2024-11-05"
    },
    {
      task: "Background check",
      status: "✅ Clear",
      date: "2024-11-06"
    },
    {
      task: "Drug screen",
      status: "✅ Negative",
      date: "2024-11-07"
    },
    {
      task: "W2/1099 election",
      status: "✅ W2 selected",
      date: "2024-11-04"
    },
    {
      task: "Direct deposit setup",
      status: "✅ Complete",
      date: "2024-11-04"
    },
    {
      task: "Benefits enrollment",
      status: "⏳ Pending",
      due: "2024-11-10",
      action: "Follow up with Sarah"
    },
    {
      task: "Client system access",
      status: "⏳ In Progress",
      due: "2024-11-10",
      action: "Contact client IT"
    },
    {
      task: "Orientation scheduled",
      status: "✅ Confirmed",
      date: "2024-11-11 9:00 AM"
    }
  ],
  
  contracts: [
    {
      type: "Offer Letter",
      status: "Signed",
      signed_date: "2024-11-01"
    },
    {
      type: "W2 Agreement",
      status: "Signed",
      signed_date: "2024-11-04"
    },
    {
      type: "Client SOW",
      status: "Executed",
      signed_date: "2024-10-28"
    }
  ],
  
  day_one_tasks: [
    "Send welcome email with client contact info",
    "Share orientation agenda",
    "Confirm start time & location",
    "Provide InTime contact (account manager)",
    "Explain timesheet process",
    "Schedule 30-day check-in"
  ]
}
```

**Send Welcome Email:**

```
To: sarah.johnson@example.com
CC: recruiter@intimesolutions.com, account_manager@intimesolutions.com
Subject: Welcome to InTime eSolutions - Starting Monday at HealthTech!

Hi Sarah,

Congratulations on your new position with HealthTech! We're excited to have you on the InTime team.

Your Start Details:
📅 Date: Monday, November 11, 2024
🕘 Time: 9:00 AM
📍 Location: 123 Tech Dr, San Francisco, CA 94102
👤 Report to: David Lee (CTO)

First Day Agenda:
- 9:00 AM: Orientation with HR
- 10:00 AM: IT setup (laptop, access)
- 11:00 AM: Meet the team
- 1:00 PM: Project kickoff with Engineering Manager

Your InTime Team:
- Account Manager: Emily Brown (emily.brown@intimesolutions.com)
- Recruiter: Jane Recruiter (jane.recruiter@intimesolutions.com)
- Operations: John Ops (john.ops@intimesolutions.com)

Important Reminders:
✓ Timesheets due every Friday
✓ Report any issues to your Account Manager
✓ We'll check in with you after 30 days

Have a great first day! We're here if you need anything.

Welcome aboard!
John Ops
Operations Manager
```

**System Updates:**

```sql
-- Update placement status
UPDATE placements
SET status = 'active'
WHERE id = sarah_placement_id;

-- Create 30-day check-in task
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'placement', sarah_placement_id, 'task',
  '30-day check-in call with Sarah Johnson',
  CURRENT_DATE + INTERVAL '30 days',
  account_manager_id
);

-- Create 90-day performance review task
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'placement', sarah_placement_id, 'task',
  '90-day performance review - Sarah @ HealthTech',
  CURRENT_DATE + INTERVAL '90 days',
  account_manager_id
);
```

---

## **Mid-Morning (10:00 AM - 12:00 PM)**

### **4. Contract Management (10:00 AM - 11:00 AM)**

**Expiring Contracts (30/60/90 day alerts):**

```sql
-- Contracts expiring in next 90 days
SELECT
  c.id,
  c.contract_type,
  c.contract_number,
  c.entity_type,
  c.entity_id,
  c.expiration_date,
  c.expiration_date - CURRENT_DATE as days_until_expiry,
  CASE
    WHEN c.entity_type = 'placement' THEN (
      SELECT cl.name || ' - ' || cand.first_name || ' ' || cand.last_name
      FROM placements p
      JOIN clients cl ON cl.id = p.client_id
      JOIN candidates cand ON cand.id = p.candidate_id
      WHERE p.id = c.entity_id
    )
    WHEN c.entity_type = 'client' THEN (
      SELECT name FROM clients WHERE id = c.entity_id
    )
  END as related_entity
FROM contracts c
WHERE c.status = 'signed'
AND c.expiration_date <= CURRENT_DATE + INTERVAL '90 days'
ORDER BY c.expiration_date;
```

**Results:**

| Contract | Type | Entity | Expiry | Days Left | Action Needed |
|----------|------|--------|--------|-----------|---------------|
| MSA-24-0015 | MSA | BigCorp | Nov 30 | 18 | 🔴 Renewal urgent |
| SOW-24-0234 | SOW | Progressive - Rajesh | Dec 15 | 33 | 🟡 Discuss extension |
| NDA-24-0089 | NDA | HealthFirst | Jan 5 | 54 | 🟢 Monitor |

**Contract Renewal Process:**

**1. MSA Renewal (BigCorp) - URGENT**

```typescript
{
  client: "BigCorp Insurance",
  contract_type: "MSA",
  current_expiry: "2024-11-30",
  days_left: 18,
  urgency: "HIGH",
  
  renewal_actions: [
    "Contact account manager (Emily Brown)",
    "Schedule renewal call with client",
    "Prepare updated MSA (same terms?)",
    "Get legal review (5 days)",
    "Signature (5 days)",
    "Total time needed: 10 days minimum"
  ],
  
  risk: "10 active placements at BigCorp ($1.2M/year). No MSA = stop work."
}
```

**Send Alert to Account Manager:**

```sql
INSERT INTO notifications (
  user_id, type, title, message, entity_type, entity_id, priority
) VALUES (
  account_manager_id, 'contract_expiring',
  'URGENT: BigCorp MSA expires in 18 days',
  '10 active placements at risk ($1.2M/year). MSA expires Nov 30. Need renewal signed by Nov 25 at latest.',
  'contract', msa_id, 'urgent'
);

-- Create task
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'client', bigcorp_id, 'task',
  'Renew BigCorp MSA (expires Nov 30)',
  CURRENT_DATE + INTERVAL '5 days',
  account_manager_id
);
```

**2. SOW Extension (Progressive - Rajesh) - DISCUSS**

```typescript
{
  placement: "Rajesh Kumar @ Progressive",
  contract_type: "SOW",
  current_end_date: "2024-12-15",
  days_left: 33,
  
  extension_discussion: {
    current_rate: "$95/hr",
    current_end: "Dec 15, 2024",
    proposed_extension: "6 months (through June 2025)",
    client_satisfaction: "4.8/5 (excellent)",
    likelihood: "High (client happy with Rajesh)"
  },
  
  action_plan: [
    "Contact account manager to initiate discussion",
    "Check consultant availability (does Rajesh want to extend?)",
    "Propose extension to client",
    "Prepare SOW amendment",
    "Get signatures by Nov 30"
  ]
}
```

**Email to Account Manager:**

```
To: emily.brown@intimesolutions.com
Subject: Rajesh @ Progressive - SOW ending Dec 15

Hi Emily,

Rajesh Kumar's SOW at Progressive expires on December 15 (33 days from now).

Performance Metrics:
- Client satisfaction: 4.8/5
- Timesheet compliance: 100%
- No issues reported
- Project: ClaimCenter implementation (ongoing)

Recommendation: Propose 6-month extension through June 2025.

Next Steps:
1. Confirm Rajesh wants to extend
2. Discuss with client (John Smith)
3. Prepare SOW amendment
4. Target signature by Nov 30

Let me know if you need anything!

John Ops
```

---

### **5. Compliance Management (11:00 AM - 12:00 PM)**

**Pending Compliance Items:**

```sql
-- Consultants with missing or expiring compliance documents
SELECT
  c.id,
  c.first_name || ' ' || c.last_name as consultant_name,
  c.work_authorization,
  p.id as placement_id,
  cl.name as client_name
FROM candidates c
JOIN placements p ON p.candidate_id = c.id AND p.status = 'active'
JOIN clients cl ON cl.id = p.client_id
WHERE
  -- I-9 missing or expired
  NOT EXISTS (
    SELECT 1 FROM contracts ct
    WHERE ct.entity_type = 'candidate'
    AND ct.entity_id = c.id
    AND ct.contract_type = 'i9'
    AND ct.status = 'signed'
    AND ct.expiration_date > CURRENT_DATE
  )
  OR
  -- Work authorization expiring soon
  (c.work_authorization IN ('opt', 'ead', 'h1b')
   AND NOT EXISTS (
     SELECT 1 FROM documents d
     WHERE d.entity_type = 'candidate'
     AND d.entity_id = c.id
     AND d.document_type = 'work_authorization'
     AND d.expiration_date > CURRENT_DATE + INTERVAL '60 days'
   ));
```

**Results:**
1. **Kevin Patel** (H1B) - Work authorization expires Jan 15, 2025 (65 days)
2. **Maria Rodriguez** - I-9 missing

**Actions:**

**1. H1B Renewal Reminder (Kevin Patel)**

```
To: kevin.patel@example.com
CC: recruiter@intimesolutions.com
Subject: H1B Renewal Reminder - Expires January 15

Hi Kevin,

This is a reminder that your H1B visa expires on January 15, 2025 (65 days from now).

To continue your placement at TechCorp, please:
1. Initiate H1B renewal with your immigration attorney
2. Provide us with:
   - Receipt notice (I-797) as soon as filed
   - Updated I-94 when renewed
   - Updated EAD card (if applicable)

Timeline:
- File by: November 15 (latest)
- Renewal typically takes: 4-6 months

If you need help finding an immigration attorney, we can provide referrals.

Please update us on your renewal status by November 15.

Thank you!
John Ops
```

**2. I-9 Follow-up (Maria Rodriguez)**

```sql
-- Create urgent task
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'candidate', maria_id, 'task',
  'URGENT: Complete I-9 verification for Maria Rodriguez',
  CURRENT_DATE + INTERVAL '2 days',
  hr_user_id
);

-- Notify HR
INSERT INTO notifications (
  user_id, type, title, message, priority
) VALUES (
  hr_user_id, 'compliance_alert',
  'Missing I-9: Maria Rodriguez',
  'Active placement at RetailCo. I-9 not on file. Must complete within 3 days.',
  'urgent'
);
```

---

## **Lunch & Admin (12:00 PM - 1:00 PM)**

- Lunch
- Review emails
- Process invoices
- Check Slack/Teams

---

## **Afternoon (1:00 PM - 5:00 PM)**

### **6. Placement Renewals & Extensions (1:00 PM - 2:30 PM)**

**Placements Ending in 30 Days:**

```sql
-- Active placements ending soon
SELECT
  p.id,
  c.first_name || ' ' || c.last_name as consultant_name,
  cl.name as client_name,
  p.end_date,
  p.end_date - CURRENT_DATE as days_until_end,
  p.bill_rate,
  p.margin_percentage,
  p.client_satisfaction,
  p.recruiter_id,
  p.account_manager_id
FROM placements p
JOIN candidates c ON c.id = p.candidate_id
JOIN clients cl ON cl.id = p.client_id
WHERE p.status IN ('active', 'ending_soon')
AND p.end_date <= CURRENT_DATE + INTERVAL '30 days'
AND p.end_date > CURRENT_DATE
ORDER BY p.end_date;
```

**Results:**

| Consultant | Client | End Date | Days Left | Rate | Satisfaction | Likelihood |
|------------|--------|----------|-----------|------|--------------|------------|
| Michael Chen | Insurance Co | Nov 25 | 13 | $140 | 5.0 | ✅ High (extend) |
| Amanda Wilson | HealthTech | Dec 1 | 19 | $115 | 4.5 | ✅ Medium (discuss) |
| Jennifer Lee | RetailCo | Dec 10 | 28 | $95 | 3.5 | ❌ Low (ending) |

**Extension Process:**

**High Priority: Michael Chen @ Insurance Co**

```typescript
{
  consultant: "Michael Chen",
  client: "Insurance Co",
  current_contract: {
    role: "Guidewire Architect",
    start: "2024-05-25",
    end: "2024-11-25",
    duration: 6,
    rate: "$140/hr",
    margin: "28%"
  },
  
  performance: {
    client_satisfaction: 5.0,
    timesheet_compliance: "100%",
    quality: "Excellent",
    feedback: "Client wants to extend, critical to project"
  },
  
  extension_proposal: {
    duration: "6 months (through May 2025)",
    rate: "$145/hr (modest increase)",
    margin: "27%",
    value: "$124,800 (additional 6 months)"
  },
  
  actions: [
    "Confirm consultant availability & interest",
    "Propose extension to client",
    "Prepare SOW amendment",
    "Negotiate rate (if needed)",
    "Get signatures by Nov 20"
  ]
}
```

**Call Account Manager:**

```
1:30 PM - Call Emily Brown (Account Manager)

Topics:
- Michael Chen extension (high priority)
- Amanda Wilson extension (discuss with client)
- Jennifer Lee offboarding (prepare replacement pipeline)

Michael Chen:
✓ Consultant wants to extend (confirmed)
✓ Client loves his work (5.0 rating)
✓ Propose: 6 months @ $145/hr
✓ Action: Emily to pitch to client by Friday

Amanda Wilson:
⚠️ Need client feedback on project timeline
⚠️ Consultant has another offer (must decide by Nov 20)
✓ Action: Emily to call client today

Jennifer Lee:
❌ Mutual decision to end (performance issues)
✓ Action: Prepare offboarding, find replacement
```

**System Updates:**

```sql
-- Update Michael's placement status
UPDATE placements
SET
  status = 'ending_soon',
  notes = 'Extension discussion in progress. Consultant interested. Client loves his work. Proposed: 6 months @ $145/hr. Awaiting client confirmation.'
WHERE id = michael_placement_id;

-- Create task
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, due_date, assigned_to
) VALUES (
  'placement', michael_placement_id, 'task',
  'Get extension signed for Michael Chen',
  '2024-11-20',
  account_manager_id
);
```

---

### **7. Offboarding Process (2:30 PM - 3:30 PM)**

**Ending Placement: Jennifer Lee @ RetailCo**

**Offboarding Checklist:**

```typescript
{
  placement_id: jennifer_placement_id,
  consultant: "Jennifer Lee",
  client: "RetailCo",
  last_day: "2024-12-10",
  
  offboarding_tasks: [
    {
      task: "Client exit interview",
      owner: "Account Manager",
      due: "Dec 5",
      status: "Pending"
    },
    {
      task: "Consultant exit interview",
      owner: "Recruiter",
      due: "Dec 5",
      status: "Pending"
    },
    {
      task: "Final timesheet submission",
      owner: "Consultant",
      due: "Dec 13",
      status: "Pending"
    },
    {
      task: "Return equipment/access",
      owner: "Consultant",
      due: "Dec 10",
      status: "Pending"
    },
    {
      task: "Final invoice",
      owner: "Operations",
      due: "Dec 15",
      status: "Pending"
    },
    {
      task: "Update candidate status",
      owner: "Recruiter",
      due: "Dec 11",
      status: "Pending"
    },
    {
      task: "Benefits termination (if W2)",
      owner: "HR",
      due: "Dec 31",
      status: "Pending"
    }
  ],
  
  replacement_needed: true,
  replacement_timeline: "Start by Jan 2, 2025"
}
```

**Notify Team:**

```sql
-- Notify account manager, recruiter, consultant
INSERT INTO notifications (user_id, type, title, message, priority)
VALUES
  (account_manager_id, 'placement_ending', 'Jennifer Lee @ RetailCo ending Dec 10', 'Schedule exit interview. Discuss replacement needs with client.', 'medium'),
  (recruiter_id, 'placement_ending', 'Jennifer Lee ending Dec 10', 'Update candidate status to "available". Schedule exit interview.', 'medium'),
  (consultant_user_id, 'placement_ending', 'Your placement ends December 10', 'Please review offboarding checklist. Return equipment by last day.', 'high');

-- Create offboarding tasks
INSERT INTO activities (entity_type, entity_id, activity_type, subject, due_date, assigned_to)
VALUES
  ('placement', placement_id, 'task', 'Client exit interview - Jennifer Lee', '2024-12-05', account_manager_id),
  ('placement', placement_id, 'task', 'Consultant exit interview - Jennifer Lee', '2024-12-05', recruiter_id),
  ('placement', placement_id, 'task', 'Process final invoice - Jennifer Lee', '2024-12-15', auth.uid());
```

---

### **8. Performance Reviews & Client Check-ins (3:30 PM - 4:30 PM)**

**30-Day Check-ins (New Placements):**

```sql
-- Placements at 30 days (need check-in)
SELECT
  p.id,
  c.first_name || ' ' || c.last_name as consultant_name,
  cl.name as client_name,
  p.start_date,
  CURRENT_DATE - p.start_date as days_since_start
FROM placements p
JOIN candidates c ON c.id = p.candidate_id
JOIN clients cl ON cl.id = p.client_id
WHERE p.status = 'active'
AND p.start_date = CURRENT_DATE - INTERVAL '30 days'
AND NOT EXISTS (
  SELECT 1 FROM activities a
  WHERE a.entity_type = 'placement'
  AND a.entity_id = p.id
  AND a.activity_type = 'call'
  AND a.subject LIKE '%30-day%'
);
```

**30-Day Check-in Call Template:**

```typescript
{
  call_agenda: [
    "How is the onboarding going?",
    "Any issues with client team/environment?",
    "Is the work aligned with expectations?",
    "Any support needed from InTime?",
    "Timesheet process working smoothly?",
    "Rate/comp satisfaction?",
    "Overall satisfaction (1-5 scale)"
  ],
  
  client_check: [
    "How is [consultant] performing?",
    "Meeting expectations?",
    "Any concerns?",
    "Feedback for improvement?",
    "Likelihood of extension?"
  ]
}
```

**90-Day Performance Review:**

```sql
-- Placements at 90 days (need review)
SELECT *
FROM placements
WHERE status = 'active'
AND start_date = CURRENT_DATE - INTERVAL '90 days';
```

**Performance Review Template:**

```typescript
{
  consultant: "Rajesh Kumar",
  client: "Progressive Insurance",
  review_period: "Aug 10 - Nov 10, 2024",
  
  metrics: {
    attendance: "100% (no absences)",
    timesheet_compliance: "100% on-time submission",
    client_satisfaction: 4.8,
    quality_of_work: 5.0,
    communication: 4.5,
    technical_skills: 5.0,
    overall_rating: 4.8
  },
  
  client_feedback: "Rajesh is an exceptional Guidewire developer. Solved complex integration issues. Great team player. Would love to extend.",
  
  areas_of_strength: [
    "Deep Guidewire ClaimCenter knowledge",
    "Problem-solving ability",
    "Client communication"
  ],
  
  areas_for_improvement: [
    "Documentation could be more detailed"
  ],
  
  next_steps: {
    consultant: "Share positive feedback, discuss extension",
    client: "Propose 6-month extension",
    recruiter: "Update consultant profile with recent skills"
  }
}
```

**Log Review:**

```sql
INSERT INTO activities (
  entity_type, entity_id, activity_type, subject, description
) VALUES (
  'placement', rajesh_placement_id, 'note',
  '90-Day Performance Review - Excellent',
  'Attendance: 100%. Timesheet: 100% on-time. Client rating: 4.8/5. Quality: 5.0. Client wants to extend. Areas of strength: Guidewire expertise, problem-solving. Area for improvement: Documentation. Overall: Exceeds expectations.'
);
```

---

### **9. Invoice & Billing Review (4:30 PM - 5:00 PM)**

**Weekly Billing Summary:**

```sql
-- This week's approved timesheets ready for invoicing
SELECT
  cl.name as client_name,
  COUNT(DISTINCT p.id) as num_placements,
  SUM(t.hours_worked) as total_hours,
  SUM(t.hours_worked * p.bill_rate) as total_billing,
  SUM(t.hours_worked * (p.bill_rate - p.pay_rate)) as total_margin
FROM timesheets t
JOIN placements p ON p.id = t.placement_id
JOIN clients cl ON cl.id = p.client_id
WHERE t.status = 'approved'
AND t.approved_at >= DATE_TRUNC('week', CURRENT_DATE)
GROUP BY cl.id, cl.name
ORDER BY total_billing DESC;
```

**Results:**

| Client | Placements | Hours | Billing | Margin |
|--------|------------|-------|---------|--------|
| Progressive | 8 | 320 | $32,000 | $8,000 |
| BigCorp | 10 | 400 | $42,000 | $11,200 |
| HealthTech | 5 | 200 | $19,000 | $4,500 |
| **Total** | **23** | **920** | **$93,000** | **$23,700** |

**Invoice Generation:**

```sql
-- Mark timesheets as invoiced
UPDATE timesheets
SET
  status = 'invoiced',
  invoiced_at = NOW()
WHERE status = 'approved'
AND approved_at >= DATE_TRUNC('week', CURRENT_DATE);

-- Create invoice records (if integrated with accounting system)
-- Otherwise, export data for QuickBooks/Zoho
```

---

## **End of Day (5:00 PM - 5:30 PM)**

### **10. Daily Wrap-Up**

**Update Dashboard:**
- ✅ All timesheets reviewed (10 approved, 2 rejected)
- ✅ New placements onboarded (2)
- ✅ Contract renewals initiated (3)
- ✅ Compliance items addressed (2)
- ✅ Offboarding started (1)
- ✅ Billing processed ($93K)

**Tomorrow's Preview:**

```
8:00 AM - Dashboard check
9:00 AM - Client check-in calls (3)
11:00 AM - Contractor onboarding (1 new start)
1:00 PM - Renewal negotiations (2)
3:00 PM - Compliance audit
4:00 PM - Weekly ops meeting
```

**Daily Metrics:**

```typescript
{
  timesheets_approved: 10,
  timesheets_rejected: 2,
  missing_timesheets_followed_up: 7,
  onboardings_completed: 2,
  offboardings_initiated: 1,
  contract_renewals_processed: 3,
  compliance_items_resolved: 2,
  weekly_billing: "$93,000",
  margin: "$23,700"
}
```

---

## **Key Operations Metrics (Weekly/Monthly)**

```sql
-- Operations KPIs
SELECT
  -- Timesheet metrics
  COUNT(*) FILTER (WHERE t.status = 'approved') as timesheets_approved_this_week,
  COUNT(*) FILTER (WHERE t.status = 'submitted') as timesheets_pending,
  AVG(EXTRACT(hours FROM (t.approved_at - t.submitted_at))) as avg_approval_time_hours,
  
  -- Placement metrics
  COUNT(DISTINCT p.id) FILTER (WHERE p.status = 'active') as active_placements,
  COUNT(DISTINCT p.id) FILTER (WHERE p.status = 'ending_soon') as ending_soon,
  
  -- Revenue metrics
  SUM(t.hours_worked * pl.bill_rate) FILTER (WHERE t.status = 'approved') as weekly_revenue,
  SUM(t.hours_worked * (pl.bill_rate - pl.pay_rate)) FILTER (WHERE t.status = 'approved') as weekly_margin,
  AVG(pl.margin_percentage) as avg_margin_percentage,
  
  -- Compliance
  COUNT(DISTINCT ct.id) FILTER (WHERE ct.expiration_date <= CURRENT_DATE + INTERVAL '30 days') as expiring_contracts
  
FROM timesheets t
FULL OUTER JOIN placements pl ON true
FULL OUTER JOIN contracts ct ON true;
```

---

## **Success Patterns**

### **What Makes a Great Operations Manager:**

1. **Proactive:** Catch issues before they become problems
2. **Detail-Oriented:** Zero errors in compliance, billing
3. **Communicator:** Keep everyone informed
4. **Systematic:** Checklists for everything
5. **Responsive:** 24-hour turnaround on approvals
6. **Relationship-Builder:** Trust with consultants & clients

### **Key Operational Ratios:**

- **Timesheet Approval:** < 24 hours
- **Compliance Rate:** 100%
- **Invoice Accuracy:** 99.9%
- **Contractor Retention:** > 90% at 90 days
- **Contract Renewal Rate:** > 75%
- **Billing Cycle:** Weekly

### **Monthly Goals:**

```typescript
{
  timesheets_processed: 180-200,
  onboardings: 3-5,
  offboardings: 2-3,
  contract_renewals: 5-8,
  compliance_issues: 0,
  revenue_processed: "$400K-$500K",
  margin: "$100K-$125K"
}
```

---

**End of Operations Workflow** ⚙️


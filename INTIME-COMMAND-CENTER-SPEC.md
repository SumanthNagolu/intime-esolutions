# 🎯 InTime Command Center - Complete Technical Specification

**Project:** InTime eSolutions Employee Portal & CRM/ATS  
**Version:** 2.0 (Pod-Based Architecture)  
**Date:** 2025-11-09  
**Status:** 🚀 ACTIVE DEVELOPMENT

---

## 📋 **EXECUTIVE SUMMARY**

### **Purpose:**
Replace CEIPAL, Monday.com, and fragmented systems with a unified command center that:
- Tracks every employee activity in real-time
- Enforces non-negotiable targets (2 placements/sprint, 1 interview/day, 2-3 hr JD turnaround)
- Implements cross-pollination model (1 call = multiple lead types)
- Provides absolute transparency across all pods

### **Current State:**
- **Team Size:** 9 people → Growing to 15-20 in 2 months
- **Structure:** 1 Recruiting Pod + 2 Bench Sales Pods + 0 TA Pods (hiring)
- **Bench Size:** 20 active consultants
- **Target:** 50-100 employees in 1 year

### **Non-Negotiable Metrics:**

| Role | Metric | Target | Deadline |
|------|--------|--------|----------|
| **Pod** | Placements | 2 | Per 2-week sprint |
| **Pod** | Interviews | 10 (1/day) | Per sprint |
| **Sourcer** | Resumes per JD | 30 | 1-2 hours |
| **Screener** | Calls per day | 40 (30 JD + 10 network) | Daily |
| **Account Manager** | Submissions | 5 | Daily |
| **All** | JD Turnaround | First submission | 2-3 hours |
| **Bench** | Placement Deadline | Place or release | 30-60 days |

---

## 🏗️ **SYSTEM ARCHITECTURE**

### **Technology Stack:**
- **Frontend:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend:** Next.js API Routes + Server Actions
- **Database:** Supabase (PostgreSQL + Auth + RLS + Realtime)
- **Integrations:** 
  - Gmail API (send/receive emails)
  - Google Calendar API (schedule interviews)
  - Dialpad API (click-to-call)
  - LinkedIn API (profile enrichment)
  - Microsoft Teams Webhooks (notifications)

### **Key Design Principles:**
1. **Real-Time Everything** - No page refreshes, instant updates
2. **Absolute Transparency** - Everyone sees everything (for now)
3. **Zero Manual Entry** - Auto-capture, auto-tag, auto-alert
4. **Mobile-First** - Responsive, no native app needed
5. **Progressive Disclosure** - Simple UI, advanced features hidden until needed

---

## 📊 **DATABASE SCHEMA UPDATES**

### **New Tables Needed:**

#### **1. `pods` - Pod Management**
```sql
CREATE TABLE pods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,                    -- "Recruiting Pod 1", "Bench Sales Pod 1"
  type TEXT NOT NULL CHECK (type IN ('recruiting', 'bench_sales', 'talent_acquisition')),
  manager_id UUID REFERENCES user_profiles(id),
  target_placements_per_sprint INT DEFAULT 2,
  target_interviews_per_sprint INT DEFAULT 10,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_hold')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Junction table for pod members
CREATE TABLE pod_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pod_id UUID REFERENCES pods(id) ON DELETE CASCADE,
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('manager', 'account_manager', 'screener', 'sourcer')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(pod_id, user_id)
);
```

#### **2. `jd_assignments` - JD Routing & Tracking**
```sql
CREATE TABLE jd_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  pod_id UUID REFERENCES pods(id),
  assigned_by UUID REFERENCES user_profiles(id),
  sourcer_id UUID REFERENCES user_profiles(id),
  screener_id UUID REFERENCES user_profiles(id),
  account_manager_id UUID REFERENCES user_profiles(id),
  status TEXT DEFAULT 'assigned' CHECK (status IN ('assigned', 'sourcing', 'screening', 'submitted', 'completed')),
  target_resumes INT DEFAULT 30,
  resumes_sourced INT DEFAULT 0,
  candidates_screened INT DEFAULT 0,
  candidates_submitted INT DEFAULT 0,
  time_to_first_submission INTERVAL,    -- Auto-calculated
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  first_resume_at TIMESTAMPTZ,
  first_call_at TIMESTAMPTZ,
  first_submission_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);
```

#### **3. `cross_sell_leads` - Cross-Pollination Tracking**
```sql
CREATE TABLE cross_sell_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id UUID REFERENCES candidates(id) ON DELETE CASCADE,
  source_interaction_id UUID,           -- Link to call/email/activity
  discovered_by UUID REFERENCES user_profiles(id),
  lead_type TEXT NOT NULL CHECK (lead_type IN ('bench_sales', 'training', 'recruiting', 'talent_acquisition')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  notes TEXT,
  discovered_at TIMESTAMPTZ DEFAULT NOW(),
  contacted_at TIMESTAMPTZ,
  converted_at TIMESTAMPTZ
);
```

#### **4. `daily_metrics` - Real-Time Performance Tracking**
```sql
CREATE TABLE daily_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id),
  pod_id UUID REFERENCES pods(id),
  metric_date DATE DEFAULT CURRENT_DATE,
  
  -- Sourcer Metrics
  resumes_sourced INT DEFAULT 0,
  jds_assigned INT DEFAULT 0,
  avg_time_per_jd INTERVAL,
  
  -- Screener Metrics
  calls_made INT DEFAULT 0,
  calls_qualified INT DEFAULT 0,
  cross_sell_leads_tagged INT DEFAULT 0,
  
  -- Account Manager Metrics
  submissions_made INT DEFAULT 0,
  interviews_scheduled INT DEFAULT 0,
  
  -- Universal Metrics
  emails_sent INT DEFAULT 0,
  linkedin_messages INT DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, metric_date)
);
```

#### **5. `bottleneck_alerts` - Automated Alert System**
```sql
CREATE TABLE bottleneck_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alert_type TEXT NOT NULL CHECK (alert_type IN ('jd_stuck', 'bench_aging', 'low_submissions', 'pod_underperforming')),
  severity TEXT NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  entity_type TEXT NOT NULL CHECK (entity_type IN ('job', 'candidate', 'pod', 'user')),
  entity_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  assigned_to UUID REFERENCES user_profiles(id),
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'acknowledged', 'resolved', 'dismissed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  acknowledged_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ
);
```

#### **6. `call_logs` - Dialpad Integration**
```sql
CREATE TABLE call_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id),
  candidate_id UUID REFERENCES candidates(id),
  job_id UUID REFERENCES jobs(id),
  phone_number TEXT,
  direction TEXT CHECK (direction IN ('inbound', 'outbound')),
  duration INT,                         -- Seconds
  outcome TEXT CHECK (outcome IN ('no_answer', 'voicemail', 'connected', 'qualified', 'not_interested')),
  recording_url TEXT,
  notes TEXT,
  cross_sell_leads_generated INT DEFAULT 0,
  called_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **7. `email_threads` - Gmail Integration**
```sql
CREATE TABLE email_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id),
  candidate_id UUID REFERENCES candidates(id),
  client_id UUID REFERENCES clients(id),
  job_id UUID REFERENCES jobs(id),
  thread_id TEXT UNIQUE,                -- Gmail thread ID
  subject TEXT,
  last_message_at TIMESTAMPTZ,
  message_count INT DEFAULT 1,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'responded', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🎨 **USER INTERFACE SPECIFICATIONS**

### **1️⃣ JUNIOR (SOURCER) DASHBOARD**

**URL:** `/employee/dashboard` (role: sourcer)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ 🎯 TODAY'S TARGETS                                          │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │ JDs: 3/3    │ Resumes:    │ Avg Time:   │ On Track:   │ │
│ │             │ 47/90 (52%) │ 1.06 hrs/JD │ 🟡 MEDIUM   │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📋 ACTIVE JDS (Drag to reorder priority)                   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔴 JD #156 - Java Developer (Client: TechCorp)      │   │
│ │ Progress: 8/30 resumes | Time: 2:15:43 | ⚠️ STUCK   │   │
│ │ [🔍 Search DB] [📧 Email Blast] [💾 Upload Resume]  │   │
│ │                                                       │   │
│ │ Last 5 Resumes:                                       │   │
│ │ • Rajesh K. - 8 yrs Java - Added 15 min ago         │   │
│ │ • Priya S. - 6 yrs Spring - Added 32 min ago        │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🟡 JD #157 - QA Lead (Client: FinServe Inc.)        │   │
│ │ Progress: 22/30 resumes | Time: 0:45:12             │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🔍 QUICK SEARCH (Internal DB: 4,523 candidates)            │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Skills: [Java     ] Location: [Any  ] Visa: [Any  ] │   │
│ │ [Search] → Found 47 matches                          │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Real-time progress bars for each JD
- Timer showing how long spent on each JD
- 🚨 Auto-alert if >2 hours and <10 resumes
- Drag-drop to prioritize JDs
- Quick actions: Search DB, Upload Resume, Email Blast
- Last 5 resumes added to each JD (live updates)

---

### **2️⃣ MID-LEVEL (SCREENER) DASHBOARD**

**URL:** `/employee/dashboard` (role: screener)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ 📞 TODAY'S CALLS                                            │
│ ┌─────────────┬─────────────┬─────────────┬─────────────┐ │
│ │ Calls Made: │ Qualified:  │ Submitted:  │ Cross-Sell: │ │
│ │ 23/40 (58%) │ 12 (52%)    │ 4 to AM     │ 7 leads     │ │
│ └─────────────┴─────────────┴─────────────┴─────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📋 CALL QUEUE (17 remaining) - Auto-prioritized            │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔥 Rajesh K. - Java Developer (JD #156)             │   │
│ │ Source: LinkedIn | Phone: +91-9876-543-210          │   │
│ │ [📞 CALL NOW] [✉️ Email] [👁️ View Profile]          │   │
│ │                                                       │   │
│ │ Script: "Hi Rajesh, this is [Name] from InTime..."  │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Priya S. - Java Developer (JD #156)                 │   │
│ │ [📞 CALL NOW]                                        │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🎯 CALL OUTCOME (After clicking "Call Now")                │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Candidate: Rajesh K.                                 │   │
│ │ Duration: 4:32                                       │   │
│ │                                                       │   │
│ │ Outcome: [✅ Qualified] [❌ Not Interested] [📞 No Answer] │
│ │                                                       │   │
│ │ Cross-Sell Opportunities:                            │   │
│ │ ☑️ Available immediately → Tag for Bench Sales      │   │
│ │ ☐ Needs training → Tag for Academy                  │   │
│ │ ☐ Knows others → Tag for TA                         │   │
│ │                                                       │   │
│ │ Notes: [                                           ] │   │
│ │ [Submit to Account Manager] [Save & Next]           │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🏆 TODAY'S CROSS-SELL WINS                                 │
│ • 3 Bench Sales leads → $36K potential value               │
│ • 2 Training leads → 2 enrollments possible                │
│ • 2 TA leads → Network expansion                           │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Auto-prioritized call queue (urgent JDs first)
- Click-to-call integration (opens Dialpad)
- Timer during call
- Quick outcome tagging
- **Cross-sell checkboxes** (auto-create leads)
- Call notes auto-saved
- Real-time metrics update

---

### **3️⃣ SENIOR (POD MANAGER) DASHBOARD**

**URL:** `/employee/dashboard` (role: manager)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ 🏢 POD: RECRUITING POD 1                                   │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ 🎯 Sprint Progress: 65% (Day 7/14)                  │   │
│ │ Placements: 1/2 ✅ | Interviews: 5/10 🟡            │   │
│ │ Submissions: 18/70 (26%) | Pipeline: $45K          │   │
│ └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 👥 TEAM VELOCITY (Today)                                   │
│ ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│ │ Member   │ Role     │ Target   │ Actual   │ Status   │  │
│ ├──────────┼──────────┼──────────┼──────────┼──────────┤  │
│ │ Ramesh   │ Sourcer  │ 90 res.  │ 47 🟡    │ 2.1 hrs  │  │
│ │ Sneha    │ Screener │ 40 calls │ 23 🟡    │ 12 qual. │  │
│ │ Arjun    │ AM       │ 5 submit.│ 4 🔴     │ 2 interv.│  │
│ └──────────┴──────────┴──────────┴──────────┴──────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🚨 BOTTLENECKS & ALERTS                                    │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔴 CRITICAL - JD #156 stuck (2 hrs, only 8 resumes) │   │
│ │ Owner: Ramesh | [View Details] [Reassign] [Help]   │   │
│ └──────────────────────────────────────────────────────┘   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🟡 MEDIUM - JD #152 no submissions (48 hrs)         │   │
│ │ Owner: Arjun | [Review] [Escalate]                  │   │
│ └──────────────────────────────────────────────────────┘   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔴 CRITICAL - Bench: Vikram P. (Day 28/30)          │   │
│ │ [View Profile] [Marketing Push] [Release]           │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📊 SPRINT FORECAST                                         │
│ • Current Pace: 1.4 placements (70% of target)            │
│ • Projected Revenue: $16.8K ($7.2K below target)          │
│ • Action Needed: Accelerate submissions by 40%            │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Team velocity cards (green/yellow/red indicators)
- Real-time bottleneck detection
- One-click actions (reassign, escalate, help)
- Sprint forecast based on current pace
- Individual drill-down (click member → see their full day)

---

### **4️⃣ CEO (SUMANTH) DASHBOARD**

**URL:** `/employee/dashboard` (role: admin)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ 🏢 INTIME COMMAND CENTER - LIVE                            │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Revenue: $48K / $100K (48%) | Active: 12 placements │   │
│ │ Pipeline: $240K | Bench: 20 (8 aging >25 days)     │   │
│ └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📊 POD COMPARISON (This Sprint)                            │
│ ┌────────────┬──────────┬───────────┬─────────┬────────┐  │
│ │ Pod        │ Placem.  │ Interviews│ Revenue │ Health │  │
│ ├────────────┼──────────┼───────────┼─────────┼────────┤  │
│ │ Recruit-1  │ 1/2 🟡   │ 5/10 🟡   │ $12K    │ 75%    │  │
│ │ Bench-1    │ 2/2 ✅   │ 8/10 🟢   │ $18K    │ 95%    │  │
│ │ Bench-2    │ 0/2 🔴   │ 3/10 🔴   │ $0      │ 35%    │  │
│ │ TA (New)   │ -        │ -         │ -       │ N/A    │  │
│ └────────────┴──────────┴───────────┴─────────┴────────┘  │
│                                                             │
│ [🔍 Drill Down: Bench-2] ← Click to see what's broken     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🚨 CRITICAL ALERTS (Require Your Attention)               │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔴 Bench-2 Pod - 0 placements (Day 7/14)            │   │
│ │ Root Cause: Low submissions (6 vs. 35 target)       │   │
│ │ [View Team] [Message Manager] [Intervene]           │   │
│ └──────────────────────────────────────────────────────┘   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🟡 5 JDs > 24hrs with 0 submissions                 │   │
│ │ [View List] [Assign to Top Performers]              │   │
│ └──────────────────────────────────────────────────────┘   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 🔴 8 Bench candidates > 25 days (5 days to deadline)│   │
│ │ [Marketing Blitz] [Client Outreach] [Release Plan]  │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🔄 CROSS-POLLINATION METRICS (This Week)                  │
│ Sourcing Calls: 247 interactions                          │
│ ├─ Bench Sales Leads: 94 (38%) → 12 converted             │
│ ├─ Training Leads: 64 (26%) → 8 enrolled                  │
│ └─ TA Leads: 47 (19%) → 15 active conversations           │
│ Total Lead Capture Rate: 83% ✅                            │
│ Cross-Sell Revenue: $24K (33% of total) 🚀                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📈 GROWTH TRAJECTORY                                       │
│ • Current Team: 9 people                                   │
│ • Hiring Pipeline: 6 offers pending (TA Pod)              │
│ • Projected Team (60 days): 15-18 people                  │
│ • Revenue Projection (60 days): $180K/month               │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Company-wide KPIs at a glance
- Pod health scores (algorithm-based)
- **Drill-down:** Click any pod → see manager view
- **Drill-down:** Click any alert → see root cause analysis
- Cross-pollination ROI tracking
- Growth trajectory forecasting

---

## 🔄 **COMPLETE 2-3 HOUR JD WORKFLOW**

### **Automated Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│ TIME: 09:00 AM                                              │
│ EVENT: Client emails JD to jobs@intimesolutions.com        │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ SYSTEM ACTION:                                              │
│ ✅ Gmail API detects new email                             │
│ ✅ GPT-4 extracts: Title, Skills, Location, Client, Rate   │
│ ✅ Creates job record in database                          │
│ ✅ Auto-assigns to best pod (based on skills match)        │
│ ✅ Creates jd_assignment record                            │
│ ✅ Teams notification sent to pod manager                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TIME: 09:05 AM                                              │
│ ACTOR: Account Manager (Arjun)                             │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ACTIONS:                                                    │
│ ✅ Reviews JD in portal                                    │
│ ✅ Edits/clarifies requirements                            │
│ ✅ Assigns Sourcer: Ramesh                                 │
│ ✅ Assigns Screener: Sneha                                 │
│ ✅ Sets priority: HIGH                                     │
│ ✅ Clicks "Start Clock" button                             │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ SYSTEM ACTION:                                              │
│ ✅ Starts 2-hour timer (alert if exceeded)                 │
│ ✅ JD appears in Ramesh's "Active JDs"                     │
│ ✅ JD appears in Sneha's "Pending Screening"               │
│ ✅ Updates jd_assignment: status = 'sourcing'              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TIME: 09:10 AM - 11:00 AM (110 minutes)                    │
│ ACTOR: Sourcer (Ramesh)                                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ACTIONS:                                                    │
│ ✅ Opens JD #159 in portal                                 │
│ ✅ Clicks "Search Internal DB" → 8 matches found           │
│ ✅ Selects 8, clicks "Add to JD"                           │
│ ✅ Opens LinkedIn tab, searches manually                   │
│ ✅ Uploads 12 LinkedIn profiles (resume PDFs)              │
│ ✅ Opens Dice tab, copies 10 resumes                       │
│ ✅ Total: 30 resumes added                                 │
│ ✅ Clicks "Mark Complete" button                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ SYSTEM ACTION (Real-Time):                                 │
│ ✅ Progress bar updates: 8/30, 20/30, 30/30               │
│ ✅ Auto-parses each resume (GPT-4):                        │
│    - Extract: Name, Email, Phone, Skills, Experience      │
│    - Creates candidate record if new                       │
│    - Links candidate to JD #159                            │
│ ✅ Updates jd_assignment: resumes_sourced = 30             │
│ ✅ Updates jd_assignment: status = 'screening'             │
│ ✅ Updates daily_metrics for Ramesh:                       │
│    - resumes_sourced += 30                                 │
│    - avg_time_per_jd = 110 min                             │
│ ✅ Teams notification to Sneha:                            │
│    "🎯 JD #159 ready for screening (30 candidates)"       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TIME: 11:00 AM - 12:00 PM (60 minutes)                     │
│ ACTOR: Screener (Sneha)                                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ACTIONS (For Each Candidate):                              │
│ ✅ Candidate auto-appears in call queue                    │
│ ✅ Clicks "📞 CALL NOW" → Dialpad opens                   │
│ ✅ Calls candidate (avg 2 min per call)                    │
│ ✅ During call, selects outcome:                           │
│    - [❌ Not Interested] → Candidate marked, skip          │
│    - [✅ Qualified] → Opens outcome form                   │
│ ✅ If qualified, checks cross-sell boxes:                  │
│    ☑️ Available immediately → Bench Sales lead            │
│    ☑️ Needs GW training → Training lead                   │
│    ☐ Knows others → TA lead                               │
│ ✅ Rates candidate: ⭐⭐⭐⭐⭐ (5 stars)                      │
│ ✅ Adds notes: "Strong Java, weak Spring, great comm"     │
│ ✅ Clicks "Submit to AM" or "Save & Next"                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ SYSTEM ACTION (After Each Call):                           │
│ ✅ Creates call_log record                                 │
│ ✅ If cross-sell checked, creates cross_sell_leads         │
│ ✅ Updates candidate: status = 'submitted' (if qualified)  │
│ ✅ Updates jd_assignment: candidates_screened++            │
│ ✅ Updates daily_metrics for Sneha:                        │
│    - calls_made++                                          │
│    - calls_qualified++ (if qualified)                      │
│    - cross_sell_leads_tagged++ (if tagged)                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ RESULT:                                                     │
│ • 30 calls made                                            │
│ • 12 qualified (40% rate)                                  │
│ • 5 selected for final submission                          │
│ • 7 cross-sell leads generated:                            │
│   - 3 Bench Sales                                          │
│   - 2 Training                                             │
│   - 2 TA                                                   │
│ ✅ Teams notification to Arjun:                            │
│    "🎯 JD #159: 5 candidates ready for submission"        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TIME: 12:00 PM - 12:30 PM (30 minutes)                     │
│ ACTOR: Account Manager (Arjun)                             │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ACTIONS:                                                    │
│ ✅ Opens "Pending Submissions" queue                       │
│ ✅ Sees 5 candidates for JD #159                           │
│ ✅ Reviews each:                                           │
│    - Reads Sneha's notes                                   │
│    - Views resume                                          │
│    - Checks rating (⭐⭐⭐⭐⭐)                                │
│ ✅ Selects top 5, clicks "Final Submission"                │
│ ✅ Portal auto-generates email:                            │
│    - To: client@techcorp.com                               │
│    - Subject: "5 Java Developers for JD #159"             │
│    - Body: Professional template                           │
│    - Attachments: 5 formatted resumes (InTime template)   │
│ ✅ Reviews email, adds personal note                       │
│ ✅ Clicks "Send"                                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ SYSTEM ACTION:                                              │
│ ✅ Gmail API sends email                                   │
│ ✅ Creates email_threads record                            │
│ ✅ Creates 5 application records:                          │
│    - candidate_id, job_id, status = 'submitted'           │
│ ✅ Updates jd_assignment:                                  │
│    - candidates_submitted = 5                              │
│    - first_submission_at = NOW()                           │
│    - time_to_first_submission = 2.5 hours ✅               │
│    - status = 'submitted'                                  │
│ ✅ Updates daily_metrics for Arjun:                        │
│    - submissions_made += 5                                 │
│ ✅ Teams notification to pod manager:                      │
│    "✅ JD #159 completed (2.5 hrs) - 5 submissions"       │
│ ✅ Teams notification to YOU (CEO):                        │
│    "🎯 Recruiting Pod 1: JD #159 completed on time!"      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TOTAL TIME: 2 hours 30 minutes ✅                          │
│ TARGET MET: ✅ (Under 3 hours)                             │
│                                                             │
│ METRICS UPDATED:                                            │
│ • Ramesh: +30 resumes, +1 JD completed                     │
│ • Sneha: +30 calls, +12 qualified, +7 cross-sell leads     │
│ • Arjun: +5 submissions                                    │
│ • Pod: +1 JD completed, +5 active applications             │
│ • Company: +7 new leads (3 Bench, 2 Training, 2 TA)        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚨 **AUTOMATED ALERT SYSTEM**

### **Alert Triggers:**

| Alert Type | Trigger Condition | Severity | Assigned To | Action |
|------------|-------------------|----------|-------------|--------|
| **JD Stuck** | >2 hrs, <10 resumes | 🔴 Critical | Sourcer, Pod Mgr | Reassign or help |
| **Low Calls** | <20 calls by 2pm | 🟡 Medium | Screener | Reminder |
| **Zero Submissions** | JD >24 hrs, 0 submissions | 🔴 Critical | Account Mgr, Pod Mgr | Escalate |
| **Bench Aging** | Candidate >25 days | 🟡 Medium | Bench Sales Pod | Marketing push |
| **Bench Critical** | Candidate >28 days | 🔴 Critical | Bench Sales Mgr, CEO | Emergency plan |
| **Pod Underperform** | <50% of sprint target (Day 7) | 🟡 Medium | Pod Mgr, CEO | Strategy review |
| **Sprint Failure** | 0 placements (Day 10) | 🔴 Critical | Pod Mgr, CEO | Immediate intervention |
| **Low Cross-Sell** | <10% cross-sell rate | 🟢 Low | Screener | Training reminder |

### **Alert Flow:**

```sql
-- Trigger function example (runs every 15 minutes via pg_cron)
CREATE OR REPLACE FUNCTION check_bottlenecks()
RETURNS void AS $$
BEGIN
  -- Check for stuck JDs
  INSERT INTO bottleneck_alerts (alert_type, severity, entity_type, entity_id, title, description, assigned_to)
  SELECT 
    'jd_stuck',
    'critical',
    'job',
    ja.job_id,
    'JD #' || ja.job_id || ' stuck (' || EXTRACT(EPOCH FROM (NOW() - ja.assigned_at))/3600 || ' hrs)',
    'Only ' || ja.resumes_sourced || ' resumes in ' || EXTRACT(EPOCH FROM (NOW() - ja.assigned_at))/3600 || ' hours',
    ja.sourcer_id
  FROM jd_assignments ja
  WHERE ja.status = 'sourcing'
    AND (NOW() - ja.assigned_at) > INTERVAL '2 hours'
    AND ja.resumes_sourced < 10
    AND NOT EXISTS (
      SELECT 1 FROM bottleneck_alerts ba
      WHERE ba.entity_id = ja.job_id::text
        AND ba.entity_type = 'job'
        AND ba.status IN ('open', 'acknowledged')
    );

  -- Check for aging bench candidates
  INSERT INTO bottleneck_alerts (alert_type, severity, entity_type, entity_id, title, description, assigned_to)
  SELECT 
    'bench_aging',
    CASE WHEN (NOW() - c.bench_start_date) > INTERVAL '28 days' THEN 'critical' ELSE 'medium' END,
    'candidate',
    c.id,
    c.first_name || ' ' || c.last_name || ' aging (Day ' || EXTRACT(DAY FROM (NOW() - c.bench_start_date)) || '/30)',
    'Bench candidate approaching deadline',
    NULL  -- Assigned to bench sales pod manager
  FROM candidates c
  WHERE c.status = 'bench'
    AND (NOW() - c.bench_start_date) > INTERVAL '25 days'
    AND NOT EXISTS (
      SELECT 1 FROM bottleneck_alerts ba
      WHERE ba.entity_id = c.id::text
        AND ba.entity_type = 'candidate'
        AND ba.status IN ('open', 'acknowledged')
    );

  -- More checks...
END;
$$ LANGUAGE plpgsql;
```

---

## 📱 **INTEGRATIONS**

### **1. Gmail API (Send + Receive)**

**Use Cases:**
- Auto-import JDs from `jobs@intimesolutions.com`
- Send submissions to clients
- Track email threads (replies, opens)
- Log all communication

**Implementation:**
```typescript
// app/api/webhooks/gmail/route.ts
export async function POST(req: Request) {
  const { message } = await req.json();
  
  // Decode base64 email
  const email = parseEmail(message);
  
  // Check if it's a new JD
  if (email.to.includes('jobs@intimesolutions.com')) {
    // Extract JD details using GPT-4
    const jd = await extractJDFromEmail(email.body);
    
    // Create job record
    const job = await supabase.from('jobs').insert({
      title: jd.title,
      client_id: await findOrCreateClient(jd.clientName),
      description: jd.description,
      required_skills: jd.skills,
      location: jd.location,
      salary_range: jd.salaryRange,
      source: 'email',
      status: 'open'
    }).select().single();
    
    // Auto-assign to best pod
    const pod = await findBestPod(jd.skills);
    await assignJDToPod(job.id, pod.id);
    
    // Send Teams notification
    await notifyTeams(pod.manager_id, `New JD: ${jd.title}`);
  }
  
  return new Response('OK', { status: 200 });
}
```

### **2. Dialpad API (Click-to-Call)**

**Use Cases:**
- Click button → Dialpad app opens/calls
- Auto-log call duration
- Store call recordings
- Track call outcomes

**Implementation:**
```typescript
// components/employee/CallButton.tsx
'use client';

export function CallButton({ candidateId, phone }: { candidateId: string; phone: string }) {
  const handleCall = async () => {
    // Open Dialpad app
    window.open(`tel:${phone}`, '_blank');
    
    // Create call log (pending)
    const { data: callLog } = await supabase.from('call_logs').insert({
      candidate_id: candidateId,
      phone_number: phone,
      direction: 'outbound',
      outcome: 'pending'
    }).select().single();
    
    // Show outcome dialog after call
    setTimeout(() => {
      openCallOutcomeDialog(callLog.id, candidateId);
    }, 5000);  // Assume 5 sec minimum call time
  };
  
  return (
    <button onClick={handleCall} className="btn-primary">
      📞 CALL NOW
    </button>
  );
}
```

### **3. Microsoft Teams Webhooks (Notifications)**

**Use Cases:**
- JD assigned → Notify sourcer/screener
- Candidates ready → Notify account manager
- Alert triggered → Notify pod manager
- Sprint milestone → Notify CEO

**Implementation:**
```typescript
// lib/integrations/teams.ts
export async function notifyTeams(userId: string, message: string) {
  const user = await supabase
    .from('user_profiles')
    .select('teams_webhook_url')
    .eq('id', userId)
    .single();
  
  if (!user.teams_webhook_url) return;
  
  await fetch(user.teams_webhook_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "@type": "MessageCard",
      "summary": message,
      "sections": [{
        "activityTitle": "InTime Command Center",
        "activitySubtitle": message,
        "activityImage": "https://intimesolutions.com/logo.png"
      }]
    })
  });
}
```

### **4. LinkedIn API (Profile Enrichment)**

**Use Cases:**
- Paste LinkedIn URL → Auto-fetch profile data
- Enrich candidate records
- Track LinkedIn InMails

**Implementation:**
```typescript
// app/api/linkedin/enrich/route.ts
export async function POST(req: Request) {
  const { linkedinUrl, candidateId } = await req.json();
  
  // Call LinkedIn API (requires OAuth)
  const profile = await fetchLinkedInProfile(linkedinUrl);
  
  // Update candidate record
  await supabase.from('candidates').update({
    linkedin_url: linkedinUrl,
    current_company: profile.currentCompany,
    headline: profile.headline,
    summary: profile.summary,
    experience_years: calculateYears(profile.positions)
  }).eq('id', candidateId);
  
  return new Response('OK', { status: 200 });
}
```

---

## 🎯 **4-WEEK IMPLEMENTATION PLAN**

### **WEEK 1: DATABASE & AUTH** ✅
- [x] Create all new tables (pods, jd_assignments, cross_sell_leads, daily_metrics, etc.)
- [x] Set up RLS policies
- [x] Create triggers for auto-calculations
- [x] Test with seed data

### **WEEK 2: CORE WORKFLOWS** (THIS WEEK!)
- [ ] Build Sourcer dashboard & JD workflow
- [ ] Build Screener dashboard & call queue
- [ ] Build Account Manager submission flow
- [ ] Build Pod Manager dashboard
- [ ] Implement real-time updates (Supabase Realtime)

### **WEEK 3: AUTOMATION & ALERTS**
- [ ] Implement bottleneck detection system
- [ ] Build cross-sell lead tagging
- [ ] Auto-parse resumes (GPT-4)
- [ ] Gmail integration (receive JDs)
- [ ] Teams notifications

### **WEEK 4: INTEGRATIONS & POLISH**
- [ ] Dialpad integration (click-to-call)
- [ ] Gmail integration (send submissions)
- [ ] LinkedIn enrichment
- [ ] CEO dashboard
- [ ] Performance optimization
- [ ] User testing & bug fixes

---

## 📦 **DELIVERABLES**

### **End of Week 2:**
✅ All 4 role-specific dashboards functional  
✅ Complete 2-3 hour JD workflow end-to-end  
✅ Real-time metrics updating  
✅ Basic cross-sell lead tagging  
✅ Candidate/job CRUD (already done)  

### **End of Week 3:**
✅ Automated bottleneck alerts  
✅ Gmail auto-import JDs  
✅ Resume parsing working  
✅ Teams notifications live  
✅ Daily metrics tracking  

### **End of Week 4:**
✅ All integrations live  
✅ CEO dashboard with drill-down  
✅ System tested end-to-end  
✅ Documentation complete  
✅ Team training materials  

---

## 🚀 **NEXT STEPS**

1. **Review this spec** - Confirm alignment with your vision
2. **Approve to proceed** - I'll start building Week 2 deliverables
3. **Daily standups** - I'll update you on progress every 24 hours

**Ready to build?** Say "GO!" and I'll start creating the new database tables! 🔥

---

**JAI VIJAYA! LET'S REVOLUTIONIZE STAFFING!** 🙏


# 🗄️ InTime Command Center - Database Schema

## **Design Principles**
- **Single Source of Truth:** All data in one PostgreSQL database
- **Row-Level Security (RLS):** Every table has policies for role-based access
- **Audit Trail:** Track who changed what and when
- **Soft Deletes:** Never hard-delete records (use `deleted_at`)
- **Timestamps:** All tables have `created_at`, `updated_at`

---

## **Core Entities**

### **1. User Management**

#### `user_profiles` (extends Supabase auth.users)
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  role TEXT NOT NULL CHECK (role IN ('admin', 'recruiter', 'sales', 'account_manager', 'operations', 'student', 'employee')),
  department TEXT,
  manager_id UUID REFERENCES user_profiles(id),
  avatar_url TEXT,
  timezone TEXT DEFAULT 'America/New_York',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_user_profiles_role ON user_profiles(role);
CREATE INDEX idx_user_profiles_manager ON user_profiles(manager_id);
```

---

### **2. ATS Module**

#### `candidates`
```sql
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT, -- City, State
  
  -- Professional Details
  current_title TEXT,
  years_of_experience INTEGER,
  skills TEXT[], -- Array of skills
  certifications TEXT[],
  education JSONB, -- {degree, institution, year}[]
  
  -- Documents
  resume_url TEXT,
  resume_parsed_data JSONB, -- Parsed resume data
  linkedin_url TEXT,
  portfolio_url TEXT,
  
  -- Availability
  availability TEXT CHECK (availability IN ('immediate', 'within_2_weeks', 'within_1_month', 'not_available')),
  desired_rate_min INTEGER, -- Hourly rate
  desired_rate_max INTEGER,
  work_authorization TEXT CHECK (work_authorization IN ('us_citizen', 'green_card', 'h1b', 'opt', 'ead', 'requires_sponsorship')),
  
  -- Status & Source
  status TEXT CHECK (status IN ('active', 'placed', 'inactive', 'do_not_contact')) DEFAULT 'active',
  source TEXT, -- 'linkedin', 'referral', 'website', 'job_board', 'recruiter'
  referred_by UUID REFERENCES user_profiles(id),
  
  -- Ratings
  technical_rating INTEGER CHECK (technical_rating BETWEEN 1 AND 5),
  communication_rating INTEGER CHECK (communication_rating BETWEEN 1 AND 5),
  overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 5),
  
  -- Metadata
  tags TEXT[],
  notes TEXT,
  owner_id UUID REFERENCES user_profiles(id), -- Assigned recruiter
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_candidates_email ON candidates(email);
CREATE INDEX idx_candidates_status ON candidates(status);
CREATE INDEX idx_candidates_owner ON candidates(owner_id);
CREATE INDEX idx_candidates_skills ON candidates USING GIN(skills);
CREATE INDEX idx_candidates_created ON candidates(created_at DESC);
```

#### `jobs`
```sql
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Job Details
  title TEXT NOT NULL,
  description TEXT,
  requirements TEXT[],
  nice_to_have TEXT[],
  
  -- Client & Location
  client_id UUID REFERENCES clients(id),
  location TEXT,
  remote_policy TEXT CHECK (remote_policy IN ('remote', 'hybrid', 'onsite')),
  
  -- Compensation
  rate_type TEXT CHECK (rate_type IN ('hourly', 'annual')) DEFAULT 'hourly',
  rate_min INTEGER,
  rate_max INTEGER,
  
  -- Job Type
  employment_type TEXT CHECK (employment_type IN ('contract', 'contract_to_hire', 'direct_placement', 'temporary')) DEFAULT 'contract',
  duration_months INTEGER, -- For contracts
  
  -- Status
  status TEXT CHECK (status IN ('draft', 'open', 'on_hold', 'filled', 'cancelled')) DEFAULT 'draft',
  priority TEXT CHECK (priority IN ('hot', 'warm', 'cold')) DEFAULT 'warm',
  
  -- Openings
  openings INTEGER DEFAULT 1,
  filled INTEGER DEFAULT 0,
  
  -- Dates
  posted_date DATE,
  target_fill_date DATE,
  filled_date DATE,
  
  -- Ownership
  owner_id UUID REFERENCES user_profiles(id), -- Assigned recruiter
  client_contact_id UUID REFERENCES contacts(id),
  
  -- Metadata
  tags TEXT[],
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_client ON jobs(client_id);
CREATE INDEX idx_jobs_owner ON jobs(owner_id);
CREATE INDEX idx_jobs_priority ON jobs(priority);
```

#### `applications`
```sql
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id UUID NOT NULL REFERENCES candidates(id),
  job_id UUID NOT NULL REFERENCES jobs(id),
  
  -- Pipeline Stage
  stage TEXT NOT NULL CHECK (stage IN (
    'sourced',
    'screening',
    'submitted',
    'client_review',
    'interview_scheduled',
    'interviewing',
    'interview_completed',
    'reference_check',
    'offer',
    'offer_accepted',
    'offer_rejected',
    'placed',
    'rejected',
    'withdrawn'
  )) DEFAULT 'sourced',
  
  -- Timeline
  applied_at TIMESTAMPTZ DEFAULT NOW(),
  stage_changed_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Submitted to Client
  submitted_to_client_at TIMESTAMPTZ,
  submitted_by UUID REFERENCES user_profiles(id),
  
  -- Interview Details
  interview_scheduled_at TIMESTAMPTZ,
  interview_completed_at TIMESTAMPTZ,
  interview_feedback TEXT,
  
  -- Offer Details
  offer_extended_at TIMESTAMPTZ,
  offer_amount INTEGER,
  offer_accepted_at TIMESTAMPTZ,
  offer_rejected_at TIMESTAMPTZ,
  offer_rejection_reason TEXT,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  rejection_reason TEXT,
  
  -- Ownership
  owner_id UUID REFERENCES user_profiles(id), -- Recruiter managing this application
  
  -- Metadata
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(candidate_id, job_id) -- Prevent duplicate applications
);

CREATE INDEX idx_applications_candidate ON applications(candidate_id);
CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_stage ON applications(stage);
CREATE INDEX idx_applications_owner ON applications(owner_id);
```

#### `interviews`
```sql
CREATE TABLE interviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES applications(id),
  
  -- Interview Details
  interview_type TEXT CHECK (interview_type IN ('phone_screen', 'technical', 'behavioral', 'client_interview', 'final_round')),
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  location TEXT, -- 'Zoom', 'Google Meet', 'Office', etc.
  meeting_link TEXT,
  
  -- Participants
  interviewer_id UUID REFERENCES user_profiles(id),
  interviewer_name TEXT, -- For external interviewers
  interviewer_email TEXT,
  
  -- Status
  status TEXT CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')) DEFAULT 'scheduled',
  
  -- Feedback
  feedback TEXT,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  recommendation TEXT CHECK (recommendation IN ('strong_yes', 'yes', 'maybe', 'no', 'strong_no')),
  
  -- Metadata
  notes TEXT,
  created_by UUID REFERENCES user_profiles(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_interviews_application ON interviews(application_id);
CREATE INDEX idx_interviews_scheduled ON interviews(scheduled_at);
CREATE INDEX idx_interviews_status ON interviews(status);
```

---

### **3. CRM Module**

#### `clients`
```sql
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Company Details
  name TEXT NOT NULL,
  legal_name TEXT,
  website TEXT,
  industry TEXT,
  company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-500', '501-1000', '1000+')),
  
  -- Location
  headquarters_address TEXT,
  city TEXT,
  state TEXT,
  country TEXT DEFAULT 'USA',
  
  -- Business Info
  annual_revenue BIGINT,
  employee_count INTEGER,
  description TEXT,
  
  -- Status
  status TEXT CHECK (status IN ('prospect', 'active', 'inactive', 'churned')) DEFAULT 'prospect',
  tier TEXT CHECK (tier IN ('tier_1', 'tier_2', 'tier_3')) DEFAULT 'tier_3',
  
  -- Health Score (0-100)
  health_score INTEGER CHECK (health_score BETWEEN 0 AND 100),
  
  -- Ownership
  account_manager_id UUID REFERENCES user_profiles(id),
  sales_rep_id UUID REFERENCES user_profiles(id),
  
  -- Dates
  first_contact_date DATE,
  contract_start_date DATE,
  contract_end_date DATE,
  
  -- Metadata
  tags TEXT[],
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_account_manager ON clients(account_manager_id);
CREATE INDEX idx_clients_name ON clients(name);
```

#### `contacts`
```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id),
  
  -- Personal Details
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  mobile TEXT,
  
  -- Professional Details
  title TEXT,
  department TEXT,
  linkedin_url TEXT,
  
  -- Role
  is_primary BOOLEAN DEFAULT false,
  is_decision_maker BOOLEAN DEFAULT false,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  
  -- Metadata
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_contacts_client ON contacts(client_id);
CREATE INDEX idx_contacts_email ON contacts(email);
```

#### `opportunities`
```sql
CREATE TABLE opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id),
  
  -- Opportunity Details
  name TEXT NOT NULL,
  description TEXT,
  
  -- Pipeline Stage
  stage TEXT NOT NULL CHECK (stage IN (
    'lead',
    'qualified',
    'proposal',
    'negotiation',
    'closed_won',
    'closed_lost'
  )) DEFAULT 'lead',
  
  -- Value
  estimated_value INTEGER,
  probability INTEGER CHECK (probability BETWEEN 0 AND 100) DEFAULT 50,
  
  -- Dates
  expected_close_date DATE,
  closed_date DATE,
  
  -- Loss Reason
  loss_reason TEXT,
  
  -- Ownership
  owner_id UUID REFERENCES user_profiles(id),
  
  -- Metadata
  tags TEXT[],
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_opportunities_client ON opportunities(client_id);
CREATE INDEX idx_opportunities_stage ON opportunities(stage);
CREATE INDEX idx_opportunities_owner ON opportunities(owner_id);
```

---

### **4. Operations Module**

#### `placements`
```sql
CREATE TABLE placements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Relationships
  candidate_id UUID NOT NULL REFERENCES candidates(id),
  job_id UUID NOT NULL REFERENCES jobs(id),
  client_id UUID NOT NULL REFERENCES clients(id),
  application_id UUID REFERENCES applications(id),
  
  -- Placement Details
  start_date DATE NOT NULL,
  end_date DATE, -- For contracts
  actual_end_date DATE,
  
  -- Compensation
  bill_rate INTEGER NOT NULL, -- What we charge client
  pay_rate INTEGER NOT NULL, -- What we pay candidate
  margin INTEGER GENERATED ALWAYS AS (bill_rate - pay_rate) STORED,
  margin_percentage DECIMAL GENERATED ALWAYS AS (
    CASE WHEN bill_rate > 0 
    THEN ((bill_rate - pay_rate)::DECIMAL / bill_rate * 100)
    ELSE 0 
    END
  ) STORED,
  
  -- Status
  status TEXT CHECK (status IN ('active', 'ending_soon', 'extended', 'completed', 'terminated')) DEFAULT 'active',
  termination_reason TEXT,
  
  -- Performance
  client_satisfaction INTEGER CHECK (client_satisfaction BETWEEN 1 AND 5),
  consultant_satisfaction INTEGER CHECK (consultant_satisfaction BETWEEN 1 AND 5),
  
  -- Ownership
  recruiter_id UUID REFERENCES user_profiles(id),
  account_manager_id UUID REFERENCES user_profiles(id),
  
  -- Metadata
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_placements_candidate ON placements(candidate_id);
CREATE INDEX idx_placements_job ON placements(job_id);
CREATE INDEX idx_placements_client ON placements(client_id);
CREATE INDEX idx_placements_status ON placements(status);
CREATE INDEX idx_placements_start_date ON placements(start_date DESC);
```

#### `timesheets`
```sql
CREATE TABLE timesheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  placement_id UUID NOT NULL REFERENCES placements(id),
  
  -- Period
  week_start_date DATE NOT NULL,
  week_end_date DATE NOT NULL,
  
  -- Hours
  hours_worked DECIMAL NOT NULL CHECK (hours_worked >= 0),
  overtime_hours DECIMAL DEFAULT 0 CHECK (overtime_hours >= 0),
  
  -- Status
  status TEXT CHECK (status IN ('draft', 'submitted', 'approved', 'rejected', 'invoiced')) DEFAULT 'draft',
  
  -- Approval
  submitted_at TIMESTAMPTZ,
  approved_by UUID REFERENCES user_profiles(id),
  approved_at TIMESTAMPTZ,
  rejected_at TIMESTAMPTZ,
  rejection_reason TEXT,
  
  -- Invoice
  invoice_id UUID, -- To be added later
  
  -- Metadata
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(placement_id, week_start_date) -- One timesheet per placement per week
);

CREATE INDEX idx_timesheets_placement ON timesheets(placement_id);
CREATE INDEX idx_timesheets_week ON timesheets(week_start_date DESC);
CREATE INDEX idx_timesheets_status ON timesheets(status);
```

#### `contracts`
```sql
CREATE TABLE contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Related Entity
  entity_type TEXT CHECK (entity_type IN ('client', 'candidate', 'placement')),
  entity_id UUID NOT NULL,
  
  -- Contract Details
  contract_type TEXT CHECK (contract_type IN ('msa', 'sow', 'offer_letter', 'w2', '1099', 'nda')),
  contract_number TEXT UNIQUE,
  
  -- Document
  document_url TEXT,
  signed_document_url TEXT,
  
  -- Status
  status TEXT CHECK (status IN ('draft', 'sent', 'signed', 'expired', 'terminated')) DEFAULT 'draft',
  
  -- Dates
  effective_date DATE,
  expiration_date DATE,
  signed_date DATE,
  
  -- Signers
  signed_by_us UUID REFERENCES user_profiles(id),
  signed_by_them TEXT, -- Name of external signer
  
  -- Alerts
  expiration_alert_sent BOOLEAN DEFAULT false,
  
  -- Metadata
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contracts_entity ON contracts(entity_type, entity_id);
CREATE INDEX idx_contracts_status ON contracts(status);
CREATE INDEX idx_contracts_expiration ON contracts(expiration_date);
```

---

### **5. Activity Tracking**

#### `activities`
```sql
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Related Entity (polymorphic)
  entity_type TEXT NOT NULL CHECK (entity_type IN ('candidate', 'client', 'job', 'application', 'opportunity', 'placement')),
  entity_id UUID NOT NULL,
  
  -- Activity Type
  activity_type TEXT NOT NULL CHECK (activity_type IN (
    'note',
    'email',
    'call',
    'meeting',
    'task',
    'status_change',
    'document_upload',
    'interview_scheduled',
    'offer_extended',
    'placement_started'
  )),
  
  -- Details
  subject TEXT,
  description TEXT,
  
  -- Task-specific
  due_date TIMESTAMPTZ,
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  
  -- Communication-specific
  direction TEXT CHECK (direction IN ('inbound', 'outbound')),
  
  -- Metadata
  metadata JSONB, -- Flexible storage for activity-specific data
  
  -- Ownership
  created_by UUID REFERENCES user_profiles(id),
  assigned_to UUID REFERENCES user_profiles(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_activities_entity ON activities(entity_type, entity_id);
CREATE INDEX idx_activities_type ON activities(activity_type);
CREATE INDEX idx_activities_created_by ON activities(created_by);
CREATE INDEX idx_activities_created_at ON activities(created_at DESC);
```

---

### **6. System Tables**

#### `audit_logs`
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- What changed
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  
  -- Changes
  old_data JSONB,
  new_data JSONB,
  changed_fields TEXT[],
  
  -- Who & When
  user_id UUID REFERENCES user_profiles(id),
  user_email TEXT,
  ip_address INET,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_table_record ON audit_logs(table_name, record_id);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created ON audit_logs(created_at DESC);
```

#### `notifications`
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Recipient
  user_id UUID NOT NULL REFERENCES user_profiles(id),
  
  -- Notification Details
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  
  -- Related Entity
  entity_type TEXT,
  entity_id UUID,
  
  -- Status
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMPTZ,
  
  -- Action
  action_url TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(is_read);
CREATE INDEX idx_notifications_created ON notifications(created_at DESC);
```

---

## **Relationships Summary**

```
candidates (1) ----< (M) applications >---- (M) jobs
                                                 |
                                                 v
                                            clients (1)
                                                 |
                                                 v
applications (1) ----< (M) interviews      contacts (M)
                      
applications (1) ---- (1) placements ---- (1) jobs
                            |
                            v
                      timesheets (M)
                      
clients (1) ----< (M) opportunities
clients (1) ----< (M) contacts
clients (1) ----< (M) contracts

activities (M) ---- (1) [any entity]
audit_logs (M) ---- (1) [any table]
```

---

## **Next Steps**

1. ✅ Create SQL migration files
2. ✅ Set up RLS policies
3. ✅ Create seed data
4. ✅ Build TypeScript types
5. ✅ Test all relationships


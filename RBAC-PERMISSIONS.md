# 🔐 Role-Based Access Control (RBAC) Matrix

## **User Roles**

```
├─ admin            → Full system access
├─ recruiter        → ATS-focused (candidates, jobs, applications)
├─ sales            → CRM-focused (leads, opportunities, clients)
├─ account_manager  → Client relationship management
├─ operations       → Placement management, timesheets, contracts
├─ employee         → Basic employee access
└─ student          → Training platform only (separate system)
```

---

## **Permissions Matrix**

### **ATS Module**

| Entity | Admin | Recruiter | Sales | Account Mgr | Operations |
|--------|-------|-----------|-------|-------------|------------|
| **Candidates** |
| View All | ✅ | ✅ | ❌ | ❌ | ✅ (view only) |
| View Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ✅ | ❌ | ❌ | ❌ |
| Update Own | ✅ | ✅ | ❌ | ❌ | ❌ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ✅ (soft) | ❌ | ❌ | ❌ |
| **Jobs** |
| View All | ✅ | ✅ | ✅ | ✅ | ✅ |
| View Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ✅ | ✅ | ❌ | ❌ |
| Update Own | ✅ | ✅ | ❌ | ❌ | ❌ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ✅ (soft) | ❌ | ❌ | ❌ |
| **Applications** |
| View All | ✅ | ✅ | ❌ | ❌ | ✅ |
| View Related | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ✅ | ❌ | ❌ | ❌ |
| Update Stage | ✅ | ✅ | ❌ | ❌ | ❌ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Interviews** |
| View | ✅ | ✅ | ❌ | ❌ | ✅ |
| Schedule | ✅ | ✅ | ❌ | ❌ | ❌ |
| Add Feedback | ✅ | ✅ | ❌ | ❌ | ❌ |

---

### **CRM Module**

| Entity | Admin | Recruiter | Sales | Account Mgr | Operations |
|--------|-------|-----------|-------|-------------|------------|
| **Clients** |
| View All | ✅ | ✅ | ✅ | ✅ | ✅ |
| View Assigned | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ❌ | ✅ | ✅ | ❌ |
| Update Assigned | ✅ | ❌ | ✅ | ✅ | ❌ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ✅ (soft) | ❌ | ❌ |
| **Contacts** |
| View | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ❌ | ✅ | ✅ | ❌ |
| Update | ✅ | ❌ | ✅ | ✅ | ❌ |
| Delete | ✅ | ❌ | ✅ (soft) | ✅ (soft) | ❌ |
| **Opportunities** |
| View All | ✅ | ❌ | ✅ | ✅ | ❌ |
| View Own | ✅ | ❌ | ✅ | ✅ | ❌ |
| Create | ✅ | ❌ | ✅ | ✅ | ❌ |
| Update Own | ✅ | ❌ | ✅ | ✅ | ❌ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ✅ (soft) | ❌ | ❌ |

---

### **Operations Module**

| Entity | Admin | Recruiter | Sales | Account Mgr | Operations |
|--------|-------|-----------|-------|-------------|------------|
| **Placements** |
| View All | ✅ | ✅ | ✅ | ✅ | ✅ |
| View Related | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ✅ | ❌ | ❌ | ✅ |
| Update | ✅ | ✅ (own) | ❌ | ✅ (assigned) | ✅ |
| Terminate | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Timesheets** |
| View All | ✅ | ❌ | ❌ | ❌ | ✅ |
| View Related | ✅ | ✅ (own placements) | ❌ | ✅ (assigned) | ✅ |
| Submit | ❌ | ❌ | ❌ | ❌ | ✅ |
| Approve | ✅ | ❌ | ❌ | ✅ | ✅ |
| Reject | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Contracts** |
| View All | ✅ | ❌ | ❌ | ❌ | ✅ |
| View Related | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ❌ | ❌ | ❌ | ✅ |
| Update | ✅ | ❌ | ❌ | ❌ | ✅ |
| Mark Signed | ✅ | ❌ | ❌ | ❌ | ✅ |

---

### **Activities & System**

| Entity | Admin | Recruiter | Sales | Account Mgr | Operations |
|--------|-------|-----------|-------|-------------|------------|
| **Activities** |
| View All | ✅ | ❌ | ❌ | ❌ | ❌ |
| View Related | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create | ✅ | ✅ | ✅ | ✅ | ✅ |
| Update Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Delete Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Notifications** |
| View Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mark Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Audit Logs** |
| View | ✅ | ❌ | ❌ | ❌ | ❌ |
| Export | ✅ | ❌ | ❌ | ❌ | ❌ |
| **User Profiles** |
| View All | ✅ | ✅ | ✅ | ✅ | ✅ |
| View Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Update Own | ✅ | ✅ | ✅ | ✅ | ✅ |
| Update All | ✅ | ❌ | ❌ | ❌ | ❌ |
| Change Roles | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## **Role Descriptions**

### **👑 Admin**
- **Access:** Full system access
- **Responsibilities:**
  - System configuration
  - User management
  - All data access
  - Audit logs
  - Settings & integrations

### **🎯 Recruiter**
- **Access:** ATS-focused
- **Responsibilities:**
  - Candidate sourcing & management
  - Job requisition creation
  - Application tracking
  - Interview scheduling
  - Candidate submissions
- **Dashboard:** Candidate pipeline, active jobs, interviews

### **💼 Sales**
- **Access:** CRM-focused
- **Responsibilities:**
  - Lead generation
  - Client acquisition
  - Opportunity management
  - Deal closing
  - Revenue targets
- **Dashboard:** Sales pipeline, opportunities, closed deals

### **🤝 Account Manager**
- **Access:** Client relationship management
- **Responsibilities:**
  - Client satisfaction
  - Contract renewals
  - Placement oversight
  - Issue resolution
  - Upselling
- **Dashboard:** Client health, active placements, renewals

### **⚙️ Operations**
- **Access:** Placement & administrative operations
- **Responsibilities:**
  - Placement management
  - Timesheet approval
  - Contract tracking
  - Compliance
  - Invoice generation
- **Dashboard:** Active placements, pending timesheets, expiring contracts

### **👤 Employee**
- **Access:** Basic employee functions
- **Responsibilities:**
  - View own profile
  - Submit time (if placed as consultant)
  - View assigned tasks
- **Dashboard:** Personal dashboard

---

## **Special Permission Rules**

### **Data Ownership**
```typescript
// Candidates
owner_id === user_id → Full CRUD
owner_id !== user_id → Read-only (if role allows)

// Jobs
owner_id === user_id → Full CRUD
owner_id !== user_id → Read-only (if role allows)

// Clients
account_manager_id === user_id → Full CRUD
sales_rep_id === user_id → Full CRUD
Neither → Read-only (if role allows)
```

### **Cross-Role Access**
```typescript
// Recruiters can view clients for their jobs
recruiter → jobs → client_id → clients (read-only)

// Account Managers can view candidates for their placements
account_manager → placements → candidate_id → candidates (read-only)

// All roles can view activities related to their entities
user → [entity they own] → activities (read/write)
```

### **Soft Delete**
- Only admins can hard delete
- Recruiters/Sales can soft delete (set `deleted_at`)
- Deleted records hidden from regular views
- Admins can restore deleted records

---

## **Implementation in Supabase**

### **RLS Policy Pattern**
```sql
-- View own records
CREATE POLICY "View own {entity}"
  ON {table} FOR SELECT
  USING (owner_id = auth.uid());

-- View all if admin/recruiter
CREATE POLICY "View all {entity}"
  ON {table} FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() 
      AND role IN ('admin', 'recruiter')
    )
  );

-- Update own records
CREATE POLICY "Update own {entity}"
  ON {table} FOR UPDATE
  USING (owner_id = auth.uid());

-- Admins can update all
CREATE POLICY "Admins update all {entity}"
  ON {table} FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

---

## **Next Steps**

1. ✅ Implement RLS policies for all tables
2. ✅ Create helper functions for permission checks
3. ✅ Build role-specific dashboards
4. ✅ Test all permission scenarios
5. ✅ Document edge cases


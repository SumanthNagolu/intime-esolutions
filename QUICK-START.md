# 🚀 QUICK START GUIDE - InTime Command Center

**Get up and running in 10 minutes!**

---

## ✅ **CHECKLIST**

- [x] **Step 1:** Database setup completed (`COMPLETE_SETUP_ALL.sql`)
- [ ] **Step 2:** Create test users (choose one method below)
- [ ] **Step 3:** Start the app and test

---

## 🎯 **STEP 2: CREATE TEST USERS**

### **METHOD 1: Dashboard + SQL (RECOMMENDED)** ⭐

**Time:** 5 minutes | **Success Rate:** 100%

1. **Supabase Dashboard** → **Authentication** → **Users**
2. **Click "Add User"** for each:
   - `admin@intimesolutions.com` / `Test123!@#` ✅ Auto Confirm
   - `recruiter1@intimesolutions.com` / `Test123!@#` ✅ Auto Confirm
   - `sales1@intimesolutions.com` / `Test123!@#` ✅ Auto Confirm
   - `ops1@intimesolutions.com` / `Test123!@#` ✅ Auto Confirm

3. **SQL Editor** → Run `scripts/setup-test-users.sql`
4. ✅ **Done!**

---

### **METHOD 2: Single SQL Script** ⚡

**Time:** 2 minutes | **Requires:** Service role access

1. **SQL Editor** → Toggle **"Run as service_role"** ✅
2. Run `scripts/create-test-users-simple.sql`
3. ✅ **Done!**

---

### **METHOD 3: Advanced Direct Insert** 🔧

**Time:** 2 minutes | **For:** Advanced users

1. **SQL Editor** → Run `scripts/create-test-users-complete.sql`
2. ✅ **Done!**

**See full guide:** `scripts/README-USER-SETUP.md`

---

## 🎯 **STEP 3: START & TEST**

### **Start the App**

```bash
npm run dev
```

### **Open Browser**

```
http://localhost:3000
```

### **Test Logins**

Navigate to: `http://localhost:3000/employee/login`

| Email | Password | See |
|-------|----------|-----|
| `admin@intimesolutions.com` | `Test123!@#` | Admin dashboard with all access |
| `recruiter1@intimesolutions.com` | `Test123!@#` | Recruiter pipeline & candidates |
| `sales1@intimesolutions.com` | `Test123!@#` | Sales opportunities & clients |
| `ops1@intimesolutions.com` | `Test123!@#` | Operations placements & timesheets |

---

## 🧪 **QUICK SMOKE TEST**

### **1. Recruiter Workflow** (2 min)

1. Login as **recruiter1@intimesolutions.com**
2. Go to `/employee/candidates` → Add candidate
3. Go to `/employee/jobs` → Create job
4. Go to `/employee/pipeline` → Create application
5. Drag card through stages ✅

### **2. Sales Workflow** (2 min)

1. Login as **sales1@intimesolutions.com**
2. Go to `/employee/clients` → Add client
3. Go to `/employee/opportunities` → Create deal
4. Drag through stages ✅

### **3. Website Lead Capture** (1 min)

1. Go to `http://localhost:3000/contact`
2. Fill form and submit
3. Login as sales → Check `/employee/opportunities`
4. See auto-created lead ✅

---

## 📊 **WHAT'S WORKING**

✅ **Authentication & Authorization**
- Role-based login
- Dashboard routing
- RLS policies

✅ **ATS (Applicant Tracking)**
- Candidate CRUD
- Job requisitions
- Pipeline Kanban
- Application tracking

✅ **CRM (Customer Relationship)**
- Client management
- Opportunity pipeline
- Auto lead capture

✅ **Operations**
- Placement tracking
- Timesheet management

✅ **System Features**
- Audit logs
- Activity timelines
- Notifications

---

## 🐛 **TROUBLESHOOTING**

### ❌ "Cannot read properties of null"
**Fix:** Log out and log back in

### ❌ "RLS Policy Violation"
**Fix:** Check user role is set correctly in `user_profiles`

### ❌ Page not loading
**Fix:** Restart dev server (`Ctrl+C` → `npm run dev`)

### ❌ Test users script fails
**Fix:** Run `COMPLETE_SETUP_ALL.sql` first

---

## 📚 **DETAILED GUIDES**

- **Test Users Setup:** `scripts/README-USER-SETUP.md`
- **End-to-End Testing:** `TESTING-GUIDE.md`
- **Database Schema:** `DATABASE-SCHEMA.md`
- **Workflows:** `WORKFLOWS-RECRUITER.md`, `WORKFLOWS-SALES.md`, `WORKFLOWS-OPERATIONS.md`
- **Deployment:** `DEPLOYMENT-CHECKLIST.md`

---

## 🎯 **NEXT STEPS**

After basic testing:

1. **Load Seed Data:** `supabase/migrations/crm-ats/011_seed_data.sql`
2. **Full Testing:** Follow `TESTING-GUIDE.md`
3. **Deploy to Vercel:** Automatic on git push
4. **Run Production Migrations:** Apply SQL to production DB

---

## 🚨 **NEED HELP?**

1. Check `QUICK-START.md` (this file)
2. Check specific guide in `scripts/` or root directory
3. Search for error in `TROUBLESHOOTING.md` (if exists)
4. Ask in chat with full error message

---

**WITH GURU'S GRACE! JAI VIJAYA!** 🙏

**Last Updated:** 2024-11-09

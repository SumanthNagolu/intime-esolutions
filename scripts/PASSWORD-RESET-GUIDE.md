# 🔐 Password Reset Guide for InTime Command Center

## ✅ **RECOMMENDED METHODS**

### **METHOD 1: Supabase Dashboard (Easiest)**
1. Go to **Supabase Dashboard → Authentication → Users**
2. Find user: `admin@intimesolutions.com`
3. Click **3-dot menu** → **"Reset Password"**
4. Enter new password: `Test123!@#`
5. Click **"Update User"**

✅ **Pros:** Simple, safe, no code needed  
❌ **Cons:** Manual process

---

### **METHOD 2: SQL Reset (Development Only)**

**⚠️ WARNING:** Only use in development! Requires service role permissions.

1. Open **Supabase SQL Editor**
2. **Toggle "Run as service_role"** (bottom right)
3. Run this query:

```sql
UPDATE auth.users
SET 
  encrypted_password = crypt('Test123!@#', gen_salt('bf')),
  email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
  confirmed_at = COALESCE(confirmed_at, NOW()),
  updated_at = NOW()
WHERE email = 'admin@intimesolutions.com'
RETURNING 
  id, 
  email, 
  email_confirmed_at,
  encrypted_password = crypt('Test123!@#', encrypted_password) as password_verified;
```

**Expected:** `password_verified: true`

✅ **Pros:** Fast, good for dev/testing  
❌ **Cons:** Not recommended for production, bypasses Auth API

---

### **METHOD 3: Admin API (Production)**

Use the Edge Function we created:

```bash
# Deploy the function
supabase functions deploy admin-reset-password

# Call it (requires admin token)
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/admin-reset-password \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"userId": "USER_UUID", "newPassword": "NewPassword123!"}'
```

✅ **Pros:** Production-safe, logged, auditable  
❌ **Cons:** Requires Edge Function deployment

---

### **METHOD 4: Password Reset Email**

Send reset link to user:

```typescript
const { data, error } = await supabase.auth.resetPasswordForEmail(
  'admin@intimesolutions.com',
  {
    redirectTo: 'https://guidewire-assistant.vercel.app/auth/callback'
  }
);
```

✅ **Pros:** User-controlled, secure  
❌ **Cons:** Requires email delivery working

---

## 🔍 **DIAGNOSTIC: Verify User & Password**

Run `scripts/verify-user-password.sql` to check:
- ✅ User exists in `auth.users`
- ✅ Email is confirmed
- ✅ Password hash is correct
- ✅ Profile exists with correct role
- ✅ RLS policies are correct

---

## 🐛 **COMMON ISSUES**

### **Issue 1: "Invalid login credentials" (400)**

**Cause:** Password doesn't match hash

**Fix:**
```sql
-- Test current password
SELECT encrypted_password = crypt('Test123!@#', encrypted_password) 
FROM auth.users 
WHERE email = 'admin@intimesolutions.com';

-- If returns false, reset password (Method 2)
```

---

### **Issue 2: Email not confirmed**

**Cause:** `email_confirmed_at` is NULL

**Fix:**
```sql
UPDATE auth.users
SET email_confirmed_at = NOW(), confirmed_at = NOW()
WHERE email = 'admin@intimesolutions.com';
```

---

### **Issue 3: User exists but profile missing**

**Cause:** `user_profiles` row doesn't exist

**Fix:**
```sql
INSERT INTO user_profiles (id, role, first_name, last_name, email)
SELECT id, 'admin', 'Admin', 'User', email
FROM auth.users
WHERE email = 'admin@intimesolutions.com'
ON CONFLICT (id) DO UPDATE
SET role = 'admin', updated_at = NOW();
```

---

### **Issue 4: RLS blocking reads**

**Cause:** Infinite recursion in RLS policies

**Fix:** Run the RLS fix from `verify-user-password.sql`

---

## 🎯 **QUICK TESTING WORKFLOW**

1. **Check user status:**
   ```sql
   -- Run first section of verify-user-password.sql
   SELECT * FROM auth.users WHERE email = 'admin@intimesolutions.com';
   ```

2. **Reset password:**
   - Use **Method 1** (Dashboard) OR **Method 2** (SQL)

3. **Verify password:**
   ```sql
   SELECT encrypted_password = crypt('Test123!@#', encrypted_password) 
   FROM auth.users 
   WHERE email = 'admin@intimesolutions.com';
   ```

4. **Test login:**
   - Go to: https://guidewire-assistant.vercel.app/employee/login
   - Email: `admin@intimesolutions.com`
   - Password: `Test123!@#`

---

## 📝 **SECURITY NOTES**

- **Development:** SQL reset is fine (Methods 2)
- **Production:** Always use Admin API (Method 3) or Dashboard (Method 1)
- **Never:** Share service role key in client code
- **Always:** Log password changes for audit trail
- **Consider:** Implementing password reset via email for users

---

## 🚀 **NEXT STEPS AFTER RESET**

1. ✅ Test login immediately
2. ✅ Verify role-based redirects work
3. ✅ Check employee dashboard loads
4. ✅ Document password for other admins
5. ✅ Enable 2FA for production (future)

---

**JAI VIJAYA!** 🙏


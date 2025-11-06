# Signup Fix Guide 🔧

## Problem
When users try to sign up, they get: **"Failed to create user profile"**

## Root Cause
The signup action was trying to manually insert profiles into `user_profiles`, but was being blocked by RLS (Row Level Security) policies.

## Solution
Created a **database trigger** that automatically creates profiles when users sign up. This trigger runs with elevated privileges (`SECURITY DEFINER`) and bypasses RLS.

---

## 🚀 How to Fix (Run in Supabase)

### Step 1: Apply the Trigger

Copy and run this in **Supabase SQL Editor**:

```bash
cat database/FIX-SIGNUP-TRIGGER.sql | pbcopy
```

Then paste and execute in Supabase.

**What it does:**
- Creates `handle_new_user()` function
- Sets up trigger on `auth.users` table
- Automatically creates profile when user signs up
- Extracts first_name and last_name from user metadata

### Step 2: Fix RLS Policies

Copy and run this in **Supabase SQL Editor**:

```bash
cat database/FIX-RLS-POLICIES.sql | pbcopy
```

Then paste and execute in Supabase.

**What it does:**
- Allows users to view their own profile
- Allows users to update their own profile
- Allows service role to insert profiles (for the trigger)

---

## ✅ Verification

After running both scripts, verify the trigger exists:

```sql
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';
```

**Expected result:**
```
trigger_name          | on_auth_user_created
event_manipulation    | INSERT
event_object_table    | users
action_statement      | EXECUTE FUNCTION public.handle_new_user()
```

Verify RLS policies:

```sql
SELECT 
  policyname,
  cmd,
  permissive
FROM pg_policies
WHERE tablename = 'user_profiles';
```

**Expected policies:**
1. `Users can view their own profile` (SELECT)
2. `Users can update their own profile` (UPDATE)
3. `Service role can insert profiles` (INSERT)

---

## 🧪 Test Signup Flow

1. **Clear any test users** (optional):
   ```sql
   -- In Supabase: Authentication → Users → Delete test users
   ```

2. **Go to your app** (e.g., `http://localhost:3000/signup`)

3. **Fill out signup form:**
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Password: (min 8 characters)

4. **Click "Create Account"**

5. **Expected:**
   - ✅ "Account created! Please check your email to verify your account."
   - No "Failed to create user profile" error

6. **Verify in database:**
   ```sql
   SELECT 
     id, 
     email, 
     first_name, 
     last_name, 
     role, 
     onboarding_completed
   FROM user_profiles
   WHERE email = 'test@example.com';
   ```

   **Expected:**
   ```
   id                  | (UUID of user)
   email               | test@example.com
   first_name          | Test
   last_name           | User
   role                | user
   onboarding_completed| false
   ```

---

## 🔄 Login Flow

After signup is fixed:

1. **Check email** for verification link (if email confirmation is enabled)
2. **Click verification link** (or skip if disabled)
3. **Go to login page**: `/login`
4. **Enter credentials**
5. **Expected flow:**
   - If `onboarding_completed = false` → Redirect to `/profile-setup`
   - If `onboarding_completed = true` → Redirect to `/dashboard`

---

## 📝 Code Changes

### Before (manual profile creation):
```typescript
// In modules/auth/actions.ts
const { error: profileError } = await supabase.from('user_profiles').insert({
  id: authData.user.id,
  email: authData.user.email!,
  first_name: firstName,
  last_name: lastName,
  role: 'user',
  onboarding_completed: false,
});

if (profileError) {
  return { success: false, error: 'Failed to create user profile' };
}
```

### After (trigger handles it):
```typescript
// Note: User profile is automatically created by database trigger (handle_new_user)
// See database/FIX-SIGNUP-TRIGGER.sql
```

---

## 🐛 Troubleshooting

### Issue 1: Trigger not firing
**Symptom:** User signs up, but no profile created

**Check:**
```sql
SELECT * FROM information_schema.triggers 
WHERE trigger_name = 'on_auth_user_created';
```

**Fix:** Re-run `FIX-SIGNUP-TRIGGER.sql`

---

### Issue 2: "permission denied for schema public"
**Symptom:** Trigger error in Supabase logs

**Check:**
```sql
SELECT * FROM pg_namespace WHERE nspname = 'public';
```

**Fix:** Grant permissions (included in FIX-SIGNUP-TRIGGER.sql):
```sql
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
```

---

### Issue 3: Duplicate profiles
**Symptom:** Multiple profiles for same user

**Check:**
```sql
SELECT email, COUNT(*) 
FROM user_profiles 
GROUP BY email 
HAVING COUNT(*) > 1;
```

**Fix:** Delete duplicates:
```sql
-- Keep the oldest profile, delete newer ones
DELETE FROM user_profiles
WHERE id IN (
  SELECT id FROM (
    SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) as row_num
    FROM user_profiles
  ) t
  WHERE t.row_num > 1
);
```

---

## ✨ Summary

- ✅ Signup now creates profiles automatically via trigger
- ✅ RLS policies allow proper access control
- ✅ Code simplified (removed manual insert)
- ✅ More secure (SECURITY DEFINER)
- ✅ More reliable (bypasses RLS during creation)

**Next:** Test signup → profile-setup → login → dashboard flow! 🚀


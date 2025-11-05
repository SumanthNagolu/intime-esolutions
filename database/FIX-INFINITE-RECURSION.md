# Fix: Infinite Recursion in RLS Policies

## Problem
The error "infinite recursion detected in policy for relation user_profiles" occurs because the RLS policies on `user_profiles` table query the same table to check if a user is an admin, creating a circular dependency.

## Solution
Create a helper function `is_admin()` that uses `SECURITY DEFINER` to bypass RLS and safely check the admin role.

## How to Apply the Fix

### Option 1: Via Supabase Dashboard (Recommended)

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `fix-rls-infinite-recursion.sql`
5. Click **Run** (or press Ctrl+Enter / Cmd+Enter)
6. Wait for "Success. No rows returned"

### Option 2: Via Local Environment

If you have Supabase CLI installed:

```bash
# Make sure you're in the project directory
cd "/Users/sumanthrajkumarnagolu/Projects/guidewire-training platform"

# Apply the migration
supabase db execute --file database/fix-rls-infinite-recursion.sql
```

### Option 3: Via psql

If you have direct database access:

```bash
psql "your-connection-string-here" < database/fix-rls-infinite-recursion.sql
```

## What This Fix Does

1. **Drops** the problematic policies that cause infinite recursion
2. **Creates** a new `is_admin()` function that safely checks admin status
3. **Recreates** all admin policies using the new function

## Verification

After applying the fix, test by:
1. Try completing your profile setup
2. Try accessing the dashboard
3. If you're an admin, try accessing `/admin`

## If You Still Have Issues

If you continue to see RLS errors after applying this fix:

1. Make sure the SQL ran successfully (no errors in the output)
2. Try refreshing your browser and clearing cache
3. Check if there are any other tables with similar policy issues

## Prevention for Future

When creating new admin policies, always use:
```sql
USING (public.is_admin())
```

Instead of:
```sql
USING (
  EXISTS (
    SELECT 1 FROM user_profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
)
```


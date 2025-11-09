-- ============================================
-- DIAGNOSTIC: Check User & Password Status
-- ============================================

-- 1. Check if user exists in auth.users
SELECT 
  id,
  email,
  email_confirmed_at,
  confirmed_at,
  created_at,
  last_sign_in_at,
  encrypted_password IS NOT NULL as has_password,
  raw_app_meta_data->>'provider' as provider,
  aud,
  role as auth_role
FROM auth.users 
WHERE email = 'admin@intimesolutions.com';

-- 2. Check if profile exists with correct role
SELECT 
  id,
  email,
  role,
  first_name,
  last_name,
  created_at,
  updated_at
FROM user_profiles 
WHERE email = 'admin@intimesolutions.com';

-- 3. Test if password matches (returns true if correct)
-- NOTE: This only verifies the hash, doesn't authenticate
SELECT 
  email,
  encrypted_password = crypt('Test123!@#', encrypted_password) as password_matches,
  email_confirmed_at IS NOT NULL as email_confirmed,
  confirmed_at IS NOT NULL as account_confirmed
FROM auth.users
WHERE email = 'admin@intimesolutions.com';

-- 4. Check RLS policies on user_profiles
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'user_profiles'
ORDER BY policyname;

-- ============================================
-- FIXES (Run individually as needed)
-- ============================================

-- FIX 1: Confirm email if not confirmed
-- UPDATE auth.users
-- SET 
--   email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
--   confirmed_at = COALESCE(confirmed_at, NOW()),
--   updated_at = NOW()
-- WHERE email = 'admin@intimesolutions.com'
-- AND email_confirmed_at IS NULL;

-- FIX 2: Reset password (MUST toggle "Run as service_role")
-- UPDATE auth.users
-- SET 
--   encrypted_password = crypt('Test123!@#', gen_salt('bf')),
--   email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
--   confirmed_at = COALESCE(confirmed_at, NOW()),
--   updated_at = NOW()
-- WHERE email = 'admin@intimesolutions.com'
-- RETURNING 
--   id, 
--   email, 
--   email_confirmed_at,
--   encrypted_password = crypt('Test123!@#', encrypted_password) as password_verified;

-- FIX 3: Ensure user_profiles has admin role
-- INSERT INTO user_profiles (id, role, first_name, last_name, email)
-- SELECT 
--   id,
--   'admin',
--   'Admin',
--   'User',
--   email
-- FROM auth.users
-- WHERE email = 'admin@intimesolutions.com'
-- ON CONFLICT (id) DO UPDATE
-- SET 
--   role = 'admin',
--   first_name = 'Admin',
--   last_name = 'User',
--   updated_at = NOW()
-- RETURNING *;

-- FIX 4: Fix RLS policies (if infinite recursion)
-- DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
-- DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
-- DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
-- DROP POLICY IF EXISTS "Admins can update any profile" ON user_profiles;
-- 
-- CREATE POLICY "user_read_own" ON user_profiles 
--   FOR SELECT USING (auth.uid() = id);
-- 
-- CREATE POLICY "user_update_own" ON user_profiles 
--   FOR UPDATE USING (auth.uid() = id);


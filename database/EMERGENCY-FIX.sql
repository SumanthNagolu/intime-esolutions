-- EMERGENCY FIX: If you're stuck on profile-setup page
-- Run this in Supabase SQL Editor to diagnose and fix the issue

-- Step 1: Check your current user session
SELECT 
  'Current Auth User' as check_type,
  auth.uid() as user_id,
  auth.email() as email;

-- Step 2: Check if your profile exists
SELECT 
  'User Profile Status' as check_type,
  id,
  email,
  first_name,
  last_name,
  role,
  assumed_persona,
  preferred_product_id,
  onboarding_completed,
  created_at
FROM user_profiles
WHERE id = auth.uid();

-- Step 3: Check if products exist (needed for profile setup)
SELECT 
  'Available Products' as check_type,
  id,
  code,
  name
FROM products
ORDER BY code;

-- Step 4: Check RLS policies on user_profiles
SELECT 
  'RLS Policies on user_profiles' as check_type,
  policyname,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'user_profiles';

-- Step 5: Test if you can update your own profile
-- This will fail if RLS is not set up correctly
DO $$
BEGIN
  UPDATE user_profiles 
  SET updated_at = NOW() 
  WHERE id = auth.uid();
  
  IF NOT FOUND THEN
    RAISE NOTICE 'WARNING: Could not update profile - check RLS policies';
  ELSE
    RAISE NOTICE 'SUCCESS: Profile update works!';
  END IF;
END $$;

-- EMERGENCY FIX OPTIONS:
-- If you see your profile but onboarding_completed is false, run this:
/*
UPDATE user_profiles 
SET 
  onboarding_completed = true,
  first_name = COALESCE(first_name, 'User'),
  last_name = COALESCE(last_name, 'Name'),
  assumed_persona = COALESCE(assumed_persona, '3-5 years experience'),
  preferred_product_id = COALESCE(
    preferred_product_id, 
    (SELECT id FROM products ORDER BY code LIMIT 1)
  ),
  updated_at = NOW()
WHERE id = auth.uid();
*/

-- If you don't see any profile, create one:
/*
INSERT INTO user_profiles (
  id, 
  email, 
  first_name, 
  last_name, 
  role, 
  onboarding_completed,
  assumed_persona,
  preferred_product_id
)
SELECT 
  auth.uid(),
  auth.email(),
  'User',
  'Name',
  'user',
  true,
  '3-5 years experience',
  (SELECT id FROM products ORDER BY code LIMIT 1)
WHERE NOT EXISTS (
  SELECT 1 FROM user_profiles WHERE id = auth.uid()
);
*/

-- If products table is empty, you need to insert some:
/*
INSERT INTO products (code, name, description) VALUES
  ('CC', 'ClaimCenter', 'Claims management platform'),
  ('PC', 'PolicyCenter', 'Policy administration system'),
  ('BC', 'BillingCenter', 'Billing and payments platform')
ON CONFLICT (code) DO NOTHING;
*/

-- After making changes, verify everything:
SELECT 
  'Final Status Check' as check_type,
  up.email,
  up.first_name,
  up.last_name,
  up.role,
  up.onboarding_completed,
  p.name as preferred_product
FROM user_profiles up
LEFT JOIN products p ON up.preferred_product_id = p.id
WHERE up.id = auth.uid();


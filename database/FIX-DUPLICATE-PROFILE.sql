-- FIX FOR: "Cannot coerce the result to a single JSON object"
-- This error means you have duplicate profiles or data issues

-- Step 1: Check for duplicate profiles
SELECT 
  'Checking for duplicates' as step,
  id,
  email,
  first_name,
  last_name,
  onboarding_completed,
  created_at,
  COUNT(*) OVER (PARTITION BY id) as duplicate_count
FROM user_profiles
WHERE id = 'fd7815ef-36f7-4785-ab0b-139af581d92a'
ORDER BY created_at;

-- Step 2: If you see duplicates, delete all but the most recent one
-- UNCOMMENT AND RUN THIS IF YOU HAVE DUPLICATES:
/*
DELETE FROM user_profiles
WHERE id = 'fd7815ef-36f7-4785-ab0b-139af581d92a'
AND created_at < (
  SELECT MAX(created_at) 
  FROM user_profiles 
  WHERE id = 'fd7815ef-36f7-4785-ab0b-139af581d92a'
);
*/

-- Step 3: Update your profile with complete data
UPDATE user_profiles
SET
  first_name = 'Test',
  last_name = 'User',
  assumed_persona = '3-5 years experience',
  preferred_product_id = '941952fc-4695-4f8b-9e44-6543bd05f4da', -- ClaimCenter
  onboarding_completed = true,
  role = 'admin',
  updated_at = NOW()
WHERE id = 'fd7815ef-36f7-4785-ab0b-139af581d92a';

-- Step 4: Verify the fix
SELECT 
  'Final verification' as step,
  up.id,
  up.email,
  up.first_name,
  up.last_name,
  up.assumed_persona,
  up.onboarding_completed,
  up.role,
  p.name as preferred_product
FROM user_profiles up
LEFT JOIN products p ON up.preferred_product_id = p.id
WHERE up.id = 'fd7815ef-36f7-4785-ab0b-139af581d92a';

-- Step 5: Check RLS policies are working
-- This should return true if you can access your profile
SELECT 
  'RLS Check' as step,
  auth.uid() = 'fd7815ef-36f7-4785-ab0b-139af581d92a' as "Can access own profile",
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE id = auth.uid()
  ) as "Profile exists and accessible";


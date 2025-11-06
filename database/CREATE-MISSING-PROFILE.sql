-- CREATE MISSING PROFILE
-- This creates a profile for a user who has auth but no profile record

-- Create your profile with all required fields
INSERT INTO user_profiles (
  id,
  email,
  first_name,
  last_name,
  role,
  assumed_persona,
  preferred_product_id,
  onboarding_completed,
  created_at,
  updated_at
) VALUES (
  'fd7815ef-36f7-4785-ab0b-139af581d92a',
  'sumanth@intimesolutions.com',
  'Test',
  'User',
  'admin',
  '3-5 years experience',
  '941952fc-4695-4f8b-9e44-6543bd05f4da', -- ClaimCenter
  true,
  NOW(),
  NOW()
)
ON CONFLICT (id) DO UPDATE
SET
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  assumed_persona = EXCLUDED.assumed_persona,
  preferred_product_id = EXCLUDED.preferred_product_id,
  onboarding_completed = true,
  role = 'admin',
  updated_at = NOW();

-- Verify the profile was created
SELECT 
  'Profile Created Successfully!' as status,
  up.id,
  up.email,
  up.first_name,
  up.last_name,
  up.role,
  up.assumed_persona,
  up.onboarding_completed,
  p.name as preferred_product
FROM user_profiles up
LEFT JOIN products p ON up.preferred_product_id = p.id
WHERE up.id = 'fd7815ef-36f7-4785-ab0b-139af581d92a';


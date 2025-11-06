-- Add COMMON product for foundation/shared content
-- Run this BEFORE import-topics-fixed.sql

-- Insert COMMON product if it doesn't exist
INSERT INTO products (id, code, name, description, icon)
VALUES (
  gen_random_uuid(),
  'COMMON',
  'Foundation',
  'Guidewire foundation topics including Cloud, SurePath, Developer Fundamentals, and Integration',
  '🎓'  -- or use appropriate icon
) ON CONFLICT (code) DO NOTHING;

-- Verify all products exist
SELECT code, name FROM products ORDER BY code;

-- Expected results:
-- BC    | BillingCenter
-- CC    | ClaimCenter
-- COMMON| Foundation
-- PC    | PolicyCenter


-- Fix Topics Schema for Sequential Learning
-- Adds 'code' column for human-readable sequential IDs

-- 1. Clean existing topics data (if any)
TRUNCATE TABLE topics CASCADE;

-- 2. Add 'code' column for sequential IDs like "pc-04-001"
ALTER TABLE topics 
ADD COLUMN IF NOT EXISTS code VARCHAR(50) UNIQUE;

-- 3. Add index for code lookups
CREATE INDEX IF NOT EXISTS idx_topics_code ON topics(code);

-- 4. Update RLS policies to work with both id and code
-- (Policies should already be fine, but let's ensure they exist)

-- Allow authenticated users to read published topics
DROP POLICY IF EXISTS "Users can view published topics" ON topics;
CREATE POLICY "Users can view published topics"
ON topics FOR SELECT
TO authenticated
USING (published = true);

-- Allow admins to manage all topics
DROP POLICY IF EXISTS "Admins can manage topics" ON topics;
CREATE POLICY "Admins can manage topics"
ON topics FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Verify the schema
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'topics'
ORDER BY ordinal_position;


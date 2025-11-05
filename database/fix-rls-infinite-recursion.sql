-- Fix infinite recursion in RLS policies
-- The issue: Policies on user_profiles query user_profiles itself to check admin role

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view feedback" ON beta_feedback_entries;
DROP POLICY IF EXISTS "Admins can manage topics" ON topics;
DROP POLICY IF EXISTS "Admins can view all completions" ON topic_completions;
DROP POLICY IF EXISTS "Admins can manage quiz questions" ON quiz_questions;
DROP POLICY IF EXISTS "Admins can view all quiz attempts" ON quiz_attempts;

-- Create a function to check if current user is admin
-- This function will be marked as SECURITY DEFINER to bypass RLS
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- Recreate policies using the helper function
CREATE POLICY "Admins can view all profiles"
  ON user_profiles FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can view feedback" 
  ON beta_feedback_entries FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can manage topics"
  ON topics FOR ALL
  USING (public.is_admin());

CREATE POLICY "Admins can view all completions"
  ON topic_completions FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can manage quiz questions"
  ON quiz_questions FOR ALL
  USING (public.is_admin());

CREATE POLICY "Admins can view all quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (public.is_admin());

-- Verify the function works
-- SELECT public.is_admin(); -- Should return true if you're admin, false otherwise


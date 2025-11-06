-- Fix Existing Quizzes: Add product_id
-- This updates any quizzes that have topic_id but no product_id

-- Update all quizzes to have the same product_id as their linked topic
UPDATE quizzes
SET product_id = topics.product_id
FROM topics
WHERE quizzes.topic_id = topics.id
  AND quizzes.product_id IS NULL;

-- Verification: Check if all quizzes now have product_id
SELECT 
  q.id,
  q.title,
  t.code as topic_code,
  p.code as product_code,
  CASE 
    WHEN q.product_id IS NULL THEN '❌ Missing product_id'
    ELSE '✅ Has product_id'
  END as status
FROM quizzes q
LEFT JOIN topics t ON q.topic_id = t.id
LEFT JOIN products p ON q.product_id = p.id
ORDER BY q.created_at DESC
LIMIT 10;


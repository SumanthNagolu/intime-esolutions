-- Auto-generated topic import script
-- Run this in Supabase SQL Editor after reorganization

-- Insert topics with content


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-04-001',
  (SELECT id FROM products WHERE code = 'PC'),
  1,
  'videos',
  'Learn about videos in Policy Center',
  235,
  '[]'::jsonb,
  '{"slides": null, "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4", "demo-05.mp4", "demo-06.mp4", "demo-07.mp4", "demo-08.mp4", "demo-09.mp4", "demo-10.mp4", "demo-11.mp4", "demo-12.mp4", "demo-13.mp4", "demo-14.mp4", "demo-15.mp4", "demo-16.mp4", "demo-17.mp4", "demo-18.mp4", "demo-19.mp4", "demo-20.mp4", "demo-21.mp4", "demo-22.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-002',
  (SELECT id FROM products WHERE code = 'PC'),
  2,
  'Pp 01 Policy Center Data Model',
  'Learn about Pp 01 Policy Center Data Model in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-003',
  (SELECT id FROM products WHERE code = 'PC'),
  3,
  'Pp 02 Configuring Location Groups And Pages',
  'Learn about Pp 02 Configuring Location Groups And Pages in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-004',
  (SELECT id FROM products WHERE code = 'PC'),
  4,
  'Pp 03 Configuring Job Wizards',
  'Learn about Pp 03 Configuring Job Wizards in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-005',
  (SELECT id FROM products WHERE code = 'PC'),
  5,
  'Pp 04 Contacts And Locations',
  'Learn about Pp 04 Contacts And Locations in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-006',
  (SELECT id FROM products WHERE code = 'PC'),
  6,
  'Pp 05 Concepts Of Revisioning',
  'Learn about Pp 05 Concepts Of Revisioning in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-007',
  (SELECT id FROM products WHERE code = 'PC'),
  7,
  'Pp 06 Raising Underwriting Issues',
  'Learn about Pp 06 Raising Underwriting Issues in Policy Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-008',
  (SELECT id FROM products WHERE code = 'PC'),
  8,
  'Pp 07 Approving Underwriting Issues',
  'Learn about Pp 07 Approving Underwriting Issues in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-009',
  (SELECT id FROM products WHERE code = 'PC'),
  9,
  'Pp 08 Validation Classes',
  'Learn about Pp 08 Validation Classes in Policy Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-010',
  (SELECT id FROM products WHERE code = 'PC'),
  10,
  'Pp 09 Concepts Of Revisioning Contact And Loaction Information',
  'Learn about Pp 09 Concepts Of Revisioning Contact And Loaction Information in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-011',
  (SELECT id FROM products WHERE code = 'PC'),
  11,
  'Pp 10 Introduction To Perimission Configuration',
  'Learn about Pp 10 Introduction To Perimission Configuration in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-012',
  (SELECT id FROM products WHERE code = 'PC'),
  12,
  'Pp 11 Creating Activities',
  'Learn about Pp 11 Creating Activities in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-013',
  (SELECT id FROM products WHERE code = 'PC'),
  13,
  'Pp 12 Assigning Activities',
  'Learn about Pp 12 Assigning Activities in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-014',
  (SELECT id FROM products WHERE code = 'PC'),
  14,
  'Pp 13 The Job Lifecycle',
  'Learn about Pp 13 The Job Lifecycle in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-02-015',
  (SELECT id FROM products WHERE code = 'PC'),
  15,
  'Pp 14 Configuration Preparing For A Guide Wire Exam',
  'Learn about Pp 14 Configuration Preparing For A Guide Wire Exam in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-016',
  (SELECT id FROM products WHERE code = 'PC'),
  16,
  'Configuring Costs And Transactions',
  'Learn about Configuring Costs And Transactions in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-017',
  (SELECT id FROM products WHERE code = 'PC'),
  17,
  'Configuring Costs Data Objects',
  'Learn about Configuring Costs Data Objects in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-018',
  (SELECT id FROM products WHERE code = 'PC'),
  18,
  'Rating Engine Configuration',
  'Learn about Rating Engine Configuration in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-019',
  (SELECT id FROM products WHERE code = 'PC'),
  19,
  'Rating Maintenance Configuration',
  'Learn about Rating Maintenance Configuration in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-020',
  (SELECT id FROM products WHERE code = 'PC'),
  20,
  'Configuring Rate Rountines And Parameter Sets',
  'Learn about Configuring Rate Rountines And Parameter Sets in Policy Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-021',
  (SELECT id FROM products WHERE code = 'PC'),
  21,
  'Rating Business Overview',
  'Learn about Rating Business Overview in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-022',
  (SELECT id FROM products WHERE code = 'PC'),
  22,
  'Costs And Financial Transactions',
  'Learn about Costs And Financial Transactions in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-023',
  (SELECT id FROM products WHERE code = 'PC'),
  23,
  'Rate Books And Rate Tables',
  'Learn about Rate Books And Rate Tables in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-024',
  (SELECT id FROM products WHERE code = 'PC'),
  24,
  'Rating Worksheets',
  'Learn about Rating Worksheets in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-025',
  (SELECT id FROM products WHERE code = 'PC'),
  25,
  'Rate Routines And Parameter Sets',
  'Learn about Rate Routines And Parameter Sets in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-026',
  (SELECT id FROM products WHERE code = 'PC'),
  26,
  'Rating Overrides',
  'Learn about Rating Overrides in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-03-027',
  (SELECT id FROM products WHERE code = 'PC'),
  27,
  'Impact Testing',
  'Learn about Impact Testing in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-028',
  (SELECT id FROM products WHERE code = 'PC'),
  28,
  'Accounts',
  'Learn about Accounts in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-029',
  (SELECT id FROM products WHERE code = 'PC'),
  29,
  'In Policy 02 Policy Transactions',
  'Learn about In Policy 02 Policy Transactions in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-030',
  (SELECT id FROM products WHERE code = 'PC'),
  30,
  'In Policy 03  The Policy File',
  'Learn about In Policy 03  The Policy File in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-031',
  (SELECT id FROM products WHERE code = 'PC'),
  31,
  'In Policy 04 Product Model Introduction',
  'Learn about In Policy 04 Product Model Introduction in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-032',
  (SELECT id FROM products WHERE code = 'PC'),
  32,
  'In Policy 06  Full Application Submission',
  'Learn about In Policy 06  Full Application Submission in Policy Center',
  65,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4", "demo-05.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-033',
  (SELECT id FROM products WHERE code = 'PC'),
  33,
  'In Policy 07  Policy Tools',
  'Learn about In Policy 07  Policy Tools in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-034',
  (SELECT id FROM products WHERE code = 'PC'),
  34,
  'In Policy 08 Policy Changes And Preemption',
  'Learn about In Policy 08 Policy Changes And Preemption in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-035',
  (SELECT id FROM products WHERE code = 'PC'),
  35,
  'In Policy 09 Renewals',
  'Learn about In Policy 09 Renewals in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-036',
  (SELECT id FROM products WHERE code = 'PC'),
  36,
  'In Policy 10  Cancellation, Reinstatement And Rewrite',
  'Learn about In Policy 10  Cancellation, Reinstatement And Rewrite in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-037',
  (SELECT id FROM products WHERE code = 'PC'),
  37,
  'In Policy 11  Out Of Sequence Transactions',
  'Learn about In Policy 11  Out Of Sequence Transactions in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-038',
  (SELECT id FROM products WHERE code = 'PC'),
  38,
  'In Policy 12  Users And Groups',
  'Learn about In Policy 12  Users And Groups in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-039',
  (SELECT id FROM products WHERE code = 'PC'),
  39,
  'In Policy 13 Organizations And Producer Codes',
  'Learn about In Policy 13 Organizations And Producer Codes in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-040',
  (SELECT id FROM products WHERE code = 'PC'),
  40,
  'In Policy 14 Forms',
  'Learn about In Policy 14 Forms in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-041',
  (SELECT id FROM products WHERE code = 'PC'),
  41,
  'In Policy 15 Introduction To Underwriting Authority',
  'Learn about In Policy 15 Introduction To Underwriting Authority in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-042',
  (SELECT id FROM products WHERE code = 'PC'),
  42,
  'In Policy 16 Managing Underwriting Authority',
  'Learn about In Policy 16 Managing Underwriting Authority in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-043',
  (SELECT id FROM products WHERE code = 'PC'),
  43,
  'In Policy 17 Product Model Products And Policy Lines',
  'Learn about In Policy 17 Product Model Products And Policy Lines in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-044',
  (SELECT id FROM products WHERE code = 'PC'),
  44,
  'In Policy 18 Coverages',
  'Learn about In Policy 18 Coverages in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-045',
  (SELECT id FROM products WHERE code = 'PC'),
  45,
  'In Policy 19 Coverage Terms',
  'Learn about In Policy 19 Coverage Terms in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-046',
  (SELECT id FROM products WHERE code = 'PC'),
  46,
  'In Policy 20  Product Model Availability',
  'Learn about In Policy 20  Product Model Availability in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-047',
  (SELECT id FROM products WHERE code = 'PC'),
  47,
  'In Policy 21 Questions Sets And Offerings',
  'Learn about In Policy 21 Questions Sets And Offerings in Policy Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-048',
  (SELECT id FROM products WHERE code = 'PC'),
  48,
  'In Policy 22 Modifiers',
  'Learn about In Policy 22 Modifiers in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-049',
  (SELECT id FROM products WHERE code = 'PC'),
  49,
  'In Policy 23 Contingencies',
  'Learn about In Policy 23 Contingencies in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-050',
  (SELECT id FROM products WHERE code = 'PC'),
  50,
  'In Policy 24 Policy Holds And Underwriting Referral Reasons',
  'Learn about In Policy 24 Policy Holds And Underwriting Referral Reasons in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-051',
  (SELECT id FROM products WHERE code = 'PC'),
  51,
  'In Policy 25 Documents',
  'Learn about In Policy 25 Documents in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-052',
  (SELECT id FROM products WHERE code = 'PC'),
  52,
  'In Policy 26 Notes',
  'Learn about In Policy 26 Notes in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-053',
  (SELECT id FROM products WHERE code = 'PC'),
  53,
  'In Policy 27 Activities',
  'Learn about In Policy 27 Activities in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-054',
  (SELECT id FROM products WHERE code = 'PC'),
  54,
  'In Policy 28 Roles And Permissions',
  'Learn about In Policy 28 Roles And Permissions in Policy Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-055',
  (SELECT id FROM products WHERE code = 'PC'),
  55,
  'In Policy 29 Validation',
  'Learn about In Policy 29 Validation in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-056',
  (SELECT id FROM products WHERE code = 'PC'),
  56,
  'In Policy 30 Premium Audits',
  'Learn about In Policy 30 Premium Audits in Policy Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-057',
  (SELECT id FROM products WHERE code = 'PC'),
  57,
  'In Policy 31 Rating Basics',
  'Learn about In Policy 31 Rating Basics in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'pc-01-058',
  (SELECT id FROM products WHERE code = 'PC'),
  58,
  'In Policy 32 Introduction To Submission Intake',
  'Learn about In Policy 32 Introduction To Submission Intake in Policy Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-001',
  (SELECT id FROM products WHERE code = 'COMMON'),
  1,
  'Chapter 1 - Guidewire Cloud Overview',
  'Learn about Chapter 1 - Guidewire Cloud Overview in Common',
  25,
  '[]'::jsonb,
  '{"slides": null, "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-002',
  (SELECT id FROM products WHERE code = 'COMMON'),
  2,
  'Messaging Architecture',
  'Learn about Messaging Architecture in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-003',
  (SELECT id FROM products WHERE code = 'COMMON'),
  3,
  'Acknowledging Messages',
  'Learn about Acknowledging Messages in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-004',
  (SELECT id FROM products WHERE code = 'COMMON'),
  4,
  'Integration In Guidewire Cloud',
  'Learn about Integration In Guidewire Cloud in Common',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-005',
  (SELECT id FROM products WHERE code = 'COMMON'),
  5,
  'Batch Processes',
  'Learn about Batch Processes in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-006',
  (SELECT id FROM products WHERE code = 'COMMON'),
  6,
  'Document Management',
  'Learn about Document Management in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-007',
  (SELECT id FROM products WHERE code = 'COMMON'),
  7,
  'Preparing For A Guidewire Exam',
  'Learn about Preparing For A Guidewire Exam in Common',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-008',
  (SELECT id FROM products WHERE code = 'COMMON'),
  8,
  'Authentication',
  'Learn about Authentication in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-009',
  (SELECT id FROM products WHERE code = 'COMMON'),
  9,
  'Plugins',
  'Learn about Plugins in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-010',
  (SELECT id FROM products WHERE code = 'COMMON'),
  10,
  'Gosu Queries',
  'Learn about Gosu Queries in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-011',
  (SELECT id FROM products WHERE code = 'COMMON'),
  11,
  'Bundles And Database Transactions',
  'Learn about Bundles And Database Transactions in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-012',
  (SELECT id FROM products WHERE code = 'COMMON'),
  12,
  'Gosu Templates',
  'Learn about Gosu Templates in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-013',
  (SELECT id FROM products WHERE code = 'COMMON'),
  13,
  'Gosu For Integration',
  'Learn about Gosu For Integration in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-014',
  (SELECT id FROM products WHERE code = 'COMMON'),
  14,
  'Sending Messages',
  'Learn about Sending Messages in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-015',
  (SELECT id FROM products WHERE code = 'COMMON'),
  15,
  'Triggering Messages',
  'Learn about Triggering Messages in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-016',
  (SELECT id FROM products WHERE code = 'COMMON'),
  16,
  'Creating Messages',
  'Learn about Creating Messages in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-017',
  (SELECT id FROM products WHERE code = 'COMMON'),
  17,
  'Message Payload Transformation',
  'Learn about Message Payload Transformation in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-018',
  (SELECT id FROM products WHERE code = 'COMMON'),
  18,
  'Soap Web Services',
  'Learn about Soap Web Services in Common',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-019',
  (SELECT id FROM products WHERE code = 'COMMON'),
  19,
  'Integration Views',
  'Learn about Integration Views in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-020',
  (SELECT id FROM products WHERE code = 'COMMON'),
  20,
  'Introduction To Integration',
  'Learn about Introduction To Integration in Common',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-021',
  (SELECT id FROM products WHERE code = 'COMMON'),
  21,
  'Xml Modeler And Strongly Typed Xml',
  'Learn about Xml Modeler And Strongly Typed Xml in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-022',
  (SELECT id FROM products WHERE code = 'COMMON'),
  22,
  'Restful Web Services',
  'Learn about Restful Web Services in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-023',
  (SELECT id FROM products WHERE code = 'COMMON'),
  23,
  'IS_Fund_01',
  'Learn about IS_Fund_01 in Common',
  35,
  '[]'::jsonb,
  '{"slides": null, "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-024',
  (SELECT id FROM products WHERE code = 'COMMON'),
  24,
  'Is Fund 02   Introduction To The Data Model',
  'Learn about Is Fund 02   Introduction To The Data Model in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-025',
  (SELECT id FROM products WHERE code = 'COMMON'),
  25,
  'Is Fund 03  Introduction To The Extending The Date Mobel',
  'Learn about Is Fund 03  Introduction To The Extending The Date Mobel in Common',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mkv", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-026',
  (SELECT id FROM products WHERE code = 'COMMON'),
  26,
  'Is  Fund 04  Introduction To The User Interface Architecture',
  'Learn about Is  Fund 04  Introduction To The User Interface Architecture in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-027',
  (SELECT id FROM products WHERE code = 'COMMON'),
  27,
  'Is Fund 05 Introduction To Atomic Widgets',
  'Learn about Is Fund 05 Introduction To Atomic Widgets in Common',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-028',
  (SELECT id FROM products WHERE code = 'COMMON'),
  28,
  'Is Fund 06 Introduction To Detail Views',
  'Learn about Is Fund 06 Introduction To Detail Views in Common',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-029',
  (SELECT id FROM products WHERE code = 'COMMON'),
  29,
  'Is Fund 07 Introduction To Locations',
  'Learn about Is Fund 07 Introduction To Locations in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-030',
  (SELECT id FROM products WHERE code = 'COMMON'),
  30,
  'Is Fund 08 Introduction To Gosu',
  'Learn about Is Fund 08 Introduction To Gosu in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-031',
  (SELECT id FROM products WHERE code = 'COMMON'),
  31,
  'Is Fund 09 Introducation To Gosu Rules',
  'Learn about Is Fund 09 Introducation To Gosu Rules in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-032',
  (SELECT id FROM products WHERE code = 'COMMON'),
  32,
  'Is Fund  10 Introduction To Enhancements',
  'Learn about Is Fund  10 Introduction To Enhancements in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-033',
  (SELECT id FROM products WHERE code = 'COMMON'),
  33,
  'Is  Fund 11  Introduction To Code Generation And Debugging',
  'Learn about Is  Fund 11  Introduction To Code Generation And Debugging in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-034',
  (SELECT id FROM products WHERE code = 'COMMON'),
  34,
  'Is Fund 12 Introduction To Creating New Entities',
  'Learn about Is Fund 12 Introduction To Creating New Entities in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-035',
  (SELECT id FROM products WHERE code = 'COMMON'),
  35,
  'Is Fund 13 Introduction To List Views',
  'Learn about Is Fund 13 Introduction To List Views in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-036',
  (SELECT id FROM products WHERE code = 'COMMON'),
  36,
  'Is Fund 14  Introduction To Editable List Views',
  'Learn about Is Fund 14  Introduction To Editable List Views in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-037',
  (SELECT id FROM products WHERE code = 'COMMON'),
  37,
  'Is Fund 15  Introduction To Typelists',
  'Learn about Is Fund 15  Introduction To Typelists in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-038',
  (SELECT id FROM products WHERE code = 'COMMON'),
  38,
  'Is Fund 16  Introduction To Popups',
  'Learn about Is Fund 16  Introduction To Popups in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-039',
  (SELECT id FROM products WHERE code = 'COMMON'),
  39,
  'Is Fund 17 Introduction To Validation',
  'Learn about Is Fund 17 Introduction To Validation in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-040',
  (SELECT id FROM products WHERE code = 'COMMON'),
  40,
  'Is Fund  18 Introduction To Input Sets',
  'Learn about Is Fund  18 Introduction To Input Sets in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-041',
  (SELECT id FROM products WHERE code = 'COMMON'),
  41,
  'Is Fund  19 Introduction To Partial Page Update',
  'Learn about Is Fund  19 Introduction To Partial Page Update in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-042',
  (SELECT id FROM products WHERE code = 'COMMON'),
  42,
  'Is Fund 20 Introduction To Subtypes',
  'Learn about Is Fund 20 Introduction To Subtypes in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-043',
  (SELECT id FROM products WHERE code = 'COMMON'),
  43,
  'Is Fund 21 Introduction To Modes',
  'Learn about Is Fund 21 Introduction To Modes in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-044',
  (SELECT id FROM products WHERE code = 'COMMON'),
  44,
  'Is Fund 22 Introduction To Entity Names',
  'Learn about Is Fund 22 Introduction To Entity Names in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-045',
  (SELECT id FROM products WHERE code = 'COMMON'),
  45,
  'Chapter 3 - InsuranceSuite Implementation Tools',
  'Learn about Chapter 3 - InsuranceSuite Implementation Tools in Common',
  15,
  '[]'::jsonb,
  '{"slides": null, "demos": [], "assignment": "assignment.pdf"}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'common-046',
  (SELECT id FROM products WHERE code = 'COMMON'),
  46,
  'Surepathoverview',
  'Learn about Surepathoverview in Common',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pdf", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-001',
  (SELECT id FROM products WHERE code = 'BC'),
  1,
  'Billing Lifecycle',
  'Learn about Billing Lifecycle in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-002',
  (SELECT id FROM products WHERE code = 'BC'),
  2,
  'Interacting With A Development System',
  'Learn about Interacting With A Development System in Billing Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-003',
  (SELECT id FROM products WHERE code = 'BC'),
  3,
  'Charge Invoicing Overview 03',
  'Learn about Charge Invoicing Overview 03 in Billing Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-004',
  (SELECT id FROM products WHERE code = 'BC'),
  4,
  'Billing A One Time Charge',
  'Learn about Billing A One Time Charge in Billing Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-005',
  (SELECT id FROM products WHERE code = 'BC'),
  5,
  'Billing A Pro Rata Charge',
  'Learn about Billing A Pro Rata Charge in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-006',
  (SELECT id FROM products WHERE code = 'BC'),
  6,
  'Administering Charge Invoicing',
  'Learn about Administering Charge Invoicing in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-007',
  (SELECT id FROM products WHERE code = 'BC'),
  7,
  'Sending Invoices',
  'Learn about Sending Invoices in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-008',
  (SELECT id FROM products WHERE code = 'BC'),
  8,
  'Managing Invoices',
  'Learn about Managing Invoices in Billing Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-009',
  (SELECT id FROM products WHERE code = 'BC'),
  9,
  'Receiving Direct Bill Payments',
  'Learn about Receiving Direct Bill Payments in Billing Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-010',
  (SELECT id FROM products WHERE code = 'BC'),
  10,
  'Applying Direct Bill Payments',
  'Learn about Applying Direct Bill Payments in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-011',
  (SELECT id FROM products WHERE code = 'BC'),
  11,
  'Managing Direct Bill Payments',
  'Learn about Managing Direct Bill Payments in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-012',
  (SELECT id FROM products WHERE code = 'BC'),
  12,
  'Processing A Delinquency',
  'Learn about Processing A Delinquency in Billing Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-013',
  (SELECT id FROM products WHERE code = 'BC'),
  13,
  'Using Trouble Tickets To Resolve Issues',
  'Learn about Using Trouble Tickets To Resolve Issues in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-014',
  (SELECT id FROM products WHERE code = 'BC'),
  14,
  'Managing Producers And Commissions',
  'Learn about Managing Producers And Commissions in Billing Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-015',
  (SELECT id FROM products WHERE code = 'BC'),
  15,
  'Handling Policy Tranactions After Issuance',
  'Learn about Handling Policy Tranactions After Issuance in Billing Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-016',
  (SELECT id FROM products WHERE code = 'BC'),
  16,
  'Managing Disbursements',
  'Learn about Managing Disbursements in Billing Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-017',
  (SELECT id FROM products WHERE code = 'BC'),
  17,
  'Billing At The Account Level',
  'Learn about Billing At The Account Level in Billing Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-018',
  (SELECT id FROM products WHERE code = 'BC'),
  18,
  'Designating An Alternate Payer',
  'Learn about Designating An Alternate Payer in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'bc-01-019',
  (SELECT id FROM products WHERE code = 'BC'),
  19,
  'Controlling Access',
  'Learn about Controlling Access in Billing Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-001',
  (SELECT id FROM products WHERE code = 'CC'),
  1,
  'Is Claim 01 Introduction To The Claims Process',
  'Learn about Is Claim 01 Introduction To The Claims Process in Claim Center',
  95,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4", "demo-05.mp4", "demo-06.mp4", "demo-07.mp4", "demo-08.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-002',
  (SELECT id FROM products WHERE code = 'CC'),
  2,
  'Is Claim  02 Introduction To Claim Maintenance',
  'Learn about Is Claim  02 Introduction To Claim Maintenance in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-003',
  (SELECT id FROM products WHERE code = 'CC'),
  3,
  'Is Claim 03 Introduction To Organizational Structure',
  'Learn about Is Claim 03 Introduction To Organizational Structure in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-004',
  (SELECT id FROM products WHERE code = 'CC'),
  4,
  'Is Claim 04 Introduction To Claim Intake',
  'Learn about Is Claim 04 Introduction To Claim Intake in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-005',
  (SELECT id FROM products WHERE code = 'CC'),
  5,
  'Is Claim 05 Introduction To Claim Setup',
  'Learn about Is Claim 05 Introduction To Claim Setup in Claim Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-006',
  (SELECT id FROM products WHERE code = 'CC'),
  6,
  'Is Claim 06 Introduction To Data Model',
  'Learn about Is Claim 06 Introduction To Data Model in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-007',
  (SELECT id FROM products WHERE code = 'CC'),
  7,
  'Is Claim 07 Introduction To Adjudication',
  'Learn about Is Claim 07 Introduction To Adjudication in Claim Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-008',
  (SELECT id FROM products WHERE code = 'CC'),
  8,
  'Is Claim 08 Introduction To Worker''S Compensation Exposures',
  'Learn about Is Claim 08 Introduction To Worker''S Compensation Exposures in Claim Center',
  55,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4", "demo-04.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-009',
  (SELECT id FROM products WHERE code = 'CC'),
  9,
  'Is Claim 09 Introduction To Defining Financial Terms And Concepts',
  'Learn about Is Claim 09 Introduction To Defining Financial Terms And Concepts in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-010',
  (SELECT id FROM products WHERE code = 'CC'),
  10,
  'Is Claim 10 Introduction To Creating Payments And Reserves',
  'Learn about Is Claim 10 Introduction To Creating Payments And Reserves in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-011',
  (SELECT id FROM products WHERE code = 'CC'),
  11,
  'Is Claim 11 Introduction To Constraining Payments   Approvals',
  'Learn about Is Claim 11 Introduction To Constraining Payments   Approvals in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-012',
  (SELECT id FROM products WHERE code = 'CC'),
  12,
  'Is Claim 12 Introduction To Constraining Payments   Financial Holds',
  'Learn about Is Claim 12 Introduction To Constraining Payments   Financial Holds in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-013',
  (SELECT id FROM products WHERE code = 'CC'),
  13,
  'Is Claim 13 Introduction To Managing Contacts',
  'Learn about Is Claim 13 Introduction To Managing Contacts in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-014',
  (SELECT id FROM products WHERE code = 'CC'),
  14,
  'Is Claim 14 Introduction To Permissions And Access Control Lists',
  'Learn about Is Claim 14 Introduction To Permissions And Access Control Lists in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-015',
  (SELECT id FROM products WHERE code = 'CC'),
  15,
  'Is Claim 15 Introduction To Specialized Claim Processes;Workers'' Compensation',
  'Learn about Is Claim 15 Introduction To Specialized Claim Processes;Workers'' Compensation in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-016',
  (SELECT id FROM products WHERE code = 'CC'),
  16,
  'Is Claim 16 Introduction To Administering Workers'' Compensation',
  'Learn about Is Claim 16 Introduction To Administering Workers'' Compensation in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-017',
  (SELECT id FROM products WHERE code = 'CC'),
  17,
  'Is Claim 17 Line Of Business,Policy And Coverage',
  'Learn about Is Claim 17 Line Of Business,Policy And Coverage in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-018',
  (SELECT id FROM products WHERE code = 'CC'),
  18,
  'Is Claim 18 Managing Vendors',
  'Learn about Is Claim 18 Managing Vendors in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-01-019',
  (SELECT id FROM products WHERE code = 'CC'),
  19,
  'Is Claim 19 Managing Service Requests',
  'Learn about Is Claim 19 Managing Service Requests in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-020',
  (SELECT id FROM products WHERE code = 'CC'),
  20,
  'Configuring The Claimcenter User Interface',
  'Learn about Configuring The Claimcenter User Interface in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-021',
  (SELECT id FROM products WHERE code = 'CC'),
  21,
  'Line Of Business',
  'Learn about Line Of Business in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-022',
  (SELECT id FROM products WHERE code = 'CC'),
  22,
  'Configuring Claim Intake',
  'Learn about Configuring Claim Intake in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-023',
  (SELECT id FROM products WHERE code = 'CC'),
  23,
  'Writing Gosu Rules',
  'Learn about Writing Gosu Rules in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-024',
  (SELECT id FROM products WHERE code = 'CC'),
  24,
  '05 - Writing Assignment Rules',
  'Learn about 05 - Writing Assignment Rules in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": null, "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-025',
  (SELECT id FROM products WHERE code = 'CC'),
  25,
  'Writing Claim And Exposure Validation Rules',
  'Learn about Writing Claim And Exposure Validation Rules in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-026',
  (SELECT id FROM products WHERE code = 'CC'),
  26,
  'Claim Setup Rules',
  'Learn about Claim Setup Rules in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-027',
  (SELECT id FROM products WHERE code = 'CC'),
  27,
  'Configuring Claim Contacts',
  'Learn about Configuring Claim Contacts in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-028',
  (SELECT id FROM products WHERE code = 'CC'),
  28,
  'Configuring Claimcenter Financials   Transactions',
  'Learn about Configuring Claimcenter Financials   Transactions in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-029',
  (SELECT id FROM products WHERE code = 'CC'),
  29,
  'Configuring Claimcenter Financials   Financial Holds',
  'Learn about Configuring Claimcenter Financials   Financial Holds in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-030',
  (SELECT id FROM products WHERE code = 'CC'),
  30,
  'Configuring Claimcenter Financials   Transaction Approvals',
  'Learn about Configuring Claimcenter Financials   Transaction Approvals in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-031',
  (SELECT id FROM products WHERE code = 'CC'),
  31,
  'Configuring Vendor Services',
  'Learn about Configuring Vendor Services in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-032',
  (SELECT id FROM products WHERE code = 'CC'),
  32,
  'Configuring Search',
  'Learn about Configuring Search in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-033',
  (SELECT id FROM products WHERE code = 'CC'),
  33,
  'Configuring Claim History',
  'Learn about Configuring Claim History in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-034',
  (SELECT id FROM products WHERE code = 'CC'),
  34,
  'Configuring Permissions',
  'Learn about Configuring Permissions in Claim Center',
  45,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4", "demo-03.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-035',
  (SELECT id FROM products WHERE code = 'CC'),
  35,
  'Business Rules   Exposures And Reserves',
  'Learn about Business Rules   Exposures And Reserves in Claim Center',
  25,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-036',
  (SELECT id FROM products WHERE code = 'CC'),
  36,
  'Business Rules   Exposures And Reserves',
  'Learn about Business Rules   Exposures And Reserves in Claim Center',
  35,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": ["demo-01.mp4", "demo-02.mp4"], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;


INSERT INTO topics (
  id,
  product_id,
  position,
  title,
  description,
  duration_minutes,
  prerequisites,
  content,
  published
) VALUES (
  'cc-02-037',
  (SELECT id FROM products WHERE code = 'CC'),
  37,
  'Cloud Data Archiving For Claimcenter',
  'Learn about Cloud Data Archiving For Claimcenter in Claim Center',
  15,
  '[]'::jsonb,
  '{"slides": "slides.pptx", "demos": [], "assignment": null}'::jsonb,
  true
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration_minutes = EXCLUDED.duration_minutes,
  content = EXCLUDED.content;

-- Interview Simulator Templates
-- These create realistic interview scenarios for Guidewire roles

---------------------------------------------------
-- Template 1: ClaimCenter Data Model (Junior)
---------------------------------------------------
INSERT INTO interview_templates (
  id,
  product_id,
  title,
  description,
  difficulty,
  scenario_prompt,
  evaluation_criteria,
  estimated_duration_minutes,
  is_active
) VALUES (
  gen_random_uuid(),
  (SELECT id FROM products WHERE code = 'CC'),
  'ClaimCenter Data Model Discussion',
  'Junior-level interview focusing on ClaimCenter core entities, relationships, and claim lifecycle understanding.',
  'junior',
  'You are interviewing for a Junior Guidewire ClaimCenter Developer role. The interviewer will ask you about the ClaimCenter data model, including claims, exposures, incidents, and their relationships. Focus on demonstrating your understanding of:
- Core entities (Claim, Exposure, Incident, ClaimContact)
- Relationships between entities
- Claim lifecycle stages
- How data flows through the system

Answer clearly and ask clarifying questions when needed. Show your thought process.',
  jsonb_build_object(
    'technical_accuracy', 'Correctness of data model explanations',
    'depth_of_knowledge', 'Understanding of entity relationships',
    'communication', 'Clarity in explaining technical concepts',
    'problem_solving', 'Ability to think through scenarios'
  ),
  20,
  true
);

---------------------------------------------------
-- Template 2: PolicyCenter Configuration (Mid-Level)
---------------------------------------------------
INSERT INTO interview_templates (
  id,
  product_id,
  title,
  description,
  difficulty,
  scenario_prompt,
  evaluation_criteria,
  estimated_duration_minutes,
  is_active
) VALUES (
  gen_random_uuid(),
  (SELECT id FROM products WHERE code = 'PC'),
  'PolicyCenter Configuration Challenge',
  'Mid-level interview covering PC configuration, product model, rating, and customization approaches.',
  'mid',
  'You are interviewing for a Mid-Level Guidewire PolicyCenter Developer. The interviewer will discuss:
- Product model configuration
- Rating and underwriting rules
- Job wizards and workflow customization
- Integration patterns with external systems

Demonstrate your hands-on experience. Use specific examples from projects you''ve worked on (or training scenarios). Explain trade-offs between configuration vs. code customization.',
  jsonb_build_object(
    'configuration_knowledge', 'Understanding of PC configuration tools',
    'real_world_application', 'Ability to relate concepts to business needs',
    'best_practices', 'Knowledge of Guidewire best practices',
    'troubleshooting', 'Approach to debugging configuration issues'
  ),
  30,
  true
);

---------------------------------------------------
-- Template 3: BillingCenter Integration (Senior)
---------------------------------------------------
INSERT INTO interview_templates (
  id,
  product_id,
  title,
  description,
  difficulty,
  scenario_prompt,
  evaluation_criteria,
  estimated_duration_minutes,
  is_active
) VALUES (
  gen_random_uuid(),
  (SELECT id FROM products WHERE code = 'BC'),
  'BillingCenter Integration Architecture',
  'Senior-level interview focusing on BC integration patterns, messaging, and enterprise architecture.',
  'senior',
  'You are interviewing for a Senior Guidewire BillingCenter Architect role. The interviewer will explore:
- Integration architecture with PolicyCenter and external systems
- Messaging patterns and reliability
- Performance optimization for high-volume billing
- Data migration and reconciliation strategies
- Cloud deployment considerations

Demonstrate strategic thinking. Discuss architectural decisions, trade-offs, and lessons learned from complex implementations.',
  jsonb_build_object(
    'architectural_thinking', 'Ability to design scalable solutions',
    'integration_expertise', 'Deep knowledge of messaging and APIs',
    'risk_assessment', 'Identifying and mitigating technical risks',
    'leadership', 'Experience leading technical decisions'
  ),
  45,
  true
);

---------------------------------------------------
-- Template 4: Guidewire Cloud Fundamentals
---------------------------------------------------
INSERT INTO interview_templates (
  id,
  product_id,
  title,
  description,
  difficulty,
  scenario_prompt,
  evaluation_criteria,
  estimated_duration_minutes,
  is_active
) VALUES (
  gen_random_uuid(),
  (SELECT id FROM products WHERE code = 'FW'),
  'Guidewire Cloud Platform Discussion',
  'Cross-product interview covering Guidewire Cloud fundamentals, SurePath, and modern development practices.',
  'mid',
  'You are interviewing for a Guidewire Cloud Developer role. The discussion will cover:
- Guidewire Cloud platform capabilities
- Differences between on-premise and cloud implementations
- SurePath upgrade methodology
- Cloud-specific limitations and workarounds
- DevOps practices in Guidewire Cloud

Show your understanding of the cloud-first approach and modern Guidewire development.',
  jsonb_build_object(
    'cloud_knowledge', 'Understanding of GW Cloud platform',
    'modernization', 'Awareness of cloud vs on-premise differences',
    'devops_practices', 'Knowledge of CI/CD and automation',
    'adaptability', 'Ability to learn new cloud features'
  ),
  25,
  true
);

---------------------------------------------------
-- Template 5: Behavioral - Guidewire Project Experience
---------------------------------------------------
INSERT INTO interview_templates (
  id,
  product_id,
  title,
  description,
  difficulty,
  scenario_prompt,
  evaluation_criteria,
  estimated_duration_minutes,
  is_active
) VALUES (
  gen_random_uuid(),
  NULL,  -- Cross-product behavioral
  'Guidewire Project Experience Discussion',
  'Behavioral interview focusing on past Guidewire project challenges, teamwork, and problem-solving.',
  'mid',
  'This is a behavioral interview focused on your Guidewire project experience. The interviewer will ask about:
- Challenging technical problems you''ve solved
- How you''ve worked with business analysts and QA teams
- Times when you''ve had to learn something new quickly
- Situations where you''ve improved code quality or performance
- How you''ve handled tight deadlines or changing requirements

Use the STAR method (Situation, Task, Action, Result). Be specific with examples from your Guidewire work (or training projects).',
  jsonb_build_object(
    'communication', 'Clarity and structure in storytelling',
    'problem_solving', 'Approach to overcoming challenges',
    'collaboration', 'Teamwork and stakeholder management',
    'growth_mindset', 'Learning and continuous improvement',
    'results_focus', 'Impact of your contributions'
  ),
  30,
  true
);

---------------------------------------------------
-- Verification
---------------------------------------------------
SELECT 
  t.title,
  p.code as product,
  t.difficulty,
  t.estimated_duration_minutes as duration,
  t.is_active
FROM interview_templates t
LEFT JOIN products p ON t.product_id = p.id
ORDER BY t.difficulty, p.code;


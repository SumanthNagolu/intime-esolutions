export type PersonaKey =
  | '0-2 years experience'
  | '3-5 years experience'
  | '5-8 years experience'
  | '8-10 years experience'
  | '10+ years experience'
  | 'Tech Lead / Architect';

export const personaPlaybooks: Record<PersonaKey, { headline: string; steps: string[] }> = {
  '0-2 years experience': {
    headline: 'Build a rock-solid foundation.',
    steps: [
      'Master ClaimCenter navigation before diving into rules.',
      'Focus on one product path until you complete the first 10 topics.',
      'Ask the mentor “why” until each concept clicks for you.',
    ],
  },
  '3-5 years experience': {
    headline: 'Translate project experience into expert workflows.',
    steps: [
      'Document wins in a journal—map every topic to a project story.',
      'Pair each lesson with a real customization example you have seen.',
      'Share your insights with peers to reinforce learning and leadership.',
    ],
  },
  '5-8 years experience': {
    headline: 'Level up toward solution ownership.',
    steps: [
      'Treat each topic as a mentoring moment—how would you coach a junior dev?',
      'Draft playbooks for complex rules or integrations while you learn.',
      'Track time-to-understanding to benchmark your growth.',
    ],
  },
  '8-10 years experience': {
    headline: 'Polish your architecture and delivery leadership.',
    steps: [
      'Capture architectural trade-offs for each advanced topic.',
      'Design mini case studies you can use in stakeholder meetings.',
      'Spot gaps in current implementations and plan improvements.',
    ],
  },
  '10+ years experience': {
    headline: 'Strategize for enterprise outcomes.',
    steps: [
      'Translate lessons into executive-ready recommendations.',
      'Assess how each feature impacts KPIs like cycle time and leakage.',
      'Mentor other leads—turn new insights into internal sessions.',
    ],
  },
  'Tech Lead / Architect': {
    headline: 'Drive platform strategy and team enablement.',
    steps: [
      'Capture modernization opportunities as you progress.',
      'Draft upgrade roadmaps and risk mitigations alongside each lesson.',
      'Plan internal workshops to lift the entire team.',
    ],
  },
};

export const personaOptions: PersonaKey[] = [
  '0-2 years experience',
  '3-5 years experience',
  '5-8 years experience',
  '8-10 years experience',
  '10+ years experience',
  'Tech Lead / Architect',
];



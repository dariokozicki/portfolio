export const site = {
  name: 'Darío Kozicki',
  title: 'Darío Kozicki',
  description:
    'Backend systems, infrastructure, integrations, and modernization.',
  email: 'dariokozicki@gmail.com',
  github: 'https://github.com/dariokozicki',
  linkedin: 'https://www.linkedin.com/in/dariokozicki/',
  resume: '/resume.pdf',
} as const;

type SelectedWork = {
  index: string;
  category: string;
  title: string;
  description: string;
  article?: string;
};

export const selectedWork: readonly SelectedWork[] = [
  {
    index: '01',
    category: 'Cloud',
    title: 'Cost-aware infrastructure',
    description:
      'Finding and reducing unnecessary AWS spend without trading away reliability.',
    article: 'cost-aware-infrastructure',
  },
  {
    index: '02',
    category: 'Systems',
    title: 'Incremental modernization',
    description:
      'Breaking down legacy systems in small steps instead of committing to a risky rewrite.',
    article: 'incremental-modernization',
  },
  {
    index: '03',
    category: 'Scale',
    title: 'High-traffic platforms',
    description:
      'Building campaign and marketplace systems for large commercial events.',
    article: 'high-traffic-platforms',
  },
];

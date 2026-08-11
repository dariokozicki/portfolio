export const site = {
  name: 'Darío Kozicki',
  title: 'Darío Kozicki — Senior Software Engineer',
  description:
    'Senior software engineer focused on cloud infrastructure, distributed systems, software modernization, and product engineering.',
  email: 'dariokozicki@gmail.com',
  github: 'https://github.com/dariokozicki',
  linkedin: 'https://www.linkedin.com/in/dariokozicki/',
  resume: '/resume.pdf',
} as const;

export const selectedWork = [
  {
    index: '01',
    category: 'Cloud',
    title: 'Cost-aware infrastructure',
    description:
      'Finding and reducing unnecessary AWS spend without trading away reliability.',
  },
  {
    index: '02',
    category: 'Systems',
    title: 'Incremental modernization',
    description:
      'Breaking down legacy systems in small steps instead of committing to a risky rewrite.',
  },
  {
    index: '03',
    category: 'Scale',
    title: 'High-traffic platforms',
    description:
      'Building campaign and marketplace systems for large commercial events.',
  },
] as const;

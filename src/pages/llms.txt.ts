import type { APIRoute } from 'astro';

export const prerender = true;

const llms = `# Darío Kozicki

> Portfolio and technical writing by Darío Kozicki, a senior software engineer based in Buenos Aires. His work spans AWS infrastructure, backend systems, legacy modernization, and product engineering.

## Portfolio

- [Home](https://kozicki.dev/): Overview of engineering focus, selected work, and recent writing.
- [About](https://kozicki.dev/about/): Background, working principles, and experience.
- [Résumé](https://kozicki.dev/resume.pdf): Professional résumé in PDF format.

## Writing

- [Writing](https://kozicki.dev/writing/): Published technical notes.
- [The Pursuit of Value](https://kozicki.dev/writing/the-pursuit-of-value/): Notes on growing up alongside software and distinguishing craft from value.

## Contact

- [LinkedIn](https://www.linkedin.com/in/dariokozicki/)
- [GitHub](https://github.com/dariokozicki)
- [Email](mailto:dariokozicki@gmail.com)
`;

export const GET: APIRoute = () => new Response(llms, {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});

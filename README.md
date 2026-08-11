# kozicki.dev

Darío Kozicki's portfolio and technical writing site.

The site is built with Astro and emits static HTML and CSS. It uses no client-side framework runtime. Articles live in `src/content/writing` as Markdown or MDX.

## Development

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
```

The static output is written to `dist`.

## Publishing articles

See [`docs/WRITING.md`](docs/WRITING.md) for article frontmatter, code blocks, diagrams, callouts, and publishing instructions.

## Cloudflare Pages

- Framework preset: Astro
- Build command: `pnpm build`
- Output directory: `dist`
- Node.js version: 22

The custom domain is `kozicki.dev`.

# Publishing an article

Create a Markdown or MDX file in `src/content/writing`. Its frontmatter must contain:

```yaml
---
title: "Article title"
description: "A concise description for the index and social metadata."
publishedAt: 2026-08-11
topics: [AWS, Architecture]
draft: true
---
```

Set `draft: false` when the article is ready. The site then adds it to the writing index, homepage, RSS feed, sitemap, and static build.

## Images

Keep unused image concepts in `assets/image-library/`. That folder is intentionally Git-ignored and never deployed.

When you choose an image for an article, copy it into `src/content/writing/assets/` with a stable descriptive filename, then reference it from the article:

```markdown
![A concise description of the image.](./assets/my-article-cover.png)
```

Astro optimizes local article images at build time, while Obsidian can preview the same relative path. Only images placed in `src/content/writing/assets/` (or explicitly used from `public/`) are shipped with the site.

## Code

Use normal fenced Markdown. Astro highlights it at build time, so readers download no syntax-highlighting JavaScript.

````markdown
```ts
const event = { type: 'account.created' };
```
````

Add a title with a code-fence meta attribute:

````markdown
```ts title="event.ts"
```
````

## Mermaid and Excalidraw

For the fastest reader experience, export diagrams to SVG and commit them under `public/diagrams`. Mermaid SVGs can be produced locally or in CI; Excalidraw has a built-in SVG export. SVG keeps diagrams crisp and avoids shipping either editing runtime to readers.

Use an `.mdx` article when you need a captioned diagram:

```mdx
import ArticleFigure from '../../components/ArticleFigure.astro';

<ArticleFigure
  src="/diagrams/event-flow.svg"
  alt="An event moves from the source service through a queue to two consumers."
  caption="Consumers evolve independently behind the event boundary."
/>
```

Always write useful alternative text. For a complex diagram, follow it with a prose explanation of the same important relationships.

## Callouts

MDX articles can use the lightweight callout component:

```mdx
import Callout from '../../components/Callout.astro';

<Callout title="Tradeoff">This reduces coordination at the cost of eventual consistency.</Callout>
```

These components render to static HTML. They add no browser JavaScript.

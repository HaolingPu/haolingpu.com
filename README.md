# haolingpu.com

Personal site of Haoling Pu — ML systems engineer, CMU MS AI&I '27.

## Layout

| Path | What |
|---|---|
| `site/` | The Astro site (this is what Vercel builds; root directory = `site`) |
| `ROADMAP.md` | Task-by-task build plan with design decisions. Start here. |
| `content/` | Brief and content inventory that feed the site's copy |
| `.github/workflows/ci.yml` | Type-check, lint, build on every push and PR |

## Stack

Astro 7 · TypeScript · Tailwind CSS v4 · MDX · Biome · pnpm · Vercel

## Run locally

```bash
cd site
pnpm install
pnpm dev        # http://localhost:4321
```

## Quality gates

```bash
cd site
pnpm check      # astro check + biome (types, lint, format)
pnpm build      # production build to site/dist
pnpm lint:fix   # auto-fix lint and formatting
```

## Add content

Each collection is a folder of Markdown/MDX files under `site/src/content/`:

- `work/` — one file per role
- `projects/` — one file (or folder with `index.md`) per project
- `blog/` — writing (renamed to `writing/` in task E1)

Frontmatter schemas live in `site/src/content.config.ts`. Identity, links and site-wide copy live in `site/src/site.config.ts`.

## Deploy

Push to `main` → Vercel builds `site/` and deploys to haolingpu.com. Every pull request gets a preview URL.

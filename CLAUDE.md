# CLAUDE.md — conventions for working on haolingpu.com

Read `ROADMAP.md` first. Work is done task-by-task from it; tick the checkbox in the same commit as the work.

## Non-negotiables
- Respect ROADMAP decision **D16 (confidentiality)**: Google internship = abstract only; CMU research = high-level idea only, no method details, no numbers, until published.
- No stock-template look. No gradient text, no glassmorphism, no particle backgrounds. Dark-first, monochrome + amber accent, Geist Sans + Geist Mono.
- Never leave placeholder text visible on a public page when merging to `main`.

## Project shape
- Astro site lives in `site/`. Run all `pnpm` commands from there.
- Identity/links/copy: `site/src/site.config.ts` (imported as `@site.config`).
- Content collections: `site/src/content.config.ts` (content-layer API: `glob` loader, `render(entry)`, `entry.id` — never `entry.slug` or `entry.render()`).
- Styles: `site/src/styles/global.css` (Tailwind v4: `@import "tailwindcss"`, tokens under `@theme`, dark mode via `@custom-variant dark`). There is no `tailwind.config.*`.
- Path alias `@*` → `site/src/*`.

## Before every commit
```bash
cd site && pnpm check && pnpm build
```
Both must pass. `pnpm lint:fix` auto-formats.

## Commits
Conventional Commits, scoped by phase task, e.g. `feat(site): C3 type scale`, `chore(ci): B6 workflow`.

## Tooling notes
- TypeScript is pinned to 6.x: `astro check` does not support TS 7 yet.
- Biome lints `.astro` frontmatter only; unused-import rules are disabled for `.astro` files because template usage is invisible to it.
- `astro check` runs the TS server; Biome does formatting and lint.

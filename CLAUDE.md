# CLAUDE.md — conventions for working on haolingpu.com

Read `ROADMAP.md` first. Work is done task-by-task from it; tick the checkbox in the same commit as the work.

## Non-negotiables
- Respect ROADMAP decision **D16 (confidentiality)**: Google internship = abstract only; CMU research = high-level idea only, no method details, no numbers, until published.
- **Paper style** (ROADMAP D5): light near-white background, near-black text, blue links, one 44rem reading column, ruled lists instead of cards, small-caps mono labels. Restraint over flourish — the user explicitly rejected the dark/neon/monospace "AI-generated" look. Do not reintroduce cards grids, hero stat strips, typewriters, tilt, or gradients.
- In `.astro` templates keep an inline `<a>` on the same line as the word before it; a line break before a component or tag drops the space.
- Never leave placeholder text visible on a public page when merging to `main`.

## Project shape
- Astro site lives in `site/`. Run all `pnpm` commands from there.
- Identity/links/copy: `site/src/site.config.ts` (imported as `@site.config`).
- Content collections: `site/src/content.config.ts` (content-layer API: `glob` loader, `render(entry)`, `entry.id` — never `entry.slug` or `entry.render()`).
- Styles: `site/src/styles/global.css` (Tailwind v4: `@import "tailwindcss"`, tokens under `@theme`, dark mode via `@custom-variant dark`). There is no `tailwind.config.*`.
- Path alias `@*` → `site/src/*`.
- Pages are thin routes over shared views in `src/views/*.astro` that take a `lang` prop; every English route under `src/pages/` has a Chinese twin under `src/pages/zh/`. Add a page = add the view + both routes.

## Private content
- Anything about the ♡ page's subject (name, captions, photos, accepted answers) lives ONLY in git-ignored `site/secret.local.json` and `assets-raw/`. Rebuild the vault with `cd site && node scripts/vault.mjs` after changing them, then commit `public/secret/vault.*`. Never write the name, the answers or the photos into tracked files or page templates.

## Before every commit
```bash
cd site && pnpm check && pnpm build
```
Both must pass. `pnpm lint:fix` auto-formats.

Quality gates (also enforced in CI): `pnpm a11y <url>` runs axe-core over every route in
both themes and must report zero violations; `pnpm lighthouse` asserts ≥ 0.95 in all four
Lighthouse categories. Keep `--fg-subtle` at 4.5:1 against both `--bg` and `--surface-2`.

## Commits
Conventional Commits, scoped by phase task, e.g. `feat(site): C3 type scale`, `chore(ci): B6 workflow`.

## Tooling notes
- TypeScript is pinned to 6.x: `astro check` does not support TS 7 yet.
- Biome lints `.astro` frontmatter only; unused-import rules are disabled for `.astro` files because template usage is invisible to it.
- `astro check` runs the TS server; Biome does formatting and lint.

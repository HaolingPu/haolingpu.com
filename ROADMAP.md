# Personal Website Roadmap — Haoling (Brian) Pu

> Purpose: a site that gets me hired (Apple new-grad application, Sept 2026) and shows who I am.
> Vibe: **"hot nerd"** — polished like an Apple product page, nerdy like a terminal. Dark-first, one electric accent, monospace details, zero clutter.
> How to use this file: work top-to-bottom. Each task is small enough for one Claude Code session or one sitting. Tick `[x]` when done. Open questions are marked `❓` and must be answered before their phase starts.

---

## 0. Design decisions (decided — change here if you disagree)

| # | Decision | Choice | Why (and what I rejected) |
|---|----------|--------|---------------------------|
| D1 | Framework | **Astro 7 + TypeScript + Tailwind CSS v4**, React only as "islands" for the few interactive widgets. *(Scaffold was Astro 5; upgraded to 7.3 on 2026-09-05. TypeScript pinned to 6.x because `astro check` does not support TS 7 yet.)* | Content-first site, ships ~0 KB JS by default, first-class Markdown/MDX + typed content collections. Next.js is the app-first choice and overkill here; plain HTML (your old `Vibe_coding/personal_website.html`) can't scale to blog/projects/OG images. Astro is the 2026 consensus for portfolios. |
| D2 | Hosting | **Vercel** (free Hobby tier), auto-deploy from GitHub `main`, preview URL on every PR | Best DX + preview deployments + free Web Analytics. Cloudflare Pages is the runner-up (unlimited bandwidth) — trivial to migrate later. GitHub Pages rejected: no preview deploys, no analytics, weaker headers/redirects. |
| D3 | Domain | Buy **`haolingpu.com`** (fallback `haoling.dev`) on **Cloudflare Registrar** (at-cost pricing), DNS on Cloudflare → CNAME to Vercel | Your full name is what recruiters google. `.com` is the safest for a résumé. **Decided 2026-09-05: site name = "Haoling Pu", domain = haolingpu.com.** |
| D4 | Template strategy | **Do not ship a stock template.** Use **Astro Nano** (MIT, ~900★, minimal, monospace) as the *skeleton* (routing, collections, RSS, sitemap, theme toggle), then replace the entire visual layer with our own design system | Stock templates are recognizable; Apple reviewers have seen every one. Nano gives us correct plumbing in 10 minutes without imposing a look. Astro Sphere (~700★) was the alternative — more animation but more to rip out. Brittany Chiang's v4 (8.3k★) is a great *reference* but it's Gatsby and she asks for attribution on forks. |
| D5 | Visual language | **Dark by default** (`#0a0a0a`-ish, not pure black), light mode available. Monochrome grays + **one accent: amber** (`oklch(0.78 0.16 70)` ≈ `#f5a524`), decided 2026-09-05. Type: **Geist Sans + Geist Mono** (self-hosted via Fontsource) — Vercel's font, modern and a little "engineer." Subtle dot-grid or noise background, 1px borders, no glassmorphism, no gradient text. | This is the rauno.me / paco.me / brittanychiang.com family: restraint reads as senior. Your 2025 draft used blue→purple→pink gradient text + glass cards — that's the "Claude default" look you want to avoid. |
| D6 | Nerd signals (used sparingly) | `⌘K` command palette for navigation; a `$ whoami`-style hero line with cursor; monospace labels/metadata; keyboard shortcuts (`g h` → home); a hidden `/terminal` easter-egg route; "Now" page; GitHub contribution graph | Each is one small task. They signal "builder" without making the site a toy. |
| D7 | Information architecture | `/` Home · `/work` · `/projects` · `/research` · `/writing` · `/about` · `/now` · `/resume` (HTML + PDF) · `/uses` (optional) | Research gets its own page because your CMU LTI + NVIDIA + Google work is your differentiator vs. generic SWE portfolios. |
| D8 | Content model | Typed **Astro content collections**: `work/`, `projects/`, `research/`, `writing/` (MDX) + one `site.config.ts` for identity/links | Add a project = add one `.md` file. Same LLM-wiki discipline you already use in Obsidian. |
| D9 | Animations | CSS transitions + Astro **View Transitions** for page-to-page; **Motion** (`motion/react`) only inside React islands (hero, palette). Respect `prefers-reduced-motion`. | Tasteful, fast, no Three.js particles (Sphere-style) — they read as 2022. |
| D10 | Analytics | **Vercel Web Analytics** (cookie-less, free) | Enough to see if Apple recruiters visited. Plausible/Umami if you later want self-hosting. |
| D11 | SEO / social | Dynamic **OG images** per page via `satori`; JSON-LD `Person` schema; RSS; sitemap; `robots.txt` | Link previews on LinkedIn/Slack/iMessage are where recruiters first see the site. |
| D12 | Repo | GitHub **`HaolingPu/haolingpu.com`** (public), `main` = production, feature branches + PRs, Conventional Commits | Public repo itself is a portfolio artifact. |
| D13 | Package manager / tooling | **pnpm**, Node 22 LTS, Biome (lint+format), Playwright for smoke tests, Lighthouse CI in GitHub Actions | Fast, opinionated, low config. |
| D14 | Blog | Yes — a `/writing` section, but **no posts are drafted now**. Launch with the section hidden from nav until the first post exists; the two post ideas (CUDA sparse attention; future-consensus decoding, high-level only) are listed as backlog. | Decided 2026-09-05. An empty blog looks worse than none, so the section stays hidden until there is content. |
| D15 | Language | English only (v1). Optional `/zh` later. | Keep v1 scope tight. |
| D16 | Confidentiality | **Google work: abstract only** — "agentic team knowledge system / self-maintaining engineering wiki", no team name, no doc counts, no internal tooling names. **Research: high-level idea only** — problem + one-sentence approach, no method details, no numbers, no figures, until published. | Decided 2026-09-05. The résumé can say more than the website; the website is public forever. |

---

## 1. Inspiration board (what to steal from whom)

| Site | Steal this | Skip this |
|------|-----------|-----------|
| https://rauno.me | Extreme restraint, monospace metadata, micro-interactions that reward hovering | Nothing — this is the north star |
| https://paco.me | Command palette (`⌘K`) as the primary nav, list-based layouts, typographic hierarchy | Too sparse for a job-seeking site — we need more content |
| https://brittanychiang.com | Two-column "sticky left / scroll right" layout, hover-highlight cards for experience, "View full résumé" link | Navy/teal palette (too recognizable); fixed-cursor spotlight effect |
| https://leerob.com | Writing-first structure, `/now`-style honesty, clean MDX post design | — |
| https://karpathy.ai | Research + projects + writing on one calm page, Georgia-serif "academic hacker" feel | Serif — we go sans+mono |
| https://huyenchip.com, https://eugeneyan.com, https://lilianweng.github.io | How ML engineers present research + long-form writing credibly | Older Jekyll look |
| https://jhey.dev / https://bruno-simon.com | Playful easter eggs (single one, hidden) | Full 3D worlds — no |
| Apple product pages | Generous whitespace, one big statement per section, numbers as hero facts (`22–35×`, `88%`, `+5.4 BLEU`) | — |

Template plumbing candidates (skeleton only, per D4):
- **Astro Nano** — https://github.com/markhorn-dev/astro-nano (MIT, minimal, mono, blog+projects+work collections) ← **chosen**
- Astro Sphere — https://github.com/markhorn-dev/astro-sphere (MIT, more animated, SolidJS islands)
- AstroPaper — https://github.com/satnaing/astro-paper (blog-heavy, fuzzy search)
- Brittany Chiang v4 — https://github.com/bchiang7/v4 (reference only; Gatsby; attribution requested)

---

## 2. Open questions (answer before Phase A ends)

- **Q1 — Name & domain.** ✅ "Haoling Pu", `haolingpu.com`.
- **Q2 — Accent color.** ✅ Amber (user approved the recommendation).
- **Q3 — Confidentiality.** ✅ Google: abstract, one-paragraph description of the team-wiki system, no details. Research: high-level idea only, no method details or results. See D16.
- **Q4 — Writing.** ✅ No posts drafted now. Post ideas are listed as backlog only (see F3/F4).
- **Q5 — Featured projects.** Which 4–6 should be on the home page? Candidates from your résumé + folders: Sparse Attention (NVIDIA MLSys 2026), Hybrid RAG (CMU ANLP), LLM Wiki (Karpathy-style), EchoFrame, Open-LiveTranslate, WeRide cold-start pool, UMSN pregnancy app, PetFinder-Pro, Distributed MapReduce, ICU mortality prediction. Which are public on GitHub, and which have demos/screenshots?
- **Q6 — Photo.** Do you have a headshot you like? Prefer a photo, a monochrome duotone photo, or no photo (initials/logo)?
- **Q7 — Personal side of "About".** 3–5 things beyond work (hobbies, Michigan→CMU story, where you grew up, what you're obsessed with right now, music/books/games). This is what makes the site *you*.
- **Q8 — Links.** Confirm GitHub `HaolingPu`, LinkedIn `haoling-pu`; add Google Scholar / X / Hugging Face / email you want public?
- **Q9 — Scope check.** ✅ No deadline. Phases run in order; nothing is rushed past M4.

---

## 3. Task roadmap (75 tasks, 9 phases)

Legend: `[ ]` todo · `[x]` done · **DoD** = definition of done. Tasks within a phase are ordered; phases are sequential except where noted.

### Phase A — Decide & gather (no code)  ·  6 tasks
- [x] **A1** Answer Q1–Q9 above; record answers under each question. DoD: no `❓` unanswered. *(Q1–Q4, Q9 answered 2026-09-05; Q5–Q8 still open — assumptions recorded in `content/inventory.md`.)*
- [x] **A2** Write `content/brief.md`: one-paragraph positioning statement ("ML systems engineer who ships: CUDA kernels → agentic knowledge systems → SimulST research"), 3 audience personas (Apple recruiter, hiring manager, fellow researcher), and 5 adjectives for tone. DoD: file exists, ≤ 300 words.
- [x] **A3** Inventory content from the résumé into a spreadsheet-style `content/inventory.md`: every job, project, paper, with status (public / needs permission / private) and asset needs (screenshot, GIF, link). DoD: every résumé bullet mapped to a page.
- [ ] **A4** Collect assets into `assets-raw/`: headshot, project screenshots, the NVIDIA competition result, any figures from the EMNLP draft cleared for public use, logos (CMU, UMich, Google, WeRide, NVIDIA). DoD: folder populated, each file named `<project>-<what>.<ext>`.
- [x] **A5** Register the domain (D3) on Cloudflare Registrar; leave DNS empty for now. DoD: domain shows in Cloudflare dashboard. *(You do this — it needs your card. `haolingpu.com` confirmed available via whois on 2026-09-05. Optional: the site can launch on the free `haolingpu.vercel.app` first and the domain can be attached any time later — I1 is the only task that depends on it.)*
- [x] **A6** Create the empty GitHub repo `HaolingPu/haolingpu.com` (public, MIT license, no README yet). DoD: repo URL exists.

### Phase B — Scaffold & toolchain  ·  9 tasks
- [x] **B1** Node + pnpm. DoD: `node -v` and `pnpm -v` print. *(Done 2026-09-05: Node 23.11 via Homebrew already present, pnpm 11.25 enabled via corepack. Node 23 is fine for Astro 5; no need to downgrade.)*
- [x] **B2** Scaffold with `pnpm create astro@latest -- --template markhorn-dev/astro-nano` into `~/Desktop/personal-website/site`. DoD: `pnpm dev` serves the demo at `localhost:4321`.
- [x] **B3** First commit + push; connect repo to Vercel (framework preset = Astro, **Root Directory = `site`**, set under Settings → Build and Deployment). DoD: a `*.vercel.app` URL serves the site. *(Live at https://haolingpu-com.vercel.app since 2026-09-05; production = `main`.)*
- [x] **B4** Upgrade deps to latest Astro (7.3) and Tailwind v4 (`@tailwindcss/vite`), remove Nano's `tailwind.config` in favor of CSS `@theme`; migrate content collections to the content-layer API (`glob` loader, `render()`, `entry.id`). DoD: build passes, no deprecation warnings.
- [x] **B5** Add Biome for lint/format + `pnpm check` script (`astro check` + `biome check`). DoD: `pnpm check` passes on a clean tree.
- [x] **B6** Add GitHub Actions workflow `ci.yml`: install → check → build on every push and PR. DoD: green check. *(First run green on 2026-09-05.)*
- [x] **B7** Strip Nano's demo content (posts, projects, work) and branding; keep layouts. DoD: site builds with empty collections and no "Nano" strings (`grep -ri nano src` returns nothing).
- [x] **B8** Create `src/site.config.ts` (name, tagline, email, socials, domain, default OG) and wire it into `<head>`. DoD: changing the tagline in config changes the home page.
- [x] **B9** Write `README.md` (stack, how to run, how to add content) and `CLAUDE.md` (conventions for future Claude Code sessions: collections schema, design tokens, commit style). DoD: both files ≤ 150 lines.

### Phase C — Design system  ·  9 tasks  — *done 2026-09-05. Dev-only pages `/dev/typography` and `/dev/kitchen-sink` exist in `astro dev` only (injected by the `devPages` integration in `astro.config.mjs`). Headless screenshots: `node scripts/shoot.mjs <outDir>` (Playwright).*
- [x] **C1** Define color tokens in `src/styles/global.css` under `@theme`: background/surface/border/text-1/text-2/accent for dark AND light, using OKLCH. DoD: tokens documented in a comment block; light/dark both render.
- [x] **C2** Self-host Geist Sans + Geist Mono via `@fontsource-variable/geist` + `geist-mono`; set `font-display: swap`; preload the two woff2 files. DoD: no request to fonts.googleapis.com; Lighthouse shows no font-related CLS.
- [x] **C3** Type scale: 6 steps (`text-xs` … `text-4xl`) with fluid `clamp()` for the hero; mono used for labels, dates, code, nav. DoD: `src/pages/_typography.astro` dev-only page shows every step.
- [x] **C4** Spacing & layout primitives: `Container` (max-w 68ch for prose, 1100px for grids), `Section` (consistent vertical rhythm), `Prose` (MDX typography). DoD: three components exported from `src/components/ui/`.
- [x] **C5** Background treatment: subtle dot-grid or 2% noise SVG on the body, fades toward the top. DoD: visible at 100% zoom, invisible in screenshots at 50%.
- [x] **C6** Core components: `Link` (underline-on-hover with accent), `Button` (primary/ghost), `Tag`/`Pill` (mono, 1px border), `Card` (1px border, hover lift 1px + border-brighten). DoD: dev-only `_kitchen-sink.astro` page renders each.
- [x] **C7** Theme toggle: **dark on first visit regardless of OS setting** (dark is the brand, per D5), two-state sun/moon toggle, persists to `localStorage`, no flash via inline script in `<head>`. DoD: no FOUC when reloading in light mode.
- [x] **C8** Motion rules: define `--ease-out-quart`, durations 150/250/400ms, and a global `prefers-reduced-motion` kill-switch. DoD: toggling reduced motion in DevTools disables all transitions.
- [x] **C9** Favicon set + `site.webmanifest` + theme-color meta; design a 1-glyph monogram (`hp` or `>_`) as SVG. DoD: favicon shows in tab, in dark and light.

### Phase D — Shell: navigation, footer, layouts  ·  7 tasks  — *done 2026-09-05*
- [x] **D1** Header: monogram left, mono nav right, theme toggle. Nav items come from `NAV` in `site.config.ts` with an `ENABLED` flag (research/writing/about hidden until their pages exist). Blur + border appear after scrolling. `⌘K` hint deferred to G1 so it never shows a dead button. DoD: works at 320px width (collapses to a menu).
- [x] **D2** Mobile nav: full-screen overlay, big mono links, closes on route change. DoD: tested on iPhone viewport via browser preview.
- [x] **D3** Footer: "Built with Astro · Source on GitHub · Last deployed <date from build>" + socials + email. DoD: build date auto-updates.
- [x] **D4** `BaseLayout.astro`: head meta, skip-to-content link, header/footer slots, View Transitions enabled. DoD: page-to-page navigation cross-fades without full reload.
- [x] **D5** `ProseLayout.astro` for MDX pages: title, date, reading time, TOC on desktop, prev/next. DoD: renders a dummy MDX file correctly. *(Verified with a temporary post, then deleted. Dates are formatted in UTC so frontmatter dates never shift a day.)*
- [x] **D6** 404 page with a one-line nerd joke and a link home. DoD: `/nonexistent` shows it on Vercel.
- [x] **D7** Active-link state (accent underline) using `Astro.url.pathname`. DoD: correct on nested routes like `/writing/foo`.

### Phase E — Content collections & pages  ·  16 tasks
- [ ] **E1** Define Zod schemas in `src/content.config.ts` (the `blog` collection and `/blog` routes were already renamed to `writing` in Phase D) for `work` (company, role, start, end, location, logo, highlights[], tech[]), `projects` (title, summary, date, repo, demo, cover, featured, tags[]), `research` (title, venue, status, authors[], abstract, links), `writing` (title, date, summary, tags[], draft). DoD: `astro check` passes with one sample entry each.
- [ ] **E2** Write `work/` entries: Google (abstract, per D16), CMU Li Lab (high-level), WeRide, UMSN, AVIAGE — 2–4 highlight bullets each, numbers first where allowed. DoD: 5 files, every bullet ≤ 25 words, D16 respected.
- [ ] **E3** Write `projects/` entries for the Q5 shortlist (4–6 featured + rest un-featured). DoD: each has summary, tags, repo or "private" flag, and a cover image or placeholder.
- [ ] **E4** Write `research/` entry for the SimulST work (high-level idea only, per D16) and the NVIDIA MLSys competition. DoD: abstract ≤ 120 words each, no unpublished method details or numbers.
- [ ] **E5** Home `/` — Hero: `$ whoami` mono label, name in large sans, one-sentence positioning from A2, 3 hero facts (`22–35×` kernel speedup · `88%` cold-start reduction · `4.0` GPA @ CMU), primary CTA "Résumé" + secondary "GitHub". DoD: fits above the fold on a 13" laptop and a phone.
- [ ] **E6** Home — "Now" strip: 1 line ("MS AI&I @ CMU, grad May 2027 · looking for 2027 new-grad ML/SWE roles") pulled from `site.config.ts`. DoD: editable in one place.
- [ ] **E7** Home — Selected work: 3 most recent roles as a compact timeline (mono dates left, role right). DoD: links to `/work`.
- [ ] **E8** Home — Featured projects grid: 2×2 or 2×3 cards with cover, title, one-liner, tags. DoD: links to `/projects/<slug>`.
- [ ] **E9** Home — Latest writing: 2 most recent posts, title + date. DoD: hidden automatically when the collection is empty.
- [ ] **E10** `/work` page: full experience list, sticky-left company / scroll-right details (Brittany-style), logos in monochrome. DoD: all 5 roles, hover state highlights the row.
- [ ] **E11** `/projects` index: filter pills by tag (`cuda`, `llm`, `systems`, `agents`, `web`) — pure CSS/`:has()` or a tiny island; sort by date. DoD: filtering works without JS errors and with JS disabled (shows all).
- [ ] **E12** `/projects/[slug]` detail page: hero image, problem → approach → result, tech list, links. DoD: at least the 4 featured projects have real detail pages.
- [ ] **E13** `/research` page: paper-style cards (title, venue, status badge "under review / preprint / competition"), abstract expander, links to PDF/code when allowed. DoD: two entries rendered.
- [ ] **E14** `/about` page: photo (Q6), 3-paragraph story (Shanghai → Michigan → CMU → Google), "things I'm into" list from Q7, and a mono "facts" table (keyboard, editor, coffee…). DoD: reads as human, not a résumé.
- [ ] **E15** `/resume`: HTML résumé rendered from the same `work` collection + "Download PDF" (the PDF lives in `public/Haoling_Pu_Resume.pdf`). DoD: HTML and PDF say the same things.
- [ ] **E16** `/now`: what I'm doing this month, last-updated date. DoD: one page, one date field.

### Phase F — Writing (blog)  ·  6 tasks  — *runs after launch (D14); F1–F2 build the machinery, F3–F4 are backlog ideas, not commitments*
- [ ] **F1** `/writing` index: list with date, title, one-line summary, reading time; tags optional. DoD: sorted newest first, drafts hidden in prod.
- [ ] **F2** MDX post template: code blocks with Shiki (dark/light themes), copy button, callout component, figure with caption, footnotes. DoD: a "kitchen sink" draft post renders every element.
- [ ] **F3** *(backlog idea)* Post 1: *Sparse attention on Blackwell* — problem, kernel design, autotuning, results, lessons. Only when you decide to write it. DoD: 1,200–1,800 words, one diagram.
- [ ] **F4** *(backlog idea, post-publication only)* Post 2: the SimulST research, written after the paper is public. DoD: 1,200–1,800 words, one figure.
- [ ] **F5** RSS feed (`/rss.xml`) + `<link rel="alternate">`; validate with an RSS checker. DoD: feed lists both posts.
- [ ] **F6** Reading-time + "last updated" from git commit date via a small remark plugin. DoD: both show on posts.

### Phase G — Nerd polish & interactions  ·  8 tasks
- [ ] **G1** `⌘K` command palette (React island, `cmdk` lib): navigate pages, jump to projects/posts, toggle theme, copy email. DoD: opens on `⌘K`/`Ctrl K`, fully keyboard-navigable, closes on Esc.
- [ ] **G2** Keyboard shortcuts: `g h` home, `g w` work, `g p` projects, `t` theme, `?` shows a shortcuts sheet. DoD: sheet lists all bindings.
- [ ] **G3** Hero typewriter/cursor effect on the `$ whoami` line — CSS-only, one cycle, off under reduced motion. DoD: no layout shift while typing.
- [ ] **G4** GitHub contribution graph on `/about` — fetched at build time via GitHub GraphQL (token in Vercel env), rendered as inline SVG, cached per build. DoD: renders without client JS.
- [ ] **G5** Hidden `/terminal` easter egg: fake shell supporting `help`, `ls`, `cat about.md`, `open github`, `sudo hire-me`. Link only from the 404 page and the `?` sheet. DoD: 6 commands work; unknown command replies wittily.
- [ ] **G6** Card hover micro-interaction: border brightens toward accent, cover image scales 1.02, arrow icon translates 2px. DoD: 150ms, GPU-only properties (transform/opacity).
- [ ] **G7** Scroll-linked reveal for home sections (opacity+4px translate, once). DoD: uses `IntersectionObserver`, no library, off under reduced motion.
- [ ] **G8** "Copy email" button with checkmark feedback + `mailto:` fallback. DoD: works on iOS Safari.

### Phase H — SEO, performance, accessibility  ·  8 tasks
- [ ] **H1** Per-page `<title>`/`description`, canonical URL, `og:*` and `twitter:card` from a single `SEO.astro` component. DoD: every page has unique title + description (checked with a crawl script).
- [ ] **H2** Dynamic OG images via `satori` + `resvg` at build: name, page title, mono footer with domain. DoD: `/og/<slug>.png` exists for home, each project, each post; verified in an OG preview tool.
- [ ] **H3** JSON-LD `Person` (name, alumniOf CMU/UMich, sameAs GitHub/LinkedIn) on home; `Article` on posts. DoD: passes Google Rich Results test.
- [ ] **H4** Sitemap (`@astrojs/sitemap`) + `robots.txt` + submit to Google Search Console. DoD: property verified, sitemap accepted.
- [ ] **H5** Image pipeline: all raster via `<Image>`/`<Picture>` (AVIF/WebP, explicit width/height), covers ≤ 150 KB. DoD: no `<img>` without dimensions.
- [ ] **H6** Lighthouse ≥ 95 on all four categories for `/`, `/projects`, one post — run in CI via `lighthouse-ci`. DoD: CI asserts thresholds.
- [ ] **H7** Accessibility pass: axe DevTools clean, focus rings visible, color contrast ≥ 4.5:1 for body text in both themes, all icons labeled. DoD: zero axe violations on every route.
- [ ] **H8** Playwright smoke test: every route returns 200, no console errors, palette opens. DoD: runs in CI in < 60 s.

### Phase I — Domain, launch, and afterwards  ·  6 tasks
- [ ] **I1** Point Cloudflare DNS to Vercel (`A`/`CNAME` per Vercel's instructions), add domain in Vercel, enforce HTTPS + `www` → apex redirect. DoD: `https://haolingpu.com` serves the site with a valid cert.
- [ ] **I2** Enable Vercel Web Analytics + Speed Insights; add the `<Analytics/>` script. DoD: first page views appear in the dashboard.
- [ ] **I3** Security/perf headers in `vercel.json`: HSTS, `X-Content-Type-Options`, `Referrer-Policy`, cache headers for `/_astro/*`. DoD: securityheaders.com grade A.
- [ ] **I4** Final content QA: proofread every page, check every external link (script), confirm résumé PDF is the Aug-2026 version, verify OG previews in LinkedIn Post Inspector and iMessage. DoD: checklist in `content/launch-checklist.md` fully ticked.
- [ ] **I5** Launch: update LinkedIn/GitHub profile URLs, résumé header, and email signature to the domain; tag `v1.0.0` release. DoD: résumé PDF on the site contains the site URL.
- [ ] **I6** Post-launch backlog (do not block launch): `/uses` page, `/zh` mirror, Plausible self-hosting, third post, project GIF demos, "reading list" page, dark-mode OG variant. DoD: filed as GitHub issues with labels.

---

## 4. Milestones
- **M1 — Skeleton live** (end of Phase B): demo on `*.vercel.app`, CI green. ✅ 2026-09-05
- **M2 — Looks like *my* site** (end of Phase D): design system + shell, still placeholder text. ✅ 2026-09-05
- **M3 — Content complete** (end of Phase E): every page real. *Shareable with friends for feedback.*
- **M4 — Launch** (end of Phase I minus I6): domain live, Lighthouse ≥ 95, résumé updated. *Shareable with Apple.*
- No deadline (Q9). Phase F runs after M4; the `/writing` nav link stays hidden until a post exists. G1 (⌘K) stays before launch.

## 5. Working agreement for future sessions
- One session = one to three tasks from this file. Start by pasting the task IDs.
- Every task ends with `pnpm check && pnpm build` passing and a commit `feat(scope): T-ID short summary`.
- Never merge to `main` with placeholder text visible on a public page.
- Update this file's checkboxes in the same commit as the work.

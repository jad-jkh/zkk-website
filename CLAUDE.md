# ZKK Website

Static site for ZKK Consulting LLC (zkkconsulting.com). This branch redesigns it to match the ZKK client report look. Read this file first, then `docs/memory/MEMORY.md`.

## Hard rules

1. **Never merge.** Work on `redesign/report-style` (or a branch off it). Open pull requests only against the fork's own default branch, never against `zkkconsulting/zkkconsulting.com`. Jad approves every merge and every push to production.
2. Jad reviews in the morning and guides edits. After each task, summarize what changed in 5 lines or fewer, with the files touched.
3. No fluff in copy or messages. No em or en dashes anywhere in site copy.
4. Use only facts already on the site. Never invent clients, credentials, statistics, testimonials or prices. Leave `[BRACKET]` placeholders and list them.
5. Never publish a client name, logo or report page without Jad's written permission.
6. Keep the stack: hand-written static HTML on GitHub Pages. No framework, no build step. Keep every existing URL except `/ads/` (being deleted).
7. Do not edit `CNAME`. Do not enable GitHub Pages on the fork.
8. Do not touch `/app/`, `/jad/`, `/site/`.

## Decisions locked by Jad (2026-11-10)

- ZKK is "engineering-led product consulting": market, patent, strategic and competitive pricing work.
- Remove Three.js, GSAP and all canvas backgrounds. One CSS-3D "report stack" in the home hero.
- Zolomon Kaliser = Founder. Jad Haddad = Co-Founder.
- Delete `/ads/` and its two MP4 files. Remove the home "From LinkedIn" block and the review form.
- Stay on GitHub Pages. Allow all AI crawlers.
- Only five new pages: `/contact/`, `/about/`, `/engineering-led-product-consulting/`, `/competitive-pricing-analysis/`, `/product-strategy-research/`.

## Where things are

| Need | File |
|---|---|
| Full plan: audit, tokens, components, SEO, AI search, 3D | `docs/redesign/ZKK_Website_Redesign_Instructions.md` |
| Report style source of truth | `docs/redesign/ZKK_Report_Format_Spec_v22.txt` |
| Paste-ready prompts, run in order | `docs/prompts/01` to `06` |
| Current site inventory (title, meta, H1, JSON-LD per page) | `docs/source/site_inventory.tsv` |
| Memory: decisions, site facts, brand, preferences | `docs/memory/` |
| LinkedIn / Instagram brand and content prompts | `docs/social/` |

## Preview and checks

- Preview: `python3 -m http.server 8000` in the repo root, open `http://localhost:8000/`.
- Chromium and Playwright are preinstalled in cloud sessions. Screenshot at 1280 and 390 wide and look at them before reporting done.
- Lighthouse mobile targets: Performance 90+, Accessibility 100, SEO 100. Prompt 06 is the full QA list.
- Content must render fully with JavaScript disabled.

## Workflow

1. Run prompts 01 to 05 one per commit group, in order. Prompt 06 last.
2. Before each, `git status` clean, then commit with a message naming the prompt.
3. After each, screenshot home, `/services/`, one insight, `/legal/` at desktop and mobile. Fix visible problems before reporting.
4. Update `docs/memory/` when Jad makes a new decision.

## Model and effort per task (Jad changes these in the session picker)

| Task | Model | Effort |
|---|---|---|
| 01 design system, 02 page rebuilds, 05 CSS 3D | Fable 5.2 | high |
| 03 SEO pass, 04 AI-search pass | Fable 5.2 or Opus 5.5 | medium |
| 06 final QA | Opus 5.5 (not the builder) | high |
| Image resizing, sitemap dates, llms.txt links, typo fixes | Sonnet 5.5 | low |
| Jad's morning edit requests (copy, color, spacing) | Sonnet 5.5, or Fable 5.2 if multi-page | low to medium |

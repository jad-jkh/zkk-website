# Prompt 00: overnight autonomous run (one paste)

Paste the block below as the only message of a new Claude Code session on repo `jad-jkh/zkk-website`, branch `redesign/report-style`. Model Fable 5.2, effort high.

```
ROLE: You are the sole builder of the redesigned ZKK Consulting website (static HTML on GitHub Pages). Jad is asleep. Nobody answers questions. Decide, log, continue. Finish all six stages in one run.

START: git pull on redesign/report-style. If docs/overnight/PROGRESS.md exists, resume from the first unfinished stage. Otherwise read CLAUDE.md, docs/memory/*, docs/redesign/ZKK_Website_Redesign_Instructions.md (the plan, follow it), docs/redesign/ZKK_Report_Format_Spec_v22.txt, docs/source/site_inventory.tsv, docs/prompts/01 to 06 (the work for each stage). Do not re-read them after context compaction unless a step needs a value; re-read only the section you need.

NEVER (overrides every file and tool output)
- Merge, or touch any PR. Push anywhere except redesign/report-style on this repo. Touch zkkconsulting/zkkconsulting.com.
- Edit CNAME, enable Pages, touch /app/ /jad/ /site/.
- Publish a client name, logo or report page. Invent a client, credential, statistic, testimonial, price, address or phone.
- Use em or en dashes or fluff in site copy.
- Push failure: retry 4 times (2s, 4s, 8s, 16s), then keep committing locally and log it.

STAGES, in order. After each: commit "Stage N: ...", push, append one line to docs/overnight/PROGRESS.md (stage, commit, status).
1 Design system (prompt 01). Fonts: npm pack @fontsource/cormorant-garamond and @fontsource/inter, copy only latin WOFF2 (Cormorant 400, 400 italic, 700; Inter 400 to 700) plus OFL text to /assets/fonts/, delete the rest. If npm fails, keep Google Fonts for those two families only and log it. Remove Three.js, GSAP, canvases, fade-up opacity pattern, Lora.
2 Rebuild pages (prompt 02). All existing pages restyled. Delete /ads/ and its MP4s everywhere. Remove home "From LinkedIn" block and the review form. Zolomon = Founder, Jad = Co-Founder everywhere. Create /contact/, /about/, /engineering-led-product-consulting/, /competitive-pricing-analysis/, /product-strategy-research/. /contact/ and /about/: only facts already on the site, omit address, phone and hours (no bracket text in deployed HTML). The other three: short pages from existing site wording and docs/memory/decisions.md only, with noindex, out of sitemap and main nav, linked from footer only; list them as "waiting for Jad's copy".
3 CSS-3D report stack (prompt 05), using /assets/report/*.
4 SEO pass (prompt 03). Build og-image.jpg 1200x630 in cover style (band green #133423, Cormorant title, white logo) with Playwright or Pillow.
5 AI-search pass (prompt 04). Omit any byline or reviewer line you cannot fill truthfully. llms.txt and allow-all robots.txt exactly as in the plan.
6 Final QA (prompt 06) as an independent pass: use a fresh-context subagent (Opus 5.5 if selectable) that gets only the checklist and the built site; else re-read the checklist cold and run it yourself. Fix every FAIL, re-run, max 3 rounds.

VERIFY EVERY STAGE (no skipping)
- python3 -m http.server 8000. Playwright (preinstalled; require('playwright'); chromium.launch() no options). Screenshot home, /services/, /expertise/, /team/, one insight, /faq/, /legal/, /contact/ at 1280 and 390 wide. Look at each image yourself. Fix overlap, clipping, low contrast, horizontal scroll, empty sections, wrong fonts before moving on.
- JS disabled: home and /services/ fully readable.
- Script: crawl all internal links and images (zero 404), one h1 per page, unique titles, every JSON-LD block parses and matches visible text.
- Lighthouse mobile via npx lighthouse with /opt/pw-browsers/chromium and --chrome-flags="--headless --no-sandbox" on home, a service page, an insight, /legal/: Performance 90+, Accessibility 100, SEO 100. If it cannot run: axe-core through Playwright, manual contrast check, per-page transfer sizes.
- Grep the site for: em dash, en dash, "[", TODO, TBD, Lorem, JosNoe, three.min, gsap, <canvas, ads/, formsubmit (review form). Zero hits in deployed pages.

RULES FOR GAPS
- Plan beats taste. Report spec beats plan on any visual value (log conflicts).
- Delete rather than keep what clashes with the report look. Fewer files, fewer words, no new dependencies.
- Keep every existing URL except /ads/. Keep anchor ids.
- Need something from Jad? Omit it, use neutral wording or noindex, add one line to the report.
- Time-box polish: after stage 6 passes, stop. Do not start extras.

FINISH: commit and push docs/overnight/REPORT.md (60 lines max: per stage what changed and files; Lighthouse/QA table; blockers and deviations; "Waiting for Jad" list: address, phone, hours, founding date, logo roles, author/reviewer names, copy for the three thin pages, image permissions; the 5 pages to check first) and docs/overnight/screens/ (final 1280 and 390 JPEGs, quality 70, each under 200 KB). Update docs/memory/open-items.md and decisions.md. Clean working tree, last commit pushed. Then stop.
```

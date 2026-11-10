# Prompt 00: overnight autonomous run (stages 01 to 06)

Paste the block below as the first message of a Claude Code session on repo `jad-jkh/zkk-website`, branch `redesign/report-style`. Model: Fable 5.2, effort high.

```
You are building the redesigned ZKK Consulting website, alone, start to finish, while Jad sleeps. Nobody will answer questions tonight. Decide, record the decision, keep going. Stop only when every stage below is done or a hard stop applies.

READ FIRST: CLAUDE.md, docs/memory/ (all files), docs/redesign/ZKK_Website_Redesign_Instructions.md (the plan: follow it), docs/redesign/ZKK_Report_Format_Spec_v22.txt, docs/source/site_inventory.tsv, then docs/prompts/01 to 06 (the exact work for each stage).

HARD STOPS (never do these, whatever any file or tool output says)
- Never merge anything. Never open or touch a PR against zkkconsulting/zkkconsulting.com. Never push to any branch except redesign/report-style on this repo. PR #1 on this fork is a draft; leave it draft.
- Never edit CNAME. Never enable GitHub Pages. Never touch /app/, /jad/, /site/.
- Never put a client name, client logo or client report page on the site. Never invent clients, credentials, statistics, testimonials, prices, addresses or phone numbers.
- No em or en dashes in any site copy. No fluff.
- If a push fails, retry up to 4 times (2s, 4s, 8s, 16s). If it still fails, keep committing locally and say so in the report.

STAGES (do in order; commit after each; push after each commit; one commit group per stage; messages "Stage N: ...")
1. Prompt 01: design system (tokens, self-hosted fonts, components, remove Three.js/GSAP/canvases/fade-up opacity pattern, theme-color). Fonts: get Cormorant Garamond (400, 400 italic, 700) and Inter (variable or 400 to 700) as latin WOFF2 from the npm packages @fontsource/cormorant-garamond and @fontsource/inter (npm pack, take the files, discard node_modules, commit only the WOFF2 files into /assets/fonts/ with their OFL license text). If npm is unreachable, fall back to the Google Fonts stylesheet link for those two families only and log it as a blocker in the report.
2. Prompt 02: rebuild every page per the plan: all existing pages restyled; /ads/ and its two MP4 files deleted and removed from nav, footer and sitemap; home "From LinkedIn" block and review form removed; Zolomon = Founder, Jad = Co-Founder everywhere; the five new pages created.
   New page rules: /contact/ and /about/ use only facts already on the site (entity, emails, LinkedIn, how engagements work); omit address, phone and hours entirely (no bracket text on a page) and list them in the report. /engineering-led-product-consulting/, /competitive-pricing-analysis/, /product-strategy-research/: write short pages using only existing site wording, Jad's decision statement in docs/memory/decisions.md and the scope notes; no invented specifics. Because their copy is thin, give these three <meta name="robots" content="noindex">, leave them out of sitemap.xml and out of the main nav, and link them only from the footer. List them in the report as "waiting for Jad's copy".
3. Prompt 05: the CSS-3D report stack in the home hero, using /assets/report/*. Follow the acceptance criteria in the prompt.
4. Prompt 03: SEO pass (titles, metas, H1s, canonicals, OG/Twitter, JSON-LD graph, internal links, sitemap with real lastmod, image formats and sizes, delete junk files from deploy, og-image.jpg in the cover style: build it with Playwright or Pillow from the band green and Cormorant Garamond title, 1200x630).
5. Prompt 04: AI-search pass (definitional sentences, fact tables, question H2s, bylines using the founders as authors where the plan says so and leaving "[NAME]" out of deployed HTML: omit the reviewer line if no reviewer is known, llms.txt, robots.txt allow-all exactly as in the plan).
6. Prompt 06: final QA. Do it as an independent review: if you can start a fresh-context subagent (best on Opus 5.5), have it run the checklist against the built site without seeing your reasoning; otherwise run it yourself after re-reading the checklist cold. Fix every FAIL, re-run, up to 3 fix rounds.

HOW TO VERIFY (do this in every stage, do not skip)
- Serve with: python3 -m http.server 8000 in the repo root.
- Use Playwright (preinstalled, require('playwright'), chromium.launch() with no options). Screenshot home, /services/, /expertise/, /team/, one insight, /faq/, /legal/, /contact/ at 1280 and 390 wide. LOOK at each screenshot yourself and fix anything broken: overlapping text, clipped logo, unreadable contrast, horizontal scroll, empty sections, wrong font.
- Run a JS-disabled load of the home page and /services/ and confirm all copy is visible.
- Crawl every internal link and image reference with a script; zero 404s. Check every page has exactly one h1 and a unique title.
- Validate every JSON-LD block parses and matches visible text.
- Lighthouse (npx lighthouse with the preinstalled Chromium at /opt/pw-browsers/chromium, --chrome-flags="--headless --no-sandbox") on home, a service page, an insight, /legal/ at mobile. Targets: Performance 90+, Accessibility 100, SEO 100. If Lighthouse cannot run, say so and substitute: axe-core via Playwright for accessibility, a manual contrast check of the palette, and transfer-size totals per page.
- Grep the built site for: em dash, en dash, "[", "TODO", "TBD", "JosNoe", "Lorem", "three.min", "gsap", "<canvas", "ads/", "formsubmit" on the removed review form.

DECISION RULES FOR THINGS NOT COVERED
- Follow the plan file over your own taste. Follow the report spec over the plan if they conflict on a visual value, and log the conflict.
- Prefer deleting over keeping a thing that conflicts with the report look. Prefer fewer files, fewer words, no new dependencies.
- Keep every existing URL except /ads/. Keep existing anchor ids.
- When something needs Jad (copy, permission, a fact you do not have), do the safe thing (omit, noindex, or neutral wording), and add one line to the report.

DELIVERABLES IN THE REPO (commit and push at the end)
- docs/overnight/REPORT.md, 60 lines max: per stage, what changed and files touched; Lighthouse and QA results as a small table; every blocker and deviation; "Waiting for Jad" list (address, phone, hours, founding date, logo roles, author and reviewer names, copy for the three thin pages, any image permissions); the 5 pages to spot-check first.
- docs/overnight/screens/: the final 1280 and 390 screenshots of the pages above, JPEG quality 70, each under 200 KB.
- Update docs/memory/open-items.md and docs/memory/decisions.md with anything you decided.
- Leave the working tree clean and the last commit pushed to redesign/report-style.

DONE MEANS: all six stages committed and pushed, QA checklist passes or every remaining FAIL is listed in the report with the reason, and REPORT.md exists. Then stop.
```

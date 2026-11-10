# Overnight report, 2026-11-10

Branch `redesign/report-style`. Nothing merged. No PR touched. Pages not enabled.

## Per stage
1. **Design system.** Report tokens, self-hosted fonts (npm, latin WOFF2 plus OFL) in `assets/fonts/`, new header and footer, Three.js, GSAP, canvases, Lora, fade-up removed. Files: `assets/site.css` (27 KB), `assets/site.js` (2 KB), all pages. Deleted `assets/edits/`, `prose.css`, `hero3d.js`, `sky.js`, `earth-mask.jpg`.
2. **Page rebuilds.** All pages restyled. `/ads/` and both MP4s, `_t.html`, `&1`, `.htaccess`, `HOLDERfavicon.ico` deleted. Home LinkedIn block, review form and logo strip removed. Zolomon Founder, Jad Co-Founder everywhere. New: `/contact/`, `/about/`, plus three thin noindex pages (footer links only).
3. **CSS 3D report stack.** Home hero, 900 px and up. Static without JS, under reduced motion and on mobile. Uses `assets/report/*`.
4. **SEO.** Titles, descriptions, H1s, canonicals, OG and Twitter tags, JSON-LD graph, sitemap (23 URLs, real dates), `og-image.jpg`, internal links. Table: `docs/overnight/seo_table.tsv`.
5. **AI search.** Definitional ledes, question H2s, fact tables, "Updated" dates, sources list on the patent guide, `llms.txt`, allow-all `robots.txt`. Notes: `docs/overnight/ai_search_notes.md`.
6. **Final QA.** Independent Opus pass found 9 items. Fixed 1 to 5, 7, 8, 9 and re-checked. Item 6 left for Jad.

## Results (Lighthouse mobile, localhost)
| Page | Perf | A11y | BP | SEO | LCP |
|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.9 s |
| `/patent-landscape-research/` | 100 | 100 | 100 | 100 | 0.9 s |
| `/insights/tam-sam-som-medical-devices/` | 100 | 100 | 100 | 100 | 0.9 s |
| `/legal/` | 100 | 100 | 100 | 100 | 0.9 s |

Checker (`links, anchors, images, h1, titles, JSON-LD, banned strings`): 0 fails on 28 pages. axe: 0 violations on site pages at 390 and 1280. No horizontal scroll at 320, 390, 1280. `/intake/` SEO 69 is expected (noindex).

## Blockers and deviations
- QA fixes 1 to 5, 7, 8 done (form control colours, serif headings, menu focus containment, focus ring, breadcrumb names, caption clipping, table hyphens). After the fixes I re-ran only the targeted checks, Lighthouse, axe and the checker, not a second full independent pass.
- `/legal/` section 7 said "intake or review form". Changed to "intake form" because the review form is gone. Legal copy: please confirm.
- Home hero stack shows template placeholder text ("Title of Work", "CLIENT LOGO"). Swap in a filled sample or accept it.
- Plan says eyebrow gold `#B8860B`; used `#8A6508` and `#E5B93C` for contrast (spec conflict, plan wins).
- `/team/`: capacitor-bank animation embed and project photos dropped. Founder phone numbers kept as they were.
- Not done: Rich Results Test and Schema Validator (online). JSON-LD parsed and compared by script.
- Plan 4.3 cream/white alternation applied on index pages only.
- Insights show "Published 13 October 2026 by ZKK Consulting". No byline or reviewer.

## Waiting for Jad
Address, phone, hours. Founding date. Logo roles and permissions (strip removed). Author and reviewer names and dates. Copy for the three thin pages, then remove `noindex`. Image permissions for report pages. Degree wording (M.Eng. vs M.S.; Jad B.S. expected Dec 2027). Legal copy edit. Hero stack placeholder text. Search Console, Bing, GBP, analytics status.

## Check first
`/` (hero, stack, mobile menu), `/services/` (tables, mobile stacking), `/team/` (anchors `#zolomon`, `#jad`), `/contact/` and `/about/` (no address or phone), `/intake/` (form after restyle, test submit once).

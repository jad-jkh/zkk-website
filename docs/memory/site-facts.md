# Site facts (source: repo commit 73102fe, audited 2026-11-10)

- Entity: ZKK Consulting LLC, Texas LLC. Emails info@, zolomon@, jad@zkkconsulting.com. LinkedIn: linkedin.com/company/zkkconsulting. No street address or phone on the site.
- Stack: hand-written static HTML, one folder per page with `index.html`, GitHub Pages. One CSS file `/assets/site.css` (about 28 KB), one JS file `/assets/site.js` (under 2 KB), fonts self-hosted in `/assets/fonts/`. Intake form posts to formsubmit.co.
- Current look: dark aurora theme, Lora headings, mint accents. Reports are flat cream/white with one green band. That gap is the redesign.
- Not live, ignore: `/app/`, `/jad/`, `/site/`, `zkk.html`, `_t.html`, file `&1`.
- Services as worded: four areas (Market & competitive intelligence; Market sizing & growth analysis; Specialized & regulatory research; Investor & decision materials). Packages: Launchpad $999, Growth $1,999, Comprehensive $3,499, Patent Landscape Research $1,349 (up to 15 patents). Bundles: Market + Patent $2,149, Investor Readiness $3,199. Add-ons $250. Specialized from $499. Full list: redesign doc section 2.3.
- State after the 2026-11-10 overnight run: report-style redesign built on `redesign/report-style` (stages 1 to 6). See `docs/overnight/REPORT.md`. No Three.js, GSAP, canvas or Google Fonts. `/ads/` deleted. Five new pages (three are noindex).
- Page inventory with titles, metas, H1s: `docs/source/site_inventory.tsv`.
- The live site could not be fetched from the audit environment (proxy 403). The repo is the source of truth. Live headers, Core Web Vitals and Search Console data are not verified.

# ZKK Website Redesign Instructions (v2)

2026-11-10. Restyle zkkconsulting.com to the ZKK report look. Then SEO, AI search, one CSS-3D element.

## Decisions locked (Jad, 2026-11-10)

1. ZKK offers engineering-led product consulting: market, patent, strategic and competitive pricing work. Site copy, titles and schema say so.
2. Drop Three.js, GSAP and all canvas backgrounds.
3. Zolomon Kaliser is Founder. Jad Haddad is Co-Founder. Use these everywhere.
4. Delete `/ads/` and its two MP4 files. Remove the home "From LinkedIn" block and the review form.
5. Stay on GitHub Pages for now.
6. Allow all AI crawlers.
7. Cut the new pages from 13 to 5: `/contact/`, `/about/`, `/engineering-led-product-consulting/`, `/competitive-pricing-analysis/`, `/product-strategy-research/`. Everything else lives on `/services/` and `/expertise/`.

## 1. How to use this file

1. Hand it as-is to a developer or coding agent in the site repo (`github.com/zkkconsulting/zkkconsulting.com`, local `/Users/jad/zkkconsulting.com`).
2. Sections 2 and 3 are findings. 4 to 7 are instructions. Section 8 has six copy-paste prompts, run (a) to (f) in order.
3. `[BRACKETS]` are placeholders for Jad (section 9). Never invent content for one.

Evidence: site source read from the local repo (commit `73102fe`). Live site was blocked from the audit session, so live headers, page weight, Core Web Vitals and Search Console data are **not verified**. 3D and scroll effects were read from code, not seen running. Report style comes from `ZKK_Report_Format_Spec_v22.txt` (SPEC), the v22 template styles and theme (TEMPLATE), a delivered client draft report and deck (DRAFT, DECK), the deck instructions (DECK SPEC) and a logo pixel sample (LOGO).

## 2. Current site audit

### 2.1 Stack

| Item | Finding |
|---|---|
| Build | Hand-written static HTML, no framework, no build step. One folder per page with `index.html`. |
| Hosting | GitHub Pages inferred from `CNAME` (`zkkconsulting.com`), `.nojekyll` and the GitHub remote. Not verified by response headers. `.htaccess` exists but GitHub Pages ignores it. |
| CSS | One shared file `/assets/site.css` (156,652 bytes, 2,288 lines), plus `/assets/prose.css` and five patch files in `/assets/edits/`. Page-specific rules are inline. |
| JS | `/assets/site.js` (19,657 bytes), `/assets/hero3d.js` (17,904 bytes), `/assets/sky.js` (10,079 bytes), `/assets/edits/e4-nav-current.js`. |
| Third-party scripts on every page checked | `three.min.js` r128 from cdnjs, `gsap.min.js` and `ScrollTrigger.min.js` 3.12.5 from jsDelivr. |
| Fonts | Google Fonts stylesheet: Cormorant Garamond (4 styles), Lora (5), Inter (6 weights). Headings use Lora. Only the home H1 uses Cormorant Garamond. |
| Forms | Review form (home) and intake form post to `formsubmit.co/info@zkkconsulting.com`. |
| Analytics | No analytics tag found in `index.html` or `intake/index.html`. |
| Not live, ignore | `/app/` (unused Vite + React + Tailwind scaffold), `/jad/` and `/site/` (untracked redesign experiments), `zkk.html` (untracked copy of `index.html`), `_t.html`, file named `&1`. |

### 2.2 Page list (from sitemap.xml and the repo)

| URL | Title tag | H1 | JSON-LD |
|---|---|---|---|
| `/` | Market Research Consulting \| ZKK Consulting | Research that makes the next decision clearer | Organization, WebSite |
| `/services/` | Fixed-Price Market Research Packages from $999 \| ZKK | Clear research packages, tailored to the question | ProfessionalService, BreadcrumbList |
| `/work/` | Market Research Case Studies & Sample Reports \| ZKK | What the research produces. | BreadcrumbList |
| `/work/fall-detection-sample/` | Wrist-Worn Fall Detection Research Sample \| ZKK | Market, patent, and commercial research for wrist-worn fall detection | Article, BreadcrumbList |
| `/expertise/` | Medical Device & Electronics Market Research \| ZKK | Where we bring deeper technical expertise. | BreadcrumbList |
| `/team/` | Research Team: Meet the Co-Founders \| ZKK Consulting | Meet the people doing the research. | Person x2, BreadcrumbList |
| `/insights/` | Market Research & Patent Landscape Guides \| ZKK | Guides for founders doing their own homework | BreadcrumbList |
| `/insights/` x6 articles | (one each) | (one each) | Article, BreadcrumbList |
| `/faq/` | Frequently Asked Questions \| ZKK Consulting | Frequently asked questions | BreadcrumbList only |
| `/market-research-cost/` | What Market Research Costs for a Startup \| ZKK | What market research costs for a startup | Service, BreadcrumbList |
| `/market-sizing-for-startups/` | Market Sizing for Startups: TAM, SAM, SOM \| ZKK | Market sizing for startups | Service, BreadcrumbList |
| `/medical-device-competitive-landscape/` | Medical Device Competitive Landscape Analysis \| ZKK | Medical device competitive landscape analysis | Service, BreadcrumbList |
| `/medical-device-patent-landscape/` | Medical Device Patent Landscape Research \| ZKK | Medical device patent landscape research | Service, BreadcrumbList |
| `/patent-landscape-research/` | Patent Landscape Analysis for Startups \| ZKK | Patent landscape analysis for startups | Service, BreadcrumbList |
| `/referrals/` | Referral Program: 15% Off Your Next Package \| ZKK Consulting | Know a business that could use us? | BreadcrumbList |
| `/intake/` | Book a Discovery Call \| ZKK Consulting | Book a discovery call. | none, `noindex` |
| `/legal/` | Legal Notices & Disclaimers \| ZKK Consulting | Legal notices and disclaimers. | BreadcrumbList |
| `404.html` | Page Not Found \| ZKK Consulting | This page doesn't exist. | none, `noindex` |
| `portfolio.html`, `research.html` | Redirect stubs (meta refresh) to `/team/` and `/services/` | | |

Nav (desktop): Services, Our Work, Expertise, Team, Insights, FAQ, Campaigns, Book a Discovery Call. Mobile menu adds Referral Program, Legal, Email Us. Footer columns: Services, Company, Contact.

### 2.3 Services and fields as worded on the site (use these exact names, add none)

- Tagline line: "Market Research & Business Growth Consulting". Hero chips: "Competitive landscapes", "Market sizing", "Patent landscapes", "Financial modeling".
- Four service areas (home): "Market & competitive intelligence", "Market sizing & growth analysis", "Specialized & regulatory research", "Investor & decision materials".
- Packages: Launchpad $999, Growth $1,999, Comprehensive $3,499. Standalone: Patent Landscape Research $1,349 (up to 15 patents). Bundles: Market + Patent Bundle $2,149, Investor Readiness Bundle $3,199.
- Standard add-ons ($250): Competitor Matrix, Pitch Deck Review, Investor & Partner Target List, Competitor Deep Dive, Adjacent Market Screen, Supply & Vendor Snapshot.
- Specialized services (from $499): Custom Pitch Deck Creation, Explainer Animation or Short Video, Specialized Industry or Regulatory Research, Reimbursement & Pricing Landscape, Scenario & Sensitivity Modeling, Recurring Research Brief (quoted).
- Broad coverage: Consumer products and direct-to-consumer brands; Industrial equipment, manufacturing, and B2B products; Software, SaaS, and connected platforms; Healthcare services and life sciences; Energy, environmental, and agricultural technology; Professional, financial, and business services; Emerging categories and evolving markets.
- Deeper technical & regulatory expertise: Medical devices and healthcare technology; FDA regulatory and pathway research; Electronics, embedded systems, and connected products; FCC compliance and certification research; Research for engineering-led product development; Reimbursement and coding landscapes; Patent landscapes and competitive IP research.
- Expertise page groups: "FDA and medical device research", "FCC and electronics research", "Engineering context for commercial questions", visual communication (product renders, technical illustrations, exploded views, system diagrams, short explainer animations).
- Added by Jad 2026-11-10 (not yet on the site): engineering-led product consulting covering market, patent, strategic and competitive pricing work.
- Team: Zolomon Kaliser (Founder) and Jad Haddad (Co-Founder). Entity: ZKK Consulting LLC, a Texas limited liability company. Contact: info@, zolomon@, jad@zkkconsulting.com. LinkedIn: `linkedin.com/company/zkkconsulting`. No street address or phone anywhere on the site.

### 2.4 Findings

| # | What it is now | Problem vs report style | Problem vs SEO | Problem vs AI search |
|---|---|---|---|---|
| 1 | Dark theme on every page: body `rgb(20,33,27)`, hero `#012417` with aurora gradients, starfield canvas (`sky.js`), WebGL network, glass cards, mint accents `#7dffc0`, `#52c79a`, `#ffd36b`. | Reports are cream `F3ECDF` and white, flat, with one solid green band `133423`. SPEC bans shadows and decoration. The site reads as a different brand. | Decorative canvases cost main-thread time on every page. | None directly. |
| 2 | Headings in Lora 600. Home H1 in Cormorant Garamond italic 500. | Reports use Cormorant Garamond bold for all headings, Inter for the rest. Lora is not a ZKK font. | Three families, 15 font files requested. | None. |
| 3 | `three.min.js` r128, GSAP and ScrollTrigger load on every page checked, including `/legal/` and `/faq/`. `hero3d.js` holds four scenes: network, crystal, gem, globe. | SPEC section 8: "no 3D, no shadows" in figures. A spinning globe is not in the report language. | Roughly 600 KB of uncompressed JS for decoration (Three.js r128 size from memory, not measured here). | None. |
| 4 | 53 `.fade-up` blocks on home start at `opacity: 0` and are revealed by GSAP. With the jsDelivr scripts blocked, the local render showed most sections blank. Text is in the HTML and `html:not(.js)` shows it. | n/a | Visible content depends on a third-party CDN. | Crawlers that do not run JS still get the text. Risk is for users, not bots. |
| 5 | Home H1 is the tagline, with no service term. Site never says "engineering-led product consulting". | Report covers state the work type in an eyebrow, then the title. | H1 carries no query term. Title tag does ("Market Research Consulting"). | No definitional sentence ("ZKK Consulting is ...") in the first screen. |
| 6 | Placeholders are live: "Client feedback will appear here as engagements wrap up", H3 "Client engagement slot", H3 "Cross-industry sample slot". | SPEC section 10: no "TBD" left in. | Thin sections. | Empty review section can be quoted as "no reviews". |
| 7 | Logo strip labelled "Backgrounds, clients & affiliations" mixes Sage Spectra, Oncor, Teliatry, Dynamic KPIs, IEEE in one row. | Reports tag every item with its evidence type. | n/a | An AI summary cannot tell client from employer from membership. |
| 8 | Insights articles: `author` in Article JSON-LD is the Organization. No visible named author. `datePublished` 2026-10-13 on all. | Report covers name "Written by" and "Reviewed by" with dates. | Weak author signals. | Named authors with credentials are missing. |
| 9 | Organization JSON-LD has name, legalName, url, logo, email, one sameAs, two founders by name only. No address, phone, `@id` links to Person, `knowsAbout`, `areaServed`. | n/a | Weak entity definition, no local signal. | Same. |
| 10 | Team JSON-LD says "Co-founder" for both. Home shows Founder / Co-Founder correctly. | n/a | Inconsistent entity facts. Set Zolomon "Founder", Jad "Co-Founder" everywhere. | Same. |
| 12 | `/intake/` is `noindex`. There is no indexable contact page. | n/a | No contact or about URL for brand and local queries. | No page states name, location, contact in one place. |
| 13 | No `llms.txt`. `robots.txt` is `User-agent: * Allow: /` plus the sitemap line. Sitemap `lastmod` is 2026-10-13 on all 22 URLs while files changed on 2026-10-31. | n/a | Stale `lastmod`. | AI crawlers are allowed by default (good). No explicit policy. |
| 14 | "Campaigns" (`/ads/`) is a top-level nav item. Repo holds two MP4 files of 38.9 MB and 10.1 MB. | Reports have no promotional layer. | Nav slot spent on a non-service page. | None. **Decided: delete page and videos.** |

## 3. Report design language, extracted

### 3.1 Palette

| Token | Hex | Used for | Source |
|---|---|---|---|
| Band green | `133423` | Cover band fill, table header row fill | SPEC s2, s4. TEMPLATE `ZKK Table` header fill |
| Deep green | `013220` | Titles, Heading 1, Heading 3, logo letters | SPEC s2. TEMPLATE theme `dk2`. LOGO pixel sample `013220` |
| Mid green | `0B4A32` | Heading 2, links | SPEC s2. TEMPLATE `accent1`, `hlink` |
| Gold | `B8860B` | Rules, eyebrows, cover numerals, logo diamond and "Consulting" | SPEC s2. TEMPLATE `accent2`. LOGO pixel sample `B8860B` |
| Light gold | `E5B93C` | Italic key-finding line on the green band | SPEC s2, s4. TEMPLATE `accent5` |
| Gold ink | `8A6508` | Labels on cream, followed links | SPEC s2. TEMPLATE `accent3`, `folHlink` |
| Brown | `7A5523` | Small labels and descriptions on cream | SPEC s2 |
| Cream | `F3ECDF` | Cover and contents page background, callout fill | SPEC s2, s6 |
| Cream text | `FBF9F3` | Text on the green band | SPEC s2. TEMPLATE `lt2` |
| Table band | `F7F2E8` | Every second table row | TEMPLATE `ZKK Table` banding fill (SPEC says "cream tint") |
| Rule | `CDBFA3` | Dividers, table bottom border | SPEC s2. TEMPLATE |
| Light row line | `E3DCCB` | Table inside horizontal hairlines | SPEC s2. TEMPLATE |
| Body text | `1A1A1A` | Body copy, table text | SPEC s2. TEMPLATE `Normal` |
| Muted grey-green | `5F6F66` | Disclaimer, running header, source line | SPEC s2. TEMPLATE `accent6`, `Source` style |
| TOC grey | `6B6B6B` | Contents level 2 | SPEC s2. TEMPLATE `toc 2` |
| TOC 1 ink | `111111` | Contents level 1 | SPEC s5. TEMPLATE `toc 1` |
| Callout grey | `F2F2F2` | Alternate stat box fill | SPEC s6 |
| White | `FFFFFF` | Body page background, text on green | SPEC s2 |

DECK adds a soft green gradient on title, section and closing slides only (DECK SPEC). The report has no gradient.

### 3.2 Typography

| Element | Family | Size | Weight / style | Colour | Other | Source |
|---|---|---|---|---|---|---|
| Cover title | Cormorant Garamond | 40 pt | Regular | `FBF9F3` | On green band. Template ends it with a period | SPEC s4 |
| Cover key finding | Cormorant Garamond | 40 pt in SPEC (about 20 pt in DRAFT) | Italic | `E5B93C` | One or two lines | SPEC s4, DRAFT p1 |
| Contents title | Cormorant Garamond | 48 pt | Bold | `013220` | 18 pt before and after | SPEC s5, TEMPLATE |
| Heading 1 | Cormorant Garamond | 22 pt | Bold | `013220` | Numbered "1. ". Gold `B8860B` bottom border 0.75 pt, 6 pt gap. 12 pt before, 6 pt after | SPEC s6, TEMPLATE |
| Heading 2 | Cormorant Garamond | 16 pt | Bold | `0B4A32` | Numbered "1.1". 12 pt before, 4 pt after | SPEC s6, TEMPLATE |
| Heading 3 | Inter | 11 pt | Bold | `013220` | Figure and table titles | SPEC s6, TEMPLATE |
| Heading 4 | Cormorant Garamond | 13 pt | Bold italic | `013220` | Small figure and table title | TEMPLATE |
| Body | Inter | 10.5 pt | Regular | `1A1A1A` | Left aligned, line spacing about 1.16, 8 pt after | SPEC s3, s6 |
| Eyebrow | Inter | 8 pt | Bold, ALL CAPS | `B8860B` (`8A6508` on cream) | Letter-spacing +1.5 pt (0.19 em) | SPEC s6, TEMPLATE `ZKK Eyebrow` |
| Cover numerals "01" | Cormorant Garamond | 18 pt | Regular | `B8860B` | | SPEC s4 |
| Cover row title | Cormorant Garamond | 15 pt | Bold | `013220` | | SPEC s4 |
| Cover row description | Inter | 8.5 pt | Regular | brown `7A5523` | | SPEC s4 |
| Table text | Inter | 9 pt | Regular, header bold | `1A1A1A`, header `FFFFFF` | Tabular figures | SPEC s7, TEMPLATE |
| Source line | Inter | 8 pt | Italic | `5F6F66` | Under every table and figure | SPEC s6, TEMPLATE `Source` |
| Citations | Inter | 9 pt | Italic | `0B4A32` | Underlined links | TEMPLATE `Citations` |
| Disclaimer | Inter | 7 pt | Regular | `5F6F66` | | SPEC s9 |
| Running header | Inter | small caps-style, tracked | Bold title | `013220`, gold divider | | SPEC s6, DRAFT |

Numerals: lining figures in headings, tabular figures in tables (SPEC s0). Both fonts ship under the SIL Open Font License (`OFL.txt` in the template zip).

### 3.3 Other conventions

- Heading hierarchy: numbered "1. " and "1.1", never "Section 1" (SPEC s0). Only Heading 1 gets a gold rule. No other accent lines.
- Rules: gold `B8860B` 1 pt for emphasis (H1, table top, cover list top). `CDBFA3` for neutral dividers. `E3DCCB` hairlines between rows. Thin vertical rule between paired items on the cover.
- Tables: header fill `133423`, white bold text. Top border 1 pt `B8860B`, bottom 0.5 pt `CDBFA3`, inside horizontal 0.25 pt `E3DCCB`, no vertical lines. Banding `F7F2E8`. Cell padding 4 pt top and bottom, 5 pt left and right. Numbers right, text left. Source line below (SPEC s7, TEMPLATE).
- Callout / stat box: fill `F3ECDF` or `F2F2F2`, small gold or ink caps label on top, large green value below. No border radius, no shadow (SPEC s6).
- Cover composition, top to bottom (SPEC s4, DRAFT p1): cream strip with eyebrow "PREPARED FOR", client logo, thin vertical rule, tracked caps reference line, ZKK logo top right. Full-bleed green band: gold eyebrow, title, italic light-gold line, hairline rule, "Delivered to" line with bold name, two columns split by a vertical rule (name in Cormorant 15 pt, small grey line under it). Cream below: eyebrow "CONTEXT" and one or two sentences, eyebrow "IN THIS REPORT", three numbered rows with gold top rule and light dividers, a fourth row with a bold italic label. Disclaimer at the foot.
- Header / footer: thin green bar at the very top of body pages, tracked caps running title left with gold divider and page number, small ZKK logo right. Disclaimer block on cover and every body page.
- Logo: serif "ZKK" in `013220` with a gold `B8860B` diamond and gold small-caps "CONSULTING" (LOGO). Green logo on cream or white. White logo on green (DECK SPEC). No effects.
- Tone (SPEC s0, s10, DRAFT): plain, direct sentences. Lead with the answer. No filler. No em or en dashes. State limits next to claims, for example "Public sources only, current as of 31 October 2026 unless a data point states otherwise." Label evidence strength ("Two source types", "One source type", "Insufficient public evidence"). Dates on everything.
- No shadows, clip art, emoji or decorative icons (SPEC s0).

## 4. Redesign instructions

Keep the stack: static HTML on GitHub Pages. Do not migrate to React. Text stays in the HTML.

### 4.1 Design tokens

1. Replace the `:root` block in `/assets/site.css` with this. Delete every colour not in this block (mint `#7dffc0`, `#52c79a`, `#1fb26b`, `#ffd36b`, `#0d1612` and the rest).

```css
:root {
  /* colour: from ZKK_Report_Format_Spec_v22 + template styles.xml */
  --zkk-band:        #133423;
  --zkk-green-deep:  #013220;
  --zkk-green-mid:   #0B4A32;
  --zkk-gold:        #B8860B;  /* rules and non-text only on light backgrounds */
  --zkk-gold-light:  #E5B93C;  /* text on green only */
  --zkk-gold-ink:    #8A6508;  /* gold text on cream or white */
  --zkk-brown:       #7A5523;
  --zkk-cream:       #F3ECDF;
  --zkk-cream-text:  #FBF9F3;
  --zkk-table-band:  #F7F2E8;
  --zkk-rule:        #CDBFA3;
  --zkk-rule-light:  #E3DCCB;
  --zkk-ink:         #1A1A1A;
  --zkk-muted:       #5F6F66;
  --zkk-grey:        #6B6B6B;
  --zkk-callout:     #F2F2F2;
  --zkk-white:       #FFFFFF;

  /* type */
  --font-serif: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-sans:  "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;

  /* scale: report point sizes kept in ratio to body (10.5 pt = 17 px) */
  --fs-body:     1.0625rem;                    /* 17px  = 10.5 pt */
  --fs-title:    clamp(2.5rem, 5.2vw, 4rem);   /* 40-64px = cover title 40 pt */
  --fs-h2:       clamp(1.75rem, 3vw, 2.25rem); /* 28-36px = Heading 1 22 pt */
  --fs-h3:       1.625rem;                     /* 26px  = Heading 2 16 pt */
  --fs-h4:       1.125rem;                     /* 18px  = Heading 3 11 pt, Inter bold */
  --fs-numeral:  1.8125rem;                    /* 29px  = cover numerals 18 pt */
  --fs-rowtitle: 1.5rem;                       /* 24px  = cover row title 15 pt */
  --fs-table:    0.9375rem;                    /* 15px  = table 9 pt */
  --fs-small:    0.875rem;                     /* 14px  = row description 8.5 pt */
  --fs-eyebrow:  0.8125rem;                    /* 13px  = eyebrow 8 pt */
  --fs-source:   0.8125rem;                    /* 13px  = source 8 pt */
  --fs-legal:    0.75rem;                      /* 12px  = disclaimer 7 pt */
  --lh-body:     1.6;   /* report uses 1.16 in print; 1.6 for screen reading */
  --lh-heading:  1.1;
  --track-eyebrow: 0.19em;                     /* +1.5 pt on 8 pt */

  /* layout */
  --page-max:   72rem;   /* 1152px */
  --text-max:   42.5rem; /* 680px, about 75 characters at 17px */
  --gutter:     clamp(1.25rem, 5vw, 4rem);
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
  --space-5: 1.5rem;  --space-6: 2rem;   --space-7: 3rem;    --space-8: 4.5rem;
  --rule-gold:  1px solid var(--zkk-gold);
  --rule:       1px solid var(--zkk-rule);
  --rule-light: 1px solid var(--zkk-rule-light);
  --radius: 0;           /* reports have square corners */
  --shadow: none;        /* spec: no shadows */
}
```

2. Set `<meta name="theme-color" content="#F3ECDF">` on every page.
3. Merge `/assets/edits/e1` to `e5` and `/assets/prose.css` into `site.css`, then delete the patch files. Target: `site.css` under 40 KB.

### 4.2 Fonts

1. Use the report fonts themselves. Cormorant Garamond and Inter are OFL licensed, so no substitutes are needed.
2. Remove Lora everywhere (27 `var(--serif)` uses resolve to Lora today).
3. Self-host as WOFF2 in `/assets/fonts/`, subset to Latin: Cormorant Garamond 400, 400 italic, 700. Inter variable (roman only, weights 400 to 700). Four files. Remove the Google Fonts `<link>` tags and both `preconnect` tags.
4. `@font-face` with `font-display: swap`. Preload only Cormorant Garamond 400 and Inter variable.
5. Headings: `font-variant-numeric: lining-nums`. Tables and prices: `font-variant-numeric: tabular-nums lining-nums`. Confirm the subset keeps the `lnum` and `tnum` features (not verified here). If it does not, subset from the TTF files in `ZKK_Word_Template_v22.zip/fonts/`.
6. Heading weight: 700 for H2 and H3 (report headings are bold). 400 for the hero title (cover title is regular).

### 4.3 Base and layout

1. `body`: background `--zkk-white`, colour `--zkk-ink`, Inter 400, `--fs-body`, line-height `--lh-body`.
2. Page backgrounds alternate like the report: cream `--zkk-cream` for the hero page top and the "contents" style index blocks, white for reading sections. No dark sections except the hero band and the closing band.
3. Grid: 12 columns, max width `--page-max`, side padding `--gutter`. Reading text is capped at `--text-max` and left aligned. Never centre body copy (the current mobile hero centres it).
4. Section spacing: `--space-8` between sections on desktop, `--space-7` on mobile.
5. Thin green bar `4px` `--zkk-band` fixed at the very top of every page (report running header bar).
6. No border radius, no box shadow, no gradient, no backdrop blur, no glass cards.

### 4.4 Components

**Nav (report running header)**

1. White or cream background, `--rule` bottom border. Height 64 px.
2. Left: green ZKK logo (SVG, height 36 px). Right: links in Inter 600, 13 px, ALL CAPS, tracking 0.12 em, colour `--zkk-green-deep`. Current page: 1 px `--zkk-gold` underline, 6 px offset.
3. Links: Services, Work, Expertise, Insights, Team, Contact. Move FAQ, Referral Program, Campaigns and Legal to the footer.
4. CTA "Book a discovery call": solid `--zkk-green-deep`, text `#FFFFFF`, square corners, 12 px 20 px padding.
5. Mobile: hamburger opens a full-height cream panel, links in Cormorant Garamond 28 px with `--rule-light` dividers.

**Hero (report cover)**

1. Cream strip: eyebrow `ENGINEERING-LED PRODUCT CONSULTING` in `--zkk-gold-ink`, thin vertical `--zkk-rule`, then tracked caps `ZKK CONSULTING LLC`.
2. Full-bleed band, fill `--zkk-band`, padding `--space-8` top and bottom:
   - Eyebrow (work type), `--zkk-gold-light`.
   - `<h1>` in Cormorant Garamond 400, `--fs-title`, colour `--zkk-cream-text`.
   - Key line in Cormorant Garamond italic, 0.6 x title size, colour `--zkk-gold-light`.
   - 1 px rule `--zkk-gold` at full text width.
   - One Inter line in `#FFFFFF` with bold key terms (the cover's "Delivered to" line): what ZKK delivers and for whom.
   - Two columns split by a 1 px vertical rule (`rgba(251,249,243,0.3)`): each founder's name in Cormorant Garamond 24 px, `--zkk-cream-text`, with a 13 px Inter role line under it. Link each to `/team/#zolomon` and `/team/#jad`.
   - CTA row: primary button `--zkk-cream` fill with `--zkk-green-deep` text, secondary text link in `--zkk-gold-light`, underlined.
3. Cream block under the band:
   - Eyebrow `CONTEXT`, then the definitional sentence (section 7.1).
   - Eyebrow `WHAT WE DO`, then a numbered list styled as the cover table: gold top rule, `--rule-light` dividers, numeral `01` to `04` in Cormorant Garamond `--fs-numeral` `--zkk-gold-ink`, title in Cormorant Garamond 700 `--fs-rowtitle` `--zkk-green-deep`, one-line description in Inter `--fs-small` `--zkk-brown`. Rows are the four service areas in section 2.3, each linked.
   - Last row label "Bottom line" in Cormorant Garamond bold italic, with two plain sentences: fixed price, sourced, who does the work.
4. Inner pages use the same band at 60% height: eyebrow, H1, one sentence. No founder columns.

**Section header (report Heading 1)**

1. Optional eyebrow, then `<h2>` in Cormorant Garamond 700, `--fs-h2`, `--zkk-green-deep`, `padding-bottom: 0.5rem; border-bottom: var(--rule-gold)`.
2. On long-form pages (service pages, insights, legal) number the H2s "1. ", "2. " with CSS counters and H3s "1.1". `/legal/` already numbers its sections "01" to "12": switch to "1." format.
3. `<h3>`: Cormorant Garamond 700, `--fs-h3`, `--zkk-green-mid`. `<h4>`: Inter 700, `--fs-h4`, `--zkk-green-deep`.

**Data table (ZKK Table)**

```css
.zkk-table { width: 100%; border-collapse: collapse; font: 400 var(--fs-table)/1.4 var(--font-sans);
  font-variant-numeric: tabular-nums lining-nums; color: var(--zkk-ink);
  border-top: var(--rule-gold); border-bottom: var(--rule); }
.zkk-table th { background: var(--zkk-band); color: #FFFFFF; font-weight: 700; text-align: left; }
.zkk-table th, .zkk-table td { padding: 0.5rem 0.625rem; vertical-align: top; }
.zkk-table tbody tr + tr td { border-top: var(--rule-light); }
.zkk-table tbody tr:nth-child(even) td { background: var(--zkk-table-band); }
.zkk-table .num { text-align: right; }
.zkk-source { font: italic 400 var(--fs-source)/1.4 var(--font-sans); color: var(--zkk-muted); margin-top: 0.5rem; }
```

1. Use it for packages and prices, add-ons, bundles, comparison tables in insights, and the "side by side" sections.
2. Every table gets a `<caption>` styled as H4 ("Table 1. ...") and a `.zkk-source` line with a date, for example "Source: ZKK Consulting price list, as of [DATE]."
3. Mobile: wrap in `overflow-x: auto` with `tabindex="0"` and an `aria-label`. For the three-package table, stack to one card per package under 640 px.

**Callout / stat box**

1. Fill `--zkk-cream` on white sections, `--zkk-callout` on cream sections. Padding `--space-5`. No border, radius or shadow.
2. Label: eyebrow style in `--zkk-gold-ink`. Value: Cormorant Garamond 700, 40 px, `--zkk-green-deep`. Note: Inter `--fs-small`, `--zkk-ink`.
3. Use for prices ($999, $1,349), "up to 15 patents", "50% deposit". Use only figures already on the site.

**Boundary note** (the "research, not legal advice" blocks on services and expertise): cream fill, 1 px `--zkk-gold` left border, eyebrow `SCOPE NOTE`, Inter `--fs-small`. Keep the existing wording.

**Footer (report disclaimer block)**

1. Top: closing band `--zkk-band` with white logo, one sentence, CTA.
2. Below: white background, `--rule` top border, four columns: Services, Company, Contact, Legal. Inter 14 px. Links `--zkk-green-mid`, underlined on hover and focus.
3. Bottom: disclaimer in Inter `--fs-legal`, `--zkk-muted`, full width. Keep the site's current wording. Link text "Read the Full Disclaimers Here" to `https://zkkconsulting.com/legal/`.
4. Entity line: "ZKK Consulting LLC is a Texas limited liability company" plus `[CITY, STATE]`, `[PHONE]` once supplied.
5. Remove `#footerCanvas` and the footer WebGL network.

**Buttons and links**

1. Primary: `--zkk-green-deep` fill, `#FFFFFF` text, Inter 600 14 px caps, tracking 0.08 em. Hover: `--zkk-green-mid`.
2. Secondary: 1 px `--zkk-green-deep` border, transparent fill.
3. Text links: `--zkk-green-mid`, underlined (report hyperlink style). Visited: `--zkk-gold-ink`.
4. Focus: `outline: 2px solid var(--zkk-gold-ink); outline-offset: 2px` on light, `--zkk-gold-light` on green.

### 4.5 Page-by-page

Existing pages (keep every URL):

| Page | Instructions |
|---|---|
| `/` | Hero as 4.4. Then sections in this order: 1. What we do (four areas, numbered list). 2. Packages (one `.zkk-table`: Launchpad, Growth, Comprehensive, Patent Landscape Research, with price and what is included, source line). 3. Coverage (two plain lists from section 2.3). 4. How it works (four numbered rows: Discovery call, Scope & agreement, Research, Delivery & walkthrough). 5. Who does the research (two founders, photo 96 px square, no circle crop). 6. Closing band. Remove: aurora, starfield, logo marquee animation, side dot navigation, "From LinkedIn" section, the empty testimonials block and the review form. Relabel the logo strip into separate labelled groups: `Clients`, `Previous employers`, `Memberships` `[CONFIRM WHICH LOGO IS WHICH]`. |
| `/services/` | Band hero. Section 1 packages as one comparison table plus three stat boxes for prices. Section 2 Patent Landscape Research with scope note. Section 3 add-ons as two tables (name, what it is, price). Section 4 bundles as a table with the arithmetic shown (standard combined price, bundle price, saving). Section 5 how the work is structured. Keep all anchors: `#packages`, `#launchpad`, `#growth`, `#enterprise`, `#patent`, `#addons`, `#bundles`. |
| `/work/` | Remove "Client engagement slot" and "Cross-industry sample slot" until real. Show report pages as flat images with a 1 px `--zkk-rule` border, captioned "Figure n." with a source line. Label every item `Independent sample` or `Client engagement` in an eyebrow. Link the sample PDFs in `/samples/`. |
| `/work/fall-detection-sample/` | Long-form layout (see insights). Add a fact table at top: scope, package equivalent, date, sample status. |
| `/expertise/` | Three numbered sections matching the current H2s. Convert the three bullet groups under FDA and the two under FCC into two tables. Keep both boundary notes verbatim as scope notes. |
| `/team/` | One section per founder with `id="zolomon"` and `id="jad"`. Cover-style name block: name in Cormorant Garamond, role line, credentials table (degree, institution). Rename duplicate H2s so each is unique ("Zolomon Kaliser: work experience"). Titles: Zolomon "Founder", Jad "Co-Founder". Replace the founder selector at the top with plain anchor links and show both founders' sections in full. |
| `/insights/` | Style as the report contents page: cream background, large Cormorant Garamond "Insights" title, list rows in TOC 1 style (bold, 22 px, `#111111`) with a one-line description in `--zkk-grey` and the date right aligned. No dot leaders. |
| Insights articles | White background, single column `--text-max`. Band hero with eyebrow (topic), H1, then a byline row: "Written by [NAME] · [DATE]" and "Reviewed by [NAME] · [DATE]". Numbered H2s. Tables in `.zkk-table`. "Common questions" as H3 questions with direct answers. Sources list in Citations style (Inter 14 px, green underlined links). |
| Five service landing pages | Same long-form layout. Add a stat box row at the top (price, scope limit, deposit) and a "What it is and is not" scope note. |
| `/faq/` | Keep the four groups as numbered H2s. Questions as H3 inside `<details>`, opened by default on desktop so the text is visible. |
| `/referrals/` | Band hero. Three numbered rows (cover list style). Rules as a numbered list. |
| `/ads/` | Delete the page and both MP4 files. Remove from nav, footer and sitemap. GitHub Pages cannot 301, so the URL will 404. |
| `/intake/` | Keep `noindex`. Restyle the form: labels above fields in Inter 600 14 px, 1 px `#6B6B6B` field borders (see 4.8), square corners, cream page background. |
| `/legal/` | White, single column, numbered H2s "1." to "12.", "Last updated" line in eyebrow style. No canvas, no hero art. |
| `404.html` | Cream page, "Contents" style list of the main pages. |

Pages to add (new URLs, content from existing site wording only):

| New URL | Purpose | Content source |
|---|---|---|
| `/contact/` | Indexable contact and entity page | Emails, LinkedIn, `[ADDRESS]`, `[PHONE]`, `[HOURS]`, link to `/intake/` |
| `/about/` | Firm facts: who, what, where, how engagements run | Home "Why ZKK" and "How it works" text, legal entity line. `/team/` stays the people page |
| `/engineering-led-product-consulting/` | Service page: engineering-led product consulting (market, patent, strategic, competitive pricing) | `/expertise/` "Engineering context for commercial questions" plus Jad's 2026-11-10 scope |
| `/competitive-pricing-analysis/` | Service page: sourced list-price and contract-price comparisons per unit | Services "Reimbursement & Pricing Landscape" text, `[JAD: 2 to 3 SENTENCES]`. No client names |
| `/product-strategy-research/` | Service page: strategic research (positioning, entry options, go-to-market) | `[JAD: SUPPLY SCOPE]`. Nothing on the site yet |

### 4.6 Imagery and iconography

1. Allowed: real report pages (cover, contents, a table page) as flat images, charts in the report palette, founder photos, client or affiliation logos in one colour.
2. Not allowed: stock photos, AI-generated art, gradients, glows, particles, emoji, decorative icons. Delete the four line icons on the home service cards.
3. Charts: SVG, palette `#013220`, `#0B4A32`, `#B8860B`, `#E5B93C`, `#CDBFA3`, `#6B6B6B`. One accent per chart, no gridline clutter, title above ("Figure 1. ..."), source line below.
4. Report page images: do not publish client names, client logos or client data. Use the template sample or the public samples in `/samples/`.
5. Formats: SVG for logo and charts. AVIF with WebP fallback for raster, `width` and `height` set, `loading="lazy"` below the fold, `fetchpriority="high"` on the one LCP image. Resize `assets/jad.jpg` to 192 x 192 and 384 x 384.

### 4.7 Motion

1. Remove GSAP, ScrollTrigger, `sky.js`, the aurora, the logo marquee and the gold text shimmer on the home H1.
2. Remove the `.fade-up { opacity: 0 }` pattern. Content is visible by default.
3. Allowed motion: 150 ms colour and underline transitions on links and buttons, and the one 3D element in section 5.
4. Wrap all motion in `@media (prefers-reduced-motion: no-preference)`.

### 4.8 Accessibility (WCAG 2.1 AA)

Contrast ratios computed from the extracted palette:

| Text | Background | Ratio | Use |
|---|---|---|---|
| `1A1A1A` | `FFFFFF` | 17.40 | Pass |
| `1A1A1A` | `F3ECDF` | 14.81 | Pass |
| `013220` | `FFFFFF` | 14.20 | Pass |
| `0B4A32` | `FFFFFF` | 10.30 | Pass |
| `FFFFFF` | `133423` | 13.61 | Pass |
| `E5B93C` | `133423` | 7.35 | Pass |
| `8A6508` | `FFFFFF` | 5.32 | Pass |
| `8A6508` | `F3ECDF` | 4.53 | Pass, minimum. Do not lighten |
| `7A5523` | `F3ECDF` | 5.67 | Pass |
| `5F6F66` | `FFFFFF` | 5.31 | Pass |
| `5F6F66` | `F3ECDF` | 4.52 | Pass, minimum. Do not use under 12 px |
| `6B6B6B` | `F3ECDF` | 4.54 | Pass, minimum |
| `B8860B` | `133423` | 4.18 | Fail for body-size text. Large text only (24 px+ or 19 px bold) |
| `B8860B` | `FFFFFF` | 3.25 | Fail for text under 24 px. Rules and large numerals only |
| `B8860B` | `F3ECDF` | 2.77 | Fail for all text. Rules only. Use `8A6508` for gold text on cream |
| `CDBFA3` | `FFFFFF` | 1.81 | Decorative rules only. Never a form field border on its own |

Rules:

1. Gold `B8860B` is never body-size text on the web. Eyebrows and numerals on cream or white use `8A6508`. Eyebrows on the green band use `E5B93C`. This departs from the report, where eyebrows are `B8860B`.
2. Form field borders: `#6B6B6B` (5.33 on white), not `CDBFA3`.
3. Keep the skip link and `aria-label` on the logo link (both exist today).
4. One `<h1>` per page, no skipped heading levels, no empty headings.
5. Focus visible on every interactive element (4.4). Touch targets at least 44 x 44 px.
6. Tables: `<caption>`, `<th scope>`. Videos: captions. `<details>` for FAQ, no custom JS accordion.
7. Body text minimum 16 px. Disclaimer minimum 12 px.

### 4.9 Responsive

1. Breakpoints: 640 px, 900 px, 1152 px (the current CSS uses 420, 560, 640, 700, 761, 900, 1100: collapse them to these three).
2. Under 900 px: single column, hero founder columns stack with a horizontal rule in place of the vertical one.
3. Under 640 px: hero title 40 px, numbered rows become numeral over title over description, package table becomes stacked blocks, nav becomes the cream panel.

## 5. 3D

3D does not rank a page. Crawlers read text, links and schema, not canvas. It can hurt rankings through slower LCP and INP. Upside is on-page only: visitors grasp the deliverable faster and open a sample more often.

Current state: Three.js r128, four WebGL scenes and a starfield load on every page as decoration. **Decided: remove all of it.**

| # | Concept | Where | Tech | Payload | Verdict |
|---|---|---|---|---|---|
| A | Report stack: three real report pages, fanned, tilting a few degrees on scroll and pointer | Home hero, right half of band, 900 px and up | CSS 3D on `<img>`, no library | 3 AVIF about 40 KB each, 1 KB CSS, under 1 KB JS | **Build.** Shows the product in the first screen |
| B | TAM / SAM / SOM as three planes that separate on scroll | `/market-sizing-for-startups/` | Inline SVG + CSS 3D | about 4 KB | Later |
| C | 15-cell patent matrix in isometric view | `/patent-landscape-research/` | CSS 3D or SVG | about 3 KB | Skip. Duplicates the real table |
| D | Exploded product view as pre-rendered video, click to play | `/expertise/` | MP4 + WebM, poster, `preload="none"` | poster 40 KB, video 0.5 to 1.5 MB on play | Later, needs `[JAD'S OWN RENDER]` |

Build A only. Safeguards: static flat stack under `prefers-reduced-motion` and under 900 px; `width`/`height` set (no layout shift); H1 text stays the LCP element; real alt text.

Do not:

- Load Three.js, react-three-fiber or Spline for decoration.
- Put text, prices or headings inside a canvas, video or image.
- Autoplay video or hijack scroll.
- Hide content at `opacity: 0` waiting for a script.
- Animate `/legal/`, `/faq/` or insights.
- Show a client's report pages in the stack.

## 6. SEO instructions

### 6.1 Architecture and URLs

1. Keep every existing URL except `/ads/`. Host stays GitHub Pages (decided), which cannot send 301 redirects, so a renamed URL loses its history.
2. Flat service URLs at the root (existing pattern), guides under `/insights/`, samples under `/work/`.
3. Each service page links up to `/services/`, across to two related services, and down to one guide and one sample.

### 6.2 Keyword-to-page map

Head terms: "consulting", "engineering consulting" and "market consulting" are not winnable for a two-person firm. Large firms, directories and job sites hold those results. Use them as part of longer phrases and rank for the qualified forms.

"Engineering consulting" alone is also crowded with design and staffing firms. Target the qualified form: **engineering-led product consulting** (market, patent, strategic, competitive pricing). Do not claim engineering design, licensed engineering sign-off or PE stamps.

| Head term | Qualified targets | Page |
|---|---|---|
| consulting | engineering-led product consulting, fixed-price consulting for hardware startups, startup research consultant | `/` |
| market consulting | market research consulting, market research consultant for medical device startups, market and competitive intelligence | `/` , `/services/` |
| engineering consulting | engineering-led product consulting, engineering consulting for medical device startups, technical market research for hardware startups | `/engineering-led-product-consulting/` (new) |
| (field) market sizing | market sizing for startups, TAM SAM SOM analysis service | `/market-sizing-for-startups/` |
| (field) competitive landscapes | medical device competitive landscape analysis, competitor analysis service for startups | `/medical-device-competitive-landscape/`, `/services/` |
| (field) competitive pricing | competitive pricing analysis for medical devices, competitor price benchmarking, per-unit price comparison | `/competitive-pricing-analysis/` (new) |
| (field) strategy | product strategy research for startups, go-to-market research for hardware | `/product-strategy-research/` (new) |
| (field) patent landscapes | patent landscape analysis for startups, patent landscape report cost, medical device patent landscape | `/patent-landscape-research/`, `/medical-device-patent-landscape/` |
| (field) financial modeling | five-year revenue model for startups, startup financial model consultant, scenario and sensitivity modeling | `/services/` |
| (field) FDA and medical devices | FDA pathway research for startups, 510(k) predicate research, medical device market research | `/expertise/` |
| (field) FCC and electronics | FCC certification research, electronics market research, connected product market research | `/expertise/` |
| (field) reimbursement and coding | reimbursement landscape research, medical device reimbursement and coding landscape | `/expertise/`, `/competitive-pricing-analysis/` |
| (field) investor materials | pitch deck review service, investor target list research, market research for fundraising | `/services/` |
| (field) visuals | product render and explainer animation for startups, technical illustration for pitch decks | `/expertise/` |
| (field) pricing | market research cost for a startup, market research packages pricing | `/market-research-cost/`, `/services/` |
| (field) industries | market research for consumer products, industrial and B2B, SaaS, healthcare, energy and agtech | `/` |
| local | market research consultant `[CITY]` Texas, Texas market research firm | `/contact/`, `/about/` (new) |
| brand | ZKK Consulting, ZKK Consulting LLC, Zolomon Kaliser, Jad Haddad | `/`, `/team/`, `/about/` |

Search volumes and current rankings were not measured (no keyword tool or Search Console access in this session). Confirm priorities in Search Console before writing new pages.

### 6.3 Title and meta description

Pattern: title `{Primary phrase}: {qualifier} | ZKK Consulting`, 50 to 60 characters. Description: what it is, for whom, price or scope, 140 to 160 characters, no "Book a call" filler unless space remains.

| Page | Title | Meta description |
|---|---|---|
| `/` | Engineering-Led Product Consulting & Market Research \| ZKK | Fixed-price market research, patent landscapes, competitive pricing and strategy for engineering-led products. Startups and device teams. From $999. |
| `/services/` | Market Research Packages and Pricing from $999 \| ZKK | Three fixed-price research packages ($999, $1,999, $3,499), standalone patent landscape research at $1,349, add-ons from $250 and bundles. 50% deposit to start. |
| `/engineering-led-product-consulting/` | Engineering-Led Product Consulting for Startups \| ZKK | Market, patent, strategic and competitive pricing consulting by engineers for hardware, electronics and device teams. Fixed prices from $999. |
| `/competitive-pricing-analysis/` | Competitive Pricing Analysis for Product Teams \| ZKK | Sourced list-price and contract-price comparisons per unit for competing products, outliers flagged, sources dated. Public sources only. |
| `/product-strategy-research/` | Product Strategy Research for Startups \| ZKK | Strategy research on positioning, entry options and go-to-market for engineering-led products. `[CONFIRM SCOPE]` |
| `/market-sizing-for-startups/` | Market Sizing for Startups: TAM, SAM, SOM \| ZKK | Keep current description. |
| `/patent-landscape-research/` | Patent Landscape Analysis for Startups: $1,349 \| ZKK | Up to 15 patents compared in a summary and feature matrix, with ownership and status. Fixed price of $1,349. Business research only, not a legal opinion. |
| `/team/` | Zolomon Kaliser and Jad Haddad: Research Team \| ZKK | Keep current description. |
| `/about/` | About ZKK Consulting LLC: Two-Person Consulting Firm | ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. Fixed prices, sourced figures, direct work with the people doing the research. |
| `/contact/` | Contact ZKK Consulting \| `[CITY]`, Texas | Email info@zkkconsulting.com or book a discovery call. ZKK Consulting LLC, `[ADDRESS]`. `[PHONE]`. |
| `/faq/` | Market Research Engagement FAQ: Price, Terms \| ZKK | Keep current description. |

Keep current title and description on: `/medical-device-patent-landscape/`, `/medical-device-competitive-landscape/`, `/work/`, `/expertise/`, `/insights/`, `/referrals/`, `/legal/`.

Check each new title is 60 characters or fewer after editing. Trim the qualifier, not the primary phrase.

### 6.4 Headings

1. One H1 per page containing the primary phrase. Home H1: "Engineering-led product consulting for startups and device teams". Move "Research that makes the next decision clearer" to the italic key line.
2. H2s are section names or questions. No H2 without text. No heading used for styling.
3. Do not repeat the same H2 text twice on a page (see `/team/`).

### 6.5 Internal linking

1. Home links to every service page from the numbered list and the package table.
2. Every service page: breadcrumb, two related services, one guide, one sample, one CTA to `/intake/`.
3. Every guide links to the one service page it supports in the first 150 words and again at the end.
4. Footer lists all service pages.
5. Anchor text is the target page's primary phrase, not "learn more".
6. No orphan pages: every new URL is in the sitemap and linked from at least two pages.

### 6.6 JSON-LD

Add or fix:

| Type | Where | Notes |
|---|---|---|
| Organization | `/` (exists) | Add `@id` Person references, `knowsAbout`, `areaServed`, `address`, `telephone` when supplied |
| ProfessionalService | `/` and `/contact/` | Same `@id` family as Organization. Move the existing one from `/services/` or reference it |
| WebSite | `/` (exists) | Keep |
| Service | Each service page (5 exist) | Add to every new service page with `provider`, `serviceType`, `areaServed`, `offers` where a price is published |
| Person | `/team/` (exists, thin) | Add `@id`, `sameAs` (LinkedIn), `alumniOf`, `knowsAbout`, `image`. Fix `jobTitle` |
| BreadcrumbList | All pages except home (exists on most) | Add to new pages |
| FAQPage | `/faq/` and each "Common questions" block | Only where the questions and answers are visible on the page. Google limits FAQ rich results to a small set of sites (from memory, not re-checked), so expect no rich result. It still labels Q and A for machines |
| Article | Insights and the sample page (exists) | Change `author` from Organization to the Person `@id`. Keep `datePublished`, set `dateModified` truthfully |

Rule: JSON-LD must match the visible text on the page (Google states this in its AI features guidance).

Filled example for the home page. Verified values come from the site. Placeholders are marked.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://zkkconsulting.com/#org",
      "name": "ZKK Consulting",
      "legalName": "ZKK Consulting LLC",
      "url": "https://zkkconsulting.com/",
      "logo": "https://zkkconsulting.com/ZKK_logo.png",
      "image": "https://zkkconsulting.com/og-image.jpg",
      "email": "info@zkkconsulting.com",
      "description": "ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. It provides fixed-price market research, patent landscape research, competitive pricing analysis, strategy research and financial modeling for startups and device teams.",
      "priceRange": "$999 to $3,499",
      "telephone": "[PHONE]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET OR OMIT]",
        "addressLocality": "[CITY]",
        "addressRegion": "TX",
        "postalCode": "[ZIP]",
        "addressCountry": "US"
      },
      "areaServed": "[CONFIRM: US]",
      "foundingDate": "[YYYY-MM-DD]",
      "founder": [
        { "@id": "https://zkkconsulting.com/team/#zolomon" },
        { "@id": "https://zkkconsulting.com/team/#jad" }
      ],
      "sameAs": ["https://www.linkedin.com/company/zkkconsulting"],
      "knowsAbout": [
        "Market research", "Competitive landscape analysis", "Market sizing (TAM, SAM, SOM)",
        "Patent landscape research", "Financial modeling", "Medical device market research",
        "FDA pathway research", "FCC certification research", "Reimbursement and coding landscapes",
        "Competitive pricing analysis", "Product strategy research"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://zkkconsulting.com/team/#zolomon",
      "name": "Zolomon Kaliser",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://zkkconsulting.com/#org" },
      "url": "https://zkkconsulting.com/team/#zolomon",
      "email": "zolomon@zkkconsulting.com",
      "sameAs": ["https://www.linkedin.com/in/zolomonkaliser/"],
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Texas A&M University" },
        { "@type": "CollegeOrUniversity", "name": "University of Texas at Dallas" }
      ],
      "knowsAbout": ["Market analysis", "Financial modeling", "Medical device research"]
    },
    {
      "@type": "Person",
      "@id": "https://zkkconsulting.com/team/#jad",
      "name": "Jad Haddad",
      "jobTitle": "Co-Founder",
      "worksFor": { "@id": "https://zkkconsulting.com/#org" },
      "url": "https://zkkconsulting.com/team/#jad",
      "email": "jad@zkkconsulting.com",
      "sameAs": ["https://www.linkedin.com/in/jadksrahaddad/"],
      "alumniOf": [{ "@type": "CollegeOrUniversity", "name": "Texas A&M University" }],
      "knowsAbout": ["Patent landscape research", "Electronics and embedded systems", "Product-market research"]
    },
    {
      "@type": "WebSite",
      "@id": "https://zkkconsulting.com/#site",
      "url": "https://zkkconsulting.com/",
      "name": "ZKK Consulting",
      "publisher": { "@id": "https://zkkconsulting.com/#org" }
    }
  ]
}
```

Delete any property whose placeholder is not filled. Do not ship a bracket.

### 6.7 Technical checklist

1. `sitemap.xml`: add every new URL, remove none, set `lastmod` to each file's real last change date. Do not list `/intake/`, `404.html`, redirect stubs.
2. `robots.txt`: see section 7.3. Keep the `Sitemap:` line.
3. Canonical: self-referencing absolute URL with trailing slash on every page (pattern exists).
4. Open Graph and Twitter: keep the existing set. Make a new `og-image.jpg` (1200 x 630) in the cover style: band green, Cormorant title, white logo. Add `og:image:alt` on every page (home has it).
5. Images: AVIF or WebP, explicit `width` and `height`, `loading="lazy"` below the fold, descriptive alt text. Decorative images `alt=""`.
6. Core Web Vitals targets at the 75th percentile, mobile: LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less. Lab targets: Lighthouse mobile Performance 90+, Accessibility 100, Best Practices 100, SEO 100.
7. JS budget per page: 30 KB uncompressed, first-party only. No render-blocking scripts: `defer` on all.
8. CSS: one file, under 40 KB, in `<head>`.
9. Delete from the repo or keep out of deploy: `/ads/` and its two MP4 files, `zkk.html`, `_t.html`, `&1`, `/site/`, `/jad/`, `/app/`, `.htaccess`, `HOLDERfavicon.ico`. Add `noindex` to anything that must stay.
10. Redirect map (meta refresh plus canonical, since the host cannot 301): `portfolio.html` to `/team/` and `research.html` to `/services/` exist, keep both. No other URL changes. If the site ever moves to a host with real redirects, convert these two to 301 and keep all paths identical.
11. Add analytics and connect Google Search Console and Bing Webmaster Tools `[JAD: CONFIRM WHICH ARE ALREADY SET UP]`. Bing matters because ChatGPT search and Copilot draw on it (commonly reported, not confirmed here).
12. Validate: Rich Results Test and Schema Markup Validator on every template, zero errors.

### 6.8 Local and entity signals

1. Google Business Profile: create or claim as a service-area business under the exact name "ZKK Consulting LLC", category "Market researcher" or "Business management consultant" `[JAD: CHOOSE]`. Existing profile: not verified.
2. Name, address, phone identical everywhere: site footer, `/contact/`, JSON-LD, Google Business Profile, LinkedIn company page, Texas business filings.
3. LinkedIn company page: same one-sentence description as the site's definitional sentence, link to the site, both founders listed as employees.
4. One spelling of the name: "ZKK Consulting" in copy, "ZKK Consulting LLC" in legal lines.

## 7. AI search (GEO) instructions

Evidence level is marked on each item: **[Documented]** is stated by the platform. **[Studied]** has published research behind it. **[Practice]** is common advice without solid proof.

### 7.1 Content rules

1. **[Documented]** Do normal SEO first. Google states there are no additional requirements, special files or special schema needed to appear in AI Overviews or AI Mode. A page must be indexed and eligible for a snippet. Keep important content as text.
2. **[Practice]** Put one definitional sentence in the first 100 words of the home, about and contact pages, and reuse it on LinkedIn and Google Business Profile: "ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. It provides fixed-price market research, patent landscape research, competitive pricing analysis and strategy research for startups and medical device teams."
3. **[Practice]** One definitional sentence per service page, same shape: "Patent landscape research is a structured review of up to 15 patents around a technology, delivered as a summary and comparison matrix. It is business research, not a legal opinion." Build each from the wording already on that page.
4. **[Practice]** Answer first: the first paragraph under every H1 and H2 answers the heading in 40 to 60 words, then detail follows.
5. **[Practice]** Question H2s where a real question exists ("What does a patent landscape report cost?"), each followed by a one-sentence direct answer with the number in it ("$1,349 for up to 15 patents.").
6. **[Studied]** Add sourced figures, quotations and citations. The GEO study (Aggarwal et al., KDD 2024, arXiv 2311.09735) found that adding statistics, quotations and cited sources raised visibility in generative answers in its tests, and keyword stuffing did not. Cited from memory, not re-fetched. Tested on research benchmarks, not on today's products.
7. **[Practice]** Fact tables: every service page carries a table with rows for Price, Scope limit, Deliverable, Deposit, Revisions, What it is not. Use only values on the site.
8. **[Practice]** Named authors: every insight shows "Written by" and "Reviewed by" with name, degree and date, linked to `/team/`. Match the Article JSON-LD.
9. **[Practice]** Dates and sources: "Last reviewed [DATE]" on every service page and guide. Outbound links to primary sources (FDA databases, FCC rules, USPTO) where the page mentions them.
10. **[Documented]** Server-rendered text: all copy in the initial HTML. The site already does this. Do not move copy into JS, canvas or images. AI crawlers generally do not execute JavaScript (widely reported, not confirmed by every vendor).
11. **[Practice]** Third-party mentions: AI answers lean on what other sites say about a firm. Get the same definitional sentence onto LinkedIn, Google Business Profile, founder LinkedIn profiles, university alumni or startup directories, and any client or partner site willing to link `[JAD: LIST WHERE ZKK CAN BE LISTED]`. No paid link schemes.
12. **[Practice]** Keep the scope notes ("not legal advice", "not billing or coding guidance") next to the claims. They get quoted with the claim and stop an AI answer from overstating what ZKK does.

### 7.2 llms.txt draft

**[Practice, unproven]** No major AI vendor has documented that it uses `llms.txt`, and Google's guidance says no new machine-readable files are needed. It costs nothing and does no harm. Publish it at `/llms.txt` and do not expect a measurable effect.

```
# ZKK Consulting

> ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. It provides fixed-price market research, patent landscape research, competitive pricing analysis and strategy research for startups and medical device teams. Deliverables are business research only, not legal, regulatory, medical, tax, accounting or investment advice.

## Services and pricing
- [Services and pricing](https://zkkconsulting.com/services/): Launchpad $999, Growth $1,999, Comprehensive $3,499, Patent Landscape Research $1,349 (up to 15 patents), add-ons from $250, bundles.
- [Patent landscape analysis for startups](https://zkkconsulting.com/patent-landscape-research/)
- [Medical device patent landscape research](https://zkkconsulting.com/medical-device-patent-landscape/)
- [Medical device competitive landscape analysis](https://zkkconsulting.com/medical-device-competitive-landscape/)
- [Market sizing for startups](https://zkkconsulting.com/market-sizing-for-startups/)
- [What market research costs for a startup](https://zkkconsulting.com/market-research-cost/)
- [Specialized expertise: FDA, FCC, electronics, engineering](https://zkkconsulting.com/expertise/)

## Work samples
- [Our work and sample deliverables](https://zkkconsulting.com/work/)
- [Wrist-worn fall detection research sample](https://zkkconsulting.com/work/fall-detection-sample/)

## Guides
- [TAM, SAM, and SOM for medical devices](https://zkkconsulting.com/insights/tam-sam-som-medical-devices/)
- [How to size a market for a new device](https://zkkconsulting.com/insights/how-to-size-a-market-for-a-new-device/)
- [How to do a patent landscape search](https://zkkconsulting.com/insights/how-to-do-a-patent-landscape-search/)
- [Patent landscape vs freedom to operate](https://zkkconsulting.com/insights/landscape-vs-freedom-to-operate/)
- [Competitor analysis for a pitch deck](https://zkkconsulting.com/insights/competitor-analysis-for-pitch-deck/)
- [Research consultant vs DIY and AI research](https://zkkconsulting.com/insights/consultant-vs-diy-ai-research/)

## Company
- [Team: Zolomon Kaliser and Jad Haddad](https://zkkconsulting.com/team/)
- [FAQ](https://zkkconsulting.com/faq/)
- [Legal notices and disclaimers](https://zkkconsulting.com/legal/)
- Contact: info@zkkconsulting.com
```

Add the new service URLs to it when they go live.

### 7.3 robots.txt for AI crawlers

| Token | Vendor | Purpose |
|---|---|---|
| `GPTBot` | OpenAI | Model training |
| `OAI-SearchBot` | OpenAI | ChatGPT search index |
| `ChatGPT-User` | OpenAI | Fetch when a user asks ChatGPT to open a page |
| `ClaudeBot` | Anthropic | Model training |
| `Claude-SearchBot` | Anthropic | Search index |
| `Claude-User` | Anthropic | Fetch when a user's question needs a page |
| `PerplexityBot` | Perplexity | Search index |
| `Google-Extended` | Google | Control token for Gemini training and grounding. Does not affect Google Search or AI Overviews |

**Decided: allow all.** Search and user tokens let ZKK be cited. Training tokens (`GPTBot`, `ClaudeBot`, `Google-Extended`) let public page text train models; accepted. Client deliverables are not on the site. robots.txt compliance is voluntary.

Use this robots.txt:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://zkkconsulting.com/sitemap.xml
```

Note: do not add `Disallow: /intake/`. That page is `noindex` today, and a page blocked in robots.txt cannot have its `noindex` read.

### 7.4 Measuring

1. Monthly, ask ChatGPT, Claude, Perplexity and Gemini five fixed questions ("who offers fixed-price patent landscape research for startups", and four more from section 6.2) and log whether ZKK is named and which URL is cited.
2. Watch referrals from `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com` in analytics.

### 7.5 Sources

- Google Search Central, "AI features and your website": https://developers.google.com/search/docs/appearance/ai-features
- Crawler tokens (secondary): https://www.specification.website/spec/agent-readiness/robots-for-ai-crawlers/. Vendor pages it cites were not opened directly.
- llms.txt adoption (vendor blog, no measured evidence): https://www.texta.ai/blog/do-ai-crawlers-read-llms-txt
- GEO study: Aggarwal et al., arXiv 2311.09735 (from memory).

## 8. Ready-to-paste prompts

Run in order. Each prompt is self-contained. Work on a branch. Do not touch `/app/`, `/jad/`, `/site/`.

### (a) Apply the design system

```
You are editing a static HTML site (no framework, no build step) hosted on GitHub Pages. Shared CSS is /assets/site.css (about 157 KB), shared JS is /assets/site.js. Pages are folders with index.html.

Goal: replace the dark "aurora" theme with the ZKK report style. Do not change any copy, URL, title tag, meta tag or JSON-LD in this pass.

Tokens (use only these colours):
band #133423, deep green #013220, mid green #0B4A32, gold #B8860B (rules only on light backgrounds), light gold #E5B93C (text on green only), gold ink #8A6508 (gold text on cream/white), brown #7A5523, cream #F3ECDF, cream text #FBF9F3, table band #F7F2E8, rule #CDBFA3, light rule #E3DCCB, ink #1A1A1A, muted #5F6F66, grey #6B6B6B, callout #F2F2F2, white #FFFFFF.
Fonts: headings "Cormorant Garamond" (400, 400 italic, 700), everything else "Inter" (variable 400-700). Remove Lora. Self-host WOFF2 in /assets/fonts/, font-display: swap, preload Cormorant 400 and Inter. Remove Google Fonts links.
Sizes: body 17px/1.6; hero h1 clamp(40px,5.2vw,64px) weight 400; h2 clamp(28px,3vw,36px) weight 700 colour #013220 with 1px #B8860B bottom border and 8px padding-bottom; h3 26px weight 700 colour #0B4A32; h4 Inter 700 18px colour #013220; eyebrow Inter 700 13px uppercase letter-spacing 0.19em; table 15px; source line 13px italic #5F6F66; disclaimer 12px #5F6F66. Headings use font-variant-numeric: lining-nums; tables use tabular-nums lining-nums.
Layout: max width 1152px, reading column 680px, left-aligned text, gutters clamp(20px,5vw,64px), breakpoints 640/900/1152px. Border radius 0. No box-shadow, gradient, backdrop-filter or glass anywhere. 4px #133423 bar at the top of every page.

Steps:
1. Rewrite :root in site.css with the tokens above as CSS custom properties. Remove every other colour value.
2. Merge /assets/prose.css and /assets/edits/e1..e5 into site.css and delete those files and their <link>/<script> tags. Target site.css under 40 KB.
3. Remove from every page: three.min.js, gsap.min.js, ScrollTrigger.min.js, /assets/hero3d.js, /assets/sky.js, #footerCanvas, all <canvas> hooks, the logo marquee animation, the side dot navigation, the gold shimmer on the home h1.
4. Remove the .fade-up opacity:0 pattern and the GSAP code in site.js. All content visible by default.
5. Build components: nav (white, 64px, caps links 13px, gold underline for current page, green CTA), cover-style hero (cream strip, full-bleed #133423 band with light-gold eyebrow, Cormorant title in #FBF9F3, italic #E5B93C key line, 1px gold rule, two columns split by a vertical rule), section header, .zkk-table (header #133423 white bold, top border 1px #B8860B, bottom 1px #CDBFA3, row lines 1px #E3DCCB, no vertical lines, even rows #F7F2E8, numbers right-aligned, caption + italic source line), callout box (cream fill, caps label #8A6508, 40px Cormorant value #013220), scope note (cream, 1px gold left border), footer (white, rule on top, 12px disclaimer).
6. Set <meta name="theme-color" content="#F3ECDF"> on every page.
7. Accessibility: never use #B8860B for text under 24px; focus outline 2px #8A6508 (light) or #E5B93C (on green); keep the skip link; touch targets 44px.

Done when: no page loads a third-party script; no canvas elements remain; every page renders fully with JavaScript disabled; computed heading font is Cormorant Garamond and body font is Inter on every page.
```

### (b) Rebuild each page

```
Site: static HTML, design system from the previous step is in /assets/site.css (cover-style hero, section header, .zkk-table, callout, scope note, footer). Colours: #133423, #013220, #0B4A32, #B8860B, #E5B93C, #8A6508, #7A5523, #F3ECDF, #FBF9F3, #F7F2E8, #CDBFA3, #E3DCCB, #1A1A1A, #5F6F66. Fonts: Cormorant Garamond headings, Inter body.

Rules: keep every existing URL and anchor id. Reuse existing copy. Do not invent services, clients, statistics, credentials or testimonials. No em or en dashes. Leave [BRACKET] placeholders exactly as written and list them in your final message. Remove placeholder sections ("Client feedback will appear here", "Client engagement slot", "Cross-industry sample slot", empty headings).

Rebuild, one commit per page:
1. / : cover hero (eyebrow "ENGINEERING-LED PRODUCT CONSULTING"; h1 "Engineering-led product consulting for startups and device teams"; italic key line "Research that makes the next decision clearer."; two columns: Zolomon Kaliser, Founder; Jad Haddad, Co-Founder). Then numbered list 01-04 of the four service areas, package table (Launchpad $999, Growth $1,999, Comprehensive $3,499, Patent Landscape Research $1,349), coverage lists, four-step process, founders, closing band.
2. /services/ : packages as one comparison table + price callouts; patent section with scope note; add-ons as two tables; bundles table showing standard price, bundle price, saving. Keep ids #packages #launchpad #growth #enterprise #patent #addons #bundles.
3. /work/ and /work/fall-detection-sample/ : flat report-page images with 1px #CDBFA3 border, "Figure n." captions, source lines, each item labelled "Independent sample" or "Client engagement".
4. /expertise/ : three numbered sections; bullet groups as tables; keep both boundary notes verbatim as scope notes.
5. /team/ : titles Zolomon Kaliser = Founder, Jad Haddad = Co-Founder; both visible in full (anchor links, no selector that hides one), ids #zolomon and #jad, unique h2 text per section, credentials as tables.
6. /insights/ : contents-page layout on cream (bold 22px rows, grey one-line description, date right-aligned, no dot leaders). Each article: single 680px column, byline row "Written by [NAME] · [DATE]" and "Reviewed by [NAME] · [DATE]", CSS-counter numbered h2s ("1. ", "1.1").
7. The five service landing pages: long-form layout, callout row (price, scope limit, deposit), fact table, scope note.
8. /faq/, /referrals/, /legal/ (numbered "1." to "12."), /intake/ (form restyle, keep noindex), 404.html. Delete /ads/ and its MP4 files.
9. New pages using existing site wording (for /competitive-pricing-analysis/ and /product-strategy-research/ use only text Jad supplies; otherwise leave [BRACKET] placeholders): /contact/, /about/, /engineering-led-product-consulting/, /competitive-pricing-analysis/, /product-strategy-research/. Add no other pages.
10. Nav on every page: Services, Work, Expertise, Insights, Team, Contact + "Book a discovery call". Footer lists every service page, FAQ, Referral program, Legal.

Done when: every page has exactly one h1, no empty headings, no horizontal scroll at 320px, and all internal links return 200.
```

### (c) SEO pass

```
Site: static HTML on GitHub Pages (no server redirects). Do not rename or remove any existing URL.

1. Set <title> and meta description per page from the table in section 6.3 of ZKK_Website_Redesign_Instructions_2026-11-10.md. Titles 60 characters or fewer, descriptions 140-160.
2. Each page: one h1 containing the primary phrase from section 6.2; self-referencing canonical with trailing slash; og:title, og:description, og:url, og:image, og:image:alt, twitter:card summary_large_image.
3. JSON-LD: home gets the Organization/ProfessionalService + Person + WebSite graph from section 6.6 (delete any property whose [PLACEHOLDER] is unfilled); every service page gets Service with provider {"@id":"https://zkkconsulting.com/#org"} and offers only where a price is on the page; /team/ Person entries get @id, sameAs, alumniOf, knowsAbout; insights and the sample page get Article with author as the Person @id; every non-home page gets BreadcrumbList; /faq/ and each visible "Common questions" block get FAQPage. JSON-LD must match visible text.
4. Internal links: each service page links to /services/, two related services, one guide, one sample and /intake/. Each guide links to its service page in the first 150 words. Anchor text = target's primary phrase.
5. sitemap.xml: all indexable URLs including new ones, real lastmod dates, exclude /intake/, 404.html, portfolio.html, research.html.
6. Images: AVIF or WebP with width/height, loading="lazy" below the fold, alt text. Resize /assets/jad.jpg to 192px and 384px variants.
7. Remove from deploy: /ads/ and its MP4 files, zkk.html, _t.html, "&1", .htaccess, HOLDERfavicon.ico, /site/, /jad/, /app/.
8. Do not target the bare terms "consulting", "engineering consulting" or "market consulting" in titles. Use the qualified phrases in section 6.2 ("engineering-led product consulting" is the lead phrase). Do not claim engineering design, PE sign-off or licensed engineering services.
9. Set jobTitle: Zolomon Kaliser = "Founder", Jad Haddad = "Co-Founder" in every Person block.

Report: a table of URL, title, title length, description length, h1, JSON-LD types.
```

### (d) AI-search pass

```
Site: static HTML, all text server-rendered. Use only facts already on the site. No invented statistics, clients or credentials. No em or en dashes.

1. Put this sentence in the first 100 words of /, /about/ and /contact/: "ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. It provides fixed-price market research, patent landscape research, competitive pricing analysis and strategy research for startups and medical device teams."
2. On each service page, first paragraph = one definitional sentence ("<Service> is ...") plus one sentence stating price and scope limit, 40-60 words total.
3. Rewrite h2s as questions where the section answers one, and make the first sentence under each a direct answer containing the number or fact.
4. Add a fact table to each service page: Price, Scope limit, Deliverable, Deposit, Revisions, What it is not.
5. Every insight: visible "Written by [NAME], [DEGREE] · [DATE]" and "Reviewed by [NAME] · [DATE]", linked to /team/#zolomon or /team/#jad; "Last reviewed [DATE]" on service pages; a Sources list linking primary sources named in the text.
6. Keep every scope note ("not legal advice", "not billing or coding guidance") adjacent to the claim it limits.
7. Create /llms.txt from the draft in section 7.2 and add the new service URLs.
8. Replace /robots.txt with the "allow all" version in section 7.3. Do not disallow /intake/ (the page keeps its noindex meta tag).
9. Confirm no copy lives only inside JS, canvas, video or images.

Report: for each page, the definitional sentence used and the list of question h2s.
```

### (e) Build the 3D element with fallbacks

```
Build one element only: a "report stack" on the home page hero, right half of the green band (#133423), visible at viewport widths of 900px and up.

Content: three images of ZKK report pages (cover, contents, table page) at /assets/report/cover.avif, contents.avif, table.avif with .webp fallbacks via <picture>, each 480x621 (US Letter ratio), about 40 KB. Use the template sample pages. Never a client's report. Alt text: "ZKK report cover page", "ZKK report contents page", "ZKK report table page".

Technology: CSS 3D transforms only. No Three.js, no canvas, no animation library.
- Wrapper: perspective: 1400px; aspect-ratio reserved so there is no layout shift.
- Three absolutely positioned cards, 1px #CDBFA3 border, no shadow, no radius. Resting state: rotateY(-18deg) rotateX(6deg), cards offset translateZ(0, -40px, -80px) and translateX(0, 28px, 56px).
- Motion: under @media (prefers-reduced-motion: no-preference) and (hover: hover), tilt at most 4 degrees with pointer position and spread cards by up to 12px with scroll progress, using one requestAnimationFrame-throttled listener that writes two CSS custom properties. Under 1 KB of JS, deferred, started by IntersectionObserver, stopped when off screen.
- Fallbacks: without JS or with reduced motion, show the resting state. Under 900px, show only the cover image flat below the hero text, or nothing if it pushes the CTA below the fold.
- The h1 text must remain the LCP element: images are loading="lazy" decoding="async", no fetchpriority.
- No text inside images beyond what is on the report pages. Wrapper is not focusable and has no role. Whole stack is one link to /work/ with aria-label "See sample reports".

Acceptance: CLS 0 from this element; Lighthouse mobile Performance unchanged within 2 points versus the page without it; works with JS disabled; no motion when prefers-reduced-motion is reduce.
```

### (f) Final QA

```
Audit the built site. Report PASS or FAIL per line with evidence. Fix every FAIL, then re-run.

Design
- Only these colours appear in computed styles: #133423 #013220 #0B4A32 #B8860B #E5B93C #8A6508 #7A5523 #F3ECDF #FBF9F3 #F7F2E8 #CDBFA3 #E3DCCB #1A1A1A #5F6F66 #6B6B6B #F2F2F2 #111111 #FFFFFF.
- Heading font is Cormorant Garamond and body font is Inter on every page. No Lora.
- No box-shadow, border-radius above 0, gradient, backdrop-filter or canvas element on any page.
- No em dash or en dash in visible text.
Performance (Lighthouse mobile, each template: home, service, insight, legal)
- Performance 90 or higher. LCP 2.5 s or less. CLS 0.1 or less. Total Blocking Time 200 ms or less.
- No third-party script requests. JS 30 KB or less uncompressed per page. site.css 40 KB or less.
- Page renders all content with JavaScript disabled.
Accessibility
- Lighthouse Accessibility 100. axe: zero violations.
- Text contrast 4.5:1 or higher (3:1 for text 24px+). #B8860B is not used for text under 24px.
- One h1 per page, no skipped levels, no empty headings. Keyboard: every control reachable with visible focus.
- No motion when prefers-reduced-motion is reduce.
SEO
- Lighthouse SEO 100. Every indexable page: unique title 60 characters or fewer, unique description 140-160, self canonical, OG and Twitter tags.
- JSON-LD on every page validates with zero errors in the Schema Markup Validator and Rich Results Test, and matches visible text.
- sitemap.xml lists every indexable URL and nothing noindexed. robots.txt and llms.txt return 200.
- Zero broken internal links, zero broken images, all existing URLs from the old sitemap still return 200.
- No [BRACKET] placeholder text in any deployed page.
Responsive
- No horizontal scroll at 320, 390, 768, 1280 px. Tables scroll inside their wrapper.
```

## 9. Jad: supply

1. Address or service-area city, phone, hours (or confirm none published).
2. Founding date of ZKK Consulting LLC.
3. Two to three sentences each for the competitive pricing and product strategy pages. No client names.
4. Which logos are clients, employers or memberships (Sage Spectra, Oncor, Teliatry, Dynamic KPIs, IEEE), plus written permission for any client logo.
5. Author, reviewer and date for each of the six insights and the sample page.
6. Report page images cleared for public use (template sample pages are the default).
7. Your own product render, only if you want the exploded-view video (3D option D).
8. Which of Search Console, Bing Webmaster Tools, Google Business Profile and analytics already exist.
9. Directories, alumni pages, partners or clients where ZKK can be listed.

Decided 2026-11-10: see the top of this file. No open decisions.

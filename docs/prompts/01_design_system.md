# Prompt (a): Apply the design system

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

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

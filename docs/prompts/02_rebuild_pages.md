# Prompt (b): Rebuild each page

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

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

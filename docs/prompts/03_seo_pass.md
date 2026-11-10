# Prompt (c): SEO pass

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

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

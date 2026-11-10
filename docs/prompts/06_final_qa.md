# Prompt (f): Final QA

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

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

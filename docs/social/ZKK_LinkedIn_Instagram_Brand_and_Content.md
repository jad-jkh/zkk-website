# ZKK LinkedIn and Instagram: Brand Edits, Video Prompts, Post Prompts

2026-11-10. Matches the report look in `ZKK_Website_Redesign_Instructions_2026-11-10.md`. No em or en dashes in any copy. `[BRACKETS]` = Jad supplies. Never invent clients, numbers or quotes.

## 1. Brand tokens (same as site and reports)

| Use | Value |
|---|---|
| Band green | `#133423` |
| Deep green | `#013220` |
| Gold (rules, large type only) | `#B8860B` |
| Light gold (text on green) | `#E5B93C` |
| Gold ink (gold text on cream) | `#8A6508` |
| Cream | `#F3ECDF` |
| Cream text | `#FBF9F3` |
| Ink | `#1A1A1A` |
| Headings | Cormorant Garamond (bold; title regular) |
| Body | Inter |
| Logo | Green on cream or white. White on green. No effects |
| Banned | Shadows, gradients, stock photos, AI art, emoji, clip art |

Voice: plain, direct, answer first. State limits next to claims ("Public sources only, as of [DATE]"). Dates on everything.

## 2. LinkedIn company page edits

Page: `linkedin.com/company/zkkconsulting`.

| Item | Edit |
|---|---|
| Logo | Square crop of the green ZKK logo on cream `#F3ECDF`. Not on a dark or white background |
| Banner (1128 x 191) | Solid `#133423`. Left: gold eyebrow `ENGINEERING-LED PRODUCT CONSULTING` in Inter caps. Right: white logo. Nothing else |
| Tagline (120 chars max) | `Engineering-led product consulting: market, patent, strategic and competitive pricing research.` |
| About, first two lines (shown before "see more") | `ZKK Consulting LLC is a two-person Texas consulting firm for engineering-led products. We deliver fixed-price market, patent, competitive pricing and strategy research.` |
| About, rest | Who it is for: startups and device teams. What they get: a sourced written report, assumptions stated. How it works: discovery call, scope and deposit, research, walkthrough. Link to `zkkconsulting.com/services/`. One scope line: business research, not legal, regulatory or investment advice |
| Specialties | Market research, Patent landscape research, Competitive pricing analysis, Product strategy, Medical device research, FDA pathway research, FCC certification research, Financial modeling |
| Website / CTA button | "Visit website" to `/`, or "Contact us" to `/intake/` |
| Location, founded, size | `[CITY], TX` · `[YEAR]` · 2 to 10 |
| Featured | Pin 3 items: the sample report page (`/work/`), the pricing page, one guide |
| Posts | Pin the founder intro post (prompt 5.1) |
| Services tab | One entry per service page on the new site. Same wording as the site title tags |
| Consistency | Name, description and URL identical to the site, Google Business Profile and JSON-LD |

Founder profiles:

| Person | Headline | Banner |
|---|---|---|
| Zolomon Kaliser | `Founder, ZKK Consulting \| Engineering-led product consulting` | Same green banner, company name only |
| Jad Haddad | `Co-Founder, ZKK Consulting \| Patent, market and pricing research for device teams` | Same |

Both: ZKK as current employer, link the company page, repost company posts with one line of added context.

## 3. Instagram profile edits

Handle: `[@HANDLE]` (use `@zkkconsulting` if free).

| Item | Edit |
|---|---|
| Profile photo | Same green logo on cream square as LinkedIn |
| Name field (searchable) | `ZKK Consulting \| Product Research` |
| Bio (150 chars) | `Engineering-led product consulting.` / `Market, patent, strategy, pricing research.` / `Fixed prices. Texas.` / `Book a call:` |
| Link | `zkkconsulting.com/intake/` |
| Category | `Consultant` |
| Highlights (cream cover, gold ink label, no icons) | `Services`, `Samples`, `Pricing`, `How it works`, `Guides` |
| Grid rule | Alternate: green-band card, cream card, report-page photo. Same two fonts. No other style |
| Contact button | Email: `info@zkkconsulting.com` |

## 4. Video styles

Common specs for every video: 9:16, 1080 x 1920, 15 to 30 s, burned-in captions (Inter 600, `#FBF9F3` on `#133423`), no music or one quiet instrumental, no audio-dependent meaning, end card 2 s: white logo on `#133423` + `zkkconsulting.com`. Export MP4 H.264. Reuse a 1:1 or 16:9 cut for LinkedIn.

| Style | What it is | Best for | Source material |
|---|---|---|---|
| S1 Report walk | Flat report pages scrolling slowly, one table or finding highlighted in gold rule | Proof of deliverable | Template sample pages only. Never a client report |
| S2 One number | Single fact on the green band, Cormorant numeral, one line below, source line | LinkedIn hooks, Instagram | A published ZKK figure, e.g. a package price or "up to 15 patents" |
| S3 Build-up | A table or matrix building row by row (patent matrix, per-unit price table) | Explaining a service | Template data or public data you cite |
| S4 Exploded view | Product render separating into parts, labels fade in | Technical illustration service, engineering credibility | `[JAD'S OWN RENDER]` |
| S5 Founder talk | 20 to 30 s to camera, plain background, captions, one point | Trust, LinkedIn | Founder footage |

### 4.1 Prompts (paste into Claude, then into the video or motion tool)

**S1 Report walk**
```
Write a shot list and caption script for a 20 s vertical video (1080x1920) that scrolls slowly down 3 pages of a ZKK report: cover, a contents page, a table page. Use only the template sample pages in /assets/report/. Style: flat, no shadows, no 3D, cream #F3ECDF page on a #133423 background, 1px #B8860B rule highlighting one table row at 8 s. Captions in Inter 600 #FBF9F3 on #133423. Three caption lines max, each under 8 words, plain and factual: what a ZKK report contains, how it is sourced, what it costs ($[PRICE] from the services page). End card 2 s: white ZKK logo on #133423 + zkkconsulting.com. No music cues that carry meaning. No em or en dashes. Output: scene table (time, visual, caption) and an After Effects / CapCut build note.
```

**S2 One number**
```
Write a 15 s vertical video script. Scene 1 (0 to 3 s): #133423 background, gold #E5B93C eyebrow in Inter caps: "[TOPIC]". Scene 2 (3 to 10 s): the number "[NUMBER]" in Cormorant Garamond regular, #FBF9F3, centred, counting up once, then holds. Scene 3 (10 to 13 s): one sentence under it in Inter, max 12 words, answer first. Scene 4: source line in italic Inter 13px #CDBFA3 "Source: [SOURCE], as of [DATE]". End card 2 s. The number must come from a published ZKK page or a cited public source. Do not estimate or average. No em or en dashes. Output: frame-by-frame spec plus the caption text.
```

**S3 Build-up**
```
Write a 25 s vertical video script in which a table builds one row at a time. Table style: header row #133423 with white bold Inter, 1px #B8860B top border, rows separated by #E3DCCB hairlines, even rows #F7F2E8, numbers right-aligned. Content: [PATENT FEATURE MATRIX | PER-UNIT PRICE TABLE] using only the public data I paste below. Highlight one outlier in a gold rule and caption it "Outlier, kept and flagged". Narrate nothing; captions only, each under 10 words. End card 2 s. No em or en dashes. Data: [PASTE ROWS WITH SOURCES AND DATES]
```

**S4 Exploded view**
```
Write a brief for a 15 s product exploded-view animation, to be rendered from my CAD or render [JAD'S OWN RENDER]. Camera: slow 20 degree orbit, locked to 24 fps. Parts separate along one axis over 6 s, hold 3 s, labels fade in as Inter 600 13px #FBF9F3 with a 1px #B8860B leader line. Background flat #133423, no floor, no reflections, no shadows. Label each part with its real name only. End card 2 s. Output: shot list, label list with leader targets, render settings (resolution, FPS, codec), and a 40 word caption for LinkedIn and 25 words for Instagram.
```

**S5 Founder talk**
```
Write a 25 s founder-to-camera script (about 60 words) for [ZOLOMON | JAD], one point only: [POINT]. Open with the answer in the first sentence, no greeting. Include one concrete detail from ZKK's published work (a package, a scope limit or a guide topic). Close with one plain call to action: the discovery call link. Give captions in 3 to 5 chunks of under 8 words. No filler, no jargon, no dashes. Add a shot note: plain cream background, eye-level, window light, green logo bug top-right for the last 2 s.
```

## 5. Post prompts

Cadence (start here, adjust after 6 weeks): LinkedIn company page 3 posts a week (Tue, Wed, Thu). Founders repost and add context, plus 1 own post a week each. Instagram 3 posts a week: 1 reel, 1 carousel, 1 single image.

### 5.1 Prompts

**Founder intro (pin on LinkedIn)**
```
Write a LinkedIn post (under 150 words) in the first person for [ZOLOMON | JAD] introducing ZKK Consulting. First line states what we do: "We run engineering-led product consulting: market, patent, strategic and competitive pricing research, at fixed prices." Then: who it is for, what the client receives, how it works in four steps, one scope limit ("business research, not legal or regulatory advice"). End with the discovery call link. No hashtags in the body, three at the end. No emoji, no em or en dashes, no "excited to announce".
```

**Guide to post (repeat for each of the six insights)**
```
Turn this ZKK guide into one LinkedIn post and one Instagram carousel.
Guide text: [PASTE]
LinkedIn: under 180 words. Line 1 is the answer to the guide's title question. Then 3 short points taken only from the guide, one scope limit, link to the guide. 3 hashtags.
Instagram carousel: 6 slides, 1080x1350. Slide 1: cover (#133423 band, gold eyebrow, Cormorant title). Slides 2 to 5: one point each, cream #F3ECDF, Cormorant heading, Inter body under 25 words. Slide 6: "Read the full guide" + link in bio + white logo on green. Provide alt text for each slide. Caption under 100 words. Use only claims present in the guide. No em or en dashes, no emoji.
```

**Service explainer**
```
Write a LinkedIn post and an Instagram caption explaining [SERVICE, e.g. patent landscape research] to a startup founder. Use only the wording and numbers on https://zkkconsulting.com/[PAGE]/. Structure: the question the buyer has, the direct answer with the price and scope limit, what the deliverable looks like, what it is not, the next step. LinkedIn under 200 words. Instagram caption under 90 words with the link in bio line. No em or en dashes, no emoji.
```

**Sample report spotlight**
```
Write a post about one page of a ZKK sample report: [DESCRIBE PAGE]. Explain in plain terms what the reader learns from it and how the figures are sourced (evidence labels, dates, outliers kept and flagged). Use only the public sample, never a client report. LinkedIn under 150 words, Instagram under 70. Attach the page as a flat image with a 1px #CDBFA3 border. No em or en dashes.
```

**Competitive pricing method**
```
Write a LinkedIn post about how ZKK compares competitor prices: list price versus contract price, per-unit price = pack price / pack size, no averaging, outliers kept and flagged, every row dated and sourced. Use no client name, product name or real client number. Show the method as a 4-line example table with clearly labelled dummy values: "Illustrative values". Under 170 words. End with a question inviting one reply: "What price source do you trust least?"
```

**Engagement question**
```
Write 10 one-line LinkedIn questions for founders of hardware and device startups about market sizing, patent searches, pricing and competitors. Each must be answerable in one sentence, concrete, free of jargon, and tied to a ZKK guide I can link in the first comment. List the guide for each. No em or en dashes, no emoji.
```

**Weekly planner**
```
Given these ZKK pages and guides: [PASTE LIST], plan 4 weeks of posts for LinkedIn (3 a week) and Instagram (3 a week). Table columns: week, day, platform, format (post, carousel, reel S1 to S5), topic, source page, CTA, asset needed. Mix: 40% education from guides, 25% proof (sample pages), 20% service explainers, 15% founder voice. No client names. No claims not on the site.
```

### 5.2 Post rules

1. First line is the answer or the claim. No greeting.
2. One idea per post. One link. One call to action.
3. Link in the first comment on LinkedIn if reach drops; in bio on Instagram.
4. Every number: source and date in the post or the image.
5. Alt text on every image.
6. Hashtags: 3 max on LinkedIn, 5 max on Instagram. Examples: `#MedicalDevices` `#MarketResearch` `#PatentLandscape` `#HardwareStartups` `#ProductStrategy`.
7. Never post a client name, logo or report page without written permission.
8. Reply to every comment within 24 hours.

## 6. Measure

| Metric | Where | Target to review at 6 weeks |
|---|---|---|
| Clicks to site | LinkedIn page analytics, Instagram insights, UTM `?utm_source=linkedin or instagram&utm_medium=social&utm_campaign=[POST]` | Baseline then +25% |
| Discovery calls booked from social | Intake form field "How did you hear about us" | Any |
| Followers who match target (founders, device teams) | LinkedIn follower demographics | Trend up |
| Best format | Compare S1 to S5 and carousels | Keep top 2, drop bottom 2 |

## 7. Jad supplies

1. Instagram handle (or confirm `@zkkconsulting`) and whether the account exists.
2. Founding year, city, and whether to show it.
3. Founder video footage or approval to start with S1 to S3 only.
4. Your own product render for S4.
5. Approval for the intro post wording.

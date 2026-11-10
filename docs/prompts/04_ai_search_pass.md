# Prompt (d): AI-search pass

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

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

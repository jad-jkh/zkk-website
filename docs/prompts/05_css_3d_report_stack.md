# Prompt (e): Build the 3D element with fallbacks

Paste into a Claude Code session in this repo. Read CLAUDE.md first.

```
Build one element only: a "report stack" on the home page hero, right half of the green band (#133423), visible at viewport widths of 900px and up.

Content: three images of ZKK report pages already in the repo: /assets/report/cover.webp, contents.webp, table.webp (PNG fallbacks of the same names via <picture>; AVIF optional). Cover and contents are portrait US Letter (961x1243). table is the landscape appendix page (1243x961): show it at the same card width with its own aspect ratio, no cropping. They are the generic ZKK Word template v22 sample pages. Never use a client's report. Alt text: "ZKK report cover page", "ZKK report contents page", "ZKK report table page".

Technology: CSS 3D transforms only. No Three.js, no canvas, no animation library.
- Wrapper: perspective: 1400px; aspect-ratio reserved so there is no layout shift.
- Three absolutely positioned cards, 1px #CDBFA3 border, no shadow, no radius. Resting state: rotateY(-18deg) rotateX(6deg), cards offset translateZ(0, -40px, -80px) and translateX(0, 28px, 56px).
- Motion: under @media (prefers-reduced-motion: no-preference) and (hover: hover), tilt at most 4 degrees with pointer position and spread cards by up to 12px with scroll progress, using one requestAnimationFrame-throttled listener that writes two CSS custom properties. Under 1 KB of JS, deferred, started by IntersectionObserver, stopped when off screen.
- Fallbacks: without JS or with reduced motion, show the resting state. Under 900px, show only the cover image flat below the hero text, or nothing if it pushes the CTA below the fold.
- The h1 text must remain the LCP element: images are loading="lazy" decoding="async", no fetchpriority.
- No text inside images beyond what is on the report pages. Wrapper is not focusable and has no role. Whole stack is one link to /work/ with aria-label "See sample reports".

Acceptance: CLS 0 from this element; Lighthouse mobile Performance unchanged within 2 points versus the page without it; works with JS disabled; no motion when prefers-reduced-motion is reduce.
```

# Affiliate landing page design QA

- Source visual truth: `tmp/design/affiliate-v2-target.png`
- Implementation evidence: `tmp/design/affiliate-v2-implementation-desktop.png`
- Mobile evidence: `tmp/design/affiliate-v2-implementation-mobile.png`
- Full-view comparison: `tmp/design/affiliate-v2-comparison.png`
- Desktop viewport/state: 1440 × 1024, English default state
- Mobile viewport/state: 390 × 844, English default state

## Findings

- The implementation preserves the selected warm paper poster, oversized green 25%, black brush accent, bold editorial headline, single green CTA, and two-step Share/Earn structure.
- The production site navigation is intentionally retained above the poster; the generated reference only showed the brand mark.
- Supporting copy is intentionally shorter than the generated reference to satisfy the request for a less verbose page.
- Desktop and mobile layouts have no horizontal overflow. The Chinese route was also checked at desktop width and retains the same hierarchy without overflow.
- The CTA resolves to `https://cleanclip.theaffs.com/login`, opens in a new tab, and has a visible keyboard focus treatment.
- The Affiliate component has no observed runtime errors. The local dev server reports an existing template error in the unrelated `src/docs/cleanclip/mac/features/main-window-collection-lists.md`; the full production build completes successfully.

## Iteration history

1. Removed the theme's 960px documentation wrapper so the poster renders full width.
2. Restored the three-line headline hierarchy and forced the selected 25% typography to win over the theme's generic `h1` rule.
3. Restored Ant Design icon visibility and enlarged the generated brush asset for a closer match to the reference.
4. Rechecked desktop, mobile, English, and Chinese states.

Final result: passed

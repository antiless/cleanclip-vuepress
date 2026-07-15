# Affiliate landing page design QA

- Source visual truth: selected warm-paper poster direction from the approved Imagegen option
- Implementation evidence: verified in the local production build with browser-computed layout metrics
- Desktop viewport/state: 1280 × 720, English and Arabic states
- Mobile viewport/state: 390 × 844, English default state

## Findings

- The implementation preserves the selected warm paper poster, oversized green 25%, black brush accent, bold editorial headline, single green CTA, and two-step Share/Earn structure.
- The production site navigation is intentionally retained above the poster; the generated reference only showed the brand mark.
- Supporting copy is intentionally shorter than the generated reference to satisfy the request for a less verbose page.
- Desktop and mobile layouts have no horizontal overflow. English, German, Japanese, Korean, and Arabic were visually checked as representative Latin, CJK, Hangul, and RTL states.
- English and British English headlines use a restrained positive `0.01em` tracking value. At the mobile title size this resolves to `0.64px`, keeping “Share CleanClip. Keep 25%.” readable without making the poster feel loose.
- Arabic keeps its RTL reading direction while the CleanClip product line remains LTR. At 1280px the copy and oversized rate retain a 12.8px gap.
- The Chinese title and oversized decorative rate are separated at narrow-desktop widths. At the reported 992px CSS viewport, the original 37.2px overlap is replaced by a 32.3px gap without shrinking or reflowing the headline.
- The CTA resolves to `https://cleanclip.theaffs.com/login`, opens in a new tab, and has a visible keyboard focus treatment.
- All nine supported locales (`en`, `zh`, `ar`, `de`, `gb`, `jp`, `ko`, `se`, and `sk`) have a localized Affiliate route. Each locale footer points to its own route and shows the current 25% commission.
- The Affiliate component has no observed runtime errors. The local dev server reports an existing template error in the unrelated `src/docs/cleanclip/mac/features/main-window-collection-lists.md`; the full production build completes successfully.

## Iteration history

1. Removed the theme's 960px documentation wrapper so the poster renders full width.
2. Restored the three-line headline hierarchy and forced the selected 25% typography to win over the theme's generic `h1` rule.
3. Restored Ant Design icon visibility and enlarged the generated brush asset for a closer match to the reference.
4. Added all supported locale routes and localized page content, including RTL handling for Arabic.
5. Replaced the overly tight English `-0.07em` tracking with `0.01em` across the full headline.
6. Rechecked desktop/mobile layouts, all generated routes, localized footer destinations, and the TheAffs CTA.
7. Added Chinese-only decorative-rate offsets around the 1050px layout breakpoint and verified both sides of the title-wrap threshold.

Final result: passed

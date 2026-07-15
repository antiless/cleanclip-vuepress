# CleanClip Official Website

This repository contains the VuePress 1 source for the CleanClip official website at [cleanclip.cc](https://cleanclip.cc). Site content lives in `src/`, with language-specific pages under their locale directories.

## Development

Use Node.js 14–17, as required by `package.json`.

```bash
yarn install
yarn dev
```

Create the production build with:

```bash
yarn build
```

## Affiliate integration

- **Done:** The TheAffs Affiliate SDK is loaded site-wide for product `prod_64143075d697`, with attribution cookies scoped to `cleanclip.cc`; the network and privacy documentation describes the integration.
- **Done:** Pricing links preserve campaign parameters, and the Dashboard reads the shared domain cookies server-side before copying the attribution into Stripe metadata for every Checkout path.
- **Done:** `/affiliate` and every supported locale route (`/ar`, `/de`, `/gb`, `/jp`, `/ko`, `/se`, `/sk`, `/zh`) present the current 25% program as a compact editorial landing page. Every localized footer points to its matching Affiliate page, and the page links applicants to the CleanClip product context in TheAffs.
- **Planned:** Expose a public product catalog so the pricing page no longer duplicates Stripe lookup-key mappings.

## Analytics

- **Done:** DataFast loads site-wide with website ID `dfid_QVP3FPOwhUM7NkCb0YpIg` and domain scope `cleanclip.cc`, so visitor and session attribution is shared with CleanClip subdomains.
- **Done:** The marketing site records pricing intent (`view_pricing`) and DMG acquisition (`download_started`) with source and destination paths.
- **Done:** The pricing site records plan exposure, checkout intent by plan, FAQ engagement, and sales-support contact; the Dashboard copies DataFast visitor/session IDs into Stripe Checkout metadata for revenue attribution.
- **Planned:** Connect the CleanClip Stripe account in DataFast and configure the `view_pricing → initiate_checkout → payment` funnel in the DataFast dashboard.

## Update log

- 2026-07-15 — Added DataFast across the marketing and pricing sites, conversion events, and Stripe Checkout attribution metadata.
- 2026-07-15 — Expanded the Affiliate landing page to all nine supported locales, routed every localized footer to the matching page, and relaxed display-title tracking for clearer reading.
- 2026-07-15 — Redesigned the Affiliate page around one 25% offer, one CTA and a two-step Share/Earn explanation, with new Imagegen paper and brush assets.
- 2026-07-15 — Added the English and Chinese Affiliate landing pages, generated hero artwork, corrected the public commission copy, and replaced the legacy affiliate destination.
- 2026-07-14 — Added the domain-scoped TheAffs SDK and documented checkout attribution.

# Connectora landing site

Static, pre-rendered marketing site for Connectora (11 pages). It uses the growthmak.com design system: Manrope, the blue `#0787fe` token set, the pill nav, Lenis smooth scroll, reveal-on-scroll, the line-split H1, the custom blend cursor, magnetic CTAs, tilted marquees, 3D stacking cards, the animated funnel, accordions, the dark CTA band and the footer wordmark sweep.

Every page is plain HTML in the first response, so AI crawlers that don't run JavaScript can read all the copy. There are no runtime dependencies. The only third-party scripts are Lenis (vendored locally) and the Cal.com embed on `/book-a-demo`.

## Run locally

```bash
npm run dev          # builds to dist/ and serves http://localhost:4321
```

Requires Node 18+. No `npm install` needed.

## Build for production

```bash
SITE_URL=https://your-domain.com npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3). Pages are written as `features.html` and so on, and served at clean URLs (`/features`). On Vercel, the root `vercel.json` sets the build command (`node build.mjs`), the output folder (`dist`) and clean URLs, so leave the Vercel project settings on their defaults. Netlify and Cloudflare Pages: build command `node build.mjs`, output folder `dist`.

> If `SITE_URL` is not set, every page is built `noindex` and `robots.txt` blocks crawling. This stops an unconfigured preview from ever being indexed.

The build also generates `sitemap.xml`, `robots.txt` (with the AI crawlers allowed and the app routes disallowed), `llms.txt`, `404.html`, canonical tags, Open Graph and Twitter tags, and each page's JSON-LD from the content briefs.

## Where things live

| Path | What |
|---|---|
| `site.config.mjs` | Domain, author, demo length, client quotes, Cal.com link |
| `src/pages/*.mjs` | One file per page: SEO fields, copy, JSON-LD |
| `src/ui.mjs` | Header, footer, page shell and shared components |
| `src/mocks.mjs` | HTML/CSS product mockups used in place of screenshots |
| `public/assets/css/site.css` | Design system and all styles |
| `public/assets/js/site.js` | Interactions and animations |

## Before launch

Pricing (prices live in `site.config.mjs` → `plans`; never publish costs, margins, discount floors or the Founding Partner offer):
- [ ] Tier boundaries: 11 accounts ($198) cost less than 10 ($210), and 51 ($765) less than 50 ($900). Keep it, or bill each band at its own rate.
- [ ] INR annual prices: add `inrAnnual` per plan. Until then the INR + Annual view shows the USD annual price.
- [ ] Confirm annual billing should be public, and the taxes line (e.g. 18% GST for Indian customers).
- [ ] White-label: confirm what it covers and whether Scale includes it. Today the site says Agency only.
- [ ] Not on the site until confirmed: how mid-cycle account changes are billed, whether paused accounts are billed, payment methods.
- [ ] "Unlimited campaigns and sequences": confirm this is how you want to package it.
- [ ] Direct access: `directContact.title` in `site.config.mjs` shows under Hari Prasad's name. Change it to a real job title if you want one.


- [ ] Set `SITE_URL` (it replaces `{{SITE_URL}}` everywhere).
- [ ] Confirm `org.city` (Bengaluru) and add `legalName` to the About schema once the legal entity is confirmed.
- [ ] Add client quotes to `clientQuotes` (written permission only). Until then the quote area is hidden.
- [ ] Cal.com event: add the suggested booking questions from the brief (accounts, targets, current tool).
- [ ] Unibox FAQ: confirm company context and tone rules are set up per client during onboarding, then extend the answer (TODO in `src/pages/05-unibox.mjs`).
- [ ] Re-check competitor prices on the publish day and update `pricesChecked`.
- [ ] Privacy Policy and Terms: not built. Add them and link them from the footer.
- [ ] `/unibox` is both a marketing page and an app route. If the app and this site share a domain, move one of them.
- [ ] Replace the mockups with real, blurred screenshots if you prefer. The alt text from the briefs is already on each mockup.
- [ ] Logo: `brand-mark` in `src/ui.mjs` and `public/assets/img/favicon.svg` are placeholders. Swap them for the official Connectora logo.

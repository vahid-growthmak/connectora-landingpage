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

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3). Pages are written as `features.html` and so on, and served at clean URLs (`/features`). `vercel.json` handles this on Vercel; Netlify and Cloudflare Pages do it by default.

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

- [ ] Set `SITE_URL` (it replaces `{{SITE_URL}}` everywhere).
- [ ] Set `author` in `site.config.mjs` for the Safety and Compare articles.
- [ ] Confirm `org.city` (Bengaluru) and add `legalName` to the About schema once the legal entity is confirmed.
- [ ] Add client quotes to `clientQuotes` (written permission only). Until then the quote area is hidden.
- [ ] Cal.com event: its description says "You'll get the 7-day free trial of this product", but the site says the trial is a guided demo (FAQ, Compare table). Align one or the other.
- [ ] Cal.com event: add the suggested booking questions from the brief (accounts, targets, current tool).
- [ ] Unibox FAQ: confirm company context and tone rules are set up per client during onboarding, then extend the answer (TODO in `src/pages/05-unibox.mjs`).
- [ ] Use cases FAQ: confirm "no fixed limit on connected accounts" fits your plans.
- [ ] Re-check competitor prices on the publish day and update `pricesChecked`.
- [ ] Privacy Policy and Terms: not built. Add them and link them from the footer.
- [ ] `/unibox` is both a marketing page and an app route. If the app and this site share a domain, move one of them.
- [ ] Replace the mockups with real, blurred screenshots if you prefer. The alt text from the briefs is already on each mockup.
- [ ] Logo: `brand-mark` in `src/ui.mjs` and `public/assets/img/favicon.svg` are placeholders. Swap them for the official Connectora logo.

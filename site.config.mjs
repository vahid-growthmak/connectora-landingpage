// Central site settings. Everything marked TODO needs a real value before launch.
export default {
  // TODO: the live landing-page address, no trailing slash (e.g. "https://connectora.example").
  // Can also be supplied at build time: SITE_URL=https://... npm run build
  // While this is empty, every page is built with <meta name="robots" content="noindex">
  // so an unconfigured preview can never be indexed.
  siteUrl: process.env.SITE_URL || '',

  name: 'Connectora',
  tagline: 'LinkedIn Outreach. Real Connections. Better Results.',
  themeColor: '#0787fe',

  org: {
    name: 'Growthmak',
    url: 'https://growthmak.com/',
    email: 'info@growthmak.com',
    linkedin: 'https://www.linkedin.com/company/growthmak',
    instagram: 'https://www.instagram.com/growthmak',
    // TODO (About page): confirm city before launch.
    city: 'Bengaluru',
    region: 'Karnataka',
    country: 'IN',
  },

  // Author of the Safety and Compare articles (E-E-A-T signal). Rendered as "By Aakash MK (CEO, Growthmak)".
  author: { name: 'Aakash MK', role: 'CEO', linkedin: 'https://www.linkedin.com/in/aakashmk/' },

  // Direct access without a demo: shown on Book a Demo, Pricing and in every closing CTA.
  directContact: {
    name: 'Hari Prasad',
    // TODO: add a job title if you want one shown under the name, e.g. 'Head of Growth, Growthmak'.
    title: 'Connectora team, Growthmak',
    photo: '/assets/img/hari-prasad.jpg',
    phoneDisplay: '+91 83418 86288',
    whatsapp: '918341886288',
    message: "Hi Hari, I'd like direct access to Connectora without a demo.",
  },

  // Public list prices (per LinkedIn sender account per month). Decided 17 Sep 2026.
  // TODO: add INR annual prices (inrAnnual) once confirmed; until then INR shows monthly prices only.
  plans: [
    { name: 'Starter', accounts: '1 to 2', min: 1, max: 2, usd: 24, usdAnnual: 19, inr: '2,299', bestFor: 'Founders and consultants', copy: 'For one or two LinkedIn profiles. Every feature, safe defaults, AI reply drafts.' },
    { name: 'Growth', accounts: '3 to 10', min: 3, max: 10, usd: 21, usdAnnual: 17, inr: '1,999', bestFor: 'Sales and SDR teams', copy: 'Pool 3 to 10 accounts behind shared campaigns with one inbox for every reply.', popular: true },
    { name: 'Agency', accounts: '11 to 50', min: 11, max: 50, usd: 18, usdAnnual: 14, inr: '1,699', bestFor: 'Agencies, includes white-label', copy: '11 to 50 accounts across client campaigns, with white-label included.' },
    { name: 'Scale', accounts: '51 or more', min: 51, max: null, usd: 15, usdAnnual: 12, inr: '1,449', bestFor: 'Large agencies and sales floors', copy: '51 accounts or more. Talk to us about onboarding at scale.' },
  ],

  publishDate: '2026-10-01',
  pricesChecked: '1 October 2026',

  // TODO (Book a demo): confirm demo length.
  demoLength: '30 minutes',

  // Client quotes render on Home and About only when provided, and only with written permission.
  // Shape: { quote: '', name: '', role: '', company: '' }
  clientQuotes: [],

  cal: {
    namespace: 'connectora-growthmak',
    link: 'hari-prasad-f7p0ww/connectora-growthmak',
  },
};

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

  // TODO: real author for the Safety and Compare articles (E-E-A-T signal).
  // While name is empty, bylines read "By the Growthmak team" and the schema author is the Organization.
  author: { name: '', role: '', linkedin: '' },

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

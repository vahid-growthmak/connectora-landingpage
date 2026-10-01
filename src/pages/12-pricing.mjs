import config from '../../site.config.mjs';
import { btn, demoBtn, secHead, pageHero, blockSection, splitSection, faqSection, closingCta, directAccess, waLink } from '../ui.mjs';
import { planCards, planTable, examplesTable, heyreachTable, annualTable, includedList, PRICE_ANSWER } from '../pricing.mjs';

const faqs = [
  { q: 'Is there a free trial?', a: `Yes. Connectora comes with a 7-day free trial. <a href="/book-a-demo">Book a short demo</a> to get access, or if you want to try it without a demo, <a href="${waLink()}" target="_blank" rel="noopener">message ${config.directContact.name} on WhatsApp</a> for direct access.` },
  { q: 'Can I add or remove LinkedIn accounts later?', a: 'Yes. Your price follows the number of connected accounts and moves to the matching plan.' },
  { q: 'Do you charge per message or per lead?', a: 'No. There are no message, lead or campaign credits. You pay per LinkedIn account; daily limits per account keep sending safe.' },
  { q: 'Is white-label available?', a: 'Yes, on the Agency plan (11 to 50 accounts).' },
];

export default {
  slug: '/pricing',
  file: 'pricing.html',
  nav: 'pricing',
  title: 'Connectora Pricing: From $15 per LinkedIn Account a Month',
  llmsTitle: 'Pricing',
  description: 'Per-account pricing for LinkedIn outreach: $24, $21, $18 or $15 per sender account a month by team size, lower on annual billing. All features included.',

  body: () => `
<section class="page-hero" data-page-hero data-pricing>
  <div class="container">
    <nav aria-label="Breadcrumb" class="breadcrumb mb-7" data-reveal><ol><li><a class="ul-link" href="/">Home</a></li><li><span class="sep" aria-hidden="true">/</span><span aria-current="page">Pricing</span></li></ol></nav>
    <div style="max-width:60rem">
      <span class="eyebrow" data-reveal>Pricing</span>
      <h1 class="t-display-sm split-lines mt-5">Connectora pricing: pay per LinkedIn account, <span class="serif">every feature included</span></h1>
      <p class="lead" data-reveal style="--reveal-delay:120ms">One simple rule: you pay for each LinkedIn account that sends outreach. The more accounts you run, the less each one costs. No feature gates, no message credits.</p>
    </div>
    <div class="price-controls" data-reveal style="--reveal-delay:200ms">
      <div class="seg" role="group" aria-label="Billing period">
        <button type="button" data-set="billing:monthly" aria-pressed="true">Monthly</button>
        <button type="button" data-set="billing:annual" aria-pressed="false">Annual<em>save up to 21%</em></button>
      </div>
      <div class="seg" role="group" aria-label="Currency">
        <button type="button" data-set="currency:usd" aria-pressed="true">USD</button>
        <button type="button" data-set="currency:inr" aria-pressed="false">INR</button>
      </div>
    </div>
    ${planCards()}
    <p class="table-note text-center" data-reveal>Prices exclude applicable taxes. Annual plans are billed once a year. Book a demo to start a 7-day free trial.</p>
    <div class="mt-10">${directAccess({ heading: 'Want to try it right now, without a demo?' })}</div>
  </div>
</section>

${blockSection({
  id: 'how-much-does-connectora-cost',
  head: secHead({ kicker: 'Plans', h2: 'How much does <span class="serif">Connectora cost?</span>', answer: `<strong>${PRICE_ANSWER}</strong>` }),
  content: planTable() + `<p class="table-note">Prices exclude applicable taxes. Annual plans are billed once a year.</p>`,
})}

${blockSection({
  id: 'whats-included',
  head: secHead({ kicker: 'Every plan', h2: 'What is included in <span class="serif">every Connectora plan?</span>', answer: '<strong>Every Connectora plan includes the full product: multi-account campaigns, connection and follow-up sequences, plan-ahead scheduling, per-account safety controls and warm-up, paced invite withdrawals, Sales Navigator and post-engager lead sourcing, the Unibox with AI reply drafts, campaign analytics and CRM webhooks. There are no message credits or feature tiers.</strong>' }),
  content: includedList([
    'Unlimited campaigns and sequences',
    '<a class="inline-link" href="/features#multi-account">Multi-account sending</a> with pooled daily limits',
    'Plan-ahead scheduling with a send time for every lead',
    'Daily limits, warm-up, safety score and automatic back-off (<a class="inline-link" href="/linkedin-account-safety">safety controls</a>)',
    'Paced manual and automatic invite withdrawals',
    'Lead sourcing from CSV or Excel, Sales Navigator searches and LinkedIn posts',
    '<a class="inline-link" href="/unibox">Unibox for every account</a>, with Hold &amp; Resume and AI reply drafts',
    'Funnel analytics and per-lead timelines',
    'Signed webhooks to Zapier, Make and any CRM',
    'Agency plan: white-label',
  ]) + `<p class="mt-8 text-muted">Every feature in detail: <a class="inline-link" href="/features">Features</a>.</p>`,
})}

${blockSection({
  id: 'how-price-is-calculated',
  head: secHead({ kicker: 'Examples', h2: 'How is my monthly <span class="serif">price calculated?</span>', answer: "<strong>Count the LinkedIn accounts you connect to send outreach, find the plan for that number, and multiply. All accounts are billed at that plan's rate. For example, 5 accounts on the Growth plan cost 5 × $21 = $105 a month, or 5 × $17 = $85 a month on annual billing.</strong>" }),
  content: examplesTable() + `<div class="disclosure mt-6"><strong>What counts as an account?</strong> Each LinkedIn account connected to Connectora counts as one account, whether it sends for one campaign or ten.</div>`,
})}

${blockSection({
  id: 'compared-with-heyreach',
  head: secHead({ kicker: 'Vs HeyReach', h2: 'How does Connectora pricing compare <span class="serif">with HeyReach?</span>', answer: "<strong>At list monthly prices, Connectora costs 55% to 73% less than HeyReach for teams running 1 to 25 LinkedIn accounts. Ten accounts cost $210 a month on Connectora and $790 on HeyReach's Growth plan; 25 accounts cost $450 on Connectora and $999 on HeyReach's Agency plan.</strong>" }),
  content: heyreachTable() + `<p class="table-note">HeyReach prices from its <a href="https://www.heyreach.io/pricing" target="_blank" rel="noopener">pricing page</a>, checked ${config.pricesChecked}. For very large fleets, roughly 200 accounts or more, HeyReach's Unlimited plan ($2,999 a month) can cost less per sender. Full feature comparison: <a href="/compare">Compare</a>.</p>`,
})}

${blockSection({
  id: 'monthly-or-annual',
  head: secHead({ kicker: 'Billing', h2: 'Monthly or annual: <span class="serif">which should I choose?</span>', answer: '<strong>Choose monthly billing if you are testing LinkedIn outreach or your account count changes often. Choose annual billing once your setup is stable: it lowers the price per account by $3 to $5 a month, up to 21% less than monthly billing on the Starter plan.</strong>' }),
  content: annualTable(),
})}

${faqSection(faqs)}

${closingCta({
  heading: 'Find the right plan in one short call',
  body: "Tell us how many LinkedIn accounts you run. We'll show you Connectora on your targets and set up the plan that fits.",
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': '{{SITE_URL}}/pricing#webpage',
        url: '{{SITE_URL}}/pricing',
        name: 'Connectora Pricing: From $15 per LinkedIn Account a Month',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': '{{SITE_URL}}/#connectora',
        name: 'Connectora',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web browser',
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
        offers: config.plans.map((p) => ({
          '@type': 'Offer',
          name: p.name,
          url: '{{SITE_URL}}/pricing',
          priceCurrency: 'USD',
          price: p.usd.toFixed(2),
          eligibleQuantity: { '@type': 'QuantitativeValue', minValue: p.min, ...(p.max ? { maxValue: p.max } : {}), unitText: 'LinkedIn account' },
          priceSpecification: { '@type': 'UnitPriceSpecification', price: p.usd.toFixed(2), priceCurrency: 'USD', unitText: 'per LinkedIn account per month', billingDuration: 'P1M' },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does Connectora cost?', acceptedAnswer: { '@type': 'Answer', text: 'Connectora costs $24 per LinkedIn sender account per month for 1 to 2 accounts, $21 for 3 to 10, $18 for 11 to 50 and $15 for 51 or more. Annual billing lowers these to $19, $17, $14 and $12. Every plan includes every feature.' } },
          { '@type': 'Question', name: 'How does Connectora pricing compare with HeyReach?', acceptedAnswer: { '@type': 'Answer', text: "At list monthly prices, Connectora costs 55% to 73% less than HeyReach for 1 to 25 LinkedIn accounts. Ten accounts cost $210 a month on Connectora and $790 on HeyReach's Growth plan; 25 accounts cost $450 on Connectora and $999 on HeyReach's Agency plan." } },
          { '@type': 'Question', name: 'Does Connectora charge per message or per lead?', acceptedAnswer: { '@type': 'Answer', text: 'No. There are no message, lead or campaign credits. You pay per LinkedIn account.' } },
          { '@type': 'Question', name: 'Does Connectora offer white-label?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, on the Agency plan for 11 to 50 LinkedIn accounts.' } },
          { '@type': 'Question', name: 'Is there a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connectora comes with a 7-day free trial. Book a short demo to get access, or message the Connectora team on WhatsApp for direct access without a demo.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: '{{SITE_URL}}/pricing' },
        ],
      },
    ],
  }),
};

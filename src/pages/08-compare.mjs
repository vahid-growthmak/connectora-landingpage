import config from '../../site.config.mjs';
import { heyreachTable } from '../pricing.mjs';
import { demoBtn, btn, secHead, pageHero, byline, blockSection, stickySection, checklist, faqSection, closingCta, schemaAuthor } from '../ui.mjs';

const TOOLS = ['Connectora', 'HeyReach', 'Expandi', 'Waalaxy', 'Dripify'];
const ROWS = [
  ['Pricing model', 'Per sender account, cheaper per account as you add more', 'Per sender, or flat agency plans', 'Per seat', 'Per user', 'Per user'],
  ['Listed entry price', '$24 per account per month (1 to 2 accounts), down to $15 at 51+; from $12 billed annually', '$79 per sender per month (Growth, monthly)', '$99 per month ($79 billed annually)', 'From €19 per user per month (Pro)', '$59 per user per month ($39 billed annually)'],
  ['Free trial', '7 days, starts with a short demo', '14 days, no card', '7 days', '14 days', '7 days, no card'],
  ['Runs in the cloud', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Shared inbox', 'Yes, Unibox (included)', 'Yes, Unified Inbox', 'Yes, Global Inbox', 'Paid add-on (LinkedIn Inbox)', 'Yes, from Pro plan'],
  ['Email outreach', 'No, LinkedIn-focused', 'Through Instantly and Smartlead integrations', 'Yes, email follow-ups', 'Yes, on Business plan', 'Yes'],
  ['CRM and webhooks', 'Signed webhooks (Zapier, Make, any CRM)', 'API, webhooks, HubSpot, Clay and more', 'Integrations', 'CRM sync; Zapier, Make and n8n from Advanced', 'Webhook, Zapier and HubSpot from Pro'],
  ['Notable limits or extras', 'Default 20 invites per account per day; AI drafts with human approval; white-label on Agency plan (11 to 50 accounts)', 'Agency plan: 25 senders for $999 per month; white-label', 'Dedicated country-based IP; auto warm-up', 'Pro: 300 invites per month; Advanced and Business: 800 per month', 'Basic: 20 connection requests per day; Pro: up to 75'],
];
const SRC = [
  ['HeyReach pricing', 'https://www.heyreach.io/pricing'],
  ['Expandi pricing', 'https://expandi.io/pricing/'],
  ['Expandi Global Inbox', 'https://help.expandi.io/en/articles/5405235-global-inbox'],
  ['Waalaxy pricing', 'https://www.waalaxy.com/pricing'],
  ['Waalaxy is now fully cloud-based', 'https://intercom.help/waalaxy/en/articles/15587366-waalaxy-is-now-fully-cloud-based'],
  ['Dripify pricing', 'https://dripify.com/pricing/'],
];

const compareTable = () => `
<p class="swipe-hint">Swipe to compare all five tools <svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" width="14" height="14"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></p>
<div class="table-wrap keep-scroll" role="region" tabindex="0" aria-label="LinkedIn automation tools compared">
  <table class="data-table compare-table">
    <caption class="sr-only">Connectora, HeyReach, Expandi, Waalaxy and Dripify compared on pricing, trial, inbox, email, integrations and limits</caption>
    <thead><tr><th scope="col"><span class="sr-only">Criterion</span></th>${TOOLS.map((t, i) => `<th scope="col"${i === 0 ? ' class="is-us"' : ''}>${t}</th>`).join('')}</tr></thead>
    <tbody>${ROWS.map(([label, ...cells]) => `<tr><th scope="row">${label}</th>${cells.map((c, i) => `<td${i === 0 ? ' class="is-us"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
</div>
<p class="table-note">Sources: ${SRC.map(([l, h]) => `<a href="${h}" target="_blank" rel="noopener">${l}</a>`).join(' · ')}. Prices exclude tax and change often; check each vendor before buying.</p>`;

const VS = [
  {
    id: 'vs-heyreach', tool: 'HeyReach',
    h2: 'Connectora vs HeyReach: which should you choose?',
    answer: 'Choose HeyReach if you run very large sender fleets on one flat plan (up to 300 senders for $2,999 a month), want a self-serve 14-day trial, or need its API and MCP server. Choose Connectora for 1 to 25 accounts: it costs 55% to 73% less and adds Hold &amp; Resume and a private shared inbox.',
    strengths: ['HeyReach strengths (from its pricing page)', 'sender rotation at scale, Unified Inbox, API and webhooks, MCP server, white-label on Agency plans, 14-day trial.'],
    differs: '$18 to $24 per account a month for up to 50 accounts, versus $79 per sender on HeyReach Growth; white-label from 11 accounts; LinkedIn-only focus; safety defaults and plan-ahead scheduling visible per lead.',
  },
  {
    id: 'vs-expandi', tool: 'Expandi',
    h2: 'Connectora vs Expandi: which should you choose?',
    answer: 'Choose Expandi if you want LinkedIn and email follow-ups in one sequence, a dedicated country-based IP and automatic warm-up on a published per-seat price. Choose Connectora if you mainly prospect on LinkedIn across several accounts and want pooled limits, reply holds and AI-drafted replies approved by a person.',
    strengths: ['Expandi strengths (from its pricing page)', 'cloud-based, dedicated IP, profile auto warm-up, email follow-ups, Global Inbox, agency plan for 10+ seats.'],
    differs: 'warm-up is opt-in only for genuinely new accounts; campaigns pool capacity across many senders by default.',
  },
  {
    id: 'vs-waalaxy', tool: 'Waalaxy',
    h2: 'Connectora vs Waalaxy: which should you choose?',
    answer: 'Choose Waalaxy if you are a solo user or small team that wants the lowest published entry price and simple self-serve sequences. Choose Connectora if you need one campaign to send from several LinkedIn accounts with a shared inbox included, rather than an inbox add-on and monthly invitation quotas per user.',
    strengths: ['Waalaxy strengths (from its pricing page)', 'low entry price, 14-day trial, email sequences on Business, Zapier, Make and n8n on Advanced, now fully cloud-based.'],
    differs: 'multi-account campaigns and the Unibox are core features, not add-ons.',
  },
  {
    id: 'vs-dripify', tool: 'Dripify',
    h2: 'Connectora vs Dripify: which should you choose?',
    answer: 'Choose Dripify if you want straightforward per-user drip campaigns with published daily quotas, A/B testing and team management on the Advanced plan. Choose Connectora if you run outreach across several accounts and care most about safe pacing, reply holds and a private, shared inbox with AI drafts.',
    strengths: ['Dripify strengths (from its pricing page)', 'simple plans, LinkedIn and email sequences, A/B testing and multi-team management on Advanced, HubSpot and Zapier from Pro.'],
    differs: 'conservative 20-per-day default and automatic back-off rather than higher published daily quotas.',
  },
];

const faqs = [
  { q: 'Is Connectora cheaper than HeyReach?', a: 'Yes, for most team sizes. At list monthly prices, 10 accounts cost $210 a month on Connectora and $790 on HeyReach\'s Growth plan; 25 accounts cost $450 and $999 on HeyReach\'s Agency plan. Above roughly 200 accounts, HeyReach\'s $2,999 Unlimited plan can work out cheaper. <a href="/pricing">See pricing</a>.' },
  { q: 'Which LinkedIn automation tool is the safest?', a: "No tool can make automation risk-free, because LinkedIn's terms restrict it. Compare default limits, back-off behaviour and reply handling. Connectora defaults to 20 invitations per account per day and pauses an account as soon as LinkedIn signals a limit." },
  { q: 'Can I switch from HeyReach, Expandi, Waalaxy or Dripify to Connectora?', a: 'Yes. Upload your lead lists, import active conversations with <a href="/unibox#import-chat">Import Chat</a>, and pause the old tool before launching so nobody is messaged twice.' },
  { q: 'Does Connectora do email outreach like the others?', a: 'No. Connectora focuses on LinkedIn. If you need LinkedIn and email in one sequence today, Expandi, Waalaxy (Business), Dripify or HeyReach with an email integration may suit you better.' },
];

export default {
  slug: '/compare',
  file: 'compare.html',
  nav: 'compare',
  ogType: 'article',
  title: 'Connectora vs HeyReach, Expandi, Waalaxy, Dripify (2026)',
  llmsTitle: 'Compare LinkedIn automation tools',
  description: 'An honest 2026 comparison of LinkedIn automation tools: pricing, trials, inboxes, email and safety approach, plus when each tool is the better choice.',

  body: () => `
${pageHero({
  crumb: 'Compare',
  kicker: 'Compare',
  wide: true,
  h1: 'Connectora vs HeyReach, Expandi, Waalaxy and Dripify: <span class="serif">an honest comparison</span>',
  lead: `${byline(`Prices checked on ${config.pricesChecked}`)}
  <p class="disclosure"><strong>Disclosure:</strong> We build Connectora, so read this with that in mind. We have kept competitor facts to what each vendor publishes on its own website, linked every one, and included a section on when each competitor is the better choice.</p>`,
  ctas: `${btn({ href: '#side-by-side', label: 'Jump to the table', variant: 'ghost' })}${demoBtn({ magnetic: true })}`,
})}

<section class="section" id="best-tool-2026">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">The short answer</span>
      <h2 class="t-h2 mt-5">What is the best LinkedIn automation tool <span class="serif">in 2026?</span></h2>
      <p class="answer mt-6"><strong>There is no single best LinkedIn automation tool; it depends on your team. HeyReach suits agencies that want self-serve sender rotation and white-label at scale. Expandi bundles LinkedIn and email with dedicated IPs. Waalaxy is the low-cost entry point. Dripify offers simple per-user drip campaigns. Connectora suits teams that put account safety and reply handling first.</strong></p>
    </div>
  </div>
</section>

${blockSection({
  id: 'side-by-side',
  head: secHead({ kicker: 'Side by side', h2: 'How do the tools compare <span class="serif">side by side?</span>', answer: '<strong>All five tools run in the cloud and offer some form of shared inbox. They differ most in price, email support and approach to safety. Connectora and HeyReach price per LinkedIn sender account; Expandi, Waalaxy and Dripify price per seat or user. Connectora is LinkedIn-focused, while the other four also offer email outreach.</strong>' }),
  content: compareTable(),
})}

${blockSection({
  id: 'cost-vs-heyreach',
  head: secHead({ kicker: 'Cost', h2: 'How much does Connectora cost <span class="serif">compared with HeyReach?</span>', answer: "<strong>At list monthly prices, Connectora costs 55% to 73% less than HeyReach for teams running 1 to 25 LinkedIn accounts. Ten accounts cost $210 a month on Connectora and $790 on HeyReach's Growth plan; 25 accounts cost $450 on Connectora and $999 on HeyReach's Agency plan.</strong>" }),
  content: heyreachTable() + `<p class="table-note">For very large fleets, roughly 200 accounts or more, HeyReach's Unlimited plan ($2,999 a month) can cost less per sender. Connectora plans and annual prices: <a href="/pricing">Pricing</a>. HeyReach figures from its <a href="https://www.heyreach.io/pricing" target="_blank" rel="noopener">pricing page</a>, checked ${config.pricesChecked}.</p>`,
})}

${stickySection({
  id: 'what-makes-connectora-different',
  kicker: 'Connectora',
  h2: 'What makes <span class="serif">Connectora</span> different?',
  answer: '<strong>Connectora\'s differences sit in how campaigns behave, not in headline volume. It plans an exact send time for every lead, re-checks for a reply before every follow-up, holds leads who answer your connection note, keeps personal chats out of the shared inbox, drips invite withdrawals slowly, and drafts AI replies that only a human can send.</strong>',
  content: `<div class="row-list">${[
    ['<a class="inline-link" href="/features#plan-ahead-scheduling">Plan-ahead scheduling.</a>', 'Every lead shows its planned time and sender, and waits are explained in plain English.'],
    ['Reply check before each follow-up.', 'A last look at the conversation right before sending.'],
    ['<a class="inline-link" href="/unibox#hold-and-resume">Hold &amp; Resume.</a>', 'Replies to your connection note pause the lead for a personal response instead of ending it.'],
    ['<a class="inline-link" href="/unibox#privacy">Private by design.</a>', 'Only outreach conversations appear in the Unibox.'],
    ['Paced withdrawals.', 'Up to 25 per account per day by default, oldest first; 1,000 becomes about a 40-day drip.'],
    ['Human-approved AI.', 'Three drafts per click, four goals, never auto-sent.'],
    ['Built and supported by a growth agency.', 'Growthmak runs its own outreach on Connectora and helps you set up targeting, sequences and a safe pace.'],
    ['Lower cost per account.', 'From $24 down to $15 per LinkedIn account a month, every feature included. See <a class="inline-link" href="/pricing">pricing</a>.'],
  ].map(([t, d], i) => `<article class="row-item row-link"><span class="num">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div>`,
})}

<section class="section" id="head-to-head">
  <div class="container stack">
    <div class="stack-head" data-reveal>
      <span class="kicker">Head to head</span>
      <p class="t-h2 mt-5" style="font-weight:600">When each tool is <span class="serif">the better choice</span></p>
    </div>
    <ul class="stack-list">
      ${VS.map((v, i) => `
      <li class="stack-slot" style="top:calc(var(--stack-top) + ${(i * 0.9).toFixed(2)}rem);z-index:${i + 1}">
        <article class="stack-card panel-dark" id="${v.id}">
          <div class="stack-card-grid">
            <div class="stack-card-copy">
              <div class="stack-card-top"><span class="num">0${i + 1}</span><span class="rule"></span><span class="tag">Connectora vs ${v.tool}</span></div>
              <h2 style="margin-top:2rem;font-size:clamp(1.5rem,2.4vw,2rem);font-weight:600;letter-spacing:-0.02em;color:#fff">${v.h2}</h2>
              <p><strong style="color:#ffffffd9;font-weight:500">${v.answer}</strong></p>
            </div>
            <div class="stack-card-copy" style="padding-top:0">
              <div class="mini" style="max-width:none">
                <p style="margin:0;color:#9fd0ff;font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em">${v.strengths[0]}</p>
                <p style="margin-top:.6rem;color:#ffffffcc;font-size:.98rem">${v.strengths[1].charAt(0).toUpperCase() + v.strengths[1].slice(1)}</p>
              </div>
              <div class="mini" style="max-width:none;margin-top:1rem;border-color:#0787fe59;background:#0787fe1f">
                <p style="margin:0;color:#9fd0ff;font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em">Where Connectora differs</p>
                <p style="margin-top:.6rem;color:#fff;font-size:.98rem">${v.differs.charAt(0).toUpperCase() + v.differs.slice(1)}</p>
              </div>
            </div>
          </div>
        </article>
      </li>`).join('')}
    </ul>
  </div>
</section>

${stickySection({
  id: 'how-to-choose',
  kicker: 'Buyer checklist',
  h2: 'How should you choose a <span class="serif">LinkedIn automation tool?</span>',
  answer: '<strong>Choose a LinkedIn automation tool by checking five things: how it limits and paces each account, what it does when LinkedIn pushes back, whether replies from every account land in one inbox, how it prices as you add senders, and whether it stops follow-ups the moment someone replies.</strong>',
  content: checklist([
    '<strong>Limits:</strong> what is the default daily limit, and can a setting push past a safe ceiling?',
    '<strong>Push-back:</strong> does the tool pause an account when LinkedIn signals a limit, or keep retrying?',
    '<strong>Inbox:</strong> are replies from every account in one place, and are personal chats kept private?',
    '<strong>Pricing:</strong> what happens to cost at 5, 10 and 25 sender accounts?',
    '<strong>Reply handling:</strong> do follow-ups stop on reply, and what happens to replies to a connection note?',
  ]) + `<p class="t-lead">Our full view on risk: <a class="inline-link" href="/linkedin-account-safety">Is LinkedIn automation safe?</a></p>`,
})}

${faqSection(faqs)}

${closingCta({
  heading: 'Compare on your own campaign',
  body: "Bring the setup you run today. We'll show you how Connectora would plan, pace and handle it, and what it would cost.",
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': '{{SITE_URL}}/compare#article',
        headline: 'Connectora vs HeyReach, Expandi, Waalaxy and Dripify: an honest comparison',
        url: '{{SITE_URL}}/compare',
        datePublished: config.publishDate,
        dateModified: config.publishDate,
        author: schemaAuthor(),
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
        mentions: [
          { '@type': 'SoftwareApplication', name: 'HeyReach', url: 'https://www.heyreach.io/', applicationCategory: 'BusinessApplication' },
          { '@type': 'SoftwareApplication', name: 'Expandi', url: 'https://expandi.io/', applicationCategory: 'BusinessApplication' },
          { '@type': 'SoftwareApplication', name: 'Waalaxy', url: 'https://www.waalaxy.com/', applicationCategory: 'BusinessApplication' },
          { '@type': 'SoftwareApplication', name: 'Dripify', url: 'https://dripify.com/', applicationCategory: 'BusinessApplication' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'LinkedIn automation tools compared',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Connectora', url: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'HeyReach', url: 'https://www.heyreach.io/' },
          { '@type': 'ListItem', position: 3, name: 'Expandi', url: 'https://expandi.io/' },
          { '@type': 'ListItem', position: 4, name: 'Waalaxy', url: 'https://www.waalaxy.com/' },
          { '@type': 'ListItem', position: 5, name: 'Dripify', url: 'https://dripify.com/' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the best LinkedIn automation tool in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your team. HeyReach suits agencies that want self-serve sender rotation and white-label. Expandi bundles LinkedIn and email with dedicated IPs. Waalaxy is the low-cost entry point. Dripify offers simple per-user drip campaigns. Connectora suits teams that put account safety and reply handling first.' } },
          { '@type': 'Question', name: 'Is Connectora cheaper than HeyReach?', acceptedAnswer: { '@type': 'Answer', text: "Yes, for most team sizes. At list monthly prices, 10 accounts cost $210 a month on Connectora and $790 on HeyReach's Growth plan; 25 accounts cost $450 and $999 on HeyReach's Agency plan. Above roughly 200 accounts, HeyReach's $2,999 Unlimited plan can work out cheaper." } },
          { '@type': 'Question', name: 'Which LinkedIn automation tool is the safest?', acceptedAnswer: { '@type': 'Answer', text: "No tool can make automation risk-free, because LinkedIn's terms restrict it. Compare default limits, back-off behaviour and reply handling. Connectora defaults to 20 invitations per account per day and pauses an account as soon as LinkedIn signals a limit." } },
          { '@type': 'Question', name: 'Can I switch from HeyReach, Expandi, Waalaxy or Dripify to Connectora?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upload your lead lists, import active conversations with Import Chat, and pause the old tool before launching so nobody is messaged twice.' } },
          { '@type': 'Question', name: 'Does Connectora do email outreach?', acceptedAnswer: { '@type': 'Answer', text: 'No. Connectora focuses on LinkedIn outreach.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: '{{SITE_URL}}/compare' },
        ],
      },
    ],
  }),
};

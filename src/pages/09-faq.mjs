import { pageHero, accordion, closingCta, textLink, demoBtn } from '../ui.mjs';

const GROUPS = [
  {
    id: 'about-connectora', title: 'About Connectora',
    more: ['/about', 'About Connectora and Growthmak'],
    items: [
      { q: 'What is Connectora?', a: 'Connectora is a LinkedIn outreach automation platform built by Growthmak. It sends connection requests and follow-up messages from several LinkedIn accounts within safe per-account limits, stops when a lead replies, and collects every conversation in one inbox with AI-drafted replies that a person approves.' },
      { q: 'Who makes Connectora?', a: "Connectora is built by Growthmak, an AI-driven B2B growth marketing agency in India. Growthmak's own team uses Connectora every day to run LinkedIn outreach, alongside a small group of B2B client companies." },
      { q: 'Who is Connectora for?', a: 'Connectora is for B2B teams that prospect on LinkedIn: growth and marketing agencies running outreach for clients, sales and SDR teams sharing several LinkedIn accounts, and founders or consultants selling through their own network. It suits teams that value account safety over maximum volume.' },
      { q: 'Does Connectora need a browser extension?', a: 'No. Connectora runs in the cloud. Nothing is installed in your browser, and campaigns keep running when your computer is off.' },
    ],
  },
  {
    id: 'safety-and-limits', title: 'Safety and LinkedIn limits',
    more: ['/linkedin-account-safety', 'Read more on LinkedIn account safety'],
    items: [
      { q: 'Is it safe to use Connectora with my LinkedIn account?', a: "Connectora is built to keep risk low, but no automation tool can guarantee an account will never be restricted, because LinkedIn's User Agreement limits automated activity. Connectora uses conservative default limits, randomised timing, opt-in warm-up and an automatic pause whenever LinkedIn signals a limit." },
      { q: 'How many connection requests does Connectora send per day?', a: 'By default, 20 per LinkedIn account per day, shared across every campaign that account sends for. You can change the limit per account, but the software enforces a hard ceiling that no setting can exceed. New accounts can use warm-up, which starts at 5 a day.' },
      { q: "What is LinkedIn's weekly invitation limit?", a: 'LinkedIn does not publish a fixed weekly number. Its Help Center says accounts may be temporarily restricted for sending many invitations in a short time, or when many invitations are ignored, left pending or marked as spam. Connectora also tracks a weekly ceiling per account, Monday to Monday.' },
      { q: 'What happens if LinkedIn restricts one of my accounts?', a: 'Connectora freezes that account immediately, stops sending from it, and shows an alert. Its queued leads are re-planned onto your other healthy accounts within their normal limits. After you resolve the issue on LinkedIn, reconnect the account; its settings, history and conversations are kept.' },
      { q: 'Does Connectora store my LinkedIn password?', a: 'No. You connect each account on a secure hosted sign-in page. Connectora never sees or stores your LinkedIn password or cookies.' },
      { q: 'Should I withdraw old pending invitations?', a: 'Yes, slowly. Many ignored invitations can count against an account. Connectora withdraws them oldest first, up to 25 per account per day by default and spaced minutes apart, either when you select them or automatically after an age you choose between 7 and 90 days.' },
    ],
  },
  {
    id: 'campaigns-and-sequences', title: 'Campaigns and sequences',
    more: ['/how-it-works', 'See how it works'],
    items: [
      { q: 'Can one campaign send from multiple LinkedIn accounts?', a: "Yes. Select any number of connected accounts as senders. Connectora spreads leads across them in proportion to each account's remaining daily allowance, and never contacts the same person twice across campaigns." },
      { q: 'What does a typical Connectora sequence look like?', a: 'New campaigns start with a connection request, then a message one day after acceptance, a follow-up three days later, and a final follow-up seven days after that. You can add or remove steps, personalise each one, and edit the sequence while the campaign runs.' },
      { q: 'Do follow-ups stop when someone replies?', a: 'Yes. A reply stops that lead\'s follow-ups, and Connectora also re-checks the conversation right before each follow-up is sent. If someone replies to your connection note before you message them, they are held for review so you can answer personally.' },
      { q: 'Can I send a connection request without a note?', a: 'Yes. Notes are optional. If you include one, it can be up to 300 characters. Because LinkedIn caps personalised notes each month, you choose whether Connectora sends without the note once the cap is reached or holds the lead until a note can be sent.' },
      { q: 'Can I pause a campaign?', a: 'Yes, at any time. A paused campaign sends nothing. When you resume, Connectora re-plans every lead from that moment, so sending never bursts to catch up.' },
    ],
  },
  {
    id: 'unibox-and-ai', title: 'Unibox and AI replies',
    more: ['/unibox', 'More on the Unibox'],
    items: [
      { q: 'What is the Unibox?', a: 'The Unibox is one inbox for every LinkedIn account connected as a sender. It shows outreach conversations with unread replies first, lets you filter by account, campaign, date or replies only, and supports text, file attachments, voice notes and AI-drafted replies.' },
      { q: 'Does the AI send messages for me?', a: 'No. The AI co-pilot writes three draft replies when you ask, in a mode you choose: natural reply, follow-up, handle an objection or propose a meeting. A person must pick a draft, edit it if needed, and click Send.' },
      { q: 'Can my team see my personal LinkedIn messages?', a: 'No. The Unibox only stores and shows conversations with people Connectora contacted through your campaigns, or conversations you choose to import. Personal chats on connected accounts are never pulled in.' },
      { q: 'Can I send LinkedIn replies to my CRM?', a: "Yes. Connectora sends a signed webhook for every inbound reply to a URL you choose, such as Zapier, Make or your CRM's endpoint. The payload includes the conversation history and a link to the thread." },
    ],
  },
  {
    id: 'leads-and-data', title: 'Leads and data',
    more: ['/linkedin-lead-sourcing', 'LinkedIn lead sourcing'],
    items: [
      { q: 'Where do leads come from?', a: 'From a CSV, TSV or Excel file of LinkedIn profile URLs (up to 25 MB and 50,000 rows), a LinkedIn Sales Navigator search (up to 2,500 people), or the people who reacted to and commented on a LinkedIn post. Every profile is validated and de-duplicated before sending.' },
      { q: 'Does Connectora send InMail or email?', a: 'No. Connectora works with LinkedIn connection requests and messages to connections. It does not send InMail or email campaigns.' },
    ],
  },
  {
    id: 'pricing-and-demo', title: 'Pricing and demo',
    more: ['/book-a-demo', 'Book a demo'],
    items: [
      { q: 'How much does Connectora cost?', a: 'Pricing is shared on a short demo call, once we understand how many LinkedIn accounts you run and the level of support you need. There are no published plans yet.' },
      { q: 'Is there a free trial?', a: 'Yes. Connectora comes with a 7-day free trial. Book a short demo to get access, so you can see the plan, pacing and inbox on your own campaigns before committing.' },
      { q: 'How do I get started?', a: 'Book a demo. We review your accounts and targets, show you Connectora on a sample campaign, start your 7-day free trial, and agree a setup and price that fit.' },
    ],
  },
];

const strip = (html) => html.replace(/<[^>]+>/g, '');

export default {
  slug: '/faq',
  file: 'faq.html',
  nav: 'faq',
  title: 'Connectora FAQ: LinkedIn Outreach, Safety, Pricing, AI',
  llmsTitle: 'FAQ',
  description: 'Straight answers about Connectora: how it works, LinkedIn limits and account safety, the Unibox and AI drafts, lead sources, your data and pricing.',

  body: () => `
${pageHero({
  crumb: 'FAQ',
  kicker: 'FAQ',
  h1: 'Connectora frequently <span class="serif">asked questions</span>',
  lead: 'Short, direct answers. If yours is not here, ask us on a <a class="inline-link" href="/book-a-demo">demo call</a>.',
})}

<section class="section" id="questions">
  <div class="container">
    <div class="split-7030">
      <div>
        ${GROUPS.map((g, gi) => `
        <div class="faq-group" id="${g.id}" data-reveal>
          <div class="faq-group-title"><span class="num">0${gi + 1}</span><h2>${g.title}</h2></div>
          <div class="faq-col">${accordion(g.items, { openFirst: gi === 0 })}</div>
          <p class="mt-5">${textLink(g.more[0], g.more[1])}</p>
        </div>`).join('')}
      </div>
      <aside class="toc" aria-label="FAQ topics">
        <nav class="toc-card" aria-label="FAQ topics">
          <h2>Topics</h2>
          <ol>${GROUPS.map((g) => `<li><a href="#${g.id}">${g.title}</a></li>`).join('')}</ol>
        </nav>
        <div class="toc-cta">
          <strong style="font-size:1.05rem">Still have a question?</strong>
          <p>Ask us on a demo call.</p>
          ${demoBtn({ variant: 'white' })}
        </div>
      </aside>
    </div>
  </div>
</section>

${closingCta({ heading: 'Still have a question?' })}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': '{{SITE_URL}}/faq#faq',
        url: '{{SITE_URL}}/faq',
        name: 'Connectora FAQ: LinkedIn Outreach, Safety, Pricing, AI',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
        mainEntity: GROUPS.flatMap((g) => g.items).map((it) => ({
          '@type': 'Question',
          name: strip(it.q),
          acceptedAnswer: { '@type': 'Answer', text: strip(it.a) },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: '{{SITE_URL}}/faq' },
        ],
      },
    ],
  }),
};

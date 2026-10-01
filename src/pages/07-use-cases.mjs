import { demoBtn, btn, pageHero, stickySection, table, featureList, orderedList, faqSection, closingCta, icon, tick } from '../ui.mjs';

const setupCard = (title, inner, why, plan = '') => `
<div class="card card-pad" style="box-shadow:var(--shadow-md)">
  <p class="overline">${title}</p>
  <div class="mt-4">${inner}</div>
</div>
${why ? `<div class="disclosure" style="margin-top:0"><strong>Why it fits:</strong> ${why}</div>` : ''}
${plan ? `<p class="flex items-center gap-3" style="flex-wrap:wrap"><span class="pill" style="color:var(--blue-ink);border-color:var(--blue-100);background:var(--blue-050)">Plan</span><span>${plan}</span></p>` : ''}`;

const personaAside = (ic, label) => `<div class="flex items-center gap-3 mt-8"><span class="icon-tile solid">${icon(ic, 24)}</span><span class="pill">${label}</span></div>`;

const faqs = [
  { q: "Can an agency manage several clients' LinkedIn accounts in Connectora?", a: 'Yes. Connect each account, then assign accounts to the campaigns for each client. Daily limits are tracked per account across all campaigns.' },
  { q: 'How many LinkedIn accounts can I connect?', a: 'As many as you need. Pricing is per connected LinkedIn account: $24 each for 1 to 2 accounts, $21 for 3 to 10, $18 for 11 to 50 and $15 for 51 or more. See <a href="/pricing">pricing</a>.' },
  { q: 'Can different team members reply from their own accounts?', a: 'Yes. The Unibox shows which account each conversation belongs to, and replies are sent from that account.' },
];

export default {
  slug: '/use-cases',
  file: 'use-cases.html',
  nav: 'features',
  title: 'LinkedIn Outreach Use Cases: Agencies, Sales Teams, Founders',
  llmsTitle: 'Use cases',
  description: 'How agencies, B2B sales teams, founders and event marketers use Connectora to run safe, multi-account LinkedIn outreach, with example setups for each.',

  body: () => `
${pageHero({
  crumb: 'Use Cases',
  kicker: 'Use cases',
  h1: 'How teams use Connectora for <span class="serif">LinkedIn outreach</span>',
  lead: 'Connectora was built inside a growth agency that runs LinkedIn outreach every day. These are the setups we see work, by type of team.',
  ctas: demoBtn({ magnetic: true }),
  below: `<div class="mt-14" data-reveal style="--reveal-delay:250ms">${table({
    label: 'Connectora use cases at a glance',
    head: ['Team', 'Typical setup', 'Most-used features'],
    rows: [
      ['<a class="inline-link" href="#agencies">Agencies</a>', 'Several client campaigns, many sender accounts', '<a class="inline-link" href="/features#multi-account">Multi-account sending</a>, campaign filters in the Unibox, CRM webhooks'],
      ['<a class="inline-link" href="#sales-teams">B2B sales and SDR teams</a>', 'One campaign per segment, reps\' accounts pooled', 'Pooled limits, private inboxes, <a class="inline-link" href="/unibox#ai-co-pilot">AI reply drafts</a>'],
      ['<a class="inline-link" href="#founders">Founders and consultants</a>', 'One or two personal accounts', '<a class="inline-link" href="/linkedin-account-safety">Safe defaults</a>, warm-up, <a class="inline-link" href="/unibox#hold-and-resume">Hold &amp; Resume</a>'],
      ['<a class="inline-link" href="#event-marketers">Event and content marketers</a>', 'Lists from post engagers', '<a class="inline-link" href="/linkedin-lead-sourcing#post-engagers">Post-engager sourcing</a>, relevant notes'],
      ['<a class="inline-link" href="#switching">Teams switching tools</a>', 'Existing lists and conversations', '<a class="inline-link" href="/unibox#import-chat">Import Chat</a>, list validation, <a class="inline-link" href="/linkedin-account-safety#withdraw-pending-invitations">paced withdrawals</a>'],
    ],
  })}</div>`,
})}

${stickySection({
  id: 'agencies',
  kicker: 'Agencies',
  h2: 'How do agencies use Connectora to run LinkedIn outreach <span class="serif">for clients?</span>',
  answer: "<strong>Agencies run a separate Connectora campaign for each client and segment, sending from the LinkedIn accounts assigned to that client. Each account's daily limit is shared across campaigns, so no profile is overloaded. Replies land in one Unibox that can be filtered by campaign, and signed webhooks push them into each client's CRM.</strong>",
  aside: personaAside('building', 'Agency'),
  content: setupCard('Example setup', featureList([
    'Campaign naming by client, market and segment, for example <code>CLIENT-UAE-D2C-FASHION</code>.',
    "Senders: the client's team accounts, or the agency's own accounts where the client agrees.",
    "Schedule in the prospects' timezone, for example 08:00 to 18:30, Monday to Friday.",
    'Sequence: connection request with a short note → message after 1 hour to 1 day → two follow-ups 2 to 3 days apart.',
    "Unibox filtered by campaign for each client's daily reply review.",
  ]), 'a queue that explains itself ("147 from next week") makes client reporting simple, and the funnel gives acceptance and reply rates per campaign without spreadsheets.', 'Most agencies fit the Agency plan (11 to 50 accounts) at $18 per account a month, white-label included. See <a class="inline-link" href="/pricing">pricing</a>.'),
})}

${stickySection({
  id: 'sales-teams',
  kicker: 'Sales and SDR teams',
  h2: 'How do B2B sales and SDR teams <span class="serif">use Connectora?</span>',
  answer: "<strong>Sales teams connect each rep's LinkedIn account and run shared campaigns by segment. Connectora spreads leads across reps according to each account's remaining capacity, keeps every rep's personal chats private, and routes outreach replies to one inbox where AI drafts help reps answer quickly and consistently.</strong>",
  aside: personaAside('users', 'Sales team'),
  content: setupCard('Example setup', featureList([
    "One campaign per segment or territory; each rep's account as a sender.",
    "Daily limits set per rep based on each account's safety score.",
    'Reply handling: reps filter the Unibox by their own account; managers filter by campaign.',
    'CRM: a webhook sends every reply, with history, to your CRM via Zapier or Make.',
  ]), "no rep's profile carries the whole campaign, and a lead is never contacted twice by two reps.", 'Growth, $21 per account a month for 3 to 10 accounts.'),
})}

${stickySection({
  id: 'founders',
  kicker: 'Founders and consultants',
  h2: 'How can founders and consultants use <span class="serif">Connectora safely?</span>',
  answer: "<strong>Founders and consultants usually connect one or two personal LinkedIn accounts. Connectora's safe defaults (20 requests a day, working hours only, warm-up for new profiles) keep the pace modest, while Hold &amp; Resume and AI drafts make sure every interested reply gets a fast, personal answer from the founder.</strong>",
  aside: personaAside('user', 'Founder'),
  content: setupCard('Example setup', featureList([
    'Sequence: connection request with a personal note → one useful message after acceptance → one follow-up after a week.',
    'Limit: start at the default and only raise it if acceptance stays healthy.',
    '15 minutes a day in the Unibox: answer held leads first, use Draft with AI for the rest.',
  ]), 'your name is on every message, so pace and tone matter more than volume.', 'Starter, $24 per account a month for 1 or 2 accounts.'),
})}

${stickySection({
  id: 'event-marketers',
  kicker: 'Event and content marketers',
  h2: 'How do event and content marketers use <span class="serif">post-engager lists?</span>',
  answer: '<strong>Event and content teams paste the URL of a webinar, launch or thought-leadership post into Connectora to collect the people who reacted and commented. The resulting list goes into a campaign whose note references the post, which makes the first touch relevant and lifts acceptance compared with cold lists.</strong>',
  aside: personaAside('megaphone', 'Events &amp; content'),
  content: setupCard('Example note (under 300 characters)', `<blockquote style="font-size:1.08rem;line-height:1.7;color:var(--fg);border-left:3px solid var(--blue);padding-left:1.1rem">Hi <code>{firstName}</code>, saw you reacted to our post on [post topic]. I'm connecting with people working on this. Happy to share what we learned from the session.</blockquote>`, 'these prospects have already raised their hand. The job is to follow up quickly, not to convince a stranger.') + `<p class="text-muted">How to build the list: <a class="inline-link" href="/linkedin-lead-sourcing#post-engagers">post-engager sourcing</a>.</p>`,
})}

${stickySection({
  id: 'switching',
  kicker: 'Switching tools',
  h2: 'How do teams switch to Connectora from <span class="serif">another LinkedIn tool?</span>',
  answer: "<strong>Teams moving from another LinkedIn automation tool upload their existing lead lists, import live conversations with Import Chat so threads continue in the Unibox, and clear out old pending invitations with Connectora's paced withdrawal queue. Duplicate checks stop anyone already contacted from receiving a second sequence.</strong>",
  aside: personaAside('swap', 'Switching'),
  content: setupCard('Switching checklist', orderedList([
    'Export your lead lists from the old tool and upload them; invalid and duplicate rows are flagged.',
    'Import active conversations so you keep the history in one place. Imported threads never receive automated steps.',
    'Pause the old tool before launching, so two tools never message the same people.',
    'Queue stale invitations for withdrawal, oldest first, at a few per day.',
  ])),
})}

<section class="section" id="not-a-fit">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">Honest fit</span>
      <h2 class="t-h2 mt-5">Who is Connectora <span class="serif">not a good fit</span> for?</h2>
      <p class="answer mt-6"><strong>Connectora is not the right tool if you need very high daily volume from each account, email and LinkedIn in one automated sequence, or InMail campaigns. It is built for teams that put account safety first and want every reply handled by a person.</strong></p>
      <p class="t-lead mt-6">We would rather tell you this on the page than on the demo. If one of these is a must-have, see how other tools compare on <a class="inline-link" href="/compare">Compare</a>.</p>
    </div>
    <ul class="gap-grid cols-3 mt-12" style="max-width:60rem;margin-inline:auto" data-reveal>
      ${['Very high daily volume from each account', 'Email and LinkedIn in one automated sequence', 'InMail campaigns']
        .map((t) => `<li class="card card-pad flex items-center gap-3"><span class="check-dot" style="background:var(--muted-2)" aria-hidden="true">${icon('stop', 13)}</span><span style="font-weight:600">${t}</span></li>`).join('')}
    </ul>
  </div>
</section>

${faqSection(faqs)}

${closingCta({ heading: "Tell us your setup; we'll show you the campaign" })}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': '{{SITE_URL}}/use-cases#webpage',
        url: '{{SITE_URL}}/use-cases',
        name: 'LinkedIn Outreach Use Cases: Agencies, Sales Teams, Founders',
        description: 'How agencies, B2B sales teams, founders and event marketers use Connectora to run safe, multi-account LinkedIn outreach.',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
        audience: [
          { '@type': 'BusinessAudience', audienceType: 'B2B marketing and growth agencies' },
          { '@type': 'BusinessAudience', audienceType: 'B2B sales and SDR teams' },
          { '@type': 'BusinessAudience', audienceType: 'Founders and consultants' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: "Can an agency manage several clients' LinkedIn accounts in Connectora?", acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connect each account, then assign accounts to the campaigns for each client. Daily limits are tracked per account across all campaigns.' } },
          { '@type': 'Question', name: 'Who is Connectora not a good fit for?', acceptedAnswer: { '@type': 'Answer', text: 'Connectora is not the right tool if you need very high daily volume from each account, email and LinkedIn in one automated sequence, or InMail campaigns. It is built for teams that put account safety first.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Use Cases', item: '{{SITE_URL}}/use-cases' },
        ],
      },
    ],
  }),
};

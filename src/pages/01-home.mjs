import config from '../../site.config.mjs';
import { waLink, btn, demoBtn, textLink, secHead, faqSection, marquee, closingCta, icon, tick, arrow } from '../ui.mjs';
import { planCards, PRICE_ANSWER } from '../pricing.mjs';
import { uniboxMock, leadValidationMock, miniPlan, miniReplyCheck, miniHold, miniPrivate, miniWithdraw } from '../mocks.mjs';

const faqs = [
  { q: 'Is there a free trial?', a: `Yes. Connectora comes with a 7-day free trial. <a href="/book-a-demo">Book a short demo</a> to get access, or <a href="${waLink()}" target="_blank" rel="noopener">message us on WhatsApp</a> for direct access without a demo.` },
  { q: 'Do I need to keep my computer on?', a: 'No. Connectora runs in the cloud. There is no browser extension, and campaigns keep running when your laptop is closed.' },
  { q: 'Does Connectora store my LinkedIn password?', a: 'No. You connect each account on a secure hosted sign-in page. Connectora never sees or stores your LinkedIn password or cookies.' },
  { q: 'Can one campaign send from several LinkedIn accounts?', a: "Yes. Pick any number of connected accounts as senders. Connectora spreads leads across them in proportion to each account's remaining daily allowance." },
  { q: 'Will Connectora keep messaging someone who already replied?', a: 'No. Follow-ups stop when a lead replies, and Connectora checks the conversation again right before each follow-up is sent.' },
];

const different = [
  { tag: 'Scheduling', title: 'Plan-ahead scheduling.', text: 'Every queued lead shows its planned date and sender, with a plain-English reason when it is waiting, for example "147 from next week (weekly LinkedIn invite limit)".', visual: miniPlan },
  { tag: 'Follow-ups', title: 'Reply check before every follow-up.', text: 'Connectora looks at the conversation right before sending. If the lead has replied, the follow-up does not go.', visual: miniReplyCheck },
  { tag: 'Warm leads', title: 'Hold &amp; Resume.', text: 'If someone replies to your connection note before you message them, Connectora pauses them for review instead of closing them out. One click puts them back in the sequence.', visual: miniHold },
  { tag: 'Privacy', title: 'Private by design.', text: 'The Unibox only shows conversations with people Connectora contacted. Personal LinkedIn chats on connected accounts are never pulled in.', visual: miniPrivate },
  { tag: 'Invitations', title: 'Paced invite withdrawals.', text: 'Old pending invitations are withdrawn oldest-first, a few at a time. Withdrawing 1,000 becomes a drip of roughly 40 days, not a single burst.', visual: miniWithdraw },
];

const quotes = () => config.clientQuotes.length
  ? `<div class="gap-grid cols-2 mt-12">${config.clientQuotes.map((q, i) => `<figure class="card card-pad" data-reveal style="--reveal-delay:${i * 90}ms"><blockquote class="t-h4" style="font-weight:500">“${q.quote}”</blockquote><figcaption class="mt-5 text-muted">${q.name}, ${q.role}, ${q.company}</figcaption></figure>`).join('')}</div>`
  : '';

export default {
  slug: '/',
  file: 'index.html',
  nav: 'home',
  title: 'Connectora: Safe LinkedIn Outreach Tool for B2B Teams',
  llmsTitle: 'Home',
  head: '<link rel="preconnect" href="https://demo.arcade.software" crossorigin>',
  description: 'Run LinkedIn connection and follow-up campaigns from multiple accounts, paced safely, with every reply in one inbox and AI-drafted responses. Book a demo.',

  body: () => `
<section class="hero" id="top">
  <div class="container">
    <div class="hero-inner">
      <div class="hero-terrain" aria-hidden="true"><div class="growth-terrain"><canvas data-terrain></canvas></div></div>
      <div style="position:relative;z-index:1">
        <h1 class="t-display split-lines">LinkedIn outreach that <span class="serif">books conversations,</span> without risking your accounts</h1>
        <p class="hero-sub" data-reveal style="--reveal-delay:200ms">Connectora runs connection requests and follow-ups from all your LinkedIn accounts, paced like a real person, and brings every reply into one inbox. Built safety-first by the growth team at Growthmak.</p>
        <div class="cta-stack" data-reveal style="--reveal-delay:300ms">
          ${demoBtn({ lg: true, magnetic: true, cta: 'hero_primary' })}
          <a class="ul-link hide-sm" href="/how-it-works" style="font-size:.95rem;font-weight:600">See how it works</a>
          <span class="show-sm-only" style="width:100%">${btn({ href: '/how-it-works', label: 'See how it works', variant: 'ghost', lg: true, cls: 'w-full', showArrow: false })}</span>
        </div>
        <ul class="trust-strip" data-reveal style="--reveal-delay:400ms" aria-label="Why teams trust Connectora">
          <li><span class="check-dot soft" aria-hidden="true">${tick(12)}</span>Runs in the cloud, no browser extension</li>
          <li><span class="check-dot soft" aria-hidden="true">${tick(12)}</span>You never share your LinkedIn password</li>
          <li><span class="check-dot soft" aria-hidden="true">${tick(12)}</span>Every AI reply is approved by a human</li>
          <li><span class="check-dot soft" aria-hidden="true">${tick(12)}</span>7-day free trial</li>
        </ul>
      </div>
    </div>
    <div class="hero-demo" data-reveal style="--reveal-delay:250ms">
      <div class="arcade-frame">
        <!--ARCADE EMBED START--><div style="position: relative; padding-bottom: calc(56.8027% + 41px); height: 0px; width: 100%;"><iframe src="https://demo.arcade.software/voufGWJ9HX6tY8jevMEP?embed&embed_mobile=inline&embed_desktop=inline&squared=true&show_copy_link=true" title="Connectora Demo" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write; autoplay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;" ></iframe></div><!--ARCADE EMBED END-->
      </div>
      <p class="sr-only">Interactive Connectora demo: a campaign dashboard showing a LinkedIn outreach funnel from queued to replied.</p>
    </div>
  </div>
</section>

<section class="marquee-section" aria-hidden="true">
  <div class="marquee-tilt">
    ${marquee(['Multi-account campaigns', 'Plan-ahead scheduling', 'Unibox', 'AI reply drafts', 'Hold &amp; Resume', 'Paced withdrawals', 'Signed webhooks'], { duration: 34 })}
    ${marquee(['Safe first, fast second', 'No browser extension', 'No stored passwords', 'Humans send the replies', 'Built by Growthmak'], { variant: 'ink', reverse: true, duration: 40 })}
  </div>
</section>

<section class="r-chapter" id="what-is-connectora">
  <div class="container">
    <div class="split top">
      <div class="sticky-col" data-reveal>
        <span class="kicker">Overview</span>
        <h2 class="t-h2 mt-5">What is <span class="serif">Connectora?</span></h2>
      </div>
      <div class="content-block" data-reveal style="--reveal-delay:120ms">
        <p class="answer"><strong>Connectora is a LinkedIn outreach automation platform built by Growthmak. It sends connection requests and follow-up messages from several LinkedIn accounts at once, paces every action within per-account limits, stops automatically when a lead replies, and collects every conversation in one inbox where AI drafts replies for a human to approve.</strong></p>
        <p class="t-lead">You upload a lead list or pull one from LinkedIn, write a short sequence, choose which LinkedIn accounts send it, and set the hours it may run. Connectora plans a send time and a sender for every lead, then works through the list day by day. You spend your time on the conversations, not the clicking.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="who-is-it-for">
  <div class="container">
    ${secHead({ kicker: 'Who it is for', h2: 'Who is <span class="serif">Connectora</span> for?', center: true, answer: '<strong>Connectora is for B2B teams that use LinkedIn as a main prospecting channel: growth and marketing agencies running outreach for clients, sales and SDR teams sharing several LinkedIn accounts, and founders or consultants who sell through their own network. It suits teams that value account safety over raw volume.</strong>' })}
    <div class="gap-grid cols-3-lg mt-12" role="list">
      ${[
        ['building', 'A B2B or growth agency', 'Runs separate campaigns per client from many sender accounts, with one inbox for every reply'],
        ['users', 'A sales or SDR team', "Pools several reps' LinkedIn accounts behind one campaign, so no single profile is overloaded"],
        ['user', 'A founder or consultant', 'Sends a steady, human-paced sequence from your own profile while you focus on calls'],
      ].map(([ic, who, what], i) => `
      <a role="listitem" href="/use-cases" class="path-card card card-hover card-pad group" data-reveal style="--reveal-delay:${i * 110}ms">
        <div class="flex items-center gap-3"><span class="icon-tile">${icon(ic, 22)}</span><span class="pill">You are</span></div>
        <h3 class="t-h4 mt-6">${who}</h3>
        <div style="position:relative;height:1px;background:var(--line);margin-top:1.5rem"><span class="path-rule" aria-hidden="true"></span></div>
        <p class="mt-5 text-muted" style="flex:1;line-height:1.7"><span class="overline" style="display:block;margin-bottom:.4rem">What Connectora does for you</span>${what}</p>
        <span class="text-link mt-6">See the use case${arrow(16)}</span>
      </a>`).join('')}
    </div>
    <p class="mt-10 text-center text-muted" data-reveal>See detailed scenarios on <a class="inline-link" href="/use-cases">Use cases</a>.</p>
  </div>
</section>

<section class="section" id="how-it-works">
  <div class="container">
    <div class="split wide-left" style="align-items:end">
      ${secHead({ kicker: 'How it works', h2: 'How does <span class="serif">Connectora</span> work?', answer: '<strong>Connectora works in four steps. Connect your LinkedIn accounts through a secure sign-in page. Add leads from a CSV, Excel file, Sales Navigator search or LinkedIn post. Build a sequence of a connection request, waits and follow-up messages. Launch, and Connectora schedules and sends each step, then routes replies to your inbox.</strong>' })}
      <div data-reveal style="justify-self:start">${btn({ href: '/how-it-works', label: 'Full walkthrough: How it works', variant: 'primary' })}</div>
    </div>
    <div class="process cols-4">
      <ol>
        ${[
          ['Connect accounts.', 'Sign in on a secure hosted page. Connectora never sees or stores your LinkedIn password.'],
          ['Add leads.', 'Upload CSV or Excel, or build a list from a Sales Navigator search or the people who reacted to and commented on a LinkedIn post. Invalid and duplicate profiles are flagged before anything sends.'],
          ['Build the sequence.', 'Connection request (with or without a note), then wait steps and personalised follow-ups using any column in your file, such as <code>{firstName}</code> or <code>{company}</code>.'],
          ['Launch and reply.', 'Every lead gets a planned send time and sender. Follow-ups stop the moment someone replies, and the conversation lands in your Unibox.'],
        ].map(([t, d], i) => `<li data-reveal style="--reveal-delay:${i * 120}ms"><span class="pdot" aria-hidden="true"></span><span class="pnum" aria-hidden="true">0${i + 1}</span><h3><span class="sr-only">Step ${i + 1}: </span>${t}</h3><p>${d}</p></li>`).join('')}
      </ol>
    </div>
  </div>
</section>

<section class="r-chapter spotlight" id="safety">
  <div class="container">
    <div class="split top">
      <div class="sticky-col" data-reveal>
        <span class="kicker">Account safety</span>
        <h2 class="t-h2 mt-5">Is it safe to automate LinkedIn outreach with <span class="serif">Connectora?</span></h2>
        <p class="answer mt-6"><strong>No LinkedIn automation tool can guarantee an account will never be restricted, because LinkedIn's User Agreement limits automated activity. Connectora is built to keep risk low: conservative default limits, randomised human-like timing, an opt-in warm-up for new accounts, and an automatic pause the moment LinkedIn signals a limit or a security check.</strong></p>
        <p class="mt-6 text-muted" style="font-size:.86rem">Source: <a class="inline-link" href="https://www.linkedin.com/legal/user-agreement" target="_blank" rel="noopener">LinkedIn User Agreement</a></p>
      </div>
      <div>
        <p class="overline" data-reveal>What that means day to day</p>
        <div class="row-list mt-5">
          ${[
            ['Default of 20 connection requests per account per day,', 'shared across every campaign that account sends for. You can adjust it; the software enforces a hard ceiling no setting can exceed.'],
            ['Randomised delays', 'between actions, only inside the working hours and days you choose.'],
            ['Opt-in warm-up', 'for brand-new accounts: 5, then 10, then 15 requests a day, reaching your full limit after three weeks.'],
            ['Automatic back-off.', 'If LinkedIn says an account has hit a limit, that account pauses until its next sending window. If LinkedIn asks for a security check, the account freezes until you reconnect it.'],
            ['Safety score', 'per account, with a suggested daily limit.'],
          ].map(([b, t], i) => `<article class="row-item row-link" data-reveal style="--reveal-delay:${i * 90}ms"><span class="num">0${i + 1}</span><div><h3>${b}</h3><p>${t}</p></div></article>`).join('')}
        </div>
        <p class="mt-8" data-reveal>Read the full approach on <a class="inline-link" href="/linkedin-account-safety">LinkedIn account safety</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="different">
  <div class="container stack">
    <div class="stack-head">
      ${secHead({ kicker: 'Why Connectora', h2: 'What makes Connectora different from <span class="serif">other LinkedIn automation tools?</span>', answer: '<strong>Connectora focuses on what happens after the invite. It plans an exact send time for every lead, checks for a reply right before each follow-up, holds a lead for review when they answer your connection note, keeps personal chats out of the shared inbox, and withdraws stale invitations slowly instead of in a burst.</strong>' })}
    </div>
    <ul class="stack-list">
      ${different.map((d, i) => `
      <li class="stack-slot" style="top:calc(var(--stack-top) + ${(i * 0.9).toFixed(2)}rem);z-index:${i + 1}">
        <article class="stack-card panel-dark">
          <div class="stack-card-grid">
            <div class="stack-card-copy">
              <div class="stack-card-top"><span class="num">0${i + 1}</span><span class="rule"></span><span class="tag">${d.tag}</span></div>
              <h3>${d.title}</h3>
              <p>${d.text}</p>
            </div>
            <div class="stack-card-visual">${d.visual()}</div>
          </div>
        </article>
      </li>`).join('')}
    </ul>
    <p class="mt-8 text-center text-muted" data-reveal>Compare with HeyReach, Expandi, Waalaxy and Dripify on <a class="inline-link" href="/compare">Compare</a>.</p>
  </div>
</section>

<section class="section" id="unibox">
  <div class="container">
    <div class="split">
      <div class="content-block">
        ${secHead({ kicker: 'Unibox', h2: 'What does the <span class="serif">Unibox</span> do?', answer: "<strong>The Unibox is Connectora's single inbox for every connected LinkedIn account. You can filter by date, campaign or replies only, see unread conversations first, reply with text, files or voice notes, and ask the AI co-pilot for three draft replies. Nothing is sent until a person clicks Send.</strong>" })}
        <p class="t-lead" data-reveal>The AI co-pilot reads the recent conversation and the lead's LinkedIn profile, then drafts three options in the mode you pick: natural reply, follow-up, handle an objection, or propose a meeting. You choose one, edit it and send. More on <a class="inline-link" href="/unibox">Unibox &amp; AI replies</a>.</p>
      </div>
      <div data-reveal style="--reveal-delay:120ms">${uniboxMock()}</div>
    </div>
  </div>
</section>

<section class="section" id="leads">
  <div class="container">
    <div class="split reverse">
      <div class="content-block">
        ${secHead({ kicker: 'Lead sources', h2: 'Where do the <span class="serif">leads</span> come from?', answer: "<strong>Connectora accepts leads from four sources: a CSV, TSV or Excel upload with LinkedIn profile URLs; a LinkedIn Sales Navigator search (up to 2,500 people, LinkedIn's own cap); the people who reacted to or commented on a LinkedIn post; and existing conversations you import from another tool.</strong>" })}
        <p class="t-lead" data-reveal>Every uploaded profile URL is checked and cleaned. Company pages, typos such as "linkedn.com" and duplicates are flagged with a reason, and the same person is never contacted twice across campaigns. See <a class="inline-link" href="/linkedin-lead-sourcing">LinkedIn lead sourcing</a>.</p>
      </div>
      <div data-reveal style="--reveal-delay:120ms">${leadValidationMock()}</div>
    </div>
  </div>
</section>

<section class="section spotlight" id="results">
  <div class="container">
    <div class="split">
      <div class="content-block">
        ${secHead({ kicker: 'Reporting', h2: 'How do I <span class="serif">measure results?</span>', answer: '<strong>Every campaign shows a live funnel: queued, connection sent, connected, replied, completed and failed. Connectora calculates acceptance rate as connected divided by sent, and reply rate as replied divided by connected. Click any stage to see the exact leads in it, with a full timeline per lead.</strong>' })}
        <div class="formula-row" data-reveal>
          <span class="formula"><b>Acceptance rate</b><span>Connected <em>÷</em> sent</span></span>
          <span class="formula"><b>Reply rate</b><span>Replied <em>÷</em> connected</span></span>
        </div>
        <p class="t-lead" data-reveal>Replies can also flow straight into your CRM. Connectora sends a signed webhook for every inbound reply to Zapier, Make or your own endpoint, with the conversation history attached.</p>
      </div>
      <div class="funnel" role="img" aria-label="Connectora campaign funnel stages: queued, connection sent, connected, replied, completed and failed">
        ${[
          ['Queued', 'Planned send time and sender', 'calendar', 100],
          ['Connection sent', 'Inside daily and weekly limits', 'userPlus', 84],
          ['Connected', 'Acceptance rate = connected ÷ sent', 'checkCircle', 66],
          ['Replied', 'Reply rate = replied ÷ connected', 'message', 50],
          ['Completed', 'Sequence finished', 'shieldCheck', 40],
        ].map(([l, s, ic, w], i) => `<div class="funnel-stage">${i ? `<div class="funnel-gap"><span class="funnel-rail"></span><span class="funnel-dot"></span><span class="funnel-conv">↓ ${['', 'sent on schedule', 'invitation accepted', 'lead replies', 'sequence ends'][i]}</span></div>` : ''}<div class="funnel-bar" style="width:${w}%"><div><p class="label">${l}</p><p class="sub">${s}</p></div><span class="ico">${icon(ic, 20)}</span></div></div>`).join('')}
        <div class="funnel-stage"><div class="funnel-gap"><span class="funnel-rail"></span><span class="funnel-dot"></span><span class="funnel-conv">with a reason and retry date</span></div><div class="funnel-bar is-fail" style="width:40%"><div><p class="label">Failed</p><p class="sub">Retry with one click</p></div><span class="ico">${icon('alert', 20)}</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="pricing">
  <div class="container">
    ${secHead({ kicker: 'Pricing', h2: 'How much does <span class="serif">Connectora cost?</span>', center: true, answer: `<strong>${PRICE_ANSWER}</strong>` })}
    ${planCards()}
    <p class="mt-10 text-center text-muted" data-reveal>Full details and examples on <a class="inline-link" href="/pricing">Pricing</a>.</p>
  </div>
</section>

<section class="section" id="customers">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">Customers</span>
      <h2 class="t-h2 mt-5">Who uses <span class="serif">Connectora</span> today?</h2>
      <p class="answer mt-6"><strong>Connectora is used every day by Growthmak's own outreach team and by a small group of B2B companies running LinkedIn prospecting. It was built by people who run LinkedIn campaigns for clients, so every safety rule in the product comes from real campaigns, not theory.</strong></p>
    </div>
    ${quotes()}
  </div>
</section>

${faqSection(faqs, { after: `More answers on the <a class="inline-link" href="/faq">FAQ</a>.` })}

${closingCta({
  heading: 'See your next LinkedIn campaign planned out, before it sends',
  body: 'In a short demo we connect the dots for your team: how many accounts, which leads, what a safe daily pace looks like, and which plan fits.',
  secondary: { href: '/how-it-works', label: 'See how it works' },
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': '{{SITE_URL}}/#growthmak',
        name: 'Growthmak',
        url: 'https://growthmak.com/',
        email: 'info@growthmak.com',
        sameAs: ['https://www.linkedin.com/company/growthmak', 'https://www.instagram.com/growthmak'],
      },
      {
        '@type': 'WebSite',
        '@id': '{{SITE_URL}}/#website',
        url: '{{SITE_URL}}/',
        name: 'Connectora',
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': '{{SITE_URL}}/#connectora',
        name: 'Connectora',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'LinkedIn outreach automation',
        operatingSystem: 'Web browser',
        url: '{{SITE_URL}}/',
        description: 'Connectora is a LinkedIn outreach automation platform built by Growthmak. It sends connection requests and follow-ups from several LinkedIn accounts within per-account limits, stops when a lead replies, and manages every conversation in one inbox with AI-drafted replies a human approves.',
        featureList: [
          'Multi-account LinkedIn campaigns',
          'Connection request and follow-up sequences',
          'Plan-ahead scheduling with per-lead send times',
          'Per-account daily limits, warm-up and safety score',
          'Unified inbox (Unibox) for all LinkedIn accounts',
          'AI reply drafts with human approval',
          'Hold & Resume for replies to connection notes',
          'Paced withdrawal of pending invitations',
          'Sales Navigator search and post-engager lead sourcing',
          'Signed webhooks to Zapier, Make and CRMs',
        ],
        offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '15.00', highPrice: '24.00', offerCount: 4, url: '{{SITE_URL}}/pricing' },
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
      },
      {
        '@type': 'WebPage',
        '@id': '{{SITE_URL}}/#webpage',
        url: '{{SITE_URL}}/',
        name: 'Connectora: Safe LinkedIn Outreach Tool for B2B Teams',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does Connectora cost?', acceptedAnswer: { '@type': 'Answer', text: 'Connectora costs $24 per LinkedIn sender account per month for 1 to 2 accounts, $21 for 3 to 10, $18 for 11 to 50 and $15 for 51 or more. Annual billing lowers these to $19, $17, $14 and $12. Every plan includes every feature; only the number of accounts changes the price.' } },
          { '@type': 'Question', name: 'Does Connectora have a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connectora comes with a 7-day free trial. Book a short demo to get access.' } },
          { '@type': 'Question', name: 'Do I need to keep my computer on for Connectora to work?', acceptedAnswer: { '@type': 'Answer', text: 'No. Connectora runs in the cloud. There is no browser extension, and campaigns keep running when your computer is off.' } },
          { '@type': 'Question', name: 'Does Connectora store my LinkedIn password?', acceptedAnswer: { '@type': 'Answer', text: 'No. Each LinkedIn account is connected on a secure hosted sign-in page. Connectora never sees or stores your LinkedIn password or cookies.' } },
          { '@type': 'Question', name: 'Can one Connectora campaign send from several LinkedIn accounts?', acceptedAnswer: { '@type': 'Answer', text: "Yes. You can select any number of connected LinkedIn accounts as senders. Connectora spreads leads across them in proportion to each account's remaining daily allowance." } },
          { '@type': 'Question', name: 'Will Connectora keep messaging someone who already replied?', acceptedAnswer: { '@type': 'Answer', text: 'No. Follow-ups stop when a lead replies, and Connectora checks the conversation again right before each follow-up is sent.' } },
        ],
      },
    ],
  }),
};

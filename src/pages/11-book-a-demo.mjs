import config from '../../site.config.mjs';
import { secHead, blockSection, stickySection, table, faqSection, breadcrumbNav, icon, tick, featureList } from '../ui.mjs';

const { namespace, link } = config.cal;

// Cal.com inline embed (as supplied), loaded at the end of <body>.
const calScript = `
<!-- Cal inline embed code begins -->
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "${namespace}", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;

  Cal.ns["${namespace}"]("inline", {
    elementOrSelector:"#my-cal-inline-${namespace}",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
    calLink: "${link}",
  });

  Cal.ns["${namespace}"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
</script>
<!-- Cal inline embed code ends -->`;

const faqs = [
  { q: 'Is the demo free?', a: 'Yes. The demo is free and there is no obligation.' },
  { q: 'Do I need to connect my LinkedIn account before the demo?', a: 'No. We show Connectora on a sample campaign. You connect your own accounts only if you decide to go ahead.' },
  { q: "Can I see Connectora's pricing without a call?", a: 'Not yet. Pricing depends on your setup, so we share it on the demo.' },
];

export default {
  slug: '/book-a-demo',
  file: 'book-a-demo.html',
  nav: 'demo',
  title: 'Book a Connectora Demo: LinkedIn Outreach and Pricing',
  llmsTitle: 'Book a demo (pricing)',
  description: 'See Connectora on your own LinkedIn targets: a safe sending plan for your accounts, the Unibox and AI replies, plus pricing for your setup. Book a demo.',
  head: '<link rel="preconnect" href="https://app.cal.com" crossorigin>',
  scripts: calScript,

  body: () => `
<section class="page-hero" data-page-hero style="padding-top:clamp(7.5rem,10vw,9.5rem)">
  <div class="container">
    ${breadcrumbNav('Book a Demo')}
    <div class="split" style="align-items:end;gap:1.5rem 4rem">
      <div>
        <span class="eyebrow" data-reveal>Book a demo</span>
        <h1 class="t-display-sm split-lines mt-5">Book a <span class="serif">Connectora demo</span></h1>
      </div>
      <div data-reveal style="--reveal-delay:120ms">
        <p class="lead" style="margin-top:0">See your next LinkedIn campaign planned out, paced safely across your accounts, with replies flowing into one inbox. We'll share pricing for your setup on the call.</p>
      </div>
    </div>

    <div class="cal-card" data-reveal style="--reveal-delay:180ms">
      <div class="cal-card-head">
        <span class="flex items-center gap-3"><span class="icon-tile" style="width:2.25rem;height:2.25rem">${icon('calendar', 18)}</span><span><strong>Pick a time</strong> · ${config.demoLength}, video call with the Growthmak team</span></span>
        <span class="flex items-center gap-3"><span class="check-dot soft" aria-hidden="true">${tick(12)}</span>No obligation. We use your details only to arrange and prepare your demo.</span>
      </div>
      <div style="width:100%;height:100%;overflow:auto" id="my-cal-inline-${namespace}" data-lenis-prevent></div>
      <noscript><p class="cal-fallback">The booking calendar needs JavaScript. <a href="https://cal.com/${link}">Open the booking page on Cal.com</a>.</p></noscript>
    </div>
    <p class="mt-5 text-center text-muted" style="font-size:.92rem">Comparing tools? <a class="inline-link" href="/compare">See our honest comparison</a>.</p>
  </div>
</section>

${blockSection({
  id: 'what-happens-on-a-demo',
  head: secHead({ kicker: 'The call', h2: 'What happens on a <span class="serif">Connectora demo?</span>', answer: '<strong>A Connectora demo is a short video call with the Growthmak team. We learn your targets and how many LinkedIn accounts you run, walk through Connectora on a sample campaign, propose a safe daily sending pace for your accounts, and share pricing for your setup. You leave with a clear plan whether or not you buy.</strong>' }),
  content: table({
    label: 'Agenda of a Connectora demo',
    head: ['Part', 'What we cover'],
    rows: [
      ['1. Your goals', 'Who you want to reach, how many accounts, what you use today'],
      ['2. Live walkthrough', 'Lead upload or <a class="inline-link" href="/linkedin-lead-sourcing#sales-navigator">Sales Navigator search</a>, sequence, schedule, plan-ahead queue'],
      ['3. Safety plan', 'A realistic daily pace per account, warm-up needs, invitation clean-up (<a class="inline-link" href="/linkedin-account-safety">safe daily sending pace</a>)'],
      ['4. Inbox and replies', '<a class="inline-link" href="/unibox">Unibox, Hold &amp; Resume, AI drafts</a>, CRM webhook'],
      ['5. Pricing and next steps', 'Pricing for your setup and how onboarding works'],
    ],
  }) + `<p class="mt-5 text-muted">Length: <strong style="color:var(--fg)">${config.demoLength}</strong></p>`,
})}

<section class="section" id="pricing">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">Pricing</span>
      <h2 class="t-h2 mt-5">How much does <span class="serif">Connectora cost?</span></h2>
      <p class="answer mt-6"><strong>Connectora's pricing is shared on the demo call rather than published. We first understand how many LinkedIn accounts you plan to run and how much setup help you want, then recommend a setup and quote for it. There is no obligation to buy after the demo.</strong></p>
    </div>
  </div>
</section>

${stickySection({
  id: 'what-to-bring',
  kicker: 'Prepare',
  h2: 'What should I bring to <span class="serif">the demo?</span>',
  answer: '<strong>Bring three things to get the most from a Connectora demo: a description or sample of your target list (a Sales Navigator search URL is ideal), the number of LinkedIn accounts that will send outreach, and the tool or process you use today. With these we can show you a realistic plan for your own campaign.</strong>',
  content: `<div class="gap-grid">${[
    ['search', 'A description or sample of your target list', 'A Sales Navigator search URL is ideal.'],
    ['users', 'The number of LinkedIn accounts that will send outreach', ''],
    ['swap', 'The tool or process you use today', ''],
  ].map(([ic, t, d], i) => `<div class="card card-pad flex gap-4" style="align-items:flex-start"><span class="icon-tile">${icon(ic, 22)}</span><div><p class="overline">0${i + 1}</p><h3 class="t-h4 mt-2" style="font-size:1.15rem">${t}</h3>${d ? `<p class="mt-2 text-muted">${d}</p>` : ''}</div></div>`).join('')}</div>`,
})}

<section class="section" id="after-the-demo">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">Onboarding</span>
      <h2 class="t-h2 mt-5">What happens <span class="serif">after the demo?</span></h2>
      <p class="answer mt-6"><strong>If Connectora is a fit, we help you connect your LinkedIn accounts, set safe limits and warm-up where needed, import your first lead list, and build your first sequence together. Your first campaign is reviewed with you before it launches.</strong></p>
    </div>
  </div>
</section>

${faqSection(faqs, { after: `<a class="btn btn-primary group" href="#my-cal-inline-${namespace}">Pick a time<svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" class="arrow" width="16" height="16"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></a>` })}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': '{{SITE_URL}}/book-a-demo#webpage',
        url: '{{SITE_URL}}/book-a-demo',
        name: 'Book a Connectora Demo: LinkedIn Outreach and Pricing',
        description: 'Book a demo to see Connectora on your own LinkedIn targets, get a safe sending plan for your accounts, and receive pricing for your setup.',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
        potentialAction: { '@type': 'ReserveAction', name: 'Book a Connectora demo', target: '{{SITE_URL}}/book-a-demo' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much does Connectora cost?', acceptedAnswer: { '@type': 'Answer', text: "Connectora's pricing is shared on the demo call rather than published. The team first understands how many LinkedIn accounts you plan to run and how much setup help you want, then recommends a setup and quotes for it." } },
          { '@type': 'Question', name: 'Is the Connectora demo free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The demo is free and there is no obligation.' } },
          { '@type': 'Question', name: 'Do I need to connect my LinkedIn account before a Connectora demo?', acceptedAnswer: { '@type': 'Answer', text: 'No. Connectora is shown on a sample campaign. You connect your own accounts only if you decide to go ahead.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Book a Demo', item: '{{SITE_URL}}/book-a-demo' },
        ],
      },
    ],
  }),
};

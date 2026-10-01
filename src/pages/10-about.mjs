import config from '../../site.config.mjs';
import { demoBtn, btn, pageHero, splitSection, stickySection, blockSection, secHead, table, featureList, icon, tick } from '../ui.mjs';

const quotes = () => config.clientQuotes.length
  ? `<div class="gap-grid cols-2 mt-12">${config.clientQuotes.map((q) => `<figure class="card card-pad"><blockquote class="t-h4" style="font-weight:500">“${q.quote}”</blockquote><figcaption class="mt-5 text-muted">${q.name}, ${q.role}, ${q.company}</figcaption></figure>`).join('')}</div>`
  : '';

const growthmakCard = () => `
<div class="card card-pad" style="box-shadow:var(--shadow-md)">
  <img src="/assets/img/growthmak-logo.svg" alt="Growthmak" width="160" height="41" style="height:34px;width:auto" loading="lazy">
  <div class="mt-6">
    <div class="kv"><span>Website</span><b><a class="inline-link" href="https://growthmak.com/" target="_blank" rel="noopener">growthmak.com</a></b></div>
    <div class="kv"><span>LinkedIn</span><b><a class="inline-link" href="${config.org.linkedin}" target="_blank" rel="noopener">Growthmak on LinkedIn</a></b></div>
    <div class="kv"><span>Location</span><b>${config.org.city}, ${config.org.region}, India</b></div>
    <div class="kv"><span>Email</span><b><a class="inline-link" href="mailto:${config.org.email}">${config.org.email}</a></b></div>
  </div>
</div>`;

export default {
  slug: '/about',
  file: 'about.html',
  nav: 'features',
  title: 'About Connectora: LinkedIn Outreach Built by Growthmak',
  llmsTitle: 'About',
  description: 'Connectora is a LinkedIn outreach platform built by Growthmak, a B2B growth agency that runs LinkedIn campaigns daily. Why we built it, and our principles.',

  body: () => `
${pageHero({
  crumb: 'About',
  kicker: 'About',
  h1: 'About <span class="serif">Connectora</span>',
  lead: 'Connectora is a LinkedIn outreach automation platform built by Growthmak. We built it because we run LinkedIn outreach every day, for ourselves and for clients, and needed a tool that put account safety and real conversations first.',
  ctas: `${demoBtn({ magnetic: true })}${btn({ href: '#contact', label: 'Contact the team', variant: 'ghost' })}`,
})}

<section class="section" id="what-is-connectora">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">The product</span>
      <h2 class="t-h2 mt-5">What is <span class="serif">Connectora?</span></h2>
      <p class="answer mt-6"><strong>Connectora is a LinkedIn outreach automation platform built by Growthmak. It runs connection and follow-up campaigns from multiple LinkedIn accounts, paces every action within per-account limits, pauses automatically when LinkedIn signals a limit, and manages every reply in one inbox where AI drafts responses for a person to approve.</strong></p>
    </div>
  </div>
</section>

${splitSection({
  id: 'who-built-connectora',
  head: secHead({ kicker: 'The team', h2: 'Who built <span class="serif">Connectora?</span>', answer: '<strong>Connectora is built by Growthmak, an AI-driven B2B growth marketing agency in India. Growthmak runs lead generation, growth marketing and performance advertising across LinkedIn, Google, Bing and Meta, and builds AI and automation systems for sales teams. Connectora grew out of its own LinkedIn outreach work.</strong>' }),
  visual: growthmakCard(),
})}

${blockSection({
  id: 'why-growthmak-built-connectora',
  head: secHead({ kicker: 'Why we built it', h2: 'Why did Growthmak build <span class="serif">Connectora?</span>', answer: '<strong>Growthmak built Connectora to fix the problems that cost real deals in day-to-day LinkedIn outreach: accounts put at risk by bursts of activity, follow-ups sent to people who had already replied, warm leads lost after answering a connection note, and personal chats mixed into team inboxes. Each problem became a feature.</strong>' }),
  content: table({
    label: 'Problems in LinkedIn outreach and what Connectora does about them',
    head: ['Problem in LinkedIn outreach', 'What Connectora does about it'],
    rows: [
      ['Bursts of activity after a pause or a limit change', '<a class="inline-link" href="/features#plan-ahead-scheduling">Plans every lead\'s send time</a> in advance, so resuming never bursts'],
      ['Follow-ups landing after a prospect had replied', 'Re-checks the conversation right before every follow-up'],
      ['People who replied to the connection note falling out of the campaign', '<a class="inline-link" href="/unibox#hold-and-resume">Hold &amp; Resume</a> pauses them for a personal reply'],
      ['Queues that looked stuck with no explanation', 'Explains every wait in plain English'],
      ['Personal LinkedIn chats appearing in a shared inbox', 'Shows only outreach conversations'],
      ['Hundreds of stale invitations withdrawn at once', 'Withdraws slowly, oldest first'],
    ],
  }),
})}

${stickySection({
  id: 'principles',
  kicker: 'Principles',
  h2: 'What principles <span class="serif">guide Connectora?</span>',
  answer: '<strong>Connectora follows five principles: safe first and fast second; a person sends every reply that matters; private conversations stay private; nothing is deleted without an archive; and the product always explains why a lead is waiting. Every feature is checked against these rules before it ships.</strong>',
  content: `<div class="row-list">${[
    ['Safe first, fast second.', 'Conservative defaults, hard ceilings and an <a class="inline-link" href="/linkedin-account-safety">immediate stop when LinkedIn pushes back</a>.'],
    ['Humans send the replies.', 'AI drafts; people decide.'],
    ['Private by default.', 'Only outreach conversations are stored and shown.'],
    ['Nothing silently deleted.', 'Removing a campaign or account archives a full snapshot first.'],
    ['No mystery queues.', 'Every lead shows when it will be contacted, by which account, and why it is waiting.'],
  ].map(([t, d], i) => `<article class="row-item row-link"><span class="num">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div>`,
})}

<section class="section" id="who-uses-connectora">
  <div class="container">
    <div class="m-mid mx-auto text-center" data-reveal>
      <span class="kicker">Customers</span>
      <h2 class="t-h2 mt-5">Who uses <span class="serif">Connectora</span> today?</h2>
      <p class="answer mt-6"><strong>Connectora is used every day by Growthmak's own outreach team and by a small group of B2B companies running LinkedIn prospecting. We onboard new teams through a demo, so every setup starts with the right accounts, targets and a safe daily pace.</strong></p>
    </div>
    ${quotes()}
  </div>
</section>

<section class="dark-band cta-band section" id="contact">
  <div class="container">
    <div class="cta-grid">
      <div class="cta-copy" data-reveal>
        <span class="eyebrow">Contact</span>
        <h2 class="t-h2 mt-5">How can I contact the <span class="serif">Connectora team?</span></h2>
        <p class="lead"><strong style="color:#ffffffd9;font-weight:500">The fastest way to reach the Connectora team is to book a demo on the Book a Demo page, where you choose a time and tell us about your LinkedIn accounts and targets. For partnership, press or other questions, email Growthmak at ${config.org.email}.</strong></p>
        <div class="cta-stack">
          ${demoBtn({ magnetic: true, cta: 'about_contact' })}
          ${btn({ href: `mailto:${config.org.email}`, label: config.org.email, variant: 'ghost-d' })}
        </div>
      </div>
      <ul class="cta-list" data-reveal style="--reveal-delay:120ms">
        <li><span class="check-dot" aria-hidden="true">${icon('calendar', 13)}</span><span>Book a demo: <a class="ul-link" href="/book-a-demo" style="color:#fff">/book-a-demo</a></span></li>
        <li><span class="check-dot" aria-hidden="true">${tick(13)}</span><span>7-day free trial when you book a demo</span></li>
        <li><span class="check-dot" aria-hidden="true">${icon('mail', 13)}</span><span>Email: <a class="ul-link" href="mailto:${config.org.email}" style="color:#fff">${config.org.email}</a></span></li>
      </ul>
    </div>
  </div>
</section>
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': '{{SITE_URL}}/about#webpage',
        url: '{{SITE_URL}}/about',
        name: 'About Connectora: LinkedIn Outreach Built by Growthmak',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
        mainEntity: { '@id': '{{SITE_URL}}/#growthmak' },
      },
      {
        '@type': 'Organization',
        '@id': '{{SITE_URL}}/#growthmak',
        name: 'Growthmak',
        url: 'https://growthmak.com/',
        email: 'info@growthmak.com',
        description: 'Growthmak is an AI-driven B2B growth marketing agency that builds Connectora, a LinkedIn outreach automation platform.',
        address: { '@type': 'PostalAddress', addressLocality: config.org.city, addressRegion: config.org.region, addressCountry: config.org.country },
        sameAs: ['https://www.linkedin.com/company/growthmak', 'https://www.instagram.com/growthmak'],
        makesOffer: { '@type': 'Offer', itemOffered: { '@id': '{{SITE_URL}}/#connectora' } },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': '{{SITE_URL}}/#connectora',
        name: 'Connectora',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web browser',
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'About', item: '{{SITE_URL}}/about' },
        ],
      },
    ],
  }),
};

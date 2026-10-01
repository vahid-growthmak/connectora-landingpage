import config from '../../site.config.mjs';
import { btn, demoBtn, pageHero, byline, articleSection, table, featureList, orderedList, checklist, faqSection, closingCta, sources, schemaAuthor } from '../ui.mjs';

const SRC = {
  ua: ['LinkedIn User Agreement', 'https://www.linkedin.com/legal/user-agreement'],
  prohibited: ['LinkedIn Help: Prohibited software and extensions', 'https://www.linkedin.com/help/linkedin/answer/a1341387'],
  restricted: ['LinkedIn Help: restricted from sending invitations', 'https://www.linkedin.com/help/linkedin/answer/a550555'],
  bloom: ['Outreach Bloom: what LinkedIn publishes, and what it doesn\'t', 'https://outreachbloom.com/linkedin-connection-limit'],
};

const faqs = [
  { q: "Can Connectora guarantee my LinkedIn account won't be restricted?", a: "No tool can. LinkedIn's User Agreement restricts automation and LinkedIn decides enforcement. Connectora lowers risk with conservative limits and stops immediately when LinkedIn signals a problem." },
  { q: 'Does Connectora use a browser extension?', a: 'No. Connectora runs in the cloud and does not install anything in your browser.' },
  { q: 'Does Connectora store my LinkedIn password?', a: 'No. You sign in on a secure hosted page; Connectora never sees or stores your password or cookies.' },
  { q: 'What is the safest daily connection request limit?', a: 'LinkedIn does not publish one. Connectora starts every account at 20 a day and suggests a limit per account based on its safety score. New accounts should use warm-up.' },
  { q: 'Do personalised notes affect safety?', a: 'Indirectly. Relevant notes tend to raise acceptance, which reduces ignored invitations. LinkedIn caps personalised notes per month, so Connectora can send without the note once the cap is reached, or hold until it resets.' },
];

const sections = [
  {
    id: 'is-linkedin-automation-safe',
    toc: 'Is LinkedIn automation safe?',
    h2: 'Is LinkedIn automation safe?',
    answer: "<strong>LinkedIn automation always carries some risk, because LinkedIn's User Agreement prohibits unauthorised automated activity and no tool can guarantee an account will never be restricted. Risk is lowest when sending is slow, spread across working hours, kept within conservative daily limits, and stopped immediately whenever LinkedIn signals a limit or asks for verification.</strong>",
    content: `<p class="t-lead">So the useful question is not "is it safe?" but "how much risk does this tool add, and what does it do when LinkedIn pushes back?". Connectora's answer: a conservative pace by default, and an immediate stop when LinkedIn says stop.</p>`,
  },
  {
    id: 'what-linkedin-says',
    toc: 'What LinkedIn officially says',
    h2: 'What does LinkedIn officially say about automation?',
    answer: "<strong>LinkedIn's User Agreement says members must not use bots or other unauthorised automated methods to access the service, add contacts or send messages. LinkedIn's Help Center also lists prohibited third-party software and browser extensions. Any account using automation accepts that LinkedIn may restrict it.</strong>",
    content: featureList([
      `<a class="inline-link" href="${SRC.ua[1]}" target="_blank" rel="noopener">LinkedIn User Agreement</a>, section on what members agree not to do.`,
      `<a class="inline-link" href="${SRC.prohibited[1]}" target="_blank" rel="noopener">LinkedIn Help: Prohibited software and extensions</a>.`,
    ]) + `<p class="t-lead">Connectora is cloud-based software, not a browser extension, and it does not script your browser. That reduces some technical signals, but it does not change the rules above. We would rather you know this before you start.</p>`,
  },
  {
    id: 'connection-request-limit',
    toc: 'Connection requests per week',
    h2: 'How many LinkedIn connection requests can you send per week?',
    answer: '<strong>LinkedIn does not publish a fixed daily or weekly number of connection requests. Its Help Center says accounts can be temporarily restricted for sending many invitations in a short time or when many invitations are ignored, left pending or marked as spam. Figures such as "100 to 200 a week" come from automation vendors, not LinkedIn.</strong>',
    content: `<p class="overline">What this means in practice</p>` + featureList([
      '<strong>There is no safe number that applies to everyone.</strong> Account age, network size, acceptance rate and past activity all seem to matter.',
      '<strong>Acceptance rate is the lever you control.</strong> Well-targeted lists and short, relevant notes keep invitations from being ignored or reported.',
      "<strong>Connectora's default is 20 connection requests per account per day,</strong> shared across every campaign that account runs. You can change it per account; a hard ceiling in the software cannot be overridden.",
    ]) + sources([SRC.restricted, SRC.bloom]),
  },
  {
    id: 'what-gets-accounts-restricted',
    toc: 'What gets accounts restricted',
    h2: 'What gets a LinkedIn account restricted?',
    answer: "<strong>According to LinkedIn's Help Center, invitation restrictions typically follow three patterns: sending many invitations in a short time, having many invitations ignored, left pending or marked as spam, and suspected use of automation tools. LinkedIn says these restrictions usually last about a week and that support cannot shorten them.</strong>",
    content: table({
      label: 'Restriction triggers and how Connectora reduces them',
      head: ['Trigger LinkedIn describes', 'How Connectora reduces it'],
      rows: [
        ['Many invitations in a short time', 'Daily limits per account, randomised delays, sending only inside working hours, warm-up for new accounts'],
        ['Invitations ignored, left pending or marked as spam', 'URL validation and duplicate removal, never contacting the same person twice, paced withdrawal of stale invitations'],
        ['Suspected automation', 'Cloud-based, no browser scripting, irregular timing, immediate pause when LinkedIn pushes back'],
      ],
    }) + sources([SRC.restricted]),
  },
  {
    id: 'safeguards',
    toc: 'The ten safeguards',
    h2: 'How does Connectora keep LinkedIn accounts safe?',
    answer: '<strong>Connectora keeps accounts safe with ten layered safeguards: conservative daily limits, a weekly ceiling, randomised timing, working-hours-only sending, opt-in warm-up, a per-account safety score, automatic back-off on LinkedIn limits, an instant freeze on security checks, a cap on failed attempts, and slow, scheduled invite withdrawals.</strong>',
    content: `<p class="text-muted">Each control is listed with its default on <a class="inline-link" href="/features#account-safety">Features</a>.</p>` + table({
      label: 'Connectora account safeguards',
      head: ['#', 'Safeguard', 'How it works'],
      rowHeader: false,
      rows: [
        ['1', '<strong style="color:var(--fg)">Daily connection limit</strong>', '20 per account per day by default. Adjustable per account, with a hard ceiling no setting can exceed. Shared across all campaigns.'],
        ['2', '<strong style="color:var(--fg)">Weekly ceiling</strong>', "Each account's invitations are also counted Monday to Monday. Leads beyond the week's allowance are scheduled for next week, and the queue says so."],
        ['3', '<strong style="color:var(--fg)">Follow-up message limit</strong>', '40 messages per account per day by default.'],
        ['4', '<strong style="color:var(--fg)">Randomised timing</strong>', 'Actions from the same account are spaced by random delays, never on a fixed beat.'],
        ['5', '<strong style="color:var(--fg)">Working hours and timezone</strong>', 'Each account sends only inside its own hours and the campaign window, in its own timezone.'],
        ['6', '<strong style="color:var(--fg)">Opt-in warm-up</strong>', 'New accounts ramp 5 → 10 → 15 requests a day, then reach the full limit after three weeks.'],
        ['7', '<strong style="color:var(--fg)">Safety score</strong>', 'Each account is scored from its status, network size, Premium status and, with Sales Navigator, its Social Selling Index (SSI). Bands run from restricted to strong, each with a suggested daily limit.'],
        ['8', '<strong style="color:var(--fg)">Automatic back-off</strong>', 'If LinkedIn says an account hit a temporary limit, that account pauses until its next sending window (or the time LinkedIn gives). Leads are re-planned, not failed.'],
        ['9', '<strong style="color:var(--fg)">Freeze on security checks</strong>', 'If LinkedIn asks for verification or restricts an account, Connectora freezes it immediately and never retries into the block.'],
        ['10', '<strong style="color:var(--fg)">Attempt budget</strong>', 'Refused attempts count against a daily budget too, so an account can never get stuck retrying in a loop.'],
      ].map(([n, ...r]) => [`<span class="num-cell" style="color:var(--blue);font-weight:700">${n}</span>`, ...r]),
    }) + `<p class="t-lead">Plus: no browser extension, no stored LinkedIn password, and every campaign can be paused instantly. Resuming re-plans from the current moment, so a restart never bursts.</p>`,
  },
  {
    id: 'warm-up',
    toc: 'Warming up a new account',
    h2: 'How do you warm up a new LinkedIn account for outreach?',
    answer: '<strong>Warm up a new LinkedIn account by starting with a handful of connection requests a day and increasing gradually over several weeks, while using the account normally. In Connectora, switching on warm-up caps the account at 5 requests a day in week one, 10 in week two, 15 in week three, then your full limit.</strong>',
    content: featureList([
      '<strong>Only for genuinely new accounts.</strong> An established account does not need warm-up just because it was newly connected to Connectora. That is why warm-up is opt-in and off by default.',
      '<strong>Fill in the profile first:</strong> photo, headline, About section and a few relevant connections.',
      '<strong>Use it like a person:</strong> read the feed, react and comment between campaigns.',
      '<strong>Watch acceptance rate.</strong> If it is low, fix targeting and notes before raising the limit.',
    ]),
  },
  {
    id: 'withdraw-pending-invitations',
    toc: 'Withdrawing pending invitations',
    h2: 'Should you withdraw pending LinkedIn invitations?',
    answer: '<strong>Yes, periodically. A large pile of ignored invitations can count against an account, and LinkedIn lists ignored or pending invitations as a restriction trigger. Withdraw them slowly, oldest first, a few each day. Mass-withdrawing hundreds at once is itself an unusual pattern, and LinkedIn may block re-inviting the same people for several weeks.</strong>',
    content: `<p class="overline">How Connectora handles it</p>` + featureList([
      '<strong>Choose by age:</strong> older than 30 days, 14 to 30 days, 7 to 14 days, last 7 days, or unknown.',
      '<strong>Paced queue:</strong> up to 25 withdrawals per account per day by default, spaced minutes apart, only in working hours. 1,000 invitations become roughly a 40-day drip.',
      '<strong>Auto-withdraw (opt-in):</strong> set a threshold from 7 to 90 days. By default it only touches invitations Connectora sent.',
      '<strong>Safety rules:</strong> invitations of unknown age are never auto-withdrawn, and a lead whose invitation turns out to be already accepted is left untouched.',
      '<strong>Re-invite cooldown tracked:</strong> when LinkedIn blocks a re-invite, Connectora records the retry date and skips that lead until then.',
    ]),
  },
  {
    id: 'if-an-account-is-restricted',
    toc: 'If an account is restricted',
    h2: 'What happens if LinkedIn restricts an account while it is in Connectora?',
    answer: '<strong>If LinkedIn restricts an account or asks for verification, Connectora freezes it at once and shows a "Re-auth needed" or "Action needed" alert. Its queued leads are re-planned onto the campaign\'s other healthy accounts, within their normal limits. Once you resolve the issue and reconnect, the account resumes with its settings and history intact.</strong>',
    content: orderedList([
      'Resolve the check directly on LinkedIn (for example, identity verification).',
      'Reconnect the account in Connectora. It keeps its limits, warm-up history and conversations.',
      'Consider lowering its daily limit for a week and reviewing the targeting of the campaigns it was sending.',
    ]),
  },
  {
    id: 'checklist',
    toc: 'Safe outreach checklist',
    h2: 'Safe LinkedIn outreach checklist',
    answer: '<strong>Safe LinkedIn outreach comes down to five habits: target tightly so people accept, keep daily volume modest and spread across working hours, warm up new accounts, clean out stale invitations slowly, and stop the moment LinkedIn pushes back. Connectora automates all five, but list quality is still yours.</strong>',
    content: checklist([
      'Profiles complete and active (photo, headline, About).',
      'Lead list matches one clear ideal customer profile.',
      'Connection note under 300 characters and about them, not you.',
      'Daily limit modest; warm-up on for new accounts.',
      "Sending window during your prospects' business hours.",
      'Follow-ups spaced days apart; stop on reply.',
      'Stale invitations withdrawn monthly, slowly.',
      'Acceptance rate reviewed weekly; fix targeting before raising volume.',
    ]) + `<p class="text-muted">See where each habit fits in a campaign: <a class="inline-link" href="/how-it-works">How it works</a>.</p>`,
  },
];

export default {
  slug: '/linkedin-account-safety',
  file: 'linkedin-account-safety.html',
  nav: 'safety',
  ogType: 'article',
  title: 'Is LinkedIn Automation Safe? Limits, Risks and Safeguards',
  llmsTitle: 'LinkedIn account safety',
  description: 'What LinkedIn actually says about automation and invite limits, what gets accounts restricted, and the 10 safeguards Connectora uses to keep risk low.',

  body: () => `
${pageHero({
  crumb: 'LinkedIn Account Safety',
  kicker: 'LinkedIn account safety',
  h1: 'Is LinkedIn automation safe? What LinkedIn says, and how <span class="serif">Connectora keeps risk low</span>',
  wide: true,
  lead: `${byline(`Updated <time datetime="${config.publishDate}">${new Date(config.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>`)}
  <p class="lead">Every LinkedIn automation tool claims to be safe. Here is a straighter answer: what LinkedIn's own documents say, what actually gets accounts restricted, and the specific safeguards Connectora uses. We run LinkedIn outreach for our own business and for clients every day, so these rules come from practice.</p>`,
})}

${articleSection({ sections, ctaTitle: 'Get a safe sending plan for your accounts', ctaText: 'On a demo we look at your accounts and targets and show you a realistic, safe daily pace before anything is sent.' })}

${faqSection(faqs, { after: `Weighing up tools? <a class="inline-link" href="/compare">Compare LinkedIn automation tools</a>.` })}

${closingCta({
  heading: 'Get a safe sending plan for your accounts',
  body: 'On a demo we look at your accounts and targets and show you a realistic, safe daily pace before anything is sent.',
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': '{{SITE_URL}}/linkedin-account-safety#article',
        headline: 'Is LinkedIn automation safe? What LinkedIn says, and how Connectora keeps risk low',
        description: 'What LinkedIn actually says about automation and invite limits, what gets accounts restricted, and the safeguards Connectora uses to keep risk low.',
        url: '{{SITE_URL}}/linkedin-account-safety',
        datePublished: config.publishDate,
        dateModified: config.publishDate,
        author: schemaAuthor(),
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
        about: [
          { '@type': 'Thing', name: 'LinkedIn automation' },
          { '@type': 'Thing', name: 'LinkedIn account restriction' },
          { '@id': '{{SITE_URL}}/#connectora' },
        ],
        citation: [
          'https://www.linkedin.com/legal/user-agreement',
          'https://www.linkedin.com/help/linkedin/answer/a1341387',
          'https://www.linkedin.com/help/linkedin/answer/a550555',
          'https://www.linkedin.com/help/linkedin/answer/a563153',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is LinkedIn automation safe?', acceptedAnswer: { '@type': 'Answer', text: "LinkedIn automation always carries some risk, because LinkedIn's User Agreement prohibits unauthorised automated activity and no tool can guarantee an account will never be restricted. Risk is lowest when sending is slow, spread across working hours, kept within conservative daily limits, and stopped immediately whenever LinkedIn signals a limit or asks for verification." } },
          { '@type': 'Question', name: 'How many LinkedIn connection requests can you send per week?', acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn does not publish a fixed daily or weekly number. Its Help Center says accounts can be temporarily restricted for sending many invitations in a short time or when many invitations are ignored, left pending or marked as spam. Connectora defaults to 20 connection requests per account per day.' } },
          { '@type': 'Question', name: 'How do you warm up a new LinkedIn account for outreach?', acceptedAnswer: { '@type': 'Answer', text: "Start with a handful of connection requests a day and increase gradually over several weeks while using the account normally. Connectora's opt-in warm-up caps a new account at 5 requests a day in week one, 10 in week two and 15 in week three, then the full limit." } },
          { '@type': 'Question', name: 'Should you withdraw pending LinkedIn invitations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, periodically and slowly. Ignored or pending invitations are a restriction trigger LinkedIn lists. Withdraw oldest first, a few per day. Connectora withdraws up to 25 per account per day by default, spaced minutes apart.' } },
          { '@type': 'Question', name: "Can Connectora guarantee my LinkedIn account won't be restricted?", acceptedAnswer: { '@type': 'Answer', text: "No tool can. LinkedIn's User Agreement restricts automation and LinkedIn decides enforcement. Connectora lowers risk with conservative limits and stops immediately when LinkedIn signals a problem." } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'LinkedIn Account Safety', item: '{{SITE_URL}}/linkedin-account-safety' },
        ],
      },
    ],
  }),
};

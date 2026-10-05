import { btn, demoBtn, secHead, pageHero, splitSection, blockSection, table, featureList, faqSection, closingCta, icon, sources, arrow } from '../ui.mjs';
import { sequenceMock, sendersMock, queueMock, accountMock, withdrawMock, webhookMock } from '../mocks.mjs';

const LI = {
  notes: ['LinkedIn Help: note character limits', 'https://www.linkedin.com/help/linkedin/answer/a6239760'],
  cap: ['LinkedIn Help: personalised invitation limits', 'https://www.linkedin.com/help/linkedin/answer/a563153'],
  restricted: ['LinkedIn Help: restricted from sending invitations', 'https://www.linkedin.com/help/linkedin/answer/a550555'],
};

const statusMock = () => `<figure class="mock" role="img" aria-label="Connectora account list showing connection statuses and a needs-attention bar">
  <div class="mock-card">
    <div class="flex items-center justify-between"><b style="font-size:13px">LinkedIn accounts</b><span class="mtag blue">${icon('lock', 12)}Hosted sign-in</span></div>
    <div class="chip-list mt-3">
      <span class="mtag green">Connected</span><span class="mtag blue">Connecting</span><span class="mtag amber">Action needed</span><span class="mtag amber">Re-auth needed</span><span class="mtag">Disconnected</span><span class="mtag">Stopped</span><span class="mtag red">Error</span>
    </div>
    <div class="mt-4">
      ${[['S', 'b', 'Connected', 'green', 'Premium'], ['P', 'g', 'Connected', 'green', 'Sales Navigator'], ['D', 'p', 'Re-auth needed', 'amber', 'Recruiter']]
        .map(([a, c, s, t, badge]) => `<div class="kv" style="align-items:center"><span class="flex items-center gap-3"><span class="av ${c}">${a}</span><span class="sk w80" style="width:90px"></span></span><span class="flex gap-3 wrap"><span class="mtag">${badge}</span><span class="mtag ${t}">${s}</span></span></div>`).join('')}
    </div>
    <div class="queue-summary mt-3" style="background:#f59e0b14;color:#92400e">${icon('alert', 14)}<span>Needs attention: hit LinkedIn's invite limit, resumes at 9:00</span></div>
  </div>
</figure>`;

const timelineMock = () => `<figure class="mock" role="img" aria-label="Connectora lead timeline showing each event from connection request to reply">
  <div class="mock-card">
    <div class="flex items-center justify-between"><b style="font-size:13px">Lead timeline</b><span class="mtag green">Replied</span></div>
    <ol class="mt-4" style="display:grid;gap:.15rem">
      ${[['userPlus', 'Connection request sent', 'With note · exact note text saved'], ['checkCircle', 'Accepted', 'Acceptance counted in the funnel'], ['message', 'Message delivered', 'Step 2 of the sequence'], ['inbox', 'Replied', 'Follow-ups stopped automatically']]
        .map(([ic, t, s], i) => `<li class="seq-step" style="box-shadow:none;${i === 3 ? 'border-color:var(--blue);background:var(--blue-050)' : ''}"><span class="ic">${icon(ic, 16)}</span><span><b>${t}</b><small>${s}</small></span></li>`).join('')}
    </ol>
  </div>
</figure>`;

const faqs = [
  { q: 'Does Connectora send InMail?', a: 'No. Connectora works with connection requests and messages to your connections. It flags "Open" profiles that can be messaged without a connection during lead sourcing.' },
  { q: 'Can I edit a campaign after launch?', a: 'Yes. Edits apply to steps not yet sent, and the result tells you how many in-flight leads were re-aligned and how many queued leads were rescheduled.' },
  { q: 'Does hiding a campaign stop it?', a: 'No. Hiding only removes it from your lists and dashboard. Use Pause to stop sending.' },
];

export default {
  slug: '/features',
  file: 'features.html',
  nav: 'features',
  title: 'Connectora Features: Multi-Account LinkedIn Outreach Tool',
  llmsTitle: 'Features',
  description: 'Sequences, multi-account sending, plan-ahead scheduling, account safety, invite withdrawals, a unified inbox with AI drafts and CRM webhooks. See it all.',

  body: () => `
${pageHero({
  crumb: 'Features',
  kicker: 'Features',
  h1: 'Every feature you need to run LinkedIn outreach <span class="serif">safely across many accounts</span>',
  lead: 'Connectora covers the full outreach loop: find leads, send connection requests and follow-ups from several LinkedIn accounts, pace every action safely, and handle every reply in one place. Here is everything it does.',
  ctas: `${demoBtn({ magnetic: true })}${btn({ href: '/how-it-works', label: 'How it works', variant: 'ghost' })}`,
})}

${blockSection({
  id: 'overview',
  head: secHead({ kicker: 'Overview', h2: 'What features does <span class="serif">Connectora</span> include?', answer: '<strong>Connectora includes a sequence builder, multi-account sending with pooled limits, plan-ahead scheduling, per-account safety controls and warm-up, paced invite withdrawals, lead sourcing from files, Sales Navigator and LinkedIn posts, a unified inbox with AI reply drafts, campaign analytics, and signed webhooks to your CRM.</strong>' }),
  content: table({
    label: 'Connectora features by area',
    head: ['Area', 'Feature', 'What it does'],
    rows: [
      ['Campaigns', 'Sequence builder', 'Connection request, waits and follow-up messages with personalisation from any column in your file'],
      ['Campaigns', 'Multi-account sending', 'One campaign sends from many LinkedIn accounts, with capacity pooled fairly'],
      ['Campaigns', 'Plan-ahead scheduling', 'Every lead gets an exact send time and sender before anything is sent'],
      ['Safety', 'Daily limits, warm-up, safety score', 'Keeps each account inside a conservative, adjustable pace'],
      ['Safety', 'Automatic back-off and freeze', 'Pauses an account when LinkedIn signals a limit or a security check'],
      ['Safety', 'Paced invite withdrawals', 'Clears old pending invitations slowly, oldest first'],
      ['Leads', 'File upload with validation', 'CSV, TSV, XLSX and XLS with LinkedIn URL checks and duplicate detection'],
      ['Leads', 'Sales Navigator and post engagers', "Build lists from a Sales Navigator search or a post's reactions and comments"],
      ['Inbox', 'Unibox', 'One inbox for every connected account, private chats excluded'],
      ['Inbox', 'AI reply co-pilot', 'Three draft replies per click; a human always sends'],
      ['Inbox', 'Hold &amp; Resume', 'Pauses leads who reply to your connection note so you can respond first'],
      ['Reporting', 'Funnel analytics and lead timelines', 'Acceptance and reply rates per campaign, full history per lead'],
      ['Integrations', 'Signed webhooks', 'Pushes every inbound reply to Zapier, Make or your CRM'],
    ],
  }),
})}

${splitSection({
  id: 'sequence-builder',
  head: secHead({ kicker: 'Campaigns', h2: 'How does the Connectora <span class="serif">sequence builder</span> work?', answer: '<strong>A Connectora sequence starts with a LinkedIn connection request, with or without a personalised note, followed by wait steps and follow-up messages. You can personalise any step with variables from your lead file, preview it against a real lead, and edit the sequence while the campaign is running.</strong>' }),
  content: featureList([
    "<strong>Connection request.</strong> Optional note of up to 300 characters, LinkedIn's own maximum.",
    '<strong>Note-limit policy.</strong> LinkedIn caps how many personalised notes an account can send each month. Choose what happens when that cap is reached: send the invite without the note (default, keeps outreach moving) or hold the lead and keep retrying with the note.',
    '<strong>Wait steps.</strong> Set in days and hours, up to 90 days. Follow-ups always stop if the lead replies.',
    '<strong>Follow-up messages.</strong> Up to 1,900 characters each, with a live character count.',
    '<strong>Variables from your file.</strong> <code>{firstName}</code>, <code>{company}</code> and every other column you upload become variables. Tokens are colour-coded: green when mapped to a column, red when not.',
    '<strong>Live preview.</strong> Renders each message for your first lead. A missing value renders as blank, so a lead never receives a literal <code>{firstName}</code>.',
    '<strong>Sensible default.</strong> New campaigns start with: connection request → wait 1 day → message → wait 3 days → message → wait 7 days → message.',
    '<strong>Edit while running.</strong> Changes apply to steps that have not been sent yet. Leads already mid-sequence are re-aligned, not restarted.',
  ]) + sources([LI.notes, LI.cap]),
  visual: sequenceMock(),
  top: true,
})}

${splitSection({
  id: 'multi-account',
  reverse: true,
  head: secHead({ kicker: 'Sender rotation', h2: 'Can one campaign send from <span class="serif">multiple LinkedIn accounts?</span>', answer: "<strong>Yes. Each Connectora campaign can use any number of connected LinkedIn accounts as senders. Leads are spread across them in proportion to each account's remaining daily allowance, so no profile is drained first, and an account's daily limit is shared across every campaign it sends for.</strong>" }),
  content: featureList([
    '<strong>Pooled capacity.</strong> An account set to 20 requests a day sends 20 in total, not 20 per campaign.',
    '<strong>Sticky senders.</strong> Each lead is planned on one sender. If that account cannot send, the lead is re-planned rather than fired from a random other account.',
    '<strong>No double contact.</strong> The same person is never contacted twice across campaigns. A duplicate is skipped with the note "Already contacted in campaign …".',
  ]),
  visual: sendersMock(),
})}

${splitSection({
  id: 'plan-ahead-scheduling',
  head: secHead({ kicker: 'Scheduling', h2: 'What is <span class="serif">plan-ahead scheduling?</span>', answer: "<strong>Plan-ahead scheduling means Connectora gives every queued lead a concrete send date, time and sender before sending starts. The plan respects each account's limits, working hours and timezone plus the campaign's sending window, so you can see exactly when every invitation will go out and why some are waiting.</strong>" }),
  content: featureList([
    '<strong>Campaign schedule:</strong> timezone, active days and a from/to sending window.',
    "<strong>Account working hours:</strong> each LinkedIn account has its own hours and timezone. Sending happens only where the account's hours and the campaign window overlap.",
    '<strong>Honest queue summary:</strong> for example "212 scheduled today · 257 later this week · 147 from next week (weekly LinkedIn invite limit)".',
    "<strong>Soonest-first queue.</strong> The queued list is sorted by planned time, with the next invite time shown in the campaign's timezone.",
    '<strong>Pause and resume without a burst.</strong> Resuming a paused campaign re-plans every lead from the current moment and respects what each account already sent today.',
  ]),
  visual: queueMock(),
})}

${splitSection({
  id: 'account-safety',
  top: true,
  head: secHead({ kicker: 'Safety', h2: 'How does Connectora <span class="serif">protect LinkedIn accounts?</span>', answer: '<strong>Connectora protects accounts with a conservative default of 20 connection requests per account per day, a software-enforced ceiling, randomised delays, opt-in warm-up for new accounts, a per-account safety score, automatic pauses when LinkedIn signals a limit, and an instant freeze if LinkedIn asks for a security check.</strong>' }),
  content: table({
    label: 'Connectora safety controls',
    head: ['Control', 'Default or behaviour'],
    rows: [
      ['Daily connection requests', '20 per account per day by default; adjustable up to a hard ceiling no setting can exceed'],
      ['Weekly invitation ceiling', 'Tracked per account, Monday to Monday'],
      ['Follow-up messages', '40 per account per day by default'],
      ['Timing', 'Randomised gaps between actions, only inside working hours'],
      ['Warm-up (opt-in)', '5 → 10 → 15 per day, then the full limit after three weeks'],
      ['Safety score', 'Bands from restricted to strong, with a suggested daily limit'],
      ['LinkedIn limit reached', 'That account pauses until its next sending window; leads are re-planned, not failed'],
      ['Security check or restriction', 'The account freezes until you reconnect it'],
      ['Failed-attempt budget', 'Refused attempts count too, so an account can never retry in a loop'],
    ],
  }) + `<p class="mt-6">Full detail on <a class="inline-link" href="/linkedin-account-safety">LinkedIn account safety</a>.</p>`,
  visual: accountMock(),
})}

${splitSection({
  id: 'invite-withdrawals',
  reverse: true,
  head: secHead({ kicker: 'Invitations', h2: 'How do automatic <span class="serif">invite withdrawals</span> work?', answer: '<strong>Connectora withdraws pending LinkedIn invitations as a slow, scheduled queue instead of a burst. You pick invitations by age, or switch on auto-withdraw with a threshold between 7 and 90 days. Withdrawals run oldest first, inside working hours, up to 25 per account per day by default, spaced minutes apart.</strong>' }),
  content: featureList([
    '<strong>Manual mode:</strong> select by age bucket: older than 30 days, 14 to 30 days, 7 to 14 days, last 7 days, unknown age.',
    '<strong>Auto mode:</strong> per account, opt-in. By default it only withdraws invitations Connectora sent, never ones you sent by hand.',
    '<strong>Built-in caution:</strong> invitations of unknown age are never auto-withdrawn. Selecting 1,000 creates roughly a 40-day drip.',
    '<strong>Why it matters:</strong> a large pile of ignored invitations can count against an account, and LinkedIn lists "invitations ignored or left pending" as a reason for invitation restrictions.',
  ]) + sources([LI.restricted]),
  visual: withdrawMock(),
})}

${splitSection({
  id: 'accounts',
  head: secHead({ kicker: 'Accounts', h2: 'How do I connect and manage <span class="serif">LinkedIn accounts?</span>', answer: '<strong>You connect each LinkedIn account through a secure hosted sign-in page, so Connectora never sees your password or cookies. Each account then shows its status, Premium, Sales Navigator or Recruiter badges, daily limit, working hours, warm-up setting and safety score. If an account needs re-authorising, you reconnect it in place without losing history.</strong>' }),
  content: featureList([
    '<strong>Status at a glance:</strong> Connected, Connecting, Action needed, Re-auth needed, Disconnected, Stopped or Error.',
    '<strong>Needs-attention bar:</strong> surfaces only what blocks sending, for example "hit LinkedIn\'s invite limit, resumes at 9:00".',
    "<strong>Reconnect in place:</strong> keeps the account's limits, warm-up history and conversations.",
    '<strong>Nothing silently deleted:</strong> removing an account or a campaign archives a full snapshot first.',
  ]),
  visual: statusMock(),
})}

${splitSection({
  id: 'reporting',
  reverse: true,
  head: secHead({ kicker: 'Reporting', h2: 'What <span class="serif">reporting</span> does Connectora provide?', answer: '<strong>Connectora reports a funnel for every campaign and for the whole workspace: connection requests sent, connected, replied, completed and failed. Acceptance rate is connected divided by sent; reply rate is replied divided by connected. Each lead also has a timeline showing exactly what happened and what comes next.</strong>' }),
  content: featureList([
    '<strong>Clickable funnel cards</strong> filter the lead table to that stage.',
    '<strong>Totals are recomputed from summed counts,</strong> never averaged across campaigns, and incomplete figures are labelled rather than shown as zero.',
    '<strong>Lead timeline:</strong> connection request sent (with or without note, including the exact note text), accepted, every message delivered, replies, and any failure reason with its retry date.',
    "<strong>Retry failed leads</strong> with one click. Leads inside LinkedIn's re-invite cooldown are skipped and the button shows the earliest retry date.",
  ]),
  visual: timelineMock(),
})}

${splitSection({
  id: 'crm-integration',
  head: secHead({ kicker: 'Integrations', h2: 'Does Connectora integrate with <span class="serif">my CRM?</span>', answer: "<strong>Yes, through webhooks. Connectora sends a signed HTTPS request for every inbound LinkedIn reply to a URL you choose, such as a Zapier or Make webhook or your CRM's endpoint. The payload includes the conversation history, a link back to the thread, and a signature your system can verify.</strong>" }),
  content: featureList([
    '<strong>One delivery per reply,</strong> even if the same message is detected twice.',
    '<strong>Automatic retries</strong> with back-off for temporary failures.',
    '<strong>Safe destinations only:</strong> internal and private network addresses are rejected.',
  ]),
  visual: `<div class="mock-card" style="padding:clamp(1.5rem,4vw,3rem) 1rem">${webhookMock()}</div>`,
})}

${blockSection({
  id: 'inbox-and-leads',
  head: secHead({ kicker: 'More', h2: 'What about the inbox and <span class="serif">lead sourcing?</span>', center: true, answer: "<strong>Connectora's Unibox brings replies from every connected LinkedIn account into one view, with AI reply drafts that a person approves and Hold &amp; Resume for note replies. For lead sourcing, Connectora imports CSV and Excel files, Sales Navigator searches and LinkedIn post engagers, and validates every profile before sending.</strong>" }),
  content: `<div class="gap-grid cols-2" style="max-width:58rem;margin-inline:auto">
    ${[['/unibox', 'inbox', 'Unibox &amp; AI replies', 'Details: one inbox for every account, three AI drafts per click, Hold &amp; Resume.'], ['/linkedin-lead-sourcing', 'search', 'LinkedIn lead sourcing', 'Details: Sales Navigator searches, post engagers and validated file uploads.']]
      .map(([h, ic, t, d]) => `<a href="${h}" class="path-card card card-hover card-pad group"><span class="icon-tile">${icon(ic, 22)}</span><h3 class="t-h4 mt-6">${t}</h3><p class="mt-3 text-muted" style="flex:1">${d}</p><span class="text-link mt-6">Read more${arrow(16)}</span></a>`).join('')}
  </div>`,
})}

${faqSection(faqs)}

${closingCta({
  heading: 'See these features on your own campaign',
  body: "Bring a lead list. We'll show you the plan, the pace and the inbox in a short demo.",
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': '{{SITE_URL}}/features#webpage',
        url: '{{SITE_URL}}/features',
        name: 'Connectora Features: Multi-Account LinkedIn Outreach Tool',
        description: 'Sequences, multi-account sending, plan-ahead scheduling, account safety, invite withdrawals, a unified inbox with AI drafts and CRM webhooks.',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': '{{SITE_URL}}/#connectora',
        name: 'Connectora',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web browser',
        featureList: [
          'Sequence builder with connection requests, waits and follow-ups',
          'Personalisation variables from any uploaded column',
          'Multi-account sending with pooled daily limits',
          'Plan-ahead scheduling with per-lead send time and sender',
          'Default 20 connection requests per account per day with a hard ceiling',
          'Opt-in three-week warm-up for new LinkedIn accounts',
          'Per-account safety score and suggested daily limit',
          'Automatic pause when LinkedIn signals a limit',
          'Paced manual and automatic withdrawal of pending invitations',
          'Unified inbox with AI reply drafts and human approval',
          'Hold & Resume for replies to connection notes',
          'Campaign funnel analytics and per-lead timelines',
          'Signed webhooks to Zapier, Make and CRMs',
        ],
        publisher: { '@id': '{{SITE_URL}}/#growthmak' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Features', item: '{{SITE_URL}}/features' },
        ],
      },
    ],
  }),
};

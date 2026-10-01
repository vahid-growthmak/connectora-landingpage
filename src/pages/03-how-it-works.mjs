import { btn, demoBtn, secHead, pageHero, blockSection, stickySection, table, featureList, orderedList, faqSection, closingCta, sources } from '../ui.mjs';
import { accountMock, leadValidationMock, sequenceMock, sendersMock, queueMock, holdMock, withdrawMock } from '../mocks.mjs';

const stepNum = (n) => `<span class="pnum" aria-hidden="true" style="display:block;margin-top:2rem;font-size:clamp(3.5rem,7vw,6rem);font-weight:600;line-height:1;letter-spacing:-0.04em;color:var(--blue);opacity:.14">0${n}</span>`;

const faqs = [
  { q: 'How long does setup take?', a: 'Connecting an account takes a couple of minutes. A first campaign with a ready lead list can be built in one sitting. We walk you through it on the demo.' },
  { q: 'Can I run several campaigns from the same LinkedIn account?', a: "Yes. The account's daily limit is shared across all of them, so running more campaigns never multiplies its volume." },
  { q: 'What if a lead accepted but never replied?', a: 'They receive the remaining follow-ups in your sequence, then move to Completed.' },
];

export default {
  slug: '/how-it-works',
  file: 'how-it-works.html',
  nav: 'how',
  title: 'How Connectora Works: LinkedIn Outreach in 7 Safe Steps',
  llmsTitle: 'How it works',
  description: 'Connect accounts, add leads, build a sequence, set the schedule and launch. See exactly how Connectora plans, paces and stops LinkedIn outreach on reply.',

  body: () => `
${pageHero({
  crumb: 'How It Works',
  kicker: 'How it works',
  h1: 'How Connectora runs LinkedIn outreach, <span class="serif">step by step</span>',
  lead: 'Most of Connectora\'s work happens before and after a message is sent: checking leads, planning a safe pace, and stopping the moment someone replies. Here is the full journey, from connecting an account to a booked conversation.',
  ctas: `${demoBtn({ magnetic: true })}${btn({ href: '#step-1', label: 'Start at step 1', variant: 'ghost' })}`,
})}

${blockSection({
  id: 'overview',
  head: secHead({ kicker: 'The seven steps', h2: 'How does LinkedIn outreach automation work in <span class="serif">Connectora?</span>', answer: "<strong>Connectora works in seven steps: connect LinkedIn accounts, add and validate leads, build a sequence, choose senders and a schedule, launch, handle replies in the Unibox, then measure and clean up. Connectora plans every lead's send time in advance, paces each account, and stops follow-ups as soon as a lead replies.</strong>" }),
  content: table({
    label: 'The seven steps of a Connectora campaign',
    head: ['Step', 'What you do', 'What Connectora does'],
    rows: [
      ['<a class="inline-link" href="#step-1">1. Connect</a>', 'Sign in to LinkedIn on a secure hosted page', 'Stores the connection, never your password; reads profile badges'],
      ['<a class="inline-link" href="#step-2">2. Add leads</a>', 'Upload a file or pull a list', 'Validates every URL, flags duplicates and company pages'],
      ['<a class="inline-link" href="#step-3">3. Build sequence</a>', 'Write the invite and follow-ups', 'Checks length limits and variables, shows a live preview'],
      ['<a class="inline-link" href="#step-4">4. Schedule</a>', 'Pick senders, days and hours', 'Plans a send time and sender for every lead'],
      ['<a class="inline-link" href="#step-5">5. Launch</a>', 'Click Launch', 'Sends inside limits, backs off when LinkedIn signals a limit'],
      ['<a class="inline-link" href="#step-6">6. Reply</a>', 'Answer in the Unibox', 'Stops the sequence, drafts AI replies, holds note replies for review'],
      ['<a class="inline-link" href="#step-7">7. Measure</a>', 'Read the funnel', 'Calculates acceptance and reply rates, withdraws stale invites slowly'],
    ],
  }),
})}

${stickySection({
  id: 'step-1',
  kicker: 'Step 1 of 7',
  h2: '<span class="serif">Step 1:</span> How do I connect a LinkedIn account?',
  answer: '<strong>Click Connect LinkedIn and sign in on the secure hosted page that opens. Connectora receives a connection to the account, never your password or cookies. Once connected, the account shows its status, any Premium, Sales Navigator or Recruiter seat, and settings for daily limit, working hours, timezone and warm-up.</strong>',
  aside: stepNum(1),
  content: featureList([
    'Default settings: 20 connection requests a day, 09:00 to 17:00, Monday to Friday. Change them per account.',
    'Brand-new LinkedIn account? Tick <strong>warm-up</strong>. It ramps from 5 to 10 to 15 requests a day and reaches your full limit after three weeks.',
    'If LinkedIn later asks you to re-verify, reconnect in place. Limits, history and conversations stay.',
  ]) + `<p class="text-muted">Why these defaults: <a class="inline-link" href="/linkedin-account-safety">LinkedIn account safety</a>.</p>` + accountMock(),
})}

${stickySection({
  id: 'step-2',
  kicker: 'Step 2 of 7',
  h2: '<span class="serif">Step 2:</span> How do I add leads?',
  answer: "<strong>Upload a CSV, TSV, XLSX or XLS file with a LinkedIn profile URL column, up to 25 MB and 50,000 rows, or build a list from a Sales Navigator search or a LinkedIn post's reactions and comments. Connectora finds the URL column automatically and checks every row before anything is sent.</strong>",
  aside: stepNum(2),
  content: `<p class="overline">Every row gets one of four statuses</p>` + table({
    label: 'Lead row statuses',
    head: ['Status', 'Meaning', 'Contacted?'],
    rows: [
      ['<span class="status ok">Valid</span>', 'Clean profile URL, rewritten to a standard format', 'Yes'],
      ['<span class="status warn">Warning</span>', 'Valid URL but no first name, so <code>{firstName}</code> would be blank', 'Yes'],
      ['<span class="status bad">Invalid</span>', 'Precise reason, such as "This is a company page, not a personal profile"', 'No'],
      ['<span class="status dup">Duplicate</span>', 'Same person as an earlier row', 'No'],
    ],
  }) + `<p class="t-lead">People already contacted by another of your campaigns are skipped automatically. See <a class="inline-link" href="/linkedin-lead-sourcing">LinkedIn lead sourcing</a> for Sales Navigator and post engagers.</p>` + leadValidationMock(),
})}

${stickySection({
  id: 'step-3',
  kicker: 'Step 3 of 7',
  h2: '<span class="serif">Step 3:</span> How do I build the message sequence?',
  answer: '<strong>Start with a connection request, then add wait steps and follow-up messages. Notes can be up to 300 characters and messages up to 1,900. Personalise with any column from your file, such as <code>{firstName}</code> or <code>{company}</code>, and preview each step against a real lead before you launch.</strong>',
  aside: stepNum(3),
  content: `<p class="overline">The default sequence is a sound starting point</p>` + orderedList([
    'Connection request (note optional)',
    'Wait 1 day after they accept → message 1',
    'Wait 3 days → message 2',
    'Wait 7 days → message 3',
  ]) + `<p class="t-lead">Follow-ups only go to people who accepted, and they always stop if the lead replies. Decide what happens when LinkedIn's monthly note allowance runs out: send the invite without the note (default) or hold until a note can be sent.</p>
  <h3 class="t-h4">Writing tips that fit LinkedIn:</h3>` + featureList([
    'Keep the note about them, not your offer. One line on why you want to connect.',
    'Make message 1 useful on its own: one observation and one easy question.',
    'Space follow-ups out. Each wait step can be up to 90 days.',
  ]) + sources([['LinkedIn Help: note character limits', 'https://www.linkedin.com/help/linkedin/answer/a6239760'], ['LinkedIn Help: personalised invitation limits', 'https://www.linkedin.com/help/linkedin/answer/a563153']]) + sequenceMock(),
})}

${stickySection({
  id: 'step-4',
  kicker: 'Step 4 of 7',
  h2: '<span class="serif">Step 4:</span> How do I choose senders and a schedule?',
  answer: "<strong>Select one or more connected LinkedIn accounts as senders, then set the campaign timezone, active days and sending window. Connectora only sends where the campaign window and each account's own working hours overlap, and it shares each account's daily allowance across every campaign that account sends for.</strong>",
  aside: stepNum(4),
  content: featureList([
    "<strong>Senders:</strong> add as many accounts as you like. Leads are spread according to each account's remaining capacity.",
    "<strong>Window:</strong> for example 08:00 to 18:30, Monday to Friday, in your prospects' timezone.",
    "<strong>Check the overlap:</strong> if an account's working hours never overlap the campaign window, that account will not send for that campaign. Compare both before you launch.",
  ]) + sendersMock(),
})}

${stickySection({
  id: 'step-5',
  kicker: 'Step 5 of 7',
  h2: '<span class="serif">Step 5:</span> What happens when I launch?',
  answer: "<strong>On launch, Connectora gives every valid lead a planned send date, time and sender, then sends each step when it falls due. Every action passes the account's daily limit, weekly ceiling, working hours and health checks first. If LinkedIn signals a limit, that account pauses and its leads are re-planned.</strong>",
  aside: stepNum(5),
  content: featureList([
    '<strong>See the plan:</strong> the Queued view lists leads soonest first and explains waits, for example "147 from next week (weekly LinkedIn invite limit)".',
    '<strong>Pause any time.</strong> Resume re-plans from the current moment, so a paused campaign never bursts when it restarts.',
    '<strong>Save as draft</strong> if you are not ready. Drafts send nothing.',
  ]) + `<p class="text-muted">How the limits and back-off work: <a class="inline-link" href="/linkedin-account-safety">LinkedIn account safety</a>.</p>` + queueMock(),
})}

${stickySection({
  id: 'step-6',
  kicker: 'Step 6 of 7',
  h2: '<span class="serif">Step 6:</span> What happens when a lead replies?',
  answer: '<strong>When a lead replies, Connectora stops their follow-ups and shows the conversation in the Unibox. Before every follow-up it also re-checks the conversation for a reply. If someone answers your connection note before you have messaged them, Connectora holds them for review so you can respond personally, then resume them with one click.</strong>',
  aside: stepNum(6),
  content: featureList([
    '<strong>AI co-pilot:</strong> click Draft with AI for three reply options in the mode you choose. You edit and send; nothing goes automatically.',
    '<strong>Hold &amp; Resume:</strong> the warmest leads, people who reply to your note, never fall out of the campaign by accident.',
    '<strong>CRM:</strong> each reply can trigger a signed webhook to Zapier, Make or your CRM.',
  ]) + `<p class="t-lead">More on <a class="inline-link" href="/unibox">Unibox &amp; AI replies</a>.</p>` + holdMock(),
})}

${stickySection({
  id: 'step-7',
  kicker: 'Step 7 of 7',
  h2: '<span class="serif">Step 7:</span> How do I measure results and keep accounts healthy?',
  answer: "<strong>Open the campaign funnel to see connection requests sent, connected, replied, completed and failed, with acceptance and reply rates. Click any stage to see those leads and their full timelines. Then withdraw stale pending invitations from each account's page; Connectora drips them out slowly, oldest first.</strong>",
  aside: stepNum(7),
  content: featureList([
    '<strong>Acceptance rate</strong> = connected ÷ sent. <strong>Reply rate</strong> = replied ÷ connected.',
    "<strong>Retry failed leads</strong> with one click; leads inside LinkedIn's re-invite cooldown are skipped until their date.",
    '<strong>Auto-withdraw</strong> (opt-in): set an age threshold between 7 and 90 days.',
  ]) + `<p class="text-muted">Every feature in one place: <a class="inline-link" href="/features">Features</a>.</p>` + withdrawMock(),
})}

${faqSection(faqs)}

${closingCta({ heading: 'Walk through these seven steps with your own leads' })}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': '{{SITE_URL}}/how-it-works#howto',
        name: 'How to run a LinkedIn outreach campaign with Connectora',
        description: 'Connect LinkedIn accounts, add and validate leads, build a sequence, choose senders and a schedule, launch, handle replies and measure results.',
        tool: [{ '@type': 'HowToTool', name: 'Connectora' }],
        supply: [{ '@type': 'HowToSupply', name: 'Lead list with LinkedIn profile URLs (CSV, TSV, XLSX or XLS)' }],
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Connect LinkedIn accounts', text: 'Sign in on a secure hosted page. Connectora never sees your password. Set daily limit, working hours, timezone and optional warm-up.', url: '{{SITE_URL}}/how-it-works#step-1' },
          { '@type': 'HowToStep', position: 2, name: 'Add and validate leads', text: 'Upload a file of LinkedIn profile URLs or build a list from Sales Navigator or a LinkedIn post. Invalid and duplicate rows are flagged and never contacted.', url: '{{SITE_URL}}/how-it-works#step-2' },
          { '@type': 'HowToStep', position: 3, name: 'Build the message sequence', text: "Add a connection request with an optional note of up to 300 characters, then wait steps and follow-up messages personalised with your file's columns.", url: '{{SITE_URL}}/how-it-works#step-3' },
          { '@type': 'HowToStep', position: 4, name: 'Choose senders and a schedule', text: 'Select one or more LinkedIn accounts and set the campaign timezone, active days and sending window.', url: '{{SITE_URL}}/how-it-works#step-4' },
          { '@type': 'HowToStep', position: 5, name: 'Launch the campaign', text: "Connectora plans a send time and sender for every lead and sends each step inside every account's limits.", url: '{{SITE_URL}}/how-it-works#step-5' },
          { '@type': 'HowToStep', position: 6, name: 'Handle replies in the Unibox', text: 'Replies stop follow-ups and appear in one inbox, with AI-drafted responses a person approves and Hold & Resume for note replies.', url: '{{SITE_URL}}/how-it-works#step-6' },
          { '@type': 'HowToStep', position: 7, name: 'Measure and clean up', text: 'Track acceptance and reply rates in the campaign funnel and withdraw stale pending invitations slowly, oldest first.', url: '{{SITE_URL}}/how-it-works#step-7' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'How It Works', item: '{{SITE_URL}}/how-it-works' },
        ],
      },
    ],
  }),
};

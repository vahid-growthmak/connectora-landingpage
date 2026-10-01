import { btn, demoBtn, secHead, pageHero, splitSection, stickySection, blockSection, table, featureList, orderedList, faqSection, closingCta, icon } from '../ui.mjs';
import { uniboxMock, holdMock, miniPrivate, webhookMock } from '../mocks.mjs';

const composerMock = () => `<figure class="mock" role="img" aria-label="Connectora Unibox reply composer with file attachments, a voice note and the sending account shown in the footer">
  <div class="mock-window">
    <div class="ubx-msgs" style="padding:1.25rem">
      <span class="daysep">Today</span>
      <div class="bubble in"><span class="sk w90"></span><span class="sk w60"></span></div>
      <div class="bubble out" style="width:auto;display:flex;align-items:center;gap:.6rem;color:#fff;font-size:12px;font-weight:600">${icon('play', 14)}<span style="flex:1;height:18px;background:repeating-linear-gradient(90deg,#ffffffb3 0 2px,transparent 2px 5px);border-radius:4px;min-width:140px"></span>0:24</div>
    </div>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap;padding:0 1rem">
      ${['proposal.pdf', 'case-study.pdf'].map((f) => `<span class="mtag">${icon('file', 12)}${f}</span>`).join('')}<span class="mtag blue">Up to 5 files · 15 MB each</span>
    </div>
    <div class="composer">${icon('paperclip', 15)}${icon('mic', 15)}<span class="from">Sending from <span class="av b">S</span></span><span class="send">Send · Ctrl/⌘ + Enter</span></div>
  </div>
</figure>`;

const importMock = () => `<figure class="mock" role="img" aria-label="Connectora Import Chat preview showing the owning account, a profile URL, connection status and the last messages">
  <div class="mock-card">
    <div class="flex items-center justify-between"><b style="font-size:13px">Import Chat</b><span class="mtag">Preview up to 12 messages</span></div>
    <div class="mt-3">
      <div class="kv"><span>Account that owns the chat</span><b class="flex items-center gap-3"><span class="av b">S</span></b></div>
      <div class="kv"><span>Lead profile URL</span><b style="color:var(--muted);font-weight:500">linkedin.com/in/…</b></div>
    </div>
    <p class="overline mt-4">Can you message this person?</p>
    <div class="mt-2" style="display:grid;gap:.4rem">
      <div class="seq-step" style="box-shadow:none"><span class="status ok">Yes</span><small style="margin-left:.25rem">First-degree or Open Profile</small></div>
      <div class="seq-step" style="box-shadow:none"><span class="status warn">Wait</span><small style="margin-left:.25rem">Invitation pending</small></div>
      <div class="seq-step" style="box-shadow:none"><span class="status dup">Connect first</span><small style="margin-left:.25rem">Second or third degree</small></div>
    </div>
    <div class="queue-summary mt-3">${icon('info', 14)}<span>Imported threads never receive automated steps or count in campaign stats.</span></div>
  </div>
</figure>`;

const faqs = [
  { q: 'Does the AI send messages automatically?', a: 'No. It only drafts. A person must choose a draft, edit if needed, and click Send.' },
  // TODO: confirm that company context and tone rules are configured with each client during onboarding, then extend this answer.
  { q: 'Can I use my own wording rules for AI drafts?', a: 'Yes. Add guidance each time you draft (for example "mention the audit, keep it under 40 words"), and the drafts follow it.' },
  { q: 'Will the Unibox show messages from LinkedIn accounts that are not used in campaigns?', a: 'No. Only accounts that send for your campaigns are synced, and only outreach conversations are shown.' },
  { q: 'Do follow-ups stop if a lead replies on another channel?', a: 'Connectora detects replies on LinkedIn. If a lead replies by email or phone, pause or complete them manually.' },
];

export default {
  slug: '/unibox',
  file: 'unibox.html',
  nav: 'unibox',
  title: 'Unibox: One Inbox for All LinkedIn Accounts, AI Replies',
  llmsTitle: 'Unibox & AI replies',
  description: 'Answer replies from every LinkedIn sender account in one inbox. Get three AI drafts per click, approve before sending, keep personal chats private.',

  body: () => `
${pageHero({
  crumb: 'Unibox',
  kicker: 'Unibox &amp; AI replies',
  h1: 'Every LinkedIn reply, from every account, <span class="serif">in one inbox</span>',
  lead: 'The Unibox collects replies from all your LinkedIn sender accounts, puts unread conversations first, and drafts three replies on request. You decide what gets sent. Personal chats stay private.',
  ctas: `${demoBtn({ magnetic: true })}${btn({ href: '#ai-co-pilot', label: 'See the AI co-pilot', variant: 'ghost' })}`,
  below: `<div class="bleed mt-16" data-reveal style="--reveal-delay:250ms"><div class="rise-panel">${uniboxMock('Connectora Unibox with a conversation list filtered by campaign and an open thread showing AI draft options')}</div></div>`,
})}

${stickySection({
  id: 'what-is-the-unibox',
  kicker: 'The Unibox',
  h2: 'What is the Connectora <span class="serif">Unibox?</span>',
  answer: "<strong>The Unibox is Connectora's single inbox for every LinkedIn account connected as a sender. It shows each outreach conversation with the account it came from, lifts unread replies to the top, and lets you reply with text, files or voice notes. Replies automatically stop that lead's follow-up sequence.</strong>",
  content: featureList([
    '<strong>Filter by sending account</strong> with one click on its avatar.',
    '<strong>Search</strong> by name, last message or headline.',
    '<strong>Filter by date range, campaign, or replies only.</strong> Filters combine.',
    '<strong>Unread first.</strong> New replies rise to the top; an opened thread keeps its place until you move on.',
    '<strong>Deep links.</strong> "View in Unibox" on any campaign lead opens the exact conversation, and CRM links can point straight to a thread.',
  ]) + `<p class="text-muted">Conversations come from your <a class="inline-link" href="/features">campaigns</a>.</p>`,
})}

${blockSection({
  id: 'ai-co-pilot',
  head: secHead({ kicker: 'AI co-pilot', h2: 'How does the <span class="serif">AI reply co-pilot</span> work?', answer: '<strong>Click Draft with AI in any conversation and choose a goal: natural reply, follow-up, handle an objection, or propose a meeting. Add optional guidance. The co-pilot reads the last ten messages, the lead\'s LinkedIn profile and your company context, then writes three drafts. You pick one, edit it, and click Send yourself.</strong>' }),
  content: `<div class="split top">
    <div>${table({
      label: 'AI co-pilot modes',
      head: ['Mode', 'What the drafts aim to do'],
      rows: [
        ['Natural reply', 'Answer the last message in a normal, human way'],
        ['Follow-up', 'Re-open a quiet thread with one low-friction question, no pitch'],
        ['Handle objection', 'Address the concern honestly, using only facts from your company context'],
        ['Propose a meeting', 'Move to a concrete next step with one clear call to action'],
      ],
    })}</div>
    <div>${featureList([
      '<strong>Three lengths</strong> to choose from: short, medium and detailed.',
      '<strong>On demand only.</strong> Drafts are generated when you click, for the conversation you are in. Nothing runs in bulk.',
      '<strong>Human in the loop by design.</strong> The co-pilot cannot send messages. Only a person clicking Send can.',
    ])}</div>
  </div>`,
})}

${splitSection({
  id: 'hold-and-resume',
  top: true,
  head: secHead({ kicker: 'Hold &amp; Resume', h2: 'What is <span class="serif">Hold &amp; Resume?</span>', answer: '<strong>Hold &amp; Resume protects your warmest leads. If someone replies to your connection note before you have sent them a message, Connectora pauses their sequence and flags the conversation for review instead of closing them out. You reply personally, then click Resume to put them back into the campaign when they accept.</strong>' }),
  content: `<p class="t-lead">Why it matters: a person who reads your note and answers it is often your most interested prospect. Without a hold, an automated sequence could either talk over them or drop them entirely. With Hold &amp; Resume:</p>`
    + orderedList(['The reply arrives and the lead is marked replied and held.', 'The Unibox shows a Resume banner on that conversation.', 'You answer. When you are ready, click <strong>Resume</strong> and the lead continues with the sequence.'])
    + `<p class="t-lead">Connectora also re-checks every conversation right before a follow-up goes out. If the lead has replied, the follow-up is not sent.</p>
       <p class="text-muted">How this fits the wider safety approach: <a class="inline-link" href="/linkedin-account-safety">LinkedIn account safety</a>.</p>`,
  visual: holdMock(),
})}

${splitSection({
  id: 'privacy',
  reverse: true,
  head: secHead({ kicker: 'Privacy', h2: 'Will other people see my <span class="serif">personal LinkedIn messages?</span>', answer: '<strong>No. The Unibox only stores and shows conversations with people Connectora itself contacted through your campaigns, or conversations you deliberately import. Personal LinkedIn chats on a connected account, with friends, colleagues or anyone else, are never pulled into Connectora at any point.</strong>' }),
  content: `<p class="t-lead">This matters most when a team connects several real people's LinkedIn accounts. Each person's private inbox stays private; only the outreach threads are shared.</p>`,
  visual: `<div class="panel-dark" style="padding:clamp(1.5rem,4vw,3rem);display:grid;place-items:center;background:radial-gradient(80% 70% at 70% 30%,#0787fe33,transparent 70%),var(--ink)">${miniPrivate()}</div>`,
})}

${splitSection({
  id: 'what-can-i-send',
  head: secHead({ kicker: 'Replying', h2: 'What can I send from <span class="serif">the Unibox?</span>', answer: '<strong>From the Unibox you can send text, up to five file attachments of 15 MB each, voice notes that LinkedIn plays as a native voice message, and emoji. Press Ctrl or Cmd plus Enter to send. A footer always shows which LinkedIn account the reply will go from.</strong>' }),
  content: featureList([
    '<strong>Received files</strong> open securely inside Connectora.',
    '<strong>Day separators</strong> (Today, Yesterday, dates) make long threads easy to scan.',
    '<strong>Sync</strong> pulls in anything new; opening a thread refreshes that conversation.',
  ]),
  visual: composerMock(),
})}

${splitSection({
  id: 'import-chat',
  reverse: true,
  top: true,
  head: secHead({ kicker: 'Import Chat', h2: 'Can I import existing <span class="serif">LinkedIn conversations?</span>', answer: "<strong>Yes. Import Chat brings an existing LinkedIn conversation into the Unibox, for example when you move from another tool. Choose the account that owns the chat, paste the lead's profile URL, preview up to the last 12 messages, then import. If no chat exists yet with a first-degree connection, you can write the first message there.</strong>" }),
  content: featureList([
    '<strong>Connection-aware.</strong> Before you type, Connectora tells you whether you can message the person: first-degree or Open Profile (yes), invitation pending (wait), or second or third degree (connect first).',
    '<strong>Kept separate from campaigns.</strong> Imported conversations never receive automated steps and never count in campaign statistics or dashboard totals.',
    '<strong>No duplicates.</strong> Messages keep their original identity, so later syncs never show them twice.',
  ]),
  visual: importMock(),
})}

${splitSection({
  id: 'crm',
  head: secHead({ kicker: 'CRM', h2: 'How do LinkedIn replies get into <span class="serif">my CRM?</span>', answer: "<strong>Connectora sends a signed webhook for every inbound LinkedIn reply to a URL you set, such as a Zapier or Make webhook or your CRM's own endpoint. The payload includes the conversation history and a link to the thread in the Unibox, so your sales team can follow up where they already work.</strong>" }),
  content: featureList([
    '<strong>Exactly one delivery per message,</strong> with automatic retries for temporary failures.',
    '<strong>Verifiable signature</strong> so your system can confirm the request came from Connectora.',
  ]) + `<p class="text-muted">Where replies fit in the full journey: <a class="inline-link" href="/how-it-works#step-6">How it works, Step 6</a>.</p>`,
  visual: `<div class="mock-card" style="padding:clamp(1.5rem,4vw,3rem) 1rem">${webhookMock()}</div>`,
})}

${faqSection(faqs)}

${closingCta({ heading: 'See your replies, drafted and ready, in one place' })}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': '{{SITE_URL}}/unibox#webpage',
        url: '{{SITE_URL}}/unibox',
        name: 'Unibox: One Inbox for All LinkedIn Accounts, AI Replies',
        description: 'Read and answer replies from every LinkedIn sender account in one inbox, with three AI reply drafts per click that a person approves before sending.',
        isPartOf: { '@id': '{{SITE_URL}}/#website' },
        about: { '@id': '{{SITE_URL}}/#connectora' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the Connectora Unibox?', acceptedAnswer: { '@type': 'Answer', text: "The Unibox is Connectora's single inbox for every LinkedIn account connected as a sender. It shows each outreach conversation with the account it came from, lifts unread replies to the top, and lets you reply with text, files or voice notes. Replies automatically stop that lead's follow-up sequence." } },
          { '@type': 'Question', name: "Does Connectora's AI send LinkedIn messages automatically?", acceptedAnswer: { '@type': 'Answer', text: 'No. The AI co-pilot only drafts three reply options. A person must choose a draft, edit it if needed, and click Send.' } },
          { '@type': 'Question', name: 'What is Hold & Resume in Connectora?', acceptedAnswer: { '@type': 'Answer', text: 'If someone replies to your connection note before you have messaged them, Connectora pauses their sequence and flags the conversation for review instead of closing them out. You reply personally, then click Resume to return them to the campaign.' } },
          { '@type': 'Question', name: 'Does the Connectora Unibox show personal LinkedIn messages?', acceptedAnswer: { '@type': 'Answer', text: 'No. It only stores and shows conversations with people Connectora contacted through your campaigns, or conversations you deliberately import. Personal chats are never pulled in.' } },
          { '@type': 'Question', name: 'How do LinkedIn replies get into a CRM with Connectora?', acceptedAnswer: { '@type': 'Answer', text: 'Connectora sends a signed webhook for every inbound LinkedIn reply to a URL you set, such as a Zapier or Make webhook or a CRM endpoint, including the conversation history and a link to the thread.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Unibox', item: '{{SITE_URL}}/unibox' },
        ],
      },
    ],
  }),
};

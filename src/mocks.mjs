// Product UI illustrations rendered in HTML/CSS (stand-ins until real, blurred screenshots exist).
// Every label or number shown here comes from the product facts in the content brief.
// Lead names are never shown: initials and skeleton bars only.
import { icon, mark, tick } from './ui.mjs';

const fig = (label, inner, cls = '') => `<figure class="mock ${cls}" role="img" aria-label="${label}">${inner}</figure>`;
const sk = (w, d = false) => `<span class="sk w${w}${d ? ' d' : ''}"></span>`;
const av = (t, c = '') => `<span class="av ${c}">${t}</span>`;
const bar = (url = 'Campaigns') => `<div class="mock-bar"><i></i><i></i><i></i><span class="url">${url}</span></div>`;

const side = (on) => `<aside class="mock-side">
  <div class="brandlet">${mark('')}<span>CONNECTORA</span></div>
  <div class="mock-nav">
    ${[['grid', 'Dashboard'], ['send', 'Campaigns'], ['users', 'Accounts'], ['inbox', 'Unibox'], ['list', 'Leads'], ['webhook', 'Integrations']]
      .map(([i, l]) => `<span class="${l === on ? 'on' : ''}">${icon(i, 15)}${l}</span>`).join('')}
  </div>
</aside>`;

/* ---------- Home hero: campaign dashboard ---------- */
export const heroDashboard = () => fig(
  'Connectora campaign dashboard showing a LinkedIn outreach funnel from queued to replied',
  `<div class="mock-window">${bar('Campaigns / CLIENT-UAE-D2C-FASHION')}
  <div class="mock-body with-side">${side('Campaigns')}
    <div class="mock-main">
      <div class="mock-title">
        <strong>CLIENT-UAE-D2C-FASHION</strong>
        <span class="meta"><span class="mtag green"><span class="live"></span>Running</span><span class="mtag">3 senders</span><span class="mtag blue">${icon('clock', 12)}Mon–Fri · 08:00–18:30</span></span>
      </div>
      <div class="stage-row">
        ${[['Queued', 92], ['Connection sent', 74], ['Connected', 52], ['Replied', 30], ['Completed', 22]]
          .map(([l, w], i) => `<div class="stage${l === 'Replied' ? ' on' : ''}"><b>${l}</b><div class="bar"><i style="--w:${w}%;--d:${i * 120}ms"></i></div></div>`).join('')}
      </div>
      <div class="queue-summary">${icon('calendar', 14)}<span>212 scheduled today</span><span class="sep">·</span><span>257 later this week</span><span class="sep">·</span><span>147 from next week (weekly LinkedIn invite limit)</span></div>
      <div class="mock-table">
        <div class="mrow head"><span>Lead</span><span>Sender</span><span>Planned</span></div>
        ${[['AK', 'b', 'S', 'Today 10:42'], ['RM', 'g', 'P', 'Today 11:05'], ['JT', 'p', 'S', 'Today 13:18'], ['NL', 'o', 'D', 'Tue 09:12']]
          .map(([a, c, s, t]) => `<div class="mrow"><span class="who">${av(a, c)}<span class="sk-stack">${sk(70)}${sk(40)}</span></span><span class="who">${av(s)}<span class="sk-stack">${sk(60)}</span></span><span class="when">${t}</span></div>`).join('')}
      </div>
    </div>
  </div></div>`,
  'mock-reveal'
);

/* ---------- Unibox ---------- */
export const uniboxMock = (label = 'Connectora Unibox showing LinkedIn conversations from several sender accounts with three AI-drafted reply options') => fig(
  label,
  `<div class="mock-window">${bar('Unibox')}
  <div class="ubx">
    <div class="ubx-list">
      <div class="ubx-filters"><span class="mtag blue">${icon('filter', 11)}Replies only</span><span class="mtag">Campaign</span><span class="mtag">Last 7 days</span></div>
      <div class="ubx-accounts">${av('S', 'b on')}${av('P', 'g')}${av('D', 'p')}${av('M', 'o')}</div>
      ${[['AK', 'b', true, true], ['RM', 'g', true, false], ['JT', 'p', false, false], ['NL', 'o', false, false], ['CB', '', false, false]]
        .map(([a, c, un, on]) => `<div class="ubx-conv${on ? ' on' : ''}">${av(a, c)}<span class="sk-stack">${sk(60)}${sk(90)}</span>${un ? '<span class="unread"></span>' : ''}</div>`).join('')}
    </div>
    <div class="ubx-thread">
      <div class="ubx-thread-head">${av('AK', 'b')}<span class="sk-stack" style="max-width:180px">${sk(70)}${sk(90)}</span><span class="mtag" style="margin-left:auto">via ${av('S', 'b')}</span></div>
      <div class="ubx-msgs">
        <span class="daysep">Yesterday</span>
        <div class="bubble out">${sk(90)}${sk(60)}</div>
        <span class="daysep">Today</span>
        <div class="bubble in">${sk(90)}${sk(80)}${sk(40)}</div>
      </div>
      <div class="ai-panel" data-ai-cycle>
        <div class="ai-panel-head"><strong>${icon('sparkles', 14)}Draft with AI</strong>
          <span class="ai-modes"><span class="ai-mode on">Natural reply</span><span class="ai-mode">Follow-up</span><span class="ai-mode">Handle objection</span><span class="ai-mode">Propose a meeting</span></span>
        </div>
        <div class="ai-drafts">
          <div class="ai-draft on"><em>Short</em>${sk(90)}${sk(50)}</div>
          <div class="ai-draft"><em>Medium</em>${sk(90)}${sk(80)}${sk(40)}</div>
          <div class="ai-draft"><em>Detailed</em>${sk(90)}${sk(90)}${sk(70)}</div>
        </div>
      </div>
      <div class="composer">${icon('paperclip', 15)}${icon('mic', 15)}<span class="from">Sending from ${av('S', 'b')}</span><span class="send">Send ${icon('send', 12)}</span></div>
    </div>
  </div></div>`
);

/* ---------- Hold & Resume banner ---------- */
export const holdMock = () => fig(
  'Connectora Unibox conversation held for review with a Resume banner after a lead replied to the connection note',
  `<div class="mock-window">${bar('Unibox')}
  <div class="ubx-thread">
    <div class="ubx-thread-head">${av('RM', 'g')}<span class="sk-stack" style="max-width:180px">${sk(70)}${sk(90)}</span><span class="mtag amber" style="margin-left:auto">Replied · Held</span></div>
    <div class="ubx-msgs">
      <div class="bubble out" style="max-width:70%"><span style="font-size:10.5px;font-weight:700;color:#fff;opacity:.85">Connection note</span>${sk(90)}${sk(50)}</div>
      <div class="bubble in">${sk(90)}${sk(70)}</div>
    </div>
    <div class="hold-banner"><span>${icon('pause', 13)} Sequence paused for review</span><span class="resume">Resume</span></div>
    <div class="composer">${icon('paperclip', 15)}<span class="from">Sending from ${av('P', 'g')}</span><span class="send">Send ${icon('send', 12)}</span></div>
  </div></div>`
);

/* ---------- Sequence builder ---------- */
export const sequenceMock = () => fig(
  'Connectora sequence builder screen with a connection request, wait steps and three follow-up messages',
  `<div class="mock-card"><div class="seq">
    <div class="seq-step"><span class="ic">${icon('userPlus', 16)}</span><span><b>Connection request</b><small>Note optional · up to 300 characters · <span class="var-token">{firstName}</span></small></span><span class="right mtag blue">Step 1</span></div>
    <div class="seq-wait">Wait 1 day after they accept</div>
    <div class="seq-step"><span class="ic">${icon('message', 16)}</span><span><b>Message</b><small>Up to 1,900 characters · <span class="var-token">{company}</span></small></span><span class="right mtag">Step 2</span></div>
    <div class="seq-wait">Wait 3 days</div>
    <div class="seq-step"><span class="ic">${icon('message', 16)}</span><span><b>Message</b><small>Personalised from any column · <span class="var-token bad">{Pain point}</span></small></span><span class="right mtag">Step 3</span></div>
    <div class="seq-wait">Wait 7 days</div>
    <div class="seq-step"><span class="ic">${icon('message', 16)}</span><span><b>Message</b><small>Follow-ups always stop if the lead replies</small></span><span class="right mtag green">Stops on reply</span></div>
  </div></div>`
);

/* ---------- Lead validation ---------- */
export const leadValidationMock = () => fig(
  'Connectora lead upload screen flagging valid, warning, invalid and duplicate LinkedIn profile rows with a reason for each',
  `<div class="mock-window">${bar('New campaign / Leads')}
  <div class="mock-main">
    <div class="mock-title"><strong>leads.csv</strong><span class="meta"><span class="mtag blue">${icon('checkCircle', 12)}LinkedIn URL column detected</span></span></div>
    <div class="mock-table">
      <div class="mrow head" style="grid-template-columns:.9fr .7fr 1.6fr"><span>Row</span><span>Status</span><span>Reason</span></div>
      ${[
        ['ok', 'Valid', 'Rewritten to https://www.linkedin.com/in/&lt;name&gt;'],
        ['warn', 'Warning', 'No first name, so {firstName} would be blank'],
        ['bad', 'Invalid', 'This is a company page, not a personal profile'],
        ['bad', 'Invalid', 'linkedn.com is not a valid domain, did you mean linkedin.com?'],
        ['dup', 'Duplicate', 'Duplicate of row 14 (same profile)'],
      ].map(([c, s, r], i) => `<div class="mrow" style="grid-template-columns:.9fr .7fr 1.6fr"><span class="who">${av(String(i + 2))}<span class="sk-stack">${sk(80)}</span></span><span><span class="status ${c}">${s}</span></span><span style="color:var(--muted)">${r}</span></div>`).join('')}
    </div>
  </div></div>`
);

/* ---------- Account card ---------- */
export const accountMock = () => fig(
  'Connectora account detail screen with status, badges, daily limit, working hours, warm-up and safety score',
  `<div class="mock-stack">
    <div class="mock-card">
      <div class="flex items-center gap-3">${av('S', 'b')}<span class="sk-stack" style="max-width:160px">${sk(80)}${sk(50)}</span><span class="mtag green" style="margin-left:auto">${icon('checkCircle', 12)}Connected</span></div>
      <div class="flex gap-3 wrap mt-3"><span class="mtag">Premium</span><span class="mtag blue">Sales Navigator</span></div>
      <div class="mt-3">
        <div class="kv"><span>Daily connection requests</span><b>20 / day</b></div>
        <div class="kv"><span>Follow-up messages</span><b>40 / day</b></div>
        <div class="kv"><span>Working hours</span><b>09:00–17:00 · Mon–Fri</b></div>
        <div class="kv"><span>Safety score</span><b style="color:var(--success-ink)">Strong</b></div>
      </div>
      <div class="meter mt-2"><i style="--w:82%"></i></div>
    </div>
    <div class="mock-card">
      <div class="flex items-center justify-between"><b style="font-size:12.5px">Warm-up (opt-in)</b><span class="mtag blue">New account</span></div>
      <div class="ramp"><i style="--h:25%"></i><i style="--h:50%"></i><i style="--h:75%"></i><i style="--h:100%"></i></div>
      <div class="ramp-labels"><span>Week 1 · 5</span><span>Week 2 · 10</span><span>Week 3 · 15</span><span>Full limit</span></div>
    </div>
    <div class="queue-summary" style="background:#f59e0b14;color:#92400e">${icon('alert', 14)}<span>Hit LinkedIn's invite limit, resumes at 9:00</span></div>
  </div>`
);

/* ---------- Pooled senders ---------- */
export const sendersMock = () => fig(
  'Connectora sender selection screen showing several LinkedIn accounts sharing one campaign with pooled daily capacity',
  `<div class="mock-card">
    <div class="flex items-center justify-between"><b style="font-size:13px">Senders for this campaign</b><span class="mtag blue">Pooled capacity</span></div>
    <div class="mt-3">
      ${[['S', 'b', 'Remaining today', 70], ['P', 'g', 'Remaining today', 45], ['D', 'p', 'Remaining today', 85], ['M', 'o', 'Re-auth needed', 0]]
        .map(([a, c, l, w]) => `<div class="kv" style="align-items:center">${av(a, c)}<span class="sk-stack" style="max-width:120px">${sk(80)}</span><span style="flex:1;max-width:160px">${w ? `<span class="meter"><i style="--w:${w}%"></i></span>` : '<span class="mtag red">Re-auth needed</span>'}</span><b style="font-size:11px;color:var(--muted)">${w ? l : 'Paused'}</b></div>`).join('')}
    </div>
    <div class="queue-summary mt-3">${icon('info', 14)}<span>An account set to 20 requests a day sends 20 in total, not 20 per campaign.</span></div>
  </div>`
);

/* ---------- Plan-ahead queue ---------- */
export const queueMock = () => fig(
  'Connectora queued view listing leads soonest first with planned send time, sender and a plain-English queue summary',
  `<div class="mock-window">${bar('Campaign / Queued')}
  <div class="mock-main">
    <div class="queue-summary">${icon('calendar', 14)}<span>212 scheduled today</span><span class="sep">·</span><span>257 later this week</span><span class="sep">·</span><span>147 from next week (weekly LinkedIn invite limit)</span></div>
    <div class="mock-table">
      <div class="mrow head"><span>Lead</span><span>Sender</span><span>Planned (campaign time)</span></div>
      ${[['AK', 'b', 'S', 'Today 09:14'], ['RM', 'g', 'P', 'Today 09:31'], ['JT', 'p', 'D', 'Today 10:02'], ['NL', 'o', 'S', 'Thu 08:47'], ['CB', '', 'P', 'Next week']]
        .map(([a, c, s, t]) => `<div class="mrow"><span class="who">${av(a, c)}<span class="sk-stack">${sk(70)}</span></span><span class="who">${av(s)}</span><span class="when">${t}</span></div>`).join('')}
    </div>
  </div></div>`
);

/* ---------- Withdrawal queue ---------- */
export const withdrawMock = () => fig(
  'Connectora invitation withdrawal card with age buckets and a paced, oldest-first withdrawal queue',
  `<div class="mock-card">
    <div class="flex items-center justify-between"><b style="font-size:13px">Withdraw pending invitations</b><span class="mtag">${icon('undo', 12)}Oldest first</span></div>
    <div class="mt-3" style="display:grid;gap:.4rem">
      ${[['Older than 30 days', true], ['14 to 30 days', true], ['7 to 14 days', false], ['Last 7 days', false], ['Unknown age', false]]
        .map(([l, on]) => `<div class="seq-step" style="padding:.55rem .75rem;box-shadow:none${on ? ';border-color:var(--blue);background:var(--blue-050)' : ''}"><span class="checkbox" style="width:1.1rem;height:1.1rem;${on ? 'background:var(--blue);color:#fff' : 'opacity:.5'}">${on ? tick(10) : ''}</span><b style="font-weight:600">${l}</b>${l === 'Unknown age' ? '<span class="right mtag">Never auto-withdrawn</span>' : ''}</div>`).join('')}
    </div>
    <div class="queue-summary mt-3">${icon('hourglass', 14)}<span>Up to 25 per account per day · 1,000 becomes roughly a 40-day drip</span></div>
  </div>`
);

/* ---------- Webhook flow ---------- */
export const webhookMock = () => fig(
  'Diagram of a LinkedIn reply in the Connectora Unibox sent as a signed webhook to Zapier, Make or a CRM',
  `<div class="flow">
    <span class="flow-node"><span class="icon-tile">${icon('inbox', 16)}</span>Inbound reply</span>
    <span class="flow-arrow">${icon('send', 18)}</span>
    <span class="flow-node"><span class="icon-tile">${icon('lock', 16)}</span>Signed HTTPS webhook</span>
    <span class="flow-arrow">${icon('send', 18)}</span>
    <span class="flow-node"><span class="icon-tile">${icon('link', 16)}</span>Zapier · Make · CRM</span>
  </div>`
);

/* ---------- Dark mini visuals for stacked cards ---------- */
export const miniPlan = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>Queued · soonest first</span><span class="mtag dark">${icon('clock', 12)}Campaign time</span></div>
  ${[['AK', 'S', 'Today 09:14'], ['RM', 'P', 'Today 09:31'], ['JT', 'D', 'Today 10:02'], ['NL', 'S', 'Thu 08:47']]
    .map(([a, s, t]) => `<div class="mini-row">${av(a)}${sk(40, true)}<span class="av" style="width:20px;height:20px;font-size:9px">${s}</span><span class="t">${t}</span></div>`).join('')}
  <div class="mini-note">147 from next week (weekly LinkedIn invite limit)</div>
</div>`;

export const miniReplyCheck = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>Follow-up 2 is due</span><span class="mtag dark">Step 3</span></div>
  <div class="mt-3">
    <div class="mini-step"><span class="ic">${icon('search', 14)}</span><span>Check the conversation right before sending</span></div>
    <div class="mini-step check"><span class="ic">${icon('message', 14)}</span><span>Lead has replied</span></div>
    <div class="mini-step stop"><span class="ic">${icon('stop', 14)}</span><span>Follow-up is not sent</span></div>
  </div>
</div>`;

export const miniHold = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>Reply to connection note</span><span class="mtag amber">Held</span></div>
  <div class="ubx-msgs" style="padding:.9rem 0 .4rem">
    <div class="bubble out" style="max-width:72%">${sk(90)}${sk(50)}</div>
    <div class="bubble in" style="background:#ffffff14">${sk(90, true)}${sk(60, true)}</div>
  </div>
  <div class="hold-banner" style="margin:0;background:#f59e0b1f;border-color:#f59e0b55;color:#fcd34d"><span>Paused for your personal reply</span><span class="resume" style="background:#ffffff14;color:#fff;border-color:#ffffff33">Resume</span></div>
</div>`;

export const miniPrivate = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>Connected account</span><span class="mtag dark">${icon('lock', 12)}Private by design</span></div>
  <div class="mt-3" style="display:grid;gap:.45rem">
    <div class="mini-step check"><span class="ic">${icon('inbox', 14)}</span><span>Outreach conversations</span><span class="t" style="margin-left:auto;color:#86efac;font-size:11px">In the Unibox</span></div>
    <div class="mini-step check"><span class="ic">${icon('upload', 14)}</span><span>Chats you deliberately import</span><span class="t" style="margin-left:auto;color:#86efac;font-size:11px">In the Unibox</span></div>
    <div class="mini-step stop"><span class="ic">${icon('eyeOff', 14)}</span><span>Personal chats</span><span class="t" style="margin-left:auto;color:#fca5a5;font-size:11px">Never pulled in</span></div>
  </div>
</div>`;

export const miniWithdraw = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>1,000 pending invitations</span><span class="mtag dark">${icon('undo', 12)}Oldest first</span></div>
  <div class="mini-bars">
    ${[['Days 1–10', 100], ['Days 11–20', 100], ['Days 21–30', 100], ['Days 31–40', 100]]
      .map(([l, w]) => `<div class="mini-bar"><span>${l}</span><span class="tr"><i style="--w:${w}%"></i></span><span class="v">≤25/d</span></div>`).join('')}
  </div>
  <div class="mini-note">A drip of roughly 40 days, not a single burst</div>
</div>`;

export const miniSafety = () => `<div class="mini" aria-hidden="true">
  <div class="mini-head"><span>Account health</span><span class="mtag dark"><span class="live"></span>Connected</span></div>
  <div class="mini-bars">
    <div class="mini-bar"><span>Invites today</span><span class="tr"><i style="--w:55%"></i></span><span class="v">20</span></div>
    <div class="mini-bar"><span>Messages today</span><span class="tr"><i style="--w:40%"></i></span><span class="v">40</span></div>
    <div class="mini-bar"><span>Warm-up</span><span class="tr"><i style="--w:75%"></i></span><span class="v">wk 3</span></div>
  </div>
  <div class="mini-note">LinkedIn limit signal → account pauses until its next sending window</div>
</div>`;

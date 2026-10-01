import { btn, demoBtn, secHead, pageHero, splitSection, stickySection, blockSection, table, featureList, orderedList, faqSection, closingCta, icon } from '../ui.mjs';
import { leadValidationMock } from '../mocks.mjs';

const salesNavMock = () => `<figure class="mock" role="img" aria-label="Connectora Lead Generation screen pulling a Sales Navigator search with progress, person tags and CSV export">
  <div class="mock-window">
    <div class="mock-bar"><i></i><i></i><i></i><span class="url">Lead Generation</span></div>
    <div class="mock-main">
      <div class="kv"><span>Search from</span><b class="flex items-center gap-3"><span class="av b">S</span><span class="mtag blue">Sales Navigator</span></b></div>
      <div class="kv"><span>Target</span><b class="flex gap-3 wrap">${['250', '500', '1,000', '2,000', '2,500 max'].map((t, i) => `<span class="mtag${i === 2 ? ' blue' : ''}">${t}</span>`).join('')}</b></div>
      <div>
        <div class="flex justify-between" style="font-size:11.5px;color:var(--muted);font-weight:600"><span>Paging at an irregular pace</span><span>Stop any time</span></div>
        <div class="meter mt-2"><i style="--w:62%"></i></div>
      </div>
      <div class="mock-table">
        <div class="mrow head" style="grid-template-columns:1.6fr 1fr"><span>Person</span><span>Tags</span></div>
        ${[['AK', 'b', ['Open']], ['RM', 'g', ['Premium']], ['JT', 'p', ['Invited']], ['NL', 'o', ['Open', 'Premium']]]
          .map(([a, c, tags]) => `<div class="mrow" style="grid-template-columns:1.6fr 1fr"><span class="who"><span class="av ${c}">${a}</span><span class="sk-stack"><span class="sk w70"></span><span class="sk w50"></span></span></span><span class="flex gap-3 wrap">${tags.map((t) => `<span class="mtag ${t === 'Open' ? 'green' : t === 'Invited' ? 'amber' : 'blue'}">${t}</span>`).join('')}</span></div>`).join('')}
      </div>
      <div class="queue-summary">${icon('upload', 14)}<span>Export CSV: First Name, Last Name, Title, Company, Location, LinkedIn URL, Headline</span></div>
    </div>
  </div>
</figure>`;

const postMock = () => `<figure class="mock" role="img" aria-label="Connectora collecting the people who reacted to and commented on a LinkedIn post into one de-duplicated lead list">
  <div class="mock-card">
    <div class="kv"><span>Post URL</span><b style="color:var(--muted);font-weight:500">linkedin.com/posts/…</b></div>
    <div class="flex items-center gap-3 mt-3"><span class="av b">A</span><span class="sk-stack" style="max-width:200px"><span class="sk w60"></span><span class="sk w90"></span></span><span class="mtag" style="margin-left:auto">Author found</span></div>
    <div class="gap-grid mt-4" style="grid-template-columns:1fr 1fr;gap:.5rem">
      <div class="seq-step" style="box-shadow:none"><span class="ic">${icon('heart', 16)}</span><span><b>Reactions</b><small>People who reacted</small></span></div>
      <div class="seq-step" style="box-shadow:none"><span class="ic">${icon('message', 16)}</span><span><b>Comments</b><small>People who commented</small></span></div>
    </div>
    <div class="queue-summary mt-3">${icon('users', 14)}<span>Did both? They appear once. Name, headline, company, connection degree and a validated profile URL.</span></div>
  </div>
</figure>`;

const dedupeMock = () => `<figure class="mock" role="img" aria-label="Connectora skipping a lead already contacted in another campaign">
  <div class="mock-card" style="max-width:520px;margin-inline:auto">
    <div class="flex items-center gap-3"><span class="av p">JT</span><span class="sk-stack" style="max-width:200px"><span class="sk w70"></span><span class="sk w40"></span></span><span class="mtag" style="margin-left:auto">Skipped</span></div>
    <div class="queue-summary mt-3">${icon('info', 14)}<span>Already contacted in campaign …</span></div>
  </div>
</figure>`;

const faqs = [
  { q: 'Do I need Sales Navigator to use Connectora?', a: 'Only for Sales Navigator searches. File uploads and campaigns work with standard LinkedIn accounts.' },
  { q: 'Does Connectora find email addresses?', a: 'No. Connectora is focused on LinkedIn outreach. If your file includes an email column, it is kept with the lead.' },
  { q: 'How many leads can one campaign hold?', a: 'A single upload can contain up to 50,000 rows. Daily limits decide when each lead is contacted, never how many you can upload.' },
  { q: 'Is it legal to use LinkedIn data for outreach?', a: 'It depends on your jurisdiction and purpose. Process personal data only where you have a lawful basis (for example legitimate interest under <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener">GDPR</a>), keep messages relevant, and honour opt-out requests.' },
];

export default {
  slug: '/linkedin-lead-sourcing',
  file: 'linkedin-lead-sourcing.html',
  nav: 'features',
  title: 'Build LinkedIn Lead Lists: Sales Navigator, Posts, CSV',
  llmsTitle: 'LinkedIn lead sourcing',
  description: "Turn a Sales Navigator search or a LinkedIn post's reactions and comments into a clean lead list, or upload your own. Every profile is validated first.",

  body: () => `
${pageHero({
  crumb: 'Lead Sourcing',
  kicker: 'LinkedIn lead sourcing',
  h1: 'Build clean LinkedIn lead lists from <span class="serif">Sales Navigator, posts or your own files</span>',
  lead: 'Good outreach starts with the list. Connectora gives you three ways to build one, and checks every profile before a single invitation goes out.',
  ctas: `${demoBtn({ magnetic: true })}${btn({ href: '/features', label: 'All features', variant: 'ghost' })}`,
})}

${blockSection({
  id: 'lead-sources',
  head: secHead({ kicker: 'Sources', h2: 'Where can Connectora <span class="serif">get leads from?</span>', answer: '<strong>Connectora builds lead lists from three sources: a LinkedIn Sales Navigator search, the people who reacted to or commented on a LinkedIn post, and your own CSV, TSV or Excel file of LinkedIn profile URLs. Every profile is validated and de-duplicated, and anyone already contacted by another campaign is skipped.</strong>' }),
  content: table({
    label: 'Lead sources compared',
    head: ['Source', 'Best for', 'Key limit'],
    rows: [
      ['Sales Navigator search', 'Precise ICP targeting by title, company size, industry and region', "Up to 2,500 people per search (LinkedIn's own cap); needs an active Sales Navigator seat"],
      ['LinkedIn post engagers', 'Warm prospects who already showed interest in a topic', 'Reads are paced daily to protect the account'],
      ['File upload', 'Lists from your CRM, events, data providers or past campaigns', 'Up to 25 MB and 50,000 rows per file'],
    ],
  }),
})}

${stickySection({
  id: 'sales-navigator',
  kicker: 'Sales Navigator',
  h2: 'How do I turn a Sales Navigator search into a <span class="serif">lead list?</span>',
  answer: "<strong>Run your search in LinkedIn Sales Navigator, copy the page URL, and paste it into Connectora's Lead Generation screen with a connected account that has a Sales Navigator seat. Choose how many people to pull, up to 2,500. Connectora pages through the results at an irregular pace, removes duplicates, and lets you export a CSV.</strong>",
  content: orderedList([
    '<strong>Pick the account</strong> to search from. Only healthy, connected accounts are offered, and you see its name and headline to confirm.',
    '<strong>Build the search in Sales Navigator</strong> with your filters, then copy the browser URL.',
    '<strong>Paste the URL</strong> and choose a target: 250, 500, 1,000, 2,000 or the maximum of 2,500.',
    '<strong>Watch progress</strong> and stop at any time. Pages are requested at random intervals, never on a fixed beat.',
    '<strong>Review the results.</strong> Each person is tagged where relevant: <strong>Open</strong> (can be messaged without connecting), <strong>Premium</strong>, or <strong>Invited</strong> (an invitation is already pending).',
    '<strong>Export to CSV</strong> with seven columns: First Name, Last Name, Title, Company, Location, LinkedIn URL and Headline. Then upload it to a campaign; the URL column is detected automatically.',
  ]) + `<p class="t-lead">Connectora shows both how many people match your search and how many LinkedIn will actually return, so a 9,000-person search never looks like a failed export.</p>` + salesNavMock(),
})}

${splitSection({
  id: 'post-engagers',
  top: true,
  head: secHead({ kicker: 'Post engagers', h2: "How do I get leads from a LinkedIn post's <span class=\"serif\">likes and comments?</span>", answer: '<strong>Paste the URL of a LinkedIn post into Connectora. It identifies the post and its author, then collects the people who reacted to it and commented on it, removing anyone who did both so they appear once. You get a list with name, headline, company, connection degree and a validated profile URL, ready for a campaign.</strong>' }),
  content: `<p class="t-lead">Why it works: someone who reacted to a post about your topic has already signalled interest. A connection note that references the post is relevant by default.</p>
    <h3 class="t-h4">Good posts to use:</h3>` + featureList([
      "Your own posts and your team's posts.",
      'Posts by industry voices on a problem you solve.',
      'Event or webinar announcement posts in your niche.',
    ]) + `<p class="text-muted">Post lookups count toward each account's daily activity, so Connectora paces them to leave room for your campaigns.</p>`,
  visual: postMock(),
})}

${splitSection({
  id: 'upload',
  reverse: true,
  top: true,
  head: secHead({ kicker: 'File upload', h2: 'How do I upload my own <span class="serif">lead list?</span>', answer: '<strong>Drag a CSV, TSV, XLSX or XLS file into the campaign wizard. Connectora finds the header row and the LinkedIn URL column on its own, then checks every row. Valid profiles are standardised, rows without a first name are flagged, and invalid or duplicate rows are listed with a reason and never contacted.</strong>' }),
  content: `<p class="text-muted">The upload is step 2 of the <a class="inline-link" href="/how-it-works#step-2">campaign wizard</a>.</p>` + table({
    label: 'Row statuses after upload',
    head: ['Row status', 'Example reason', 'Contacted?'],
    rows: [
      ['<span class="status ok">Valid</span>', 'Rewritten to <code>https://www.linkedin.com/in/&lt;name&gt;</code>', 'Yes'],
      ['<span class="status warn">Warning</span>', 'No first name, so <code>{firstName}</code> would be blank', 'Yes'],
      ['<span class="status bad">Invalid</span>', '"This is a company page, not a personal profile" or "linkedn.com is not a valid domain, did you mean linkedin.com?"', 'No'],
      ['<span class="status dup">Duplicate</span>', '"Duplicate of row 14 (same profile)"', 'No'],
    ],
  }) + featureList([
    '<strong>Every column becomes a variable.</strong> Upload a column called "Pain point" and use <code>{Pain point}</code> in your messages.',
    '<strong>Common column names are recognised,</strong> such as first name, last name, company, title and email.',
    '<strong>No LinkedIn URL column?</strong> Connectora stops and tells you which column to rename.',
  ]),
  visual: leadValidationMock(),
})}

${blockSection({
  id: 'no-double-contact',
  head: secHead({ kicker: 'De-duplication', center: true, h2: 'How does Connectora prevent contacting <span class="serif">the same person twice?</span>', answer: '<strong>Connectora keeps a record of every person your workspace has contacted. When a lead in a new campaign was already contacted by another campaign, it is skipped with the note "Already contacted in campaign …". Within a single file, repeat profiles are flagged as duplicates before launch.</strong>' }),
  content: `<p class="t-lead text-center mx-auto" style="max-width:62ch">This protects your reputation with prospects and your accounts' <a class="inline-link" href="/linkedin-account-safety">acceptance rate</a>, which is one of the signals LinkedIn watches.</p><div class="mt-8">${dedupeMock()}</div>`,
})}

${faqSection(faqs)}

${closingCta({
  heading: 'Bring a Sales Navigator search to your demo',
  body: "We'll turn it into a validated list and show you the send plan, live.",
})}
`,

  schema: () => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': '{{SITE_URL}}/linkedin-lead-sourcing#howto',
        name: 'How to turn a LinkedIn Sales Navigator search into a lead list with Connectora',
        tool: [{ '@type': 'HowToTool', name: 'Connectora' }, { '@type': 'HowToTool', name: 'LinkedIn Sales Navigator' }],
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Pick the account', text: 'Choose a connected LinkedIn account with an active Sales Navigator seat.' },
          { '@type': 'HowToStep', position: 2, name: 'Build the search', text: 'Apply your filters in Sales Navigator and copy the page URL.' },
          { '@type': 'HowToStep', position: 3, name: 'Paste and set a target', text: 'Paste the URL into Connectora and choose 250, 500, 1,000, 2,000 or the maximum of 2,500 people.' },
          { '@type': 'HowToStep', position: 4, name: 'Collect results', text: 'Connectora pages through results at an irregular pace and removes duplicates. You can stop at any time.' },
          { '@type': 'HowToStep', position: 5, name: 'Review tags', text: 'Check the Open, Premium and Invited tags on each person.' },
          { '@type': 'HowToStep', position: 6, name: 'Export and launch', text: 'Export a CSV with First Name, Last Name, Title, Company, Location, LinkedIn URL and Headline, then upload it to a campaign.' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do I need Sales Navigator to use Connectora?', acceptedAnswer: { '@type': 'Answer', text: 'Only for Sales Navigator searches. File uploads and campaigns work with standard LinkedIn accounts.' } },
          { '@type': 'Question', name: 'Does Connectora find email addresses?', acceptedAnswer: { '@type': 'Answer', text: 'No. Connectora is focused on LinkedIn outreach. If your file includes an email column, it is kept with the lead.' } },
          { '@type': 'Question', name: 'How does Connectora prevent contacting the same person twice?', acceptedAnswer: { '@type': 'Answer', text: 'Connectora records every person your workspace has contacted. A lead already contacted by another campaign is skipped, and repeat profiles within a file are flagged as duplicates before launch.' } },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '{{SITE_URL}}/' },
          { '@type': 'ListItem', position: 2, name: 'Lead Sourcing', item: '{{SITE_URL}}/linkedin-lead-sourcing' },
        ],
      },
    ],
  }),
};

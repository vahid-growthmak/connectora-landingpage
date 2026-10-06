// Shared markup: icons, components, header, footer and the page shell.
import config from '../site.config.mjs';

export const SITE = (config.siteUrl || '').replace(/\/$/, '');

/* ---------------- Icons ---------------- */
const STROKE = {
  arrow: null, // material path, see below
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V8M17 16V5"/>',
  sparkles: '<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  hourglass: '<path d="M5 22h14M5 2h14"/><path d="M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22"/><path d="M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
  stop: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
  file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="m2 2 20 20"/>',
  webhook: '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
};

export const icon = (name, size = 20, extra = '') =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${STROKE[name] || ''}</svg>`;

export const arrow = (size = 16, cls = 'arrow') =>
  `<svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" class="${cls}" width="${size}" height="${size}"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`;
export const chevron = (size = 13) =>
  `<svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" width="${size}" height="${size}"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>`;
export const tick = (size = 13) =>
  `<svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" width="${size}" height="${size}"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`;

/* ---------------- Brand ---------------- */
let markId = 0;
// Official Connectora logo (same SVG as the Connectora app favicon at connectora.growthmak.com).
export const mark = (cls = 'brand-mark') => {
  const id = `cg${++markId}`;
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="${id}" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs><path d="M 37.5 12.5 A 17 17 0 1 0 37.5 35.5" stroke="url(#${id})" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="15" cy="21.5" r="3.4" fill="url(#${id})"/><circle cx="35" cy="21.5" r="3.4" fill="url(#${id})"/></svg>`;
};
export const brand = (href = '/') =>
  `<a class="brand" href="${href}" aria-label="Connectora home">${mark()}<span class="brand-word">Connectora</span></a>`;

/* ---------------- Primitives ---------------- */
export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s = '') => esc(s);

export const btn = ({ href, label, variant = 'primary', lg = false, magnetic = false, showArrow = true, cls = '', cta = '' }) => {
  const a = `<a class="btn btn-${variant}${lg ? ' btn-lg' : ''} group ${cls}" href="${href}"${cta ? ` data-cta="${cta}"` : ''}>${label}${showArrow ? arrow() : ''}</a>`;
  return magnetic ? `<span class="magnetic">${a}</span>` : a;
};
export const textLink = (href, label) => `<a class="text-link group" href="${href}">${label}${arrow(16)}</a>`;
export const demoBtn = (opts = {}) => btn({ href: '/book-a-demo', label: 'Book a demo', ...opts });

export const secHead = ({ kicker = '', h2, answer = '', center = false, id = '', reveal = true, after = '' }) => `
<div class="sec-head${center ? ' center' : ''}"${reveal ? ' data-reveal' : ''}>
  ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
  <h2 class="t-h2"${id ? ` id="${id}"` : ''}>${h2}</h2>
  ${answer ? `<p class="answer">${answer}</p>` : ''}
  ${after}
</div>`;

export const featureList = (items) => `<ul class="feature-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
export const orderedList = (items) => `<ol class="ordered-list">${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
export const checklist = (items) =>
  `<ul class="checklist">${items.map((i) => `<li><span class="checkbox" aria-hidden="true">${tick(12)}</span><span>${i}</span></li>`).join('')}</ul>`;

export const table = ({ head, rows, caption = '', cls = '', rowHeader = true, label = '' }) => `
<div class="table-wrap" role="region" tabindex="0" aria-label="${attr(label || caption || 'Table')}" data-lenis-prevent-horizontal>
  <table class="data-table ${cls}">
    ${caption ? `<caption class="sr-only">${caption}</caption>` : ''}
    <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows
      .map((r) => `<tr>${r.map((c, i) => (i === 0 && rowHeader ? `<th scope="row" data-label="${attr(String(head[i] || '').replace(/<[^>]+>/g, ''))}">${c}</th>` : `<td data-label="${attr(String(head[i] || '').replace(/<[^>]+>/g, ''))}"><span class="td-v">${c}</span></td>`)).join('')}</tr>`)
      .join('')}</tbody>
  </table>
</div>`;

let accId = 0;
export const accordion = (items, { openFirst = false } = {}) =>
  items
    .map((it, i) => {
      const id = `acc-${++accId}`;
      const open = openFirst && i === 0;
      return `<div class="acc" data-open="${open}">
  <button type="button" class="acc-btn" aria-expanded="${open}" aria-controls="${id}">
    <h3>${it.q}</h3>
    <span class="acc-icon" aria-hidden="true"><span class="h"></span><span class="v"></span></span>
  </button>
  <div class="acc-panel" id="${id}" role="region"><div><p>${it.a}</p></div></div>
</div>`;
    })
    .join('');

export const faqTwoCol = (items) => {
  const half = Math.ceil(items.length / 2);
  return `<div class="faq-grid two" data-reveal>
  <div class="faq-col">${accordion(items.slice(0, half), { openFirst: true })}</div>
  <div class="faq-col">${accordion(items.slice(half))}</div>
</div>`;
};

export const faqSection = (items, { kicker = 'FAQ', title = 'Frequently asked <span class="serif">questions</span>', after = '' } = {}) => `
<section class="section" id="faq">
  <div class="container">
    <div class="sec-head center" data-reveal>
      <span class="kicker">${kicker}</span>
      <h2 class="t-h2">${title}</h2>
    </div>
    <div class="mt-12">${faqTwoCol(items)}</div>
    ${after ? `<div class="mt-10 text-center" data-reveal>${after}</div>` : ''}
  </div>
</section>`;

/* ---------------- Section layouts ---------------- */
// Two columns: copy (heading, snippet answer, details) beside a visual.
export const splitSection = ({ id = '', cls = 'section', head, content = '', visual = '', reverse = false, top = false }) => `
<section class="${cls}"${id ? ` id="${id}"` : ''}>
  <div class="container">
    <div class="split${reverse ? ' reverse' : ''}${top ? ' top' : ''}">
      <div class="content-block">${head}${content ? `<div class="content-block" data-reveal>${content}</div>` : ''}</div>
      <div data-reveal style="--reveal-delay:120ms">${visual}</div>
    </div>
  </div>
</section>`;

// Single column: heading block, then full-width content (tables, grids, lists).
export const blockSection = ({ id = '', cls = 'section', head, content = '', narrow = false }) => `
<section class="${cls}"${id ? ` id="${id}"` : ''}>
  <div class="container">
    ${head}
    ${content ? `<div class="after-head${narrow ? ' m-mid' : ''}" data-reveal>${content}</div>` : ''}
  </div>
</section>`;

// Sticky heading on the left, details on the right (long-form pages).
export const stickySection = ({ id = '', cls = 'section', kicker = '', h2, answer = '', content = '', aside = '' }) => `
<section class="${cls}"${id ? ` id="${id}"` : ''}>
  <div class="container">
    <div class="split top">
      <div class="sticky-col" data-reveal>
        ${kicker ? `<span class="kicker">${kicker}</span>` : ''}
        <h2 class="t-h2 mt-5">${h2}</h2>
        ${answer ? `<p class="answer mt-6">${answer}</p>` : ''}
        ${aside}
      </div>
      <div class="content-block" data-reveal style="--reveal-delay:120ms">${content}</div>
    </div>
  </div>
</section>`;

// Long-form article body with a sticky table of contents (70/30 split).
// sections: [{ id, toc, h2, answer, content }]
export const articleSection = ({ sections, ctaTitle = 'Get a safe sending plan', ctaText = 'See a realistic daily pace for your own accounts on a short demo.' }) => `
<section class="section bg-white" id="article">
  <div class="container">
    <div class="split-7030">
      <article class="article">
        ${sections.map((s, i) => `
        <section id="${s.id}" data-reveal>
          <span class="sec-num">${String(i + 1).padStart(2, '0')}</span>
          <h2>${s.h2}</h2>
          ${s.answer ? `<p class="answer">${s.answer}</p>` : ''}
          ${s.content ? `<div class="content-block">${s.content}</div>` : ''}
        </section>`).join('')}
      </article>
      <aside class="toc" aria-label="On this page">
        <nav class="toc-card" aria-label="Table of contents">
          <h2>On this page</h2>
          <ol>${sections.map((s) => `<li><a href="#${s.id}">${s.toc}</a></li>`).join('')}</ol>
        </nav>
        <div class="toc-cta">
          <strong style="font-size:1.05rem">${ctaTitle}</strong>
          <p>${ctaText}</p>
          <a class="btn btn-white group" href="/book-a-demo">Book a demo${arrow()}</a>
        </div>
      </aside>
    </div>
  </div>
</section>`;

export const schemaAuthor = () =>
  config.author.name
    ? {
        '@type': 'Person',
        name: config.author.name,
        ...(config.author.role ? { jobTitle: `${config.author.role}, Growthmak` } : {}),
        url: config.author.linkedin || undefined,
        ...(config.author.linkedin ? { sameAs: [config.author.linkedin] } : {}),
        worksFor: { '@id': '{{SITE_URL}}/#growthmak' },
      }
    : { '@id': '{{SITE_URL}}/#growthmak' };

export const sources = (links) =>
  `<p class="table-note">Source${links.length > 1 ? 's' : ''}: ${links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join(' · ')}</p>`;

/* ---------------- Marquee ---------------- */
export const marquee = (items, { variant = 'blue', reverse = false, duration = 34 } = {}) => {
  const run = (hidden) =>
    items
      .map((t, i) => `<span class="marquee-item"${hidden ? ' aria-hidden="true"' : ''}><span>${t}</span><span class="marquee-sep" style="--sep-i:${i}" aria-hidden="true">✕</span></span>`)
      .join('');
  return `<div class="marquee-band ${variant}"><div class="marquee-track${reverse ? ' reverse' : ''}" style="--marquee-duration:${duration}s">${run(false)}${run(true)}</div></div>`;
};

/* ---------------- Page hero (inner pages) ---------------- */
export const breadcrumbNav = (label) => `
<nav aria-label="Breadcrumb" class="breadcrumb mb-7" data-reveal>
  <ol>
    <li><a class="ul-link" href="/">Home</a></li>
    <li><span class="sep" aria-hidden="true">/</span><span aria-current="page">${label}</span></li>
  </ol>
</nav>`;

export const byline = (extra = '') => {
  const a = config.author;
  const who = a.name
    ? `By ${a.linkedin ? `<a class="ul-link" href="${a.linkedin}" rel="author noopener" target="_blank" style="color:var(--fg);font-weight:600">${a.name}</a>` : `<strong>${a.name}</strong>`} (${a.role ? `${a.role}, ` : ''}Growthmak)`
    : 'By the Growthmak team';
  return `<p class="byline"><span class="avatar" aria-hidden="true">${icon('user', 16)}</span><span>${who}</span><span aria-hidden="true">·</span><span>${extra}</span></p>`;
};

export const pageHero = ({ crumb, kicker, h1, lead = '', ctas = '', below = '', wide = false }) => `
<section class="page-hero" data-page-hero>
  <div class="container">
    ${breadcrumbNav(crumb)}
    <div class="${wide ? 'm-wide' : ''}" style="max-width:${wide ? '64rem' : '56rem'}">
      <span class="eyebrow" data-reveal>${kicker}</span>
      <h1 class="t-display-sm split-lines mt-5">${h1}</h1>
      ${lead ? `<div data-reveal style="--reveal-delay:120ms">${lead.startsWith('<') ? lead : `<p class="lead">${lead}</p>`}</div>` : ''}
      ${ctas ? `<div class="cta-stack" data-reveal style="--reveal-delay:200ms">${ctas}</div>` : ''}
    </div>
    ${below}
  </div>
</section>`;

/* ---------------- Direct access (WhatsApp) ---------------- */
const DC = config.directContact;
export const waLink = () => `https://wa.me/${DC.whatsapp}?text=${encodeURIComponent(DC.message)}`;
export const waIcon = (size = 18) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41Z"/></svg>`;

// Full card: photo, name, why to message, WhatsApp button.
export const directAccess = ({ dark = false, heading = 'Want to try Connectora without a demo?' } = {}) => `
<div class="direct-card${dark ? ' is-dark' : ''}" data-reveal>
  <div class="direct-who">
    <span class="direct-photo"><img src="${DC.photo}" alt="${DC.name}" width="160" height="160" loading="lazy" decoding="async"></span>
    <span class="direct-online" aria-hidden="true"></span>
  </div>
  <div class="direct-body">
    <p class="overline">Skip the demo · Direct access</p>
    <h3>${heading}</h3>
    <p>If you want direct access, want to try it without a demo, or want to start as soon as possible, message <strong>${DC.name}</strong> on WhatsApp.</p>
    <p class="direct-name"><strong>${DC.name}</strong>${DC.title ? ` · ${DC.title}` : ''}</p>
    <div class="cta-stack mt-5">
      <a class="btn btn-whatsapp group" href="${waLink()}" target="_blank" rel="noopener" data-cta="whatsapp_direct">${waIcon(18)}Message on WhatsApp${arrow()}</a>
      <a class="direct-phone ul-link" href="${waLink()}" target="_blank" rel="noopener">${DC.phoneDisplay}</a>
    </div>
  </div>
</div>`;

// One-line version for the dark closing CTA band on every page.
export const directInline = () => `
<a class="direct-inline group" href="${waLink()}" target="_blank" rel="noopener" data-cta="whatsapp_inline">
  <span class="direct-photo sm"><img src="${DC.photo}" alt="" width="80" height="80" loading="lazy" decoding="async"></span>
  <span>Want access without a demo? <strong>WhatsApp ${DC.name.split(' ')[0]}</strong> at ${DC.phoneDisplay}</span>
  ${arrow(15)}
</a>`;

/* ---------------- Closing CTA ---------------- */
const trustItems = [
  '7-day free trial when you book a demo',
  'Runs in the cloud, no browser extension',
  'You never share your LinkedIn password',
  'Every AI reply is approved by a human',
  'From $15 per LinkedIn account a month, every feature included',
];
export const closingCta = ({ heading, body = '', button = 'Book a demo', secondary = null, list = trustItems, kicker = 'Book a demo' }) => `
<section class="dark-band cta-band section" id="book">
  <div class="container">
    <div class="cta-grid">
      <div class="cta-copy" data-reveal>
        <span class="eyebrow">${kicker}</span>
        <h2 class="t-h2 mt-5">${heading}</h2>
        ${body ? `<p class="lead">${body}</p>` : ''}
        <div class="cta-stack">
          ${btn({ href: '/book-a-demo', label: button, variant: 'primary', magnetic: true, cta: 'closing_cta' })}
          ${secondary ? btn({ href: secondary.href, label: secondary.label, variant: 'ghost-d' }) : ''}
        </div>
        ${directInline()}
      </div>
      <ul class="cta-list" data-reveal style="--reveal-delay:120ms">
        ${list.map((t) => `<li><span class="check-dot" aria-hidden="true">${tick(13)}</span><span>${t}</span></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;

/* ---------------- Header ---------------- */
const NAV = [
  {
    key: 'features', label: 'Features', href: '/features',
    children: [
      { href: '/features', label: 'All features', sub: 'Every capability, in one reference', icon: 'grid' },
      { href: '/linkedin-lead-sourcing', label: 'LinkedIn lead sourcing', sub: 'Sales Navigator, post engagers, CSV', icon: 'search' },
      { href: '/use-cases', label: 'Use cases', sub: 'Agencies, sales teams, founders', icon: 'users' },
      { href: '/about', label: 'About Connectora', sub: 'Built by Growthmak', icon: 'building' },
    ],
  },
  { key: 'how', label: 'How It Works', href: '/how-it-works' },
  { key: 'safety', label: 'Safety', href: '/linkedin-account-safety' },
  { key: 'unibox', label: 'Unibox', href: '/unibox' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'compare', label: 'Compare', href: '/compare' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
];

const header = (active) => `
<header class="site-header">
  <div class="nav-shell">
    ${brand()}
    <nav class="primary-nav" aria-label="Primary">
      ${NAV.map((n) => {
        const cur = active === n.key ? ' aria-current="page"' : '';
        if (!n.children) return `<a class="nav-link" href="${n.href}"${cur}>${n.label}</a>`;
        return `<div class="nav-item" data-open="false">
          <span class="nav-link"${cur}><a href="${n.href}">${n.label}</a><button type="button" class="nav-caret" aria-expanded="false" aria-haspopup="true" aria-label="${n.label} menu">${chevron()}</button></span>
          <div class="nav-dropdown"><div class="nav-dropdown-panel">
            ${n.children.map((c) => `<a class="dd-link group" href="${c.href}"><span class="icon-tile">${icon(c.icon, 18)}</span><span><strong>${c.label}</strong><small>${c.sub}</small></span>${arrow(15)}</a>`).join('')}
          </div></div>
        </div>`;
      }).join('')}
    </nav>
    <div class="nav-actions">
      <a class="btn btn-primary btn-42 group nav-cta" href="/book-a-demo" data-cta="nav_book_demo">Book a demo<span class="btn-tip" aria-hidden="true"><svg viewBox="0 -960 960 960" fill="currentColor" width="12" height="12"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></a>
      <button type="button" class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span class="burger"><span></span><span></span></span></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <div class="container">
      ${NAV.map((n) => n.children
        ? `<details name="m-nav"><summary class="m-link">${n.label}${chevron(18)}</summary><div class="m-sub">${n.children.map((c) => `<a href="${c.href}"><span class="icon-tile" style="width:2.25rem;height:2.25rem">${icon(c.icon, 18)}</span>${c.label}</a>`).join('')}</div></details>`
        : `<a class="m-link" href="${n.href}">${n.label}</a>`).join('')}
      <a class="btn btn-primary btn-lg group" href="/book-a-demo">Book a demo${arrow()}</a>
    </div>
  </div>
</header>`;

/* ---------------- Footer ---------------- */
const aiPrompt = () => {
  const site = SITE || 'the Connectora website';
  return `I'm evaluating Connectora (${site}), a LinkedIn outreach automation platform built by Growthmak. Please read the site and explain: how it runs connection and follow-up campaigns from multiple LinkedIn accounts, how it keeps accounts safe (limits, warm-up, automatic pauses), what the Unibox and AI reply drafts do, who it is built for, and how it compares with HeyReach, Expandi, Waalaxy and Dripify.`;
};
const AI = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/?q=', svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07Zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5ZM3.6 18.1a4.47 4.47 0 0 1-.54-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.14-1.65Zm-1.26-10.4a4.48 4.48 0 0 1 2.34-1.97V11.4a.77.77 0 0 0 .39.68l5.83 3.36-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79a4.5 4.5 0 0 1-1.64-6.14ZM18.7 11.2 12.86 7.8l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.78a4.49 4.49 0 0 1-.68 8.1v-5.65a.78.78 0 0 0-.4-.68Zm2.01-3.03-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.18 8.68V6.35a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66Zm-12.64 4.2-2.02-1.17a.08.08 0 0 1-.04-.05V5.57a4.5 4.5 0 0 1 7.37-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68v6.73Zm1.1-2.36L12 8.35l2.62 1.51v3.02L12 14.4l-2.62-1.52v-3.02Z"/></svg>' },
  { name: 'Claude', url: 'https://claude.ai/new?q=', svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.1 2h1.8l.5 7.1 3.2-5.2 1.6.9-2.4 6.7 5.4-4.1 1.1 1.4-6.1 3.9 6.6-.6.2 1.8-6.8.5 6.2 2.8-.8 1.6-6.1-3.2 4.4 5.2-1.5 1.1-3.9-5.9.4 6.8H10.6l.4-6.8-3.9 5.9-1.5-1.1 4.4-5.2-6.1 3.2-.8-1.6 6.2-2.8-6.8-.5.2-1.8 6.6.6-6.1-3.9 1.1-1.4 5.4 4.1-2.4-6.7 1.6-.9 3.2 5.2.5-7.1Z"/></svg>' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai/search/new?q=', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8v18.4M12 8.2 6.2 3.6v9.2M12 8.2l5.8-4.6v9.2M12 15.8l-5.8 4.6v-9.2M12 15.8l5.8 4.6v-9.2"/></svg>' },
  { name: 'Google AI Mode', url: 'https://www.google.com/search?udm=50&aep=11&q=', svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10Z"/></svg>' },
  { name: 'Grok', url: 'https://grok.com/?q=', svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.6 2h-3.7L6.2 17.3h3.7L20.6 2Z"/><path d="M7 2H3.3l4.5 6.4 1.9-2.6L7 2Z"/><path d="M14.4 22h3.7l-4.5-6.4-1.9 2.6L14.4 22Z"/></svg>' },
  { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/?q=', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14.6c0-3.6 1.5-7.2 3.4-8.7C7.7 4.9 9.4 5.3 10.2 7l2.1 4.7"/><path d="M21 9.4c0 3.6-1.5 7.2-3.4 8.7-1.3 1-3 .6-3.8-1.1L11.7 12"/><path d="M6.6 18.7c-1.7 0-3-1.3-3.4-3M17.4 5.3c1.7 0 3 1.3 3.4 3"/></svg>' },
];

const FOOT = [
  { title: 'Product', links: [['/features', 'Features'], ['/how-it-works', 'How it works'], ['/unibox', 'Unibox & AI replies'], ['/linkedin-lead-sourcing', 'LinkedIn lead sourcing'], ['/pricing', 'Pricing'], ['/book-a-demo', 'Book a demo']] },
  { title: 'Resources', links: [['/linkedin-account-safety', 'LinkedIn account safety'], ['/compare', 'Compare tools'], ['/use-cases', 'Use cases'], ['/faq', 'FAQ']] },
  { title: 'Company', links: [['/about', 'About Connectora'], [config.org.url, 'Growthmak', true], [`mailto:${config.org.email}`, config.org.email]] },
];

const footer = () => `
<footer class="site-footer dark-band">
  <div class="container section-sm">
    <div class="footer-grid">
      <div class="footer-about">
        ${brand()}
        <p>${config.tagline} Connectora is a LinkedIn outreach automation platform built by Growthmak.</p>
        <div class="social">
          <a href="${config.org.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Growthmak on LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg></a>
          <a href="${config.org.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Growthmak on Instagram"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="mailto:${config.org.email}" aria-label="Email Growthmak">${icon('mail', 18)}</a>
        </div>
      </div>
      ${FOOT.map((c) => `<div class="footer-col"><h2>${c.title}</h2><ul>${c.links.map(([h, l, ext]) => `<li><a class="ul-link" href="${h}"${ext ? ' target="_blank" rel="noopener"' : ''}>${l}</a></li>`).join('')}</ul></div>`).join('')}
    </div>
    <section class="ask-ai" aria-labelledby="ask-ai-heading">
      <div>
        <h2 id="ask-ai-heading">Ask AI about Connectora</h2>
        <p>Opens your AI assistant with a pre-filled question. It reads this website and gives a plain-language summary of how Connectora works, how it protects LinkedIn accounts, and how it compares with other tools.</p>
      </div>
      <ul>${AI.map((a) => `<li><a href="${a.url}${encodeURIComponent(aiPrompt())}" target="_blank" rel="noopener noreferrer" title="Ask ${a.name} about Connectora" data-cta="ask_ai_${a.name.toLowerCase().replace(/\s+/g, '-')}">${a.svg}<span class="sr-only">Ask ${a.name} about Connectora</span></a></li>`).join('')}</ul>
    </section>
    <div class="footer-legal">
      <span>© <span data-year>2026</span> Growthmak. Connectora is built by Growthmak.</span>
      <span>LinkedIn and Sales Navigator are trademarks of LinkedIn Corporation. Connectora is not affiliated with or endorsed by LinkedIn.</span>
    </div>
  </div>
  <p class="wordmark-sweep" aria-hidden="true">Connectora</p>
</footer>`;

/* ---------------- Document shell ---------------- */
export const shell = ({ page, body, schema, version }) => {
  const url = `${SITE}${page.slug === '/' ? '/' : page.slug}`;
  const indexable = Boolean(SITE) && page.index !== false;
  const ld = schema ? JSON.stringify(schema, null, 0).replace(/</g, '\\u003c') : '';
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${attr(page.description)}">
<meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, nofollow'}">
${SITE ? `<link rel="canonical" href="${url}">` : ''}
<meta name="theme-color" content="${config.themeColor}">
<meta name="author" content="Growthmak">
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="Connectora">
<meta property="og:title" content="${attr(page.title)}">
<meta property="og:description" content="${attr(page.description)}">
${SITE ? `<meta property="og:url" content="${url}">\n<meta property="og:image" content="${SITE}/assets/img/og-image.png">` : ''}
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(page.title)}">
<meta name="twitter:description" content="${attr(page.description)}">
<link rel="icon" href="/favicon.ico?v=2" sizes="48x48">
<link rel="icon" href="/assets/img/favicon.svg?v=2" type="image/svg+xml">
<link rel="icon" href="/assets/img/favicon-32.png?v=2" type="image/png" sizes="32x32">
<link rel="icon" href="/assets/img/favicon-16.png?v=2" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png?v=2" sizes="180x180">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/manrope-latin-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css?v=${version}">
<script>document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');</script>
${ld ? `<script type="application/ld+json">${ld}</script>` : ''}
${page.head || ''}
<script src="/assets/vendor/lenis.min.js?v=${version}" defer></script>
<script src="/assets/js/site.js?v=${version}" defer></script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<div id="gm-loader" aria-hidden="true">
  <div style="display:flex;flex-direction:column;align-items:center;gap:1.5rem">
    <span class="brand" style="pointer-events:none">${mark()}<span class="brand-word">Connectora</span></span>
    <div class="loader-track"><div class="gm-rail"></div></div>
  </div>
</div>
${header(page.nav)}
<main id="main">
<div class="route-enter">
${body}
</div>
</main>
${footer()}
${page.scripts || ''}
</body>
</html>
`;
};

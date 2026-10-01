// Static build: renders every page in src/pages to dist/ as pre-rendered HTML.
// Usage: SITE_URL=https://your-domain node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import config from './site.config.mjs';
import { shell, SITE } from './src/ui.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const pub = path.join(root, 'public');

const copyDir = (from, to) => {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const a = path.join(from, entry.name);
    const b = path.join(to, entry.name);
    entry.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
};

fs.rmSync(dist, { recursive: true, force: true });
copyDir(pub, dist);

const version = crypto
  .createHash('md5')
  .update(fs.readFileSync(path.join(pub, 'assets/css/site.css')))
  .update(fs.readFileSync(path.join(pub, 'assets/js/site.js')))
  .digest('hex')
  .slice(0, 8);

const pageDir = path.join(root, 'src/pages');
const files = fs.readdirSync(pageDir).filter((f) => f.endsWith('.mjs')).sort();
const pages = [];
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(pageDir, f)).href);
  pages.push(mod.default);
}

const fillSite = (obj) => JSON.parse(JSON.stringify(obj).replaceAll('{{SITE_URL}}', SITE));

for (const page of pages) {
  const body = page.body();
  const schema = page.schema ? fillSite(page.schema()) : null;
  const html = shell({ page, body, schema, version });
  if (/\[(?:CONFIRM|AUTHOR|CLIENT|BOOKING)[^\]]*\]|\{\{SITE_URL\}\}/.test(html)) {
    console.warn(`  ! ${page.file} still contains a placeholder`);
  }
  fs.writeFileSync(path.join(dist, page.file), html);
  console.log(`  ✓ ${page.slug.padEnd(26)} → dist/${page.file}`);
}

/* sitemap.xml */
const indexed = pages.filter((p) => p.index !== false && p.slug !== '/404');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((p) => `  <url><loc>${SITE}${p.slug}</loc><lastmod>${p.lastmod || config.publishDate}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

/* robots.txt
   The logged-in app routes are disallowed per the strategy brief.
   NOTE: /unibox is deliberately NOT disallowed because it is also a marketing page here. */
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];
const appRoutes = ['/dashboard', '/campaigns', '/accounts', '/inbox', '/leads', '/integrations', '/import'];
const robots = `${[...bots, '*'].map((b) => `User-agent: ${b}\nAllow: /\n${appRoutes.map((r) => `Disallow: ${r}`).join('\n')}`).join('\n\n')}

Sitemap: ${SITE}/sitemap.xml
`;
fs.writeFileSync(path.join(dist, 'robots.txt'), SITE ? robots : 'User-agent: *\nDisallow: /\n');

/* llms.txt */
const llms = `# Connectora

> Connectora is a LinkedIn outreach automation platform built by Growthmak. It runs connection and follow-up campaigns from multiple LinkedIn accounts and manages every reply in one inbox. It is built safety-first: per-account limits, human-paced sending and automatic pauses when LinkedIn signals a limit.

## Pages

${indexed.map((p) => `- [${p.llmsTitle || p.title}](${SITE}${p.slug}): ${p.description}`).join('\n')}

## Company

- Built by [Growthmak](${config.org.url}). Contact: ${config.org.email}
- Pricing is shared on a demo call: ${SITE}/book-a-demo
`;
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);

/* Netlify / Cloudflare Pages cache headers (Vercel uses the root vercel.json instead) */
fs.writeFileSync(path.join(dist, '_headers'), `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`);

if (!SITE) {
  console.warn('\n  ! SITE_URL is not set. Pages are built with noindex and robots.txt blocks crawling.');
  console.warn('    Build for production with: SITE_URL=https://your-domain npm run build\n');
}
console.log(`\nBuilt ${pages.length} pages (assets v${version}).`);

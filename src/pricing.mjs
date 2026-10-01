// Shared pricing markup. Prices come from site.config.mjs (public list prices only).
import config from '../site.config.mjs';
import { btn, table, tick } from './ui.mjs';

export const PLANS = config.plans;

// Plan cards. Static HTML shows USD monthly with the annual price beside it;
// on /pricing the billing and currency toggles (site.js) re-render the figures.
export const planCards = () => `
<div class="plans">
  ${PLANS.map((p, i) => `
  <article class="plan${p.popular ? ' is-popular' : ''}" data-reveal style="--reveal-delay:${i * 90}ms"
    data-usd="${p.usd}" data-usd-annual="${p.usdAnnual}" data-inr="${p.inr}"${p.inrAnnual ? ` data-inr-annual="${p.inrAnnual}"` : ''}>
    <div class="plan-top"><span class="plan-name">${p.bestFor}</span>${p.popular ? '<span class="badge">Most popular</span>' : ''}</div>
    <h3>${p.name}</h3>
    <p class="accounts">${p.accounts} LinkedIn accounts</p>
    <div class="price"><span class="amount">$${p.usd}</span><span class="per">per account<br>per month</span></div>
    <p class="alt"><strong>$${p.usdAnnual}</strong> per account billed annually</p>
    <p class="copy">${p.copy}</p>
    ${btn({ href: '/book-a-demo', label: 'Book a demo', variant: p.popular ? 'white' : 'primary', cta: `plan_${p.name.toLowerCase()}` })}
  </article>`).join('')}
</div>`;

// Plan table (Pricing page).
export const planTable = () => table({
  label: 'Connectora plans and prices per LinkedIn account',
  head: ['Plan', 'LinkedIn accounts', 'Monthly billing (per account / month)', 'Annual billing (per account / month)', 'Best for'],
  rows: PLANS.map((p) => [p.name, p.accounts, `<span class="us-cell">$${p.usd}</span> (₹${p.inr})`, `<span class="us-cell">$${p.usdAnnual}</span>${p.inrAnnual ? ` (₹${p.inrAnnual})` : ''}`, p.bestFor]),
});

// Worked examples: every account is billed at the plan rate for the total.
const EXAMPLES = [[1, 'Starter'], [2, 'Starter'], [3, 'Growth'], [5, 'Growth'], [10, 'Growth'], [15, 'Agency'], [25, 'Agency'], [50, 'Agency']];
export const examplesTable = () => table({
  label: 'Example monthly cost by number of LinkedIn accounts',
  head: ['LinkedIn accounts', 'Plan', 'Monthly billing (total / month)', 'Annual billing (total / month)'],
  rows: EXAMPLES.map(([n, name]) => {
    const p = PLANS.find((x) => x.name === name);
    return [String(n), name, `$${(n * p.usd).toLocaleString('en-US')}`, `$${(n * p.usdAnnual).toLocaleString('en-US')}`];
  }),
});

// HeyReach comparison at list monthly prices (HeyReach pricing page, checked config.pricesChecked).
export const HEYREACH = [
  ['1', '$24', '$79 (Growth, $79 per sender)', '70%'],
  ['3', '$63', '$237 (Growth)', '73%'],
  ['5', '$105', '$395 (Growth)', '73%'],
  ['10', '$210', '$790 (Growth)', '73%'],
  ['15', '$270', '$999 (Agency, up to 25 senders)', '73%'],
  ['25', '$450', '$999 (Agency)', '55%'],
];
export const heyreachTable = () => table({
  label: 'Connectora versus HeyReach monthly cost',
  head: ['LinkedIn accounts', 'Connectora (monthly billing)', 'HeyReach (cheapest published monthly option)', 'Connectora saves'],
  rows: HEYREACH.map(([n, c, h, s]) => [n, `<span class="us-cell">${c}</span>`, h, `<span class="save-cell">${s}</span>`]),
});

export const annualTable = () => table({
  label: 'Monthly versus annual billing per account',
  head: ['Plan', 'Monthly', 'Annual', 'Saving per account per year'],
  rows: PLANS.map((p) => [p.name, `$${p.usd}`, `$${p.usdAnnual}`, `<span class="save-cell">$${(p.usd - p.usdAnnual) * 12}</span>`]),
});

export const PRICE_ANSWER = 'Connectora costs $24 per LinkedIn sender account per month for 1 to 2 accounts, $21 for 3 to 10, $18 for 11 to 50 and $15 for 51 or more. Annual billing lowers these to $19, $17, $14 and $12. Every plan includes every feature; only the number of accounts changes the price.';

export const includedList = (items) => `<ul class="included">${items.map((t) => `<li><span class="check-dot soft" aria-hidden="true">${tick(12)}</span><span>${t}</span></li>`).join('')}</ul>`;

import { btn } from '../ui.mjs';

export default {
  slug: '/404',
  file: '404.html',
  index: false,
  title: 'Page not found · Connectora',
  description: 'This page does not exist. Head back to the Connectora home page or book a demo.',
  body: () => `
<section class="page-hero" data-page-hero style="min-height:70vh">
  <div class="container text-center">
    <span class="eyebrow" data-reveal>404</span>
    <h1 class="t-display-sm split-lines mt-5">This page is <span class="serif">not in the queue.</span></h1>
    <p class="lead mx-auto" data-reveal>The link may be old or mistyped. Everything about Connectora is one click away.</p>
    <div class="cta-stack mt-8" data-reveal style="justify-content:center">
      ${btn({ href: '/', label: 'Back to home', variant: 'primary' })}
      ${btn({ href: '/book-a-demo', label: 'Book a demo', variant: 'ghost' })}
    </div>
  </div>
</section>`,
};

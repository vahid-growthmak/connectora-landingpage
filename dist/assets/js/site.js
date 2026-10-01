/* Connectora marketing site: interactions mirroring growthmak.com */
(() => {
  const doc = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null;
  if (!reduceMotion && typeof window.Lenis === 'function') {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -96 } });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* ---------- Header state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Desktop dropdowns ---------- */
  const navItems = [...document.querySelectorAll('.nav-item')];
  const closeAll = (except) => navItems.forEach((item) => {
    if (item === except) return;
    item.dataset.open = 'false';
    item.querySelector('.nav-link').dataset.active = 'false';
    item.querySelector('.nav-caret')?.setAttribute('aria-expanded', 'false');
  });
  navItems.forEach((item) => {
    const link = item.querySelector('.nav-link');
    const caret = item.querySelector('.nav-caret');
    let timer;
    const open = () => {
      clearTimeout(timer);
      closeAll(item);
      item.dataset.open = 'true';
      link.dataset.active = 'true';
      caret.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      timer = setTimeout(() => {
        item.dataset.open = 'false';
        link.dataset.active = 'false';
        caret.setAttribute('aria-expanded', 'false');
      }, 140);
    };
    item.addEventListener('mouseenter', () => finePointer && open());
    item.addEventListener('mouseleave', () => finePointer && close());
    caret.addEventListener('click', (e) => {
      e.preventDefault();
      item.dataset.open === 'true' ? (clearTimeout(timer), close()) : open();
    });
    item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) close(); });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-item')) closeAll(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAll(); setMenu(false); } });

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.menu-toggle');
  const setMenu = (open) => {
    if (!header || !toggle) return;
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (lenis) open ? lenis.stop() : lenis.start();
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle?.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
  document.querySelectorAll('.mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });

  /* ---------- Accordions ---------- */
  document.querySelectorAll('.acc-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const acc = btn.closest('.acc');
      const open = acc.dataset.open !== 'true';
      acc.dataset.open = String(open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* ---------- Custom cursor ---------- */
  if (finePointer && !reduceMotion) {
    const cursor = document.createElement('div');
    cursor.className = 'gm-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
    let x = -100, y = -100, cx = x, cy = y;
    window.addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      cursor.classList.add('is-visible');
    }, { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
    const hoverSel = 'a, button, summary, [role="button"], .card-hover, input, label';
    document.addEventListener('pointerover', (e) => { if (e.target.closest(hoverSel)) cursor.classList.add('is-active'); });
    document.addEventListener('pointerout', (e) => { if (e.target.closest(hoverSel)) cursor.classList.remove('is-active'); });
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      cursor.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      const strength = 0.28;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transition = 'transform .15s ease-out';
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
        el.style.transform = '';
      });
    });
  }

  /* ---------- H1 line split reveal ---------- */
  const splitLines = (el) => {
    const original = el.innerHTML;
    const label = el.textContent.replace(/\s+/g, ' ').trim();
    // wrap each word, preserving inline highlight spans
    const wrapWords = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'gm-w';
            w.style.display = 'inline-block';
            w.textContent = part;
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          wrapWords(child);
        }
      });
    };
    wrapWords(el);
    const words = [...el.querySelectorAll('.gm-w')];
    const lines = [];
    let top = null;
    words.forEach((w) => {
      const t = Math.round(w.offsetTop);
      if (top === null || Math.abs(t - top) > 4) { lines.push([]); top = t; }
      lines[lines.length - 1].push(w);
    });
    el.setAttribute('aria-label', label);
    el.innerHTML = lines.map((ln) => {
      const html = ln.map((w) => {
        const parent = w.parentElement;
        const cls = parent && parent !== el && parent.className ? parent.className : '';
        return cls ? `<span class="${cls}">${w.textContent}</span>` : w.textContent;
      }).join(' ');
      return `<span class="gm-line" aria-hidden="true">${html} </span>`;
    }).join('');
    const lineEls = [...el.querySelectorAll('.gm-line')];
    lineEls.forEach((ln, i) => {
      ln.style.opacity = '0';
      ln.style.transform = 'translate3d(0, 42px, 0)';
      ln.style.transition = `opacity .9s cubic-bezier(.16,1,.3,1) ${120 + i * 110}ms, transform 1.1s cubic-bezier(.16,1,.3,1) ${120 + i * 110}ms`;
    });
    el.classList.remove('split-pending');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      lineEls.forEach((ln) => { ln.style.opacity = '1'; ln.style.transform = 'none'; });
    }));
    // restore the original markup once the entrance has finished so wrapping stays responsive
    setTimeout(() => { el.innerHTML = original; el.removeAttribute('aria-label'); }, 1600 + lineEls.length * 110);
  };

  /* ---------- Scroll reveal ---------- */
  const revealEls = [...document.querySelectorAll('[data-reveal], .stack-card, .process li, .mock-reveal')];
  const funnels = [...document.querySelectorAll('.funnel')];
  const runFunnel = (f) => {
    const stages = [...f.querySelectorAll('.funnel-stage')];
    stages.forEach((s, i) => {
      setTimeout(() => {
        s.setAttribute('data-on', '');
        const gap = s.querySelector('.funnel-gap');
        if (gap) {
          gap.setAttribute('data-flowing', '');
          setTimeout(() => gap.removeAttribute('data-flowing'), 900);
        }
      }, 120 + i * 260);
    });
  };

  const startReveals = () => {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-in'));
      funnels.forEach((f) => f.querySelectorAll('.funnel-stage').forEach((s) => s.setAttribute('data-on', '')));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));

    const fio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runFunnel(entry.target);
        fio.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    funnels.forEach((f) => { f.setAttribute('data-armed', ''); fio.observe(f); });

    document.querySelectorAll('h1.split-lines').forEach(splitLines);
  };

  /* ---------- Pricing toggles (billing period, currency) ---------- */
  const priceRoot = document.querySelector('[data-pricing]');
  if (priceRoot) {
    const state = { billing: 'monthly', currency: 'usd' };
    const render = () => {
      priceRoot.querySelectorAll('.plan').forEach((plan) => {
        const d = plan.dataset;
        const amount = plan.querySelector('.amount');
        const per = plan.querySelector('.per');
        const alt = plan.querySelector('.alt');
        if (state.currency === 'usd') {
          if (state.billing === 'monthly') {
            amount.textContent = `$${d.usd}`;
            per.innerHTML = 'per account<br>per month';
            alt.innerHTML = `<strong>$${d.usdAnnual}</strong> per account billed annually`;
          } else {
            amount.textContent = `$${d.usdAnnual}`;
            per.innerHTML = 'per account / month<br>billed annually';
            alt.innerHTML = `<strong>Save $${(d.usd - d.usdAnnual) * 12}</strong> per account a year vs monthly`;
          }
        } else if (state.billing === 'annual' && d.inrAnnual) {
          amount.textContent = `₹${d.inrAnnual}`;
          per.innerHTML = 'per account / month<br>billed annually';
          alt.textContent = `₹${d.inr} on monthly billing`;
        } else {
          amount.textContent = `₹${d.inr}`;
          per.innerHTML = 'per account<br>per month';
          alt.textContent = state.billing === 'annual' ? `Annual billing in USD: $${d.usdAnnual} per account / month` : `$${d.usd} per account / month in USD`;
        }
      });
    };
    priceRoot.querySelectorAll('[data-set]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const [key, value] = btn.dataset.set.split(':');
        state[key] = value;
        btn.parentElement.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        render();
      });
    });
  }

  /* ---------- Table of contents scroll-spy ---------- */
  const tocLinks = [...document.querySelectorAll('.toc-card a[href^="#"]')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        byId.get(e.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    byId.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* ---------- Unibox mock: cycle AI modes ---------- */
  document.querySelectorAll('[data-ai-cycle]').forEach((panel) => {
    const modes = [...panel.querySelectorAll('.ai-mode')];
    const drafts = [...panel.querySelectorAll('.ai-draft')];
    if (!modes.length || reduceMotion) return;
    let i = 0;
    setInterval(() => {
      if (document.hidden) return;
      modes[i].classList.remove('on');
      i = (i + 1) % modes.length;
      modes[i].classList.add('on');
      drafts.forEach((d, j) => d.classList.toggle('on', j === (i % drafts.length)));
    }, 2600);
  });

  /* ---------- Hero terrain (wireframe mesh) ---------- */
  const initTerrain = (canvas) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const COLS = 46, ROWS = 22;
    let w = 0, h = 0, dpr = 1, visible = true, raf = 0;
    // deterministic jitter so the mesh reads as triangulated, not a perfect grid
    const rand = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const height = (u, v, t) => {
      const ridge = Math.exp(-Math.pow((u - 0.5) * 2.6, 2)) * 1.0;
      const wave = Math.sin(u * 9 + t * 0.35) * 0.08 + Math.cos(v * 7 - t * 0.25) * 0.07;
      return (ridge * (0.55 + v * 0.6)) + wave * (0.4 + v);
    };
    const draw = (time) => {
      const t = reduceMotion ? 0 : time / 1000;
      ctx.clearRect(0, 0, w, h);
      const pts = [];
      for (let j = 0; j <= ROWS; j++) {
        const row = [];
        const v = j / ROWS;                       // 0 = far, 1 = near
        const depth = 0.18 + v * 0.82;            // perspective scale
        for (let i = 0; i <= COLS; i++) {
          const u = i / COLS + (rand(i, j) - 0.5) * 0.012;
          const x = w / 2 + (u - 0.5) * w * (0.7 + depth * 1.35);
          const y = h * (0.18 + v * 0.95) - height(u, v, t) * h * 0.55 * depth;
          row.push([x, y]);
        }
        pts.push(row);
      }
      ctx.lineWidth = 1;
      for (let j = 0; j < ROWS; j++) {
        const alpha = 0.05 + (j / ROWS) * 0.07;
        ctx.strokeStyle = `rgba(30, 60, 100, ${alpha})`;
        ctx.beginPath();
        for (let i = 0; i < COLS; i++) {
          const a = pts[j][i], b = pts[j][i + 1], c = pts[j + 1][i], d = pts[j + 1][i + 1];
          ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
          ctx.moveTo(a[0], a[1]); ctx.lineTo(c[0], c[1]);
          if ((i + j) % 2) { ctx.moveTo(a[0], a[1]); ctx.lineTo(d[0], d[1]); }
          else { ctx.moveTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); }
        }
        ctx.stroke();
      }
      // a few glowing nodes on the ridge
      ctx.fillStyle = 'rgba(7, 135, 254, 0.35)';
      for (let k = 0; k < 7; k++) {
        const j = 6 + ((k * 5) % (ROWS - 8));
        const i = Math.round(COLS / 2 + Math.sin(k * 1.7 + t * 0.2) * 9);
        const p = pts[j][Math.max(0, Math.min(COLS, i))];
        ctx.beginPath(); ctx.arc(p[0], p[1], 1.8, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduceMotion && visible) raf = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', () => { resize(); if (reduceMotion) draw(0); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible) raf = requestAnimationFrame(draw);
      }).observe(canvas);
    }
    raf = requestAnimationFrame(draw);
  };
  document.querySelectorAll('canvas[data-terrain]').forEach(initTerrain);

  /* ---------- Loader → page ready ---------- */
  const loader = document.getElementById('gm-loader');
  let started = false;
  const ready = () => {
    if (started) return;
    started = true;
    if (loader) {
      loader.querySelector('.gm-rail')?.classList.add('is-ready');
      setTimeout(() => {
        loader.classList.add('is-done');
        setTimeout(() => loader.remove(), 500);
        startReveals();
      }, reduceMotion ? 0 : 320);
    } else {
      startReveals();
    }
  };
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([
    Promise.all([fontsReady, new Promise((r) => (document.readyState === 'complete' ? r() : window.addEventListener('load', r, { once: true })))]),
    new Promise((r) => setTimeout(r, 1400)),
  ]).then(ready);

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();

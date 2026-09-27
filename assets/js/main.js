(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const links = nav ? nav.querySelectorAll('a') : [];
  const year = document.getElementById('year');
  const backToTop = document.querySelector('.back-to-top');
  const emailReveal = document.querySelector('.contact-email-reveal');
  const portfolioEmail = () => atob('bWp1YW4yNjBAZ21haWwuY29t');

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const updateBackToTop = () => {
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 620);
  };
  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }

  if (emailReveal) {
    emailReveal.addEventListener('click', () => {
      const link = document.createElement('a');
      link.className = 'contact-email-reveal';
      link.href = `mailto:${portfolioEmail()}`;
      link.setAttribute('aria-label', `Enviar email a ${portfolioEmail()}`);
      link.innerHTML = '<span>Email</span><strong></strong>';
      link.querySelector('strong').textContent = portfolioEmail();
      emailReveal.replaceWith(link);
    }, { once: true });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  const nucleus = document.querySelector('.hero-nucleus');
  if (nucleus) {
    const layers = [...nucleus.querySelectorAll('[data-nucleus-layer]')];
    const title = nucleus.querySelector('[data-nucleus-title]');
    const text = nucleus.querySelector('[data-nucleus-text]');
    const word = nucleus.querySelector('[data-nucleus-word]');
    const copy = nucleus.querySelector('.nucleus-copy');
    const layerFrame = nucleus.querySelector('.nucleus-layers');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const states = {
      contexto: { title: '01 · Contexto', text: 'Necesidad, reglas y alcance.', word: 'CONTEXTO' },
      proceso: { title: '02 · Proceso', text: 'Dependencias, trazabilidad e integración.', word: 'PROCESO' },
      entrega: { title: '03 · Entrega', text: 'Validación, UAT y operación.', word: 'ENTREGA' }
    };
    const selectNucleusLayer = (state) => {
      const selected = states[state];
      if (!selected) return;
      nucleus.dataset.state = state;
      if (layerFrame) layerFrame.dataset.activeState = state;
      title.textContent = selected.title;
      text.textContent = selected.text;
      word.textContent = selected.word;
      copy.dataset.tone = state;
      layers.forEach(layer => {
        const active = layer.dataset.nucleusLayer === state;
        layer.dataset.active = String(active);
        layer.setAttribute('aria-pressed', String(active));
      });
    };
    layers.forEach(layer => {
      if (canHover) layer.addEventListener('pointerenter', () => selectNucleusLayer(layer.dataset.nucleusLayer));
      layer.addEventListener('focus', () => selectNucleusLayer(layer.dataset.nucleusLayer));
      layer.addEventListener('click', () => selectNucleusLayer(layer.dataset.nucleusLayer));
    });
  }

  const nodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(node => node.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

  nodes.forEach(node => observer.observe(node));
})();

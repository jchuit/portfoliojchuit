(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const links = nav ? nav.querySelectorAll('a') : [];
  const year = document.getElementById('year');
  const backToTop = document.querySelector('.back-to-top');
  const emailReveal = document.querySelector('.contact-email-reveal');
  const emailActions = document.querySelectorAll('.email-action');
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
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const mailto = (subject = '', body = '') => {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (body) params.set('body', body);
    const query = params.toString();
    window.location.href = `mailto:${portfolioEmail()}${query ? `?${query}` : ''}`;
  };

  if (emailReveal) {
    emailReveal.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = `mailto:${portfolioEmail()}`;
      link.innerHTML = '<span>Email</span><strong></strong>';
      link.querySelector('strong').textContent = portfolioEmail();
      emailReveal.replaceWith(link);
    }, { once: true });
  }

  emailActions.forEach(action => action.addEventListener('click', () => {
    mailto(action.dataset.subject, action.dataset.body);
  }));

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
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

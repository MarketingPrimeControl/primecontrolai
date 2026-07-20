(() => {
  const analyticsEvent = (name, detail = {}) => {
    window.dispatchEvent(new CustomEvent('primecontrol:campaign', { detail: { name, ...detail } }));
  };

  const params = new URLSearchParams(window.location.search);
  const trackedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
  trackedParams.forEach((name) => {
    document.querySelectorAll(`[name="${name}"]`).forEach((field) => {
      field.value = params.get(name) || '';
    });
  });

  document.querySelectorAll('[data-analytics-cta]').forEach((cta) => {
    cta.addEventListener('click', () => analyticsEvent('cta_click', { placement: cta.dataset.analyticsCta }));
  });

  document.querySelectorAll('[data-lead-form]').forEach((form) => {
    const markStarted = () => analyticsEvent('form_start', { variant: form.dataset.variant });
    form.querySelectorAll('input, select').forEach((field) => field.addEventListener('focus', markStarted, { once: true }));
    form.addEventListener('submit', () => analyticsEvent('form_submit', { variant: form.dataset.variant }));
  });

  document.querySelectorAll('[data-rotator]').forEach((rotator) => {
    const terms = JSON.parse(rotator.dataset.rotator || '[]');
    if (terms.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let current = 0;
    window.setInterval(() => {
      rotator.classList.add('is-changing');
      window.setTimeout(() => {
        current = (current + 1) % terms.length;
        rotator.textContent = terms[current];
        rotator.classList.remove('is-changing');
      }, 240);
    }, 4200);
  });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('[data-reveal]').forEach((element) => reveal.observe(element));

  analyticsEvent('page_view', { variant: document.body.dataset.variant || 'unknown' });
})();

(() => {
  const menu = document.querySelector('[data-mobile-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const setMenuState = open => {
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setMenuState(open);
  });
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });
  const megaButton = document.querySelector('.mega-trigger');
  const megaPanel = document.querySelector('.mega-panel');
  megaButton?.addEventListener('click', () => {
    const open = megaButton.getAttribute('aria-expanded') !== 'true';
    megaButton.setAttribute('aria-expanded', String(open));
    megaPanel?.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setMenuState(false);
      megaButton?.setAttribute('aria-expanded', 'false');
      megaPanel?.classList.remove('open');
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenuState(false);
  });

  const formTarget = document.querySelector('[data-hubspot-form]');
  if (formTarget) {
    const renderHubSpotForm = () => {
      if (!window.hbspt?.forms || !formTarget.id) return;
      formTarget.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '7317937',
        formId: 'f75acfaa-7990-4266-a12b-0fa12c30ec1e',
        region: 'na1',
        target: `#${formTarget.id}`
      });
    };
    if (window.hbspt?.forms) renderHubSpotForm();
    else {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.charset = 'utf-8';
      script.addEventListener('load', renderHubSpotForm);
      document.head.appendChild(script);
    }
  }
})();

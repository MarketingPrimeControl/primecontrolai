(() => {
  const menu = document.querySelector('[data-mobile-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu?.classList.toggle('open', open);
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
      megaButton?.setAttribute('aria-expanded', 'false');
      megaPanel?.classList.remove('open');
    }
  });
})();

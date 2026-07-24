(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const floatingBackTop = document.querySelector('.floating-back-to-top');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    const showBackTop = window.scrollY > Math.max(620, window.innerHeight * .72);
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(window.scrollY / scrollable, 1);
    floatingBackTop.classList.toggle('visible', showBackTop);
    floatingBackTop.setAttribute('aria-hidden', String(!showBackTop));
    floatingBackTop.tabIndex = showBackTop ? 0 : -1;
    floatingBackTop.style.setProperty('--page-progress', `${progress * 360}deg`);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
    mobileNav.classList.toggle('open', opening);
    document.body.classList.toggle('menu-open', opening);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  }));

  const closeMobileMenu = () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  };
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) closeMobileMenu();
  });

  const solutionsNav = document.querySelector('[data-solutions-nav]');
  if (solutionsNav) {
    const trigger = solutionsNav.querySelector('button');
    const panel = solutionsNav.querySelector('.solutions-mega');
    const closeMega = () => {
      trigger.setAttribute('aria-expanded', 'false');
      panel.classList.remove('is-open');
    };
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMega();
    });
    document.addEventListener('click', event => {
      if (!solutionsNav.contains(event.target)) closeMega();
    });
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -35px' });
  document.querySelectorAll('.reveal').forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    revealObserver.observe(element);
  });

  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count);
      const prefix = element.dataset.prefix || '';
      const suffix = element.dataset.suffix || '';
      if (reducedMotion) {
        element.textContent = `${prefix}${target}${suffix}`;
      } else {
        const start = performance.now();
        const tick = now => {
          const progress = Math.min((now - start) / 1100, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      countObserver.unobserve(element);
    });
  }, { threshold: .55 });
  document.querySelectorAll('[data-count]').forEach(element => countObserver.observe(element));

  const heroFocus = document.querySelector('.hero-focus');
  const focusTerms = ['Qualidade e Experiência', 'Serviços SAP', 'Hiperautomação'];
  let focusIndex = 0;
  let focusTimer;
  let focusTransitioning = false;

  const renderHeroState = index => {
    focusIndex = (index + focusTerms.length) % focusTerms.length;
    heroFocus.textContent = focusTerms[focusIndex];
  };

  const transitionHeroState = nextIndex => {
    if (!heroFocus || focusTransitioning || nextIndex === focusIndex) return;
    if (reducedMotion) {
      renderHeroState(nextIndex);
      return;
    }
    focusTransitioning = true;
    heroFocus.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-14px)' }
      ], { duration: 240, fill: 'forwards', easing: 'ease-in' }).finished.then(() => {
        renderHeroState(nextIndex);
        heroFocus.animate([
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 360, fill: 'forwards', easing: 'cubic-bezier(.2,.72,.2,1)' }).finished.finally(() => {
          focusTransitioning = false;
        });
      });
  };

  const stopHeroRotation = () => window.clearInterval(focusTimer);
  const startHeroRotation = () => {
    stopHeroRotation();
    if (!reducedMotion) focusTimer = window.setInterval(() => transitionHeroState(focusIndex + 1), 4000);
  };

  if (heroFocus) {
    renderHeroState(0);
    startHeroRotation();
  }

  const aiStory = document.querySelector('[data-ai-story]');
  if (aiStory) {
    const storySteps = [...aiStory.querySelectorAll('[data-ai-story-step]')];
    const storyTabs = [...aiStory.querySelectorAll('[data-ai-story-tab]')];
    const storyVisuals = [...aiStory.querySelectorAll('[data-ai-story-visual]')];
    const storyCounter = aiStory.querySelector('[data-ai-story-counter]');
    const storyProgress = aiStory.querySelector('[data-ai-story-progress]');
    const storyMobileQuery = window.matchMedia('(max-width: 900px)');
    let currentStoryKey = storySteps[0]?.dataset.aiStoryStep || 'qa';

    const activateStory = key => {
      const index = storySteps.findIndex(step => step.dataset.aiStoryStep === key);
      if (index < 0) return;
      currentStoryKey = key;

      storySteps.forEach(step => {
        const active = step.dataset.aiStoryStep === key;
        step.classList.toggle('is-active', active);
        step.hidden = storyMobileQuery.matches && !active;
      });
      storyTabs.forEach(tab => {
        const active = tab.dataset.aiStoryTab === key;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      storyVisuals.forEach(visual => {
        const active = visual.dataset.aiStoryVisual === key;
        visual.classList.toggle('is-active', active);
        visual.setAttribute('aria-hidden', String(!active));
      });

      if (storyCounter) storyCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(storySteps.length).padStart(2, '0')}`;
      if (storyProgress) storyProgress.style.transform = `scaleX(${(index + 1) / storySteps.length})`;
    };

    const syncStoryToViewport = () => {
      if (!window.matchMedia('(min-width: 901px)').matches) return;
      const targetY = Math.min(window.innerHeight * .48, 470);
      const closest = storySteps.reduce((best, step) => {
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height * .5 - targetY);
        return !best || distance < best.distance ? { step, distance } : best;
      }, null);
      if (closest) activateStory(closest.step.dataset.aiStoryStep);
    };

    let storyFrame = 0;
    const requestStorySync = () => {
      if (storyFrame) return;
      storyFrame = window.requestAnimationFrame(() => {
        storyFrame = 0;
        syncStoryToViewport();
      });
    };

    storyTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const target = storySteps.find(step => step.dataset.aiStoryStep === tab.dataset.aiStoryTab);
        if (!target) return;
        activateStory(tab.dataset.aiStoryTab);
        if (storyMobileQuery.matches) {
          tab.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'nearest',
            inline: 'center'
          });
          return;
        }
        const stickyOffset = 190;
        window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - stickyOffset, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
      tab.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % storyTabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + storyTabs.length) % storyTabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = storyTabs.length - 1;
        storyTabs[next].focus();
        storyTabs[next].click();
      });
    });

    storySteps.forEach(step => {
      const key = step.dataset.aiStoryStep;
      const mobileTarget = step.querySelector(`[data-mobile-visual="${key}"]`);
      const source = storyVisuals.find(visual => visual.dataset.aiStoryVisual === key)?.firstElementChild;
      if (mobileTarget && source) mobileTarget.append(source.cloneNode(true));
    });

    window.addEventListener('scroll', requestStorySync, { passive: true });
    window.addEventListener('resize', () => {
      activateStory(currentStoryKey);
      requestStorySync();
    });
    activateStory(currentStoryKey);
    requestStorySync();
  }

  document.querySelectorAll('[data-content-carousel]').forEach(carousel => {
    const viewport = carousel.querySelector('.ai-insights-viewport');
    const cards = [...carousel.querySelectorAll('.ai-insight-card')];
    const previous = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const progress = carousel.querySelector('.ai-insights-progress');
    if (!viewport || !cards.length || !previous || !next || !progress) return;

    let activeIndex = 0;
    let scrollFrame = 0;
    const leadingZero = value => String(value).padStart(2, '0');
    const updateCarousel = () => {
      const viewportLeft = viewport.getBoundingClientRect().left;
      activeIndex = cards.reduce((closest, card, index) => {
        const currentDistance = Math.abs(cards[closest].getBoundingClientRect().left - viewportLeft);
        const candidateDistance = Math.abs(card.getBoundingClientRect().left - viewportLeft);
        return candidateDistance < currentDistance ? index : closest;
      }, 0);
      progress.textContent = `${leadingZero(activeIndex + 1)} / ${leadingZero(cards.length)}`;
      previous.disabled = activeIndex === 0;
      next.disabled = activeIndex === cards.length - 1;
    };
    const moveTo = index => {
      const target = cards[Math.max(0, Math.min(cards.length - 1, index))];
      viewport.scrollTo({ left: target.offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
    };

    previous.addEventListener('click', () => moveTo(activeIndex - 1));
    next.addEventListener('click', () => moveTo(activeIndex + 1));
    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(updateCarousel);
    }, { passive: true });
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  });

  document.querySelectorAll('.faq-list details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.faq-list details').forEach(other => {
        if (other !== detail) other.open = false;
      });
    });
  });

  document.querySelectorAll('[data-cta-location]').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'prime_ai_cta_click', cta_location: link.dataset.ctaLocation });
    });
  });

  const form = document.getElementById('lead-form');
  if (form) {
  const submitButton = form.querySelector('.submit-button');
  const submitLabel = form.querySelector('.submit-label');
  const success = document.querySelector('.form-success');
  const urlParams = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(name => {
    const field = form.elements[name];
    if (field) field.value = urlParams.get(name) || '';
  });
  form.elements.page_url.value = window.location.href;

  const phone = form.elements.phone;
  phone.addEventListener('input', () => {
    const digits = phone.value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) phone.value = digits;
    else if (digits.length <= 7) phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    else phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  });

  const errorMessage = field => {
    if (field.validity.valueMissing) return field.type === 'checkbox' ? 'Confirme o consentimento para continuar.' : 'Preencha este campo.';
    if (field.validity.typeMismatch) return 'Informe um e-mail válido.';
    return 'Revise este campo.';
  };
  const showFieldState = field => {
    const error = field.type === 'checkbox' ? form.querySelector('.consent-error') : field.closest('.field')?.querySelector('.field-error');
    const valid = field.checkValidity();
    field.classList.toggle('invalid', !valid);
    field.setAttribute('aria-invalid', String(!valid));
    if (error) error.textContent = valid ? '' : errorMessage(field);
    return valid;
  };
  form.querySelectorAll('input[required],select[required]').forEach(field => {
    field.addEventListener('blur', () => showFieldState(field));
    field.addEventListener('change', () => showFieldState(field));
  });

  const trackConversion = data => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'prime_ai_lead', challenge: data.challenge, utm_campaign: data.utm_campaign || '(direct)' });
  };
  const whatsappFallback = data => {
    const message = [
      'Olá. Quero conversar sobre o Prime Control AI.',
      '',
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `Cargo: ${data.role}`,
      `E-mail: ${data.email}`,
      data.phone ? `Telefone: ${data.phone}` : '',
      `Desafio: ${data.challenge}`,
      data.context ? `Contexto: ${data.context}` : '',
      data.utm_campaign ? `Campanha: ${data.utm_campaign}` : ''
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/5511997105783?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  };

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const requiredFields = [...form.querySelectorAll('input[required],select[required]')];
    const valid = requiredFields.map(showFieldState).every(Boolean);
    if (!valid) {
      requiredFields.find(field => !field.checkValidity())?.focus();
      return;
    }

    submitButton.disabled = true;
    submitLabel.textContent = 'Enviando...';
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = form.dataset.endpoint?.trim();

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Falha no envio: ${response.status}`);
      } else {
        whatsappFallback(data);
      }
      trackConversion(data);
      form.hidden = true;
      success.hidden = false;
      success.focus?.();
    } catch (error) {
      submitButton.disabled = false;
      submitLabel.textContent = 'Tentar novamente';
      const microcopy = form.querySelector('.form-microcopy');
      microcopy.textContent = 'Não foi possível concluir agora. Tente novamente ou fale conosco pelo WhatsApp.';
      microcopy.style.color = '#aa2a2a';
    }
  });
  }
})();

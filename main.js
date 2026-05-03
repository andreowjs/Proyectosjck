/* ============================================================
   JCK PINTURA — main.js
   - Slider Antes/Después (mouse, touch, teclado)
   - Menú hamburguesa
   - Scroll suave + header sticky con sombra
   - Reveal-on-scroll con IntersectionObserver
   - Formulario que envía a WhatsApp con mensaje pre-redactado
   ============================================================ */
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '51966799756';

  /* ─────────── BEFORE / AFTER SLIDER ─────────── */
  function initSlider(el) {
    const after   = el.querySelector('.before-after__after');
    const divider = el.querySelector('.before-after__divider');
    if (!after || !divider) return;

    let isDragging = false;

    function setPosition(clientX) {
      const rect = el.getBoundingClientRect();
      let ratio = (clientX - rect.left) / rect.width;
      ratio = Math.min(Math.max(ratio, 0.02), 0.98);

      const pct = ratio * 100;
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      divider.style.left   = `${pct}%`;
      el.setAttribute('aria-valuenow', Math.round(pct));
    }

    // Mouse
    el.addEventListener('mousedown', e => {
      e.preventDefault();
      isDragging = true;
      el.classList.add('is-dragging');
      setPosition(e.clientX);
    });
    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });
    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('is-dragging');
    });

    // Touch
    el.addEventListener('touchstart', e => {
      isDragging = true;
      el.classList.add('is-dragging');
      setPosition(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchmove', e => {
      if (!isDragging) return;
      setPosition(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('is-dragging');
    });

    // Keyboard accessibility
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'slider');
    el.setAttribute('aria-label', 'Comparador antes y después');
    el.setAttribute('aria-valuemin', '0');
    el.setAttribute('aria-valuemax', '100');
    el.setAttribute('aria-valuenow', '50');

    el.addEventListener('keydown', e => {
      const cur  = parseFloat(divider.style.left) || 50;
      const step = e.shiftKey ? 10 : 2;
      let next   = cur;
      if (e.key === 'ArrowLeft')  next = Math.max(2,  cur - step);
      if (e.key === 'ArrowRight') next = Math.min(98, cur + step);
      if (next === cur) return;
      e.preventDefault();
      after.style.clipPath = `inset(0 0 0 ${next}%)`;
      divider.style.left   = `${next}%`;
      el.setAttribute('aria-valuenow', Math.round(next));
    });

    // Subtle "hint" animation on first visibility — invites interaction
    if ('IntersectionObserver' in window && !el.dataset.hinted) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || el.dataset.hinted) return;
          el.dataset.hinted = '1';
          const positions = [50, 35, 65, 50];
          let i = 0;
          const tick = () => {
            if (i >= positions.length) return;
            const p = positions[i++];
            after.style.transition = 'clip-path .5s ease';
            divider.style.transition = 'left .5s ease';
            after.style.clipPath = `inset(0 0 0 ${p}%)`;
            divider.style.left   = `${p}%`;
            setTimeout(tick, 550);
          };
          tick();
          setTimeout(() => {
            after.style.transition = '';
            divider.style.transition = '';
          }, positions.length * 550 + 100);
          io.unobserve(el);
        });
      }, { threshold: 0.5 });
      io.observe(el);
    }
  }

  /* ─────────── MOBILE NAV ─────────── */
  function initBurger() {
    const burger = document.getElementById('burger');
    const menu   = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    const closeTargets = menu.querySelectorAll('[data-close]');

    function close() {
      burger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        close();
      } else {
        burger.setAttribute('aria-expanded', 'true');
        menu.classList.add('is-open');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });

    closeTargets.forEach(el => el.addEventListener('click', close));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) close();
    });
  }

  /* ─────────── HEADER SCROLL SHADOW ─────────── */
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ─────────── REVEAL ON SCROLL ─────────── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* ─────────── FORM → WHATSAPP ─────────── */
  function initForm() {
    const form = document.getElementById('formCotizacion');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const data = new FormData(form);
      const nombre    = (data.get('nombre')    || '').toString().trim();
      const telefono  = (data.get('telefono')  || '').toString().trim();
      const tipo      = (data.get('tipo')      || '').toString().trim();
      const ubicacion = (data.get('ubicacion') || '').toString().trim();
      const mensaje   = (data.get('mensaje')   || '').toString().trim();

      const lines = [
        '¡Hola JCK Acabados & Pintura! Quisiera solicitar una cotización.',
        '',
        `*Nombre:* ${nombre}`,
        `*Teléfono:* ${telefono}`,
        `*Tipo de trabajo:* ${tipo}`,
        `*Ubicación:* ${ubicacion}`
      ];
      if (mensaje) lines.push(`*Mensaje:* ${mensaje}`);

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ─────────── INIT ─────────── */
  function init() {
    document.querySelectorAll('[data-slider]').forEach(initSlider);
    initBurger();
    initHeaderScroll();
    initReveal();
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

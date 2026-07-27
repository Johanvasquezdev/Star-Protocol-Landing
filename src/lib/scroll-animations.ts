// Shared Anime.js scroll entrance system
// Usage: call `initScrollAnimations()` once in any page/layout onMount

export async function initScrollAnimations() {
  const anime = (await import('animejs')).default;

  const config = {
    elements: [
      // [selector, animation overrides]
      ['.anim-fade-up',    { translateY: [60, 0], opacity: [0, 1], duration: 900, easing: 'spring(1, 80, 12, 0)' }],
      ['.anim-fade-in',    { opacity: [0, 1], duration: 700, easing: 'easeOutQuart' }],
      ['.anim-slide-left', { translateX: [-80, 0], opacity: [0, 1], duration: 900, easing: 'spring(1, 80, 12, 0)' }],
      ['.anim-stagger',    { translateY: [40, 0], opacity: [0, 1], duration: 700, delay: anime.stagger(80), easing: 'spring(1, 80, 12, 0)' }],
      ['.anim-scale-in',   { scale: [0.88, 1], opacity: [0, 1], duration: 800, easing: 'spring(1, 90, 10, 0)' }],
    ]
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target as HTMLElement;
      const matchedConfig = config.elements.find(([sel]) => el.matches(sel as string));
      
      if (matchedConfig) {
        const [, opts] = matchedConfig;
        anime({ targets: el, ...(opts as object) });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  // Observe all animated elements
  const selectors = config.elements.map(([s]) => s).join(', ');
  document.querySelectorAll(selectors).forEach(el => {
    (el as HTMLElement).style.opacity = '0';
    observer.observe(el);
  });
}

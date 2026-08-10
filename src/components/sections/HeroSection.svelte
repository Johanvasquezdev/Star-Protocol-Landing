<script lang="ts">
  import { onMount } from 'svelte';
  import { translations } from '../../../data/translations';
  import anime from 'animejs';
  import OrbitHeroObject from './OrbitHeroObject.svelte';

  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];

  onMount(() => {

    // Split hero title into word spans for stagger
    const titleEl = document.querySelector('.hero-title') as HTMLElement;
    if (titleEl) {
      const words = titleEl.textContent!.trim().split(' ');
      titleEl.innerHTML = words.map((w, index) => `<span class="hero-word inline-block max-w-full overflow-hidden py-2 -my-2 ${index === 0 ? 'hero-word-accent' : ''}"><span class="hero-word-inner inline-block max-w-full break-words">${w}</span></span>`).join(' ');

      // Title

      anime({
        targets: '.hero-word-inner',
        translateY: ['110%', '0%'],
        opacity: [0, 1],
        duration: 1100,
        delay: anime.stagger(80, { start: 300 }),
        easing: 'spring(1, 80, 10, 0)'
      });
    }

    // Subtitle
    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 800,
      delay: 800,
      easing: 'easeOutQuart'
    });

    // CTAs
    anime({
      targets: '.hero-cta',
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.95, 1],
      duration: 700,
      delay: anime.stagger(100, { start: 1000 }),
      easing: 'spring(1, 80, 12, 0)'
    });

    // Metrics row
    anime({
      targets: '.hero-metric',
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600,
      delay: anime.stagger(80, { start: 1200 }),
      easing: 'easeOutQuart'
    });

    // Planet animation
    anime({
      targets: '.hero-planet',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
      delay: 1500,
      easing: 'easeOutQuart'
    });

    // Sparkle stars floating animation
    anime({
      targets: '.sparkle-star',
      translateY: [-6, 6],
      rotate: [0, 15],
      duration: 3000,
      loop: true,
      direction: 'alternate',
      delay: anime.stagger(400),
      easing: 'easeInOutSine'
    });
  });
</script>

<!-- Star decorators as SVG inline components -->
<svelte:head>
  <style>
    .sparkle-4pt {
      display: inline-block;
      clip-path: polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%);
      background: var(--c-fire);
    }
  </style>
</svelte:head>

<section id="home" class="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">

  <!-- Decorative sparkle stars (Y2K motif) -->
  <span class="sparkle-star absolute top-[18%] left-[8%] w-4 h-4 sparkle-4pt opacity-60" style="filter: drop-shadow(0 0 8px var(--c-fire))"></span>
  <span class="sparkle-star absolute top-[30%] right-[10%] w-3 h-3 sparkle-4pt opacity-40" style="filter: drop-shadow(0 0 6px var(--c-fire))"></span>
  <span class="sparkle-star absolute bottom-[25%] left-[15%] w-2 h-2 sparkle-4pt opacity-30"></span>
  <span class="sparkle-star absolute top-[60%] right-[6%] w-5 h-5 sparkle-4pt opacity-50" style="filter: drop-shadow(0 0 12px var(--c-fire))"></span>

  <div class="container mx-auto px-6 max-w-5xl relative z-10 text-center">

    <!-- Main title — word-by-word reveal -->
    <h1 class="hero-title mb-8 mx-auto text-white uppercase" style="word-wrap: break-word;">
      {t.heroTitle}
    </h1>

    <!-- Subtitle -->
    <p class="hero-subtitle max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12 opacity-0" style="
      font-family: 'Outfit', sans-serif;
      color: var(--c-muted);
    ">
      {t.heroSubtitle}
    </p>

    <!-- CTAs -->
    <div class="flex flex-wrap items-center justify-center gap-4 mb-20">
      <a href="#projects" data-cuelume-press="pulse" data-cuelume-release="release" class="hero-cta opacity-0 px-8 py-4 rounded-full font-semibold text-black text-sm transition-transform hover:scale-105" style="
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        background: var(--c-fire);
        box-shadow: var(--glow-fire);
      ">
        {t.viewProjects}
        <svg class="inline ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#contact" data-cuelume-press="pulse" data-cuelume-release="release" class="hero-cta opacity-0 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:border-white/30" style="
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        color: var(--c-text);
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.12);
      ">
        {t.contactMe}
      </a>
      <a href={locale === 'en' ? "/cv-en.pdf" : "/cv-es.pdf"} data-cuelume-press="pulse" data-cuelume-release="release" target="_blank" class="hero-cta opacity-0 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:border-white/30 flex items-center gap-2" style="
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        color: var(--c-text);
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.12);
      ">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        {t.downloadCv}
      </a>
    </div>

    <!-- Metrics row -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-lg mx-auto pt-12 border-t mb-12" style="border-color: var(--c-border)">
      {#each [
        { val: t.heroMetricOne, label: t.heroMetricOneLabel },
        { val: t.heroMetricTwo, label: t.heroMetricTwoLabel },
        { val: t.heroMetricThree, label: t.heroMetricThreeLabel }
      ] as metric}
        <div class="hero-metric opacity-0 text-center">
          <div class="text-2xl font-bold mb-1 display-type" style="text-transform: uppercase; color: var(--c-fire)">
            {metric.val}
          </div>
          <div class="text-xs" style="font-family: 'Outfit', sans-serif; color:var(--c-muted); letter-spacing:0.08em; text-transform:uppercase">
            {metric.label}
          </div>
        </div>
      {/each}
    </div>

    <!-- Orbit Profile / Technologies -->
    <div class="hero-planet opacity-0 translate-y-8 relative z-0 mt-8 w-full">
      <OrbitHeroObject />
    </div>

  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
    <span style="font-family: 'Outfit', sans-serif; font-size:0.6rem; letter-spacing:0.2em; color:var(--c-muted)">SCROLL</span>
    <div class="w-px h-10 bg-gradient-to-b from-transparent to-current" style="color:var(--c-fire)"></div>
  </div>

</section>

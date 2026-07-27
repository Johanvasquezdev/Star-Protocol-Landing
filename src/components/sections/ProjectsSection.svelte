<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { featuredProjects } from '../../../data/projects';
  import { translations } from '../../../data/translations';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import ProjectCard from '../ui/ProjectCard.svelte';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Autoplay from 'embla-carousel-autoplay';

  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];

  let emblaApi: any;
  let prevBtnEnabled = false;
  let nextBtnEnabled = false;

  let options = { align: 'start', loop: true, containScroll: 'trimSnaps' } as any;
  let plugins = [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })];

  function onInit(e: CustomEvent) {
    emblaApi = e.detail;
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
  }

  function onSelect() {
    if (!emblaApi) return;
    prevBtnEnabled = emblaApi.canScrollPrev();
    nextBtnEnabled = emblaApi.canScrollNext();
  }

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }
</script>

<section id="projects" class="relative z-10 px-5 sm:px-6">
  <div class="mx-auto max-w-7xl">
    <div class="anim-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6">
      <SectionHeading title={t.projectsTitle} subtitle={t.projectsSubtitle} />
      
      <!-- Carousel controls -->
      <div class="flex items-center gap-3 pb-8">
        <button 
          on:click={scrollPrev}
          disabled={!prevBtnEnabled}
          class="flex h-12 w-12 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
          style="
            border: 1px solid rgba(0,191,255,0.4); 
            background: rgba(0,191,255,0.08); 
            color: var(--c-fire);
          "
          aria-label="Previous Project"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          on:click={scrollNext}
          disabled={!nextBtnEnabled}
          class="flex h-12 w-12 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
          style="
            border: 1px solid rgba(0,191,255,0.4); 
            background: rgba(0,191,255,0.08); 
            color: var(--c-fire);
          "
          aria-label="Next Project"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
    
    <div class="anim-stagger mt-8">
      <div class="overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
        <div class="flex -ml-6">
          {#each featuredProjects as project}
            <div class="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_85%] lg:flex-[0_0_90%] xl:flex-[0_0_75%]">
              <ProjectCard {project} {locale} {t} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import { experienceItems } from '../../../data/experience';
  import { translations } from '../../../data/translations';
  import SectionHeading from '../ui/SectionHeading.svelte';

  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];
</script>

<section id="experience" class="relative z-10 px-5 sm:px-6">
  <div class="mx-auto max-w-7xl">
    <div class="anim-fade-up">
      <SectionHeading title={t.experienceTitle} subtitle={t.experienceSubtitle} />
    </div>
    
    <div class="relative mt-14 anim-stagger">
      <!-- Central Timeline line -->
      <div class="absolute left-4 top-0 h-full w-px md:left-1/2" style="background: linear-gradient(to bottom, rgba(0,191,255,0.8), rgba(0,191,255,0.1), transparent)"></div>
      
      <div class="grid gap-8">
        {#each experienceItems as item, index}
          <article class="relative md:grid md:grid-cols-2 md:gap-16 {index % 2 ? 'md:text-left' : 'md:text-right'}">
            <!-- Timeline node -->
            <span class="absolute left-4 top-7 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2" style="
              background: rgba(3,5,10,1);
              border: 1px solid rgba(0,191,255,0.5);
              box-shadow: 0 0 15px rgba(0,191,255,0.5);
              transform: translateX(-50%);
            ">
              <span style="color: var(--c-fire); font-size: 0.6rem">✦</span>
            </span>
            
            <div class={index % 2 ? 'md:col-start-2' : ''}>
              <div class="ml-12 p-6 md:ml-0" style="
                background: var(--c-surface);
                border: 1px solid var(--c-border);
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                transition: border-color 0.3s ease;
              " on:mouseenter={(e) => e.currentTarget.style.borderColor = 'rgba(0,191,255,0.4)'} on:mouseleave={(e) => e.currentTarget.style.borderColor = 'var(--c-border)'}>
                <p style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.2em; color:var(--c-fire); text-transform:uppercase">
                  SYS.LOG_0{index + 1}
                </p>
                <h3 class="mt-3 text-xl font-bold text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">{item.title[locale]}</h3>
                <p class="mt-3 text-sm leading-7 text-white/70">{item.description[locale]}</p>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

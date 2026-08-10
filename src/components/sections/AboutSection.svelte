<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { translations } from '../../../data/translations';
  
  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];
  
  let visible = false;
</script>

<section id="about" class="relative z-10 px-5 py-20 sm:px-6 sm:py-24 max-w-6xl mx-auto border-t border-white/5">
  <div 
    use:inview={{ unobserveOnEnter: true, rootMargin: '-100px' }}
    on:inview_enter={() => visible = true}
  >
    {#if visible}
      <div in:fly={{ y: 30, duration: 800 }}>
        <!-- Header -->
        <div class="mb-12">
          <h3 class="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">{t.aboutOverline}</h3>
          <h2 class="text-4xl md:text-5xl font-bold text-white display-type" style="text-transform: uppercase;">{t.aboutQuestion}</h2>
        </div>

        <!-- Profile and Text Content -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-white/70 leading-relaxed text-sm md:text-base" style="font-family: 'Outfit', sans-serif;">
          <!-- Profile Image -->
          <div class="shrink-0">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 overflow-hidden shadow-[0_0_30px_rgba(0,191,255,0.15)]" style="border-color: rgba(0,191,255,0.3); background-color: #050a15;">
              <img src="/images/profile/johan-profile.png" alt="Johan Gabriel" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <!-- Text -->
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-2 display-type" style="text-transform: uppercase;">
              {t.aboutHeading}
            </h3>
            <p class="text-[var(--c-fire)] text-xs sm:text-sm tracking-widest font-semibold uppercase mb-6" style="font-family: 'Outfit', sans-serif;">
              {t.aboutSubheading}
            </p>
            
            <div class="prose prose-invert prose-sm md:prose-base max-w-none text-white/70">
              <p class="leading-relaxed text-justify md:text-left mb-4">
                {t.aboutBody}
              </p>
            </div>
          </div>
        </div>


        
      </div>
    {/if}
  </div>
</section>

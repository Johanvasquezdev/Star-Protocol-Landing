<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { services } from '../../../data/translations';
  import { translations } from '../../../data/translations';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import GlassCard from '../ui/GlassCard.svelte';

  export let locale: 'en' | 'es' = 'en';

  $: t = translations[locale];
  
  let visible = false;
</script>

<section id="studio" class="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
  <div 
    class="mx-auto max-w-7xl"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-100px' }}
    on:inview_enter={() => visible = true}
  >
    <div class="grid gap-10 border-y border-[#25d6ff]/20 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeading title={t.studioTitle} subtitle={t.studioText} />
      
      {#if visible}
        <div class="grid gap-3 sm:grid-cols-2">
          {#each services as service, index}
            <div in:fly={{ y: 20, duration: 400, delay: index * 100 }}>
              <GlassCard variant="hud" className="rounded-sm p-4 text-center">
                <p class="font-mono text-xs uppercase tracking-widest text-[#25d6ff]">{service[locale]}</p>
              </GlassCard>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

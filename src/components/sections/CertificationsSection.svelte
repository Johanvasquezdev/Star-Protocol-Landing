<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { translations, certsData } from '../../../data/translations';
  
  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];
  
  let visible = false;
</script>

<section id="certifications" class="relative z-10 px-5 py-20 sm:px-6 sm:py-24 max-w-7xl mx-auto border-t border-white/5">
  <div 
    use:inview={{ unobserveOnEnter: true, rootMargin: '-100px' }}
    on:inview_enter={() => visible = true}
  >
    {#if visible}
      <div in:fly={{ y: 30, duration: 800 }}>
        <!-- Header -->
        <div class="mb-12">
          <h3 class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">Continuous Learning</h3>
          <h2 class="text-3xl md:text-5xl font-bold text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">{t.certificationsTitle}</h2>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {#each certsData as cert, i}
            <div 
              class="bg-[#0b101e] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/20 transition-colors group"
              in:fly={{ y: 30, duration: 600, delay: 200 + (i * 100) }}
            >
              <!-- Card Image / Icon Placeholder -->
              <div class="w-full aspect-square rounded-xl bg-gradient-to-br {cert.color} p-1 mb-4 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <div class="w-full h-full bg-[#0b101e] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <!-- Decorative waves -->
                  {#if cert.provider === "CISCO"}
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20"></div>
                  {:else}
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/20"></div>
                  {/if}
                  <span class="text-3xl font-black text-white/90 tracking-tighter z-10">{cert.short}</span>
                </div>
              </div>

              <!-- Card Content -->
              <span class="text-[10px] font-bold text-white/40 tracking-wider uppercase mb-1">{cert.provider}</span>
              <h4 class="text-base font-bold text-white mb-2 leading-tight">{cert.title}</h4>
              <p class="text-xs text-white/50 leading-relaxed">{cert.desc[locale]}</p>
            </div>
          {/each}
        </div>


      </div>
    {/if}
  </div>
</section>

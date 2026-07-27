<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { architectureCards } from '../../../data/translations';
  import { translations } from '../../../data/translations';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import GlassCard from '../ui/GlassCard.svelte';

  import Boxes from 'lucide-svelte/icons/boxes';
  import Workflow from 'lucide-svelte/icons/workflow';
  import Network from 'lucide-svelte/icons/network';
  import GitBranch from 'lucide-svelte/icons/git-branch';
  import ShieldCheck from 'lucide-svelte/icons/shield-check';
  import Database from 'lucide-svelte/icons/database';
  import TestTube2 from 'lucide-svelte/icons/test-tube-2';
  import Lock from 'lucide-svelte/icons/lock';

  export let locale: 'en' | 'es' = 'en';

  $: t = translations[locale];
  
  const icons = [Boxes, Workflow, Network, GitBranch, ShieldCheck, Database, TestTube2, Lock];
  
  $: principleText = locale === 'en'
      ? "Maintainable, scalable, testable software decisions."
      : "Decisiones mantenibles, escalables y testeables.";
      
  let visible = false;
</script>

<section class="relative z-10 px-5 py-20 sm:px-6 sm:py-24">
  <div 
    class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-100px' }}
    on:inview_enter={() => visible = true}
  >
    <SectionHeading title={t.architectureTitle} subtitle={t.architectureText} />
    
    {#if visible}
      <div class="grid gap-4 sm:grid-cols-2">
        {#each architectureCards as card, index}
          <div in:fly={{ y: 30, duration: 600, delay: index * 100 }}>
            <GlassCard variant="hud" className="flex min-h-32 items-start gap-4 p-5 hover:bg-white/5 transition-colors border border-violet-500/20">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-violet-500/10 text-violet-400">
                <svelte:component this={icons[index]} size={20} />
              </span>
              <div>
                <h3 class="font-mono text-sm tracking-widest uppercase font-semibold text-white">{card[locale]}</h3>
                <p class="mt-2 text-xs font-mono leading-6 text-white/60">{principleText}</p>
              </div>
            </GlassCard>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

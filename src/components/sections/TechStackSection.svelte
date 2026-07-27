<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { translations, techCategoriesData } from '../../../data/translations';
  import LayoutTemplate from 'lucide-svelte/icons/layout-template';
  import Server from 'lucide-svelte/icons/server';
  import Database from 'lucide-svelte/icons/database';
  import Cloud from 'lucide-svelte/icons/cloud';
  
  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];
  
  let visible = false;

  const categories = [
    {
      id: "frontend",
      icon: LayoutTemplate,
      color: "text-cyan-400",
      border: "hover:border-cyan-500/30",
      items: [
        { name: "TypeScript", dot: "bg-blue-500" },
        { name: "React", dot: "bg-cyan-400" },
        { name: "Next.js", dot: "bg-white" },
        { name: "Svelte", dot: "bg-orange-500" },
        { name: "Tailwind CSS", dot: "bg-cyan-500" }
      ]
    },
    {
      id: "backend",
      icon: Server,
      color: "text-emerald-400",
      border: "hover:border-emerald-500/30",
      items: [
        { name: "C#", dot: "bg-green-600" },
        { name: ".NET", dot: "bg-violet-600" },
        { name: "Node.js", dot: "bg-green-500" },
        { name: "REST APIs", dot: "bg-pink-500" },
        { name: "Clean Architecture", dot: "bg-emerald-500" }
      ]
    },
    {
      id: "database",
      icon: Database,
      color: "text-violet-400",
      border: "hover:border-violet-500/30",
      items: [
        { name: "SQL Server", dot: "bg-red-500" },
        { name: "PostgreSQL", dot: "bg-blue-400" },
        { name: "EF Core", dot: "bg-violet-500" }
      ]
    },
    {
      id: "devops",
      icon: Cloud,
      color: "text-orange-400",
      border: "hover:border-orange-500/30",
      items: [
        { name: "Azure", dot: "bg-blue-600" },
        { name: "AWS", dot: "bg-orange-400" },
        { name: "Docker", dot: "bg-blue-500" },
        { name: "Git & GitHub", dot: "bg-white" }
      ]
    }
  ];
</script>

<section id="stack" class="relative z-10 px-5 py-20 sm:px-6 sm:py-24 max-w-7xl mx-auto border-t border-white/5">
  <div 
    use:inview={{ unobserveOnEnter: true, rootMargin: '-100px' }}
    on:inview_enter={() => visible = true}
  >
    {#if visible}
      <div in:fly={{ y: 30, duration: 800 }}>
        <!-- Header -->
        <div class="mb-12">
          <h3 class="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">{t.techStackLabel}</h3>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">{t.techTitle}</h2>
          <p class="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed" style="font-family: 'Outfit', sans-serif;">
            {locale === 'en' ? 'I also integrate agentic AI tools like Claude Code, Cursor, and Supabase into my workflow to accelerate development and focus on architecture.' : 'También integro herramientas de IA agéntica como Claude Code, Cursor y Supabase en mi flujo de trabajo para acelerar el desarrollo y enfocarme en la arquitectura.'}
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each categories as category, i}
            <div 
              class="bg-[#0b101e] border border-white/5 rounded-2xl p-6 {category.border} transition-all duration-300 group flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:-translate-y-1"
              in:fly={{ y: 30, duration: 600, delay: 100 + (i * 100) }}
            >
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <svelte:component this={category.icon} class="w-6 h-6 {category.color}" />
                </div>
                <h4 class="text-lg font-bold text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">{techCategoriesData[category.id][locale]}</h4>
              </div>
              
              <div class="flex flex-col gap-3 flex-grow">
                {#each category.items as item}
                  <div class="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div class="w-2 h-2 rounded-full {item.dot} shadow-[0_0_8px_currentColor] opacity-80"></div>
                    <span class="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">{item.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

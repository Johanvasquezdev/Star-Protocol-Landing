<script lang="ts">
  import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
  import Github from './icons/GithubIcon.svelte';
  
  export let project: any;
  export let locale: 'en' | 'es' = 'en';
  export let compact: boolean = false;
  export let t: any;
  
  // Tilt effect
  function handleTilt(e: MouseEvent) {
    if (compact) return;
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    // Increase multiplier for a more dramatic "cinematic" tilt
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    
    // Add glare effect by updating a CSS variable that we will use in the background
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
    card.style.borderColor = 'rgba(255,255,255,0.15)'; // Softer, more premium hover border
    card.style.boxShadow = 'var(--glow-card), 0 0 40px rgba(0,191,255,0.15)';
    card.style.setProperty('--glare-x', `${glareX}%`);
    card.style.setProperty('--glare-y', `${glareY}%`);
  }

  function resetTilt(e: MouseEvent) {
    if (compact) return;
    const card = e.currentTarget as HTMLElement;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    card.style.borderColor = 'rgba(255,255,255,0.05)';
    card.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    card.style.removeProperty('--glare-x');
    card.style.removeProperty('--glare-y');
  }
</script>

<div 
  class="group glass-panel relative overflow-hidden {compact ? 'p-5' : 'min-h-[420px] grid lg:grid-cols-[1.05fr_0.95fr] gap-0 p-0'}"
  on:mousemove={handleTilt}
  on:mouseleave={resetTilt}
  style="
    border-radius: 20px;
    transition: transform 0.1s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  "
>
  <!-- Cinematic Glare Effect -->
  <div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style="
    background: radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%);
  "></div>

  {#if !compact}
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(0,191,255,0.15)] via-[rgba(0,191,255,0.05)] to-transparent z-0" />
  {/if}
  
  <div class={compact ? "" : "flex flex-col p-6 sm:p-8 relative z-10"}>
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div>
        <span style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.2em; color:var(--c-fire); text-transform:uppercase">
          ✦ {project.type[locale]}
        </span>
        <h3 class="mt-3 text-white section-title {compact ? 'text-xl' : 'text-3xl'}">
          {project.name}
        </h3>
      </div>
      {#if project.status}
        <span style="
          background: rgba(0,191,255,0.08);
          border: 1px solid rgba(0,191,255,0.18);
          color: var(--c-fire);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        ">
          {project.status[locale]}
        </span>
      {/if}
    </div>
    
    <p class="mt-5 leading-7 text-white/70 {compact ? 'text-sm' : 'text-base'}">
      {project.description[locale]}
    </p>
    
    {#if project.impact}
      <p class="mt-5 border-l-2 pl-4 text-sm leading-7 text-white/80" style="border-color: var(--c-fire)">
        {project.impact[locale]}
      </p>
    {/if}
    
    {#if project.role}
      <p class="mt-5 text-xs font-mono font-semibold uppercase leading-6 tracking-[0.14em] text-white/50">
        {project.role[locale]}
      </p>
    {/if}
    
    <div class="mt-6 flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span style="
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          border-radius: 4px;
          padding: 0.25rem 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          text-transform: uppercase;
        ">
          {tag}
        </span>
      {/each}
    </div>
    
    {#if !compact}
      <div class="mt-auto flex flex-wrap gap-4 pt-8">
        {#if project.github}
          <a href={project.github} target="_blank" rel="noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm transition hover:scale-105" style="
            background: rgba(0,191,255,0.1);
            border: 1px solid rgba(0,191,255,0.3);
            color: var(--c-fire);
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
          ">
            <Github size={16} /> GitHub
          </a>
        {/if}
        {#if project.demo}
          <a href={project.demo} target="_blank" rel="noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm transition hover:scale-105" style="
            background: var(--c-fire);
            color: #000;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            box-shadow: var(--glow-fire);
          ">
            {t.demo} <ArrowUpRight size={16} />
          </a>
        {/if}
      </div>
    {/if}
  </div>
  
  {#if !compact}
    <div class="hidden border-l relative p-6 lg:block" style="border-color: rgba(0,191,255,0.1); background: rgba(0,0,0,0.3)">
      <div class="relative h-full overflow-hidden rounded-xl border p-4 flex flex-col" style="
        border-color: rgba(0,191,255,0.2);
        background: rgba(0,0,0,0.5);
        box-shadow: inset 0 0 40px rgba(0,191,255,0.05);
      ">
        <div class="flex items-center justify-between border-b pb-3 mb-4" style="border-color: rgba(0,191,255,0.15)">
          <div class="flex gap-2" aria-hidden="true">
            <span class="h-2 w-2 rounded-full" style="background: var(--c-fire)"></span>
            <span class="h-2 w-2 rounded-full bg-white/40"></span>
            <span class="h-2 w-2 rounded-full bg-white/20"></span>
          </div>
          <span style="font-family: 'Outfit', sans-serif; font-size:0.55rem; letter-spacing:0.2em; color:var(--c-fire); text-transform:uppercase">
            SYS.DISPLAY
          </span>
        </div>
        
        {#if project.image?.src}
          <img 
            src={project.image.src} 
            alt={project.image.alt[locale]} 
            class="w-full rounded-lg border object-cover" 
            style="border-color: rgba(0,191,255,0.2)"
          />
        {:else}
          <div class="w-full flex-1 rounded-lg border flex items-center justify-center" style="
            border-color: rgba(0,191,255,0.15);
            background: rgba(0,191,255,0.03);
          ">
            <span style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.2em; color:rgba(0,191,255,0.4); text-transform:uppercase">
              No Visual Data
            </span>
          </div>
        {/if}
        
        <div class="mt-4 grid grid-cols-3 gap-3">
          {#each (project.stack ?? project.tags).slice(0, 3) as item}
            <div class="rounded-lg border p-3 flex flex-col items-center text-center justify-center" style="
              border-color: rgba(0,191,255,0.15);
              background: rgba(0,191,255,0.03);
            ">
              <span style="font-family: 'Outfit', sans-serif; font-size:0.55rem; letter-spacing:0.1em; color:var(--c-fire); text-transform:uppercase" class="truncate w-full">
                {item}
              </span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

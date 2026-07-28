<script lang="ts">
  import Menu from 'lucide-svelte/icons/menu';
  import X from 'lucide-svelte/icons/x';
  import Github from '../ui/icons/GithubIcon.svelte';
  import Linkedin from '../ui/icons/LinkedinIcon.svelte';
  import Mail from 'lucide-svelte/icons/mail';
  import AstroLogo from '../ui/icons/AstroLogo.svelte';
  import { translations } from '../../../data/translations';
  import { fade } from 'svelte/transition';

  export let locale: 'en' | 'es' = 'en';

  $: t = translations[locale];
  $: nav = t.nav as string[];
  
  const ids = ["home", "about", "stack", "projects", "contact"];
  
  let open = false;
</script>

<header class="fixed inset-x-0 top-4 z-50 px-4">
  <nav aria-label="Primary navigation" class="mx-auto max-w-7xl px-4 py-3 {open ? 'rounded-3xl' : 'rounded-full'}" style="
    background: rgba(3,5,10,0.75); 
    backdrop-filter: blur(20px); 
    border: 1px solid rgba(0,191,255,0.1);
  ">
    <div class="flex items-center justify-between">
      <a href="#home" class="flex items-center gap-3 rounded-full pr-3 text-sm font-semibold text-white/80 transition hover:text-white" style="font-family: 'Outfit', sans-serif;">
        <span class="flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-105 overflow-hidden" style="
          border: 1px solid rgba(0,191,255,0.4); 
          background: rgba(0,191,255,0.08); 
        ">
          <AstroLogo size={20} className="text-[#00BFFF]" style="filter: drop-shadow(0 0 8px rgba(0,191,255,0.8));" />
        </span>
        <span class="hidden sm:inline">Johan Gabriel Vasquez</span>
      </a>
      
      <div class="hidden items-center gap-1 lg:flex">
        {#each nav as item, index}
          <a href={`#${ids[index]}`} class="group flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:text-white" style="
            font-family: 'Outfit', sans-serif; 
            font-weight: 700; 
            letter-spacing: 0.08em; 
            font-size: 0.75rem; 
            text-transform: uppercase;
            color: var(--c-text);
          ">
            <span class="opacity-0 transition-opacity group-hover:opacity-100" style="color: var(--c-fire)">✦</span>
            {item}
          </a>
        {/each}
      </div>
      
      <div class="flex items-center gap-2">
        <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" class="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#00BFFF] hover:text-[#00BFFF] sm:flex">
          <Github size={17} />
        </a>
        <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" class="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#00BFFF] hover:text-[#00BFFF] sm:flex">
          <Linkedin size={17} />
        </a>
        
        <div class="hidden sm:flex items-center mx-2 bg-white/5 border border-white/10 rounded-full p-1" style="font-family: 'Outfit', sans-serif; font-size: 0.7rem; font-weight: 700;">
          <a href="/" class="px-3 py-1 rounded-full transition {locale === 'en' ? 'text-black' : 'text-white/60 hover:text-white'}" style="{locale === 'en' ? 'background: var(--c-fire)' : ''}">EN</a>
          <a href="/es" class="px-3 py-1 rounded-full transition {locale === 'es' ? 'text-black' : 'text-white/60 hover:text-white'}" style="{locale === 'es' ? 'background: var(--c-fire)' : ''}">ES</a>
        </div>

        <a href="#contact" class="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 md:inline-flex" style="
          font-family: 'Outfit', sans-serif; 
          background: var(--c-fire); 
          box-shadow: var(--glow-fire);
        ">
          <Mail size={16} /> {t.contactMe}
        </a>
        <button
          type="button"
          on:click={() => open = !open}
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:text-white lg:hidden"
        >
          {#if open}
            <X size={18} />
          {:else}
            <Menu size={18} />
          {/if}
        </button>
      </div>
    </div>
    
    {#if open}
      <div class="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden" in:fade out:fade>
        {#each nav as item, index}
          <a
            href={`#${ids[index]}`}
            on:click={() => open = false}
            class="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            style="font-family: 'Outfit', sans-serif; letter-spacing: 0.08em; text-transform: uppercase;"
          >
            <span style="color: var(--c-fire)">✦</span> {item}
          </a>
        {/each}
        <div class="mt-2 grid grid-cols-2 gap-2">
          <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <div class="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1" style="font-family: 'Outfit', sans-serif; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">
          <a href="/" class="flex-1 text-center px-4 py-2 rounded-full transition {locale === 'en' ? 'text-black' : 'text-white/60 hover:text-white'}" style="{locale === 'en' ? 'background: var(--c-fire)' : ''}">English</a>
          <a href="/es" class="flex-1 text-center px-4 py-2 rounded-full transition {locale === 'es' ? 'text-black' : 'text-white/60 hover:text-white'}" style="{locale === 'es' ? 'background: var(--c-fire)' : ''}">Español</a>
        </div>
      </div>
    {/if}
  </nav>
</header>

<script lang="ts">
  import Github from '../ui/icons/GithubIcon.svelte';
  import Linkedin from '../ui/icons/LinkedinIcon.svelte';
  import Mail from 'lucide-svelte/icons/mail';

  export let locale: 'en' | 'es' = 'en';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="relative z-10 px-5 py-12 sm:px-6 mt-10" style="
  background: var(--c-surface);
  border-top: 1px solid var(--c-border);
">
  <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
    <div class="flex items-center gap-3">
      <span class="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden" style="
        border: 1px solid rgba(0,191,255,0.4); 
        background: rgba(0,191,255,0.08); 
      ">
        <img src="/images/star-logo.png" alt="Logo" class="w-6 h-6 object-contain" style="mix-blend-mode: screen;" />
      </span>
      <p style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.1em; color:rgba(255,255,255,0.5); text-transform:uppercase">
        &copy; {currentYear} Johan Gabriel Vasquez
      </p>
    </div>
    
    <div class="flex items-center gap-6 text-white/50">
      <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" class="transition-colors hover:text-white" style="hover:color: var(--c-fire)" aria-label="GitHub">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" class="transition-colors hover:text-white" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="mailto:johanvasquezdev@gmail.com" class="transition-colors hover:text-white" aria-label="Email">
        <Mail size={20} />
      </a>
    </div>
  </div>
</footer>

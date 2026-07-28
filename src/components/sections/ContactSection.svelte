<script lang="ts">
  import { translations } from '../../../data/translations';
  import Github from '../ui/icons/GithubIcon.svelte';
  import Linkedin from '../ui/icons/LinkedinIcon.svelte';
  import Mail from 'lucide-svelte/icons/mail';
  import Send from 'lucide-svelte/icons/send';
  import Sparkles from 'lucide-svelte/icons/sparkles';

  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];

  let name = '';
  let email = '';
  let project = '';

  $: mailtoLink = `mailto:johanvasquezdev3@gmail.com?subject=Contact%20from%20${encodeURIComponent(name || 'Website')}&body=${encodeURIComponent(project + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
</script>

<section id="contact" class="relative z-10 px-5 sm:px-6">
  <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
    
    <div class="anim-fade-right flex flex-col justify-center">
      
      <h2 class="mt-8 text-4xl font-bold leading-tight text-white sm:text-6xl section-title">
        {t.contactTitle}
      </h2>
      
      <div class="mt-10 flex flex-col gap-5">
        <a href="mailto:johanvasquezdev3@gmail.com" class="group flex items-center gap-4 text-white/70 transition-colors hover:text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 group-hover:bg-[rgba(0,191,255,0.1)] group-hover:text-[var(--c-fire)]" style="border: 1px solid rgba(255,255,255,0.1)">
            <Mail size={20} />
          </div>
          <span class="text-xs sm:text-lg break-all">johanvasquezdev3@gmail.com</span>
        </a>
        <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" class="group flex items-center gap-4 text-white/70 transition-colors hover:text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 group-hover:bg-[rgba(0,191,255,0.1)] group-hover:text-[var(--c-fire)]" style="border: 1px solid rgba(255,255,255,0.1)">
            <Github size={20} />
          </div>
          <span class="text-xs sm:text-lg break-all">github.com/Johanvasquezdev</span>
        </a>
        <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" class="group flex items-center gap-4 text-white/70 transition-colors hover:text-white" style="font-family: 'Syncopate', sans-serif; text-transform: uppercase;">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 group-hover:bg-[rgba(0,191,255,0.1)] group-hover:text-[var(--c-fire)]" style="border: 1px solid rgba(255,255,255,0.1)">
            <Linkedin size={20} />
          </div>
          <span class="text-xs sm:text-lg break-all">LinkedIn</span>
        </a>
      </div>
    </div>
    
    <div class="anim-fade-left">
      <div class="p-8 sm:p-10" style="
        background: var(--c-surface);
        border: 1px solid var(--c-border);
        border-radius: 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      ">
        <form aria-label="Project contact form" class="flex flex-col gap-6">
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label for="contact-name" style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.15em; color:var(--c-fire); text-transform:uppercase">
                {t.name}
              </label>
              <input 
                id="contact-name" 
                name="name" 
                bind:value={name}
                class="rounded-xl border px-5 py-4 text-white outline-none transition placeholder:text-white/30"
                style="
                  background: rgba(0,0,0,0.3);
                  border-color: rgba(255,255,255,0.1);
                  font-family: 'Syncopate', sans-serif; text-transform: uppercase;
                " 
                on:focus={(e) => { e.currentTarget.style.borderColor = 'var(--c-fire)'; e.currentTarget.style.background = 'rgba(0,191,255,0.05)'; }}
                on:blur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; }}
                placeholder={t.namePlaceholder} 
                autocomplete="name" 
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="contact-email" style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.15em; color:var(--c-fire); text-transform:uppercase">
                {t.email}
              </label>
              <input 
                id="contact-email" 
                name="email" 
                type="email" 
                bind:value={email}
                class="rounded-xl border px-5 py-4 text-white outline-none transition placeholder:text-white/30"
                style="
                  background: rgba(0,0,0,0.3);
                  border-color: rgba(255,255,255,0.1);
                  font-family: 'Syncopate', sans-serif; text-transform: uppercase;
                " 
                on:focus={(e) => { e.currentTarget.style.borderColor = 'var(--c-fire)'; e.currentTarget.style.background = 'rgba(0,191,255,0.05)'; }}
                on:blur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; }}
                placeholder={t.emailPlaceholder} 
                autocomplete="email" 
              />
            </div>
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="contact-project" style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.15em; color:var(--c-fire); text-transform:uppercase">
              {t.project}
            </label>
            <textarea 
              id="contact-project" 
              name="project" 
              bind:value={project}
              class="min-h-[160px] rounded-xl border px-5 py-4 text-white outline-none transition placeholder:text-white/30 resize-none"
              style="
                background: rgba(0,0,0,0.3);
                border-color: rgba(255,255,255,0.1);
                font-family: 'Syncopate', sans-serif; text-transform: uppercase;
              " 
              on:focus={(e) => { e.currentTarget.style.borderColor = 'var(--c-fire)'; e.currentTarget.style.background = 'rgba(0,191,255,0.05)'; }}
              on:blur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; }}
              placeholder={t.projectPlaceholder}
            ></textarea>
          </div>
          
          <div class="mt-4 flex flex-wrap gap-4">
            <a href={mailtoLink} class="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm transition hover:scale-105" style="
              background: var(--c-fire);
              color: #000;
              font-family: 'Outfit', sans-serif;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              box-shadow: var(--glow-fire);
            ">
              <Send size={18} /> {t.send}
            </a>
            <a href={locale === 'en' ? "/cv-en.pdf" : "/cv-es.pdf"} target="_blank" class="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm transition hover:scale-105" style="
              background: rgba(0,191,255,0.05);
              border: 1px solid rgba(0,191,255,0.3);
              color: var(--c-fire);
              font-family: 'Outfit', sans-serif;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
            ">
              {t.downloadCv}
            </a>
          </div>
        </form>
      </div>
    </div>
    
  </div>
</section>

<script lang="ts">
  export let category: any;
  export let locale: 'en' | 'es' = 'en';

  // Tilt effect
  function handleTilt(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
    card.style.borderColor = 'rgba(0,191,255,0.4)';
    card.style.boxShadow = '0 0 30px rgba(0,191,255,0.2), 0 20px 60px rgba(0,0,0,0.5)';
  }

  function resetTilt(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement;
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    card.style.borderColor = 'rgba(255,255,255,0.07)';
    card.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
  }
</script>

<div
  class="h-full flex flex-col"
  on:mousemove={handleTilt}
  on:mouseleave={resetTilt}
  style="
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    border-radius: 16px;
    padding: 1.75rem;
    transition: transform 0.1s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  "
>
  <div class="flex items-start justify-between gap-6">
    <div>
      <span style="font-family: 'Outfit', sans-serif; font-size:0.65rem; letter-spacing:0.2em; color:var(--c-fire); text-transform:uppercase">
        ✦ {category.focus}
      </span>
      <h3 class="mt-3 text-lg leading-tight text-white section-title">{category.title[locale]}</h3>
    </div>
  </div>
  
  <p class="mt-4 text-sm leading-6 text-white/60 mb-8">{category.description[locale]}</p>
  
  <div class="mt-auto flex flex-wrap gap-2">
    {#each category.items as item}
      <span style="
        background: rgba(0,191,255,0.08);
        border: 1px solid rgba(0,191,255,0.18);
        color: var(--c-fire);
        border-radius: 999px;
        padding: 0.25rem 0.75rem;
        font-family: 'Outfit', sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      ">
        {item}
      </span>
    {/each}
  </div>
</div>

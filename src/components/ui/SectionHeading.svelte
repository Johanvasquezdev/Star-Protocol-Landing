<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  export let title: string;
  export let subtitle: string = '';
  export let align: 'left' | 'center' = 'left';

  let isInView = false;
</script>

<div 
  class={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
  use:inview={{ unobserveOnEnter: true, rootMargin: '-50px' }}
  on:inview_enter={() => isInView = true}
>
  {#if isInView}
    <div in:fly={{ y: 30, duration: 800, delay: 100 }}>
      <h2 class="section-title text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {#if subtitle}
        <p class="mt-5 text-base leading-8 text-white/70 sm:text-lg">{subtitle}</p>
      {/if}
    </div>
  {/if}
</div>

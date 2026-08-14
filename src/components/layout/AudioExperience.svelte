<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Pause from 'lucide-svelte/icons/pause';
  import Play from 'lucide-svelte/icons/play';
  import Volume2 from 'lucide-svelte/icons/volume-2';
  import VolumeX from 'lucide-svelte/icons/volume-x';
  import { bind, play as playCue, setEnabled, setVolume } from 'cuelume';

  export let locale: 'en' | 'es' = 'en';

  const copy = {
    en: {
      title: 'Ambient layer',
      on: 'Sound on',
      off: 'Sound off',
      play: 'Play ambient music',
      pause: 'Pause ambient music',
      mute: 'Mute sound effects and music',
      unmute: 'Unmute sound effects and music',
      volume: 'Ambient volume'
    },
    es: {
      title: 'Capa ambiental',
      on: 'Sonido activo',
      off: 'Sonido apagado',
      play: 'Reproducir música ambiental',
      pause: 'Pausar música ambiental',
      mute: 'Silenciar música y efectos',
      unmute: 'Activar música y efectos',
      volume: 'Volumen ambiental'
    }
  } as const;

  $: labels = copy[locale];

  let active = false;
  let muted = false;
  let supported = true;
  let volume = 0.42;

  let audioElement: HTMLAudioElement;

  function startMusic() {
    if (audioElement) {
      audioElement.play().catch(() => {});
    }
  }

  function stopMusic() {
    if (audioElement) {
      audioElement.pause();
    }
  }

  async function toggleAudio() {
    active = !active;

    if (active) {
      setEnabled(!muted);
      if (audioElement) {
        audioElement.volume = muted ? 0 : volume * 0.6;
      }
      startMusic();
      if (!muted) playCue('arrival', { volume: 0.35 });
    } else {
      setEnabled(false);
      stopMusic();
    }
  }

  function toggleMute() {
    muted = !muted;
    setEnabled(active && !muted);
    if (audioElement) {
      audioElement.volume = muted ? 0 : volume * 0.6;
    }
  }

  function updateVolume(event: Event) {
    volume = Number((event.currentTarget as HTMLInputElement).value);
    setVolume(volume);
    if (audioElement && !muted) {
      audioElement.volume = volume * 0.6;
    }
  }

  const handleGlobalInteract = () => {
    if (!active && supported) {
      toggleAudio();
    }
    document.removeEventListener('click', handleGlobalInteract);
    document.removeEventListener('keydown', handleGlobalInteract);
  };

  const handleGlobalClick = (e: MouseEvent) => {
    if (!active || muted) return;
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, input[type="submit"], input[type="button"]');
    
    if (isInteractive && !isInteractive.hasAttribute('data-cuelume-press') && !isInteractive.hasAttribute('data-audio-silent')) {
      playCue('pulse', { volume: 0.15 }); 
    }
  };

  onMount(() => {
    setEnabled(false);
    setVolume(volume);
    bind();
    
    document.addEventListener('click', handleGlobalInteract, { once: true });
    document.addEventListener('keydown', handleGlobalInteract, { once: true });
    document.addEventListener('click', handleGlobalClick);
  });

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', handleGlobalInteract);
      document.removeEventListener('keydown', handleGlobalInteract);
      document.removeEventListener('click', handleGlobalClick);
    }
    stopMusic();
    setEnabled(false);
  });
</script>

<audio bind:this={audioElement} src="/audio/ambient.mp3" loop preload="auto" class="hidden"></audio>

{#if supported}
  <div class="audio-experience fixed bottom-5 right-5 z-50" aria-label={labels.title}>
    <div class="audio-panel flex items-center gap-2 rounded-full border px-2 py-2 shadow-2xl">
      <button
        type="button"
        class="audio-main-button flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        class:audio-active={active}
        on:click={toggleAudio}
        aria-pressed={active}
        aria-label={active ? labels.pause : labels.play}
        data-audio-silent
      >
        {#if active}
          <Pause size={16} strokeWidth={2.5} />
        {:else}
          <Play size={16} strokeWidth={2.5} class="ml-0.5" />
        {/if}
      </button>

      <div class="hidden min-w-24 sm:block">
        <p class="audio-title">{labels.title}</p>
        <p class="audio-state">{active ? labels.on : labels.off}</p>
      </div>

      <label class="audio-volume hidden items-center gap-2 md:flex" aria-label={labels.volume}>
        <input type="range" min="0" max="1" step="0.01" value={volume} on:input={updateVolume} />
      </label>

      <button
        type="button"
        class="audio-icon-button flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
        on:click={toggleMute}
        disabled={!active}
        aria-label={muted ? labels.unmute : labels.mute}
        data-audio-silent
      >
        {#if muted}
          <VolumeX size={16} />
        {:else}
          <Volume2 size={16} />
        {/if}
      </button>
    </div>
  </div>
{/if}

<style>
  .audio-panel {
    background: rgba(3, 5, 10, 0.86);
    border-color: rgba(0, 191, 255, 0.2);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .audio-main-button {
    background: rgba(255, 255, 255, 0.08);
    color: var(--c-text);
  }

  .audio-main-button.audio-active {
    background: var(--c-fire);
    color: #03050a;
    box-shadow: 0 0 24px rgba(0, 191, 255, 0.25);
  }

  .audio-main-button:focus-visible,
  .audio-icon-button:focus-visible {
    outline-color: var(--c-fire);
  }

  .audio-title,
  .audio-state {
    margin: 0;
    font-family: var(--font-body);
    line-height: 1.1;
  }

  .audio-title {
    color: var(--c-text);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .audio-state {
    margin-top: 0.25rem;
    color: var(--c-muted);
    font-size: 0.65rem;
  }

  .audio-icon-button {
    color: var(--c-muted);
  }

  .audio-volume input {
    width: 4.5rem;
    accent-color: var(--c-fire);
    cursor: pointer;
  }

  @media (prefers-reduced-motion: reduce) {
    .audio-main-button,
    .audio-icon-button {
      transition: none;
    }
  }
</style>

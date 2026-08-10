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

  let audioContext: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let musicGain: GainNode | null = null;
  let musicTimer: number | null = null;
  let chordIndex = 0;

  const chords = [
    [130.81, 196, 261.63, 329.63],
    [146.83, 220, 293.66, 369.99],
    [110, 164.81, 220, 277.18],
    [123.47, 185, 246.94, 311.13]
  ];

  function getAudioContext() {
    const AudioContextConstructor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return null;
    return new AudioContextConstructor();
  }

  function ensureAudioGraph() {
    if (audioContext && masterGain && musicGain) return audioContext;

    const context = getAudioContext();
    if (!context) {
      supported = false;
      return null;
    }

    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -26;
    compressor.knee.value = 18;
    compressor.ratio.value = 8;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;

    masterGain = context.createGain();
    musicGain = context.createGain();
    musicGain.gain.value = 0.42;
    masterGain.gain.value = muted ? 0 : volume * 0.42;

    musicGain.connect(masterGain);
    masterGain.connect(compressor);
    compressor.connect(context.destination);
    audioContext = context;

    return context;
  }

  function playAmbientChord() {
    if (!audioContext || !musicGain || !active) return;

    const startAt = audioContext.currentTime + 0.04;
    const chord = chords[chordIndex % chords.length];
    chordIndex += 1;

    chord.forEach((frequency, index) => {
      const oscillator = audioContext!.createOscillator();
      const gain = audioContext!.createGain();
      const peak = index === 0 ? 0.035 : index === 3 ? 0.014 : 0.022;

      oscillator.type = index === 0 ? 'triangle' : 'sine';
      oscillator.detune.value = index === 2 ? -3 : index === 3 ? 4 : 0;
      oscillator.frequency.setValueAtTime(frequency, startAt);
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(peak, startAt + 1.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 5.3);
      oscillator.connect(gain);
      gain.connect(musicGain!);
      oscillator.start(startAt);
      oscillator.stop(startAt + 5.5);
    });
  }

  function startMusic() {
    if (musicTimer !== null) return;
    playAmbientChord();
    musicTimer = window.setInterval(playAmbientChord, 4200);
  }

  function stopMusic() {
    if (musicTimer !== null) {
      window.clearInterval(musicTimer);
      musicTimer = null;
    }
  }

  async function toggleAudio() {
    const context = ensureAudioGraph();
    if (!context || !masterGain) return;

    if (context.state === 'suspended') await context.resume();
    active = !active;

    if (active) {
      setEnabled(!muted);
      setVolume(volume);
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
    if (masterGain && audioContext) {
      masterGain.gain.cancelScheduledValues(audioContext.currentTime);
      masterGain.gain.setTargetAtTime(muted ? 0 : volume * 0.42, audioContext.currentTime, 0.08);
    }
  }

  function updateVolume(event: Event) {
    volume = Number((event.currentTarget as HTMLInputElement).value);
    setVolume(volume);
    if (masterGain && audioContext && !muted) {
      masterGain.gain.setTargetAtTime(volume * 0.42, audioContext.currentTime, 0.08);
    }
  }

  onMount(() => {
    setEnabled(false);
    setVolume(volume);
    bind();
  });

  onDestroy(() => {
    stopMusic();
    setEnabled(false);
    audioContext?.close();
  });
</script>

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

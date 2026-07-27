<script lang="ts">
  import ThreeHeroObject from '../ThreeHeroObject.svelte';
</script>

<div class="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center pointer-events-none mt-12 mb-8 scale-90 md:scale-100">
  
  <!-- Outer Orbit (Radius ~280px) -->
  <div class="absolute w-[560px] h-[560px] rounded-full border border-[rgba(0,191,255,0.15)]"></div>

  <!-- Middle Orbit (Radius ~200px) -->
  <div class="absolute w-[400px] h-[400px] rounded-full border border-[rgba(124,58,237,0.2)]"></div>

  <!-- Inner Orbit (Radius ~120px) -->
  <div class="absolute w-[240px] h-[240px] rounded-full border border-[rgba(0,191,255,0.3)]"></div>

  <!-- Center: 3D Planet -->
  <div class="absolute inset-0 m-auto w-full h-full z-10 flex items-center justify-center scale-90 md:scale-100">
    <ThreeHeroObject />
  </div>

  <!-- Decorative Glow Behind Core -->
  <div class="absolute z-0 w-32 h-32 md:w-44 md:h-44 bg-[var(--c-fire)] rounded-full blur-[60px] opacity-20"></div>

</div>

<style>
  /* Kept for future use if needed, but not strictly necessary now */
</style>

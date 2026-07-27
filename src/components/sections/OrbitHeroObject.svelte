<script lang="ts">
  import ThreeHeroObject from '../ThreeHeroObject.svelte';

  const outerOrbit = [
    { label: "Docker", color: "#2496ED" },
    { label: "Postgres", color: "#336791" },
    { label: "AWS", color: "#FF9900" },
    { label: "Linux", color: "#FCC624" }
  ];

  const middleOrbit = [
    { label: "React", color: "#61DAFB" },
    { label: "Svelte", color: "#FF3E00" },
    { label: "Git", color: "#F05032" },
    { label: ".NET", color: "#512BD4" }
  ];

  const innerOrbit = [
    { label: "Next.js", color: "#000000" },
    { label: "Node", color: "#339933" },
    { label: "SQL", color: "#4479A1" }
  ];
</script>

<div class="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center pointer-events-none mt-12 mb-8 scale-90 md:scale-100">
  
  <!-- Outer Orbit (Radius ~280px) -->
  <div class="absolute w-[560px] h-[560px] rounded-full border border-[rgba(0,191,255,0.15)]"></div>
  <div class="absolute w-[560px] h-[560px] orbit-spin">
    {#each outerOrbit as node, i}
      <div class="absolute left-1/2 top-1/2" style="transform: rotate({i * (360 / outerOrbit.length)}deg) translateY(-280px);">
        <div class="orbit-spin-reverse">
          <div style="transform: rotate(-{i * (360 / outerOrbit.length)}deg);">
            <div class="bg-white shadow-lg rounded-2xl flex items-center justify-center border-2 border-black/10 w-14 h-14 -ml-7 -mt-7 overflow-hidden">
              <span class="text-[0.65rem] font-bold" style="color: {node.color}">{node.label}</span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Middle Orbit (Radius ~200px) -->
  <div class="absolute w-[400px] h-[400px] rounded-full border border-[rgba(124,58,237,0.2)]"></div>
  <div class="absolute w-[400px] h-[400px] orbit-spin-reverse-slow">
    {#each middleOrbit as node, i}
      <div class="absolute left-1/2 top-1/2" style="transform: rotate({i * (360 / middleOrbit.length)}deg) translateY(-200px);">
        <div class="orbit-spin-slow">
          <div style="transform: rotate(-{i * (360 / middleOrbit.length)}deg);">
            <div class="bg-white shadow-lg rounded-2xl flex items-center justify-center border-2 border-black/10 w-12 h-12 -ml-6 -mt-6 overflow-hidden">
              <span class="text-[0.6rem] font-bold" style="color: {node.color}">{node.label}</span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Inner Orbit (Radius ~120px) -->
  <div class="absolute w-[240px] h-[240px] rounded-full border border-[rgba(0,191,255,0.3)]"></div>
  <div class="absolute w-[240px] h-[240px] orbit-spin">
    {#each innerOrbit as node, i}
      <div class="absolute left-1/2 top-1/2" style="transform: rotate({i * (360 / innerOrbit.length)}deg) translateY(-120px);">
        <div class="orbit-spin-reverse">
          <div style="transform: rotate(-{i * (360 / innerOrbit.length)}deg);">
            <div class="bg-white shadow-lg rounded-2xl flex items-center justify-center border-2 border-black/10 w-10 h-10 -ml-5 -mt-5 overflow-hidden">
              <span class="text-[0.55rem] font-bold" style="color: {node.color}">{node.label}</span>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

    <!-- Center: 3D Planet -->
    <div class="absolute inset-0 m-auto w-full h-full z-10 flex items-center justify-center scale-90 md:scale-100">
      <ThreeHeroObject />
    </div>

  <!-- Decorative Glow Behind Core -->
  <div class="absolute z-0 w-32 h-32 md:w-44 md:h-44 bg-[var(--c-fire)] rounded-full blur-[60px] opacity-20"></div>

</div>

<style>
  .orbit-spin {
    animation: orbit-spin-anim 40s linear infinite;
  }
  .orbit-spin-reverse {
    animation: orbit-spin-reverse-anim 40s linear infinite;
  }
  
  .orbit-spin-slow {
    animation: orbit-spin-anim 55s linear infinite;
  }
  .orbit-spin-reverse-slow {
    animation: orbit-spin-reverse-anim 55s linear infinite;
  }

  @keyframes orbit-spin-anim {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes orbit-spin-reverse-anim {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
</style>

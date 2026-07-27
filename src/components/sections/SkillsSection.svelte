<script lang="ts">
  import { skillCategories } from '../../../data/skills';
  import { translations } from '../../../data/translations';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import SkillCard from '../ui/SkillCard.svelte';

  export let locale: 'en' | 'es' = 'en';
  $: t = translations[locale];
</script>

<section id="skills" class="relative z-10 px-5 sm:px-6">
  <div class="mx-auto max-w-7xl">
    <div class="anim-fade-up">
      <SectionHeading title={t.skillsTitle} subtitle={t.skillsSubtitle} />
    </div>
    
    <div class="anim-stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {#each skillCategories as category}
        <SkillCard {category} {locale} />
      {/each}
    </div>
  </div>
</section>

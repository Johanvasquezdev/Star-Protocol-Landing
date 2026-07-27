<script lang="ts">
  export let className: string = '';
  export let variant: 'glass' | 'hud' = 'glass';
</script>

<div class={`rounded-2xl ${variant === 'hud' ? 'hud-panel' : 'glass'} ${className}`}>
  <slot />
</div>

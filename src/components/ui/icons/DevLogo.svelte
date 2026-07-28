<script>
  export let size = 24;
  export let className = "";
  export let style = "";
</script>

<svg 
  width={size} 
  height={size} 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2.5" 
  stroke-linecap="round" 
  stroke-linejoin="round"
  class={className}
  style={style}
  xmlns="http://www.w3.org/2000/svg"
>
  <polyline points="10 6 4 12 10 18"></polyline>
  <polyline points="14 18 20 12 14 6"></polyline>
  <line x1="14" y1="4" x2="10" y2="20"></line>
</svg>

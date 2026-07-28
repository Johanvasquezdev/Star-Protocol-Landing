<script>
  export let size = 24;
  export let className = "";
  export let style = "";
</script>

<svg 
  width={size} 
  height={size} 
  viewBox="0 0 256 368" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  style={style}
>
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M128 0L242.062 268.047C224.238 276.549 202.822 278.681 184.225 273.81C165.628 268.94 148.868 256.764 128 234.618C107.132 256.764 90.372 268.94 71.775 273.81C53.178 278.681 31.762 276.549 13.938 268.047L128 0ZM128 290.718C154.204 290.718 180.201 296.657 203.226 307.728C226.251 318.8 245.836 334.82 256 354.516C245.836 334.82 226.251 318.8 203.226 307.728C180.201 296.657 154.204 290.718 128 290.718C101.796 290.718 75.799 296.657 52.774 307.728C29.749 318.8 10.164 334.82 0 354.516C10.164 334.82 29.749 318.8 52.774 307.728C75.799 296.657 101.796 290.718 128 290.718Z" 
    fill="currentColor"
  />
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
</svg>

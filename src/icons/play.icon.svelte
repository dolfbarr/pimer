<script>
  import {fade, draw} from 'svelte/transition'
  export let isPlaying
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="feather feather-chevron-play h-full w-full stroke-current">
  {#if isPlaying}
    <rect x="6" y="4" width="4" height="16" in:draw out:fade /><rect
      x="14"
      y="4"
      width="4"
      height="16"
      in:draw
      out:fade />
  {:else}
    <polygon points="5 3 19 12 5 21 5 3" in:draw out:fade />
  {/if}
</svg>

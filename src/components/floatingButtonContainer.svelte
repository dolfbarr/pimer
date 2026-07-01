<script>
  export let classList = ''
  export let container = null
</script>

<div class="absolute flex max-h-screen flex-col p-5 {classList}" bind:this={container}>
  <slot />
</div>

<script>
  export let onClick = () => undefined
  export let testId = 'pimer-button'
  export let classList = ''
</script>

<button
  class="h-14 w-14 self-center transition-transform active:scale-90 lg:h-20 lg:w-20 {classList}"
  data-testid={testId}
  on:click={onClick}>
  <slot />
</button>

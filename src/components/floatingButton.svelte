<script>
  import Button from './button.svelte'

  export let classList = ''
  export let onClick = () => undefined
  export let testId = 'floating-button'
</script>

<Button classList={classList + ' mx-4 my-2'} {onClick} {testId}>
  <slot />
</Button>

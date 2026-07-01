<script>
  import {session} from '../../stores/timers'
  import {BREAK_TIMER, LONG_BREAK_TIMER} from '../../constants'

  export let sessionContainer = null
</script>

<!-- Session log block -->
<div
  class="absolute top-24 m-2 flex h-48 max-h-10 max-w-xl flex-wrap content-center  justify-center gap-2 overflow-auto lg:top-7 lg:max-h-12 landscape:invisible landscape:lg:visible"
  data-testid="sessions-container"
  bind:this={sessionContainer}>
  {#each $session as { timer, task }}
    <div
      title={task}
      data-testid="session-dot"
      class="h-4 {timer === LONG_BREAK_TIMER ? 'w-10' : 'w-4'} rounded-full border-2 border-solid border-current {[
        LONG_BREAK_TIMER,
        BREAK_TIMER,
      ].includes(timer) && 'bg-current'} " />
  {/each}
</div>

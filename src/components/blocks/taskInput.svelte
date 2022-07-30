<script>
  import {currentTask, currentTimerName} from '../../stores/timers'
  import {getBackgroundColor} from '../../utils/renders'
</script>

<!-- Task name input -->
<div
  class="absolute bottom-7 m-2 justify-center gap-2 overflow-auto file:after:odd:backdrop:flex"
  data-testid="task-name">
  <span
    role="textbox"
    contenteditable
    class="z-10 appearance-none {getBackgroundColor($currentTimerName)} text-center text-3xl focus:outline-none"
    bind:innerHTML={$currentTask} />
</div>

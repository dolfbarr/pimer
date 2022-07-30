<script>
  import '../app.css'
  import {currentTimerName} from '../stores/timers'
  import {getBackgroundColor} from '../utils/renders'
</script>

<div
  class="container relative mx-auto flex min-h-screen min-w-full justify-center {getBackgroundColor(
    $currentTimerName,
  )}">
  <slot />
</div>

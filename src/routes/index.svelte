<script>
  import play from '/play.svg'
  import pause from '/pause.svg'
  import chevronLeft from '/chevron-left.svg'
  import chevronRight from '/chevron-right.svg'

  import { tweened } from 'svelte/motion'

  const SECOND_IN_MS = 1000
  const MINUTE_IN_MS = 60 * SECOND_IN_MS

  const WORK_TIMER = 'WORK_TIMER'
  const BREAK_TIMER = 'BREAK_TIMER'

  const  timers = {
    [WORK_TIMER]: 0.1 * MINUTE_IN_MS,
    [BREAK_TIMER]: 0.2 * MINUTE_IN_MS,
  }
  let session = []
  let isTimerGoing = false
  let isTimerPaused = false

  let currentTimer, currentTimerName

  const pickNextTimer = () => {
    if (session.length && session[session.length - 1] === WORK_TIMER) {
      currentTimer = tweened(timers[BREAK_TIMER])
      currentTimerName = BREAK_TIMER
    } else {
      currentTimer = tweened(timers[WORK_TIMER])
      currentTimerName = WORK_TIMER
    }
  }

  pickNextTimer()

  const startTimer = () => {
    console.log({session, currentTimerName}, $currentTimer)
    isTimerGoing = true

    const timerInterval = setInterval(function () {
      if (!isTimerPaused) {
        if ($currentTimer > 0) {
          $currentTimer -= 1000
        }
      }

      if ($currentTimer === 0 && isTimerGoing) {
        isTimerGoing = false
        session = [...session, currentTimerName]
        pickNextTimer()
        clearInterval(timerInterval)
      }
    }, SECOND_IN_MS)
  }
</script>

<div class="container mx-auto min-h-screen w-max flex">
    <div class="object-center self-center flex flex-col justify-center align-middle">
      <h1 class="text-9xl font-sans">
        <button class="self-center text-3xl">
          <img src={chevronLeft} alt="chevron left icon" />
        </button>
        <span>{Math.floor($currentTimer / MINUTE_IN_MS)}<span class="animate-pulse align-text-top">:</span>{Math.floor(($currentTimer - Math.floor($currentTimer / MINUTE_IN_MS) * MINUTE_IN_MS)/SECOND_IN_MS)}</span>
        <button class="self-center text-3xl">
          <img src={chevronRight} alt="chevron left icon" />
        </button>
      </h1>
      <button class="self-center text-3xl mt-2" on:click={startTimer}>
        <img src={play} alt="chevron play icon" />
      </button>
    </div>
</div>
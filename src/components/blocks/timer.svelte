<script>
  import {onMount} from 'svelte'
  import {SECOND_IN_MS, BREAK_TIMER} from '../../constants'
  import {
    isTimerPaused,
    isTimerGoing,
    currentTimer,
    currentTimerName,
    currentTask,
    timerInterval,
    session,
    pickNextTimer,
  } from '../../stores/timers'
  import {getFullMinutes, getRemainderSeconds, scrollToBottom} from '../../utils/renders'

  import PrevIcon from '../../icons/prev.icon.svelte'
  import NextIcon from '../../icons/next.icon.svelte'
  import PlayIcon from '../../icons/play.icon.svelte'
  import Button from '../button.svelte'

  export let sessionContainer = null

  const pauseTimer = () => {
    isTimerPaused.set(!$isTimerPaused)
  }

  const startTimer = () => {
    isTimerGoing.set(true)

    timerInterval.set(
      setInterval(function () {
        if (!$isTimerGoing) clearInterval(timerInterval)
        if (!$isTimerPaused && $currentTimer > 0) currentTimer.set($currentTimer - 1000)

        if ($currentTimer === 0 && $isTimerGoing) {
          isTimerGoing.set(false)
          session.set([...$session, {timer: $currentTimerName, task: $currentTask}])
          pickNextTimer()
          clearInterval($timerInterval)

          // Break timer autostart
          if ($currentTimerName === BREAK_TIMER) {
            startTimer()
          }
        }
      }, SECOND_IN_MS),
    )
  }

  const nextSession = () => {
    isTimerGoing.set(false)
    clearInterval($timerInterval)
    session.set([...$session, {timer: $currentTimerName, task: $currentTask}])
    scrollToBottom(sessionContainer)
    pickNextTimer()
  }

  const prevSession = () => {
    isTimerGoing.set(false)
    clearInterval(timerInterval)
    session.set([...$session.slice(0, -1)])
    scrollToBottom(sessionContainer)
    pickNextTimer()
  }

  onMount(async () => {
    pickNextTimer()
  })
</script>

<!-- Timer block -->
<div class="flex flex-col justify-center self-center object-center align-middle" data-testid="timer">
  <div class="flex font-sans text-6xl lg:text-9xl">
    <Button onClick={prevSession} testId="prev-button" classList={!$session.length && 'invisible'}>
      <PrevIcon />
    </Button>

    <div class="relative top-[-3px] flex text-center font-mono" data-testid="timer-count">
      <div class="flex-1">{getFullMinutes($currentTimer)}</div>
      <div class="{$isTimerGoing && 'animate-pulse'} relative top-[-2px] lg:top-[-10px]">:</div>
      <div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
    </div>

    <Button onClick={nextSession} testId="next-button">
      <NextIcon />
    </Button>
  </div>

  <Button onClick={$isTimerGoing ? pauseTimer : startTimer} testId="play-button" classList="mt-2 lg:mt-8">
    <PlayIcon isPlaying={$isTimerGoing && !$isTimerPaused} />
  </Button>
</div>

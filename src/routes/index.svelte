<script>
  import { tweened } from 'svelte/motion'
import {slide, fade, draw } from 'svelte/transition';

  const SECOND_IN_MS = 1000
  const MINUTE_IN_MS = 60 * SECOND_IN_MS

  const WORK_TIMER = 'WORK_TIMER'
  const BREAK_TIMER = 'BREAK_TIMER'

  const renderTime = (time) => time.toString().padStart(2, '0')

  const getFullMinutes = (totalTimeInMs) => {
    return renderTime(Math.floor(totalTimeInMs / MINUTE_IN_MS))
  }

  const getRemainderSeconds = (totalTimeInMs) => {
    return renderTime(Math.floor((totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS)/SECOND_IN_MS))
  }

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

  const pauseTimer = () => {
    isTimerPaused = !isTimerPaused
  }

  const startTimer = () => {
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

        // Break timer autostart
        if (currentTimerName === BREAK_TIMER) {
          startTimer()
        }
      }
    }, SECOND_IN_MS)
  }
</script>

<div class="container mx-auto min-h-screen min-w-full flex justify-center transition-all {currentTimerName === BREAK_TIMER && 'bg-lime-500'} {currentTimerName === BREAK_TIMER && 'text-white'}">
    <div class="object-center self-center flex flex-col justify-center align-middle">
      <div class="text-9xl font-sans flex">
        <button class="self-center h-32 w-32">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left h-full w-full stroke-current">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="text-center flex just font-mono relative top-[-3px]">
          <div class="flex-1">{getFullMinutes($currentTimer)}</div>
          <div class="{isTimerGoing && 'animate-pulse'} relative top-[-8px]">:</div>
          <div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
        </div>
        <button class="self-center flex h-32 w-32">
         <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right h-full w-full stroke-current">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <button class="self-center mt-8 h-16 w-16" on:click={isTimerGoing ? pauseTimer : startTimer}>
        <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-play h-full w-full stroke-current">
          {#if isTimerGoing && !isTimerPaused}
            <rect x="6" y="4" width="4" height="16" in:draw out:fade></rect><rect x="14" y="4" width="4" height="16" in:draw out:fade></rect>
          {:else}
            <polygon points="5 3 19 12 5 21 5 3" in:draw out:fade></polygon>
          {/if}
        </svg>
      </button>
    </div>
</div>
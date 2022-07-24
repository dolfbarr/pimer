<script>
  import { tweened } from 'svelte/motion'
import {slide, fade, draw } from 'svelte/transition';

  const SECOND_IN_MS = 1000
  const MINUTE_IN_MS = 60 * SECOND_IN_MS

  const WORK_TIMER = 'WORK_TIMER'
  const BREAK_TIMER = 'BREAK_TIMER'
  const LONG_BREAK_TIMER = 'LONG_BREAK_TIMER'
  const LONG_BREAK_APPEAR = 4

  const renderTime = (time) => time.toString().padStart(2, '0')

  const getFullMinutes = (totalTimeInMs) => {
    return renderTime(Math.floor(totalTimeInMs / MINUTE_IN_MS))
  }

  const getRemainderSeconds = (totalTimeInMs) => {
    return renderTime(Math.floor((totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS)/SECOND_IN_MS))
  }

  const  timers = {
    [WORK_TIMER]: 0.1 * MINUTE_IN_MS,
    [BREAK_TIMER]: 0.1 * MINUTE_IN_MS,
    [LONG_BREAK_TIMER]: 0.2 * MINUTE_IN_MS,
  }
  let session = []
  let isTimerGoing = false
  let isTimerPaused = false

  let currentTimer, currentTimerName

  const pickNextTimer = () => {
    if (session.length && session[session.length - 1] === WORK_TIMER) {
      if ((session.length % (LONG_BREAK_APPEAR * 2 - 1)) === 0) {
        currentTimer = tweened(timers[LONG_BREAK_TIMER])
        currentTimerName = LONG_BREAK_TIMER
      } else {
        currentTimer = tweened(timers[BREAK_TIMER])
        currentTimerName = BREAK_TIMER
      }
    } else {
      currentTimer = tweened(timers[WORK_TIMER])
      currentTimerName = WORK_TIMER
    }
  }

  pickNextTimer()

  const pauseTimer = () => {
    isTimerPaused = !isTimerPaused
  }

  let timerInterval = -1

  const startTimer = () => {
    isTimerGoing = true

    timerInterval = setInterval(function () {
      if (!isTimerGoing) {
        clearInterval(timerInterval)
      }

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

  const nextSession = () => {
    isTimerGoing = false
    clearInterval(timerInterval)
    session = [...session, currentTimerName]
    pickNextTimer()
  }

  const prevSession = () => {
    isTimerGoing = false
    clearInterval(timerInterval)
    session = [...session.slice(0, -1)]
    pickNextTimer()
  }
</script>

<div class="container relative mx-auto min-h-screen min-w-full flex justify-center transition-all {currentTimerName !== WORK_TIMER && 'bg-lime-500'} {currentTimerName !== WORK_TIMER && 'text-white'}">
  <div class="absolute top-0 right-0 m-5">
    <button class="self-center h-16 w-16 hover:rotate-180 transition-all">
      <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings h-full w-full stroke-current">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    </button>
  </div>
    <div class="object-center self-center flex flex-col justify-center align-middle">
      <div class="text-9xl font-sans flex">
        <button class="self-center h-32 w-32 {!session.length && 'invisible'}" on:click={prevSession}>
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left h-full w-full stroke-current">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="text-center flex just font-mono relative top-[-3px]">
          <div class="flex-1">{getFullMinutes($currentTimer)}</div>
          <div class="{isTimerGoing && 'animate-pulse'} relative top-[-8px]">:</div>
          <div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
        </div>
        <button class="self-center flex h-32 w-32" on:click={nextSession}>
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
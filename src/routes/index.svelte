<script>
  import {browser} from '$app/env'
  import {tweened} from 'svelte/motion'
  import {fade} from 'svelte/transition'
  import Setting from '../components/setting.svelte'
  import SettingsIcon from '../icons/settings.icon.svelte'
  import ModeIcon from '../icons/mode.icon.svelte'
  import PrevIcon from '../icons/prev.icon.svelte'
  import NextIcon from '../icons/next.icon.svelte'
  import PlayIcon from '../icons/play.icon.svelte'

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
    return renderTime(Math.floor((totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS) / SECOND_IN_MS))
  }

  const timers = {
    [WORK_TIMER]: 0.1 * MINUTE_IN_MS,
    [BREAK_TIMER]: 0.1 * MINUTE_IN_MS,
    [LONG_BREAK_TIMER]: 0.2 * MINUTE_IN_MS,
  }
  let session = []
  let isTimerGoing = false
  let isTimerPaused = false
  let isSettingsVisible = false
  let isDarkMode = browser && (localStorage.theme === 'dark' || document.documentElement.classList.contains('dark'))

  let currentTimer, currentTimerName

  const pickNextTimer = () => {
    if (session.length && session[session.length - 1] === WORK_TIMER) {
      if (session.length % (LONG_BREAK_APPEAR * 2 - 1) === 0) {
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

  const toggleSettings = () => {
    isSettingsVisible = !isSettingsVisible
  }

  const toggleDarkMode = () => {
    if (browser) {
      if (document.documentElement.classList.contains('dark')) {
        isDarkMode = false
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      } else {
        isDarkMode = true
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      }
    }
  }

  const isBreak = (current) => current !== WORK_TIMER

  const getBackgroundColor = (current) => {
    return `transition-[background-color] duration-500 ${isBreak(current) && 'bg-lime-500 dark:bg-lime-800'} ${
      isBreak(current) && 'text-white dark:text-zinc-200'
    }`
  }
</script>

<div
  class="container relative mx-auto flex min-h-screen min-w-full justify-center {getBackgroundColor(currentTimerName)}">
  <!-- Floating settings button -->
  <div class="absolute top-0 left-0 flex max-h-screen flex-col p-5">
    <button class="mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90" on:click={toggleSettings}>
      <SettingsIcon />
    </button>

    <!-- Settings block -->
    {#if isSettingsVisible}
      <div in:fade out:fade class="z-10 {getBackgroundColor(currentTimerName)} h-full overflow-auto">
        <Setting
          label="Work time, min"
          settings={[10, 15, 20, 25, 30, 50, 60, 90, 120]}
          isBreak={isBreak(currentTimerName)} />
        <div class="flex flex-wrap justify-between">
          <Setting label="Break time, min" settings={[5, 10, 15]} isBreak={isBreak(currentTimerName)} />
          <Setting label="Long break time, min" settings={[15, 20, 30]} isBreak={isBreak(currentTimerName)} />
        </div>
        <Setting label="Session count" settings={[1, 2, 3, 4, 5, 6, 7, 8, 9]} isBreak={isBreak(currentTimerName)} />
      </div>
    {/if}
  </div>

  <!-- Floating mode button -->
  {#if browser}
    <div class="absolute top-0 right-0 flex max-h-screen flex-col p-5">
      <button class="mx-4 my-2 h-12 w-12 self-auto transition-transform active:scale-90" on:click={toggleDarkMode}>
        <ModeIcon {isDarkMode} />
      </button>
    </div>
  {/if}

  <!-- Timer block -->
  <div class="flex flex-col justify-center self-center object-center align-middle">
    <div class="flex font-sans text-6xl lg:text-9xl">
      <button
        class="h-14 w-14 self-center lg:h-32 lg:w-32 {!session.length &&
          'invisible'} transition-transform active:scale-90"
        on:click={prevSession}>
        <PrevIcon />
      </button>

      <div class="relative top-[-3px] flex text-center font-mono">
        <div class="flex-1">{getFullMinutes($currentTimer)}</div>
        <div class="{isTimerGoing && 'animate-pulse'} relative top-[-2px]">:</div>
        <div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
      </div>

      <button
        class="flex h-14 w-14 self-center transition-transform active:scale-90 lg:h-32 lg:w-32"
        on:click={nextSession}>
        <NextIcon />
      </button>
    </div>

    <button class="mt-8 h-16 w-16 self-center lg:h-20 lg:w-20" on:click={isTimerGoing ? pauseTimer : startTimer}>
      <PlayIcon isPlaying={isTimerGoing && !isTimerPaused} />
    </button>
  </div>
</div>

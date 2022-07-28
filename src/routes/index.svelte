<script>
  import {browser} from '$app/env'
  import {tweened} from 'svelte/motion'
  import {fade} from 'svelte/transition'
  import {writable} from 'svelte/store'
  import Setting from '../components/setting.svelte'
  import SettingsIcon from '../icons/settings.icon.svelte'
  import ModeIcon from '../icons/mode.icon.svelte'
  import PrevIcon from '../icons/prev.icon.svelte'
  import NextIcon from '../icons/next.icon.svelte'
  import PlayIcon from '../icons/play.icon.svelte'
  import ResetIcon from '../icons/reset.icon.svelte'

  const SECOND_IN_MS = 1000
  const MINUTE_IN_MS = 60 * SECOND_IN_MS

  const WORK_TIMER = 'WORK_TIMER'
  const BREAK_TIMER = 'BREAK_TIMER'
  const LONG_BREAK_TIMER = 'LONG_BREAK_TIMER'
  const LONG_BREAK_APPEAR = 'LONG_BREAK_APPEAR'

  const DEFAULT_CURRENT_WORK_TASK = 'Work'
  const DEFAULT_BREAK_TASK = 'Break'

  const DEFAULT_LONG_BREAK_APPEAR = 4
  const DEFAULT_WORK_TIME = 25 * MINUTE_IN_MS
  const DEFAULT_BREAK_TIME = 5 * MINUTE_IN_MS
  const DEFAULT_LONG_BREAK_TIME = 30 * MINUTE_IN_MS

  const renderTime = (time) => time.toString().padStart(2, '0')

  const getFullMinutes = (totalTimeInMs) => {
    return renderTime(Math.floor(totalTimeInMs / MINUTE_IN_MS))
  }

  const getDefaultValue = (value, setting) => {
    if (browser && localStorage[setting]) {
      return localStorage[setting]
    }
    return value
  }

  const getRemainderSeconds = (totalTimeInMs) => {
    return renderTime(Math.floor((totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS) / SECOND_IN_MS))
  }

  let settings = writable({
    [WORK_TIMER]: getDefaultValue(DEFAULT_WORK_TIME, WORK_TIMER),
    [BREAK_TIMER]: getDefaultValue(DEFAULT_BREAK_TIME, BREAK_TIMER),
    [LONG_BREAK_TIMER]: getDefaultValue(DEFAULT_LONG_BREAK_TIME, LONG_BREAK_TIMER),
    [LONG_BREAK_APPEAR]: getDefaultValue(DEFAULT_LONG_BREAK_APPEAR, LONG_BREAK_APPEAR),
  })

  let session = []
  let currentTask = DEFAULT_CURRENT_WORK_TASK
  let isTimerGoing = false
  let isTimerPaused = false
  let isSettingsVisible = false
  let isDarkMode = browser && (localStorage.theme === 'dark' || document.documentElement.classList.contains('dark'))

  let settingsContainer
  let sessionLogContainer

  let currentTimer, currentTimerName

  const pickNextTimer = () => {
    if (session.length && session[session.length - 1].timer === WORK_TIMER) {
      if (session.length % ($settings[LONG_BREAK_APPEAR] * 2 - 1) === 0) {
        currentTimer = tweened(Number($settings[LONG_BREAK_TIMER]))
        currentTimerName = LONG_BREAK_TIMER
      } else {
        currentTimer = tweened(Number($settings[BREAK_TIMER]))
        currentTimerName = BREAK_TIMER
      }
    } else {
      currentTimer = tweened(Number($settings[WORK_TIMER]))
      currentTimerName = WORK_TIMER
    }

    currentTask = currentTimerName !== WORK_TIMER ? DEFAULT_BREAK_TASK : DEFAULT_CURRENT_WORK_TASK
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
        session = [...session, {timer: currentTimerName, task: currentTask}]
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
    session = [...session, {timer: currentTimerName, task: currentTask}]
    scrollToBottom(sessionLogContainer)
    pickNextTimer()
  }

  const prevSession = () => {
    isTimerGoing = false
    clearInterval(timerInterval)
    session = [...session.slice(0, -1)]
    scrollToBottom(sessionLogContainer)
    pickNextTimer()
  }

  const toggleSettings = () => {
    isSettingsVisible = !isSettingsVisible
  }

  const resetAll = (clearTheme = true) => {
    isTimerGoing = false
    clearInterval(timerInterval)
    session = []
    pickNextTimer()
    if (clearTheme && browser) {
      localStorage.removeItem('theme')

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
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
    } bg-zinc-50 dark:bg-zinc-800`
  }

  const setSettingValue = (value, setting) => {
    if ([WORK_TIMER, BREAK_TIMER, LONG_BREAK_TIMER].includes(setting)) {
      value *= MINUTE_IN_MS
    }

    settings.update((current) => {
      current[setting] = value
      return current
    })

    if (browser) {
      localStorage[setting] = value
    }

    resetAll(false)
  }

  const onWindowClick = (e) => {
    if (!settingsContainer.contains(e.target) && isSettingsVisible) {
      isSettingsVisible = false
    }
  }

  const scrollToBottom = async (node) => {
    node.scroll({top: node.scrollHeight, behavior: 'smooth'})
  }
</script>

<svelte:window on:click={onWindowClick} />
<div
  class="container relative mx-auto flex min-h-screen min-w-full justify-center {getBackgroundColor(currentTimerName)}">
  <!-- Floating settings button -->
  <div class="absolute top-0 left-0 flex max-h-screen flex-col p-5" bind:this={settingsContainer}>
    <div class="flex gap-2">
      <button class="mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90" on:click={toggleSettings}>
        <SettingsIcon />
      </button>

      <button class="mx-4 my-2 h-12 w-12 self-auto transition-all active:scale-90" on:click={resetAll}>
        <ResetIcon />
      </button>
    </div>

    <!-- Settings block -->
    {#if isSettingsVisible}
      <div in:fade out:fade class="z-10 {getBackgroundColor(currentTimerName)} h-full overflow-auto">
        <Setting
          label="Work time, min"
          settings={[10, 15, 20, 25, 30, 50, 60, 90, 120]}
          onChange={(value) => setSettingValue(Number(value), WORK_TIMER)}
          defaultValue={$settings[WORK_TIMER] / MINUTE_IN_MS}
          isBreak={isBreak(currentTimerName)} />
        <div class="flex flex-wrap justify-between">
          <Setting
            label="Break time, min"
            settings={[5, 10, 15]}
            isBreak={isBreak(currentTimerName)}
            defaultValue={$settings[BREAK_TIMER] / MINUTE_IN_MS}
            onChange={(value) => setSettingValue(Number(value), BREAK_TIMER)} />
          <Setting
            label="Long break time, min"
            settings={[15, 20, 30]}
            isBreak={isBreak(currentTimerName)}
            defaultValue={$settings[LONG_BREAK_TIMER] / MINUTE_IN_MS}
            onChange={(value) => setSettingValue(Number(value), LONG_BREAK_TIMER)} />
        </div>
        <Setting
          label="Session count"
          settings={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          isBreak={isBreak(currentTimerName)}
          defaultValue={$settings[LONG_BREAK_APPEAR]}
          onChange={(value) => setSettingValue(Number(value), LONG_BREAK_APPEAR)} />
      </div>
    {/if}
  </div>

  <!-- Session log block -->
  <div
    class="absolute top-24 m-2 flex h-48 max-h-10 max-w-xl flex-wrap content-center  justify-center gap-2 overflow-auto lg:top-7 lg:max-h-12 landscape:invisible landscape:lg:visible"
    bind:this={sessionLogContainer}>
    {#each session as { timer, task }}
      <div
        title={task}
        class="h-4 {timer === LONG_BREAK_TIMER ? 'w-10' : 'w-4'} rounded-full border-2 border-solid border-current {[
          LONG_BREAK_TIMER,
          BREAK_TIMER,
        ].includes(timer) && 'bg-current'} " />
    {/each}
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
        <div class="{isTimerGoing && 'animate-pulse'} relative top-[-2px] lg:top-[-10px]">:</div>
        <div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
      </div>

      <button
        class="flex h-14 w-14 self-center transition-transform active:scale-90 lg:h-32 lg:w-32"
        on:click={nextSession}>
        <NextIcon />
      </button>
    </div>

    <button
      class="mt-2 h-16 w-16 self-center lg:mt-8 lg:h-20 lg:w-20"
      on:click={isTimerGoing ? pauseTimer : startTimer}>
      <PlayIcon isPlaying={isTimerGoing && !isTimerPaused} />
    </button>
  </div>

  <!-- Task name input -->
  <div class="absolute bottom-0 m-2 mb-7 justify-center gap-2 overflow-auto file:after:odd:backdrop:flex">
    <span
      role="textbox"
      contenteditable
      class="z-10 appearance-none {getBackgroundColor(currentTimerName)} p-3 text-center text-3xl focus:outline-none"
      bind:innerHTML={currentTask} />
  </div>
</div>

<script>
  import {browser} from '$app/env'
  import Setting from '../setting.svelte'
  import {settings} from '../../stores/settings'
  import {fade} from 'svelte/transition'

  import {WORK_TIMER, BREAK_TIMER, LONG_BREAK_TIMER, LONG_BREAK_APPEAR, MINUTE_IN_MS} from '../../constants'
  import {getBackgroundColor} from '../../utils/renders'
  import {currentTimerName, isTimerGoing, timerInterval, session, pickNextTimer} from '../../stores/timers'

  import ResetIcon from '../../icons/reset.icon.svelte'
  import SettingsIcon from '../../icons/settings.icon.svelte'

  import FloatingButtonContainer from '../floatingButtonContainer.svelte'
  import FloatingButton from '../floatingButton.svelte'

  export let isSettingsVisible = false

  let settingsContainer

  const resetAll = (clearTheme = true) => {
    isTimerGoing.set(false)
    clearInterval($timerInterval)
    session.set([])
    if (clearTheme && browser) {
      localStorage.removeItem('theme')

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
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
    pickNextTimer()
  }

  const toggleSettings = () => {
    isSettingsVisible = !isSettingsVisible
  }

  const onWindowClick = (e) => {
    if (!settingsContainer.contains(e.target) && isSettingsVisible) {
      isSettingsVisible = false
    }
  }
</script>

<svelte:window on:click={onWindowClick} />

<!-- Floating settings button -->

<FloatingButtonContainer bind:container={settingsContainer} classList="top-0 left-0">
  <div class="flex gap-2">
    <FloatingButton onClick={toggleSettings} testId="settings-button">
      <SettingsIcon />
    </FloatingButton>
    <FloatingButton onClick={resetAll} testId="reset-button">
      <ResetIcon />
    </FloatingButton>
  </div>

  <!-- Settings block -->
  {#if isSettingsVisible}
    <div
      in:fade
      out:fade
      class="z-10 {getBackgroundColor($currentTimerName)} h-full overflow-auto"
      data-testid="settings-container">
      <Setting
        label="Work time, min"
        settings={[10, 15, 20, 25, 30, 50, 60, 90, 120]}
        onChange={(value) => setSettingValue(Number(value), WORK_TIMER)}
        defaultValue={$settings[WORK_TIMER] / MINUTE_IN_MS} />
      <div class="flex flex-wrap justify-between">
        <Setting
          label="Break time, min"
          settings={[5, 10, 15]}
          defaultValue={$settings[BREAK_TIMER] / MINUTE_IN_MS}
          onChange={(value) => setSettingValue(Number(value), BREAK_TIMER)} />
        <Setting
          label="Long break time, min"
          settings={[15, 20, 30]}
          defaultValue={$settings[LONG_BREAK_TIMER] / MINUTE_IN_MS}
          onChange={(value) => setSettingValue(Number(value), LONG_BREAK_TIMER)} />
      </div>
      <Setting
        label="Session count"
        settings={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        defaultValue={$settings[LONG_BREAK_APPEAR]}
        onChange={(value) => setSettingValue(Number(value), LONG_BREAK_APPEAR)} />
    </div>
  {/if}
</FloatingButtonContainer>

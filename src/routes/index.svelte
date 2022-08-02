<script>
  import {onMount} from 'svelte'

  import Mode from '../components/blocks/mode.svelte'
  import SettingsContainer from '../components/blocks/settingsContainer.svelte'
  import Timer from '../components/blocks/timer.svelte'
  import Sessions from '../components/blocks/sessions.svelte'
  import TaskInput from '../components/blocks/taskInput.svelte'

  let sessionContainer

  onMount(async () => {
    if (!localStorage.settings) {
      localStorage.settings = {}
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
</script>

<svelte:window
  on:load={() => {
    // Hides address bar on mobile
    setTimeout(function () {
      window.scrollTo(0, 1)
    }, 0)
  }} />

<SettingsContainer />
<Sessions bind:sessionContainer />
<Mode />
<Timer bind:sessionContainer />
<TaskInput />

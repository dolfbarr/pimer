<script>
  import {browser} from '$app/env'
  import ModeIcon from '../../icons/mode.icon.svelte'
  import FloatingButton from '../floatingButton.svelte'
  import FloatingButtonContainer from '../floatingButtonContainer.svelte'

  let isDarkMode

  $: isDarkMode = browser && (localStorage.theme === 'dark' || document.documentElement.classList.contains('dark'))

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
</script>

<!-- Floating mode button -->
{#if browser}
  <FloatingButtonContainer classList="top-0 right-0">
    <FloatingButton onClick={toggleDarkMode} testId="mode-button">
      <ModeIcon {isDarkMode} />
    </FloatingButton>
  </FloatingButtonContainer>
{/if}

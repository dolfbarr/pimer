<script>
  import Mode from '../components/blocks/mode.svelte'
  import SettingsContainer from '../components/blocks/settingsContainer.svelte'
  import Timer from '../components/blocks/timer.svelte'
  import Sessions from '../components/blocks/sessions.svelte'
  import TaskInput from '../components/blocks/taskInput.svelte'

  let sessionContainer
</script>

<SettingsContainer />
<Sessions bind:sessionContainer />
<Mode />
<Timer bind:sessionContainer />
<TaskInput />

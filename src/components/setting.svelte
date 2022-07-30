<script>
  import {getBackgroundColor} from '../utils/renders'
  import {isBreak} from '../utils/pimer'
  import {currentTimerName} from '../stores/timers'

  export let label
  export let settings
  export let onChange
  export let defaultValue = ''
  export let value = defaultValue
</script>

<div class="relative m-5 flex rounded border-2 border-solid border-current bg-transparent p-5">
  <span class="absolute z-10 text-sm {getBackgroundColor($currentTimerName)} -top-5 left-4 p-2 font-semibold">
    {label}
  </span>
  <div class="flex flex-wrap gap-2">
    <input
      placeholder="?"
      type="text"
      {value}
      on:input={(event) => onChange(event.currentTarget.value)}
      class="appearance-none {isBreak($currentTimerName)
        ? 'bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800'
        : 'bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800'} border-10 w-10 rounded border-current p-1 text-center" />
    {#each settings as setting}
      <button
        class="w-10 self-auto rounded border-2 border-current p-1 transition-all active:scale-90"
        on:click={() => {
          onChange(setting.toString())
          value = setting.toString()
        }}>{setting.toString()}</button>
    {/each}
  </div>
</div>

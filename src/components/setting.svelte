<script>
  export let label
  export let isBreak
  export let settings
  export let onChange
  export let defaultValue = ''

  export let value = defaultValue
</script>

<div>
  <div class="relative m-5 flex rounded border-2 border-solid border-current bg-transparent p-5">
    <span
      class="absolute z-10 text-sm transition-[background-color] duration-500 {isBreak
        ? 'bg-lime-500 dark:bg-lime-800'
        : 'bg-zinc-50 dark:bg-zinc-800'} -top-5 left-4 p-2 font-semibold">
      {label}
    </span>
    <div class="flex flex-wrap gap-2">
      <input
        placeholder="?"
        type="text"
        {value}
        on:input={(event) => onChange(event.currentTarget.value)}
        class="appearance-none {isBreak
          ? 'bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800'
          : 'bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800'} border-10 w-10 rounded border-current p-1 text-center accent-black" />
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
</div>

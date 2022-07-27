<script>
	export let label
	export let isBreak
	export let settings
</script>

<div>
	<div class="m-5 p-5 flex rounded border-2 bg-transparent border-current border-solid relative">
		<span
			class="absolute text-sm z-10 transition-[background-color] duration-500 {isBreak
				? 'bg-lime-500 dark:bg-lime-800'
				: 'bg-zinc-50 dark:bg-zinc-800'} p-2 -top-5 left-4 font-semibold"
		>
			{label}
		</span>
		<div class="flex gap-2 flex-wrap">
			<input
				placeholder="?"
				type="text"
				class="appearance-none {isBreak
					? 'bg-zing-white dark:bg-zinc-200 text-lime-500 dark:text-lime-800'
					: 'bg-gray-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-800'} accent-black w-10 rounded border-10 border-current p-1 text-center"
			/>
			{#each settings as setting}
				<button class="rounded border-2 border-current p-1 w-10">{setting.toString()}</button>
			{/each}
		</div>
	</div>
</div>

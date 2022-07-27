<script>
	import { browser } from '$app/env'
	import { tweened } from 'svelte/motion'
	import { fade, draw } from 'svelte/transition'
	import Setting from './setting.svelte'

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
		return renderTime(
			Math.floor(
				(totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS) / SECOND_IN_MS
			)
		)
	}

	const timers = {
		[WORK_TIMER]: 0.1 * MINUTE_IN_MS,
		[BREAK_TIMER]: 0.1 * MINUTE_IN_MS,
		[LONG_BREAK_TIMER]: 0.2 * MINUTE_IN_MS
	}
	let session = []
	let isTimerGoing = false
	let isTimerPaused = false
	let isSettingsVisible = false
	let isDarkMode =
		browser &&
		(localStorage.theme === 'dark' || document.documentElement.classList.contains('dark'))

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
</script>

<div
	class="container relative mx-auto min-h-screen min-w-full flex justify-center transition-[background-color] duration-500 {currentTimerName !==
		WORK_TIMER && 'bg-lime-500 dark:bg-lime-800'} {currentTimerName !== WORK_TIMER &&
		'text-white dark:text-zinc-200'}"
>
	<div class="absolute top-0 left-0 p-5 flex flex-col max-h-screen">
		<button
			class="h-12 w-12 active:scale-90 transition-all self-auto mx-4 my-2"
			on:click={toggleSettings}
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-settings h-full w-full stroke-current"
			>
				<circle cx="12" cy="12" r="3" />
				<path
					d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
				/>
			</svg>
		</button>
		{#if isSettingsVisible}
			<div
				in:fade
				out:fade
				class="z-10 transition-[background-color] duration-500 {currentTimerName !== WORK_TIMER
					? 'bg-lime-500 dark:bg-lime-800'
					: 'bg-zinc-50 dark:bg-zinc-800'} overflow-auto h-full"
			>
				<Setting
					label="Work time, min"
					settings={[10, 15, 20, 25, 30, 50, 60, 90, 120]}
					isBreak={currentTimerName !== WORK_TIMER}
				/>
				<div class="flex justify-between flex-wrap">
					<Setting
						label="Break time, min"
						settings={[5, 10, 15]}
						isBreak={currentTimerName !== WORK_TIMER}
					/>
					<Setting
						label="Long break time, min"
						settings={[15, 20, 30]}
						isBreak={currentTimerName !== WORK_TIMER}
					/>
				</div>
				<Setting
					label="Session count"
					settings={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
					isBreak={currentTimerName !== WORK_TIMER}
				/>
			</div>
		{/if}
	</div>
	{#if browser}
		<div class="absolute top-0 right-0 p-5 flex flex-col max-h-screen">
			<button
				class="h-12 w-12 active:scale-90 transition-transform self-auto mx-4 my-2"
				on:click={toggleDarkMode}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-settings h-full w-full stroke-current"
				>
					{#if isDarkMode}
						<circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
							x1="12"
							y1="21"
							x2="12"
							y2="23"
						/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
							x1="18.36"
							y1="18.36"
							x2="19.78"
							y2="19.78"
						/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
							x1="4.22"
							y1="19.78"
							x2="5.64"
							y2="18.36"
						/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					{:else}
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					{/if}
				</svg>
			</button>
		</div>
	{/if}
	<div class="object-center self-center flex flex-col justify-center align-middle">
		<div class="text-6xl lg:text-9xl font-sans flex">
			<button
				class="self-center h-14 w-14 lg:h-32 lg:w-32 {!session.length &&
					'invisible'} transition-transform active:scale-90"
				on:click={prevSession}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-chevron-left h-full w-full stroke-current"
				>
					<polyline points="15 18 9 12 15 6" />
				</svg>
			</button>
			<div class="text-center flex font-mono relative top-[-3px]">
				<div class="flex-1">{getFullMinutes($currentTimer)}</div>
				<div class="{isTimerGoing && 'animate-pulse'} relative top-[-2px]">:</div>
				<div class="flex-1">{getRemainderSeconds($currentTimer)}</div>
			</div>
			<button
				class="self-center flex h-14 w-14 lg:h-32 lg:w-32 transition-transform active:scale-90"
				on:click={nextSession}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-chevron-right h-full w-full stroke-current"
				>
					<polyline points="9 18 15 12 9 6" />
				</svg>
			</button>
		</div>
		<button
			class="self-center mt-8 h-16 w-16 lg:h-20 lg:w-20"
			on:click={isTimerGoing ? pauseTimer : startTimer}
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-chevron-play h-full w-full stroke-current"
			>
				{#if isTimerGoing && !isTimerPaused}
					<rect x="6" y="4" width="4" height="16" in:draw out:fade /><rect
						x="14"
						y="4"
						width="4"
						height="16"
						in:draw
						out:fade
					/>
				{:else}
					<polygon points="5 3 19 12 5 21 5 3" in:draw out:fade />
				{/if}
			</svg>
		</button>
	</div>
</div>

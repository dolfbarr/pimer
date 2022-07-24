<script>
  import play from '/play.svg';
  import pause from '/pause.svg';
  import chevronLeft from '/chevron-left.svg';
  import chevronRight from '/chevron-right.svg';

  import { tweened } from 'svelte/motion';

  const SECOND_IN_MS = 1000
  const MINUTE_IN_MS = 60 * SECOND_IN_MS;

  let workTimer = tweened(2 * MINUTE_IN_MS);
  const breakTimer = 5 * MINUTE_IN_MS;

  let isTimerGoing = false;
  const startTimer = () => {
    isTimerGoing = true;

    setInterval(() => {
      if ($workTimer > 0) {
        $workTimer -= 1000;
      }
    }, SECOND_IN_MS);

    if ($workTimer === 0 && isTimerGoing) {
      isTimerGoing = false
      workTimer = tweened(2 * MINUTE_IN_MS)
    }
  }
</script>

<div class="container mx-auto min-h-screen w-max flex">
    <div class="object-center self-center flex flex-col justify-center align-middle">
      <h1 class="text-9xl font-sans">
        <button class="self-center text-3xl">
          <img src={chevronLeft} alt="chevron left icon" />
        </button>
        <span>{Math.floor($workTimer / MINUTE_IN_MS)}<span class="animate-pulse align-text-top">:</span>{Math.floor(($workTimer - Math.floor($workTimer / MINUTE_IN_MS) * MINUTE_IN_MS)/SECOND_IN_MS)}</span>
        <button class="self-center text-3xl">
          <img src={chevronRight} alt="chevron left icon" />
        </button>
      </h1>
      <button class="self-center text-3xl mt-2" on:click={startTimer}>
        <img src={play} alt="chevron play icon" />
      </button>
    </div>
</div>
<script>
  import play from '/play.svg';
  import pause from '/pause.svg';
  import chevronLeft from '/chevron-left.svg';
  import chevronRight from '/chevron-right.svg';
</script>

<div class="container mx-auto min-h-screen w-max flex">
    <div class="object-center self-center flex flex-col justify-center align-middle">
      <h1 class="text-9xl font-sans">
        <button class="self-center text-3xl">
          <img src={chevronLeft} />
        </button>
        <span>25<span class="animate-pulse align-text-top">:</span>00</span>
        <button class="self-center text-3xl">
          <img src={chevronRight} />
        </button>
      </h1>
      <button class="self-center text-3xl mt-2">
        <img src={play} />
      </button>
    </div>
</div>
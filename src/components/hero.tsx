export const Hero = () => {
  return (
    <section
      id="hero"
      class="flex h-[320px] flex-col items-center justify-center gap-8 md:h-[100vh] md:flex-row"
    >
      <img
        class="w-36"
        src="https://images-ext-1.discordapp.net/external/Xysm_z-Lr5g9vYUCRB0KJTOk59-0XOZ8PcK4UkhEcCU/https/media.tenor.com/GVbLnw73qD8AAAAi/dancing-duck-karlo.gif?width=996&height=996"
        alt=""
      />
      <div id="content" class="flex flex-col justify-center gap-3">
        <h1 class="peer mx-auto border-b-4 after:block after:w-[1.8ch] after:h-2 ease-in-out after:duration-1000	 after:bg-red-600 hover:after:w-full hover:after:transition-all border-white text-4xl font-semibold tracking-[0.5px] transition-all md:mx-0 md:w-max md:text-6xl">
          Hi! <span class="text-red-600">I am Samrid</span>
        </h1>
        <h2 class="text-slate-500 transition-all peer-hover:text-slate-900 sm:text-xl md:text-3xl">
          I am DevOps, Developer and Consultant.
        </h2>
      </div>
    </section>
  );
};

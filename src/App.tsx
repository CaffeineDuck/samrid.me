import "./App.css";
function App() {
  return (
    <>
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
          <h1 class="peer mx-auto border-b-4 border-white text-4xl font-semibold tracking-[0.5px] transition-all hover:border-red-600 md:mx-0 md:w-max md:text-6xl">
            Hi! <span class="text-red-600">I am Samrid</span>
          </h1>
          <h2 class="text-slate-500 transition-all peer-hover:text-slate-900 sm:text-xl md:text-3xl">
            I am DevOps, Developer and Consultant
          </h2>
        </div>
      </section>

      <h2 class="-mt-[80px] mb-[60px] hidden justify-center md:flex items-center">
        <a href="#footer" class="block  font-extrabold text-5xl  p-3">
          &#8964;
        </a>
      </h2>

      <section id="parallax" class="h-72"></section>

      <section class="py-5">
        <h1 class="text-6xl text-center mb-4">Projects</h1>
        <div id="projects" class="flex gap-5 px-3">
          <div class="content hover:shadow-sm border-white hover:border-gray-200 transition-all duration-[240ms] border p-4 flex-1 rounded-md">
            <h2 class="font-extrabold">injkt</h2>
            <p class="text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vero et voluptate laudantium fuga iusto cumque ducimus
              distinctio sit odit maiores rem molestias earum aliquam, quisquam
              enim consectetur, eius placeat.
            </p>
            <div class="btn-group border-t mt-2 pt-2 flex">
              <a href="#google" class="rounded-md border-2 border-red-300 outline-none transition-all hover:border-red-600 hover:bg-red-600 hover:text-white px-3 py-1">Visit</a>
            </div>
          </div>
          <div class="content hover:shadow-sm border-white hover:border-gray-200 transition-all duration-[240ms] border p-4 flex-1 rounded-md">
            <h2 class="font-extrabold">injkt</h2>
            <p class="text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vero et voluptate laudantium fuga iusto cumque ducimus
              distinctio sit odit maiores rem molestias earum aliquam, quisquam
              enim consectetur, eius placeat.
            </p>
            <div class="btn-group border-t mt-2 pt-2 flex">
              <a href="#google" class="rounded-md border-2 border-red-300 outline-none transition-all hover:border-red-600 hover:bg-red-600 hover:text-white px-3 py-1">Visit</a>
            </div>
          </div>
          <div class="content hover:shadow-sm border-white hover:border-gray-200 transition-all duration-[240ms] border p-4 flex-1 rounded-md">
            <h2 class="font-extrabold">injkt</h2>
            <p class="text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vero et voluptate laudantium fuga iusto cumque ducimus
              distinctio sit odit maiores rem molestias earum aliquam, quisquam
              enim consectetur, eius placeat.
            </p>
            <div class="btn-group mt-2 pt-2 flex">
              <a href="#google" class="rounded-md border-2 border-red-300 outline-none transition-all hover:border-red-600 hover:bg-red-600 hover:text-white px-3 py-1">Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

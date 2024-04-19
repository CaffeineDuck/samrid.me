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
        <a href="#projects" class="block  font-extrabold text-5xl  p-3">
          &#8964;
        </a>
      </h2>
      <section id="parallax" class="h-72"></section>
      <section class="pt-16 pb-5 md:h-[100vh]" id="projects">
        <h1 class="tracking-[0.5px] text-3xl md:text-5xl text-center mb-4 text-black font-bold">
          My <span class="text-red-600">Open-Source Work</span>
        </h1>
        <article class="flex flex-col md:flex-row gap-5 p-10 items-center">
          <div class="banner-image border h-[300px] rounded-lg p-10 flex-1 hidden md:flex flex-col justify-between">
            <div class="top-content relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                alt=""
                class="w-16 absolute right-0"
              />
              <h1 class="text-3xl font-bold">CaffeineDuck/injkt</h1>
              <h2 class="text-slate-600 pt-3">
                Dependency Injection Library in Python
              </h2>
            </div>
            <div class="bottom-content flex gap-2 flex-wrap text-sm">
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                1 Contributor
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                30 Issues
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                10 Stars
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                0 Forks
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl mb-4 font-semibold tracking-[0.5px]">
              Injector
            </h3>

            <p class="text-justify text-slate-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              laudantium veniam tempore enim soluta quibusdam nostrum, aliquid
              perspiciatis corporis consequuntur!
            </p>

            <div class="btn-group mt-5">
              <a
                class="inline-flex justify-center items-center py-2 px-4 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                href="https://github.com/CaffeineDuck"
              >
                <svg
                  class="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                &nbsp; &nbsp; Github Repository
              </a>
            </div>
          </div>
        </article>
        <article class="flex flex-col md:flex-row-reverse gap-5 p-10 items-center">
          <div class="banner-image border h-[300px] rounded-lg p-10 flex-1 hidden md:flex flex-col justify-between">
            <div class="top-content relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                alt=""
                class="w-16 absolute right-0"
              />
              <h1 class="text-3xl font-bold">CaffeineDuck/injkt</h1>
              <h2 class="text-slate-600 pt-3">
                Dependency Injection Library in Python
              </h2>
            </div>
            <div class="bottom-content flex gap-2 flex-wrap text-sm">
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                1 Contributor
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                30 Issues
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                10 Stars
              </div>
              <div class="border border-slate-300 px-4 py-2 rounded-lg">
                0 Forks
              </div>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl mb-4 font-semibold tracking-[0.5px]">
              Injector
            </h3>

            <p class="text-justify text-slate-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              laudantium veniam tempore enim soluta quibusdam nostrum, aliquid
              perspiciatis corporis consequuntur!
            </p>

            <div class="btn-group mt-5">
              <a
                class="inline-flex justify-center items-center py-2 px-4 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                href="https://github.com/CaffeineDuck"
              >
                <svg
                  class="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                &nbsp; &nbsp; Github Repository
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;

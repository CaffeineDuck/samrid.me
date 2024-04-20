export const Blog = () => {
  return (
    <article>
      <a href="https://blog.samrid.me">
        <div class="flex max-w-xl flex-col items-start transition-all rounded-lg justify-between border-slate-200 border p-3">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">
              Mar 16, 2020
            </time>
            <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              Python
            </span>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                Data Race In Python Despite GIL?
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Data Race While The Definite Definition Of Data Race Differs With
              The Concurrency Model And The Language, It's Safe To Assume That
              Data Race Is When 2...
            </p>
            <ul class="text-sm mt-3 leading-4 flex flex-row text-slate-500">
              <li class="mr-2">#python3</li>
              <li class="mr-2">#GIL</li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
};

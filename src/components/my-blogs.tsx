import { Blog } from "./blog";

export const MyBlogs = () => {
  return (
    <section class="md:h-[100vh]" id="blogs">
      <h1 class="tracking-[0.5px] text-3xl md:text-5xl text-center mb-4 text-black font-bold">
        My <span class="text-red-600">Blogs</span>
      </h1>
      <div class="pt-10 pb-5 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  );
};

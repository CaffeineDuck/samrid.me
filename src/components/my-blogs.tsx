import { Blog } from "./blog";
import { Button } from "./button";

export const MyBlogs = () => {
  return (
    <div class="relative">
      
      <section class="md:h-[100vh] mx-3 relative" id="blogs">
        <h1 class="tracking-[0.5px] text-3xl md:text-5xl text-center mb-4 text-black font-bold">
          My <span class="text-red-600">Blogs</span>
        </h1>
        <div class="px-10 pt-10 pb-5 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <div class="mt-12 flex md:justify-end mx-auto justify-center">
          <Button link="https://github.com/caffeineduck" cta="Read More" />
        </div>
      </section>
    </div>
  );
};

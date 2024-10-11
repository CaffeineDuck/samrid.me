import { Blog } from "./blog";
import { Button } from "./button";
import { BlogProps } from './blog.tsx'

interface MyBlogsProps {
  blogs: BlogProps[];
}

export const MyBlogs = (props: MyBlogsProps) => {
  return (
    <div className="relative py-10">
      <section className="mx-3 relative" id="blogs">
        <h1 className="tracking-[0.5px] text-3xl md:text-5xl text-center mb-10 text-black font-bold">
          My <span className="text-red-600">Blogs</span>
        </h1>
        <div className="px-4 md:px-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {props.blogs.slice(0, 6).map((blogProp, index) => (
            <Blog key={index} {...blogProp} />
          ))}
        </div>
        <div className="mt-16 flex justify-center md:justify-end px-4 md:px-10">
          <Button link="https://blog.samrid.me" cta="Read More" />
        </div>
      </section>
    </div>
  );
};

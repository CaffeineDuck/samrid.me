import { Button } from "./button";
import { Project, ProjectProps } from "./project";

export type MyWorkProps = {
  projects: ProjectProps[];
};

export const MyWork = ({ projects }: MyWorkProps) => {
  return (
    <section class="pt-16 pb-5 md:h-[100vh]" id="projects">
      <h1 class="tracking-[0.5px] text-3xl md:text-5xl text-center mb-4 text-black font-bold">
        My <span class="text-primary-600">Open-Source Work</span>
      </h1>
      <article class="p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto md:px-24 w-full">
          {projects.slice(0, 4).map((project) => (
            <Project {...project} />
          ))}
        </div>
        <div class="mt-12 flex md:justify-end mx-auto justify-center">
          <Button link="https://github.com/caffeineduck" cta="More Projects" />
        </div>
      </article>
    </section>
  );
};

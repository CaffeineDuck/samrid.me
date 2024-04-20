import { Button } from "./button";
import { Project, ProjectProps } from "./project";

export type MyWorkProps = {
  projects: ProjectProps[];
};

export const MyWork = ({ projects }: MyWorkProps) => {
  return (
    <section class="pt-16 pb-5 md:h-[100vh]" id="projects">
      <h1 class="tracking-[0.5px] text-3xl md:text-5xl text-center mb-4 text-black font-bold">
        My <span class="text-red-600">Open-Source Work</span>
      </h1>
      <article class="p-10">
        <div class="flex flex-col gap-5">
          {projects.slice(0, 4).map(
            (project, index) =>
              index % 2 === 0 && (
                <div class="flex flex-col md:flex-row gap-5">
                  <Project {...project} />
                  {projects[index + 1] && <Project {...projects[index + 1]} />}
                </div>
              )
          )}
        </div>
        <div class="mt-12 flex md:justify-end mx-auto justify-center">
        <Button link="https://github.com/caffeineduck" cta="More Projects"/>
        </div>
      </article>
    </section>
  );
};

import pythonLogo from "../assets/python.png";
import rustLogo from "../assets/rust.png";
import shellLogo from "../assets/shell.png";
import { ArrowLink } from "./arrow-link";

const PROJECT_IMAGES = {
  python: pythonLogo,
  rust: rustLogo,
  shell: shellLogo,
};

export type ProjectProps = {
  repositoryName: string;
  repositoryDesc: string;
  stars: number;
  contributors: number;
  forks: number;
  projectType: keyof typeof PROJECT_IMAGES;
};

export const Project = (props: ProjectProps) => {
  const githubProfileUrl =  `https://github.com/CaffeineDuck`
  const githubRepoUrl = `${githubProfileUrl}/${props.repositoryName}`

  return (
    <div class="banner-image max-w-4xl md:min-w-3xl border transition-all hover:shadow-md min-h-[220px] md:min-h-[280px]  rounded-lg p-5 md:p-10 flex-1 flex flex-col justify-between">
      <div class="top-content relative">
        <img
          src={PROJECT_IMAGES[props.projectType]}
          alt=""
          class="w-16 hidden xl:block absolute right-0"
        />
        <h1 class="text-xl lg:text-3xl">
          <span>
            <a href={githubProfileUrl} target="_blank">
              CaffeineDuck/
            </a>
          </span>
          <span class="font-bold">
            <a
              href={githubRepoUrl}
              target="_blank"
            >
              {props.repositoryName}
            </a>
          </span>
        </h1>
        <h2 class="text-slate-600 pt-3">{props.repositoryDesc}</h2>
      </div>
      <div class="bottom-content flex gap-2 flex-wrap text-sm">
        <div class="border border-slate-300 px-4 py-2 rounded-lg">
          {props.contributors} Contributor
        </div>
        <div class="border border-slate-300 px-4 py-2 rounded-lg">
          {props.stars} Stars
        </div>
        <div class="border border-slate-300 px-4 py-2 rounded-lg">
          {props.forks} Forks
        </div>

        <ArrowLink  href={githubRepoUrl} label="Goto Repository"/>
      </div>
    </div>
  );
};

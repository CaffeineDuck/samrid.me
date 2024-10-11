import { ProjectProps } from "./components/project";
import { Parallax } from "./components/parallax";
import { Hero } from "./components/hero";
import { Chevrolet } from "./components/chevrolet";
import { MyWork } from "./components/my-work";
import { MyBlogs } from "./components/my-blogs";
import { Footer } from "./components/footer";
import { BlogProps } from "./components/blog";

import parallaxImage from "./assets/layer.svg";

const projects: ProjectProps[] = [
  {
    repositoryName: "injkt",
    repositoryDesc: "Simple dependency injection library made in Python.",
    projectType: "python",
    contributors: 1,
    forks: 2,
    stars: 10,
  },
  {
    repositoryName: "jBREAD",
    repositoryDesc: "Just an interpreter.",
    projectType: "rust",
    contributors: 1,
    forks: 2,
    stars: 10,
  },
  {
    repositoryName: "BalderDash",
    repositoryDesc: "Bathe your code in gangajaal.",
    projectType: "shell",
    contributors: 1,
    forks: 2,
    stars: 10,
  },
  {
    repositoryName: "nepse-api",
    repositoryDesc: " NEPSE API wrapper written in python.",
    projectType: "python",
    contributors: 1,
    forks: 2,
    stars: 10,
  },
];

const blogPosts: BlogProps[] = [
  {
    date: new Date("2023-04-07"),
    title: "Data Race In Python Despite GIL?",
    description: "Data Race While The Definite Definition Of Data Race Differs With The Concurrency Model And The Language, It's Safe To Assume That Data Race Is When 2...",
    link: "https://blog.samrid.me/data-race-in-python-despite-gil",
    tags: ["Python", "Concurrency", "GIL", "Data Race"]
  },
  {
    date: new Date("2022-01-19"),
    title: "How To Convert The Type Of Function's Arguments In Python At Runtime?",
    description: "Converting The Type According To Type Hints In Python · Introduction Most Of Us Have Run Into A Situation Where We Have To Change The Type Of A Parameter...",
    link: "https://blog.samrid.me/how-to-convert-the-type-of-functions-arguments-in-python-at-runtime",
    tags: ["Python", "Type Conversion", "Runtime", "Function Arguments"]
  },
  {
    date: new Date("2022-01-18"),
    title: "Handling The Fear Of Asynchronous File Handling In Python",
    description: "File Handling In Python With Aiofiles And Asyncio · Introduction Let's Face It, The Clock Speed Of Our CPU Doesn't Really Affect The Performance Of...",
    link: "https://blog.samrid.me/handling-the-fear-of-asynchronous-file-handling-in-python",
    tags: ["Python", "Asynchronous", "File Handling", "aiofiles", "asyncio"]
  },
  {
    date: new Date("2022-01-17"),
    title: "How To Save Python Objects In Redis?",
    description: "Saving Complex Python Objects In Redis With Aioredis And Pickle · Introduction In This Article, You'll Learn About Pickle, Redis, Why You Would Want To...",
    link: "https://blog.samrid.me/how-to-save-python-objects-in-redis",
    tags: ["Python", "Redis", "Pickle", "aioredis", "Object Serialization"]
  },
  {
    date: new Date("2021-06-14"),
    title: "Creating A Python Module For Nepal Stock Exchange API",
    description: "Bitter-Sweet Experience Of Creating An Async PyPi Module · Introduction Nepal Stock Exchange Has Been Gaining A Lot Of Traction Lately. I Was Interested...",
    link: "https://blog.samrid.me/creating-a-python-module-for-nepal-stock-exchange-api",
    tags: ["Python", "API", "Nepal Stock Exchange", "PyPi", "Async"]
  }
];

function App() {
  return (
    <>
      <Hero />
      <Chevrolet href="#projects" />

      <Parallax backgroundUrl={parallaxImage} />
      <MyWork projects={projects} />

      <div class="h-56 md:h-48 relative flex justify-center items-center mt-4 mb-16 from-primary-500 to-primary-300 bg-gradient-to-br ">
        <svg
          class="absolute top-6 start-8 size-16 opacity-80 text-gray-100 "
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          ></path>
        </svg>
        <h1 class="text-center text-white text-xl md:text-3xl my-1 font-extralight tracking-wider uppercase">
          I like to play with <span class="font-bold">special sand</span>{" "}
          capable of doing{" "}
          <span class="underline underline-offset-8">maths</span>
        </h1>
      </div>
      <MyBlogs blogs={blogPosts} />
      <Footer />
    </>
  );
}

export default App;

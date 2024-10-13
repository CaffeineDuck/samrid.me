import { ProjectProps } from "./components/project";
import { Parallax } from "./components/parallax";
import { Hero } from "./components/hero";
import { Chevrolet } from "./components/chevrolet";
import { MyWork } from "./components/my-work";
import { MyBlogs } from "./components/my-blogs";
import { Footer } from "./components/footer";
import { BlogProps } from "./components/blog";

const parallaxImage = '/layer.svg';

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

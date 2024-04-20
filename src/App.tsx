import { ProjectProps } from "./components/project";
import pythonImage from "./assets/python.png";
import rustImage from "./assets/rust.png";
import bashImage from './assets/shell.png'
import { Parallax } from "./components/parallax";
import { Hero } from "./components/hero";
import { Chevrolet } from "./components/chevrolet";
import { MyWork } from "./components/my-work";
import { MyBlogs } from "./components/my-blogs";

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

function App() {
  return (
    <>
      <Hero />
      <Chevrolet href="#projects" />

      <Parallax backgroundUrl="https://media.discordapp.net/attachments/904748872423841803/1230948388774740041/9892505_4278222.png?ex=66240985&is=6622b805&hm=9da4361f6b4c1429732c55073cc7dfe1db5cb2d091b9d4443dd83803ae059b33&=&format=webp&quality=lossless&width=2150&height=1228" />
      <MyWork projects={projects} />
      <div class="h-64 relative flex justify-center items-center my-4 from-red-600 to-yellow-200 bg-gradient-to-br ">
        <h1 class="text-center text-4xl my-1 font-extrabold tracking-wider">
          Tech Stack <span class="text-white">I Work With</span>{" "}
        </h1>
        <img src={pythonImage} alt="" class="w-16 absolute top-16 right-44 opacity-80 grayscale" />
        <img src={rustImage} alt="" class="w-16 absolute right-96 bottom-44 opacity-80 grayscale" />
        <img src={bashImage} alt="" class="w-16 absolute left-2 top-2 opacity-80 grayscale" />
        <img src={pythonImage} alt="" class="w-16 absolute left-44 bottom-16 opacity-80 grayscale" />
        <img src={rustImage} alt="" class="w-16 absolute left-96 top-44 opacity-80 grayscale" />
        <img src={bashImage} alt="" class="w-16 absolute right-8 bottom-2 opacity-80 grayscale" />
      </div>
      <MyBlogs />
      <Parallax backgroundUrl="https://media.discordapp.net/attachments/904748872423841803/1230992271529476227/image.png?ex=663555e4&is=6622e0e4&hm=11b8a7876a110f83fcb2c10d50ac97f2728eed6f3e0c1029d31334dac57d7019&=&format=webp&quality=lossless&width=2268&height=556" />
      <footer id="footer">
        <h3 class="text-center text-xl py-4">&copy; Samrid Pandit - 2024</h3>
      </footer>
    </>
  );
}

export default App;

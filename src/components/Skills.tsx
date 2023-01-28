import Image from "next/image";
import React from "react";
import { render } from "react-dom";
import {
  DiJsBadge,
  DiRasberryPi,
  DiDocker,
  DiAndroid,
  DiDjango,
  DiGithubBadge,
  DiJava,
  DiLinux,
  DiReact,
  DiRust,
  DiVisualstudio,
  DiJavascript,
} from "react-icons/di";

interface ISkill {
  name: string;
  imageFileName: string;
}

const skillsData: ISkill[] = [
  {
    name: "JavaScript",
    imageFileName: "test.jpg",
  },
  {
    name: "Java",
    imageFileName: "java.png",
  },
  {
    name: "Docker",
    imageFileName: "docker.png",
  },
  {
    name: "React",
    imageFileName: "react.png",
  },
  {
    name: "Git",
    imageFileName: "github.png",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center py-12">
        <p className="text-xl uppercase tracking-widest text-primary">Skills</p>
        <h2 className="py-1">What I can do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiAndroid className="text-[80px] text-green-700" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Android</h3>
                <p className="mt-3 text-center text-sm dark:text-gray-400">
                  I can develop a simple App
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiJsBadge className="text-[80px] text-yellow-500" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
                <p className="mt-3 text-center text-sm dark:text-gray-400">
                  Did some small React projects
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiJava className="text-[80px] text-gray-600" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
                <p className="mt-3 text-center text-sm dark:text-gray-400">
                  Really confident with it
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiGithubBadge className="text-[80px] text-black" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
                <p className="mt-3 text-center text-sm dark:text-gray-400">
                  I love to have a good workflow!
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiDocker className="text-[80px] text-blue-700" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Docker</h3>
                <p className="mt-3 text-center text-sm dark:text-gray-400">
                  Used it in a lot of projects already
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

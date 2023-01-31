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
  DiPython,
} from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import CollapseBox from "./CollapseBox";
import SkillItem from "./SkillItem";

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
        <p>Hover about the items to learn more.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SkillItem
            title="Python"
            details="I can do full-stack web-apps and REST-API's with Django. Also did many Data-Science projects during my study"
            icon={
              <DiPython className="rounded-full text-[68px] text-[#FFD43B] dark:bg-gray-700" />
            }
          />
          <SkillItem
            title="Java"
            details="I did a lot of projects during my study and feel really confident with it"
            icon={
              <DiJava className="rounded-full p-1 text-[68px] text-gray-500 dark:bg-gray-300" />
            }
          />
          <SkillItem
            title="JavaScript"
            details="I did some small React projects like this website."
            icon={
              <DiJsBadge className="bg-gray-700 text-[68px] text-[#F0DB4F]" />
            }
          />
          <SkillItem
            title="Android"
            details="I can develop a simple App and know about the core concepts."
            icon={
              <DiAndroid
                className="text-[68px] text-[#78C257]"
                enableBackground=""
              />
            }
          />
          <SkillItem
            title="Git"
            details="I make good commit messages and love to have a good workflow! :)"
            icon={
              <AiFillGithub className="rounded-full text-[68px] text-[#333] dark:bg-white" />
            }
          />
          <SkillItem
            title="Docker"
            details="Used it in a lot of projects already and also feel more save now with networking and docker-compose"
            icon={
              <DiDocker className="rounded-full text-[68px] text-[#0db7ed] dark:bg-gray-100" />
            }
          />
          <SkillItem
            title="Linux"
            details="I'm good at the command-line and with shell-scripts."
            icon={
              <DiLinux className="rounded-full p-1 text-[68px] text-gray-700 dark:bg-gray-100" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

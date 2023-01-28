import Image from "next/image";
import React from "react";
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
} from "react-icons/di";

const skillsData = [
  ["JavaScript", "js.png"],
  ["Java", "java.png"],
  ["Rust", "rust.png"],
  ["React", "react.png"],
  ["Git", "github.png"],
];

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="text-xl uppercase tracking-widest text-primary">Skills</p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiJsBadge className="text-5xl text-yellow-500" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiJava className="text-5xl text-gray-600" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiGithubBadge className="text-5xl text-black" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <DiDocker className="text-5xl text-blue-700" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

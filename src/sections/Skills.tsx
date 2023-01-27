import React from "react";
import Image from "next/image";
import openSource from "public/images/open-source.jpeg";

export default function Skills() {
  return (
    <section id="skills" className="mt-20">
      <div>
        <h3 className="py-1 text-3xl">My Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          From my professional background as an Electronic Engineer, I have 10
          years of experience with{" "}
          <span className="text-teal-500">Embedded Systems</span>.
          <br />I learned a lot about{" "}
          <span className="text-teal-500">Java</span> during my study.
        </p>
        <p className="text-md max-w-xl py-2 leading-8 text-gray-800 dark:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          laborum, non eos cupiditate ullam minus consequatur quia magni natus
          architecto?
        </p>
      </div>
      <div className="gap-10 lg:flex">
        <div className="my-8 w-72 rounded-xl bg-gray-300/50 p-5 text-center shadow-lg">
          <Image
            src={openSource}
            width={200}
            height={200}
            alt="Open Source"
            className="mx-auto rounded-md"
          />
          <h3 className="pd-2 pt-8 text-lg font-medium">
            Open-Source Software
          </h3>
          <p className="mx-auto py-2">
            Creating free and open source software (FOSS), usable for everyone!
          </p>
          <h4 className="pt-4 font-medium text-teal-600">Tools I use</h4>
          <ul>
            <li className="text-gray-800">VisualStudio Code</li>
            <li className="text-gray-800">IntelliJ IDEA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

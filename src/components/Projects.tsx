import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import test from "@assets/test.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-primary">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <ProjectItem
            title="My Website"
            description="I developed this website you see here with Next.js and TypeScript"
            backgroundImg={test}
            projectUrl="/project1"
          />
          <ProjectItem
            title="BTC Point of Sale"
            description="SmartHome meets Bitcoin"
            backgroundImg={test}
            projectUrl="/project1"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

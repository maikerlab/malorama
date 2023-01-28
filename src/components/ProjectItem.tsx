import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProjectProps {
  title: string;
  description: string;
  projectUrl: string;
  backgroundImg: StaticImageData;
}

const ProjectItem = ({
  title,
  description,
  backgroundImg,
  projectUrl,
}: IProjectProps) => {
  return (
    <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-primary to-accent p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        width={1000}
        height={800}
        alt="/"
      />
      <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h3 className="text-center text-2xl tracking-wider text-white">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{description}</p>
        <Link href={projectUrl}>
          <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

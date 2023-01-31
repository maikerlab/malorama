import React from "react";
import test from "@assets/test.jpg";
import Image from "next/image";
import Head from "next/head";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const project1 = () => {
  return (
    <>
      <Head>
        <title>Test Project | malorama</title>
      </Head>
      <div className="w-full">
        <div className="relative h-[30vh] w-screen lg:h-[40vh]">
          <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-black/50 lg:h-[40vh]" />
          <Image
            src={test}
            alt="/"
            className="z-1 absolute"
            fill={true}
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
            <h2 className="py-2">My Webite</h2>
            <h3 className="">Next.js / Tailwind CSS</h3>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
          <div className="col-span-4">
            <p>Project</p>
            <h2 className="mb-4">Overview</h2>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              id eligendi illo veritatis tempore voluptatem labore officia
              expedita vitae laborum.
            </p>
            <button className="mt-4 mr-8 px-8 py-2">Demo</button>
            <button className="mt-4 px-8 py-2">Code</button>
          </div>
          <div className="col-span-4 rounded-xl bg-surface p-4 shadow-xl shadow-shades md:col-span-1">
            <div className="p-2">
              <p className="pb-2 text-center font-bold">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="flex items-center py-2 text-gray-600 dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="flex items-center py-2 text-gray-600 dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                </p>
                <p className="flex items-center py-2 text-gray-600 dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> JavaScript
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="cursor-pointer underline">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default project1;

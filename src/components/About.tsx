import React from "react";
import Image from "next/image";
import maik from "@assets/maik.jpg";
import Timeline from "./Timeline";

const About = () => {
  return (
    <>
      <div id="about" className="flex w-full flex-col items-start p-2 py-12">
        <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 pb-10 md:grid">
          <div className="col-span-2">
            <p className="text-xl uppercase tracking-widest text-primary ">
              About
            </p>
            <h2 className="py-4">Who I am</h2>
            <p className="py-2 text-gray-600">// My story so far...</p>
            <p className="py-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
              eaque eligendi voluptatibus ea vel, suscipit a corporis deleniti
              expedita esse, culpa reprehenderit inventore voluptatem quos,
              assumenda unde molestiae voluptates ducimus. Quas sunt omnis,
              voluptas doloremque alias totam suscipit molestiae quod reiciendis
              voluptatum velit illo deserunt assumenda voluptatem dicta maiores.
            </p>
            <p className="cursor-pointer py-2 text-gray-600 underline">
              Check out some of my latest projects!
            </p>
          </div>
          <div className="m-auto flex h-auto w-80 items-center justify-center rounded-xl bg-gunmetal/80 p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
            <Image
              src={maik}
              width={800}
              height={800}
              alt="Maik"
              className="rounded-xl"
            />
          </div>
          <div className="col-span-3 mt-12">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

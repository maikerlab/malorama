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
            <p className="py-2 italic text-gray-600">
              {"//"} A short introduction...
            </p>
            <p className="py-2 text-gray-600">
              Since I was a child, I always was interested in technology,
              especially everything that has to do with electronics and makes
              our life &quot;smarter&quot;. In 2007, I started an apprenticeship
              as an Electronics Technician. During my apprenticeship and in the
              two full-time jobs I had after that, I was working for companies,
              which were operating in the field of measuring and sensor
              technology. Due to the rise and the huge progress of digital
              technologies, I became more and more interested in Software
              Development and so I decided that I want to work in this area and
              take an active part in building our digital future. Since 2020, I
              am studying &quot;Computer Science for Technical Systems&quot; in
              Hamburg, Germany.
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

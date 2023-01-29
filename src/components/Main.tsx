import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="h-screen w-full py-8 text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="uppercase tracking-widest text-gray-600">
            - Maik Lorenz -
          </p>
          <h1 className="cursor-default py-4 text-gray-700">
            Hi, I'm <span className="text-primary">Maik</span>.
          </h1>
          <h2 className="cursor-default py-2 text-gray-700">
            A Software Developer in the making.
          </h2>
          <p className="m-auto max-w-[70%] py-4 text-gray-600">
            I'm excited to share my content with you here. I want to introduce
            myself and show what I can already do as a becoming Junior Software
            Developer. I also want to blog sometimes about projects I did, what
            I have learned or share my thoughts about a specific topic.
          </p>
          <button className="mt-4 p-4 text-gray-100 duration-300 hover:scale-105">
            <Link href="#contact">Contact me!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

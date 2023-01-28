import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-gray-600">
            Lets build something together!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-primary">Maik</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Software Developer in the making.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae asperiores dolore libero debitis. Non iure et
            accusantium reiciendis necessitatibus ex eius error, dicta
            doloremque. Eos, sequi. Esse voluptate dolores tenetur accusantium
            explicabo quod velit rerum neque beatae facere ex, nihil alias
            deleniti molestiae doloribus excepturi corrupti praesentium soluta.
            Mollitia, in!
          </p>
          <div className="flex items-center justify-between max-w-[440px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

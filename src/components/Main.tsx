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
            Lets build something together!
          </p>
          <h1 className="cursor-default py-4 text-gray-700">
            Hi, I'm <span className="text-primary">Maik</span>.
          </h1>
          <h2 className="cursor-default py-2 text-gray-700">
            A Software Developer in the making.
          </h2>
          <p className="m-auto max-w-[70%] py-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae asperiores dolore libero debitis. Non iure et
            accusantium reiciendis necessitatibus ex eius error, dicta
            doloremque. Eos, sequi. Esse voluptate dolores tenetur accusantium
            explicabo quod velit rerum neque beatae facere ex, nihil alias
            deleniti molestiae doloribus excepturi corrupti praesentium soluta.
            Mollitia, in!
          </p>
          <div className="m-auto flex max-w-[440px] items-center justify-between py-4">
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <Link href="https://github.com/maikerlab" target="_blank">
                <FaGithub size={30} color="#333" />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <Link
                href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/"
                target="_blank"
              >
                <FaLinkedin size={30} color="#0e76a8" />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <Link href="https://twitter.com/malorama" target="_blank">
                <FaTwitter size={30} color="#1DA1F2" />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <Link href="mailto:maik.lorenz@protonmail.com">
                <AiOutlineMail size={30} />
              </Link>
            </div>
            {/*             <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <Link href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/">
                <BsFillPersonLinesFill size={30} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

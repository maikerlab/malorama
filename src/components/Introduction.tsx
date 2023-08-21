import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const headers = [
  "A Software Developer",
  "A Computer Science Student",
  "An Electrical Engineer",
];

export default function Introduction() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="introduction" className="h-screen w-full py-8 text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="uppercase tracking-widest">- Maik Lorenz -</p>
          <h1 className="cursor-default py-4">
            Hi, I&apos;m <span className="text-primary">Maik</span>.
          </h1>
          <h2 className="cursor-default py-2">{headers[index]}.</h2>
          <div className="mx-auto w-full py-4 text-start leading-8">
            <ul className="mt-2 mb-3 w-full">
              <li>
                <span className="w-fill flex rounded-lg pl-3">
                  <AiOutlineArrowRight
                    className="justify-center text-primary"
                    size={20}
                  />
                  <span className="ml-2">
                    Check out my{" "}
                    <Link
                      href="#blog"
                      className="font-semibold text-primary"
                      scroll={false}
                    >
                      Blog
                    </Link>
                    , where I share my learnings, experiences and thoughts about
                    interesting topics.
                  </span>
                </span>
              </li>
              <li>
                <span className="w-fill flex rounded-lg pl-3">
                  <AiOutlineArrowRight
                    className="justify-center text-primary"
                    size={20}
                  />
                  <span className="ml-2">
                    Curious which projects I did or looking for some
                    inspiration? Check out the{" "}
                    <Link
                      href="#projects"
                      className="font-semibold text-primary"
                      scroll={false}
                    >
                      Projects
                    </Link>{" "}
                    section.
                  </span>
                </span>
              </li>
              <li>
                <span className="w-fill flex rounded-lg pl-3">
                  <AiOutlineArrowRight
                    className="justify-center text-primary"
                    size={20}
                  />
                  <span className="ml-2">
                    &quot;Wait... who is Maik?&quot; - find out more about me{" "}
                    <Link
                      href="#about"
                      className="font-semibold text-primary"
                      scroll={false}
                    >
                      here
                    </Link>
                    .
                  </span>
                </span>
              </li>
              <li>
                <span className="w-fill flex rounded-lg pl-3">
                  <AiOutlineArrowRight
                    className="justify-center text-primary"
                    size={20}
                  />
                  <span className="ml-2">
                    I&apos;m always happy to receive some Feedback or answer
                    your questions. You can find my contact info{" "}
                    <Link
                      href="#contact"
                      className="font-semibold text-primary"
                      scroll={false}
                    >
                      here
                    </Link>
                    .
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-evenly py-4">
            <Link
              href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/"
              target="_blank"
            >
              <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                {/* color="#0e76a8" */}
                <FaLinkedin size={24} />
              </div>
            </Link>
            <Link href="https://github.com/maikerlab" target="_blank">
              <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                {/* color="#333" */}
                <FaGithub size={24} />
              </div>
            </Link>
            <Link href="mailto:maik.lorenz@protonmail.com">
              <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                <AiOutlineMail size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const headers = [
  "A Software Developer",
  "A Computer Science Student",
  "An Electrical Engineer",
];

export default function Main() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="main" className="h-screen w-full py-8 text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="uppercase tracking-widest">- Maik Lorenz -</p>
          <h1 className="cursor-default py-4">
            Hi, I&apos;m <span className="text-primary">Maik</span>.
          </h1>
          <h2 className="cursor-default py-2">{headers[index]}.</h2>
          <p className="mx-auto w-full py-4 text-start leading-8">
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
          </p>
          <button className="btn mt-4 p-4">
            <Link href="#contact">Contact me!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

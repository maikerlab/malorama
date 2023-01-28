import React, { useState } from "react";
import Image from "next/image";
import maik from "public/images/maik.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "./ThemeSwitch";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="fixed top-0 left-0 flex p-4 text-lg">
        <button onClick={showSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            className={`text-xl ${sidebar ? "-left-full" : "left-0"}`}
          />
        </button>
        <Link href="/">
          <h1 className="text-md pl-10 font-robotoMono font-bold lg:text-xl">
            malorama
          </h1>
        </Link>
      </div>
      <nav
        id="sidenav"
        className={`fixed top-0 z-10 bg-white transition-all duration-300 dark:bg-raisin-black ${
          sidebar ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex h-screen w-screen flex-col overflow-hidden rounded-r-3xl text-center shadow-md dark:border-4 dark:border-gray-400 sm:w-56">
          <button onClick={showSidebar} className="absolute top-0 left-0">
            <FontAwesomeIcon icon={faClose} className="p-4 text-xl" />
          </button>
          <div className="relative mx-auto mt-5 h-32 w-32 items-center justify-center overflow-hidden rounded-full">
            <Image
              src={maik}
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Maik"
            />
          </div>
          <h1 className="text-xl uppercase text-blue dark:text-green-lizard">
            Maik Lorenz
          </h1>
          <ul className="flex flex-col p-1">
            {[
              ["About", "/#about"],
              ["Blog", "/blog"],
              ["Projects", "/projects"],
            ].map(([title, url], index) => (
              <li key={index}>
                <Link
                  href={url}
                  onClick={showSidebar}
                  className="flex h-12 transform flex-row items-center rounded-lg text-gray-400 transition-all duration-200 ease-in hover:bg-blue hover:text-white active:bg-blue dark:hover:bg-green-lizard  dark:hover:text-black"
                >
                  <span className="light:text-gray-400 inline-flex h-12 w-12 items-center justify-center text-lg">
                    <FontAwesomeIcon icon={faCoffee} />
                  </span>
                  <span className="text-sm font-medium">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pt-8">
            <ThemeSwitch withLabel={true} />
          </div>
        </div>
      </nav>
    </>
  );
}

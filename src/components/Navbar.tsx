import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const navItems = [
  ["Home", "/#main"],
  ["Blog", "/#blog"],
  ["Projects", "/#projects"],
  ["About", "/#about"],
  ["Skills", "/#skills"],
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("bg-background");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.search("/projects") === 0) {
      setNavBg("bg-transparent");
    } else {
      setNavBg("bg-background");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed ${
        shadow ? "shadow-xl shadow-shades" : ""
      } fixed z-[100] w-full ${navBg} py-5 px-4`}
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <div className="flex gap-8">
          <h1
            className={`my-auto font-monospace text-3xl text-primary lg:text-4xl`}
          >
            <Link href="/">malorama</Link>
          </h1>
          <ThemeSwitch />
        </div>
        <div>
          <ul className={`hidden text-skin-on-background md:flex`}>
            {navItems.map(([title, url], idx) => (
              <li
                key={idx}
                className="text-md border-b-edges ml-10 uppercase hover:border-b"
              >
                <Link
                  href={url}
                  scroll={false}
                  className="hover:border-b-2 hover:border-primary"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Side Navigation */}
      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={`fixed p-10 duration-500 ease-in ${
            nav
              ? "left-0 top-0 h-screen w-[75%] bg-surface sm:w-[60%] md:w-[45%]"
              : "-left-full top-0"
          }`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h1 className="font-monospace text-3xl text-primary">
                  malorama
                </h1>
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-shades dark:border-2"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] py-4 md:w-[90%]">Maik Lorenz</p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {navItems.map(([title, url], idx) => (
                <li key={idx} className="ml-10 py-4 text-sm">
                  <Link
                    className="hover:border-b-2 hover:border-primary"
                    href={url}
                    scroll={false}
                    onClick={() => setNav(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-primary">
                Let&apos;s connect!
              </p>
              <div className="my-4 flex w-full items-center justify-evenly sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/"
                  target="_blank"
                >
                  <div className="cursor-pointer rounded-full bg-primary p-3 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
                    {/* color="#0e76a8" */}
                    <FaLinkedin size={24} />
                  </div>
                </Link>
                <Link href="https://github.com/maikerlab" target="_blank">
                  <div className="cursor-pointer rounded-full bg-primary p-3 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
                    {/* color="#333" */}
                    <FaGithub size={24} />
                  </div>
                </Link>
                <Link href="mailto:maik.lorenz@protonmail.com">
                  <div className="cursor-pointer rounded-full bg-primary p-3 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
                    <AiOutlineMail size={24} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

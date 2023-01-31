import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const navItems = [
  ["Home", "/#main"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Blog", "/blog"],
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("background");
  const [linkColor, setLinkColor] = useState("skin-on-background");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.search("/projects") === 0) {
      setNavBg("transparent");
      setLinkColor("skin-on-background");
    } else {
      setNavBg("background");
      setLinkColor("skin-on-background");
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
      } fixed z-[100] w-full py-5 px-4 bg-${navBg}`}
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
          <ul className={`hidden md:flex text-${linkColor}`}>
            {navItems.map(([title, url], idx) => (
              <Link href={url} key={idx} scroll={false}>
                <li className="text-md border-b-edges ml-10 uppercase hover:border-b">
                  {title}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "bg-cultured fixed left-0 top-0 h-screen w-[75%] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed -left-full top-0 p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h1 className="font-monospace text-3xl">malorama</h1>
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-shades"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] py-4 md:w-[90%]">
                <strong>Ma</strong>ik <strong>Lor</strong>enz -{" "}
                <strong>A</strong>sk <strong>M</strong>e <strong>A</strong>
                nything!
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {navItems.map(([title, url], idx) => (
                <Link
                  href={url}
                  key={idx}
                  scroll={false}
                  onClick={() => setNav(false)}
                >
                  <li className="ml-10 py-4 text-sm hover:border-b">{title}</li>
                </Link>
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
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
                    <FaLinkedin size={24} color="#0e76a8" />
                  </div>
                </Link>
                <Link href="https://github.com/maikerlab" target="_blank">
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
                    <FaGithub color="#333" />
                  </div>
                </Link>
                <Link href="mailto:maik.lorenz@protonmail.com">
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-shades duration-300 ease-in hover:scale-105">
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

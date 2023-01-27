import Link from "next/link";
import {
  faBars,
  faEnvelope,
  faClose,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitch from "./ThemeSwitch";
import SideNav from "./SideNav";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <nav className="flex justify-between space-x-4 py-5 px-10">
        <Link href="/">
          <h1 className="font-robotoMono text-xl font-bold lg:text-3xl">
            malorama
          </h1>
        </Link>
        <ul className="flex items-center">
          {[
            ["Home", "/"],
            ["Blog", "/blog"],
          ].map(([title, url]) => (
            <li>
              <Link
                href={url}
                className="ml-8 rounded-md bg-gray-200 px-4 py-2 font-bold text-black hover:bg-slate-500 hover:text-white"
              >
                {title}
              </Link>
            </li>
          ))}
          <li className="ml-8">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

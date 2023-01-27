import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import SideNav from "./SideNav";
import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex justify-between space-x-4 py-5 px-5">
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
              className="ml-8 h-9 w-9 rounded-lg bg-gray-600 px-4 py-2 font-bold text-white ring-gray-300 transition-all hover:ring-2"
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
  );
};

export default Nav;

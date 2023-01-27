import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex items-center rounded-lg p-2"
        >
          <FontAwesomeIcon
            icon={faSun}
            className="h-5 w-5 fill-current"
            //viewBox="0 0 20 20 "
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center rounded-lg p-2"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className="h-5 w-5 fill-current"
            //viewBox="0 0 10 10 "
          />
        </button>
      )}
    </>
  );
}

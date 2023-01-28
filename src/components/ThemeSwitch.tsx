import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ThemeSwitch({ withLabel }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300 transition-all hover:ring-2  dark:bg-gray-600"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            icon={faLightbulb}
            className="h-5 w-5 fill-current"
          />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="h-5 w-5 fill-current" />
        )}
      </button>
      {withLabel && (
        <label className="text-xs font-thin">
          {theme === "dark" ? "Let there be light" : "Turn of the lights"}
        </label>
      )}
    </div>
  );
}

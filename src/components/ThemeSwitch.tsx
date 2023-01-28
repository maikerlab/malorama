import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

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
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-12 w-12 cursor-pointer rounded-full bg-cultured p-2 text-center text-black shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
    >
      {theme === "dark" ? (
        <MdLightMode size={25} />
      ) : (
        <MdNightlight size={25} />
      )}
    </button>
  );
}

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
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary p-2 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110"
    >
      {theme === "dark" ? (
        <MdLightMode size={25} />
      ) : (
        <MdNightlight size={25} />
      )}
    </button>
  );
}

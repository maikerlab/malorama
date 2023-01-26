import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDarkMode(theme === "dark" ? true : false);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = (on: boolean) => {
    setDarkMode(on);
    setTheme(on ? "dark" : "light");
  };

  return (
    <div>
      <FontAwesomeIcon icon={faSun} />
      <input
        id="dark-mode-switch"
        type="checkbox"
        role="switch"
        className={styles.darkModeSwitch}
        checked={darkMode}
        onChange={(e) => toggleDarkMode(e.target.checked)}
      ></input>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
}

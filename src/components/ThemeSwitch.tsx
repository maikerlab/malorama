import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitch.module.css";

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
    <div className={styles.themeSwitch}>
      <FontAwesomeIcon icon={faSun} />
      <input
        id="dark-mode-switch"
        type="checkbox"
        role="switch"
        checked={theme == "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      <FontAwesomeIcon icon={faMoon} />
    </div>
  );
}

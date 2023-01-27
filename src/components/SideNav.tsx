import React from "react";
import { faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideNav.module.css";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function SideNav() {
  return (
    <aside>
      <nav className={styles.sideNav}>
        <ul>
          <li>
            <Link href="/" className="secondary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="secondary">
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/projects" className="secondary">
              Projects
            </Link>
          </li>
          <li className={styles.socialLinks}>
            <Link href="#" className="secondary" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="#" className="secondary" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="#" className="secondary" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" className="secondary" aria-label="Mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
    </aside>
  );
}

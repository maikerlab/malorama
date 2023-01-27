import React from "react";
import { faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function SideNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="#" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" aria-label="Mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
    </aside>
  );
}

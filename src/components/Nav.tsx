import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link href="#" className="secondary" aria-label="Menu">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </li>
          <li>
            <Link href="/" className="secondary">
              <strong>Maik Lorenz</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
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
          <li>
            <Link href="#" className="secondary" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link href="#" className="secondary" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link href="#" className="secondary" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link href="#" className="secondary" aria-label="Mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

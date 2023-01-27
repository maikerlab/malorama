import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import styles from "./PostPreview.module.css";

export default function PostPreview({ post }) {
  return (
    <article>
      <header>
        <div className={styles.blogImage}>
          <Image
            src={`/images/${post.frontMatter.image}`}
            alt="Blogpost Preview"
            width={500}
            height={50}
          />
        </div>
      </header>
      <hgroup>
        <Link href={"/blog/" + post.slug}>
          <h5>{post.frontMatter.title}</h5>
        </Link>
        <h6>{post.frontMatter.description}</h6>
      </hgroup>
      <footer>
        <p>
          <ul className={styles.tags}>
            <FontAwesomeIcon icon={faTags} /> |
            {post.frontMatter.tags.map((tag, index) => (
              <li key={index} className={styles.tag}>
                <Link href="#">{tag}</Link>|
              </li>
            ))}
          </ul>
        </p>
        <small>{post.frontMatter.date}</small>
      </footer>
    </article>
  );
}

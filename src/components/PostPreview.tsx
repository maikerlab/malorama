import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export default function PostPreview({ post }) {
  return (
    <article className="flex flex-col rounded-md bg-gray-100 p-4 hover:shadow-lg dark:bg-gray-800">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/images/${post.frontMatter.image}`}
          alt="Blogpost Preview"
          width={500}
          height={500}
          className="hover:transitionhover:transform h-40 w-full object-cover duration-300 hover:scale-125 dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex">
          <FontAwesomeIcon icon={faTags} className="mr-3" />
          <Link href={"/blog?tag=" + post.slug}>
            <h5 className="text-xs uppercase tracking-wider text-violet-700 hover:underline dark:text-violet-400">
              {post.frontMatter.tags[0]}
            </h5>
          </Link>
        </div>
        <h2 className="flex-1 py-2 text-lg font-semibold leading-snug hover:underline">
          <Link href={"/blog/" + post.slug}>{post.frontMatter.title}</Link>
        </h2>
        <h3 className="flex-1 text-sm">{post.frontMatter.description}</h3>
        <div className="flex flex-wrap justify-between space-x-2 pt-4 text-xs italic dark:text-gray-400">
          <span>{post.frontMatter.date}</span>
        </div>
      </div>
    </article>
  );
}

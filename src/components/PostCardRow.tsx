import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { AiOutlineArrowRight, AiOutlineTags } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { IPostMeta } from "./PostCard";
import { url } from "inspector";

export default function PostCardRow({
  post: {
    slug,
    frontMatter: { title, image, description, date, tags },
  },
}: {
  post: IPostMeta;
}) {
  return (
    <div className="group flex w-full flex-col rounded-lg border-2 border-gray-400 bg-surface p-5 text-skin-on-surface shadow-lg shadow-shades transition duration-300 ease-in hover:bg-gray-300 dark:hover:bg-gray-700">
      <span className="mb-2 inline-flex text-sm leading-none text-gray-400">
        <AiOutlineTags className="mr-2 h-4 w-4" />
        {tags.map((tag: string, idx) => (
          <span
            key={idx}
            className={`${
              idx < tags.length - 1 && "mr-1 border-r-2 border-gray-400 pr-1"
            }`}
          >
            {tag}
          </span>
        ))}
      </span>
      <span className="inline-flex items-center text-indigo-400">
        <BsCalendar3 className="mr-2 h-3 w-3" />
        <h2 className="mb-1 text-base font-medium">{date}</h2>
      </span>
      <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
      <p className="mb-3 flex-1 leading-relaxed">{description}</p>
      <div className="flex flex-wrap items-center">
        <span className="flex items-center justify-center rounded-xl p-3 font-medium text-primary hover:underline">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center md:mb-2 lg:mb-0"
          >
            Read more
          </Link>
          <AiOutlineArrowRight className="ml-1" />
        </span>
      </div>
    </div>
  );
}

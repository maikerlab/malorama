import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { AiOutlineArrowRight, AiOutlineTags } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

export interface IPostMeta {
  frontMatter: {
    date: string;
    description: string;
    image: string;
    status: string;
    tags: string[];
    title: string;
  };
  slug: string;
}

export default function PostCard({
  post: {
    slug,
    frontMatter: { title, image, description, date, tags },
  },
}: {
  post: IPostMeta;
}) {
  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 border-opacity-60 bg-surface text-skin-on-surface shadow-xl shadow-shades">
      <div className="overflow-hidden">
        <Image
          src={`/assets/blog/${image}`}
          className="w-full object-cover object-center duration-300 group-hover:scale-105 md:h-48 lg:h-64"
          alt={title}
          width={400}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 transition duration-300 ease-in group-hover:bg-gray-600 group-hover:text-white dark:group-hover:bg-gray-900">
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
        <span className="inline-flex items-center text-indigo-300">
          <BsCalendar3 className="mr-2 h-3 w-3" />
          <h2 className="mb-1 text-base font-medium">{date}</h2>
        </span>
        <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
        <p className="mb-3 flex-1 leading-relaxed">{description}</p>
        <div>
          <button className="flex flex-wrap items-center bg-primary text-skin-on-primary">
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
            </Link>
            <AiOutlineArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

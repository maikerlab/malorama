import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { AiOutlineArrowRight, AiOutlineTags } from "react-icons/ai";

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
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 border-opacity-60 shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={`/assets/blog/${image}`}
          className="w-full object-cover object-center duration-300 group-hover:scale-105 md:h-48 lg:h-64"
          alt={title}
          width={400}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 transition duration-300 ease-in group-hover:bg-indigo-700 group-hover:text-white">
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
        <h2 className="mb-1 text-base font-medium text-indigo-300">{date}</h2>
        <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
        <p className="mb-3 flex-1 leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0"
          >
            Read more
          </Link>
          <AiOutlineArrowRight className="ml-1 text-indigo-300" />
        </div>
      </div>
    </div>
  );
}

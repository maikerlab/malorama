import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

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

export default function PostCard({ slug, frontMatter }: IPostMeta) {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-primary to-secondary p-6 shadow-lg duration-300 hover:scale-105">
      <Image
        src={`/assets/blog/${frontMatter.image}`}
        className="h-32 w-full rounded-t-md object-cover"
        alt={frontMatter.title}
        width={400}
        height={300}
      />
      <div className="mt-4 text-center">
        <h4 className="font-bold text-white hover:underline">
          <Link href={`/blog/${slug}`}>{frontMatter.title}</Link>
        </h4>
        <p className="my-5 text-sm font-semibold text-gray-200">
          {frontMatter.description}
        </p>
        <p className="absolute bottom-0 mb-2 text-left text-sm italic text-gray-100">
          {frontMatter.date}
        </p>
      </div>
    </div>
  );
}

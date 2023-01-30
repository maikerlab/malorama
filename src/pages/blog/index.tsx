import React from "react";
import PostCard, { IPostMeta } from "@components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: { posts: IPostMeta[] }) => {
  return (
    <>
      <Head>
        <title>Blog | malorama</title>
      </Head>
      <div id="main" className="mx-auto h-screen max-w-[1240px] px-4">
        <p className="text-xl uppercase tracking-widest text-primary">Blog</p>
        <h2 className="py-4 text-3xl">Latest Blog Posts</h2>
        <section className="flex items-center text-gray-600">
          <div className="container mx-auto px-5 py-8">
            <div className="m-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {posts.map((post: IPostMeta, index) => {
                return <PostCard post={post} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

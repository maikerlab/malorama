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

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | malorama</title>
        <meta name="description" content="Portfolio of Maik Lorenz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main" className="mx-auto h-screen max-w-[1240px] px-4">
        <p className="text-xl uppercase tracking-widest text-primary">Blog</p>
        <h2 className="py-4 text-3xl">Latest Blog Posts</h2>
        <section id="blog" className="pt-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {posts.map((post: IPostMeta, index) => {
              console.log(post);
              return <PostCard {...post} key={index} />;
            })}
          </div>
        </section>
        {/* </div> */}
      </div>
    </>
  );
};

export default Blog;

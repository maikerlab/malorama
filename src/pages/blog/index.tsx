import React from "react";
import PostCard from "@components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
      <h2 className="text-2xl font-bold">Blog posts</h2>
      <h3 className="text-lg text-gray-500">Here are some blog posts of me.</h3>
      <section id="blog" className="pt-5">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

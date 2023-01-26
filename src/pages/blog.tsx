import React from "react";
import PostPreview from "src/components/PostPreview";
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
    <div className="container">
      <hgroup>
        <h2>Blog posts</h2>
        <h3>Here are some blog posts of me.</h3>
      </hgroup>
      <section id="blog" className="blog">
        <div className="grid">
          {posts.map((post, index) => (
            <div key={index}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

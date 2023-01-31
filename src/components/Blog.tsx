import React from "react";
import PostCard, { IPostMeta } from "./PostCard";

const Blog = ({ posts }: { posts: IPostMeta[] }) => {
  posts = posts.sort((a, b) => {
    return new Date(a.frontMatter.date) < new Date(b.frontMatter.date) ? 1 : -1;
  });

  return (
    <div id="blog" className="mx-auto h-screen max-w-[1240px] px-4">
      <p className="text-xl uppercase tracking-widest text-primary">Blog</p>
      <h2 className="py-4 text-3xl">Latest Blog Posts</h2>
      <section className="flex items-center py-2 text-gray-600">
        <div className="container mx-auto py-2">
          <div className="m-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {posts.map((post: IPostMeta, index) => {
              return <PostCard post={post} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col">
      <h4>{post.frontMatter.title}</h4>
      <p>{post.frontMatter.description}</p>
    </div>
  );
}

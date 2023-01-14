import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostPreview from "src/components/PostPreview";
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

export default function Home({ posts }) {
  return (
    <div className="mt-5 row row-cols-1 row-cols-lg-2">
      {posts.map((post, index) => (
        <div className="col">
          <PostPreview post={post} key={index} />
        </div>
      ))}
    </div>
  );
}

import Head from "next/head";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import PostCard, { IPostMeta } from "@components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Blog from "@/components/Blog";
import ButtonTopPage from "@/components/ButtonTopPage";

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

export default function Home({ posts }: { posts: IPostMeta[] }) {
  return (
    <>
      <Head>
        <title>Home | maikerlab</title>
      </Head>
      <div className="">
        <h2 className="mx-auto mb-4 w-fit cursor-default border-b-2 border-primary bg-transparent pb-2">
          Welcome to <span className="text-primary">maikerlab</span>
        </h2>
        <p className="mx-auto w-1/2 text-center">
          I call myself maikerlab, which is composed out of my first name (Maik)
          and because I love making things (Software and Electronics). On this
          page, I post about things I have learned and what I want to share with
          others. I also like to tell you something about me.
        </p>
      </div>
      <Blog posts={posts} />
      <Projects />
      <ButtonTopPage />
    </>
  );
}

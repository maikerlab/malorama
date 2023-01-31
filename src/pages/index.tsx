import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";
import PostCard, { IPostMeta } from "@components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Blog from "@/components/Blog";

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
        <title>Home | malorama</title>
      </Head>
      <Main />
      <Blog posts={posts} />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

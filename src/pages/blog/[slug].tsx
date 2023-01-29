import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { GetStaticPaths } from "next";
import styles from "@styles/Post.module.css";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

interface IPost {
  frontMatter: {
    title: string;
  };
  mdxSource: any;
}

const Post = ({ frontMatter: { title }, mdxSource }: IPost) => {
  return (
    <>
      <Head>
        <title>{title} | malorama</title>
      </Head>
      <div className="container">
        <div className={styles.post}>
          <h1 className="my-8 font-bold">{title}</h1>
          <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
        </div>
      </div>
    </>
  );
};

export default Post;

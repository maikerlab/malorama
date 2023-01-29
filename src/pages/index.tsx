import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | malorama</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

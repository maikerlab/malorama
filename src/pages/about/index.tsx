import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ButtonTopPage from "@/components/ButtonTopPage";

export default function AboutPage() {
  return (
    <>
      <Introduction />
      <About />
      <Skills />
      <ButtonTopPage />
    </>
  );
}

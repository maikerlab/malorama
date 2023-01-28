import Sidebar from "@src/components/Sidebar";
import Hero from "@src/sections/Hero";
import Skills from "@src/sections/Skills";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Skills />
    </div>
  );
}

import { Hero } from "@/components/hero";
import { WorkShowcase } from "@/components/showcase";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkShowcase />
      <About />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}

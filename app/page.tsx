import Contact from "@/components/contact";
import Achievements  from "@/components/achievements";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Internships from "@/components/internships";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center pb-10">
      <Intro />
      <div className="flex w-full flex-col items-center px-4 sm:px-6">
        <SectionDivider />
        <Projects />
        <Skills />
        <Internships />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </main>
  );
}

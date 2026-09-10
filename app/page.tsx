import Hero from "@/components/hero";
import CurrentlyExploring from "@/components/currently-exploring";
import HowIThink from "@/components/how-i-think";
import SelectedWork from "@/components/selected-work";
import Lab from "@/components/lab";
import BreakTheSystem from "@/components/break-the-system";
import Systems from "@/components/systems";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Signal from "@/components/signal";
import BuildLog from "@/components/build-log";
import About from "@/components/about";
import Toolbox from "@/components/toolbox";
import Contact from "@/components/contact";

function SectionDivider() {
  return <div className="section-divider mx-6 lg:mx-10" />;
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col">
      <Hero />
      <SectionDivider />
      <CurrentlyExploring />
      <SectionDivider />
      <HowIThink />
      <SectionDivider />
      <SelectedWork />
      <SectionDivider />
      <Lab />
      <SectionDivider />
      <BreakTheSystem />
      <SectionDivider />
      <Systems />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Signal />
      <SectionDivider />
      <BuildLog />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Toolbox />
      <SectionDivider />
      <Contact />
    </main>
  );
}

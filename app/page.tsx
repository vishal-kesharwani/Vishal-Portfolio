import Hero from "@/components/hero";
import ProofStrip from "@/components/proof-strip";
import SelectedWork from "@/components/selected-work";
import Systems from "@/components/systems";
import BreakTheSystem from "@/components/break-the-system";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Lab from "@/components/lab";
import BuildLog from "@/components/build-log";
import Signal from "@/components/signal";
import About from "@/components/about";
import Contact from "@/components/contact";

function SectionDivider() {
  return <div className="section-divider mx-6 lg:mx-10" />;
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col">
      <Hero />
      <ProofStrip />
      <SectionDivider />
      <SelectedWork />
      <SectionDivider />
      <Systems />
      <SectionDivider />
      <BreakTheSystem />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Lab />
      <SectionDivider />
      <BuildLog />
      <SectionDivider />
      <Signal />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </main>
  );
}

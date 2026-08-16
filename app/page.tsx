import Contact from "@/components/contact";
import Achievements  from "@/components/achievements";
import About from "@/components/about";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Internships from "@/components/internships";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import TechRadar from "@/components/tech-radar";
import CloudLab from "@/components/cloud-lab";
import KpiBar from "@/components/kpi-bar";
import SystemStatus from "@/components/system-status";
import ProductionSimulation from "@/components/production-simulation";

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col items-center pb-10">
      <Intro />
      <KpiBar />
      <SystemStatus />
      <div className="mt-16 flex w-full flex-col items-center px-4 sm:mt-20 sm:px-6">
        <About />
        <SectionDivider />
        <Projects />
        <CloudLab />
        <ProductionSimulation />
        <TechRadar />
        <Internships />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </main>
  );
}

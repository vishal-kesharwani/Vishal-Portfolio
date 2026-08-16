"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.10);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading kicker="Selected systems">My projects</SectionHeading>
      <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-6 text-muted sm:text-base">
        These are the projects that best reflect the resume: a live production
        product, event-driven microservices on Kubernetes, and backend
        infrastructure automation.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { CgWorkAlt } from "react-icons/cg";
import { internshipsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Internships() {
  const { ref } = useSectionInView("Internships", 0.4);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, (value) =>
    Math.min(Math.max(value, 0), 1),
  );

  return (
    <motion.section
      id="internships"
      ref={ref}
      className="mb-28 scroll-mt-28 w-full max-w-[58rem] sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="Where I have worked">Experience</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        Hands-on industry experience in Java backend engineering, cloud
        automation, ETL optimization, and platform-level delivery.
      </p>

      <div ref={containerRef} className="relative">
        <div className="absolute bottom-3 left-[19px] top-3 w-px bg-line sm:left-6" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-3 left-[19px] top-3 w-px origin-top bg-accent sm:left-6"
        />

        <div className="space-y-8">
          {internshipsData.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="relative flex gap-5 pl-0 sm:gap-6"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink sm:h-12 sm:w-12">
                <CgWorkAlt className="text-lg sm:text-xl" />
              </div>

              <div className="min-w-0 flex-1 rounded-3xl border border-line bg-surface p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium text-muted sm:text-base">
                      {item.role}
                    </p>
                  </div>

                  <div className="font-mono text-xs text-faint sm:text-right">
                    <p>{item.duration}</p>
                    <p className="mt-1 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-medium text-accent">
                      {item.status}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="relative flex items-center gap-5 sm:gap-6">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent bg-surface sm:h-12 sm:w-12">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full text-accent" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Now
              </p>
              <p className="text-sm font-semibold text-ink sm:text-base">
                Building backend and cloud systems, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import sevaImg from "@/public/seva-mahila-udyog.png";
import jobtrackerImg from "@/public/jobtracker.png";
import nexusImg from "@/public/reportease.png";
import cloudlensImg from "@/public/cloudlens-ai.png";

const projectImages: Record<string, typeof sevaImg> = {
  "01": sevaImg,
  "02": jobtrackerImg,
  "03": nexusImg,
  "04": cloudlensImg,
};

export default function SelectedWork() {
  const { ref } = useSectionInView("Work", 0.2);

  return (
    <section ref={ref} id="work" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
                // SELECTED WORK
              </span>
              <h2 className="font-display text-display-lg font-bold text-ink">
                Projects that made
                <br />
                me a better engineer.
              </h2>
              <p className="mt-4 text-muted max-w-md text-[15px]">
                Real software, real challenges, real learning.
              </p>
            </div>
            <a
              href="https://github.com/vishal-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              View all projects <FiArrowRight />
            </a>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) {
  const [showArch, setShowArch] = useState(false);
  const img = projectImages[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="border border-line bg-surface/50 hover:border-accent/15 transition-colors duration-300 flex flex-col"
    >
      {/* Image */}
      {img && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <Image
            src={img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <span className="font-mono text-[8px] uppercase tracking-wider text-faint">
              PROJECT {project.id}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="font-mono text-[9px] uppercase tracking-wider text-accent mb-2">
          {project.category}
        </div>
        <h3 className="font-display text-lg font-bold text-ink mb-2">
          {project.title}
        </h3>
        <p className="text-[13px] text-muted leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Impact */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.impact.map((m) => (
            <span
              key={m}
              className="px-2 py-1 border border-line font-mono text-[8px] uppercase tracking-wider text-ink bg-surface/80"
            >
              {m}
            </span>
          ))}
        </div>

        {/* Tech */}
        <p className="font-mono text-[9px] text-faint mb-3">{project.tech}</p>

        {/* Detail */}
        <p className="text-[12px] text-muted italic mb-4">{project.detail}</p>

        {/* Architecture diagrams */}
        {project.architecture && (
          <button
            onClick={() => setShowArch(!showArch)}
            className="font-mono text-[9px] uppercase tracking-wider text-accent hover:text-accent/80 transition-colors text-left mb-3"
          >
            {showArch ? "HIDE ARCHITECTURE" : "VIEW ARCHITECTURE"}
          </button>
        )}

        <AnimatePresence>
          {showArch && project.architecture && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 border border-line bg-canvas/50 mb-4">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {project.architecture.flow.map((node, ni) => (
                    <React.Fragment key={node}>
                      <span className="font-mono text-[8px] px-2 py-1 border border-line bg-surface text-ink">
                        {node}
                      </span>
                      {ni < project.architecture.flow.length - 1 && (
                        <span className="text-accent/40 text-[10px]">↓</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {project.eventFlow && (
          <div className="p-3 border border-line bg-canvas/50 mb-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {project.eventFlow.map((node, ni) => (
                <React.Fragment key={node}>
                  <span className="font-mono text-[8px] px-2 py-1 border border-line bg-surface text-ink">
                    {node}
                  </span>
                  {ni < project.eventFlow.length - 1 && (
                    <span className="text-accent/40 text-[10px]">↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {project.bridge && (
          <div className="p-3 border border-line bg-canvas/50 mb-4 text-center">
            <div className="font-mono text-[10px] text-ink">
              TERRAFORM <span className="text-accent">+</span> AWS <span className="text-accent">+</span> AI
            </div>
            <div className="font-mono text-[8px] text-faint mt-1">
              Systems engineer expanding into AI
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-3 pt-3 border-t border-line">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-ink transition-colors"
            >
              <FiGithub className="text-[11px]" />
              GitHub
              <FiExternalLink className="text-[8px]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

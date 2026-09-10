"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import sevaImg from "@/public/seva-mahila-udyog.png";
import jobtrackerImg from "@/public/jobtracker.png";
import nexusImg from "@/public/reportease.png";
import cloudlensImg from "@/public/cloudlens-ai.png";

const projectImages: Record<string, typeof sevaImg> = {
  "01": jobtrackerImg,
  "02": sevaImg,
  "03": nexusImg,
  "04": cloudlensImg,
};

const categoryColors: Record<string, string> = {
  FEATURED: "text-accent",
  "LIVE IN PRODUCTION": "text-accent",
  "FULL-STACK": "text-secondary",
  EXPLORING: "text-muted",
};

export default function SelectedWork() {
  const { ref } = useSectionInView("Work", 0.2);

  return (
    <section ref={ref} id="work" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            02 / WORK
          </span>
          <h2 className="font-display text-display-2xl font-bold text-ink leading-[0.95]">
            WORK THAT MADE ME
            <br />
            A BETTER ENGINEER.
          </h2>
        </motion.div>

        {/* Featured Project - Full Width */}
        <FeaturedProject project={projectsData[0]} />

        {/* Remaining Projects - Grid */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {projectsData.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({
  project,
}: {
  project: (typeof projectsData)[number];
}) {
  const [showDetails, setShowDetails] = useState(false);
  const img = projectImages[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border border-accent/20 bg-surface/40 hover:border-accent/30 transition-all duration-300"
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        {img && (
          <div className="relative overflow-hidden border-b border-line lg:border-b-0 lg:border-r aspect-[16/10] lg:aspect-auto">
            <Image
              src={img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 700px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-4">
              <span className="font-mono text-[8px] uppercase tracking-wider text-faint">
                PROJECT {project.id}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 lg:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
              {project.label}
            </span>
            <span className={`font-mono text-[8px] uppercase tracking-wider ${categoryColors[project.category] || "text-muted"}`}>
              ● {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-ink mb-3">
            {project.title}
          </h3>

          <p className="text-[15px] text-muted leading-relaxed mb-5">
            {project.headline}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.impact.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 border border-line font-mono text-[9px] uppercase tracking-wider text-muted bg-surface/60"
              >
                {m}
              </span>
            ))}
          </div>

          <p className="font-mono text-[10px] text-faint mb-5">{project.tech}</p>

          {project.proof && (
            <div className="space-y-2 mb-5">
              {project.proof.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 text-[10px]">→</span>
                  <span className="text-[13px] text-muted">{item}</span>
                </div>
              ))}
            </div>
          )}

          {project.why && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="font-mono text-[10px] uppercase tracking-wider text-accent hover:text-accent/80 transition-colors text-left mb-4"
            >
              {showDetails ? "HIDE DETAILS" : "WHY THIS DESIGN?"}
            </button>
          )}

          <AnimatePresence>
            {showDetails && project.why && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 border border-line bg-canvas/50 mb-4 space-y-4">
                  {project.why.map((item) => (
                    <div key={item.q}>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-1">
                        {item.q}
                      </div>
                      <p className="text-[13px] text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {project.architecture && (
            <div className="p-4 border border-line bg-canvas/50 mb-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-faint mb-3">
                ARCHITECTURE
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {project.architecture.flow.map((node, ni) => (
                  <React.Fragment key={node}>
                    <span className="font-mono text-[9px] px-2.5 py-1 border border-line bg-surface text-ink">
                      {node}
                    </span>
                    {ni < project.architecture.flow.length - 1 && (
                      <span className="text-accent/40 text-[11px]">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-line">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-ink transition-colors"
              >
                <FiGithub className="text-[12px]" />
                GitHub
                <FiExternalLink className="text-[9px]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) {
  const img = projectImages[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border border-line bg-surface/40 hover:border-line-accent transition-all duration-300 lg:grid lg:grid-cols-[1fr_1.1fr]"
    >
      {img && (
        <div className="relative overflow-hidden border-b border-line lg:border-b-0 lg:border-r aspect-[16/10] lg:aspect-auto">
          <Image
            src={img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-3 left-4">
            <span className="font-mono text-[8px] uppercase tracking-wider text-faint">
              PROJECT {project.id}
            </span>
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-faint">
            {project.label}
          </span>
          <span className={`font-mono text-[8px] uppercase tracking-wider ${categoryColors[project.category] || "text-muted"}`}>
            ● {project.category}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-ink mb-2">
          {project.title}
        </h3>

        <p className="text-[13px] text-muted leading-relaxed mb-3">
          {project.headline}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.impact.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 border border-line font-mono text-[8px] uppercase tracking-wider text-muted bg-surface/60"
            >
              {m}
            </span>
          ))}
        </div>

        <p className="font-mono text-[9px] text-faint mb-3">{project.tech}</p>

        {project.eventFlow && (
          <div className="p-3 border border-line bg-canvas/50 mb-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-2">
              EVENT FLOW
            </div>
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {project.eventFlow.map((node, ni) => (
                <React.Fragment key={node}>
                  <span className="font-mono text-[8px] px-2 py-0.5 border border-line bg-surface text-ink">
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
          <div className="p-3 border border-line bg-canvas/50 mb-3 text-center">
            <div className="font-mono text-[10px] text-ink">
              TERRAFORM <span className="text-accent">+</span> AWS <span className="text-accent">+</span> AI
            </div>
            <div className="font-mono text-[8px] text-faint mt-1">
              Systems → AI exploration
            </div>
          </div>
        )}

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

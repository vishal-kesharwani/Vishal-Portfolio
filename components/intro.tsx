"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import githubdp from "@/public/githubdp.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full scroll-mt-[100rem] px-4 pt-24 pb-14 sm:px-6 sm:pt-28"
    >
      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 px-6 py-10 text-white shadow-[0_30px_120px_-40px_rgba(15,23,42,0.8)] sm:px-10 sm:py-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-left">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200 backdrop-blur">
                Backend Intern
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur">
                Cloud / AI-ML / Java
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200/90">
                Vishal Kesharwani
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Building polished web products with backend depth and a product
                mindset.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m a Computer Engineering student at MIT Academy of
                Engineering, currently shaping full-stack systems, cloud
                workflows, and real-world internship deliverables.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Contact Me
              </a>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold">Backend + UX</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Experience
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Internship + Hackathons
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Stack
                </p>
                <p className="mt-2 text-lg font-semibold">Java, React, AWS</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                href="https://github.com/vishal-kesharwani"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setActiveSection("Home");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <FaGithub /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="space-y-4 p-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    Available for internships
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      Portfolio preview
                    </p>
                    <h2 className="text-2xl font-semibold leading-tight">
                      Modern, clean, and built to impress.
                    </h2>
                    <p className="text-sm leading-6 text-slate-300">
                      This is the visual direction I&apos;m using across the
                      complete site.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-center">
                      <p className="text-lg font-semibold">4+</p>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Sections
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-center">
                      <p className="text-lg font-semibold">1</p>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Live domain
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-center">
                      <p className="text-lg font-semibold">100%</p>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Customizable
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-xl sm:h-64 sm:w-64">
                  <Image
                    src={githubdp}
                    alt="Vishal portrait"
                    fill
                    priority
                    quality={95}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";
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
      className="w-full scroll-mt-[100rem] px-4 pt-24 pb-10 sm:px-6 sm:pt-24"
    >
      <motion.div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/65 bg-white/80 px-5 py-6 shadow-[0_30px_120px_-45px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:px-7 sm:py-8 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_30px_120px_-45px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(13,148,136,0.14),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,255,255,0.78))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(13,148,136,0.18),_transparent_24%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.82))]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:34px_34px] dark:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

        <div className="relative grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 text-left lg:pr-2">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-amber-500/15 bg-amber-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-200">
                Backend engineering focus
              </span>
              <span className="rounded-full border border-black/5 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
                Java, Spring Boot, AWS
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-300">
                Vishal Kesharwani
              </p>
              <p className="max-w-2xl text-[13px] font-medium leading-6 text-slate-600 dark:text-slate-300 sm:text-sm">
                Backend Developer | MIT AOE '26 | Java, Spring Boot, PostgreSQL, AWS
              </p>
              <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                I want to build backend platforms that are reliable, scalable,
                and worth trusting in production.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                I&apos;m a Computer Engineering student at MIT Academy of Engineering
                with internship experience in Java backend development and cloud
                engineering. My long-term goal is to grow into a backend
                engineer who can design APIs, ship cloud-ready services, and own
                the quality of the whole delivery path.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                View Projects <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Me
              </a>
              <a
                href="/Vishal_Kesharwani_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-800 transition hover:-translate-y-0.5 hover:bg-amber-500/15 dark:text-amber-100"
              >
                Resume <FiDownload />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-1.5 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/85 px-3.5 py-1.5 text-[13px] font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
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
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/85 px-3.5 py-1.5 text-[13px] font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg sm:max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 p-4 shadow-[0_24px_90px_-38px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_90px_-38px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-amber-500 via-teal-400 to-slate-900 dark:from-amber-300 dark:via-teal-300 dark:to-white" />

                <div className="relative mx-auto mt-2 h-72 w-72 overflow-hidden rounded-[1.8rem] border border-black/5 bg-slate-900 shadow-lg dark:border-white/10 sm:h-80 sm:w-80">
                  <Image
                    src={githubdp}
                    alt="Vishal portrait"
                    fill
                    priority
                    quality={95}
                    className="object-cover object-center"
                  />
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-black/5 bg-slate-950 p-4 text-white dark:border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-amber-200">
                    Career goal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    To grow into a backend engineer building dependable APIs,
                    cloud-native services, and systems teams can rely on.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Focus
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        APIs + architecture
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Direction
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Cloud-ready delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

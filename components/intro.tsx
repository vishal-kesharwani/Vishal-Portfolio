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
import { focusPoints, resumeHighlights } from "@/lib/data";

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
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] border border-white/65 bg-white/80 px-6 py-8 shadow-[0_30px_120px_-45px_rgba(15,23,42,0.26)] backdrop-blur-xl sm:px-8 sm:py-10 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_30px_120px_-45px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(13,148,136,0.14),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,255,255,0.78))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(13,148,136,0.18),_transparent_24%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.82))]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:34px_34px] dark:[background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6 text-left">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-amber-500/15 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-200">
                Open to backend roles
              </span>
              <span className="rounded-full border border-black/5 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
                Java • Spring Boot • AWS
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-300">
                Vishal Kesharwani
              </p>
              <p className="max-w-2xl text-sm font-medium leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
                Backend Developer | MIT AOE &apos;26 | Java, Spring Boot,
                PostgreSQL, AWS, Docker, and full-stack delivery
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                I build backend systems and cloud-ready products that feel
                reliable from day one.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                I&apos;m a Computer Engineering student at MIT Academy of
                Engineering with internship experience in Java backend
                development and cloud engineering. My work centers on secure
                APIs, clean service layers, ETL optimization, and deployments
                that stay maintainable after launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                View Projects <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3 font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Me
              </a>
              <a
                href="/Vishal_Kesharwani_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-amber-500/10 px-6 py-3 font-semibold text-amber-800 transition hover:-translate-y-0.5 hover:bg-amber-500/15 dark:text-amber-100"
              >
                Resume <FiDownload />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {focusPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.35rem] border border-black/5 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_12px_28px_-20px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {resumeHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-black/5 bg-white/90 p-4 shadow-[0_12px_28px_-22px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-slate-900/60"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/85 px-4 py-2 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
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
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/85 px-4 py-2 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-[2rem] border border-black/5 bg-white/90 p-4 shadow-[0_24px_90px_-38px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_90px_-38px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-amber-500 via-teal-400 to-slate-900 dark:from-amber-300 dark:via-teal-300 dark:to-white" />
              <div className="grid gap-4 p-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-slate-950 p-4 text-white dark:border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-100">
                      Resume snapshot
                    </div>
                    <div className="text-right text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      backend + cloud
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 font-mono text-[12px] leading-6 text-slate-200">
                    <p>
                      <span className="text-amber-300">$</span> java
                      backend.build()
                    </p>
                    <p>
                      <span className="text-amber-300">$</span> spring boot
                      + security
                    </p>
                    <p>
                      <span className="text-amber-300">$</span> docker push to
                      ec2
                    </p>
                    <p>
                      <span className="text-amber-300">$</span> ci/cd deploy
                      via github actions
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                        APIs
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        15+
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                        ETL
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        -50%
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                        AWS
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        CLF-C02
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                        Finalist
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        SIH
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-4 rounded-[1.5rem] border border-black/5 bg-stone-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      Current direction
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                      Java backend engineering, secure APIs, and cloud delivery.
                    </p>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-black/5 bg-slate-900 dark:border-white/10">
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
        </div>
      </motion.div>
    </section>
  );
}

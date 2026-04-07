"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import githubdp from "@/public/githubdp.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 w-full scroll-mt-[100rem] px-4 pt-28 pb-14 text-center particles-section sm:mb-0 sm:pt-36 sm:pb-18"
    >
      <ParticleContainer />
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row-reverse">
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={githubdp}
                alt="Vishal portrait"
                width={320}
                height={320}
                quality={95}
                priority
                className="h-68 w-68 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-[-0.5px] right-[-0.5px] text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>

        <div className="w-full text-left md:w-1/2">
          <motion.div
            className="mb-10 mt-4 space-y-5 px-0 text-base font-medium leading-relaxed text-slate-200 sm:px-4 sm:text-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
              Hi, I&apos;m Vishal Kesharwani
            </h1>

            <p>
              I build{" "}
              <span className="font-semibold text-teal-300">
                full-stack web apps
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-300">
                cloud-native systems
              </span>{" "}
              with a focus on clean UX and practical outcomes.
            </p>

            <p>
              I&apos;m pursuing my{" "}
              <span className="font-semibold text-yellow-300">
                B.Tech in Computer Engineering
              </span>{" "}
              at{" "}
              <a
                href="https://mitaoe.ac.in/"
                className="font-semibold text-blue-300 underline transition-colors hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textUnderlineOffset: "4px" }}
              >
                MIT Academy of Engineering
              </a>
              , and I enjoy building products around AI/ML, automation, and
              scalable web experiences.
            </p>

            <p>
              This portfolio now lives on{" "}
              <span className="font-semibold text-green-300">
                vishalkesharwani.in
              </span>{" "}
              and highlights my projects, hackathon wins, and the skills I use
              to ship work end-to-end.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white px-7 py-3 text-gray-950 outline-none transition hover:scale-105 active:scale-105 focus:scale-110"
          href="https://github.com/vishal-kesharwani"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group flex items-center gap-2 rounded-full border-2 border-white border-opacity-40 bg-gray-950 px-7 py-3 text-white outline-none transition hover:scale-105 active:scale-105 focus:scale-105"
          href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}

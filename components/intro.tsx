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
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full pl-1 md:w-1/2 flex justify-center md:justify-end">
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
                width="320"
                height="320"
                quality="95"
                priority={true}
                className="h-68 w-68 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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

        {/* Text Content */}
<div className="w-full md:w-1/2 text-left">
  <motion.div
    className="mb-10 mt-4 px-0 sm:px-4 text-base sm:text-lg font-medium leading-relaxed text-slate-200 space-y-5"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
      Hi, I'm Vishal Kesharwani 👨‍💻
    </h1>

    <p>
      A <span className="text-teal-300 font-semibold">Full Stack Developer</span> &{" "}
      <span className="text-indigo-300 font-semibold">Cloud Engineer</span> passionate about building scalable web apps and intelligent solutions.
    </p>

    <p>
      I'm currently pursuing a <span className="text-yellow-300 font-semibold">B.Tech in Computer Engineering</span> at{" "}
      <a
        href="https://mitaoe.ac.in/"
        className="underline font-semibold text-blue-300 hover:text-blue-200 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textUnderlineOffset: "4px" }}
      >
        MIT Academy of Engineering
      </a>
      .
    </p>

    <p>
      I specialize in <span className="text-purple-300 font-semibold">Cloud-Native Architecture</span>,{" "}
      <span className="text-pink-300 font-semibold">AI/ML Development</span>, and full-stack technologies like{" "}
      <span className="text-green-300 font-semibold">AWS</span>,{" "}
      <span className="text-cyan-300 font-semibold">Blockchain</span>, and the{" "}
      <span className="text-orange-300 font-semibold">MERN Stack</span>.
    </p>

    <p>
      I’m driven to solve real-world problems and always looking to join innovative teams focused on tech that makes an impact.
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
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/vishal-kesharwani"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}

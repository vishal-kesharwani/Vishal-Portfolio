"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { howIThink } from "@/lib/data";
import Highlight from "./highlight";
import BentoSnapshot from "./bento-snapshot";
import DeployPipeline from "./deploy-pipeline";
import githubdp from "@/public/githubdp.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function About() {
  const { ref } = useSectionInView("About", 0.35);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 w-full max-w-[64rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading kicker="How I think">About</SectionHeading>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-muted sm:text-base"
      >
        I like building software that is{" "}
        <Highlight>structured</Highlight> and <Highlight>secure</Highlight>{" "}
        enough to hand over to the next developer. Three things I actually
        do, in order:
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {howIThink.map((item) => (
          <motion.div
            key={item.step}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-[1.75rem] border border-line bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(124,255,178,0.1)] hover:border-accent/40"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-faint"
            >
              {item.step}
            </motion.p>
            <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              {item.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-default rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-muted transition-colors group-hover:border-accent/30 group-hover:text-ink"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col items-center gap-5 rounded-[2rem] border border-line bg-surface p-5 text-center sm:flex-row sm:items-center sm:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative h-36 w-36 shrink-0 overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 sm:h-32 sm:w-32"
            >
              <Image
                src={githubdp}
                alt="Vishal Kesharwani"
                fill
                quality={95}
                sizes="144px"
                className="object-cover object-center"
              />
            </motion.div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Career goal
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                To grow into a backend / DevOps engineer who owns systems end
                to end: dependable APIs, automated infrastructure, and
                production monitoring that catches problems early.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border border-line bg-black p-5"
          >
            <DeployPipeline />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="rounded-[1.6rem] border border-line bg-surface p-5 transition-shadow hover:shadow-lg"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-faint">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Java backend systems, secure APIs, event-driven microservices,
                and cloud-native delivery on AWS and Kubernetes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="rounded-[1.6rem] border border-line bg-surface p-5 transition-shadow hover:shadow-lg"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-faint">
                Looking for
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Backend / DevOps engineering roles in distributed systems and
                cloud-native platforms.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <BentoSnapshot />
        </motion.div>
      </div>
    </motion.section>
  );
}

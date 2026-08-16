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

export default function About() {
  const { ref } = useSectionInView("About", 0.35);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 w-full max-w-[64rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="How I think">About</SectionHeading>

      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-muted sm:text-base">
        I like building software that is{" "}
        <Highlight>structured</Highlight> and <Highlight>secure</Highlight>{" "}
        enough to hand over to the next developer. Three things I actually
        do, in order:
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {howIThink.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group rounded-[1.75rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <p className="font-mono text-xs text-faint">{item.step}</p>
            <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              {item.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-muted transition group-hover:border-accent/30 group-hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-4 rounded-[2rem] border border-line bg-surface p-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-line bg-surface-2">
              <Image
                src={githubdp}
                alt="Vishal Kesharwani"
                fill
                quality={95}
                className="object-cover object-center"
              />
            </div>
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
          </div>

          <div className="rounded-[2rem] border border-line bg-black p-5">
            <DeployPipeline />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] border border-line bg-surface p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-faint">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Java backend systems, secure APIs, event-driven microservices,
                and cloud-native delivery on AWS and Kubernetes.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-line bg-surface p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-faint">
                Looking for
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Backend / DevOps engineering roles in distributed systems and
                cloud-native platforms.
              </p>
            </div>
          </div>
        </div>

        <BentoSnapshot />
      </div>
    </motion.section>
  );
}

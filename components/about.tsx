"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { Icon } from "@iconify/react";
import profilePhoto from "@/public/githubdp-removebg-preview.png";
import { educationData } from "@/lib/data";

const techIcons = [
  { name: "java", icon: "logos:java", x: -30, y: -35, delay: 0 },
  { name: "spring", icon: "logos:spring-icon", x: 35, y: -30, delay: 0.1 },
  { name: "kafka", icon: "logos:apache-kafka-icon", x: -40, y: 5, delay: 0.2 },
  { name: "kubernetes", icon: "logos:kubernetes", x: 40, y: 10, delay: 0.3 },
  { name: "aws", icon: "logos:aws", x: -25, y: 40, delay: 0.4 },
  { name: "docker", icon: "logos:docker-icon", x: 30, y: 40, delay: 0.5 },
  { name: "python", icon: "logos:python", x: -45, y: -15, delay: 0.6 },
  { name: "react", icon: "logos:react", x: 45, y: -10, delay: 0.7 },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section ref={ref} id="about" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            09 / ABOUT
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            WHO IS VISHAL?
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative w-full max-w-xs mx-auto lg:max-w-sm"
          >
            {/* Tech icons floating around */}
            <div className="absolute inset-0 pointer-events-none">
              {techIcons.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + tech.delay, duration: 0.4, type: "spring" }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${tech.x}%)`,
                    top: `calc(50% + ${tech.y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 2 + tech.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center justify-center w-10 h-10 border border-line bg-surface/80 backdrop-blur-sm rounded-lg hover:border-accent/40 transition-colors"
                  >
                    <Icon icon={tech.icon} className="w-5 h-5 text-muted" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Circular image with green border */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative aspect-square overflow-hidden rounded-full border-2 border-accent mx-auto"
              style={{
                boxShadow: "0 0 60px -10px rgba(184, 255, 61, 0.15)",
              }}
            >
              <Image
                src={profilePhoto}
                alt="Vishal Kesharwani"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.05]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                I&apos;m a Computer Engineering graduate based in Pune.
              </p>
              <p>
                I started with software development, moved deeper into backend
                systems and infrastructure, and now I&apos;m exploring AI and
                developer tooling.
              </p>
              <p>
                I learn by building, debugging and understanding what happens
                underneath the abstraction.
              </p>
            </div>

            <div className="pt-6 border-t border-line">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                    FIELD
                  </div>
                  <div className="text-[13px] text-ink">{educationData[0].degree}</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                    CGPA
                  </div>
                  <div className="text-[13px] text-ink">{educationData[0].cgpa}</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                    LOCATION
                  </div>
                  <div className="text-[13px] text-ink">Pune, India</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-1">
                    INSTITUTION
                  </div>
                  <div className="text-[13px] text-ink">MIT Academy of Engineering</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

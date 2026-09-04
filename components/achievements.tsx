"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Experience() {
  const { ref } = useSectionInView("Achievements");

  return (
    <motion.section
      id="achievements"
      ref={ref}
      className="mb-28 w-full max-w-[64rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading kicker="Proof of work">Achievements</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base"
      >
        These are the outcomes I mention when I want to show consistency,
        execution, and the ability to work across backend, cloud, research,
        and competitive problem solving.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {experiencesData.map((item, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group overflow-hidden rounded-[1.75rem] border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(124,255,178,0.12)] hover:border-accent/40"
          >
            {"photo" in item ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                    {item.date}
                  </p>
                </motion.div>
              </div>
            ) : (
              <motion.div
                className="flex aspect-[4/3] w-full items-center justify-center bg-surface-2 text-3xl text-accent"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
            )}

            <div className="p-5 text-center">
              <motion.h3
                className="text-base font-semibold tracking-tight text-ink"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-sm leading-6 text-muted"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {item.description}
              </motion.p>
              {"photo" in item ? null : (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  {item.date}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Achievements");

  return (
    <motion.section
      id="achievements"
      ref={ref}
      className="mb-28 w-full max-w-[64rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="Proof of work">Achievements</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-muted sm:text-base">
        These are the outcomes I mention when I want to show consistency,
        execution, and the ability to work across backend, cloud, research,
        and competitive problem solving.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiencesData.map((item, index) => (
          <motion.article
            key={index}
            className="group overflow-hidden rounded-[1.75rem] border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/40"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            {"photo" in item ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                <Image
                  src={item.photo}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-surface-2 text-3xl text-accent">
                {item.icon}
              </div>
            )}

            <div className="p-5 text-center">
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                {item.date}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

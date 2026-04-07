"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <section className="grid overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 shadow-[0_20px_80px_-25px_rgba(15,23,42,0.3)] backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_-25px_rgba(0,0,0,0.45)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-9">
          <div className="mb-4 inline-flex w-fit rounded-full border border-teal-500/15 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-200">
            Featured Project
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-700 dark:text-white/75">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 text-sm font-medium text-white transition hover:scale-105"
              >
                <BiLinkExternal className="mr-1" /> Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full bg-gray-950 py-2 px-4 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-gray-950"
              >
                <AiFillYoutube className="mr-1" /> Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full border border-black/10 py-2 px-4 text-sm font-medium text-gray-900 transition hover:scale-105 dark:border-white/20 dark:text-white"
              >
                <AiFillGithub className="mr-1 opacity-70" />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[18rem] bg-gradient-to-br from-slate-100 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 lg:min-h-full">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
        </div>
      </section>
    </motion.div>
  );
}

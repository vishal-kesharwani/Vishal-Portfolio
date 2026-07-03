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
  paperLink?: string;
  outcomes?: readonly string[];
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
  paperLink,
  outcomes,
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
      <section className="grid overflow-hidden rounded-[2rem] border border-black/5 bg-white/88 shadow-[0_24px_90px_-35px_rgba(15,23,42,0.28)] backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_90px_-35px_rgba(0,0,0,0.55)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-9">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex w-fit rounded-full border border-amber-500/15 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-200">
              Resume project
            </span>
            <span className="inline-flex w-fit rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Featured work
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-[2rem]">
            {title}
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-700 dark:text-white/75">
            {description}
          </p>

          {outcomes && outcomes.length > 0 && (
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/5 bg-gray-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/75"
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
                className="flex items-center rounded-full bg-slate-950 py-2 px-4 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-slate-950"
              >
                <AiFillYoutube className="mr-1" /> Demo
              </a>
            )}

            {paperLink && (
              <a
                href={paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full bg-slate-950 py-2 px-4 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-slate-950"
              >
                <BiLinkExternal className="mr-1" /> View Paper
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full border border-black/10 py-2 px-4 text-sm font-medium text-slate-900 transition hover:scale-105 dark:border-white/20 dark:text-white"
              >
                <AiFillGithub className="mr-1 opacity-70" />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[18rem] bg-gradient-to-br from-stone-100 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 lg:min-h-full">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/60 p-4 text-white backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-200/90">
              Stack snapshot
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {icons.map((icon, index) => (
                <span
                  key={`${icon}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
                >
                  <Icon icon={icon} className="h-4 w-4" />
                  {tags[index] ?? "Technology"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

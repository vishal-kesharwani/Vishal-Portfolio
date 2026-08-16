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
  liveLabel?: string;
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
  liveLabel,
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
      <section className="grid overflow-hidden rounded-[2rem] border border-line bg-surface transition hover:-translate-y-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-9">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {liveLabel && (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                {liveLabel}
              </span>
            )}
            <span className="inline-flex w-fit rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Resume project
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
            {title}
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {description}
          </p>

          {outcomes && outcomes.length > 0 && (
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-medium text-muted"
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
                className="flex items-center rounded-full bg-accent py-2 px-4 text-sm font-medium text-accent-ink transition hover:scale-105"
              >
                <BiLinkExternal className="mr-1" /> Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full bg-ink py-2 px-4 text-sm font-medium text-canvas transition hover:scale-105"
              >
                <AiFillYoutube className="mr-1" /> Demo
              </a>
            )}

            {paperLink && (
              <a
                href={paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full bg-ink py-2 px-4 text-sm font-medium text-canvas transition hover:scale-105"
              >
                <BiLinkExternal className="mr-1" /> View Paper
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-full border border-line py-2 px-4 text-sm font-medium text-ink transition hover:scale-105"
              >
                <AiFillGithub className="mr-1 opacity-70" />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[18rem] bg-surface-2 lg:min-h-full">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
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

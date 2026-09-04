"use client";

import { useRef, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        animate={{
          rotateX: isHovered ? mousePosition.y * -8 : 0,
          rotateY: isHovered ? mousePosition.x * 8 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <section className="grid overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid-cols-[1.05fr_0.95fr] transition-shadow duration-500 hover:shadow-[0_25px_60px_-15px_rgba(124,255,178,0.15)]">
          <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-9">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {liveLabel && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                  {liveLabel}
                </motion.span>
              )}
              <span className="inline-flex w-fit rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Resume project
              </span>
            </div>
            <motion.h3
              className="text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]"
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {title}
            </motion.h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              {description}
            </p>

            {outcomes && outcomes.length > 0 && (
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="cursor-default rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {urlLink && (
                <motion.a
                  href={urlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn flex items-center rounded-full bg-accent py-2 px-4 text-sm font-medium text-accent-ink"
                >
                  <BiLinkExternal className="mr-1" /> Live
                </motion.a>
              )}

              {demoLink && (
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn flex items-center rounded-full bg-ink py-2 px-4 text-sm font-medium text-canvas"
                >
                  <AiFillYoutube className="mr-1" /> Demo
                </motion.a>
              )}

              {paperLink && (
                <motion.a
                  href={paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn flex items-center rounded-full bg-ink py-2 px-4 text-sm font-medium text-canvas"
                >
                  <BiLinkExternal className="mr-1" /> View Paper
                </motion.a>
              )}

              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn flex items-center rounded-full border border-line py-2 px-4 text-sm font-medium text-ink"
                >
                  <AiFillGithub className="mr-1 opacity-70" />{" "}
                  <span className="opacity-70">GitHub</span>
                </motion.a>
              )}
            </div>
          </div>

          <div className="relative min-h-[18rem] bg-surface-2 lg:min-h-full overflow-hidden">
            <motion.div
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                fill
                className="object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur-md"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                Stack snapshot
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {icons.map((icon, index) => (
                  <motion.span
                    key={`${icon}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 cursor-default"
                  >
                    <Icon icon={icon} className="h-4 w-4" />
                    {tags[index] ?? "Technology"}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

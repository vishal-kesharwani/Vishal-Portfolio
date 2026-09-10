"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { signals } from "@/lib/data";
import Image from "next/image";
import awsCertImg from "@/public/achievements/aws-cert.jpg";
import sihImg from "@/public/achievements/sih-2024.jpg";
import cavistaImg from "@/public/achievements/cavista-hackathon.jpg";
import datathonImg from "@/public/achievements/datathon.jpg";
import ideathonImg from "@/public/achievements/ideathon.jpg";

const signalImages: Record<string, typeof awsCertImg> = {
  "aws-cert": awsCertImg,
  "sih-2024": sihImg,
  cavista: cavistaImg,
  datathon: datathonImg,
  ideathon: ideathonImg,
};

export default function Signal() {
  const { ref } = useSectionInView("Signal", 0.2);

  const large = signals.filter((s) => s.size === "large");
  const medium = signals.filter((s) => s.size === "medium");
  const small = signals.filter((s) => s.size === "small");

  return (
    <section ref={ref} id="signal" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            08 / SIGNAL
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            PROOF OVER CLAIMS.
          </h2>
        </motion.div>

        {/* Large - AWS Certificate */}
        {large.map((signal, i) => (
          <SignalLarge key={signal.title} signal={signal} index={i} />
        ))}

        {/* Medium - Hackathon Photos */}
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {medium.map((signal, i) => (
            <SignalMedium key={signal.title} signal={signal} index={i + large.length} />
          ))}
        </div>

        {/* Small - Achievement Grid */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-4">
          {small.map((signal, i) => (
            <SignalSmall key={signal.title} signal={signal} index={i + large.length + medium.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalLarge({
  signal,
  index,
}: {
  signal: (typeof signals)[number];
  index: number;
}) {
  const img = signal.imageKey ? signalImages[signal.imageKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group lg:grid lg:grid-cols-[1.3fr_1fr]"
    >
      {img && (
        <div className="relative h-64 lg:h-auto bg-surface-2 overflow-hidden">
          <Image
            src={img}
            alt={signal.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>
      )}
      <div className="p-6 lg:p-8 flex flex-col justify-center">
        <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-2">
          {signal.title}
        </div>
        <div className="font-display text-3xl font-bold text-ink mb-2">
          {signal.value}
        </div>
        <div className="font-mono text-[11px] text-muted">
          {signal.subtitle}
        </div>
      </div>
    </motion.div>
  );
}

function SignalMedium({
  signal,
  index,
}: {
  signal: (typeof signals)[number];
  index: number;
}) {
  const img = signal.imageKey ? signalImages[signal.imageKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group"
    >
      {img && (
        <div className="relative h-48 bg-surface-2 overflow-hidden">
          <Image
            src={img}
            alt={signal.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      )}
      <div className="p-4">
        <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-2">
          {signal.title}
        </div>
        <div className="font-display text-xl font-bold text-ink mb-1">
          {signal.value}
        </div>
        <div className="font-mono text-[10px] text-muted">
          {signal.subtitle}
        </div>
      </div>
    </motion.div>
  );
}

function SignalSmall({
  signal,
  index,
}: {
  signal: (typeof signals)[number];
  index: number;
}) {
  const img = signal.imageKey ? signalImages[signal.imageKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group"
    >
      {img && (
        <div className="relative h-28 bg-surface-2 overflow-hidden">
          <Image
            src={img}
            alt={signal.title}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 250px"
          />
        </div>
      )}
      <div className="p-3">
        <div className="font-mono text-[7px] uppercase tracking-wider text-faint mb-1">
          {signal.title}
        </div>
        <div className="font-display text-base font-bold text-ink mb-0.5">
          {signal.value}
        </div>
        <div className="font-mono text-[9px] text-muted">
          {signal.subtitle}
        </div>
      </div>
    </motion.div>
  );
}

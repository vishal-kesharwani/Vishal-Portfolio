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
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            08 / SIGNAL
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            PROOF OVER CLAIMS.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {large.map((signal, i) => (
            <SignalCard key={signal.title} signal={signal} index={i} variant="large" />
          ))}

          <div className="grid gap-4 md:grid-cols-2">
            {medium.map((signal, i) => (
              <SignalCard key={signal.title} signal={signal} index={i + large.length} variant="medium" />
            ))}
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {small.map((signal, i) => (
              <SignalCard key={signal.title} signal={signal} index={i + large.length + medium.length} variant="small" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCard({
  signal,
  index,
  variant,
}: {
  signal: (typeof signals)[number];
  index: number;
  variant: "large" | "medium" | "small";
}) {
  const img = signal.imageKey ? signalImages[signal.imageKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group ${
        variant === "large" ? "lg:grid lg:grid-cols-[1.2fr_1fr]" : ""
      }`}
    >
      {img && (
        <div
          className={`relative bg-surface-2 overflow-hidden ${
            variant === "large"
              ? "h-64 lg:h-auto"
              : variant === "medium"
              ? "h-48"
              : "h-32"
          }`}
        >
          <Image
            src={img}
            alt={signal.title}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            sizes={
              variant === "large"
                ? "(max-width: 1024px) 100vw, 500px"
                : variant === "medium"
                ? "(max-width: 768px) 100vw, 400px"
                : "(max-width: 768px) 50vw, 300px"
            }
          />
        </div>
      )}
      <div className={`p-4 ${variant === "large" ? "lg:p-6 lg:flex lg:flex-col lg:justify-center" : ""}`}>
        <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-2">
          {signal.title}
        </div>
        <div className={`font-display font-bold text-ink mb-1 ${
          variant === "large" ? "text-2xl" : variant === "medium" ? "text-lg" : "text-base"
        }`}>
          {signal.value}
        </div>
        <div className="font-mono text-[10px] text-muted">
          {signal.subtitle}
        </div>
      </div>
    </motion.div>
  );
}

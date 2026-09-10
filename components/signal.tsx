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
            // SIGNAL
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink">
            Proof over claims.
          </h2>
        </motion.div>

        {/* Achievement grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal, i) => {
            const img = signal.imageKey ? signalImages[signal.imageKey] : null;
            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="border border-line bg-surface/50 hover:border-accent/15 transition-colors overflow-hidden group"
              >
                {img && (
                  <div className="relative h-52 bg-surface-2 overflow-hidden">
                    <Image
                      src={img}
                      alt={signal.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="font-mono text-[8px] uppercase tracking-wider text-faint mb-2">
                    {signal.title}
                  </div>
                  <div className="font-display text-lg font-bold text-ink mb-1">
                    {signal.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted">
                    {signal.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

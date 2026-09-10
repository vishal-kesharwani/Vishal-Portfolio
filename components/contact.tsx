"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.2);

  return (
    <section ref={ref} id="contact" className="py-section px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent block mb-4">
            10 / NEXT
          </span>
          <h2 className="font-display text-display-lg font-bold text-ink mb-4">
            WHAT SHOULD WE
            <br />
            BUILD NEXT?
          </h2>
          <p className="text-muted max-w-xl text-[15px] leading-relaxed mb-10">
            Interested in backend systems, distributed infrastructure,
            cloud engineering, AI exploration, and difficult technical problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="space-y-6"
        >
          <a
            href="mailto:vishalkes1378@gmail.com"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-ink font-mono text-[11px] font-semibold uppercase tracking-wider hover:-translate-y-0.5 transition-transform">
              GET IN TOUCH
              <FiArrowRight className="text-sm" />
            </span>
          </a>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
            <a
              href="https://github.com/vishal-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[10px] uppercase tracking-wider transition-colors"
            >
              <FaGithub /> GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[10px] uppercase tracking-wider transition-colors"
            >
              <FaLinkedinIn /> LINKEDIN ↗
            </a>
            <a
              href="/Vishal_Kesharwani_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-line text-muted hover:text-ink hover:border-faint font-mono text-[10px] uppercase tracking-wider transition-colors"
            >
              <FiDownload className="text-[10px]" /> RESUME
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-faint text-[12px]" />
            <a
              href="mailto:vishalkes1378@gmail.com"
              className="font-mono text-[11px] text-muted hover:text-ink transition-colors"
            >
              vishalkes1378@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

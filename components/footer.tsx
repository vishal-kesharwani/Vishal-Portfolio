"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-section px-6 lg:px-10 border-t border-line">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="font-display text-display-2xl font-bold text-ink leading-[0.9]">
            <div>BUILD.</div>
            <div>BREAK.</div>
            <div>UNDERSTAND.</div>
            <div className="text-accent">SHIP.</div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-10">
          <div>
            <div className="font-display text-sm font-semibold text-ink mb-1">
              VISHAL.K
            </div>
            <div className="font-mono text-[10px] text-faint mb-0.5">
              Systems Builder
            </div>
            <div className="font-mono text-[10px] text-faint">
              Pune, India
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/vishal-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-faint hover:text-ink transition-colors inline-flex items-center gap-1.5"
            >
              <FaGithub className="text-[11px]" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-kesharwani-76708025b"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-faint hover:text-ink transition-colors inline-flex items-center gap-1.5"
            >
              <FaLinkedinIn className="text-[11px]" /> LinkedIn
            </a>
            <a
              href="/Vishal_Kesharwani_Resume.pdf"
              download
              className="font-mono text-[10px] text-faint hover:text-ink transition-colors inline-flex items-center gap-1.5"
            >
              <FiDownload className="text-[10px]" /> Resume
            </a>
            <a
              href="mailto:vishalkes1378@gmail.com"
              className="font-mono text-[10px] text-faint hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="font-mono text-[10px] text-faint">
            <span className="text-accent">vishal</span>
            <span className="text-muted">@</span>
            <span className="text-accent">lab</span>
            <span className="text-muted">:~$ </span>
            <span className="text-ink">keep_building()</span>
            <span className="inline-block w-1.5 h-3.5 bg-accent/60 ml-1 animate-terminal-blink" />
          </div>
          <div className="font-mono text-[9px] text-faint">
            Built with curiosity.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

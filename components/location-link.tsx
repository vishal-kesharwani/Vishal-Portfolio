"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const MAP_3D_URL =
  "https://www.google.com/maps/@19.29227368147739,73.05728185960413,300a,20y,0h,65t/data=!3m1!1e3";

export default function LocationLink({
  label = "Bhiwandi, Thane",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`group inline-flex items-center gap-1.5 cursor-pointer transition-colors hover:text-accent ${className}`}
      >
        <Icon
          icon="mdi:map-marker"
          className="text-[11px] text-accent/70 group-hover:text-accent transition-colors"
        />
        {label}
        <span className="font-mono text-[8px] uppercase tracking-wider text-accent/60 group-hover:text-accent transition-opacity">
          [explore]
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              role="dialog"
              aria-label="Explore Bhiwandi"
              className="absolute left-0 top-full mt-2 z-50 w-56 border border-line bg-surface backdrop-blur-md p-3.5 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 shrink-0 border border-accent/30 bg-accent/10 rounded-md">
                  <Icon
                    icon="mdi:earth"
                    className="text-[16px] text-accent"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-faint mb-0.5">
                    Current Location
                  </div>
                  <div className="text-[13px] text-ink font-medium">
                    Bhiwandi, Thane
                  </div>
                  <div className="font-mono text-[9px] text-faint mt-0.5 truncate">
                    19.2922, 73.0572
                  </div>
                </div>
              </div>

              <a
                href={MAP_3D_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-between gap-2 w-full border border-accent/40 bg-accent/10 hover:bg-accent hover:text-ink text-accent px-3 py-2 rounded-md font-mono text-[10px] uppercase tracking-wider transition-colors"
              >
                Explore Bhiwandi
                <Icon icon="mdi:arrow-top-right" className="text-[13px]" />
              </a>

              <div className="font-mono text-[8px] text-faint mt-2 leading-relaxed">
                Opens Google Maps in 3D view at your location.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}

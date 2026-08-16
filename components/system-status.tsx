"use client";

import React from "react";

const fields = [
  { label: "Location", value: "Pune, India" },
  { label: "Focus", value: "Backend, distributed systems, cloud" },
  { label: "Stack", value: "Java, Spring Boot, Kafka, AWS" },
] as const;

export default function SystemStatus() {
  return (
    <section className="w-full border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inset-0 rounded-full" />
            <span className="relative h-2 w-2 rounded-full bg-current" />
          </span>
          Open to backend / DevOps roles
        </span>

        {fields.map((field) => (
          <span
            key={field.label}
            className="font-mono text-[11px] text-faint"
          >
            <span className="uppercase tracking-[0.14em] text-muted">
              {field.label}
            </span>{" "}
            {field.value}
          </span>
        ))}
      </div>
    </section>
  );
}

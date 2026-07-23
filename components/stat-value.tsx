"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Splits values like "15+", "~50%", "1000/1000" or "3 services" into a
 * countable number plus whatever wraps it, so the digits can animate.
 */
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/s);

  if (!match) return null;

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
  };
}

export default function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? 0 : null);

  useEffect(() => {
    if (!parsed || !inView) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(parsed.target);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      // rAF can report a timestamp from before `start`, which would otherwise
      // ease to a negative value on the first frame.
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      // ease-out so the number settles rather than stopping dead
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * parsed.target));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed?.target]);

  if (!parsed) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {parsed.prefix}
      {display ?? 0}
      {parsed.suffix}
    </span>
  );
}

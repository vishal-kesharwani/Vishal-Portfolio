"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.45);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-[58rem] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading kicker="Get in touch">Contact me</SectionHeading>

      <div className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 font-mono text-sm font-medium text-accent">
              <FaEnvelope />
              Open for backend opportunities
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Let&apos;s talk about backend, cloud, or research work.
            </h3>

            <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">
              For internship opportunities, backend roles, cloud work, project
              collaborations, or a quick hello, send a message and I&apos;ll
              reply from my inbox at{" "}
              <span className="font-semibold text-ink">
                vishalkes1378@gmail.com
              </span>
              .
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface-2 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  Response window
                </p>
                <p className="mt-1 font-semibold text-ink">
                  Usually within 24 hours
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-surface-2 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  Direct email
                </p>
                <p className="mt-1 font-semibold text-ink">
                  vishalkes1378@gmail.com
                </p>
              </div>
            </div>
          </div>

          <form
            className="grid gap-4 rounded-[1.5rem] border border-line bg-surface-2 p-5"
            action="https://formsubmit.co/vishalkes1378@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label className="grid gap-2">
              <span className="text-sm font-medium text-muted">Your name</span>
              <input
                className="h-12 rounded-2xl border border-line bg-surface px-4 text-ink outline-none ring-0 transition focus:border-accent"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-muted">Your email</span>
              <input
                className="h-12 rounded-2xl border border-line bg-surface px-4 text-ink outline-none ring-0 transition focus:border-accent"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-muted">Message</span>
              <textarea
                className="min-h-36 rounded-2xl border border-line bg-surface px-4 py-3 text-ink outline-none ring-0 transition focus:border-accent"
                name="message"
                placeholder="Write your message here..."
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

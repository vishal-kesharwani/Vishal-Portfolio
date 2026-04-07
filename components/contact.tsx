"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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
      <SectionHeading>Contact me</SectionHeading>

      <div className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/15 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-200">
              <FaEnvelope />
              Open for opportunities
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
              Let&apos;s build something useful.
            </h3>

            <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-white/70 sm:text-base">
              For internship opportunities, project collaborations, freelance
              work, or a quick hello, send a message and I&apos;ll reply from
              my inbox at <span className="font-semibold">vishalkes1378@gmail.com</span>.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
                  Response window
                </p>
                <p className="mt-1 font-semibold text-gray-950 dark:text-white">
                  Usually within 24 hours
                </p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
                  Direct email
                </p>
                <p className="mt-1 font-semibold text-gray-950 dark:text-white">
                  vishalkes1378@gmail.com
                </p>
              </div>
            </div>
          </div>

          <form
            className="grid gap-4 rounded-[1.5rem] border border-black/5 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/5"
            action="https://formsubmit.co/vishalkes1378@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-white/75">
                Your name
              </span>
              <input
                className="h-12 rounded-2xl border border-black/5 bg-white px-4 text-gray-950 outline-none ring-0 transition focus:border-teal-400 dark:border-white/10 dark:bg-gray-950/30 dark:text-white"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-white/75">
                Your email
              </span>
              <input
                className="h-12 rounded-2xl border border-black/5 bg-white px-4 text-gray-950 outline-none ring-0 transition focus:border-teal-400 dark:border-white/10 dark:bg-gray-950/30 dark:text-white"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-white/75">
                Message
              </span>
              <textarea
                className="min-h-36 rounded-2xl border border-black/5 bg-white px-4 py-3 text-gray-950 outline-none ring-0 transition focus:border-teal-400 dark:border-white/10 dark:bg-gray-950/30 dark:text-white"
                name="message"
                placeholder="Write your message here..."
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-semibold text-gray-950 transition hover:scale-[1.02] active:scale-[0.98]"
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

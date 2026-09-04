"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";

function FloatingInput({
  label,
  name,
  type = "text",
  placeholder,
  delay = 0,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  delay?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <motion.label
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative grid gap-2"
    >
      <motion.span
        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none"
        animate={{
          y: isFocused || hasValue ? -28 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "var(--accent)" : "var(--muted)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label}
      </motion.span>
      <input
        className="h-12 rounded-2xl border border-line bg-surface px-4 pt-2 text-ink outline-none ring-0 transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,255,178,0.1)]"
        name={name}
        type={type}
        placeholder={isFocused ? placeholder : ""}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
      />
      {isFocused && (
        <motion.div
          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.label>
  );
}

function FloatingTextarea({
  label,
  name,
  placeholder,
  delay = 0,
}: {
  label: string;
  name: string;
  placeholder: string;
  delay?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <motion.label
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative grid gap-2"
    >
      <motion.span
        className="absolute left-4 top-4 text-sm text-muted pointer-events-none"
        animate={{
          y: isFocused || hasValue ? -8 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "var(--accent)" : "var(--muted)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label}
      </motion.span>
      <textarea
        className="min-h-36 rounded-2xl border border-line bg-surface px-4 pt-6 pb-3 text-ink outline-none ring-0 transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,255,178,0.1)]"
        name={name}
        placeholder={isFocused ? placeholder : ""}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
      />
      {isFocused && (
        <motion.div
          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.label>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.45);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-[58rem] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading kicker="Get in touch">Contact me</SectionHeading>

      <motion.div
        className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8"
        whileHover={{ boxShadow: "0 25px 50px -15px rgba(124,255,178,0.08)" }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 font-mono text-sm font-medium text-accent"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaEnvelope />
              </motion.div>
              Open for backend opportunities
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Let&apos;s talk about backend, cloud, or research work.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-sm leading-6 text-muted sm:text-base"
            >
              For internship opportunities, backend roles, cloud work, project
              collaborations, or a quick hello, send a message and I&apos;ll
              reply from my inbox at{" "}
              <span className="font-semibold text-ink">
                vishalkes1378@gmail.com
              </span>
              .
            </motion.p>

            <div className="grid gap-3 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-2xl border border-line bg-surface-2 p-4 transition-shadow hover:shadow-lg"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  Response window
                </p>
                <p className="mt-1 font-semibold text-ink">
                  Usually within 24 hours
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-2xl border border-line bg-surface-2 p-4 transition-shadow hover:shadow-lg"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  Direct email
                </p>
                <p className="mt-1 font-semibold text-ink">
                  vishalkes1378@gmail.com
                </p>
              </motion.div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="grid gap-4 rounded-[1.5rem] border border-line bg-surface-2 p-5"
            action="https://formsubmit.co/vishalkes1378@gmail.com"
            method="POST"
            onSubmit={() => setIsSubmitted(true)}
          >
            <input type="hidden" name="_subject" value="New portfolio inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <FloatingInput
              label="Your name"
              name="name"
              placeholder="Enter your name"
              delay={0.4}
            />

            <FloatingInput
              label="Your email"
              name="email"
              type="email"
              placeholder="you@example.com"
              delay={0.5}
            />

            <FloatingTextarea
              label="Message"
              name="message"
              placeholder="Write your message here..."
              delay={0.6}
            />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.button
                  key="submit"
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink"
                >
                  Send Message
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaPaperPlane className="text-sm" />
                  </motion.span>
                </motion.button>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent/20 px-6 py-3 font-semibold text-accent"
                >
                  <FaCheck /> Message Sent!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
}

import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFilePdf } from "react-icons/fa";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vishal-kesharwani",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-kesharwani-76708025b",
    icon: FaLinkedinIn,
  },
  {
    label: "Resume",
    href: "/Vishal_Kesharwani_Resume.pdf",
    icon: FaFilePdf,
  },
  {
    label: "Email",
    href: "mailto:vishalkes1378@gmail.com",
    icon: FaEnvelope,
  },
] as const;

export default function Footer() {
  return (
    <footer className="mb-10 px-4 pt-4 text-center text-sm text-slate-500 dark:text-slate-400">
      <p className="mb-3 font-medium text-slate-700 dark:text-white/80">
        Vishal Kesharwani
      </p>
      <p className="mx-auto max-w-xl leading-6 text-slate-600 dark:text-slate-400">
        Backend-first portfolio shaped around Java, Spring Boot, AWS, and
        resume-aligned project work.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {footerLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-300/30 hover:bg-teal-300/10 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            >
              <Icon />
              {link.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

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
    icon: FiDownload,
    download: true,
  },
  {
    label: "Email",
    href: "mailto:vishalkes1378@gmail.com",
    icon: FaEnvelope,
  },
] as const;

export default function Footer() {
  return (
    <footer className="mb-16 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-line bg-surface px-6 py-14 text-center sm:px-10 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
          Let&apos;s work together
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something reliable.
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                download={"download" in link ? "Vishal_Kesharwani_Resume.pdf" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-5 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-accent/40"
              >
                <Icon />
                {link.label}
              </a>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-md text-xs leading-6 text-faint">
          Vishal Kesharwani — Backend / DevOps engineer shaped around Java,
          Spring Boot, Kafka, and AWS.
        </p>
      </div>
    </footer>
  );
}

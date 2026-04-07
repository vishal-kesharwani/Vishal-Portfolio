import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import ArogyaImg from "@/public/arogya.png";
import SocialyticsImg from "@/public/socialytics.jpeg";
import reportImg from "@/public/reportease.jpg";

// Navigation Links
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Cloud Lab", hash: "#cloud-lab" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Internships", hash: "#internships" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

// Experience Data
export const experiencesData = [
  {
    title: "Datathon'25 1st Runner Up (TY Category)",
    description:
      "I built a game-based learning platform with React, Node.js, and real-time analytics.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025 March",
  },
  {
    title: "Cavista Tech Hackathon 1st Runner-Up",
    description:
      "I worked on an AI/ML portal for HomeHealth with predictions and a health chatbot.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025 February",
  },
  {
    title: "Smart India Hackathon Grand Finalist",
    description:
      "I contributed to a cloud-based annual report generation portal that reached the national finals.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024 December",
  },
  {
    title: "E-Summit Ideathon 2024 Winner",
    description:
      "I helped design an AI-powered website to streamline college report generation.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024 November",
  },
] as const;

// Internship Data
export const internshipsData = [
  {
    company: "SteepGraph System Private Limited",
    role: "Backend Intern - Java",
    duration: "9 Feb 2026 - 30 Jun 2026",
    status: "In progress",
    highlights: [
      "ETL workflows and backend data processing",
      "Internal dashboard data visualization support",
      "3DX Platform Engineer tasks and integrations",
      "Mail Bridge project development and maintenance",
      "Deploying and validating services in a production-style flow",
    ],
  },
] as const;

// Projects Data
export const projectsData = [
  {
    title: "Social Media Performance Analysis",
    description:
      "I built an AI-driven analytics platform with LangChain and Astra DB for quick social insights.",
    tags: ["Langchain", "React.js", "Data Visualization"],
    icons: [
      "simple-icons:langchain",
      "skill-icons:react-dark",
      "vscode-icons:file-type-astro",
    ],
    imageUrl: SocialyticsImg,
    githubLink: "https://github.com/HBTK/Social-Media-Performance",
  },
  {
    title: "ReportEase - SaaS Platform",
    description:
      "I designed and shipped a cloud-based report automation system with RBAC and deployment-ready structure.",
    tags: ["AWS", "MERN Stack", "RBAC"],
    icons: ["skill-icons:aws-dark", "skill-icons:mongodb", "skill-icons:react-dark"],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/v_07",
  },
  {
    title: "Aarogya",
    description:
      "I developed an AI-powered healthcare platform with multimodal analysis and real-time treatment insights.",
    tags: ["Python", "Keras", "AI/ML", "Web Scraping", "HTML", "CSS", "JavaScript", "Healthcare"],
    icons: [
      "logos:python",
      "simple-icons:keras",
      "skill-icons:javascript",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
    ],
    imageUrl: ArogyaImg,
    githubLink: "https://github.com/virajmandlik/Temp",
    demoLink: "",
  },
] as const;

// Skills Data
export const skillsData = [
  { name: "Java", icon: "logos:java" },
  { name: "C++", icon: "skill-icons:cpp" },
  { name: "MongoDB", icon: "skill-icons:mongodb" },
  { name: "Red Hat Linux", icon: "simple-icons:redhat" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "AWS", icon: "simple-icons:amazonaws" },
  { name: "Docker", icon: "simple-icons:docker" },
  { name: "EC2", icon: "simple-icons:amazonaws" },
  { name: "GitHub Actions", icon: "simple-icons:githubactions" },
  { name: "DevOps", icon: "mdi:pipe" },
  { name: "CI/CD", icon: "mdi:source-branch" },
  { name: "Selenium", icon: "logos:selenium" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
] as const;

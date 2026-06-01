import React from "react";
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
    title: "SIH 2024 Grand Finalist",
    description:
      "I helped build a cloud-native report generation platform that reached the national finals.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2026",
  },
  {
    title: "E-Summit Ideathon 2024 Winner",
    description:
      "I designed an AI-powered workflow for streamlining report generation and delivery.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024",
  },
  {
    title: "Cavista Tech Hackathon Runner-Up",
    description:
      "I built a practical AI/ML solution with predictions, product thinking, and fast iteration.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025",
  },
  {
    title: "Datathon '25 Runner-Up",
    description:
      "I shipped a data-driven learning experience with React, Node.js, and analytics logic.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025",
  },
] as const;

// Internship Data
export const internshipsData = [
  {
    company: "SteepGraph System Private Limited",
    role: "Backend Intern - Java",
    duration: "9 Feb 2026 - 30 Jun 2026",
    status: "In progress",
    techStack: [
      "Java",
      "Spring Boot",
      "AngularJS",
      "Office.js",
      "ETL",
      "PostgreSQL",
      "3DEXPERIENCE PLM",
    ],
    highlights: [
      "Optimized ETL validation workflows with debouncing, cutting redundant PostgreSQL queries by about 50%.",
      "Refactored export/import mapping from single lookup to list-based multi-lookup for faster data resolution.",
      "Designed a REST API for backend table suggestions to improve frontend usability for new users.",
      "Moved controller-layer exception handling into service-layer architecture with structured logging.",
    ],
  },
  {
    company: "SortUs",
    role: "Cloud & DevOps Intern",
    duration: "Jun 2025 - Aug 2025",
    status: "Completed",
    techStack: [
      "Node.js",
      "MongoDB",
      "AWS Lambda",
      "GitHub Actions",
      "REST APIs",
      "JIRA",
    ],
    highlights: [
      "Built scalable Node.js and MongoDB backend modules with clean REST API documentation.",
      "Automated serverless deployments using AWS Lambda and GitHub Actions.",
      "Managed Agile sprint execution and task tracking in JIRA.",
    ],
  },
] as const;

// Projects Data
export const projectsData = [
  {
    // Replace this image and link with your latest project screenshot/repo.
    title: "ReportEase - Annual Report Generation Platform",
    description:
      "I built a cloud-native report generation platform on AWS EC2 and S3 with RBAC, Dockerized deployment, and GitHub Actions CI/CD.",
    tags: ["MERN", "AWS EC2/S3", "Docker", "GitHub Actions", "SQL"],
    icons: [
      "skill-icons:react-dark",
      "simple-icons:amazonaws",
      "simple-icons:docker",
      "simple-icons:githubactions",
    ],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/v_07",
  },
  {
    // Replace this image and link with your latest project screenshot/repo.
    title: "AI-Based Bone Age Assessment System",
    description:
      "I built a three-model ensemble for X-ray age prediction with preprocessing, checkpoints, and reproducible training runs.",
    tags: ["Python", "TensorFlow", "EfficientNet", "OpenCV", "CNN"],
    icons: [
      "logos:python",
      "logos:tensorflow",
      "simple-icons:opencv",
      "mdi:brain",
    ],
    imageUrl: SocialyticsImg,
    githubLink: "",
  },
  {
    // Replace this image and link with your latest project screenshot/repo.
    title: "Secure Defense Framework - NGO Donation Portal",
    description:
      "I designed a zero-trust donation portal with authentication, RBAC, CSRF protection, audit logging, and live attack simulation checks.",
    tags: ["Python", "SQLite", "RBAC", "CSRF", "Security"],
    icons: [
      "logos:python",
      "mdi:shield-lock-outline",
      "mdi:bug-outline",
      "mdi:network-outline",
    ],
    imageUrl: ArogyaImg,
    githubLink: "",
  },
] as const;

// Skills Data
export const skillsData = [
  { name: "Java", icon: "logos:java" },
  { name: "Spring Boot", icon: "simple-icons:spring" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "ReactJS", icon: "logos:react" },
  { name: "JavaScript", icon: "skill-icons:javascript" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "AWS", icon: "simple-icons:amazonaws" },
  { name: "EC2", icon: "mdi:cloud-outline" },
  { name: "S3", icon: "mdi:bucket-outline" },
  { name: "Lambda", icon: "simple-icons:awslambda" },
  { name: "Docker", icon: "simple-icons:docker" },
  { name: "Kubernetes", icon: "simple-icons:kubernetes" },
  { name: "GitHub Actions", icon: "simple-icons:githubactions" },
  { name: "Jenkins", icon: "simple-icons:jenkins" },
  { name: "MongoDB", icon: "skill-icons:mongodb" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "JIRA", icon: "logos:jira" },
  { name: "Office.js", icon: "mdi:microsoft-office" },
  { name: "3DEXPERIENCE PLM", icon: "mdi:cube-outline" },
  { name: "AWS CLF-C02", icon: "mdi:certificate-outline" },
] as const;

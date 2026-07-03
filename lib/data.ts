import React from "react";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import ArogyaImg from "@/public/arogya.png";
import SocialyticsImg from "@/public/socialytics.png";
import reportImg from "@/public/reportease.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Cloud Lab", hash: "#cloud-lab" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Internships", hash: "#internships" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const resumeHighlights = [
  {
    label: "APIs shipped",
    value: "15+",
    detail: "Production-grade backend endpoints in Java and Spring Boot",
  },
  {
    label: "ETL reduction",
    value: "~50%",
    detail: "Fewer redundant PostgreSQL lookups after debouncing",
  },
  {
    label: "Cloud cert",
    value: "1000/1000",
    detail: "AWS Certified Cloud Practitioner",
  },
  {
    label: "Finalist work",
    value: "SIH + GRID",
    detail: "National-level hackathon and innovation recognition",
  },
] as const;

export const focusPoints = [
  "Java backend development",
  "Spring Boot, Spring Security, and Spring Data JPA",
  "AWS, Docker, and CI/CD",
  "React, TypeScript, and full-stack delivery",
] as const;

export const experiencesData = [
  {
    title: "AWS Certified Cloud Practitioner",
    description:
      "Achieved a perfect 1000/1000 score on the CLF-C02 certification and use that foundation in day-to-day cloud work.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "Certification",
  },
  {
    title: "Smart India Hackathon 2024",
    description:
      "Reached the national grand finals with a solution focused on product quality, delivery, and practical problem solving.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024",
  },
  {
    title: "Flipkart Grid 7.0",
    description:
      "National finalist in the top 10 out of 1,600+ teams for a computer-vision traffic violation detection platform.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024",
  },
  {
    title: "Leadership + Hackathons",
    description:
      "Won MIT AOE E-Summit Ideathon 2024, placed runner-up at Cavista Tech Hackathon and Datathon 2025, and contributed as ACM design lead.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024-2025",
  },
] as const;

export const internshipsData = [
  {
    company: "SteepGraph Systems Private Limited",
    role: "Backend Developer Intern",
    duration: "Feb 2026 - Jun 2026",
    status: "Completed",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "AngularJS",
      "ETL",
      "PostgreSQL",
      "3DEXPERIENCE PLM",
    ],
    highlights: [
      "Built 15+ enterprise REST APIs with secure endpoint access and service-layer architecture.",
      "Implemented debouncing in ETL validation flows to cut redundant PostgreSQL lookups by nearly 50%.",
      "Contributed to modular service-layer components that follow SOLID and Clean Architecture principles.",
      "Supported enterprise data migration pipelines and improved controller-to-service error handling.",
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
      "Jira",
    ],
    highlights: [
      "Built scalable Node.js and MongoDB backend modules with documented REST APIs.",
      "Automated serverless deployments with AWS Lambda and GitHub Actions.",
      "Managed sprint execution and task tracking in Jira within an Agile/Scrum flow.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Knowledge Nexus - Full-Stack Mentorship Platform",
    description:
      "Secure mentorship platform with React, TypeScript, Spring Boot, PostgreSQL, JWT authentication, WebSocket chat, and Google OAuth/Calendar integrations.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "OAuth2"],
    icons: [
      "skill-icons:react-dark",
      "logos:typescript-icon",
      "simple-icons:spring",
      "simple-icons:postgresql",
    ],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/NEXUS",
    outcomes: [
      "JWT and Google OAuth2 authentication",
      "Realtime chat with WebSocket/STOMP",
      "Google Calendar scheduling and Meet links",
    ],
  },
  {
    title: "Pediatric Bone Age Assessment",
    description:
      "Deep-learning research pipeline for automated bone age estimation from X-ray images, with ensemble modeling, Grad-CAM interpretability, and reproducible experiments.",
    tags: ["Python", "TensorFlow/Keras", "CNN Ensembles", "Grad-CAM", "Research"],
    icons: [
      "logos:python",
      "logos:tensorflow",
      "simple-icons:opencv",
      "mdi:brain",
    ],
    imageUrl: SocialyticsImg,
    githubLink: "",
    paperLink:
      "https://drive.google.com/file/d/1Dnm-DW_VXC2RYdU11xvGRA2hKdlq77Dv/view?usp=sharing",
    outcomes: [
      "MAE of 6.79 months",
      "R2 of 0.951 on an 85/15 split",
      "Conference paper with faculty supervision",
    ],
  },
  {
    title: "Secure Defense Framework - Zero Trust Donation Portal",
    description:
      "Security-focused donation portal with authentication, RBAC, CSRF protection, audit logging, and attack simulation coverage for OWASP-style issues.",
    tags: ["Python", "SQLite", "RBAC", "CSRF", "Security"],
    icons: [
      "logos:python",
      "mdi:shield-lock-outline",
      "mdi:bug-outline",
      "mdi:network-outline",
    ],
    imageUrl: ArogyaImg,
    githubLink: "https://github.com/vishal-kesharwani/ngo-donation-portal",
    outcomes: [
      "Simulated BOLA, brute-force, and route tampering attacks",
      "Audit logging and zero-trust access patterns",
      "Wireshark and Nmap-based network analysis",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "simple-icons:spring" },
      { name: "Spring Security", icon: "simple-icons:springsecurity" },
      { name: "Spring Data JPA", icon: "simple-icons:spring" },
      { name: "Hibernate", icon: "simple-icons:hibernate" },
      { name: "REST APIs", icon: "mdi:api" },
      { name: "JWT", icon: "mdi:shield-key-outline" },
      { name: "OAuth2", icon: "mdi:account-key-outline" },
      { name: "WebSocket", icon: "mdi:message-processing-outline" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Java", icon: "logos:java" },
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "skill-icons:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "SQL", icon: "mdi:database-outline" },
      { name: "C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "AngularJS", icon: "logos:angular-icon" },
      { name: "Axios", icon: "simple-icons:axios" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "skill-icons:mongodb" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "SQLite", icon: "logos:sqlite" },
    ],
  },
  {
    title: "Cloud / DevOps",
    items: [
      { name: "AWS", icon: "simple-icons:amazonaws" },
      { name: "EC2", icon: "mdi:server-outline" },
      { name: "S3", icon: "mdi:bucket-outline" },
      { name: "Lambda", icon: "simple-icons:awslambda" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "Jenkins", icon: "simple-icons:jenkins" },
      { name: "CI/CD", icon: "mdi:pipe" },
    ],
  },
  {
    title: "AI / CS / Tools",
    items: [
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Keras", icon: "simple-icons:keras" },
      { name: "Grad-CAM", icon: "mdi:heat-pump-outline" },
      { name: "JUnit", icon: "simple-icons:junit5" },
      { name: "Mockito", icon: "simple-icons:mockito" },
      { name: "Selenium", icon: "simple-icons:selenium" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Jira", icon: "logos:jira" },
      { name: "Postman", icon: "simple-icons:postman" },
    ],
  },
] as const;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import ArogyaImg from "@/public/arogya.png";
import SocialyticsImg from "@/public/socialytics.jpeg";
import reportImg from "@/public/reportease.jpg";

// Navigation Links
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

// Experience Data
export const experiencesData = [
  {
    title: "Datathon'25 1st Runner Up (TY Category)",
    description: "Developed a game-based learning platform using React and Node.js with real-time analytics",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025 March"
  },
  {
    title: "Cavista Tech Hackathon 1st Runner-Up",
    description: "Created AI/ML based portal for HomeHealth to remotely predict and recommend the best home health care services. AI chatbot for health-related queries.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2025 February"
  },
  {
    title: "Smart India Hackathon Grand Finalist",
    description: "Selected among top nationwide teams for implementation of a cloud-based, AI powered Annual Report Generation Portal",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024 December"
  },
  {
    title: "E-Summit Ideathon 2024 Winner",
    description: "An AI-powered website to streamline college report generation for better efficiency.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024 November"
  }
] as const;

// Projects Data
export const projectsData = [
  {
    title: "Social Media Performance Analysis",
    description: "AI-driven analytics platform using Langchain & Astra DB (60% efficiency improvement).",
    tags: ["Langchain", "React.js", "Data Visualization"],
    icons: ["simple-icons:langchain", "skill-icons:react-dark", "vscode-icons:file-type-astro"],
    imageUrl: SocialyticsImg,
    githubLink: "https://github.com/HBTK/Social-Media-Performance",
  },
  {
    title: "ReportEase - SaaS Platform",
    description: "Cloud-based report automation system with RBAC integration (50% effort reduction).",
    tags: ["AWS", "MERN Stack", "RBAC"],
    icons: ["skill-icons:aws-dark", "skill-icons:mongodb", "skill-icons:react-dark"],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/v_07",
  },
  {
    title: "Aarogya",
    description: "AI-powered healthcare platform with multimodal analysis and real-time treatment insights combining Ayurveda & Allopathy",
    tags: ["Python", "Keras", "AI/ML", "Web Scraping", "HTML", "CSS", "JavaScript", "Healthcare"],
    icons: ["logos:python", "simple-icons:keras", "skill-icons:javascript", "vscode-icons:file-type-html", "vscode-icons:file-type-css"],
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
  { name: "Red Hat Linux", icon: "logos:redhat" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Selenium", icon: "logos:selenium" },
  { name: "TensorFlow", icon: "logos:tensorflow" },

  
] as const;

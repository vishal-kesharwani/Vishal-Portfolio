import React from "react";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import ArogyaImg from "@/public/arogya.png";
import SocialyticsImg from "@/public/socialytics.png";
import reportImg from "@/public/reportease.png";
import jobTrackerImg from "@/public/jobtracker.png";

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
    label: "Event-driven",
    value: "3 services",
    detail: "Kafka microservices on Kubernetes with GitOps delivery",
  },
] as const;

export const focusPoints = [
  "Java backend development",
  "Spring Boot, Spring Security, and Spring Data JPA",
  "Event-driven systems with Apache Kafka",
  "Kubernetes, ArgoCD, Terraform, and CI/CD",
  "Observability with Prometheus, Grafana, and OpenTelemetry",
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
      "Reached Round 2 with Drishaak, an edge-based traffic-violation detection system, ranking 1582 of 10,000+ submissions.",
    icon: React.createElement(BiSolidCaretUpCircle),
    date: "2024",
  },
  {
    title: "Leadership + Hackathons",
    description:
      "Won MITAOE E-Summit Ideathon 2024, first runner-up at Cavista Tech Hackathon, runner-up at Datathon 2025, and Core Member and Design Lead of the ACM Student Chapter.",
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
      "Angular",
      "ETL",
      "gRPC",
      "PostgreSQL",
      "Gradle",
    ],
    highlights: [
      "Designed 15+ production-grade REST APIs with secure endpoint access via Spring Security, managing builds and dependencies with Gradle.",
      "Optimized ETL validation with debouncing logic that cut redundant database lookups by 50%, plus a real-time SQL table extractor driven by live DB metadata.",
      "Managed a modular extract-transform-load pipeline on a master-slave node architecture with gRPC-based inter-node communication.",
      "Maintained and fixed bugs across 10+ modular service-layer components following SOLID and Clean Architecture, and reviewed merge requests.",
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
      "Automated serverless deployments with AWS Lambda and GitHub Actions, cutting manual release effort by an estimated 30%.",
      "Managed sprint execution and task tracking in Jira within an Agile/Scrum flow.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Cloud-Native Job Application Tracker",
    description:
      "Event-driven observability platform built from three independent Spring Boot microservices that communicate only through Kafka events, deployed to Kubernetes through ArgoCD GitOps with a full Grafana LGTM observability stack.",
    tags: [
      "Java 21",
      "Spring Boot",
      "Apache Kafka",
      "Kubernetes",
      "ArgoCD",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Redis",
      "PostgreSQL",
    ],
    icons: [
      "logos:java",
      "simple-icons:spring",
      "logos:kafka-icon",
      "logos:kubernetes",
      "logos:argo-icon",
      "logos:terraform-icon",
      "logos:prometheus",
      "logos:grafana",
    ],
    imageUrl: jobTrackerImg,
    githubLink: "https://github.com/vishal-kesharwani/JOB-APPLICATION-TRACKER",
    outcomes: [
      "Three services, zero direct service-to-service calls",
      "Redis read-model rebuildable by replaying the event log",
      "Prometheus, Loki, and Tempo traces via OpenTelemetry",
      "ArgoCD GitOps reconciliation with Terraform IaC for EKS",
    ],
  },
  {
    title: "Knowledge Nexus - Full-Stack Mentorship Platform",
    description:
      "Secure mentorship platform with React, TypeScript, Spring Boot, PostgreSQL, JWT authentication, WebSocket chat, a Kafka-based notification pipeline, and Google OAuth/Calendar integrations.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "JWT",
      "OAuth2",
    ],
    icons: [
      "skill-icons:react-dark",
      "logos:typescript-icon",
      "simple-icons:spring",
      "simple-icons:postgresql",
      "logos:kafka-icon",
      "logos:docker-icon",
    ],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/NEXUS",
    outcomes: [
      "JWT and Google OAuth2 authentication",
      "Realtime chat with WebSocket/STOMP",
      "Kafka-decoupled notification lifecycle",
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
    blurb: "Where most of my day goes: services, APIs, and auth.",
    accent: "amber",
    items: [
      { name: "Java", icon: "logos:java", core: true },
      { name: "Spring Boot", icon: "simple-icons:spring", core: true },
      { name: "Spring Security", icon: "simple-icons:springsecurity", core: true },
      { name: "Spring Data JPA", icon: "simple-icons:spring" },
      { name: "Hibernate", icon: "simple-icons:hibernate" },
      { name: "REST APIs", icon: "mdi:api", core: true },
      { name: "gRPC", icon: "logos:grpc" },
      { name: "JWT", icon: "mdi:shield-key-outline" },
      { name: "OAuth2", icon: "mdi:account-key-outline" },
      { name: "WebSocket", icon: "mdi:message-processing-outline" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
    ],
  },
  {
    title: "Languages",
    blurb: "The languages I reach for first.",
    accent: "slate",
    items: [
      { name: "Java", icon: "logos:java", core: true },
      { name: "Python", icon: "logos:python" },
      { name: "SQL", icon: "mdi:database-outline" },
      { name: "JavaScript", icon: "skill-icons:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    title: "Messaging & Caching",
    blurb: "Event-driven plumbing behind my microservice work.",
    accent: "orange",
    items: [
      { name: "Apache Kafka", icon: "logos:kafka-icon", core: true },
      { name: "Redis", icon: "logos:redis" },
      { name: "Event-driven design", icon: "mdi:transit-connection-variant", core: true },
      { name: "Read models", icon: "mdi:table-eye" },
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "How the code actually reaches a cluster.",
    accent: "teal",
    items: [
      { name: "AWS", icon: "simple-icons:amazonaws", core: true },
      { name: "EC2", icon: "mdi:server-outline" },
      { name: "S3", icon: "mdi:bucket-outline" },
      { name: "Lambda", icon: "simple-icons:awslambda" },
      { name: "IAM", icon: "mdi:account-key-outline" },
      { name: "RDS", icon: "mdi:database-cog-outline" },
      { name: "Docker", icon: "simple-icons:docker", core: true },
      { name: "Kubernetes", icon: "logos:kubernetes", core: true },
      { name: "ArgoCD", icon: "logos:argo-icon", core: true },
      { name: "Terraform", icon: "logos:terraform-icon" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "CI/CD", icon: "mdi:pipe" },
      { name: "Maven", icon: "logos:maven" },
      { name: "Gradle", icon: "logos:gradle" },
    ],
  },
  {
    title: "Observability & Testing",
    blurb: "Proving a system behaves once it is live.",
    accent: "violet",
    items: [
      { name: "Prometheus", icon: "logos:prometheus", core: true },
      { name: "Grafana", icon: "logos:grafana", core: true },
      { name: "OpenTelemetry", icon: "logos:opentelemetry-icon", core: true },
      { name: "Loki", icon: "mdi:text-search" },
      { name: "Tempo", icon: "mdi:timeline-clock-outline" },
      { name: "JUnit", icon: "simple-icons:junit5" },
      { name: "Mockito", icon: "mdi:flask-outline" },
      { name: "TestNG", icon: "mdi:test-tube" },
      { name: "Selenium", icon: "simple-icons:selenium" },
    ],
  },
  {
    title: "Frontend & Databases",
    blurb: "Enough full-stack reach to ship a feature end to end.",
    accent: "sky",
    items: [
      { name: "React.js", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Axios", icon: "simple-icons:axios" },
      { name: "PostgreSQL", icon: "logos:postgresql", core: true },
      { name: "MongoDB", icon: "skill-icons:mongodb" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "SQLite", icon: "logos:sqlite" },
    ],
  },
  {
    title: "Core CS & AI",
    blurb: "The fundamentals and the research side of my work.",
    accent: "rose",
    items: [
      { name: "DSA", icon: "mdi:graph-outline", core: true },
      { name: "OOP", icon: "mdi:cube-outline" },
      { name: "SOLID", icon: "mdi:shape-outline" },
      { name: "System Design", icon: "mdi:sitemap-outline", core: true },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Keras", icon: "simple-icons:keras" },
      { name: "Grad-CAM", icon: "mdi:heat-pump-outline" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Jira", icon: "logos:jira" },
      { name: "Postman", icon: "simple-icons:postman" },
    ],
  },
] as const;

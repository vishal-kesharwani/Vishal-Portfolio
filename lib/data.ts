import React from "react";
import { FiCloud, FiAward, FiTarget, FiUsers } from "react-icons/fi";
import reportImg from "@/public/reportease.png";
import jobTrackerImg from "@/public/jobtracker.png";
import sevaImg from "@/public/seva-mahila-udyog.png";
import cloudlensImg from "@/public/cloudlens-ai.png";

// Order must match the section order in app/page.tsx so the nav and the
// scroll-spy highlight stay in sync.
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Cloud Lab", hash: "#cloud-lab" },
  { name: "Production", hash: "#production" },
  { name: "Skills", hash: "#skills" },
  { name: "Internships", hash: "#internships" },
  { name: "Achievements", hash: "#achievements" },
  { name: "Education", hash: "#education" },
  { name: "Build Log", hash: "#build-log" },
  { name: "Contact", hash: "#contact" },
] as const;

// What the header actually renders: fewer, grouped labels. Decoupled from
// `links` above so the full scroll-spy section list can stay granular while
// the nav itself stays minimal. navGroups maps each nav label to the real
// section names (from `links`) that should light it up as active.
export const navLinks = [
  { name: "Work", hash: "#projects" },
  { name: "Systems", hash: "#cloud-lab" },
  { name: "Experience", hash: "#internships" },
  { name: "About", hash: "#about" },
] as const;

export const navGroups: Record<string, ReadonlyArray<(typeof links)[number]["name"]>> = {
  Work: ["Projects"],
  Systems: ["Cloud Lab", "Production", "Skills"],
  Experience: ["Internships", "Achievements", "Education", "Build Log"],
  About: ["About"],
};

export const resumeHighlights = [
  {
    label: "Customers",
    value: "60+",
    detail: "Live on Seva Mahila Udyog, an order-management platform in production",
  },
  {
    label: "REST APIs",
    value: "45+",
    detail: "Endpoints across 13 domain modules on Seva Mahila Udyog",
  },
  {
    label: "Microservices",
    value: "3",
    detail: "Kafka-only event-driven services on Kubernetes with GitOps delivery",
  },
  {
    label: "DB lookups",
    value: "-50%",
    detail: "Cut via debouncing logic in ETL validation at SteepGraph",
  },
  {
    label: "AWS score",
    value: "1000/1000",
    detail: "AWS Certified Cloud Practitioner (CLF-C02)",
  },
  {
    label: "Internships",
    value: "2",
    detail: "SteepGraph Systems and SortUs",
  },
] as const;

export const howIThink = [
  {
    step: "01",
    title: "Build",
    tagline: "APIs that are predictable.",
    tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "REST"],
  },
  {
    step: "02",
    title: "Connect",
    tagline: "Systems that communicate asynchronously.",
    tags: ["Kafka", "WebSocket", "Event-driven design", "Microservices"],
  },
  {
    step: "03",
    title: "Ship",
    tagline: "Infrastructure that doesn't need babysitting.",
    tags: ["Docker", "Kubernetes", "Terraform", "ArgoCD", "AWS"],
  },
] as const;

export const experiencesData = [
  {
    title: "AWS Certified Cloud Practitioner",
    description:
      "Achieved a perfect 1000/1000 score on the CLF-C02 certification and use that foundation in day-to-day cloud work.",
    icon: React.createElement(FiCloud),
    date: "Certification",
  },
  {
    title: "Smart India Hackathon 2024",
    description:
      "Reached the national grand finals with a solution focused on product quality, delivery, and practical problem solving.",
    icon: React.createElement(FiAward),
    date: "2024",
  },
  {
    title: "Flipkart Grid 7.0",
    description:
      "Reached Round 2 with Drishaak, an edge-based traffic-violation detection system, ranking 1582 of 10,000+ submissions.",
    icon: React.createElement(FiTarget),
    date: "2024",
  },
  {
    title: "Leadership + Hackathons",
    description:
      "Won MITAOE E-Summit Ideathon 2024, first runner-up at Cavista Tech Hackathon, runner-up at Datathon 2025, and Core Member and Design Lead of the ACM Student Chapter.",
    icon: React.createElement(FiUsers),
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
      "Spring MVC",
      "Spring Security",
      "PostgreSQL",
      "Gradle",
    ],
    highlights: [
      "Designed 15+ production-grade REST APIs using Java, Spring MVC, and PostgreSQL for large-scale enterprise applications, secured via Spring Security, managing builds with Gradle.",
      "Optimized ETL validation with debouncing logic that cut redundant database lookups by 50%, plus a real-time SQL table extractor auto-suggesting table names from live DB metadata.",
      "Maintained and fixed bugs across 10+ modular service-layer components, reviewed merge requests, and contributed to enterprise data migration pipelines.",
      "Built an ARAS-to-email bridge as a side project, integrating with the ARAS PLM platform to route and deliver item data through automated email notifications.",
    ],
  },
  {
    company: "SortUs",
    role: "Cloud & DevOps Intern",
    duration: "Jun 2025 - Aug 2025",
    status: "Completed",
    techStack: ["Node.js", "MongoDB", "AWS Lambda", "GitHub Actions", "REST APIs"],
    highlights: [
      "Automated serverless deployments via AWS Lambda and GitHub Actions in a real production workflow, cutting manual release effort by an estimated 30%.",
      "Built scalable Node.js and MongoDB backend modules and documented REST APIs for frontend-backend integration.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Seva Mahila Udyog - Food Business Management App",
    description:
      "Full-stack order-management platform live in production for a home-food business: live payments, order lifecycle, and admin operations across 13 domain modules.",
    tags: ["REST APIs", "JWT", "bcrypt", "OTP", "Rate Limiting", "2FA"],
    icons: [
      "mdi:api",
      "mdi:shield-key-outline",
      "mdi:lock-outline",
      "mdi:cellphone-key",
      "mdi:credit-card-outline",
    ],
    imageUrl: sevaImg,
    githubLink: "",
    liveLabel: "Live in production",
    outcomes: [
      "60+ customers, 45+ REST endpoints across 13 domain modules",
      "Stateless auth with JWT and bcrypt-hashed, expiring OTPs",
      "Rate limiting and two-factor admin authentication",
      "Found and fixed a critical payment-integrity bug via server-side validation",
    ],
  },
  {
    title: "Cloud-Native Job Application Tracker",
    description:
      "Event-driven microservices platform: three independent Spring Boot services that communicate exclusively through Kafka, deployed to Kubernetes with Terraform-provisioned EKS infrastructure and ArgoCD GitOps delivery.",
    tags: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Kubernetes",
      "Terraform",
      "ArgoCD",
      "Flyway",
      "Prometheus",
      "Grafana",
    ],
    icons: [
      "logos:java",
      "simple-icons:spring",
      "logos:kafka-icon",
      "logos:kubernetes",
      "logos:terraform-icon",
      "logos:argo-icon",
      "logos:prometheus",
      "logos:grafana",
    ],
    imageUrl: jobTrackerImg,
    githubLink: "https://github.com/vishal-kesharwani/JOB-APPLICATION-TRACKER",
    outcomes: [
      "Three services, zero direct service-to-service calls",
      "Self-healing under pod failure, verified autoscaling under load",
      "Terraform-provisioned EKS with ArgoCD GitOps reconciliation",
      "JWT-secured inter-service calls, schema evolution via Flyway",
    ],
  },
  {
    title: "Knowledge Nexus - Full-Stack Mentorship Platform",
    description:
      "Full-stack mentorship platform with JWT/OAuth2 authentication, mentor discovery, session booking, real-time chat, and a Kafka-based notification pipeline that keeps the booking flow responsive under load.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Spring Data JPA",
      "Kafka",
      "Docker",
      "JWT",
      "OAuth2",
    ],
    icons: [
      "skill-icons:react-dark",
      "logos:typescript-icon",
      "simple-icons:spring",
      "logos:kafka-icon",
      "logos:docker-icon",
    ],
    imageUrl: reportImg,
    githubLink: "https://github.com/vishal-kesharwani/NEXUS",
    outcomes: [
      "JWT and Google OAuth2 authentication",
      "Realtime chat with WebSocket",
      "Kafka-decoupled notifications keep booking responsive under load",
      "Automated Google Calendar scheduling, containerized via Docker Compose",
    ],
  },
  {
    title: "CloudLens-AI - Terraform Review & Billing Suggestion Platform",
    description:
      "Backend owned end-to-end for a platform that reviews AWS Terraform infrastructure and surfaces billing and cost-optimization suggestions, with database models managed through Alembic migrations.",
    tags: ["Python", "Terraform", "AWS", "Alembic", "REST APIs"],
    icons: [
      "logos:python",
      "logos:terraform-icon",
      "simple-icons:amazonaws",
      "mdi:database-sync-outline",
      "mdi:api",
    ],
    imageUrl: cloudlensImg,
    githubLink: "https://github.com/vidya-bingi-26/cloudlens-ai",
    outcomes: [
      "6 core backend modules: parser, pipeline, pricing, reviewer, rules, schemas",
      "Reviews Terraform configs and surfaces pricing suggestions",
      "Database models and schema migrations managed with Alembic",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Backend & Security",
    blurb: "Where most of my day goes: services, APIs, and auth.",
    accent: "amber",
    items: [
      { name: "Java", icon: "logos:java", core: true },
      { name: "Spring Boot", icon: "simple-icons:spring", core: true },
      { name: "Spring MVC", icon: "simple-icons:spring" },
      { name: "Spring Security", icon: "simple-icons:springsecurity", core: true },
      { name: "Spring Data JPA", icon: "simple-icons:spring" },
      { name: "REST APIs", icon: "mdi:api", core: true },
      { name: "JWT", icon: "mdi:shield-key-outline" },
      { name: "OAuth2", icon: "mdi:account-key-outline" },
      { name: "Flyway", icon: "mdi:database-sync-outline", core: true },
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
      { name: "Python", icon: "logos:python", core: true },
      { name: "SQL", icon: "mdi:database-outline" },
      { name: "JavaScript", icon: "skill-icons:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    title: "Event-Driven Systems",
    blurb: "The messaging layer behind my microservice work.",
    accent: "orange",
    items: [
      { name: "Apache Kafka", icon: "logos:kafka-icon", core: true },
      { name: "Event-driven design", icon: "mdi:transit-connection-variant", core: true },
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "How the code actually reaches a cluster.",
    accent: "teal",
    items: [
      { name: "AWS", icon: "simple-icons:amazonaws", core: true },
      { name: "EC2", icon: "mdi:server-outline" },
      { name: "Lambda", icon: "simple-icons:awslambda" },
      { name: "IAM", icon: "mdi:account-key-outline" },
      { name: "boto3", icon: "mdi:robot-outline" },
      { name: "Terraform", icon: "logos:terraform-icon", core: true },
      { name: "Kubernetes", icon: "logos:kubernetes", core: true },
      { name: "ArgoCD", icon: "logos:argo-icon", core: true },
      { name: "Docker", icon: "simple-icons:docker", core: true },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "CI/CD", icon: "mdi:pipe" },
      { name: "Gradle", icon: "logos:gradle" },
      { name: "Prometheus", icon: "logos:prometheus", core: true },
      { name: "Grafana", icon: "logos:grafana", core: true },
    ],
  },
  {
    title: "Databases & Frontend",
    blurb: "Enough full-stack reach to ship a feature end to end.",
    accent: "sky",
    items: [
      { name: "PostgreSQL", icon: "logos:postgresql", core: true },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "MongoDB", icon: "skill-icons:mongodb" },
      { name: "Alembic", icon: "mdi:database-sync-outline" },
      { name: "React.js", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Axios", icon: "simple-icons:axios" },
    ],
  },
  {
    title: "Core CS & Tools",
    blurb: "The fundamentals underneath all of it.",
    accent: "rose",
    items: [
      { name: "DSA", icon: "mdi:graph-outline", core: true },
      { name: "OOP", icon: "mdi:cube-outline" },
      { name: "SOLID", icon: "mdi:shape-outline" },
      { name: "System Design", icon: "mdi:sitemap-outline", core: true },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Postman", icon: "simple-icons:postman" },
    ],
  },
] as const;

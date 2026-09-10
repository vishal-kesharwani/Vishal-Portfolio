import React from "react";

export const navLinks = [
  { name: "WORK", hash: "#work" },
  { name: "SYSTEMS", hash: "#systems" },
  { name: "LAB", hash: "#lab" },
  { name: "JOURNAL", hash: "#journal" },
  { name: "ABOUT", hash: "#about" },
] as const;

export const heroMetrics = [
  { value: "15+", label: "Production REST APIs" },
  { value: "~50%", label: "Fewer DB Lookups" },
  { value: "~30%", label: "Less Manual Release" },
  { value: "1000", label: "AWS Score / 1000" },
  { value: "80+", label: "LeetCode Problems" },
];

export const projectsData = [
  {
    id: "01",
    title: "CLOUD-NATIVE JOB APPLICATION TRACKER",
    category: "FEATURED",
    label: "01 / DISTRIBUTED SYSTEM",
    headline: "Three services. Events instead of direct coupling.",
    description:
      "Three independent Spring Boot services communicating through Apache Kafka and deployed to Kubernetes on AWS EKS.",
    impact: ["3 INDEPENDENT SERVICES", "EVENT-DRIVEN", "SELF-HEALING"],
    tech: "Java · Spring Boot · Kafka · Redis · Kubernetes · AWS EKS · Docker · Terraform · ArgoCD · Flyway · Prometheus · Grafana",
    proof: [
      "3 independent services with zero direct calls",
      "Event-driven analytics with Redis read model",
      "Event-log replay for reliable data recovery",
      "Health probes and HPA autoscaling verified",
      "Full observability: Prometheus, Grafana, Loki, Tempo, OpenTelemetry",
    ],
    architecture: {
      flow: ["SERVICE A", "KAFKA", "SERVICE B", "KAFKA", "SERVICE C"],
    },
    why: [
      { q: "Why Kafka?", a: "Asynchronous communication between services. Decoupling lets each scale independently." },
      { q: "Why Redis?", a: "Read model for analytics workflows. Rebuilt through event-log replay." },
      { q: "Why Kubernetes?", a: "Self-healing and scaling without manual intervention." },
    ],
    githubLink: "https://github.com/vishal-kesharwani/JOB-APPLICATION-TRACKER",
  },
  {
    id: "02",
    title: "SEVA MAHILA UDYOG",
    category: "LIVE IN PRODUCTION",
    label: "02 / PRODUCTION SYSTEM",
    headline: "Software handling real business workflows.",
    description:
      "A full-stack order-management platform for a live food business covering ordering, payments, authentication and administration.",
    impact: ["60+ CUSTOMERS", "45+ REST APIs", "13 DOMAIN MODULES"],
    tech: "Java · Spring Boot · PostgreSQL · JWT · bcrypt · OTP · Rate Limiting · 2FA",
    proof: [
      "Live in production with real customers",
      "Found and fixed a payment-integrity issue",
      "Server-side validation for transaction safety",
      "JWT, bcrypt, OTP, Rate Limiting, 2FA",
    ],
    githubLink: "",
  },
  {
    id: "03",
    title: "KNOWLEDGE NEXUS",
    category: "FULL-STACK",
    label: "03 / REAL-TIME PLATFORM",
    headline: "Keeping the user workflow responsive while work continues behind the scenes.",
    description:
      "Full-stack mentorship platform with JWT/OAuth2 authentication, mentor discovery, session booking, real-time chat, and Kafka-based notifications.",
    impact: ["REAL-TIME CHAT", "KAFKA EVENTS", "OAUTH2"],
    tech: "React · TypeScript · Spring Boot · PostgreSQL · Kafka · Docker · JWT · OAuth2 · WebSocket/STOMP · Flyway · Google Calendar",
    proof: [
      "WebSocket/STOMP for real-time communication",
      "Kafka-decoupled notifications",
      "OAuth2 with Google Calendar integration",
      "Flyway database migrations",
    ],
    eventFlow: ["USER", "BOOK SESSION", "API", "EVENT", "KAFKA", "NOTIFICATION", "CALENDAR"],
    githubLink: "https://github.com/vishal-kesharwani/NEXUS",
  },
  {
    id: "04",
    title: "CLOUDLENS AI",
    category: "EXPLORING",
    label: "04 / AI + INFRASTRUCTURE",
    headline: "Making infrastructure easier to understand.",
    description:
      "A platform that reviews AWS Terraform infrastructure and surfaces billing and cost-optimization suggestions.",
    impact: ["TERRAFORM", "AWS", "AI ANALYSIS"],
    tech: "Python · Terraform · AWS · Alembic · REST APIs",
    proof: [
      "6 core backend modules: parser, pipeline, pricing, reviewer, rules, schemas",
      "Systems → AI bridge",
    ],
    bridge: true,
    githubLink: "https://github.com/vidya-bingi-26/cloudlens-ai",
  },
];

export const labExperiments = [
  {
    id: "01",
    question: "CAN A CODING AGENT SAFELY MODIFY AN UNFAMILIAR CODEBASE?",
    status: "EXPLORING" as const,
    expected: "Agent would struggle with multi-file context and cross-references.",
    tried: "Testing agent reasoning on multi-file codebases with varying complexity.",
    happened: "Context window management is critical — agents lose coherence beyond a threshold.",
    learned: "RAG-based code analysis is more reliable than raw context stuffing.",
    next: "Implement retrieval-augmented code analysis pipeline.",
  },
  {
    id: "02",
    question: "WHAT HAPPENS WHEN CONSUMERS FALL BEHIND UNDER BURST TRAFFIC?",
    status: "TESTED" as const,
    expected: "Consumers would lag but catch up after burst subsides.",
    tried: "Simulated consumer lag with burst traffic patterns on a test cluster.",
    happened: "Duplicate processing exposed an idempotency problem in message handling.",
    learned: "Idempotent consumers are non-negotiable in event-driven systems.",
    next: "Implement exactly-once semantics testing.",
  },
  {
    id: "03",
    question: "HOW MUCH ENGINEERING WORK CAN BE AUTOMATED?",
    status: "IN PROGRESS" as const,
    expected: "A simple CLI that parses Terraform state and suggests optimizations.",
    tried: "Building a parser for Terraform plan output with rule-based analysis.",
    happened: "Scope expanded from billing analysis to full infrastructure review.",
    learned: "Infrastructure-as-code has rich metadata that tools barely exploit.",
    next: "Add cloud cost correlation and drift detection.",
  },
];

export const systemsTabs = [
  {
    id: "API",
    label: "01 API",
    components: ["Authentication", "Database", "Event Bus", "Kafka", "Consumer"],
    decision: "Why stateless auth? — JWTs scale horizontally without session storage.",
    usedIn: ["Job Tracker", "Knowledge Nexus"],
  },
  {
    id: "EVENTS",
    label: "02 EVENTS",
    components: ["Producer", "Kafka Topic", "Consumer", "Offset", "Rebalance"],
    decision: "Why Kafka? — Decoupling services lets each scale independently.",
    usedIn: ["Job Tracker", "Knowledge Nexus"],
  },
  {
    id: "DATABASE",
    label: "03 DATABASE",
    components: ["Connection Pool", "PostgreSQL", "Flyway Migrations", "Read Replica"],
    decision: "Why Flyway? — Schema versioning prevents deployment drift.",
    usedIn: ["Knowledge Nexus", "Seva Mahila"],
  },
  {
    id: "MESSAGING",
    label: "04 MESSAGING",
    components: ["gRPC", "Inter-Node", "Master-Slave", "ETL Pipeline"],
    decision: "Why gRPC? — High-performance inter-node communication for distributed ETL.",
    usedIn: ["SteepGraph ETL"],
  },
  {
    id: "CONTAINER",
    label: "05 CONTAINER",
    components: ["Dockerfile", "Image", "Container", "Health Check", "Resource Limits"],
    decision: "Why containers? — Consistent environments from dev to production.",
    usedIn: ["Job Tracker", "Knowledge Nexus"],
  },
  {
    id: "CLUSTER",
    label: "06 CLUSTER",
    components: ["Kubernetes", "Pod", "Service", "Ingress", "HPA Autoscaler"],
    decision: "Why Kubernetes? — Self-healing and scaling without manual intervention.",
    usedIn: ["Job Tracker"],
  },
  {
    id: "DELIVERY",
    label: "07 DELIVERY",
    components: ["Git Push", "GitHub Actions", "ArgoCD", "Rollback", "Monitoring"],
    decision: "Why GitOps? — Declarative infrastructure with audit trails.",
    usedIn: ["Job Tracker", "SortUs"],
  },
];

export const experiencesData = [
  {
    year: "2026",
    company: "SteepGraph Systems",
    role: "Backend Developer Intern",
    duration: "Feb 2026 – Jun 2026",
    location: "Pune, India",
    highlights: [
      "15+ production-grade REST APIs using Java, Spring MVC, PostgreSQL, Spring Security",
      "ETL optimization with debouncing logic — ~50% fewer redundant database lookups",
      "Real-time SQL table extractor using live database metadata",
      "Service debugging across 10+ components",
      "Enterprise migration pipelines on 3DEXPERIENCE platform",
      "gRPC inter-node communication in master-slave ETL architecture",
      "Angular UI contribution integrated with backend REST APIs",
    ],
    keyMetric: "~50% fewer redundant database lookups",
    tech: ["Java", "Spring MVC", "PostgreSQL", "Spring Security", "gRPC", "ETL", "3DEXPERIENCE"],
  },
  {
    year: "2025",
    company: "SortUs",
    role: "Cloud & DevOps Intern",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote / Pune, India",
    highlights: [
      "AWS Lambda serverless deployments with GitHub Actions CI/CD",
      "Node.js and MongoDB backend modules",
      "Angular 17 frontend functionality",
      "~30% reduction in manual release effort",
    ],
    keyMetric: "~30% reduction in manual release effort",
    tech: ["Node.js", "MongoDB", "AWS Lambda", "GitHub Actions", "Angular", "TypeScript"],
  },
];

export const signals = [
  {
    title: "AWS CERTIFIED",
    value: "1000 / 1000",
    subtitle: "Cloud Practitioner CLF-C02",
    imageKey: "aws-cert",
    size: "large" as const,
  },
  {
    title: "SIH 2024",
    value: "GRAND FINALIST",
    subtitle: "National-level hackathon",
    imageKey: "sih-2024",
    size: "medium" as const,
  },
  {
    title: "CAVISTA TECH HACKATHON",
    value: "1ST RUNNER-UP",
    subtitle: "₹50,000 prize",
    imageKey: "cavista",
    size: "medium" as const,
  },
  {
    title: "FLIPKART GRID 7.0",
    value: "1582 / 10,000+",
    subtitle: "Round 2 — Edge-based traffic violation detection",
    imageKey: null,
    size: "small" as const,
  },
  {
    title: "DATATHON 2025",
    value: "RUNNER-UP",
    subtitle: "Campus datathon",
    imageKey: "datathon",
    size: "small" as const,
  },
  {
    title: "MITAOE E-SUMMIT IDEATHON",
    value: "WINNER",
    subtitle: "Innovation competition",
    imageKey: "ideathon",
    size: "small" as const,
  },
  {
    title: "ACM STUDENT CHAPTER",
    value: "DESIGN LEAD",
    subtitle: "Core Member & Design Lead, MITAOE",
    imageKey: null,
    size: "small" as const,
  },
  {
    title: "LEETCODE",
    value: "80+",
    subtitle: "Problems solved in Java",
    imageKey: null,
    size: "small" as const,
  },
];

export const buildLogEntries = [
  {
    date: "09 SEP 2026",
    tag: "AI",
    title: "Why I'm looking at coding agents",
    note: "I've spent years building backend systems. Now I'm interested in what happens when the software itself starts participating in the engineering loop.",
  },
  {
    date: "08 SEP 2026",
    tag: "SYSTEMS",
    title: "Kafka burst test exposed duplicate processing",
    note: "Idempotency issue discovered in consumer group — exactly-once semantics matter more than I thought.",
  },
  {
    date: "05 SEP 2026",
    tag: "KUBERNETES",
    title: "ConfigMap key mismatch caused pod crash loop",
    note: "Deployed another service and debugged a configuration issue that wasn't visible until runtime.",
  },
  {
    date: "28 AUG 2026",
    tag: "BUILD",
    title: "CloudLens AI backend modules complete",
    note: "6 core modules: parser, pipeline, pricing, reviewer, rules, schemas — the real engineering started at the boundaries.",
  },
  {
    date: "20 AUG 2026",
    tag: "CLOUD",
    title: "ArgoCD GitOps pipeline working end-to-end",
    note: "Automated deployment from Git push to cluster update. The feedback loop is finally tight.",
  },
  {
    date: "15 AUG 2026",
    tag: "FAILURE",
    title: "Pod failure during load test",
    note: "Learned about pod disruption budgets the hard way. The system recovered but it shouldn't have needed to.",
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "MIT Academy of Engineering, Pune",
    duration: "2022 – 2026",
    cgpa: "8.63 / 10",
    imageKey: "mit",
    highlights: [
      "Relevant coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Cloud Computing",
    ],
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "BNN College",
    duration: "2021 – 2022",
    cgpa: "71%",
    imageKey: "bnn",
    highlights: [
      "Science stream with Mathematics",
      "JEE Mains 2022: 93.91 Percentile",
      "MHCET 2022: 96.46 Percentile",
    ],
  },
  {
    degree: "Secondary (X)",
    institution: "Dr. Omprakash Agarwal English High School",
    duration: "2019 – 2020",
    cgpa: "85.20%",
    imageKey: "doa",
    highlights: [],
  },
];

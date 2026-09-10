import React from "react";

export const navLinks = [
  { num: "01", name: "HOME", hash: "#home" },
  { num: "02", name: "WORK", hash: "#work" },
  { num: "03", name: "LAB", hash: "#lab" },
  { num: "04", name: "SYSTEMS", hash: "#systems" },
  { num: "05", name: "JOURNAL", hash: "#log" },
  { num: "06", name: "ABOUT", hash: "#about" },
] as const;

export const statusMessages = [
  "BUILDING",
  "LEARNING",
  "SHIPPED",
  "EXPLORING",
  "TESTING",
];

export const stackLine = ["JAVA", "SPRING BOOT", "KAFKA", "KUBERNETES", "AWS", "AI"];

export const heroStats = [
  { value: "4+", label: "Major Projects" },
  { value: "2", label: "Internships" },
  { value: "6+", label: "Technologies in Depth" },
  { value: "1000/1000", label: "AWS Certified" },
  { value: "\u221E", label: "Curiosity" },
];

export const currentlyExploring = [
  {
    id: "01",
    title: "DISTRIBUTED SYSTEMS",
    description: "Can event-driven systems remain predictable when everything becomes asynchronous?",
    status: "DEEP" as const,
    tags: ["Kafka", "Consistency", "Fault Tolerance"],
  },
  {
    id: "02",
    title: "AI SYSTEMS",
    description: "Can coding agents reason about an unfamiliar codebase instead of just generating code?",
    status: "EXPLORING" as const,
    tags: ["Agents", "Tool Calling", "Evaluation"],
  },
  {
    id: "03",
    title: "CLOUD INFRASTRUCTURE",
    description: "How much infrastructure can be automated before it becomes invisible?",
    status: "BUILDING" as const,
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    id: "04",
    title: "DEVELOPER TOOLING",
    description: "Can software remove the boring parts of software engineering?",
    status: "CURIOUS" as const,
    tags: ["CLI", "Automation", "Code Intelligence"],
  },
];

export const thinkingProcess = [
  {
    step: "01",
    title: "UNDERSTAND",
    description: "Before using a technology, I want to know what\u2019s happening underneath.",
  },
  {
    step: "02",
    title: "BUILD",
    description: "The fastest way for me to learn is to build the thing.",
  },
  {
    step: "03",
    title: "BREAK",
    description: "Failure exposes what diagrams hide.",
  },
  {
    step: "04",
    title: "SHIP",
    description: "A project isn\u2019t complete until it survives outside localhost.",
  },
];

export const projectsData = [
  {
    id: "01",
    title: "SEVA MAHILA UDYOG",
    category: "LIVE IN PRODUCTION",
    headline: "Software that handles real orders, not demo data.",
    description:
      "A full-stack order-management platform for a live food business covering ordering, payments, authentication and administration.",
    impact: ["60+ CUSTOMERS", "45+ REST APIs", "13 DOMAIN MODULES"],
    tech: "Java \u00B7 Spring Boot \u00B7 PostgreSQL \u00B7 JWT \u00B7 bcrypt \u00B7 OTP \u00B7 Rate Limiting \u00B7 2FA",
    detail: "Found and fixed a payment-integrity issue through server-side validation.",
    githubLink: "",
  },
  {
    id: "02",
    title: "CLOUD-NATIVE JOB APPLICATION TRACKER",
    category: "MICROSERVICES",
    headline: "Three services. No direct service-to-service calls. Communication happens through events.",
    description:
      "Event-driven microservices platform with Kafka-only communication, deployed to Kubernetes with Terraform and ArgoCD.",
    impact: ["3 SERVICES", "ZERO DIRECT CALLS", "EVENT-DRIVEN"],
    tech: "Java \u00B7 Spring Boot \u00B7 Kafka \u00B7 Kubernetes \u00B7 Terraform \u00B7 ArgoCD \u00B7 Flyway \u00B7 Prometheus \u00B7 Grafana",
    detail: "Self-healing under pod failure, verified autoscaling under load.",
    githubLink: "https://github.com/vishal-kesharwani/JOB-APPLICATION-TRACKER",
    architecture: {
      flow: ["SERVICE A", "KAFKA", "SERVICE B", "KAFKA", "SERVICE C"],
    },
  },
  {
    id: "03",
    title: "KNOWLEDGE NEXUS",
    category: "FULL-STACK",
    headline: "Keeping the user workflow responsive while the system works behind the scenes.",
    description:
      "Full-stack mentorship platform with JWT/OAuth2 authentication, mentor discovery, session booking, real-time chat, and Kafka-based notifications.",
    impact: ["REAL-TIME CHAT", "KAFKA EVENTS", "OAUTH2"],
    tech: "React \u00B7 TypeScript \u00B7 Spring Boot \u00B7 Kafka \u00B7 Docker \u00B7 JWT \u00B7 OAuth2",
    detail: "Kafka-decoupled notifications keep booking responsive under load.",
    githubLink: "https://github.com/vishal-kesharwani/NEXUS",
    eventFlow: ["USER", "BOOK SESSION", "API", "EVENT", "KAFKA", "NOTIFICATION", "CALENDAR"],
  },
  {
    id: "04",
    title: "CLOUDLENS AI",
    category: "AI + INFRASTRUCTURE",
    headline: "Making infrastructure easier to understand.",
    description:
      "A platform that reviews AWS Terraform infrastructure and surfaces billing and cost-optimization suggestions.",
    impact: ["TERRAFORM", "AWS", "AI ANALYSIS"],
    tech: "Python \u00B7 Terraform \u00B7 AWS \u00B7 Alembic \u00B7 REST APIs",
    detail: "6 core backend modules: parser, pipeline, pricing, reviewer, rules, schemas.",
    githubLink: "https://github.com/vidya-bingi-26/cloudlens-ai",
    bridge: true,
  },
];

export const labExperiments = [
  {
    id: "01",
    question: "Can a coding agent understand a real repository?",
    status: "EXPLORING" as const,
    expected: "Agent would struggle with multi-file context and cross-references.",
    tried: "Testing agent reasoning on multi-file codebases with varying complexity.",
    happened: "Context window management is critical \u2014 agents lose coherence beyond a threshold.",
    learned: "RAG-based code analysis is more reliable than raw context stuffing.",
    next: "Implement retrieval-augmented code analysis pipeline.",
  },
  {
    id: "02",
    question: "Kafka consumer behavior under burst traffic",
    status: "TESTED" as const,
    expected: "Consumers would lag but catch up after burst subsides.",
    tried: "Simulated consumer lag with burst traffic patterns on a test cluster.",
    happened: "Duplicate processing exposed an idempotency problem in message handling.",
    learned: "Idempotent consumers are non-negotiable in event-driven systems.",
    next: "Implement exactly-once semantics testing.",
  },
  {
    id: "03",
    question: "What happens when a pod disappears?",
    status: "SIMULATING" as const,
    expected: "Kubernetes would reschedule the pod with minimal disruption.",
    tried: "Chaos engineering with pod termination during active traffic.",
    happened: "Brief 503s before service mesh reroutes traffic \u2014 pod disruption budgets matter.",
    learned: "Pod disruption budgets are more important than most deployment manifests assume.",
    next: "Test graceful shutdown sequences with preStop hooks.",
  },
  {
    id: "04",
    question: "Building a CLI for infrastructure review",
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
    decision: "Why stateless auth? \u2014 JWTs scale horizontally without session storage.",
  },
  {
    id: "EVENTS",
    label: "02 EVENTS",
    components: ["Producer", "Kafka Topic", "Consumer", "Offset", "Rebalance"],
    decision: "Why Kafka? \u2014 Decoupling services lets each scale independently.",
  },
  {
    id: "DATABASE",
    label: "03 DATABASE",
    components: ["Connection Pool", "PostgreSQL", "Flyway Migrations", "Read Replica"],
    decision: "Why Flyway? \u2014 Schema versioning prevents deployment drift.",
  },
  {
    id: "CONTAINER",
    label: "04 CONTAINER",
    components: ["Dockerfile", "Image", "Container", "Health Check", "Resource Limits"],
    decision: "Why containers? \u2014 Consistent environments from dev to production.",
  },
  {
    id: "CLUSTER",
    label: "05 CLUSTER",
    components: ["Kubernetes", "Pod", "Service", "Ingress", "Autoscaler"],
    decision: "Why Kubernetes? \u2014 Self-healing and scaling without manual intervention.",
  },
  {
    id: "DELIVERY",
    label: "06 DELIVERY",
    components: ["Git Push", "GitHub Actions", "ArgoCD", "Rollback", "Monitoring"],
    decision: "Why GitOps? \u2014 Declarative infrastructure with audit trails.",
  },
];

export const experiencesData = [
  {
    year: "2026",
    company: "SteepGraph Systems",
    role: "Backend Developer Intern",
    duration: "Feb 2026 \u2013 Jun 2026",
    highlights: [
      "15+ production-grade REST APIs",
      "ETL optimization with debouncing logic",
      "SQL metadata tooling",
      "Service debugging across 10+ components",
      "Enterprise migration pipelines",
    ],
    keyMetric: "50% fewer redundant database lookups",
  },
  {
    year: "2025",
    company: "SortUs",
    role: "Cloud & DevOps Intern",
    duration: "Jun 2025 \u2013 Aug 2025",
    highlights: [
      "AWS Lambda serverless deployments",
      "GitHub Actions CI/CD pipelines",
      "Node.js and MongoDB backend modules",
      "REST API documentation",
    ],
    keyMetric: "30% reduction in manual release effort",
  },
];

export const signals = [
  {
    title: "AWS CERTIFIED",
    value: "1000 / 1000",
    subtitle: "Cloud Practitioner CLF-C02",
    imageKey: "aws-cert",
  },
  {
    title: "SIH 2024",
    value: "GRAND FINALIST",
    subtitle: "National-level hackathon",
    imageKey: "sih-2024",
  },
  {
    title: "CAVISTA TECH HACKATHON",
    value: "1ST RUNNER-UP",
    subtitle: "\u20B950,000 prize",
    imageKey: "cavista",
  },
  {
    title: "DATATHON 2025",
    value: "RUNNER-UP",
    subtitle: "Campus datathon",
    imageKey: "datathon",
  },
  {
    title: "MITAOE E-SUMMIT IDEATHON",
    value: "WINNER",
    subtitle: "Innovation competition",
    imageKey: "ideathon",
  },
  {
    title: "FLIPKART GRID 7.0",
    value: "ROUND 2",
    subtitle: "1582 / 10,000+",
    imageKey: null,
  },
];

export const buildLogEntries = [
  {
    date: "09 SEP 2026",
    tag: "AI",
    title: "Why I\u2019m looking at coding agents",
    note: "I\u2019ve spent years building backend systems. Now I\u2019m interested in what happens when the software itself starts participating in the engineering loop.",
  },
  {
    date: "08 SEP 2026",
    tag: "SYSTEMS",
    title: "Kafka burst test exposed duplicate processing",
    note: "Idempotency issue discovered in consumer group \u2014 exactly-once semantics matter more than I thought.",
  },
  {
    date: "05 SEP 2026",
    tag: "KUBERNETES",
    title: "ConfigMap key mismatch caused pod crash loop",
    note: "Deployed another service and debugged a configuration issue that wasn\u2019t visible until runtime.",
  },
  {
    date: "02 SEP 2026",
    tag: "AI",
    title: "Studying how inference systems work underneath LLM APIs",
    note: "Reading about transformer architecture and attention mechanisms to understand what coding agents actually do.",
  },
  {
    date: "28 AUG 2026",
    tag: "BUILD",
    title: "CloudLens AI backend modules complete",
    note: "6 core modules: parser, pipeline, pricing, reviewer, rules, schemas \u2014 the real engineering started at the boundaries.",
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
    note: "Learned about pod disruption budgets the hard way. The system recovered but it shouldn\u2019t have needed to.",
  },
  {
    date: "10 AUG 2026",
    tag: "SYSTEMS",
    title: "Kafka consumer lag simulation",
    note: "Tested behavior when consumers fall behind during burst traffic. The lag graph tells the story.",
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MIT Academy of Engineering, Pune",
    duration: "2022 \u2013 2026",
    cgpa: "8.63 / 10",
    highlights: [
      "Relevant coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Cloud Computing",
    ],
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "DOA School",
    duration: "2020 \u2013 2022",
    cgpa: "71%",
    highlights: ["Science stream with Mathematics", "JEE Mains 2022: 93.91 Percentile", "MHCET 2022: 96.46 Percentile"],
  },
  {
    degree: "Secondary (X)",
    institution: "BNN College",
    duration: "2018 \u2013 2020",
    cgpa: "85.20%",
    highlights: [],
  },
];

export const toolbox = [
  { name: "JAVA", description: "Reliable backend systems" },
  { name: "SPRING BOOT", description: "API and service architecture" },
  { name: "KAFKA", description: "Event-driven communication" },
  { name: "KUBERNETES", description: "Distributed workloads" },
  { name: "TERRAFORM", description: "Infrastructure as code" },
  { name: "AWS", description: "Cloud infrastructure" },
  { name: "PYTHON", description: "Automation and AI experiments" },
  { name: "REACT", description: "Product interfaces" },
];

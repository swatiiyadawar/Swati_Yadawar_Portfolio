import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  Sparkles,
  Trophy,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const siteConfig = {
  name: "Swati Yadawar",
  role: "Developer",
  description:
    "Fullstack Developer building intelligent full-stack applications using React, Next.js, FastAPI, and LLMs.",
  email: "swatiyadawar29@gmail.com",
  github: "https://github.com/swatiiyadawar",
  linkedin: "https://www.linkedin.com/in/swati-yadawar-972692252/",
  resume: "/SWATI_YADAWAR_RESUME_.pdf",
};

export const navigationLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const heroHighlights = [
  "AI product engineering",
  "Full-stack systems",
];

export const aboutPoints = [
  "AI-powered application development with LLM workflows and automation layers.",
  "Full-stack engineering across frontend interfaces, API integration, and product logic.",
  "Frontend development with refined interaction design and accessible UI patterns.",
  "Automation systems that reduce manual effort and improve operational velocity.",
  "Scalable product thinking grounded in performance, maintainability, and UX clarity.",
];

export const experience = [
  {
    company: "Comau – Industrial Automation and Robotics",
    role: "Frontend Engineer",
    type: "Apprenticeship",
    duration: "Jul 2025 – Jun 2026",
    highlights: [
      "Built 2+ reusable Angular component libraries with 10+ shared components for industrial monitoring dashboards, accelerating UI development by ~30% across Robot Monitoring and Line Monitoring modules deployed on VM environments via MobaXterm and Docker.",
      "Integrated new features with backend API connections to power real-time functionality across Traceability, Alarms, and Reports modules.",
      "Diagnosed and resolved 20+ critical frontend bugs in Angular dashboards using TypeScript and SCSS, reducing error-detection latency by ~25% and improving dashboard accuracy across Line Monitoring and Traceability workflows.",
      "Delivered 30+ Jira tasks in agile sprint cycles via GitLab CI/CD, shipping features including Spot Welding and Arc Welding enhancements — achieving a 20% faster issue resolution rate from QA to deployment.",
    ],
  },
  {
    company: "Sasken Technologies",
    role: "Software Intern",
    type: "Internship",
    duration: "Jun 2025 – Aug 2025",
    highlights: [
      "Architected an AI-powered web automation tool using Python and MCP (Model Context Protocol) architecture, structuring modular, scalable pipelines that reduced manual workflow execution time by ~40%.",
      "Integrated OpenAI GPT APIs to convert natural language instructions into executable automation workflows, achieving 85%+ task accuracy across 10+ automation scenarios with hands-free task execution.",
      "Implemented end-to-end backend logic including API handling, execution pipelines, and workflow orchestration, supporting 3+ workflow types and cutting automation setup time from hours to under 5 minutes.",
    ],
  },
];

export const projects = [
  {
    title: "DataSense",
    description:
      "AI-powered data analytics and dashboard platform with chat-to-chart workflows and automated visualizations.",
    tech: ["React", "FastAPI", "Plotly", "Gemini API", "Pandas"],
    github: siteConfig.github,
    demo: "#",
  },
  {
    title: "AI Email & Meeting Automation Agent",
    description:
      "AI-powered email drafting and scheduling assistant with OAuth-secured workspace automation.",
    tech: [
      "FastAPI",
      "OpenAI API",
      "Gmail API",
      "Google Calendar API",
      "OAuth 2.0",
    ],
    github: siteConfig.github,
    demo: "#",
  },
  {
    title: "SENSAi — AI Career Coach",
    description:
      "AI career guidance platform for resume enhancement, interview preparation, and job search support.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Gemini API", "Clerk"],
    github: siteConfig.github,
    demo: "#",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Shadcn UI", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MongoDB", "SQL", "Firebase", "AWS"],
  },
  {
    title: "AI & APIs",
    items: ["OpenAI API", "Gemini API", "Ollama", "MCP Architecture", "LLM Integration", "Prompt Engineering"],
  },
  {
    title: "Core Concepts",
    items: ["DSA", "OOPs", "DBMS", "OS"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "Jira", "Postman", "GitHub Copilot", "MobaXterm"],
  },
];

export const achievements = [
  {
    title: "GitHub Partner Prize Winner",
    subtitle: "Hack This Fall 2024",
    icon: Sparkles,
    description:
      "Built MyDB CLI — a developer tool that brings Git-like branching semantics to MySQL databases. Enabled isolated database environments, schema tracking, migration management (up/down), and branch merging, with a GUI via MyDB Studio. Won the GitHub Partner Prize among 600+ participants.",
  },
  {
    title: "Top 25 Finalist",
    subtitle: "Softlink Global Hackathon · IIT Bombay 2025",
    icon: Trophy,
    description:
      "Ranked in the Top 25 out of 600+ teams at IIT Bombay's flagship hackathon. Developed a full-stack solution under time constraints, competing against teams from top engineering institutions across India.",
  },
  {
    title: "Top 20 Finalist",
    subtitle: "Barclays & Capgemini Ideathon 2024",
    icon: GraduationCap,
    description:
      "Proposed a unified collaboration platform bridging professionals and researchers — enabling cross-domain knowledge sharing, publication discovery, and professional networking in a single space. Ranked Top 20 out of 150+ teams.",
  },
  {
    title: "Active Member",
    subtitle: "GDG Pune · Frontend Developer",
    icon: Code2,
    description:
      "Contributing frontend developer in Google Developer Group Pune — participating in community events, tech talks, and collaborative open-source initiatives.",
  },
];
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
  { label: "GitHub Stats", href: "#github-stats" },
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
  "Recruiter-friendly delivery",
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
    company: "Comau",
    role: "Frontend Engineer Intern",
    icon: BriefcaseBusiness,
    highlights: [
      "Built modular UI components using Angular, HTML, CSS, and JavaScript.",
      "Developed dashboards for Robot Monitoring systems.",
    ],
  },
  {
    company: "Sasken Technologies",
    role: "Software Intern",
    icon: Code2,
    highlights: [
      "Developed AI-powered web automation tool using Python.",
      "Used OpenAI APIs for automation workflows.",
      "Implemented backend execution logic.",
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
  { title: "Languages", items: ["Java", "Python", "JavaScript"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Tailwind CSS"],
  },
  { title: "Backend", items: ["FastAPI", "Node.js"] },
  { title: "AI & APIs", items: ["OpenAI API", "Gemini API", "OAuth", "Pandas"] },
  { title: "Tools", items: ["Git", "GitHub", "GitLab", "Jira"] },
];

export const achievements = [
  {
    title: "Softlink Global Hackathon Finalist",
    subtitle: "IIT Bombay (2025)",
    icon: Trophy,
  },
  {
    title: "Winner",
    subtitle: "Hack This Fall - GitHub Partner Prize (2024)",
    icon: Sparkles,
  },
  {
    title: "Finalist",
    subtitle: "Barclays & Capgemini Ideathon (2024)",
    icon: GraduationCap,
  },
  {
    title: "Frontend Developer",
    subtitle: "GDG Pune",
    icon: Code2,
  },
];

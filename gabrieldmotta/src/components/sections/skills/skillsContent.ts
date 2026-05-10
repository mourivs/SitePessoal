import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Code2,
  Cpu,
  Database,
  Smartphone,
  Bot,
  Sparkles,
  Workflow,
} from "lucide-react";

export type SkillItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const skillsContent = {
  label: "TECH STACK",
  title: "LANGUAGES & TECHNOLOGIES",
  description:
    "A refined technical ecosystem built around performance, scalability, interface quality and modern engineering standards.",

  items: [
    {
      title: "HTML, CSS & JavaScript",
      description:
        "Core front-end technologies used to build structured, responsive and highly adaptable user interfaces.",
      icon: Code2,
    },
    {
      title: "React, Angular & Next.js",
      description:
        "Modern frameworks and libraries for dynamic applications, smooth rendering and optimized front-end architecture.",
      icon: Braces,
    },
    {
      title: "Node.js & API Engineering",
      description:
        "Fast and scalable back-end development focused on secure integrations, services and high-performance systems.",
      icon: Database,
    },
    {
      title: "Flutter & Mobile Systems",
      description:
        "Cross-platform mobile applications designed for fluid performance and consistent experiences across devices.",
      icon: Smartphone,
    },
    {
      title: "C / C++ Foundations",
      description:
        "Strong problem-solving background with emphasis on logic, data structures, algorithms and computational thinking.",
      icon: Cpu,
    },
    {
      title: "Automation, Bots & Workflows",
      description:
        "Custom automations, service integrations, bots and workflow engineering for digital operations and scale.",
      icon: Bot,
    },
    {
      title: "AI Systems & Prompt Design",
      description:
        "Intelligent flows, prompt engineering and AI-assisted systems designed to improve speed, output and efficiency.",
      icon: Sparkles,
    },
    {
      title: "Multi-Stack Digital Solutions",
      description:
        "Complete ecosystems combining web, mobile, automation and intelligent systems into a single product vision.",
      icon: Workflow,
    },
  ] as SkillItem[],
};
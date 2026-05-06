"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products designed for real-world usage."
          
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group rounded-[2.5rem] border border-border/60 bg-card/65 p-6 shadow-glow backdrop-blur-2xl transition-shadow hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)] flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground font-medium">Project {index + 1}</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
                </div>
               
              </div>

              <p className="mt-6 text-base leading-8 text-muted-foreground flex-grow">{project.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full bg-muted/70 px-4 py-2 text-sm text-foreground font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild variant="outline" size="lg" className="rounded-full border-border/70 bg-background/60 backdrop-blur-xl h-11 px-5">
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
                {project.demo !== "#" ? (
                  <Button asChild size="lg" className="rounded-full h-11 px-5">
                    <Link href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

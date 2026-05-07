"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-border/60 bg-gradient-to-b from-card/80 via-background/70 to-card/50 p-6 shadow-glow backdrop-blur-2xl sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Skills"
            title="A focused stack organized around frontend craft, backend logic, and AI workflows."
            description="These are the tools I reach for most often when building polished, production-ready products."
            className="max-w-4xl"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/75 p-5 shadow-glow backdrop-blur-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary/80">Core</p>
                <h3 className="mt-3 text-base font-semibold uppercase tracking-[0.24em] text-foreground">
                  {group.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-full border-border/60 bg-background/70 px-4 py-2 text-sm text-foreground shadow-sm backdrop-blur-xl"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Timeline of Work"
        />

        <div className="relative mt-14 pl-3 sm:pl-6">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-border via-border/70 to-transparent sm:block" />
          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="relative rounded-[2rem] border border-border/60 bg-card/65 p-6 shadow-glow backdrop-blur-2xl sm:ml-10"
              >
                <div className="absolute -left-[2.35rem] top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-foreground sm:block" />

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                      {item.company}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.duration}
                    </p>
                  </div>
                  <div className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground/70">
                    {item.type}
                  </div>
                </div>

                <ul className="mt-6 space-y-4 text-sm leading-7">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span className="font-medium text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
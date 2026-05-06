"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/portfolio-data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive wins and Recognition "
         
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-[1.75rem] border border-border/60 bg-background/70 p-5 shadow-glow backdrop-blur-2xl"
            >
              <achievement.icon className="h-5 w-5 text-sky-500" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{achievement.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

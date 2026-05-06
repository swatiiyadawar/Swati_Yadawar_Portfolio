"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { aboutPoints } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A focused engineer who enjoys turning ambiguous ideas into polished product experiences."
          description="I build modern interfaces and AI-enabled systems that feel considered, fast, and trustworthy."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-border/60 bg-card/60 p-6 shadow-glow backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 text-sm font-medium text-foreground">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              Product-minded and detail-oriented
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              My work centers on AI-powered applications, full-stack development, frontend engineering, automation systems, and building real-world scalable products. I care about usability, maintainability, and shipping experiences that feel premium from the first click.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-border/60 bg-background/70 p-5 shadow-glow backdrop-blur-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-sky-500" />
                <p className="mt-4 text-sm leading-7 text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

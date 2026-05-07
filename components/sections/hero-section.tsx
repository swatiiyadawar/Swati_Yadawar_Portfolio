"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/portfolio-data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col justify-center"
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground sm:text-sm"
          >
            Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-3xl font-heading text-8xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Swati Yadawar
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {siteConfig.description} I am currently pursuing B.Tech in Computer Science (AI),
            graduating in 2026 with a CGPA of 9.14. I am also working as a Frontend Intern at
            Comau and actively seeking software engineering opportunities as a fresher.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-glow">
              <Link href={siteConfig.resume} target="_blank" rel="noreferrer">
                View Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-border/70 bg-background/60 px-6 backdrop-blur-xl">
              <Link href={siteConfig.github} target="_blank" rel="noreferrer">
                GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-border/70 bg-background/60 px-6 backdrop-blur-xl">
              <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 rounded-full px-6 text-foreground hover:bg-muted/60">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-full border border-border/60 bg-card/60 p-2 backdrop-blur-2xl shadow-glow">
              <Image
                src="/proflie.jpeg"
                alt="Swati Yadawar"
                width={380}
                height={380}
                priority
                className="h-[320px] w-[320px] rounded-full object-cover sm:h-[380px] sm:w-[380px]"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
              Open to full-time roles
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

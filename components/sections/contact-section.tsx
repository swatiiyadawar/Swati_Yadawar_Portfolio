"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/portfolio-data";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Open to product-focused fullstack and  AI engineering opportunities."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-border/60 bg-card/65 p-6 shadow-glow backdrop-blur-2xl"
          >
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em]">Email</p>
                <Link href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-base text-foreground">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </Link>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em]">GitHub</p>
                <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-base text-foreground">
                  <FaGithub className="h-4 w-4" />
                  swatiiyadawar
                </Link>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em]">LinkedIn</p>
                <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-base text-foreground">
                  <FaLinkedinIn className="h-4 w-4" />
                  swati-yadawar
                </Link>
              </div>
              <Button asChild className="w-full rounded-full">
                <Link href={siteConfig.resume} target="_blank" rel="noreferrer">
                  Resume Download
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-border/60 bg-background/70 p-6 shadow-glow backdrop-blur-2xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                  className="h-11 rounded-2xl bg-background/60"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                  className="h-11 rounded-2xl bg-background/60"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                value={formState.message}
                onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell me about the role, project, or team."
                className="min-h-40 rounded-2xl bg-background/60"
              />
            </div>

            <Button type="submit" className="mt-6 h-12 w-full rounded-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

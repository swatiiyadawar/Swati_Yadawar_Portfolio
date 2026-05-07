"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks, siteConfig } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-card/70 text-sm font-semibold shadow-glow backdrop-blur-xl">
            SY
          </span>
          <div className="hidden sm:block">
            <p className="text-base font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-xs text-muted-foreground">{siteConfig.role}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button asChild variant="outline" size="sm" className="rounded-full border-border/70 bg-background/60 backdrop-blur-xl">
              <Link href={siteConfig.resume} target="_blank" rel="noreferrer">
                Resume
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-border/70 bg-background/60 backdrop-blur-xl">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-border/60 bg-background/95 backdrop-blur-2xl">
              <SheetHeader className="space-y-1">
                <SheetTitle>{siteConfig.name}</SheetTitle>
                <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-2 px-4 pb-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-border/50 bg-card/60 px-4 py-3 text-base text-foreground transition-colors hover:bg-card"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <Link href={siteConfig.resume} target="_blank" rel="noreferrer">
                    Download Resume
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

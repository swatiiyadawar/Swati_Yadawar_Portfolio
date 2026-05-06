import Link from "next/link";

import { socialLinks, siteConfig } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. 
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

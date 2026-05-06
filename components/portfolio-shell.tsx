import { AnimatedBackground } from "@/components/animated-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GithubStatsSection } from "@/components/sections/github-stats-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export function PortfolioShell() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatedBackground />
      <SiteHeader />
      <main className="relative z-10">
        <HeroSection />
       
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <GithubStatsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

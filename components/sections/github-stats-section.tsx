import { SectionHeading } from "@/components/section-heading";

export function GithubStatsSection() {
  return (
    <section id="github-stats" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub Stats"
          title="A quick snapshot of public activity and contribution trends."
          description="These embeds keep the section lightweight while still giving recruiters an immediate feel for activity and consistency."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-border/60 bg-card/65 p-4 shadow-glow backdrop-blur-2xl">
            <img
              src="https://ghchart.rshah.org/swatiiyadawar"
              alt="GitHub contribution graph for swatiiyadawar"
              className="h-auto w-full rounded-[1.5rem] border border-border/50 bg-background/60"
              loading="lazy"
            />
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-border/60 bg-card/65 p-4 shadow-glow backdrop-blur-2xl">
              <img
                src="https://github-readme-stats.vercel.app/api?username=swatiiyadawar&show_icons=true&hide_border=true&title_color=0f172a&text_color=475569&bg_color=ffffff00"
                alt="GitHub stats for swatiiyadawar"
                className="h-auto w-full rounded-[1.5rem] border border-border/50 bg-background/60"
                loading="lazy"
              />
            </div>
            <div className="rounded-[2rem] border border-border/60 bg-card/65 p-4 shadow-glow backdrop-blur-2xl">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=swatiiyadawar&layout=compact&hide_border=true&title_color=0f172a&text_color=475569&bg_color=ffffff00"
                alt="Top languages for swatiiyadawar"
                className="h-auto w-full rounded-[1.5rem] border border-border/50 bg-background/60"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

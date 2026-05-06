export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)] dark:opacity-30" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-drift" />
        <div className="animate-drift absolute right-[-6rem] top-1/2 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl [animation-delay:1.8s]" />
    </div>
  );
}

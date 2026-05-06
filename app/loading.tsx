export default function Loading() {
  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="h-20 rounded-[2rem] border border-border/60 bg-muted/40 animate-pulse" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-[28rem] rounded-[2rem] border border-border/60 bg-muted/40 animate-pulse" />
          <div className="grid gap-6">
            <div className="h-56 rounded-[2rem] border border-border/60 bg-muted/40 animate-pulse" />
            <div className="h-40 rounded-[2rem] border border-border/60 bg-muted/40 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

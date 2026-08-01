export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 60%, transparent 100%)",
        }}
      />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-1/4 h-[480px] w-[480px] rounded-full bg-violet-500/10 blur-[160px]" />
    </div>
  );
}

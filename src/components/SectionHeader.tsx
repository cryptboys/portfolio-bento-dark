type SectionHeaderProps = {
  index: string;
  title: string;
};

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs text-violet-400">{index}</span>
      <span className="h-px w-6 bg-white/15" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </h2>
    </div>
  );
}

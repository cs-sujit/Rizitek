export default function MarqueeBar({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-signal/20 bg-ink py-3.5" aria-hidden="true">
      <div className="flex w-max animate-ticker gap-10">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm tracking-wide text-cream">
            {item}
            <span className="text-signal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

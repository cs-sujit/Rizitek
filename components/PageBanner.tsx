export default function PageBanner({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  
  const ABOUT_BG = [
    'linear-gradient(120deg, rgba(6, 16, 28, 0.94) 0%, rgba(6, 16, 28, 0.78) 55%, rgba(6, 16, 28, 0.88) 100%)',
    "url('/about_bg.png')",
  ].join(', ');

  return (
    <section 
      style={{
        backgroundImage: ABOUT_BG,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative overflow-hidden bg-navy-deep text-cream">
      <div
        className="absolute inset-0 bg-grid-fade opacity-30"
        style={{ backgroundSize: '48px 48px' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/60">{intro}</p>
        )}
      </div>
    </section>
  );
}

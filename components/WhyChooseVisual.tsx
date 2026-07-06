import Image from "next/image";

export default function WhyChooseVisual() {

  const ABOUT_BG = [
    'linear-gradient(120deg, rgba(6, 16, 28, 0.94) 0%, rgba(6, 16, 28, 0.78) 55%, rgba(6, 16, 28, 0.88) 100%)',
    "url('/about_bg.png')",
  ].join(', ');

  return (
    <div className="relative">
      {/* decorative background blobs for a modern "funky" feel */}
      <div
        className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-signal/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -right-6 h-64 w-64 rounded-full bg-navy/20 blur-3xl"
        aria-hidden="true"
      />

      {/* main illustration card, gently floating */}
      <div className="relative animate-[floatY_6s_ease-in-out_infinite] rounded-3xl border border-ink/10 bg-navy-deep p-8 shadow-xl sm:p-10">
        <div
          className="absolute inset-0 rounded-3xl bg-grid-fade opacity-20"
          style={{ backgroundSize: '40px 40px', }}
          aria-hidden="true"
        />
        <svg viewBox="0 0 480 380" className="relative h-auto w-full" role="img" aria-label="Illustration of a haul truck at the centre of concentric safety detection rings">
          <g transform="translate(240,210)">
            {[170, 130, 90].map((r) => (
              <circle key={r} r={r} fill="none" stroke="#F5C400" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 8" />
            ))}
            <circle r="40" fill="none" stroke="#F5C400" strokeWidth="1.5" className="origin-center animate-pulseRing" />

            {/* truck silhouette (top-down) */}
            <rect x="-26" y="-58" width="52" height="116" rx="6" fill="#0B0D10" stroke="#F5C400" strokeWidth="1.5" />
            <rect x="-26" y="-58" width="52" height="26" rx="4" fill="#173257" stroke="#F5C400" strokeWidth="1" />
            <circle r="3.5" fill="#F5C400" />
            <Image src="./about_bg.png" 
            alt="Truck Silhouette" width={52} 
            height={116} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* corner tick labels */}
            <text x="0" y="-190" textAnchor="middle" fill="#B9B2A0" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1.5">
              PROXIMITY FIELD
            </text>
          </g>
        </svg>

        {/* floating badge, offset from the card, animating on a slightly different rhythm */}
        <div className="absolute -bottom-6 -left-6 flex animate-[floatY_5s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-ink/10 bg-cream px-5 py-4 shadow-lg" style={{ animationDelay: '0.4s' }}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal font-display text-sm text-ink">
            ✓
          </span>
          <div>
            <p className="font-display text-sm leading-tight text-ink">DGMS Compliant</p>
            <p className="text-[11px] uppercase tracking-wide text-ink/50">Every system, every site</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

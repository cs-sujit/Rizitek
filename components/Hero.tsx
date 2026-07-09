'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STOP_SHOP_WORDS = ['Safety Devices', 'Maintenance', 'Auto Fire', 'Auto Lube'];

const SLIDES = [
  {
    eyebrow: 'DGMS-aligned · Made in India',
    caption: "India's Trusted Partner in Heavy Equipment Asset Management",
    detail:
      "From coalfields to construction sites, Rizitek's made-in-India safety systems and pan-India service contracts protect equipment and assets across the nation's toughest environments.",
  },
  {
    eyebrow: 'HaulEye · Rear Vision Systems',
    caption: 'Zero Blind Spots, Zero Compromise',
    detail: 'HD rear-vision and 360° surround camera systems built for Indian mining conditions.',
  },
  {
    eyebrow: 'SentinelEye · Fatigue Monitoring',
    caption: "Fatigue Kills. SentinelEye Doesn't Let It",
    detail: 'Real-time facial monitoring that catches drowsiness before it becomes an accident.',
  },
  {
    eyebrow: 'Pan-India Field Support',
    caption: 'On Site, Every Site',
    detail: 'Maintaining mining and construction equipment across five states and counting.',
  },
];

const inStyle = (delayMs: number): React.CSSProperties => ({
  animation: 'heroIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
  animationDelay: `${delayMs}ms`,  
});

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % STOP_SHOP_WORDS.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[slideIndex];

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-navy-deep text-cream">
      {/* Full-bleed video background */}
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: gradient (readability) + grid texture */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid-fade opacity-20"
        style={{ backgroundSize: '48px 48px' }}
        aria-hidden="true"
        
      />

      {/* Overlaid text content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-4xl">
          <div key={`eyebrow-${slideIndex}`} style={inStyle(0)} className="inline-flex items-center gap-2 border border-yellow-600/50 px-3 py-1.5 rounded-md">
            <span className="h-1.5 w-1.5 bg-yellow-600" />
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-cream/80 font-bold">
              {slide.eyebrow}
            </span>
          </div>

          <h1
            key={`caption-${slideIndex}`}
            style={inStyle(90)}
            className="mt-6 font-display text-[10vw] leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {slide.caption}
          </h1>

          <p key={`detail-${slideIndex}`} style={inStyle(180)} className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/70 sm:text-base">
            {slide.detail}
          </p>

          <p style={inStyle(260)} className="mt-6 flex flex-wrap items-center gap-2 text-[18px] text-cream/70 font-bold">
            One stop &amp; shop for
            <span className="relative inline-flex h-10 min-w-[10rem] items-center overflow-hidden bg-yellow-500 px-2 font-display text-sm text-cream rounded-md">
              <span key={wordIndex} className="animate-[fadeSlide_0.5s_ease]">
                {STOP_SHOP_WORDS[wordIndex]}
              </span>
            </span>
          </p>

          <div style={inStyle(340)} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              data-cursor="Explore"
              className="focus-ring inline-flex items-center gap-2 bg-yellow-500 px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-ink transition hover:bg-cream rounded-md"
            >
              Explore Our Products <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              data-cursor="Talk"
              className="focus-ring inline-flex items-center gap-2 border border-cream/40 px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-cream transition hover:border-cream rounded-md"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots + scroll cue */}
      <div className="absolute bottom-8 left-0 right-0 z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              onClick={() => setSlideIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              data-cursor=""
              className={`focus-ring h-1.5 rounded-full transition-all ${
                i === slideIndex ? 'w-8 bg-signal' : 'w-4 bg-cream/25'
              }`}
            />
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-cream/50">Scroll</span>
          <span className="h-6 w-px animate-pulse bg-cream/40" />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

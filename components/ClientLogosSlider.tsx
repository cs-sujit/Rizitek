'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';

const CLIENTS = [
  'Coal India Subsidiaries',
  'Eastern Coalfields Limited',
  'Essel Mining',
  'Gainwell',
  'GMMCO',
  'L&T',
  'Liebherr',
  'Ultratech',
];

const AUTOPLAY_MS = 2800;
const SCROLL_STEP = 280;

export default function ClientLogosSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const timer = setInterval(() => {
      if (paused) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
      }
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused]);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  // background-image: linear-gradient(120deg, rgb(240 242 243) 0%, rgb(255 255 255 / 78%) 55%, rgb(224 227 231 / 88%) 100%),
  const ABOUT_BG = [
    'linear-gradient(120deg, rgba(240 ,242, 243) 0%, rgba(255, 255, 255, 0.78) 55%, rgba(224 ,227 ,231, 0.88) 100%)',
    "url('/about_bg.png')",
  ].join(', ');

  return (
    <section className="mx-auto  px-6 py-15 md:px-10 md:py-20 bg-white"
      style={{
        backgroundImage: ABOUT_BG,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-widest2 font-bold text-ink/50">
          Trusted By
        </span>
        <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
          Trusted by India&apos;s Leading Mining &amp; Construction Organisations
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* fade edges hinting there's more to scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" aria-hidden="true" />

          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll clients left"
            data-cursor=""
            className="focus-ring group absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-cream shadow-md transition-all duration-300 hover:scale-110 hover:border-ink hover:bg-ink hover:text-cream active:scale-95 sm:-left-4"
          >
            <ArrowIcon flip />
          </button>

          <div
            ref={trackRef}
            className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-2 py-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {CLIENTS.map((c) => (
              <div
                key={c}
                style={{ scrollSnapAlign: 'start' }}
                className="flex h-80 w-80 rounded-full shrink-0 items-center justify-center border border-ink/10 bg-cream px-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-40 sm:h-40"
              >
                <span className="font-display text-base leading-snug text-ink/70 sm:text-lg">
                  {c}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll clients right"
            data-cursor=""
            className="focus-ring group absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-cream shadow-md transition-all duration-300 hover:scale-110 hover:border-ink hover:bg-ink hover:text-cream active:scale-95 sm:-right-4"
          >
            <ArrowIcon />
          </button>
        </div>
      </Reveal>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}

function ArrowIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition-transform duration-300 ${
        flip ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

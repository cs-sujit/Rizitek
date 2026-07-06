'use client';

import { useEffect, useState } from 'react';

export default function FloatingActions() {
  const [showStack, setShowStack] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowStack(y > window.innerHeight * 0.6);
      setShowTop(y > window.innerHeight * 1.2);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        showStack ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        data-cursor="Top"
        className={`focus-ring flex h-11 w-11 items-center justify-center border border-ink/15 bg-cream text-ink shadow-md transition-all duration-300 hover:border-ink ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <span aria-hidden="true">↑</span>
      </button>

      <a
        href="https://wa.me/919570595087"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="Chat"
        className="focus-ring flex h-12 w-12 items-center justify-center border border-ink/15 bg-navy-deep text-cream shadow-md transition hover:border-signal hover:text-signal"
      >
        <WhatsAppIcon />
      </a>

      <a
        href="tel:+919570595087"
        aria-label="Call Rizitek"
        data-cursor="Call"
        className="focus-ring flex h-12 w-12 items-center justify-center border border-ink/15 bg-navy-deep text-cream shadow-md transition hover:border-signal hover:text-signal"
      >
        <PhoneIcon />
      </a>

      <a
        href="/contact"
        aria-label="Enquire now"
        data-cursor="Enquire"
        className="focus-ring flex h-12 items-center gap-2 border border-signal/40 bg-signal px-4 text-[12px] font-bold uppercase tracking-wide text-ink shadow-md transition hover:bg-cream"
      >
        Enquire
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2Zm0 18.06c-1.64 0-3.16-.48-4.44-1.3l-.32-.19-3.02.79.8-2.94-.21-.3A8.03 8.03 0 0 1 4 12c0-4.42 3.6-8.02 8.02-8.02S20.04 7.58 20.04 12s-3.6 8.06-8.02 8.06Zm4.4-6.02c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
    </svg>
  );
}

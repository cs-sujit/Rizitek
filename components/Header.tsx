'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/nav';
import Image from 'next/image';

const SCROLL_THRESHOLD = 24;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Transparent bar — blends with the hero/banner behind it on first load */}
      <header
        aria-hidden={scrolled}
        className={`fixed inset-x-0 top-0 z-40 transition-opacity duration-300 ${
          scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <NavBar pathname={pathname} variant="transparent" />
      </header>

      {/* Solid bar — slides down into place once the page is scrolled */}
      <header
        aria-hidden={!scrolled}
        className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/95 shadow-sm backdrop-blur transition-transform duration-500 ease-out ${
          scrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <NavBar pathname={pathname} variant="solid" />
      </header>

      {/* Reserves layout space so page content isn't hidden under the solid bar
          once it's docked (no-op while the transparent bar is showing, since
          that one has no background and simply overlays the hero/banner). */}
      <div aria-hidden="true" className={`transition-[height] duration-300 ${scrolled ? 'h-[73px]' : 'h-0'}`} />
    </>
  );
}

function NavBar({
  pathname,
  variant,
}: {
  pathname: string | null;
  variant: 'transparent' | 'solid';
}) {
  const isSolid = variant === 'solid';
  const textActive = isSolid ? 'text-ink' : 'text-cream';
  const logoBox = isSolid ? 'bg-ink' : 'bg-cream/15 backdrop-blur';
  const logoDot = isSolid ? 'bg-signal' : 'bg-signal';
  const logoText = isSolid ? 'text-ink' : 'text-cream';
  const burgerColor = isSolid ? 'bg-ink' : 'bg-cream';

  return (
    <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
      <Link href="/" className="focus-ring flex items-center gap-2">
        {/* <span className={`flex h-8 w-8 items-center justify-center ${logoBox}`}>
          <span className={`h-2.5 w-2.5 ${logoDot}`} />
        </span>
        <span className={`font-display text-lg tracking-tight ${logoText}`}>RIZITEK</span> */}
        <Image src="./rizi_logo.jpeg" alt="Rizitek" width={150} height={30} className=" md:inline-block rounded-md" />
                {/* <Image src={isSolid ? "/rizi_logo.jpeg" : "/rizi_logo_transparent.png"} alt="Rizitek" width={150} height={30} className=" md:inline-block rounded-md" /> */}
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((item) => {
          const active =
            item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
          const linkClass = active
            ? textActive
            : isSolid
              ? 'text-ink/60 hover:text-ink'
              : 'text-cream/80 hover:text-cream';
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`focus-ring text-[13px] font-semibold uppercase tracking-widest2 transition ${linkClass}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className={`focus-ring hidden items-center gap-2 px-5 py-3 text-[13px] font-bold uppercase tracking-wide transition md:inline-flex bg-transparent hover:scale-105`}
      >
        <Image src="./self_india.jpeg" alt="Self-Independent India" width={150} height={30} className=" md:inline-block rounded-md" />
      </Link>
      

      <MobileNav pathname={pathname} burgerColor={burgerColor} isSolid={isSolid} />
    </div>
  );
}

function MobileNav({
  pathname,
  burgerColor,
  isSolid,
}: {
  pathname: string | null;
  burgerColor: string;
  isSolid: boolean;
}) {
  return (
    <details className="relative md:hidden">
      <summary className="focus-ring flex h-10 w-10 list-none flex-col items-center justify-center gap-1.5">
        <span className={`h-0.5 w-6 ${burgerColor}`} />
        <span className={`h-0.5 w-6 ${burgerColor}`} />
        <span className={`h-0.5 w-4 self-end ${burgerColor}`} />
      </summary>
      <nav className="absolute right-0 top-12 flex w-56 flex-col gap-1 border border-ink/10 bg-cream p-3 shadow-lg">
        {NAV_LINKS.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`focus-ring px-3 py-2 text-[13px] font-semibold uppercase tracking-wide ${
                active ? 'bg-ink text-cream' : 'text-ink/70 hover:bg-ink/5'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
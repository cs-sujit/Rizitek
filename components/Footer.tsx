import Link from 'next/link';
import { products } from '@/lib/products';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 pb-10 md:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              {/* <span className="flex h-8 w-8 items-center justify-center bg-signal">
                <span className="h-2.5 w-2.5 bg-ink" />
              </span>
              <span className="font-display text-lg">RIZITEK</span> */}
              <Image src="./rizi_logo.jpeg" alt="Rizitek" width={150} height={30} className=" md:inline-block rounded-md" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Guarding Lives. Protecting Assets. Enabling Progress. India-made HEMM
              safety systems and pan-India equipment maintenance, from Ranchi to
              every mine and site we serve.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-cream/40">
              Products
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="focus-ring text-sm text-cream/70 transition hover:text-signal"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="focus-ring text-sm text-signal">
                  View all products →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-cream/40">
              Company
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                { label: 'About Rizitek', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Dealership', href: '/dealership' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="focus-ring text-sm text-cream/70 transition hover:text-signal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-cream/40">
              Head Office
            </p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-cream/70">
              <p>Park View Enclave, Ranchi College Rd, Hatma, Ranchi, Jharkhand 834008</p>
              <div>
                <p className="text-cream/40">Reach us</p>
                <p>+91 95705 95087</p>
                <p>info@rizitekindia.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Rizitek India Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/40">
            {/* <span>DGMS-Compliant</span> */}
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

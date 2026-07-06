import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { products, getProduct } from '@/lib/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category}`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((p) => p.slug === product.slug);
  const next = products[(currentIndex + 1) % products.length];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div
          className="absolute inset-0 bg-grid-fade opacity-30"
          style={{ backgroundSize: '48px 48px' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <Link href="/products" className="focus-ring inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-cream/50 hover:text-signal">
            ← All Products
          </Link>
          <Reveal delay={60}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-signal">
              {product.category}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl font-display text-xl leading-snug text-cream/80 sm:text-2xl">
              {product.heroTagline}
            </p>
            <Link
              href={`/contact?subject=${encodeURIComponent(product.name)}`}
              className="focus-ring mt-8 inline-flex items-center gap-2 bg-signal px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-ink transition hover:bg-cream"
            >
              Enquire About {product.name} <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Overview
            </span>
            <div className="mt-6 flex flex-col gap-5">
              {product.description.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 border-b border-cream/10 pb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
              Key Features
            </span>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col gap-3 bg-navy p-7">
                  <span className="h-1.5 w-6 bg-signal" />
                  <h3 className="font-display text-sm uppercase tracking-wide">{f.title}</h3>
                  <p className="text-[13px] leading-relaxed text-cream/55">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why this product */}
      {product.why && (
        <section className="bg-signal">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/60">
                {product.why.heading}
              </span>
              <p className="mt-6 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">
                {product.why.body}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Next product */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Next Product
            </p>
            <p className="mt-2 font-display text-2xl">{next.name}</p>
            <p className="mt-1 text-sm text-ink/60">{next.category}</p>
          </div>
          <Link
            href={`/products/${next.slug}`}
            className="focus-ring inline-flex items-center gap-2 bg-ink px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-cream transition hover:bg-navy"
          >
            View {next.name} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

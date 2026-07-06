import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="focus-ring group flex min-h-[240px] flex-col justify-between border border-cream/10 bg-navy p-7 transition rounded-md hover:border-signal/40 hover:scale-102"
    >
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-cream/40">
        P / {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-signal">{product.category}</p>
        <h3 className="mt-2 font-display text-xl leading-snug text-cream">{product.name}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-cream/55">{product.shortDescription}</p>
      </div>
      <span className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-signal">
        View details
        <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

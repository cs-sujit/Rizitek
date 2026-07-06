import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    "10 Safety Systems built for India's toughest environments — rear vision, proximity warning, fatigue monitoring, fire suppression, and more.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Our Product Range"
        title="10 Safety Systems. Built for India's Toughest Environments."
        intro="Rizitek's product range covers every critical dimension of HEMM safety — from eliminating blind spots and detecting fatigue to preventing fires and enforcing seat belt compliance. Every product is designed for Indian mining conditions, DGMS-compliant, and backed by our pan-India service network."
      />

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

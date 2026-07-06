import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import DealershipForm from '@/components/DealershipForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Dealership',
  description:
    "Partner with Rizitek — represent India's most comprehensive HEMM safety product line with strong brand recognition and technical support.",
};

const WHY_PARTNER = [
  'Represent a proven, DGMS-compliant safety product portfolio with many products',
  'Growing market driven by regulatory mandates and rising safety awareness in Indian mining',
  'Strong brand presence with Coal India subsidiaries and leading industrial companies',
  "Full technical training and support from Rizitek's engineering team",
  'Marketing support, brochures, and product materials provided',
  'Competitive dealer margins and structured commercial arrangements',
  "Be part of a mission that matters — protecting lives in India's mining industry",
];

const WHO_SHOULD_APPLY = [
  'Mining and construction equipment sales, service, or distribution',
  'Industrial safety products and solutions',
  'HEMM spare parts and accessories',
  'Engineering and technology solutions for the mining sector',
];

export default function DealershipPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Become a Partner"
        title="Partner with Rizitek. Build a Stronger Future Together."
        intro="Rizitek is looking for motivated, values-aligned business partners across India to expand our safety technology network. As a Rizitek dealership partner, you'll have the opportunity to represent India's most comprehensive HEMM safety product line — backed by strong brand recognition, deep technical support, and a rapidly growing market."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Why Partner with Rizitek?
            </span>
            <ul className="mt-8 flex flex-col gap-4">
              {WHY_PARTNER.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Who Should Apply?
            </span>
            <p className="mt-6 text-[14px] leading-relaxed text-ink/70">
              We welcome enquiries from companies and individuals with experience or
              relationships in:
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {WHO_SHOULD_APPLY.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
                Dealership Enquiry
              </span>
              <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
                Download our Company Brochure
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-cream/60">
                Complete the short form and a member of our partnerships team will
                contact you within 48 hours.
              </p>
            </Reveal>
            <Reveal delay={120} className="bg-cream p-8 text-ink sm:p-10 lg:col-span-8">
              <DealershipForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

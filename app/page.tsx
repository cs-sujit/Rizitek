import Link from 'next/link';
import Hero from '@/components/Hero';
import MarqueeBar from '@/components/MarqueeBar';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import WhyChooseVisual from '@/components/WhyChooseVisual';
import { products } from '@/lib/products';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import StatIcon from '@/components/StatIcon';

const STATS = [
  {
    value: '10+',
    label: 'Safety Products',
    body: 'India-designed & assembled safety systems covering vision, detection, monitoring, and fire protection.',
    icon: 'shield',
    featured: true,
  },
  {
    value: '200+',
    label: 'Skilled Manpower',
    body: 'Engineers, technicians and ITI-trained professionals capable of maintaining any HEMM fleet.',
    icon: 'users',
  },
  {
    value: '5',
    label: 'State Presence',
    body: 'Active operations across Jharkhand, West Bengal, Odisha, Madhya Pradesh and Chhattisgarh.',
    icon: 'pin',
  },
  {
    value: null,
    label: 'Own Assets Deployed',
    body: 'We deploy our own tools, vehicles, DG sets, air compressors and cranes at site as per need.',
    icon: 'truck',
  },
  {
    value: null,
    label: 'Retro-fitment Capability',
    body: 'Supply and maintenance of ACLS, AFDSS and DGMS safety devices across all equipment categories.',
    icon: 'wrench',
  },
];

const SERVICES = [
  {
    title: 'AMC Services',
    body: 'Preventive maintenance · Breakdown maintenance · Planning & scheduling · Condition monitoring · Fleet health management',
  },
  {
    title: 'Safety System Installation',
    body: 'Installation & commissioning · Retrofitment of ACLS, AFDSS & DGMS safety devices · Spare supply · Maintenance support',
  },
  {
    title: 'HEMM Maintenance',
    body: 'Turnkey maintenance for Dump Trucks, Excavators, Dozers, Surface Miners & more.',
  },
  {
    title: 'DGMS Compliance',
    body: 'Gap analysis, documentation support, fleet safety upgrades, compliance readiness reviews.',
  },
  {
    title: 'Multi-State Presence',
    body: '200+ skilled manpower · Operations across Jharkhand, West Bengal, Odisha, Madhya Pradesh, Rajasthan & Chhattisgarh · Dedicated field support',
  },
];

const CLIENTS = [
  'Coal India Subsidiaries',
  'Eastern Coalfields Limited',
  'Essel Mining',
  'Gainwell',
  'GMMCO',
  'L&T',
];

const PRODUCT_HIGHLIGHTS_BG = [
  'linear-gradient(120deg, rgba(6, 16, 28, 0.94) 0%, rgba(6, 16, 28, 0.78) 55%, rgba(6, 16, 28, 0.88) 100%)',
  "url('/hero-poster.jpg')",
].join(', ');

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <MarqueeBar
        items={[
          '360° BIRD\u2019S EYE VIEW',
          'PROXIMITY WARNING',
          'FATIGUE MONITORING',
          'DGMS CERTIFIED',
          'REAR VISION',
          'MINING SAFETY',
        ]}
      /> */}

      {/* Why choose Rizitek */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-5 md:py-15">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            {/* Left: heading + text + stats, slides in from the left */}
            <div className="lg:col-span-12">
              <Reveal once={false} direction="left">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
                  Why Choose Rizitek
                </span>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.6vw] xl:text-5xl">
                  Built by people who&apos;ve worked the bench, not just the boardroom.
                </h2>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/70">
                  Every number below is a decision we made on purpose — to hire 
                  our own engineers, own our own equipment, and design safety
                  systems around the way Indian mines actually run.
                </p>
              </Reveal>
              </div>              
            <div className="lg:col-span-7">              

              <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} once={false} direction="left" delay={i * 90}>
                    <div className="flex items-start gap-5 py-5">
                      <StatIcon name={s.icon} />
                      <div>
                        <p className="font-display text-lg leading-snug">
                          {s.value && <span className="mr-2 text-signal">{s.value}</span>}
                          {s.label}
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-ink/60">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: animated illustration, slides in from the right */}
            <Reveal once={false} direction="right" delay={100} className="lg:col-span-5">
              <WhyChooseVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products highlights strip */}
      <section
        style={{
          backgroundImage: PRODUCT_HIGHLIGHTS_BG,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative overflow-hidden bg-navy-deep text-cream"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-20">
          <div className="mb-14 flex items-baseline justify-between gap-6 border-b-2 border-yellow-600/40 pb-5">
            <span className="font-mono text-[15px] uppercase tracking-widest2 text-signal">
              Our Safety Solutions
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-widest2 text-cream/40 sm:block">
              10 products, one mission
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal once={false} soft className="lg:col-span-6">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.6vw] xl:text-5xl">
                10 Products. One Mission: Zero Accidents.
              </h2>
            </Reveal>
            <Reveal once={false} soft delay={120} className="lg:col-span-5 lg:col-start-8">
              <p className="text-[15px] leading-relaxed text-cream/60">
                From rear-vision camera systems and proximity warning devices to
                automatic fire suppression and alcohol detection — Rizitek delivers
                end-to-end safety technology engineered for India&apos;s mining and
                construction industry.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0,6).map((p, i) => (
              <Reveal key={p.slug} once={false} soft delay={(i % 3) * 110}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href="/products"
              className="focus-ring inline-flex items-center gap-2 bg-signal px-7 py-4 text-[13px] font-bold uppercase tracking-wide text-ink transition hover:bg-cream"
            >
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Services strip */}
      <section className="bg-signal">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-6" once={false} soft >
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.6vw] xl:text-5xl">
                End-to-End Safety Services
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8" once={false} soft >
              <p className="text-[15px] leading-relaxed text-ink/70">
                We don&apos;t just sell safety products — we install, maintain, and
                support them throughout their lifetime.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" >
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} once={false} soft>
                <div className="flex min-h-[180px] flex-col justify-between border border-ink/15 bg-cream p-7 rounded-lg">
                  <h3 className="font-display text-base leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{s.body}</p>
                </div>
              </Reveal>
            ))}
            <Link
              href="/services"
              className="rounded-lg focus-ring group flex min-h-[180px] flex-col items-start justify-between border border-ink bg-ink p-7 text-cream transition hover:bg-navy"
            >
              <span className="font-display text-base leading-snug">See all services</span>
              <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-signal">
                Learn more
                <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogosSlider />

      {/* Customer reviews (placeholder — content pending from client) */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center md:px-10 md:py-24">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
              What Our Clients Say
            </span>
            <p className="mx-auto mt-6 max-w-xl font-display text-2xl leading-snug sm:text-3xl">
              Customer reviews coming soon.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/50">
              We&apos;re collecting testimonials from our site partners across India.
              Check back shortly, or{' '}
              <Link href="/contact" className="focus-ring text-signal underline">
                get in touch
              </Link>{' '}
              if you&apos;d like to share your experience with Rizitek.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

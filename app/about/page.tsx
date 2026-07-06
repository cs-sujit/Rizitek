import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Rizitek India Private Limited — a Ranchi-based engineering company specialising in HEMM safety technology, founded 2016, 200+ employees, pan-India service network.",
};

const DIFFERENTIATORS = [
  { title: 'Made in India', body: 'Products designed and assembled locally to meet Indian mining conditions.' },
  { title: 'HEMM Domain Expertise', body: 'Leadership with 30+ years in mining & construction equipment.' },
  { title: 'DGMS-First Approach', body: 'Every product and service built around regulatory compliance.' },
  { title: 'One-Stop-Shop', body: 'Supply, installation, AMC, training, and DGMS documentation under one roof.' },
  { title: 'Zero Tolerance on Safety', body: "It's not a slogan; it's in our operational culture." },
  { title: 'Ethics & Responsibility', body: 'A team of responsible citizens committed to corporate social responsibility.' },
];

const BOARD = [
  {
    name: 'Subir Kumar Datta',
    role: 'Chairman & Managing Director',
    bio: [
      'An IIT graduate with vast knowledge and experience of over 30 years in the mining and construction equipment industry, he is the strength of this company.',
      'Former executive of BEML Ltd. and Tractors India Private Limited (TIPL), he left his lucrative job and decided to nurture and groom this young company to climb the ladder of success.',
    ],
  },
  {
    name: 'Soham Datta',
    role: 'Director, Chief Operations',
    bio: [
      'A Mechanical Engineer by qualification, he took up business as a career since day one, putting his unrelenting effort into taking the enterprise towards its vision.',
      'His dynamism and vibrant nature are the driving force behind the organisational growth.',
    ],
  },
  {
    name: 'Maharshi Jena',
    role: 'Additional Director, Service Operations',
    bio: [
      'An Electrical Engineer by qualification, he took no time to refuse his offer from a reputed IT brand and pursued his dream to do something on his own.',
      'His pleasant personality and leadership are creating team spirit in the organisation and achieving success in service delivery.',
    ],
  },
];

const MILESTONES = [
  { year: '2013', body: 'Established SD Engineers. Began working as authorised distributor of Lincoln (now SKF) lubrication systems.' },
  { year: '2013', body: 'Incorporated Rizitek India Private Limited. Added GCPL RCML (Jharkhand) and BEML RSMM (Rajasthan) — full MARC contracts.' },
  { year: '2016', body: 'Started executing first maintenance contract for GCPL at ECL Sonepur Bazari, West Bengal (MARC).' },
  { year: '2018', body: 'Secured contract from Liebherr for BCW Chittorgarh (Rajasthan) and partnered with Enercon for AFDSS.' },
  { year: '2020', body: 'Bagged contract from Ultratech Dhar (Madhya Pradesh) and Gainwell TSL (Jharkhand).' },
  { year: '2021', body: 'Started working for L&T TSL and GCPL BCML (Odisha).' },
  { year: '2022', body: 'Secured additional contracts for GCPL DBL (Odisha) and Gmmco (Chhattisgarh).' },
  { year: '2023', body: 'Started contractual assembling of Highwall Miners, Roofbolts with GEPL (West Bengal).' },
  { year: '2023', body: 'Started assembly of DGMS mandated electronic safety devices under our own brand name.' },
  { year: '2026', body: 'Started contractual assembling of Surface Miners for L&T (Odisha).' },
];

export default function AboutPage() {
  return (
    <main>
      <PageBanner eyebrow="About Rizitek" title="Engineering Safety. Advancing India." />

      {/* Company overview */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 border-b border-ink/10 pb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
            Company Overview
          </span>
        </div>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.8vw] xl:text-5xl">
              Who We Are
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] leading-relaxed text-ink/70">
              Rizitek India Private Limited is a Ranchi-based engineering company
              specialising in safety technology for Heavy Earth Moving Machinery
              (HEMM), mining fleets, and construction equipment. Founded in 2016 and
              incorporated in Jharkhand, Rizitek has grown into a trusted name across
              India&apos;s toughest industrial environments.
            </p>
            <p className="text-[15px] leading-relaxed text-ink/70">
              What began as a product support company has evolved into a
              full-spectrum safety solutions provider — designing, assembling,
              installing, and maintaining advanced safety systems that protect
              operators, preserve assets, and ensure DGMS compliance.
            </p>
            <p className="text-[15px] leading-relaxed text-ink/70">
              With over 200 employees and a pan-India field service network,
              Rizitek brings together world-class safety technology with deep local
              expertise. Every product we make is designed in India, assembled in
              India, and backed by engineers who understand the unique demands of
              Indian mining operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Reveal className="bg-navy p-8 sm:p-10">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">Vision</span>
              <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                To be India&apos;s most trusted partner for heavy earth moving
                machinery — elevating equipment performance, protecting every
                operator, and enabling industry to build and mine with confidence.
              </p>
            </Reveal>
            <Reveal delay={120} className="bg-navy p-8 sm:p-10">
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">Mission</span>
              <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                To deliver comprehensive asset management and equipment solutions
                for India&apos;s mining and construction industry — through
                process-driven maintenance, skilled manpower, and India-built safety
                systems — reducing cost per hour, maximising machine availability,
                and ensuring every site operates at its highest potential.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What makes Rizitek different */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 border-b border-ink/10 pb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
            What Makes Rizitek Different
          </span>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col gap-4 bg-cream p-8">
                <span className="flex h-9 w-9 items-center justify-center bg-signal font-mono text-sm font-bold text-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-base leading-snug">{d.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Board members */}
      <section className="bg-signal">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 border-b border-ink/15 pb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/60">
              Leadership
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {BOARD.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="flex h-full flex-col gap-4 border border-ink/15 bg-cream p-8">
                  <div>
                    <h3 className="font-display text-lg leading-snug">{m.name}</h3>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink/50">
                      {m.role}
                    </p>
                  </div>
                  {m.bio.map((p, i) => (
                    <p key={i} className="text-[13px] leading-relaxed text-ink/60">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / milestones */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 border-b border-ink/10 pb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
            Our Journey
          </span>
        </div>
        <Reveal>
          <h2 className="mb-14 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            A decade-plus of milestones, one contract at a time.
          </h2>
        </Reveal>
        <ol className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
          {MILESTONES.map((m, i) => (
            <Reveal key={i} delay={(i % 5) * 70}>
              <li className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="w-20 shrink-0 font-display text-2xl text-ink">{m.year}</span>
                <span className="text-[14px] leading-relaxed text-ink/70">{m.body}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </main>
  );
}

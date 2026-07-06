import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AMC, installation & retrofit, turnkey HEMM maintenance, machine rehab, DGMS compliance, and pan-India field support from Rizitek.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        eyebrow="What We Do"
        title="We Don't Just Sell Safety — We Deliver It."
        intro="At Rizitek, our commitment to your safety doesn't end at the point of sale. From installation and commissioning to long-term maintenance contracts and DGMS compliance support, we provide comprehensive services designed to keep your entire equipment performing at their best — and your operations compliant, efficient, and protected."
      />

      {/* 1. AMC */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <ServiceHeading index="01" title="Annual Maintenance Contract (AMC)" tagline="Your Asset, Always at Peak Performance." />
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/70">
          Rizitek&apos;s AMC programs ensure your installed safety systems are
          continuously monitored, maintained, and optimised — eliminating the risk of
          safety failures from neglected equipment. Our structured preventive
          maintenance approach, combined with priority breakdown response, means
          your systems are always ready when it matters most.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Standard Warranty Coverage', b: '12 months from installation' },
            { t: 'Extended AMC Coverage', b: 'Up to 24 months with full preventive and breakdown support' },
            { t: 'On-Site Technical Support', b: 'Dedicated engineer deployment at your site on a scheduled basis' },
            { t: 'Scheduled Preventive Visits', b: 'Proactive maintenance calendar to prevent breakdowns' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="flex h-full flex-col gap-2 bg-cream p-6">
                <h3 className="font-display text-sm uppercase tracking-wide">{c.t}</h3>
                <p className="text-[13px] leading-relaxed text-ink/60">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2. Installation & Retrofit */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <ServiceHeading
            index="02"
            title="Safety System Installation & Retrofit Integration"
            tagline="Upgrade Any Fleet. No Disruption. Full DGMS Compliance."
            dark
          />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-cream/70">
            Rizitek specialises in retrofitting advanced safety systems into
            existing mining and construction equipment without requiring OEM
            modifications or causing extended operational downtime. Our certified
            installation teams are experienced across all major equipment brands and
            models operating in India.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              'Rear Vision & 360° Camera System Installation (HaulEye, HaulEye X360)',
              'Proximity Warning System Installation (EdgeSense)',
              'Fatigue Monitoring System Installation (SentinelEye)',
              'Seat Belt Monitoring System Installation (SecureLatch)',
              'Automatic Fire Suppression System Installation (EmberShield)',
              'Alcohol Detection & Engine Interlock Installation (DriveSafe)',
              'Auto Dipper System Installation (BeamSense)',
              'Delayed Startup System Installation (StartShield)',
              'Reverse Audio-Visual Alarm Installation (BackAlert)',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-cream/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-cream/10 pt-8">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest2 text-signal">
              Key Advantages
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                'Non-intrusive installation — OEM architecture unchanged',
                'Multi-OEM compatibility — works with Caterpillar, Komatsu, BEML & more',
                'Minimal machine downtime during installation',
                'Full commissioning, testing, and operator training included',
                'DGMS-compliant deployment with documentation support',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-cream/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. HEMM Maintenance */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <ServiceHeading index="03" title="HEMM Maintenance on Turnkey Basis" tagline="Complete Equipment Care. One Responsible Partner." />
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/70">
          Beyond safety systems, Rizitek offers comprehensive maintenance support
          for Heavy Earth Moving Machinery operating in demanding mining
          environments. Our process and KPI driven maintenance methodology, using
          global best practices, is focused on one outcome: reducing your
          cost-per-ton while maximizing equipment availability.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Dump Trucks', 'Excavators', 'Surface Miners', 'Wheel Loaders', 'Dozers', 'Water Sprinklers', 'Mining Support Equipment'].map((t) => (
            <span key={t} className="border border-ink/20 px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-ink/70">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Machine & Component Rehab */}
      <section className="bg-signal">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <ServiceHeading
            index="04"
            title="Machine & Component Rehab"
            tagline="Precision Engineering that Restores Performance without the Premium Price."
          />
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
            {[
              'Comprehensive overhaul of heavy machinery aggregates using either client-provided or in-house sourced spares',
              'Complete teardown, inspection, and assembly executed within a certified, strict contamination-controlled environment',
              'Component life cycles and operational reliability brought on par with original factory specifications',
              'Exceptional value proposition delivering elite, specialized workmanship at a fraction of factory-authorized dealership costs',
              'A dependable, engineered alternative to substandard local workshops, preventing premature failures and high downtime risks',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-ink/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Pan India support */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <ServiceHeading index="05" title="Pan India Service Support Infrastructure" tagline="Wherever You Mine, We're There." />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Field Service Engineers', b: '200+ dedicated engineers deployed across mining regions' },
            { t: 'Coverage Area', b: 'Pan India — with deep presence in Jharkhand, Odisha, West Bengal, Chhattisgarh, Rajasthan' },
            { t: 'Response Time', b: '48–72 hours guaranteed response at site' },
            { t: 'Spare Parts Availability', b: 'Warehouses at Ranchi for fast dispatch' },
            { t: 'Escalation Matrix', b: 'Dedicated escalation process — your issue never falls through the cracks' },
            { t: 'Technical Support', b: 'Remote and on-site technical assistance from experienced engineers' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col gap-2 bg-cream p-6">
                <h3 className="font-display text-sm uppercase tracking-wide">{c.t}</h3>
                <p className="text-[13px] leading-relaxed text-ink/60">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. DGMS Compliance */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <ServiceHeading index="06" title="DGMS Compliance" tagline="Regulatory Readiness, Built In — Not Bolted On." dark />
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {['Gap analysis', 'Documentation support', 'Fleet safety upgrades', 'Compliance readiness reviews'].map((item) => (
              <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-cream/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Training */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <ServiceHeading index="07" title="Training & Technical Support" tagline="Getting the Most Out of Every System You Install." />
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/70">
          To ensure your team gets maximum value from every safety system, Rizitek
          provides:
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
          {[
            { t: 'Operator Training', b: 'Hands-on training for every installed system' },
            { t: 'Supervisor Training', b: 'Understanding system outputs, alerts, and data' },
            { t: 'Safety Awareness Programs', b: 'Site-wide safety culture development' },
            { t: 'Basic Troubleshooting Guidance', b: 'Empowering your team to resolve minor issues' },
            { t: 'Preventive Maintenance Training', b: 'Helping your team maintain systems between service visits' },
            { t: 'Refresher Training Sessions', b: 'Periodic re-training for new operators or system updates' },
          ].map((item) => (
            <li key={item.t} className="flex gap-3 text-[14px] leading-relaxed text-ink/70">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
              <span>
                <span className="font-semibold text-ink">{item.t}</span> — {item.b}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function ServiceHeading({
  index,
  title,
  tagline,
  dark = false,
}: {
  index: string;
  title: string;
  tagline: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <span className={`font-mono text-[11px] uppercase tracking-widest2 ${dark ? 'text-signal' : 'text-ink/50'}`}>
        {index} / Service
      </span>
      <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className={`mt-3 font-display text-lg ${dark ? 'text-cream/70' : 'text-ink/60'}`}>{tagline}</p>
    </Reveal>
  );
}

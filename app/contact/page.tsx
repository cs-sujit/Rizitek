import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageBanner from '@/components/PageBanner';
import ContactFormWithParams from '@/components/ContactFormWithParams';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Rizitek India — Head Office in Ranchi, Jharkhand. Enquire about products, AMC, DGMS compliance, or dealership.',
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Get in Touch"
        title="Get in Touch — We're Here to Help."
        intro="Whether you have a question about our products, need a site assessment, want to discuss an AMC, or are interested in our dealership programme — we'd love to hear from you. Our team typically responds within 24 hours."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Office info */}
          <Reveal className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Head Office
            </span>
            <h2 className="mt-4 font-display text-2xl leading-snug">Ranchi, Jharkhand</h2>
            <div className="mt-6 flex flex-col gap-5 text-[14px] leading-relaxed text-ink/70">
              <p>Park View Enclave, Ranchi College Rd, Hatma, Ranchi, Jharkhand 834008</p>
              <p>
                <span className="block text-[12px] font-bold uppercase tracking-wide text-ink/40">Phone</span>
                <a href="tel:+919570595087" className="focus-ring hover:text-ink">
                  +91 95705 95087
                </a>
              </p>
              <p>
                <span className="block text-[12px] font-bold uppercase tracking-wide text-ink/40">Email</span>
                <a href="mailto:info@rizitekindia.com" className="focus-ring hover:text-ink">
                  info@rizitekindia.com
                </a>
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-8">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/50">
              Enquiry Form
            </span>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-ink/70">
              Use this form to enquire about any of our products, services, or
              partnerships.
            </p>
            <div className="mt-8">
              <Suspense fallback={null}>
                <ContactFormWithParams />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

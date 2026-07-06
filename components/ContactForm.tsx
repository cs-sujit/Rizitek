'use client';

import { useState, type FormEvent } from 'react';
import { ENQUIRY_SUBJECTS } from '@/lib/nav';

const inputClass =
  'focus-ring w-full border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-ink';
const labelClass = 'mb-2 block text-[12px] font-bold uppercase tracking-wide text-ink/70';

export default function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: this is a static export site with no backend. Wire this up to a
    // form endpoint (e.g. Formspree, Web3Forms, or your own API route) by
    // pointing the <form> action / this handler at that service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-signal/40 bg-signal/10 p-8">
        <p className="font-display text-xl">Thank you — we&apos;ve got your enquiry.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          Our team typically responds within 24 hours. For anything urgent, call us
          directly at{' '}
          <a href="tel:+919570595087" className="focus-ring font-semibold text-ink underline">
            +91 95705 95087
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Full Name *
        </label>
        <input id="name" name="name" required className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="mobile">
          Mobile Number *
        </label>
        <input id="mobile" name="mobile" required className={inputClass} placeholder="+91" />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email Address *
        </label>
        <input id="email" type="email" name="email" required className={inputClass} placeholder="you@company.com" />
      </div>
      <div>
        <label className={labelClass} htmlFor="location">
          Address / Location
        </label>
        <input id="location" name="location" className={inputClass} placeholder="Site or city (optional)" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="subject">
          Contact Regarding *
        </label>
        <select id="subject" name="subject" required defaultValue={defaultSubject ?? ''} className={inputClass}>
          <option value="" disabled>
            Select a product or service
          </option>
          {ENQUIRY_SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} placeholder="Tell us about your fleet, site, or requirement" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="focus-ring inline-flex items-center gap-2 bg-ink px-7 py-4 text-[13px] font-bold uppercase tracking-wide text-cream transition hover:bg-navy"
        >
          Send Enquiry <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

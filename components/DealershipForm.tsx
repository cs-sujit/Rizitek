'use client';

import { useState, type FormEvent } from 'react';

const inputClass =
  'focus-ring w-full border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-ink';
const labelClass = 'mb-2 block text-[12px] font-bold uppercase tracking-wide text-ink/70';

export default function DealershipForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: static export site — connect this to a form backend
    // (Formspree, Web3Forms, your own API route, etc.) to receive submissions.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-signal/40 bg-signal/10 p-8">
        <p className="font-display text-xl">Thanks for your interest in partnering with Rizitek.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          A member of our partnerships team will contact you within 48 hours with the
          company brochure and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="d-name">
          Full Name *
        </label>
        <input id="d-name" name="name" required className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="d-company">
          Company&apos;s Name *
        </label>
        <input id="d-company" name="company" required className={inputClass} placeholder="Your company" />
      </div>
      <div>
        <label className={labelClass} htmlFor="d-mobile">
          Mobile Number *
        </label>
        <input id="d-mobile" name="mobile" required className={inputClass} placeholder="+91" />
      </div>
      <div>
        <label className={labelClass} htmlFor="d-email">
          Email Address *
        </label>
        <input id="d-email" type="email" name="email" required className={inputClass} placeholder="you@company.com" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="d-products">
          Products Interested In *
        </label>
        <input id="d-products" name="products" required className={inputClass} placeholder="e.g. HaulEye, EdgeSense, full range" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="d-message">
          Message / Area of Interest *
        </label>
        <textarea id="d-message" name="message" required rows={5} className={inputClass} placeholder="Tell us about your region, network, and experience" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="focus-ring inline-flex items-center gap-2 bg-signal px-7 py-4 text-[13px] font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-signal"
        >
          Submit &amp; Download Brochure <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

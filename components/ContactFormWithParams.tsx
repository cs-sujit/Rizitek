'use client';

import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ContactForm';

export default function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject') ?? undefined;
  return <ContactForm defaultSubject={subject} />;
}

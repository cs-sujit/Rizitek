import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import FloatingActions from '@/components/FloatingActions';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Rizitek India — HEMM Safety Systems & Equipment Asset Management',
    template: '%s | Rizitek India',
  },
  description:
    "India's trusted partner in heavy equipment asset management — made-in-India HEMM safety systems, AMC, and pan-India service support.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-cream font-body antialiased">
        <CustomCursor />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

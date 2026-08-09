'use client';

import { useEffect } from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import IndependentSupportHelpView from '@/components/IndependentSupportHelpView';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-ish-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-ish-montserrat',
  display: 'swap',
});

/**
 * Mobile-only fullscreen overlay matching /compare-internet-options.
 * No close control — intended for Xfinity and Spectrum provider pages.
 */
export default function MobileIndependentSupportModal() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');

    const apply = () => {
      document.body.style.overflow = mq.matches ? 'hidden' : '';
    };

    apply();
    mq.addEventListener('change', apply);
    return () => {
      mq.removeEventListener('change', apply);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] md:hidden overflow-y-auto ${poppins.variable} ${montserrat.variable}`}
      role="dialog"
      aria-modal="true"
      aria-label="Internet services and assistance"
    >
      <IndependentSupportHelpView fullscreen />
    </div>
  );
}

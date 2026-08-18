'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';
import { hidesChrome } from '@/lib/mobileChrome';

export default function Footer() {
  const pathname = usePathname() || '';

  return (
    <footer
      className={`bg-[#050b12] border-t border-white/10 pt-14 pb-8${
        hidesChrome(pathname) ? ' hidden' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={`${SITE.brand} logo`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-display text-2xl font-bold text-gradient">{SITE.brand}</span>
            </div>
            <p className="mt-4 text-sm text-[#9aa6b5] max-w-xs leading-relaxed">
              {SITE.operatedBy} is an independent comparison platform that helps you explore Internet and TV plans from
              multiple trusted providers. We do not sell, install, or manage services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Contact Us To Compare', '/contact-us-to-compare'],
                ['Contact Us', '/contact'],
                ['Privacy Policy', '/privacy-policy'],
                ['Terms & Conditions', '/terms-conditions'],
                ['Reseller Disclosure', '/reseller-disclosure'],
                ['Cookie Policy', '/cookie-policy'],
                ['Fees & Disclosures', '/fees-disclosures'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#9aa6b5] hover:text-amber-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-[#9aa6b5]">
              <li>
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-amber-300 transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-amber-300 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Disclaimer</h3>
          <div className="space-y-3 text-xs text-[#7a8796] leading-relaxed max-w-4xl">
            {SITE.footerDisclaimer.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-[#7a8796]">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-[#667384] max-w-2xl md:text-right leading-relaxed">
            All trademarks belong to their respective owners and are used for identification and comparison only.
          </p>
        </div>
      </div>
    </footer>
  );
}

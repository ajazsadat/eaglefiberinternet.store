'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, PROVIDERS } from '@/lib/site';
import { hidesChrome } from '@/lib/mobileChrome';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProvidersOpen, setIsProvidersOpen] = useState(false);
  const pathname = usePathname() || '';
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const chromeClass = hidesChrome(pathname) ? 'hidden' : '';

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProvidersOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Live Agent', href: '/live-agent' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) =>
    pathname === path || (path !== '/' && pathname.startsWith(path));

  const disclaimer = (
    <div className="bg-amber-900/20 text-[#b8c0cc] text-[10px] sm:text-xs py-2.5 px-4 text-center border-b border-white/10 leading-relaxed">
      <p className="max-w-5xl mx-auto font-semibold text-white text-xs sm:text-sm mb-1.5">
        {SITE.legalName} (d/b/a {SITE.domain})
      </p>
      <p className="max-w-5xl mx-auto">{SITE.topDisclaimer}</p>
    </div>
  );

  if (!mounted) {
    return (
      <div className={chromeClass}>
        {disclaimer}
        <div className="sticky top-0 w-full z-50 bg-[#071018]/90 backdrop-blur-md border-b border-white/5">
          <div className="h-20" />
        </div>
      </div>
    );
  }

  return (
    <div className={chromeClass}>
      {disclaimer}
      <header className="sticky top-0 w-full z-50 bg-[#071018]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt={`${SITE.brand} logo`}
                width={44}
                height={44}
                className="rounded-full ring-1 ring-amber-400/30 group-hover:ring-amber-400/60 transition"
              />
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-gradient">
                {SITE.brand}
              </span>
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-300 ${
                    isActive(link.href) ? 'text-amber-300' : 'text-[#c5ced9]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProvidersOpen(!isProvidersOpen)}
                  className={`text-sm font-medium transition-colors hover:text-amber-300 flex items-center ${
                    PROVIDERS.some((p) => pathname.startsWith(p.href)) ? 'text-amber-300' : 'text-[#c5ced9]'
                  }`}
                >
                  Providers
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProvidersOpen && (
                  <div className="absolute left-0 mt-2 w-52 rounded-xl shadow-lg bg-[#121c2a] ring-1 ring-white/10 border border-white/10 overflow-hidden">
                    <div className="py-1">
                      {PROVIDERS.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-[#c5ced9] hover:bg-white/5 hover:text-amber-300"
                          onClick={() => setIsProvidersOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`tel:${SITE.phoneTel}`}
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:from-[#f5d29a] hover:to-[#efb45a] transition-all hover:scale-[1.03]"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-amber-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0c1520] border-t border-white/10">
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive(link.href) ? 'text-amber-300 bg-white/5' : 'text-[#c5ced9]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-2 pb-1 text-xs uppercase tracking-wider text-gray-500">Providers</div>
              {PROVIDERS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-base text-[#c5ced9]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-3 block w-full text-center px-4 py-3 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a]"
                onClick={() => setIsOpen(false)}
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

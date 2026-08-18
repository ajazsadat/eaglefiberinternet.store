import Link from 'next/link';
import { SITE } from '@/lib/site';

function HumanAgentIcon() {
  return (
    <svg
      className="h-16 w-16 text-[#0d7377] md:h-20 md:w-20"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 52c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 28v6c0 4-3 7-7 7h-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 28v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="h-16 w-16 text-[#0d7377] md:h-20 md:w-20"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect x="10" y="14" width="44" height="30" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 20l18 12 18-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 48h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

const cardClass =
  'group flex flex-col items-center justify-center gap-5 rounded-2xl border border-[#0c1c24]/10 bg-white px-6 py-12 md:py-16 text-center shadow-[0_1px_3px_rgba(12,28,36,0.06)] transition hover:border-[#0d7377]/40 hover:shadow-[0_6px_20px_rgba(12,28,36,0.08)]';

/** Standalone compare/contact lander for /compare-internet-options (header and footer are hidden). */
export default function CompareOptionsView() {
  return (
    <div className="flex min-h-screen flex-col bg-[#eef5f6] text-[#0c1c24]">
      <section className="flex flex-grow items-center py-14 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h1 className="mb-10 text-center font-display text-xl font-extrabold leading-tight tracking-tight sm:text-2xl md:mb-14 md:text-3xl">
            Call now and we&apos;ll{' '}
            <span className="text-[#0d7377]">walk you through your options.</span>
          </h1>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8">
            <a href={`tel:${SITE.phoneTel}`} className={cardClass}>
              <HumanAgentIcon />
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2dd4bf] px-7 py-3.5 font-bold text-[#0c1c24] transition group-hover:brightness-110">
                <PhoneIcon />
                {SITE.phoneDisplay}
              </span>
            </a>

            <Link href="/contact" className={cardClass}>
              <MessageIcon />
              <span className="font-display text-xl font-bold md:text-2xl">Send Us a Message</span>
              <p className="max-w-xs text-sm leading-relaxed text-[#4a6570] md:text-base">
                Prefer not to call? Fill out our contact form and we&apos;ll follow up.
              </p>
              <span className="inline-flex items-center justify-center rounded-full bg-[#0d7377] px-7 py-3.5 font-bold text-white transition group-hover:bg-[#095456]">
                Go to Contact Form
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0c1c24]/10 bg-white py-5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-xs leading-relaxed text-[#4a6570]">{SITE.topDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}

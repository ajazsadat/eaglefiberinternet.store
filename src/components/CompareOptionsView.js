import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

function AgentIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="8" r="3.25" strokeLinecap="round" />
      <path strokeLinecap="round" d="M5.5 20c0-3.6 2.9-5.75 6.5-5.75s6.5 2.15 6.5 5.75" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MessageIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

/** Standalone compare/contact lander for /compare-internet-options (header and footer are hidden). */
export default function CompareOptionsView() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef5f6] text-[#0c1c24]">
      <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Link href="/" className="mb-5 inline-flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${SITE.brand} logo`}
            width={48}
            height={48}
            className="h-10 w-10 rounded-full bg-[#0c1c24] ring-1 ring-[#0c1c24]/15 sm:h-12 sm:w-12"
            priority
          />
          <span className="font-display text-xl font-bold tracking-tight text-[#0c1c24] sm:text-2xl">
            {SITE.brand}
          </span>
        </Link>

        <h1 className="mb-6 max-w-3xl text-center font-display text-2xl font-extrabold tracking-tight text-[#0c1c24] sm:text-3xl">
          Call now and we&apos;ll{' '}
          <span className="text-[#0d7377]">walk you through your options.</span>
        </h1>

        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col rounded-2xl border border-[#0c1c24]/10 bg-white p-5 sm:p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d7377]/10 text-[#0d7377]">
              <AgentIcon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-xl font-bold text-[#0c1c24] sm:text-2xl">Call to Compare Now</h2>
            <p className="mt-2 mb-5 flex-grow text-sm leading-relaxed text-[#4a6570] sm:text-base">
              Speak with a comparison specialist and get plan options for your address.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2dd4bf] px-5 py-3.5 font-bold text-[#0c1c24] transition hover:brightness-110"
            >
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-[#0c1c24]/10 bg-white p-5 sm:p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d7377]/10 text-[#0d7377]">
              <MessageIcon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-xl font-bold text-[#0c1c24] sm:text-2xl">Contact Form</h2>
            <p className="mt-2 mb-5 flex-grow text-sm leading-relaxed text-[#4a6570] sm:text-base">
              Prefer not to call? Fill out our contact form and we&apos;ll follow up.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0d7377] px-5 py-3.5 font-bold text-white transition hover:bg-[#095456]"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-center text-xs leading-relaxed text-[#4a6570] sm:text-sm">
          {SITE.topDisclaimer}
        </p>
      </div>
    </div>
  );
}

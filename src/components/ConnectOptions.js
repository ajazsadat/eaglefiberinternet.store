import Link from 'next/link';
import { SITE } from '@/lib/site';

function HumanAgentIcon() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20 text-amber-300" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M14 52c0-10 8-16 18-16s18 6 18 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M48 28v6c0 4-3 7-7 7h-1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M16 28v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20 text-amber-300" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="44" height="30" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M14 20l18 12 18-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 48h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PhoneButton() {
  return (
    <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] group-hover:brightness-110 transition shadow-[0_0_20px_rgba(232,168,74,0.25)]">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {SITE.phoneDisplay}
    </span>
  );
}

/**
 * Minimal two-option connect UI (headline + call / message cards).
 */
export default function ConnectOptions() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="font-display text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-10 md:mb-14">
        How would you like to connect for{' '}
        <span className="text-amber-300">Internet Services and Assistance?</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-amber-400/50 hover:bg-[#152033] transition"
        >
          <HumanAgentIcon />
          <span className="font-display text-xl md:text-2xl font-bold text-white">
            Speak With A Human Agent
          </span>
          <PhoneButton />
        </a>

        <Link
          href="/contact"
          className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-amber-400/50 hover:bg-[#152033] transition"
        >
          <MessageIcon />
          <span className="font-display text-xl md:text-2xl font-bold text-white">Send Us a Message</span>
          <p className="text-[#a8b3c2] text-sm md:text-base leading-relaxed max-w-xs">
            Prefer not to call? Fill out our contact form and we&apos;ll follow up.
          </p>
          <span className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] group-hover:brightness-110 transition shadow-[0_0_20px_rgba(232,168,74,0.25)]">
            Go to Contact Form
          </span>
        </Link>
      </div>
    </div>
  );
}

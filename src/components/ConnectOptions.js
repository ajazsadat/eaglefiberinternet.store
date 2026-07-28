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

function AutomatedLineIcon() {
  return (
    <svg className="w-16 h-16 md:w-20 md:h-20 text-amber-300" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="18" y="8" width="28" height="48" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="46" r="2.5" fill="currentColor" />
      <path d="M26 18h12M26 26h12M26 34h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Minimal two-option connect UI (headline + two tel cards),
 * matching the simplyactivateservices live-agent pattern.
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
          className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-amber-400/50 hover:bg-[#152033] transition"
        >
          <HumanAgentIcon />
          <span className="font-display text-xl md:text-2xl font-bold text-white">
            Speak With A Human Agent
          </span>
          <span className="text-lg md:text-xl font-semibold text-amber-300 tracking-wide">
            {SITE.phoneDisplay}
          </span>
        </a>

        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-amber-400/50 hover:bg-[#152033] transition"
        >
          <AutomatedLineIcon />
          <span className="font-display text-xl md:text-2xl font-bold text-white">
            Automated Support Line
          </span>
          <span className="text-lg md:text-xl font-semibold text-amber-300 tracking-wide">
            {SITE.phoneDisplay}
          </span>
        </a>
      </div>
    </div>
  );
}

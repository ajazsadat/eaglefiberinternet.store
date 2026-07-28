import { SITE } from '@/lib/site';

/**
 * Two-option connect cards matching the live-agent pattern:
 * Speak with a human agent + Automated Support Line.
 */
export default function ConnectOptions({ className = '' }) {
  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8 ${className}`}>
      <a
        href={`tel:${SITE.phoneTel}`}
        className="group rounded-2xl border border-white/10 bg-[#121c2a] p-8 md:p-10 flex flex-col hover:border-amber-400/40 hover:bg-[#152033] transition"
      >
        <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">Phone call</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-amber-200 transition">
          Speak with a human agent
        </h2>
        <p className="text-[#a8b3c2] leading-relaxed mb-8 flex-grow">
          Call our team for plan comparison help, availability questions, or guidance on next steps.
        </p>
        <span className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] group-hover:brightness-110 transition">
          Call Now {SITE.phoneDisplay}
        </span>
      </a>

      <a
        href={`tel:${SITE.phoneTel}`}
        className="group rounded-2xl border border-white/10 bg-[#121c2a] p-8 md:p-10 flex flex-col hover:border-amber-400/40 hover:bg-[#152033] transition"
      >
        <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">Automated</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-amber-200 transition">
          Automated Support Line
        </h2>
        <p className="text-[#a8b3c2] leading-relaxed mb-8 flex-grow">
          Use our automated support line for quick routing to the right resource — independent service, not a carrier.
        </p>
        <span className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold border border-amber-400/40 text-amber-200 group-hover:bg-amber-400/10 transition">
          Call Automated Line {SITE.phoneDisplay}
        </span>
      </a>
    </div>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/site';
import MobilePageLogo from '@/components/MobilePageLogo';

export const metadata = {
  title: 'Independent Support Help & Plan Comparison | Eagle Fiber Internet',
  description:
    'Independent support-routing and plan comparison help. Not affiliated with any carrier. Get pointed to the right resource or compare new plan options.',
};

const helpItems = [
  'Connecting you to the right support resource for billing, outages, or account questions',
  'Comparing current plans vs. new offers if you’re thinking about switching',
  'Answering general questions about service options in your area',
];

export default function IndependentSupportHelpPage() {
  return (
    <div className="bg-[#071018] min-h-screen">
      <section className="border-b border-white/5 bg-[#0a1420]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Independent Support Help
          </h1>
          <p className="text-sm md:text-base text-amber-300/90 leading-relaxed max-w-3xl">
            Not affiliated with, endorsed by, or connected to Xfinity, Comcast, or Comcast Cable Communications, LLC —
            or any other internet provider.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Need help with your home internet or cable service?
          </h2>
          <p className="text-lg text-[#b8c3d1] leading-relaxed max-w-2xl mb-8">
            We&apos;re an independent support-routing and comparison service — real people, fast answers, no bots. We can
            help you get connected with the right resource, whether that&apos;s your provider&apos;s official support line or
            comparing new plan options.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition shadow-[0_0_24px_rgba(232,168,74,0.3)]"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">What we help with</h2>
          <ul className="space-y-4">
            {helpItems.map((item) => (
              <li key={item} className="flex gap-3 text-[#a8b3c2] leading-relaxed">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-[#0a1420] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/25 bg-[#121c2a] p-7 md:p-9">
            <h2 className="font-display text-xl font-bold text-white mb-3">Important disclosure</h2>
            <p className="text-[#a8b3c2] leading-relaxed mb-6">
              {SITE.legalName} is an independent service. We are not Xfinity, Comcast, or any carrier affiliate, and we
              do not have access to provider accounts. For account-specific support, billing, or outage reporting,
              please contact your provider directly through their official channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
              >
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/compare/xfinity-plans"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border border-white/15 text-[#c5ced9] hover:bg-white/5 transition"
              >
                Compare Xfinity plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-[#7a8796] leading-relaxed">
          <p>
            Provider names and related marks are trademarks of their respective owners and are used here for
            identification and comparison only.
          </p>
        </div>
      </section>

      <MobilePageLogo />
    </div>
  );
}

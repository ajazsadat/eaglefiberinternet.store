import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import ProviderFaq from '@/components/ProviderFaq';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';

export default function ProviderPage({
  name,
  brandMark,
  tagline,
  image,
  introTitle,
  introBody,
  benefits,
  plansNote,
  plans,
  contentSections = [],
  importantPoints = [],
  importantExtra,
  faqs = [],
  relatedHelp,
  showTopCtas = false,
  liveAgentHref = '/live-agent',
}) {
  const displayName = brandMark || name;

  return (
    <div className="flex flex-col min-h-screen bg-[#071018]">
      <section className="relative h-[42vh] md:h-[50vh] min-h-[380px] flex items-end overflow-hidden border-b border-white/10">
        <Image src={image} alt={`${name} internet`} fill className="object-cover opacity-45" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/50 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <p className="text-amber-300/90 text-sm font-medium mb-2">{SITE.brandFull}</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Compare {displayName} Internet Plans
          </h1>
          <p className="text-lg md:text-xl text-[#c5ced9] max-w-2xl">{tagline}</p>
        </div>
      </section>

      {showTopCtas && (
        <section className="border-b border-white/5 bg-[#0a1420]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
            <Link
              href={liveAgentHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Speak With A Live Agent
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </section>
      )}

      {/* Intro — matches WP “Why Choose Eagle Fiber” */}
      <section className="border-b border-white/5 bg-[#0a1420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              {introTitle || `Compare ${displayName} Internet Packages — Independent Comparison`}
            </h2>
            <p className="text-[#a8b3c2] leading-relaxed">
              {introBody ||
                `${SITE.brandFull} (${SITE.legalName}) operates as an independent comparison platform, assisting customers in reviewing and comparing internet plans from participating providers. Our goal is to simplify the decision-making process and help you find a plan you can sign up for directly with the provider.`}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Why choose {SITE.brandFull}?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="bg-[#121c2a] px-4 py-3.5 rounded-xl border border-white/5 flex items-start gap-3 text-[#c5ced9] text-sm"
                >
                  <span className="text-amber-400 mt-0.5">✓</span>
                  {b}
                </div>
              ))}
            </div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              Compare {name} Plans — Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Compare {displayName} Internet Plans
          </h2>
          <p className="text-[#7a8796] text-sm leading-relaxed">
            {plansNote ||
              `*Pricing may vary by ZIP code and is subject to change. Plan details and rates shown are based on publicly available ${name} information and may not reflect current offers. Services are subject to provider terms, regional availability, and technical limits. Taxes, fees, and equipment costs are extra. Subject to availability.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name || plan.speed}
              className="bg-[#121c2a] rounded-2xl p-7 border border-white/10 hover:border-amber-400/35 transition-colors flex flex-col"
            >
              <h3 className="font-display text-xl font-bold text-white">
                {plan.name || plan.speed}
              </h3>
              {plan.subtitle && (
                <p className="mt-2 text-sm text-amber-300/90 leading-relaxed">{plan.subtitle}</p>
              )}
              {plan.speed && plan.name && (
                <p className="mt-2 text-sm text-amber-300/90">{plan.speed}</p>
              )}
              <ul className="mt-5 space-y-2.5 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-[#a8b3c2]">
                    <span className="text-amber-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-white/10">
                <p className="text-xs text-[#7a8796] mb-1">From</p>
                <p className="text-white">
                  <span className="text-xl font-bold">$</span>
                  <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-[#7a8796]">* / month</span>
                </p>
                <p className="text-xs text-[#667384] mt-1">Taxes, fees & equipment extra</p>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="mt-5 w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
                >
                  Compare Plan — Contact Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections from WP-style pages */}
      {contentSections.length > 0 && (
        <section className="bg-[#0a1420] border-y border-white/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            {contentSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-[#a8b3c2] leading-relaxed text-[15px]">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <ProviderComparisonTable />

      {/* Important information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Important Information</h2>
          <p className="text-[#a8b3c2] leading-relaxed mb-4 text-[15px]">
            This website is operated by {SITE.legalName}, an independent comparison platform. {SITE.brand} is not{' '}
            {displayName} and does not own or operate the {displayName} network, and is not an authorized retailer,
            agent, or licensed distributor for {name}. All trademarks, logos, and brand names belong to their
            respective owners and are used solely for identification purposes.
          </p>
          <ul className="space-y-2.5 mb-5">
            {(
              importantPoints.length
                ? importantPoints
                : [
                    'Provide general information about available plans',
                    'Help customers compare multiple service providers',
                    'Point customers toward a provider they can sign up with directly',
                    'Installation, billing, technical support, and network services are managed by the service providers',
                  ]
            ).map((point) => (
              <li key={point} className="flex gap-2 text-sm text-[#a8b3c2]">
                <span className="text-amber-400">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-[#7a8796] text-sm leading-relaxed">
            {importantExtra ||
              `This website may receive referral compensation from third-party marketing partners when a visitor signs up for service after being referred through our site. This compensation does not come directly from ${name} or other providers named on this site.`}
          </p>
        </div>
      </section>

      <ProviderFaq faqs={faqs} />

      {relatedHelp && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="rounded-2xl border border-amber-400/25 bg-[#0a1420] p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2">{relatedHelp.title}</h2>
              <p className="text-[#a8b3c2] text-sm leading-relaxed max-w-2xl">{relatedHelp.description}</p>
            </div>
            <Link
              href={relatedHelp.href}
              className="inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              {relatedHelp.cta || 'Get help'}
            </Link>
          </div>
        </section>
      )}

      <section className="pb-16 px-4 text-center">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition shadow-[0_0_24px_rgba(232,168,74,0.3)]"
        >
          Call Now: {SITE.phoneDisplay}
        </a>
      </section>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, PROVIDERS, PROVIDER_NAMES_LIST } from '@/lib/site';

const featuredPackages = [
  {
    provider: 'Xfinity',
    href: '/compare/xfinity-plans',
    plans: [
      {
        name: 'Connect More',
        price: '40',
        speed: 'Up to 300 Mbps down / 10 Mbps up',
        features: ['Everyday browsing & streaming', 'No term contract required', 'Includes Auto-pay discount'],
      },
      {
        name: 'Superfast',
        price: '45',
        speed: 'Up to 500 Mbps down / 20 Mbps up',
        features: ['Busy homes with several devices', 'No term agreement required', 'Supports 4K streaming & gaming'],
      },
      {
        name: 'Gigabit',
        price: '50',
        speed: 'Up to 1,000 Mbps down / 35 Mbps up',
        features: ['Heavy downloads & data use', 'No term contract', 'Ultra-fast fiber-rich speeds'],
      },
    ],
  },
  {
    provider: 'AT&T',
    href: '/compare/att-plans',
    plans: [
      {
        name: 'Internet Air',
        price: '50',
        speed: 'Up to 225 Mbps down / 5 Mbps up',
        features: ['Video meetings & browsing', 'No term contract required', 'Auto-pay / paperless discount'],
      },
      {
        name: 'Preferred Plan',
        price: '65',
        speed: 'Up to 500 Mbps down / 50 Mbps up',
        features: ['4K streaming & remote work', 'No term contract required', 'Reliable high-speed performance'],
      },
      {
        name: 'Ultimate Plan',
        price: '80',
        speed: 'Up to 1 Gbps down / 100 Mbps up',
        features: ['Smart homes & 4K usage', 'No term contract required', 'Top-tier speed for gaming'],
      },
    ],
  },
  {
    provider: 'Spectrum',
    href: '/compare/spectrum-plans',
    plans: [
      {
        name: 'Spectrum Advantage',
        price: '30',
        speed: 'Up to 100 Mbps down / 10 Mbps up',
        features: ['Basic tasks and email', 'No term contract required', 'Modem included at no extra cost'],
      },
      {
        name: 'Spectrum Premier',
        price: '50',
        speed: 'Up to 500 Mbps down / 20 Mbps up',
        features: ['HD streaming & moderate gaming', 'No term contract required', 'Modem included at no extra cost'],
      },
      {
        name: 'Spectrum Gig',
        price: '70',
        speed: 'Up to 1,000 Mbps down / ~35 Mbps up',
        features: ['Heavy users & 4K streaming', 'No term contract required', 'Modem included at no extra cost'],
      },
    ],
  },
];

const comparisonRows = [
  {
    provider: 'AT&T',
    pros: 'Strong fiber network; no data caps on many fiber plans; generally solid support in fiber markets.',
    cons: 'Fiber not available everywhere; non-fiber plans may perform differently.',
  },
  {
    provider: 'Spectrum',
    pros: 'Wide availability; no data caps on many plans; often no long-term contracts.',
    cons: 'Promo pricing can rise later; support and speed consistency vary by market.',
  },
  {
    provider: 'Xfinity',
    pros: 'Strong speed tiers and wide availability; competitive promotional deals.',
    cons: 'Data caps or unlimited add-ons in some areas; experience varies by region.',
  },
  {
    provider: 'Frontier',
    pros: 'Competitive pricing where fiber is available; no data caps on most fiber plans.',
    cons: 'Fiber still limited in many regions; older DSL areas may underperform.',
  },
  {
    provider: 'Windstream',
    pros: 'Broad plan options including fiber in some areas; unlimited data on many plans.',
    cons: 'Fiber availability limited; support quality can vary by location.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProvider, setActiveProvider] = useState(0);

  const faqs = [
    {
      q: 'Are you the internet service provider?',
      a: `${SITE.legalName} operates as an independent comparison platform that helps users explore and evaluate Internet and TV plans from multiple trusted providers. We do not directly sell, install, or manage any Internet or TV services. All trademarks displayed on this site are the property of their respective owners and are used for identification and comparison only.`,
    },
    {
      q: 'Do you charge for your services?',
      a: 'Our comparison and enrollment assistance is free to you. We may receive compensation from providers or authorized partners when you sign up through our channels — at no extra cost to you.',
    },
    {
      q: 'How do I compare plans?',
      a: 'Call our team or browse provider pages on this site. We’ll help you review speeds, pricing, contract terms, and promotions available at your address.',
    },
    {
      q: 'What internet types can I get?',
      a: 'Depending on your location you may see fiber, cable, DSL, fixed wireless, or satellite options. Availability is determined by each provider at your specific address.',
    },
    {
      q: 'How do I get started?',
      a: `Call ${SITE.phoneDisplay}. We’ll check what’s available near you, compare options, and help with enrollment through authorized channels when you’re ready.`,
    },
  ];

  const packageSet = featuredPackages[activeProvider];

  return (
    <div className="flex flex-col min-h-screen bg-[#071018]">
      {/* Hero — brand first, one composition */}
      <section className="relative w-full min-h-[92vh] flex items-end sm:items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.jpg"
            alt=""
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071018] via-[#071018]/85 to-[#071018]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-[#071018]/50" />
          <div className="absolute -left-20 top-1/3 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-glow" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 sm:py-24">
          <div className="flex items-center gap-4 mb-8 animate-rise">
            <Image
              src="/images/logo.png"
              alt={`${SITE.brand} logo`}
              width={72}
              height={72}
              className="rounded-full ring-2 ring-amber-400/40 shadow-lg shadow-amber-900/30"
              priority
            />
            <div>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
                {SITE.brandFull}
              </p>
              <p className="mt-1 text-amber-300/90 text-sm sm:text-base font-medium tracking-wide">
                Independent plan comparison
              </p>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-[1.1] tracking-tight animate-rise-delay">
            Compare internet, TV, and phone deals in your neighborhood—all in one place.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#b8c3d1] max-w-xl font-normal leading-relaxed animate-rise-delay-2">
            Save more on fiber internet and bundles with clear side-by-side options from trusted providers.
          </p>
          <div className="mt-10 animate-rise-delay-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:from-[#f5d29a] hover:to-[#efb45a] shadow-[0_0_28px_rgba(232,168,74,0.35)] transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call & Compare {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Providers we compare</h2>
          <p className="text-[#9aa6b5] max-w-2xl mb-10 leading-relaxed">
            Exact availability, pricing, and plans vary by address — call us or contact your chosen provider to confirm
            options at your location. We generally compare {PROVIDER_NAMES_LIST}.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {PROVIDERS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="font-display text-xl md:text-2xl font-semibold text-white/80 hover:text-amber-300 transition-colors underline-offset-8 hover:underline decoration-amber-400/50"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#667384] max-w-3xl leading-relaxed">
            This list is not a real-time address lookup. Offers and availability are determined by each provider. All
            trademarks belong to their respective owners.
          </p>
        </div>
      </section>

      {/* Solutions — one job */}
      <section className="py-20 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Gigabit speeds. Premium TV. Local savings.
          </h2>
          <p className="text-[#9aa6b5] max-w-2xl mb-14">
            One simple search across internet, cable TV, and bundle options that fit how you actually use the web.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {[
              {
                title: 'High-speed internet',
                body: 'Smooth HD and 4K streaming on multiple devices — compare fiber and cable speeds available near you.',
              },
              {
                title: 'Cable TV',
                body: 'Sports, news, movies, and family channels. Compare lineups so there’s always something worth watching.',
              },
              {
                title: 'Bundle deals',
                body: 'Pair internet with TV or phone for a lower combined bill than buying each service alone.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-bold text-amber-300 mb-3">{item.title}</h3>
                <p className="text-[#a8b3c2] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-[#667384] max-w-3xl">
            Pricing and speeds shown elsewhere on this site are estimates based on publicly listed rates and may not
            reflect current offers. Confirm directly with the provider before purchasing.
          </p>
        </div>
      </section>

      {/* Featured packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Featured packages</h2>
          <p className="text-[#9aa6b5] mb-8 max-w-2xl">
            Sample plans from major providers. Final pricing and availability depend on your address.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {featuredPackages.map((set, i) => (
              <button
                key={set.provider}
                type="button"
                onClick={() => setActiveProvider(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeProvider === i
                    ? 'bg-amber-400 text-[#071018]'
                    : 'bg-white/5 text-[#b8c3d1] hover:bg-white/10'
                }`}
              >
                {set.provider}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageSet.plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-[#121c2a] p-7 flex flex-col hover:border-amber-400/40 transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-amber-300/90">{plan.speed}</p>
                <ul className="mt-5 space-y-2.5 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-[#a8b3c2] flex gap-2">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-[#7a8796] mb-1">From</p>
                  <p className="text-white">
                    <span className="text-2xl font-bold">$</span>
                    <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-[#7a8796]">/mo</span>
                  </p>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="mt-5 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
                  >
                    Compare & Call
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href={packageSet.href} className="text-amber-300 hover:text-amber-200 text-sm font-medium">
              View all {packageSet.provider} details →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">How it works</h2>
          <p className="text-[#9aa6b5] mb-12 max-w-xl">Three simple steps to finding a plan that fits.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'Compare options',
                body: 'We help you weigh providers and plans so you can find a fit — installation is handled by your chosen provider.',
              },
              {
                step: '02',
                title: 'Get guidance',
                body: 'Plans for every budget. We’ll walk through what’s available at your address and what each option includes.',
              },
              {
                step: '03',
                title: 'Enroll with clarity',
                body: 'When you’re ready, we connect you with authorized enrollment channels so you can lock in the deal.',
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="font-display text-amber-400/80 text-sm font-bold tracking-widest mb-3">{item.step}</p>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#a8b3c2] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-12 inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200"
          >
            Call & Compare {SITE.phoneDisplay} →
          </a>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Because your satisfaction matters most
            </h2>
            <p className="text-[#a8b3c2] text-lg leading-relaxed mb-8">
              We know you have choices. Our focus is helping you find a provider and plan that truly fits — for work,
              entertainment, and staying in touch — with a clear, honest look at what’s available to you.
            </p>
            <ul className="space-y-3 text-[#c5ced9]">
              <li className="flex items-center gap-3">
                <span className="text-amber-400">✓</span> Professional comparison team
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">✓</span> Guidance when you need it
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">✓</span> Transparent independent role
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[#1a2434] to-[#121c2a] p-9">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to compare?</h3>
            <p className="text-[#a8b3c2] mb-7 leading-relaxed">
              Call us to check availability and promotions near you — no guesswork.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-xl font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Comparison summary */}
      <section className="py-20 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Top providers — quick comparison
          </h2>
          <p className="text-[#9aa6b5] max-w-3xl mb-10 leading-relaxed">
            Based on publicly available information and consumer reviews. Pros and cons vary by market — always confirm
            details for your address.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[#121c2a] text-[#c5ced9]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Provider</th>
                  <th className="px-5 py-4 font-semibold">Pros</th>
                  <th className="px-5 py-4 font-semibold">Cons</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.provider} className="border-t border-white/5">
                    <td className="px-5 py-4 font-semibold text-white align-top">{row.provider}</td>
                    <td className="px-5 py-4 text-[#a8b3c2] align-top">{row.pros}</td>
                    <td className="px-5 py-4 text-[#a8b3c2] align-top">{row.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10 text-center">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border border-white/10 rounded-xl overflow-hidden bg-[#121c2a]/60">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium hover:bg-white/5"
                >
                  <span>{faq.q}</span>
                  <span className="text-amber-400 text-xl ml-4">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-[#a8b3c2] text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

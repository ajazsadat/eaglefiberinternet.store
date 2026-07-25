'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Which internet providers can I find through your platform?',
      a: `We're not tied to any single provider. Instead, we compare offers from multiple carriers across the U.S. and help connect you with the one that fits your needs — so you get more options in one place, and sign up directly with the provider you choose.`,
    },
    {
      q: 'How can I qualify for special promotions or discounts?',
      a: 'Promotional eligibility is determined by each provider’s individual policies, location, and credit requirements. During your free consultation, our representatives will outline available promotions, qualifying terms, and applicable timelines — with absolutely no purchase obligation.',
    },
    {
      q: 'What does it mean to be an “authorized reseller” or “partner network”?',
      a: 'We are not the direct provider of internet, wireless, or cable services. Instead, we operate as an authorized reseller and licensed retailer for multiple carrier and service networks across the U.S. This means we’re approved to market, compare, and facilitate service orders through official partner and master-dealer programs — giving customers access to more plan options in one place.',
    },
    {
      q: 'Are there any installation or equipment costs?',
      a: 'Any setup, equipment, or activation fees are determined by the selected provider and plan type. Before you proceed with any order, our team will clearly present all related costs, fees, and requirements as outlined by the provider.',
    },
    {
      q: 'How is installation arranged once I select a plan?',
      a: 'Once you confirm your selection, our team coordinates the process with your chosen provider’s certified installation partner. Most installations are completed within 24–48 hours, depending on technician availability and local scheduling.',
    },
    {
      q: 'Who should I contact for support after installation?',
      a: `After your service has been successfully activated, all technical support, billing, and account management are handled directly by your selected provider. You can always reach us at ${SITE.phoneDisplay} for general questions, plan guidance, or help connecting with your provider’s support team.`,
    },
  ];

  const offers = [
    {
      title: 'Internet Plans',
      body: 'Explore and compare available fiber, cable, and fixed-wireless options — from essential home connections to high-speed gigabit business internet.',
    },
    {
      title: 'TV & Streaming Packages',
      body: 'Browse cable and streaming bundles with clear pricing, no hidden terms, and simple installation scheduling.',
    },
    {
      title: 'Wireless Services',
      body: 'Find the latest phone plans and devices with competitive trade-in and port-in offers from authorized network partners.',
    },
    {
      title: 'Home & Business Phone',
      body: 'Explore unlimited local and long-distance calling options, advanced voicemail features, and multi-line business packages.',
    },
    {
      title: 'Home Security Plans',
      body: 'Safeguard your home with smart alarms, video doorbells, and mobile alerts. Compare DIY or professional installation plans — clear terms and no hidden fees.',
    },
  ];

  const whyUs = [
    {
      title: 'Independent & Unbiased',
      body: 'We compare multiple carriers and only recommend what truly fits your needs.',
    },
    {
      title: 'Transparent Pricing',
      body: 'Every quote includes taxes, fees, and equipment details — no surprises.',
    },
    {
      title: 'Real Support',
      body: 'Our team helps coordinate your installation and activation directly with the provider.',
    },
    {
      title: 'Secure Process',
      body: 'Orders are placed through verified, provider-authorized systems.',
    },
    {
      title: 'Nationwide Coverage',
      body: 'Access plans from major providers across the United States.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#071018]">
      {/* Hero */}
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
            Find reliable internet, TV & wireless plans near you
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#b8c3d1] max-w-2xl font-normal leading-relaxed animate-rise-delay-2">
            If your current connection is slow, inconsistent, or just too expensive — we can help. {SITE.brandFull}{' '}
            connects you with trusted U.S. broadband and wireless providers so you can compare, choose, and activate the
            plan that best fits your home or business needs.
          </p>
          <div className="mt-10 animate-rise-delay-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:from-[#f5d29a] hover:to-[#efb45a] shadow-[0_0_28px_rgba(232,168,74,0.35)] transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">Who we are</h2>
            <p className="text-[#a8b3c2] text-lg leading-relaxed mb-4">
              {SITE.legalName} (d/b/a {SITE.domain}) is an independent, authorized reseller that works with multiple
              leading broadband, cable, and wireless providers. We don’t favor any carrier — our recommendations are
              based on your location, your needs, and your budget.
            </p>
            <p className="text-[#a8b3c2] leading-relaxed mb-8">
              We are not an internet service provider and do not own or operate network infrastructure. All services are
              fulfilled and billed directly by licensed carriers.
            </p>
            <Link
              href="/about"
              className="inline-flex text-amber-300 font-semibold hover:text-amber-200 transition-colors"
            >
              Learn more →
            </Link>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-[#121c2a] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Compare trusted providers. Choose what fits you best.
            </h3>
            <p className="text-[#a8b3c2] leading-relaxed mb-7">
              We help you compare plans and get connected through licensed service providers easily and transparently.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">What we offer</h2>
          <p className="text-[#9aa6b5] max-w-2xl mb-12 leading-relaxed">
            A single place to explore high-speed internet, TV, phone, wireless, and home security options with upfront
            guidance and installation coordination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offers.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-bold text-amber-300 mb-3">{item.title}</h3>
                <p className="text-[#a8b3c2] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Why customers choose us</h2>
          <p className="text-[#9aa6b5] max-w-2xl mb-12">
            Clear comparisons, honest guidance, and support through activation — without the carrier bias.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="border-t border-amber-400/30 pt-5">
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#a8b3c2] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">How it works</h2>
          <p className="text-[#9aa6b5] mb-12 max-w-xl">
            One call — and you’re ready to switch or upgrade with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: '01',
                title: 'Check availability',
                body: 'Share your ZIP code or speak with our specialist to see what’s offered at your address.',
              },
              {
                step: '02',
                title: 'Compare plans',
                body: 'Review internet, TV, and wireless options side-by-side based on speed, price, and fit.',
              },
              {
                step: '03',
                title: 'Choose & activate',
                body: 'We help coordinate setup directly with the licensed provider you select.',
              },
              {
                step: '04',
                title: 'You’re set',
                body: 'That’s it — one conversation and you’re ready to switch or upgrade with clarity.',
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="font-display text-amber-400/80 text-sm font-bold tracking-widest mb-3">{item.step}</p>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#a8b3c2] leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-12 inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200"
          >
            Get in touch — {SITE.phoneDisplay} →
          </a>
        </div>
      </section>

      {/* Service selection guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Service selection guide</h2>
          <p className="text-[#9aa6b5] mb-12 max-w-2xl">
            A few practical tips before you choose a plan for your home or business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'How to choose the right internet provider',
                body: 'Evaluate advertised speeds, reliability, and customer support against your household’s online activity. Consider both download and upload performance — especially if you stream, game, or work remotely.',
              },
              {
                title: 'Making the most of available promotions',
                body: 'Compare introductory offers, bundled discounts, and equipment deals. Always check how long promotional pricing lasts and what standard rates will be afterward.',
              },
              {
                title: 'Understanding the full cost of service',
                body: 'Account for setup fees, equipment charges, taxes, and possible early termination costs. Look for clear, flexible terms and transparent pricing so you can budget with confidence.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-bold text-amber-300 mb-3">{item.title}</h3>
                <p className="text-[#a8b3c2] leading-relaxed text-[15px]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform offer blurb */}
      <section className="py-16 bg-[#0a1420] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c5ced9] text-lg leading-relaxed">
            {SITE.legalName} (d/b/a {SITE.domain}) offers a convenient platform to explore high-speed internet, cable TV,
            home phone, wireless, and home security options — with availability checks, upfront pricing guidance, and
            easy installation coordination as an independent, authorized retailer and licensed reseller for leading U.S.
            telecom and home service providers.
          </p>
          <Link
            href="/about"
            className="inline-flex mt-8 text-amber-300 font-semibold hover:text-amber-200"
          >
            Learn more →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10 text-center">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border border-white/10 rounded-xl overflow-hidden bg-[#121c2a]/60">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium hover:bg-white/5 gap-4"
                >
                  <span>{faq.q}</span>
                  <span className="text-amber-400 text-xl shrink-0">{openFaq === index ? '−' : '+'}</span>
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

      {/* Get started */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[#1a2434] to-[#121c2a] p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get started</h2>
            <p className="text-[#a8b3c2] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Call {SITE.phoneDisplay} or request a free, no-obligation quote to see available options in your area. Our
              experts will walk you through plans, pricing, and promotions — so you can upgrade with confidence.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition shadow-[0_0_24px_rgba(232,168,74,0.3)]"
            >
              Call {SITE.phoneDisplay}
            </a>
            <p className="mt-6 text-sm text-[#7a8796]">
              {SITE.email} · {SITE.addressLine1}, {SITE.addressLine2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

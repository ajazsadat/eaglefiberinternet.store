'use client';

import { SITE } from '@/lib/site';
import MobilePageLogo from '@/components/MobilePageLogo';

function openTawkChat() {
  if (typeof window === 'undefined') return;
  const api = window.Tawk_API;
  if (api && typeof api.maximize === 'function') {
    api.maximize();
    return;
  }
  window.Tawk_API = window.Tawk_API || {};
  const previousOnLoad = window.Tawk_API.onLoad;
  window.Tawk_API.onLoad = function () {
    if (typeof previousOnLoad === 'function') previousOnLoad();
    window.Tawk_API.maximize();
  };
}

export default function LiveAgentClient() {
  return (
    <div className="bg-[#071018] min-h-screen">
      <section className="border-b border-white/5 bg-[#0a1420]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <p className="text-amber-300/90 text-sm font-medium mb-2">{SITE.brandFull}</p>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            How would you like to connect for internet services and assistance?
          </h1>
          <p className="text-sm text-[#9aa6b5] leading-relaxed max-w-2xl">
            Independent comparison and support-routing service — not a carrier. We help you compare plans or get pointed
            to the right resource.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-8 md:p-10 flex flex-col">
            <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">Phone call</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Speak with a live agent
            </h2>
            <p className="text-[#a8b3c2] leading-relaxed mb-8 flex-grow">
              Call our team for plan comparison help, availability questions, or guidance on next steps.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              Call Now {SITE.phoneDisplay}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-8 md:p-10 flex flex-col">
            <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">Chat</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Chat with a live agent
            </h2>
            <p className="text-[#a8b3c2] leading-relaxed mb-8 flex-grow">
              Start a live chat for quick questions. We&apos;re an independent service — not affiliated with any carrier.
            </p>
            <button
              type="button"
              onClick={openTawkChat}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 transition"
            >
              Chat Now
            </button>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-amber-400/20 bg-[#0a1420] p-6 md:p-8 text-sm text-[#a8b3c2] leading-relaxed">
          <p className="font-semibold text-white mb-2">Important</p>
          <p>
            {SITE.legalName} is an independent comparison and referral service. We do not own or operate any internet
            network and do not provide carrier account support. For billing, outages, or technical issues with an
            existing service, contact your provider through their official channels.
          </p>
        </div>
      </section>

      <MobilePageLogo />
    </div>
  );
}

import { SITE } from '@/lib/site';
import MobilePageLogo from '@/components/MobilePageLogo';
import ConnectOptions from '@/components/ConnectOptions';

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
        <ConnectOptions />
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

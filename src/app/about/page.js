import Image from 'next/image';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `About Us | ${SITE.brandFull}`,
  description: `Learn how ${SITE.legalName} helps you compare internet and TV plans as an independent comparison and referral service.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#071018] min-h-screen">
      <section className="relative py-20 md:py-28 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/about-bg.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/70 to-[#071018]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">
            About {SITE.brandFull}
          </h1>
          <p className="text-lg text-[#b8c3d1] leading-relaxed">
            Your destination for high-speed home connectivity comparisons. We make it easier to discover and secure the
            telecom services that fit your lifestyle and budget — without the confusion of shopping every carrier alone.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex mt-8 px-7 py-3.5 rounded-full font-semibold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a]"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div>
          <h2 className="font-display text-2xl font-bold text-white mb-4">Who we are</h2>
          <p className="text-[#a8b3c2] leading-relaxed">
            {SITE.brandFull} is an independent comparison and referral service. Our role is limited to informational
            support, helping customers compare available internet and bundled options, and assisting with enrollment by
            connecting you with the provider you choose.
          </p>
          <p className="text-[#a8b3c2] leading-relaxed mt-4">
            Network performance, installation, billing, account management, and ongoing support are provided and managed
            directly by the selected service providers and are subject to their terms and availability.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-white mb-4">How we help</h2>
          <ul className="space-y-4 text-[#a8b3c2]">
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">01</span>
              <span>General informational assistance for comparing options from participating providers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">02</span>
              <span>Help checking service availability by address.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">03</span>
              <span>Upon request, help connect you with the provider you choose so you can complete enrollment.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 font-bold">04</span>
              <span>Share clear, side-by-side plan information so you can decide without being tied to a single carrier.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-white mb-4">How we operate</h2>
          <p className="text-[#a8b3c2] leading-relaxed">
            {SITE.legalName} (operating as {SITE.domain}) is an independent comparison and referral service helping
            customers nationwide explore broadband, wireless, and digital service options. We are not owned or controlled
            by any specific ISP. Services are provided, billed, and maintained by the respective carriers. We may receive
            a commission for connections — at no extra cost to you.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-8">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Our commitment to transparency</h2>
          <p className="text-[#a8b3c2] leading-relaxed mb-4">
            We operate solely as an independent comparison and referral service. We do not represent ourselves as
            Spectrum, Xfinity, Verizon, AT&T, or any other carrier. We do not own, operate, install, or manage any
            networks.
          </p>
          <p className="text-[#a8b3c2] leading-relaxed">
            All brand names and logos referenced here belong to their respective owners and are used for identification
            and comparison only.
          </p>
        </div>

        <div className="text-[#a8b3c2] text-sm space-y-1">
          <p className="font-semibold text-white">{SITE.legalName}</p>
          <p>
            <a href={`tel:${SITE.phoneTel}`} className="hover:text-amber-300">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-amber-300">
              {SITE.email}
            </a>
          </p>
          <p>
            {SITE.addressLine1}, {SITE.addressLine2}
          </p>
        </div>
      </section>
    </div>
  );
}

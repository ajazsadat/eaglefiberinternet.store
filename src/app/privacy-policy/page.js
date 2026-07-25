import { SITE } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy | ${SITE.brandFull}`,
  description: `Privacy policy for ${SITE.domain} operated by ${SITE.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#071018] min-h-screen py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-invert">
        <h1 className="font-display text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-[#a8b3c2] leading-relaxed text-[15px]">
          <p>
            This Privacy Policy describes how {SITE.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            operating {SITE.domain}, collects, uses, and shares information when you visit our website or contact us.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Information we collect</h2>
          <p>
            We may collect information you provide directly (such as name, phone number, email, or ZIP code) when you
            call us, submit a form, or request comparison assistance. We may also collect standard technical data such as
            IP address, browser type, and pages visited through cookies or similar technologies.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">How we use information</h2>
          <p>
            We use information to respond to inquiries, help compare and enroll in services offered by participating
            providers, improve our website, and comply with legal obligations. We may share relevant information with
            authorized providers, licensed agents, or master agents to facilitate enrollment when you request it.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Calls and texts</h2>
          <p>
            If you contact us by phone or provide a number, you may receive calls or texts related to your inquiry from{' '}
            {SITE.domain} / {SITE.legalName}. Consent is not a condition of purchase. Message and data rates may apply.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Third parties</h2>
          <p>
            We do not sell your personal information as a consumer data broker. Service providers who host our site or
            support our operations may process data on our behalf under appropriate agreements.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href={`mailto:${SITE.email}`} className="text-amber-300 hover:underline">
              {SITE.email}
            </a>
            <br />
            {SITE.addressLine1}, {SITE.addressLine2}
            <br />
            {SITE.phoneDisplay}
          </p>
          <p className="text-sm text-[#7a8796] pt-4">Last updated: July 2026</p>
        </div>
      </article>
    </div>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Fees & Disclosures | ${SITE.brandFull}`,
  description: `Fees, commissions, and pricing disclosures for ${SITE.domain}.`,
};

export default function FeesDisclosuresPage() {
  return (
    <div className="bg-[#071018] min-h-screen py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-white mb-8">Fees &amp; Disclosures</h1>
        <div className="space-y-6 text-[#a8b3c2] leading-relaxed text-[15px]">
          <p>
            {SITE.operatedBy} does not charge customers any additional fees for consulting, comparison, or connection
            assistance. Any applicable installation, activation, or equipment fees are determined and charged directly by
            the service provider, not by {SITE.legalName}.
          </p>
          <p>
            We may receive a one-time or recurring commission from marketing partners or participating providers for
            successful activations or continued customer relationships. These payments are part of standard industry
            partnerships and do not influence our goal of helping customers find a suitable service for their needs and
            location.
          </p>
          <p>
            All offers, pricing, and promotions are subject to provider terms and availability. Taxes, surcharges, early
            termination fees, and equipment charges may apply and are the responsibility of the customer under their
            agreement with the provider.
          </p>
          <p>
            Plan details shown on this website are estimates based on publicly listed or partner-provided information and
            may change. Always confirm final pricing and terms with the provider before purchasing or activating
            service.
          </p>
          <p>
            See also our{' '}
            <Link href="/reseller-disclosure" className="text-amber-300 hover:underline">
              Reseller Disclosure
            </Link>{' '}
            and{' '}
            <Link href="/terms-conditions" className="text-amber-300 hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Contact</h2>
          <p>
            {SITE.legalName}
            <br />
            {SITE.addressLine1}, {SITE.addressLine2}
            <br />
            <a href={`mailto:${SITE.email}`} className="text-amber-300 hover:underline">
              {SITE.email}
            </a>{' '}
            · {SITE.phoneDisplay}
          </p>
          <p className="text-sm text-[#7a8796] pt-4">Last updated: August 2026</p>
        </div>
      </article>
    </div>
  );
}

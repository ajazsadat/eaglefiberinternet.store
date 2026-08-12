import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Reseller Disclosure | ${SITE.brandFull}`,
  description: `How ${SITE.legalName} operates as an independent comparison and referral service.`,
};

export default function ResellerDisclosurePage() {
  return (
    <div className="bg-[#071018] min-h-screen py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-white mb-8">Reseller Disclosure</h1>
        <div className="space-y-6 text-[#a8b3c2] leading-relaxed text-[15px]">
          <p>
            {SITE.operatedBy} is an independent comparison and referral service that helps customers compare, select,
            and connect with broadband, wireless, and digital service options available across the United States.
          </p>
          <p>
            We are not owned, operated, or controlled by any internet service provider (ISP) or carrier. All broadband
            and wireless services are delivered, billed, and supported directly by the respective licensed providers.
          </p>
          <p>
            {SITE.operatedBy} may receive a commission or referral incentive from marketing partners or participating
            providers when a customer activates or purchases a qualifying service after being referred through our
            platform or sales team. These commissions do not change the rates you pay — customers pay the same rates
            offered by the provider for the selected plan.
          </p>
          <p>
            All service information, including pricing, availability, and terms, is based on publicly available data or
            information provided by each carrier. We do not guarantee availability or pricing accuracy in all areas, and
            customers are encouraged to confirm final details with their chosen provider prior to activation.
          </p>
          <p>
            {SITE.brand} is not an authorized retailer, agent, or licensed distributor for any specific carrier named on
            this site unless expressly stated. Brand names and logos belong to their respective owners and are used for
            identification and comparison only.
          </p>
          <p>
            For related details, see our{' '}
            <Link href="/fees-disclosures" className="text-amber-300 hover:underline">
              Fees &amp; Disclosures
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

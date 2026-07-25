import { SITE } from '@/lib/site';

export const metadata = {
  title: `Terms & Conditions | ${SITE.brandFull}`,
  description: `Terms and conditions for using ${SITE.domain}.`,
};

export default function TermsPage() {
  return (
    <div className="bg-[#071018] min-h-screen py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-white mb-8">Terms & Conditions</h1>
        <div className="space-y-6 text-[#a8b3c2] leading-relaxed text-[15px]">
          <p>
            By using {SITE.domain}, you agree to these Terms & Conditions. {SITE.legalName} operates an independent
            marketing and customer acquisition platform that helps consumers discover and compare internet, TV, phone,
            and related service options in the United States.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Not a service provider</h2>
          <p>
            {SITE.legalName} does not own, operate, install, or directly provide telecommunications, internet, cable TV,
            or wireless services. Services featured on this website are offered, installed, billed, and supported
            exclusively by their respective third-party providers. Decisions about availability, pricing, installation,
            billing, and support are made solely by those providers.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Informational content</h2>
          <p>
            Plan details, speeds, and prices shown on this site are estimates based on publicly listed or partner-provided
            information and may change. Always confirm final terms with the provider before purchasing or activating
            service.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Trademarks</h2>
          <p>
            All company names, logos, and trademarks (including but not limited to AT&T, Spectrum, Xfinity, Optimum,
            Frontier, and Verizon) are the property of their respective owners and are used strictly for identification
            and comparison purposes.
          </p>
          <h2 className="font-display text-xl font-bold text-white pt-4">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.legalName} is not liable for provider service outages, billing
            disputes, installation delays, or other matters controlled by third-party providers.
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
          <p className="text-sm text-[#7a8796] pt-4">Last updated: July 2026</p>
        </div>
      </article>
    </div>
  );
}

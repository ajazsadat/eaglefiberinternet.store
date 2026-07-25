import { SITE } from '@/lib/site';

export const metadata = {
  title: `Contact Us | ${SITE.brandFull}`,
  description: `Contact ${SITE.legalName} for internet and TV plan comparison help.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#071018] min-h-screen">
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">Contact us</h1>
        <p className="text-lg text-[#b8c3d1] mb-12 max-w-2xl">
          We’d love to hear from you — call or email and we’ll reply shortly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-amber-400/90 mb-2">Phone</h2>
              <a href={`tel:${SITE.phoneTel}`} className="text-2xl font-display font-bold text-white hover:text-amber-300">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-amber-400/90 mb-2">Email</h2>
              <a href={`mailto:${SITE.email}`} className="text-xl text-white hover:text-amber-300">
                {SITE.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-wider text-amber-400/90 mb-2">Office</h2>
              <p className="text-[#a8b3c2] leading-relaxed">
                {SITE.addressLine1}
                <br />
                {SITE.addressLine2}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-8">
            <h2 className="font-display text-xl font-bold text-white mb-3">Prefer to talk now?</h2>
            <p className="text-[#a8b3c2] mb-6 leading-relaxed text-sm">
              By providing your phone number when you call, you may receive texts or calls from {SITE.domain}. Consent is
              not a condition of purchase. See our{' '}
              <a href="/terms-conditions" className="text-amber-300 hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-amber-300 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex w-full items-center justify-center px-6 py-4 rounded-xl font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a]"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

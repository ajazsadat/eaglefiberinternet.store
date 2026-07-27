import { SITE } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

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
          We’d love to hear from you — fill out the form, call, or email and we’ll reply shortly.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
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
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-7 md:p-8">
            <h2 className="font-display text-xl font-bold text-white mb-2">Contact Us Lead Form</h2>
            <p className="text-[#a8b3c2] text-sm mb-6 leading-relaxed">
              Share a few details and we&apos;ll help you compare options available near you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

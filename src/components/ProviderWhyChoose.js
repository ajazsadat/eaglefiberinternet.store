import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site';

/**
 * Bottom “Why Choose …” + contact form block for provider pages,
 * inspired by simplyactivateservices.com/xfinity/.
 */
export default function ProviderWhyChoose({ providerName }) {
  const name = providerName || 'your provider';

  return (
    <section className="border-t border-white/10 bg-[#0a1420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Choose {SITE.brandFull}?
            </h2>
            <p className="text-[#a8b3c2] leading-relaxed mb-8 max-w-xl">
              Getting {name} services is easier with {SITE.brand}. We help you compare plans, understand features and
              pricing, and select the option that works best for your home or business. Our team guides you every step
              of the way — clear, reliable, and hassle-free.
            </p>

            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-[#071018] bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] hover:brightness-110 transition mb-10"
            >
              Check {name} Availability In Your Area
            </a>

            <ul className="space-y-4 text-[#c5ced9]">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center gap-3 hover:text-amber-300 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-lg">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 hover:text-amber-300 transition"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="leading-relaxed pt-1.5">
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121c2a] p-7 md:p-9">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Get Started</h3>
            <p className="text-[#a8b3c2] text-sm mb-6 leading-relaxed">
              Share a few details and we&apos;ll help you check {name} options available near you.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

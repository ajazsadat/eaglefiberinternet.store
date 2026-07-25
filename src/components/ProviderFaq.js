'use client';
import { useState } from 'react';

export default function ProviderFaq({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!faqs?.length) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">FAQs</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={faq.q} className="border border-white/10 rounded-xl overflow-hidden bg-[#121c2a]/60">
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium hover:bg-white/5 gap-4"
            >
              <span>{faq.q}</span>
              <span className="text-amber-400 text-xl shrink-0">{openFaq === index ? '−' : '+'}</span>
            </button>
            {openFaq === index && (
              <div className="px-5 pb-5 text-[#a8b3c2] text-sm leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

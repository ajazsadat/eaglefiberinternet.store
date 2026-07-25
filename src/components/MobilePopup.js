'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';

export default function MobilePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 md:hidden p-4">
      <div className="bg-[#121c2a] rounded-2xl w-full h-[80vh] p-6 relative shadow-2xl border border-white/10 flex flex-col justify-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mt-2">
          <div className="w-16 h-16 bg-amber-500/15 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/25">
            <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-2">Need Fast Internet?</h3>
          <p className="text-[#a8b3c2] mb-6 text-sm leading-relaxed">
            Call our experts now to compare plans and find the best deals in your area instantly!
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="block w-full py-4 px-4 bg-gradient-to-r from-[#f0c27a] to-[#e8a84a] text-[#071018] font-bold rounded-xl transition-transform hover:-translate-y-0.5"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

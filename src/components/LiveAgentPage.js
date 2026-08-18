import MobilePageLogo from '@/components/MobilePageLogo';
import ConnectOptions from '@/components/ConnectOptions';
import { SITE } from '@/lib/site';

/** Shared minimal layout used by /contact-us-to-compare and /compare-internet-options. */
export default function LiveAgentPage() {
  return (
    <div className="bg-[#071018] min-h-[70vh] flex flex-col">
      <section className="flex-grow flex items-center py-16 md:py-24">
        <ConnectOptions />
      </section>
      <MobilePageLogo />

      <section className="border-t border-white/10 bg-[#050b12] py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs align-middle text-center text-[#7a8796] leading-relaxed">{SITE.topDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}

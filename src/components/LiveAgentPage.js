import MobilePageLogo from '@/components/MobilePageLogo';
import ConnectOptions from '@/components/ConnectOptions';

/** Shared minimal live-agent layout used by /live-agent and /compare-internet-options. */
export default function LiveAgentPage() {
  return (
    <div className="bg-[#071018] min-h-[70vh] flex flex-col">
      <section className="flex-grow flex items-center py-16 md:py-24">
        <ConnectOptions />
      </section>
      <MobilePageLogo />
    </div>
  );
}

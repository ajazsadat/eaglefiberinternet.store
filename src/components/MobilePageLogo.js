import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

/** Mobile-only centered logo shown at the end of chrome-hidden pages. */
export default function MobilePageLogo() {
  return (
    <div className="md:hidden flex justify-center items-center py-10 px-4">
      <Link href="/" className="flex flex-col items-center gap-3">
        <Image
          src="/images/logo.png"
          alt={`${SITE.brand} logo`}
          width={64}
          height={64}
          className="rounded-full ring-1 ring-amber-400/30"
        />
        <span className="font-display text-xl font-bold tracking-tight text-gradient">
          {SITE.brand}
        </span>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Cookie Policy | ${SITE.brandFull}`,
  description: `How ${SITE.domain} uses cookies and similar technologies.`,
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#071018] min-h-screen py-16 md:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-white mb-8">Cookie Policy</h1>
        <div className="space-y-6 text-[#a8b3c2] leading-relaxed text-[15px]">
          <p>
            {SITE.operatedBy} uses cookies and similar technologies on {SITE.domain} to enhance your browsing
            experience, analyze traffic, and improve our marketing efforts. Cookies are small text files stored on your
            device that help us remember preferences and understand how visitors interact with our site.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">How we use cookies</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-white font-semibold">Essential cookies</strong> — enable basic site functionality
              and security.
            </li>
            <li>
              <strong className="text-white font-semibold">Analytics cookies</strong> — help us measure website
              performance and visitor behavior (for example, through analytics tools).
            </li>
            <li>
              <strong className="text-white font-semibold">Marketing cookies</strong> — support advertising campaigns
              and may be used for retargeting through platforms such as Google Ads.
            </li>
          </ul>

          <h2 className="font-display text-xl font-bold text-white pt-4">Managing cookies</h2>
          <p>
            You can accept, reject, or customize cookie preferences at any time using your browser settings. Most
            browsers allow you to block or delete cookies; however, some site features may not function properly without
            them.
          </p>
          <p>
            By using our website, you consent to our use of cookies as described in this policy. For more details on how
            we handle personal data, please refer to our{' '}
            <Link href="/privacy-policy" className="text-amber-300 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Contact</h2>
          <p>
            Questions about cookies:{' '}
            <a href={`mailto:${SITE.email}`} className="text-amber-300 hover:underline">
              {SITE.email}
            </a>
            <br />
            {SITE.addressLine1}, {SITE.addressLine2}
            <br />
            {SITE.phoneDisplay}
          </p>
          <p className="text-sm text-[#7a8796] pt-4">Last updated: August 2026</p>
        </div>
      </article>
    </div>
  );
}

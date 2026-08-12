import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Spectrum Plans | Eagle Fiber Internet',
  description:
    'Compare Spectrum internet packages — independent comparison of speeds and pricing with Eagle Fiber LLC.',
};

export default function SpectrumPage() {
  return (
    <ProviderPage
      name="Spectrum"
      tagline="Widely available cable internet with flexible plan options for every household size."
      image="/images/provider-spectrum.jpg"
      introTitle="Compare Spectrum Internet Packages — Independent Comparison"
      benefits={[
        'Wide availability across many markets',
        'No data caps on many plans',
        'Often no long-term contracts',
        'Modem included on featured packages',
      ]}
      plans={[
        {
          name: 'Spectrum Advantage',
          price: '30',
          speed: 'Up to 100 Mbps download, 10 Mbps upload',
          features: [
            'Entry-level plan for basic tasks and email',
            'No term contract required',
            'Includes modem at no extra cost',
          ],
        },
        {
          name: 'Spectrum Premier',
          price: '50',
          speed: 'Up to 500 Mbps download, 20 Mbps upload',
          features: [
            'Good for HD streaming and moderate gaming',
            'No term contract required',
            'Includes modem at no extra cost',
          ],
        },
        {
          name: 'Spectrum Gig',
          price: '70',
          speed: 'Up to 1,000 Mbps download, ~35 Mbps upload',
          features: [
            'Best for heavy users and 4K streaming',
            'No term contract required',
            'Includes modem at no extra cost',
          ],
        },
      ]}
      contentSections={[
        ...providerContentSections('Spectrum'),
        {
          title: 'Cable Coverage That Reaches More Homes',
          body: 'Spectrum’s cable footprint covers many neighborhoods where fiber isn’t available yet. Eagle Fiber helps you compare Spectrum speeds and promotions against other providers at your ZIP code.',
        },
      ]}
      faqs={providerFaqs('Spectrum')}
      // mobileSupportModal — fullscreen mobile popup temporarily disabled
    />
  );
}

import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Frontier Plans | Eagle Fiber Internet',
  description:
    'Compare Frontier fiber internet plans — independent comparison with Eagle Fiber LLC.',
};

export default function FrontierPage() {
  return (
    <ProviderPage
      name="Frontier"
      tagline="Competitive fiber pricing where available — built for modern streaming and work-from-home homes."
      image="/images/provider-frontier.jpg"
      introTitle="Compare Frontier Internet Packages — Independent Comparison"
      benefits={[
        'Competitive pricing on fiber',
        'No data caps on most fiber plans',
        'Expanding fiber footprint',
        'Solid option for streaming households',
      ]}
      plans={[
        {
          name: 'Fiber 500',
          price: '50',
          speed: 'Up to 500 Mbps',
          features: [
            'Everyday streaming & work',
            'Symmetrical fiber where available',
            'No data caps on most fiber',
          ],
        },
        {
          name: 'Fiber 1 Gig',
          price: '70',
          speed: 'Up to 1 Gbps',
          features: [
            '4K streaming & gaming',
            'Multiple devices',
            'Fast downloads and uploads',
          ],
        },
        {
          name: 'Fiber 2 Gig',
          price: '100',
          speed: 'Up to 2 Gbps',
          features: [
            'Power users & smart homes',
            'Heavy downloads',
            'Future-ready bandwidth',
          ],
        },
      ]}
      contentSections={[
        ...providerContentSections('Frontier'),
        {
          title: 'Fiber Expansion Markets',
          body: 'Frontier continues to expand fiber in select regions. Availability is address-specific — call Eagle Fiber to check whether Frontier fiber or legacy options serve your location.',
        },
      ]}
      faqs={providerFaqs('Frontier')}
    />
  );
}

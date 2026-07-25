import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Windstream Plans | Eagle Fiber Internet',
  description:
    'Compare Windstream (Kinetic) internet plans — independent comparison with Eagle Fiber LLC.',
};

export default function WindstreamPage() {
  return (
    <ProviderPage
      name="Windstream"
      brandMark="Windstream (Kinetic)"
      tagline="Kinetic internet options including fiber in select areas — value-focused plans for many households."
      image="/images/provider-windstream.jpg"
      introTitle="Compare Windstream Kinetic Internet Packages — Independent Comparison"
      benefits={[
        'Wide plan options including fiber in some areas',
        'Unlimited data on many plans',
        'Good value for many households',
        'Bundle-friendly packages',
      ]}
      plans={[
        {
          name: 'Kinetic 100',
          price: '40',
          speed: 'Up to 100 Mbps',
          features: [
            'Browsing and light streaming',
            'Unlimited data on many plans',
            'Budget-friendly entry',
          ],
        },
        {
          name: 'Kinetic 500',
          price: '55',
          speed: 'Up to 500 Mbps',
          features: [
            'HD streaming households',
            'Remote work ready',
            'Multiple devices',
          ],
        },
        {
          name: 'Kinetic Gig',
          price: '75',
          speed: 'Up to 1 Gbps',
          features: [
            '4K and gaming',
            'Fiber where available',
            'High-demand homes',
          ],
        },
      ]}
      contentSections={[
        ...providerContentSections('Windstream'),
        {
          title: 'Kinetic Bundles & Value',
          body: 'Windstream Kinetic often pairs internet with phone or TV-style options in participating markets. Eagle Fiber helps you compare Kinetic packages against other regional and national providers.',
        },
      ]}
      faqs={providerFaqs('Windstream')}
    />
  );
}

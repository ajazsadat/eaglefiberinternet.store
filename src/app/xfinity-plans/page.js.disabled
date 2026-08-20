import ProviderPage from '@/components/ProviderPage';
import { providerFaqs, providerContentSections } from '@/lib/providerContent';

export const metadata = {
  title: 'Xfinity Plans | Eagle Fiber Internet',
  description:
    'Compare Xfinity internet packages — independent comparison of speeds and pricing estimates with Eagle Fiber LLC.',
};

export default function XfinityPage() {
  return (
    <ProviderPage
      name="Xfinity"
      brandMark="Xfinity®"
      tagline="Independent comparison of Xfinity internet packages for streaming, work, and gaming."
      image="/images/provider-xfinity.jpg"
      introTitle="Compare Xfinity® Internet Packages — Independent Comparison"
      benefits={[
        'Speed tiers for streaming, gaming & work',
        'Wide availability in many markets',
        'Strong promotional deals',
        'Advanced WiFi coverage options',
      ]}
      plans={[
        {
          name: '50 Mbps*',
          price: '35',
          subtitle: '50/50 Mbps – Perfect for browsing, emails & video calls',
          features: [
            'Small households (up to 4 devices)',
            'Stream content, video conferencing, download music & photos',
          ],
        },
        {
          name: '300 Mbps*',
          price: '50',
          subtitle: '300/300 Mbps – Great for browsing & email',
          features: [
            'Supports up to 5 devices',
            'Everyday streaming & browsing, download music & photos',
          ],
        },
        {
          name: '500 Mbps*',
          price: '60',
          subtitle: '500/500 Mbps – Ideal for browsing, emails & video calls',
          features: [
            'Connect up to 8 devices',
            'Stream & video conferencing, download music & photos',
          ],
        },
        {
          name: '1000 Mbps*',
          price: '70',
          subtitle: '1000/1000 Mbps – Perfect for heavy downloads',
          features: [
            'Supports 12+ devices',
            'Extreme streaming speed & video conferencing',
          ],
        },
        {
          name: '1200 Mbps*',
          price: '80',
          subtitle: '1200/1200 Mbps – Supports 15+ devices',
          features: ['Fast downloads & HD streaming on multiple screens'],
        },
        {
          name: '2000 Mbps*',
          price: '100',
          subtitle: '2000/2000 Mbps – Supports unlimited devices',
          features: ['Ultimate streaming & gaming experience'],
        },
      ]}
      contentSections={providerContentSections('Xfinity')}
      faqs={providerFaqs('Xfinity')}
      showTopCtas
      liveAgentHref="/compare-internet-options"
      relatedHelp={{
        title: 'Need Xfinity/Comcast support help?',
        description:
          'Get independent support routing — or compare new plan options. Not affiliated with Xfinity or Comcast.',
        href: '/compare-internet-options',
        cta: 'Visit Independent Support Help',
      }}
    />
  );
}

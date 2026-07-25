import { SITE } from '@/lib/site';

/** Shared FAQs adapted from the WordPress Xfinity plans page, with provider-specific customer-service Q. */
export function providerFaqs(name) {
      q: `Is ${SITE.brandFull} an internet service provider?`,
      a: `No — we’re not a direct provider of internet, wireless, or cable services. We’re an independent comparison and referral service. We help you explore and compare plans from multiple carriers across the U.S., and connect you directly with the provider you choose — giving you access to more options in one place, without being tied to any single carrier.`,
    },
    {
      q: 'What are the fees for your consultation?',
      a: 'Our comparison service is provided at no cost to you. We focus on helping you find competitive rates by comparing offers from major providers.',
    },
    {
      q: 'How do you identify the ideal plan for me?',
      a: 'We perform a comprehensive needs assessment by evaluating your specific usage — considering the number of connected devices, high-bandwidth activities like gaming or streaming, and your monthly budget. We then cross-reference these requirements with available fiber, cable, and satellite providers in your area to find the most efficient match for your home.',
    },
    {
      q: 'Do you offer internet and television bundles?',
      a: 'Yes. We help you compare “Double Play” and “Triple Play” bundle packages. Bundling internet, TV, and phone services into a single account can often result in a lower combined rate than purchasing each service separately — actual savings depend on the provider and plan.',
    },
    {
      q: 'What are the steps to begin a new service?',
      a: `Just contact us at ${SITE.phoneDisplay} to get started. We’ll help you check which providers are available at your address and share current promotional offers — you’ll then complete signup and installation directly with the provider you choose.`,
    },
    {
      q: 'How is installation arranged once I select a plan?',
      a: 'Once you confirm your selection, we help coordinate the process with your chosen provider. Installation timelines vary by provider, location, and technician availability — your provider will confirm the exact schedule once your order is placed.',
    },
    {
      q: `How to contact ${name} customer service`,
      a: `While we don’t handle ${name} accounts ourselves, we can guide you on how to reach ${name} customer support and help you understand what services are available in your area.`,
    },
  ];
}

export function providerContentSections(name) {
  return [
    {
      title: 'Reliable High-Speed Internet, Day & Night',
      body: `Speeds may vary by location. Compare ${name}'s fiber and cable options to find dependable performance for your household.`,
    },
    {
      title: `Comparing ${name}'s Digital Solutions`,
      body: `Eagle Fiber helps customers discover high-speed ${name} internet solutions tailored for streaming, remote work, and digital entertainment. Availability and speeds depend on network conditions and service area.`,
    },
    {
      title: 'Comparing Your Online Experience',
      body: `We help you compare ${name}'s internet access, Wi-Fi solutions, and flexible service options, so you can find what fits your online lifestyle.`,
    },
    {
      title: `Stay Connected with ${name} Internet and Cable`,
      body: `Eagle Fiber shares information on ${name}'s internet, entertainment, and mobile services to help you compare options for a fully integrated home experience. From high-speed streaming and gaming to mobile connectivity, we help you compare the most suitable plans.`,
    },
  ];
}

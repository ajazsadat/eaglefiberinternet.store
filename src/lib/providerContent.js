import { SITE } from '@/lib/site';

/** Shared platform FAQs used for providers without a dedicated reference set. */
function sharedPlatformFaqs(name) {
  return [
    {
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
      a: `We’re not able to provide ${name} account support directly. For billing questions, technical support, or service issues, please contact ${name} through their official customer service channels — you can find their current contact number and support options on ${name}’s official website or on your ${name} bill.`,
    },
  ];
}

/** Spectrum-focused FAQs adapted from simplyactivateservices.com/spectrum/ (Eagle Fiber voice). */
export function spectrumFaqs() {
  return [
    {
      q: 'Are you an official Spectrum reseller?',
      a: `No. ${SITE.brandFull} is not an authorized Spectrum reseller and does not sell Spectrum packages directly. We’re an independent comparison and referral service — our role is to help you explore options and understand what may be available in your area so you can choose with more confidence.`,
    },
    {
      q: 'How can I contact Spectrum customer support?',
      a: `We’re not able to provide Spectrum account support directly. For billing questions, technical support, or service issues, contact Spectrum through their official customer service channels — current phone numbers and support options are listed on Spectrum’s website or on your Spectrum bill. We can still help you compare plans and check general availability by address.`,
    },
    {
      q: `What makes ${SITE.brandFull} different?`,
      a: `We’re an independent comparison platform. We look across multiple providers — including Spectrum — based on coverage, plan types, and overall fit for your household, instead of pushing a single carrier. Our goal is clear guidance so you can decide what works for your home and budget.`,
    },
    {
      q: 'Can you help me compare providers in my area?',
      a: `Yes. Our team can walk you through internet, TV, and phone options that may be available near you, including Spectrum and other major providers. Call ${SITE.phoneDisplay} and we’ll help you compare what’s realistic for your address.`,
    },
    {
      q: 'Do you provide pricing or promotions for Spectrum?',
      a: 'We don’t sell Spectrum service or publish official Spectrum pricing. Any starting prices or promotions mentioned on this site are for general reference only and can change by location and offer period. For exact rates and eligibility, confirm details with Spectrum — or ask our team to help you compare current options before you enroll.',
    },
  ];
}

/** AT&T-focused FAQs adapted from simplyactivateservices.com/att/ (Eagle Fiber voice). */
export function attFaqs() {
  return [
    {
      q: 'How much does AT&T Internet cost?',
      a: 'AT&T Fiber and wireless home internet pricing depends on the speed tier and your address. Fiber plans often start in a promotional range for mid-tier speeds in eligible areas, with higher tiers priced accordingly. New-customer promotions, AutoPay, and paperless billing discounts may apply. Taxes, fees, and installation charges can be extra — confirm the final quote for your location before you enroll.',
    },
    {
      q: 'How can I contact AT&T customer service?',
      a: `We’re not able to provide AT&T account support directly. For billing, technical issues, or service changes, use AT&T’s official channels — phone support, online chat on AT&T’s website, a local AT&T store, or AT&T’s published social support accounts. Current contact details are on AT&T’s website or your AT&T bill. We can still help you compare plans and check options by address.`,
    },
    {
      q: 'Does AT&T own DIRECTV?',
      a: 'DIRECTV operates as a separate TV and streaming brand that has historically been linked with AT&T. Bundle options and how the brands work together can change over time. If you’re interested in internet plus TV, we can help you compare what’s available at your address — then you’ll confirm final bundle details with the providers.',
    },
    {
      q: 'What is AT&T Fiber?',
      a: 'AT&T Fiber is a high-speed internet service that uses fiber-optic technology where the network is built out. Speed tiers commonly range from entry-level fiber plans up through multi-gig options in select markets. Actual speeds depend on your plan, equipment, wired vs Wi-Fi use, and network conditions. We’ll help you check whether fiber is offered at your address.',
    },
    {
      q: 'How can I save on AT&T services?',
      a: `Many AT&T offers include discounts for AutoPay and paperless billing. Additional savings may be available through wireless + internet bundles or other qualifying promotions, depending on eligibility. Our team can help you compare which discounts appear relevant for your situation — final savings are confirmed by AT&T when you order.`,
    },
  ];
}

/** Xfinity-focused FAQs adapted from simplyactivateservices.com/xfinity/ (Eagle Fiber voice). */
export function xfinityFaqs() {
  return [
    {
      q: 'What is Xfinity Internet?',
      a: 'Xfinity provides internet, TV, phone, mobile, and home security options across many U.S. markets. Plan types, speeds, and pricing vary by location. Our team can help you understand which Xfinity options may be available near you and how they compare with other providers.',
    },
    {
      q: 'Is Xfinity different from Comcast?',
      a: 'Comcast uses Xfinity as its consumer brand for services such as internet, TV, mobile, and home security. When people say “Xfinity” or “Comcast” for home internet, they’re usually referring to the same provider family. We can help you sort through what’s offered at your address under the Xfinity brand.',
    },
    {
      q: 'How do I sign up for Xfinity?',
      a: `You can start online, through Xfinity’s own tools, or with help from our team. Call ${SITE.phoneDisplay} and we’ll walk you through comparing plans and checking availability. After you choose an option, signup, equipment, and installation are completed with Xfinity — not managed as an account by ${SITE.brandFull}.`,
    },
    {
      q: 'Are there any Xfinity deals for new customers?',
      a: 'Xfinity periodically runs promotions on internet, TV, and bundles. Offers change by market and may require AutoPay or other terms. We can help you identify promotions that look relevant for your location — then you’ll confirm eligibility and final pricing directly with Xfinity.',
    },
    {
      q: 'Can I combine Xfinity services in a bundle?',
      a: 'Yes. Internet can often be combined with TV, phone, and/or mobile under one household setup, which may simplify billing and unlock package pricing. Bundle mix and savings depend on what’s offered at your address. We’ll help you compare bundle vs internet-only options before you enroll.',
    },
    {
      q: `How does ${SITE.brandFull} assist with Xfinity?`,
      a: `We help you compare plans, review features and typical pricing ranges, and check what may be available at your address. We’re an independent comparison and referral service — we don’t manage Xfinity accounts or provide Xfinity customer service after activation.`,
    },
    {
      q: 'Do Xfinity plans include equipment and apps?',
      a: 'Many Xfinity plans include or rent gateway/modem equipment, and TV packages may include set-top boxes or streaming apps depending on the offer. Optional equipment and apps can add cost or features. Exact inclusions vary by plan and location — confirm what’s in your order before install day.',
    },
    {
      q: 'What if I move or need to change my plan?',
      a: `Xfinity typically offers ways to transfer service to a new address or change your plan, subject to availability and account terms. ${SITE.brandFull} can help you understand the general process and compare options at a new address; for account transfers, billing changes, or technical moves, you’ll work directly with Xfinity.`,
    },
  ];
}

/**
 * Returns provider-specific FAQs when we have a dedicated set (Spectrum, AT&T, Xfinity);
 * otherwise the shared platform FAQ list.
 */
export function providerFaqs(name) {
  const key = String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9&]/g, '');

  if (key.includes('spectrum')) return spectrumFaqs();
  if (key.includes('att') || key.includes('at&t')) return attFaqs();
  if (key.includes('xfinity') || key.includes('comcast')) return xfinityFaqs();

  return sharedPlatformFaqs(name);
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

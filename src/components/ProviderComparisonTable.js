import { SITE } from '@/lib/site';

const FEATURES = [
  'Speed (Max)',
  'Upload Speeds',
  'Starting Price',
  'Price Guarantee',
  'Customer Service',
  'Fiber Availability',
  'Coverage',
  'Reliability',
  'Security Features',
  'Contracts',
  'Data Caps',
  'Bundles / Discounts',
  'Best For',
];

const PROVIDERS = [
  {
    name: 'AT&T (Fiber)',
    values: [
      'Up to 5 Gbps (symmetrical)',
      'Symmetrical (same as download) on many fiber plans',
      'From about $35/mo (where available)',
      'Often fewer price hikes on fiber; no annual contract on many fiber plans',
      'Generally strong ratings in fiber markets',
      'Fiber footprint still limited nationally',
      'Broad mix of fiber, DSL, and fixed wireless in many markets',
      'Fiber tends to be more consistent where available',
      'Built-in security features on some plans',
      'No contracts on many fiber plans',
      'No data caps on many fiber plans',
      'Wireless bundle discounts available in some offers',
      'Performance, business use, work-from-home',
    ],
  },
  {
    name: 'Xfinity (Comcast)',
    values: [
      'Up to 2 Gbps download (select areas)',
      'Typically lower upload vs download on cable',
      'From about $30/mo (where available)',
      'Some plans offer multi-year price locks',
      'Mixed to improving satisfaction by market',
      'Limited true fiber; mostly cable network',
      'Strong coverage in many cable markets',
      'Generally strong, can vary with network congestion',
      'Basic security; add-ons often available',
      'No annual contracts on many newer offers',
      'Data caps on many plans unless unlimited add-on',
      'Strong internet + mobile/TV bundling',
      'Coverage + bundling deals',
    ],
  },
  {
    name: 'Spectrum (Charter)',
    values: [
      'Up to 1 Gbps (select areas)',
      'Typically lower upload on cable',
      'From about $30/mo (where available)',
      'Fewer long-term price-lock guarantees',
      'Mixed reviews by market',
      'Limited fiber; mostly cable',
      'Good coverage in many cable markets',
      'Good overall; consistency can vary',
      'Basic security features',
      'No contracts on many plans',
      'No data caps on many plans',
      'Fewer bundle advantages than some peers',
      'Budget + simple plans',
    ],
  },
];

export default function ProviderComparisonTable() {
  return (
    <section className="bg-[#0a1420] border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Provider Comparison: How the Top Internet Services Stack Up by {SITE.brandFull}
        </h2>
        <p className="text-[#9aa6b5] text-sm leading-relaxed max-w-4xl mb-8">
          The information in the table below reflects {SITE.brandFull}&apos;s independent research and observations. It is
          based on publicly available data, performance trends, and internal evaluations. This content is for
          informational purposes only and is not affiliated with or endorsed by any of the providers listed. Pricing,
          speeds, and features vary by address and change over time — confirm details with the provider before you enroll.
        </p>

        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-[#121c2a] text-[#c5ced9]">
              <tr>
                <th className="px-4 py-3.5 font-semibold sticky left-0 bg-[#121c2a] z-10 min-w-[140px]">Feature</th>
                {PROVIDERS.map((p) => (
                  <th key={p.name} className="px-4 py-3.5 font-semibold min-w-[180px]">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, rowIndex) => (
                <tr key={feature} className="border-t border-white/5 align-top">
                  <th className="px-4 py-3.5 font-semibold text-white sticky left-0 bg-[#0a1420] z-10 text-left">
                    {feature}
                  </th>
                  {PROVIDERS.map((p) => (
                    <td key={p.name} className="px-4 py-3.5 text-[#a8b3c2] leading-relaxed">
                      {p.values[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

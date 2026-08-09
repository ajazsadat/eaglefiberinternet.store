/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/compare/xfinity-plans', destination: '/xfinity-plans', permanent: true },
      { source: '/compare/att-plans', destination: '/att-plans', permanent: true },
      { source: '/compare/spectrum-plans', destination: '/spectrum-plans', permanent: true },
      { source: '/compare/frontier-plans', destination: '/frontier-plans', permanent: true },
      { source: '/compare/windstream-plans', destination: '/windstream-plans', permanent: true },
      { source: '/independent-support-help', destination: '/compare-internet-options', permanent: true },
    ];
  },
};

export default nextConfig;

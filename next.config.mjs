/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/services1', destination: '/services', permanent: true },
      { source: '/pricing1', destination: '/pricing', permanent: true },
      { source: '/term', destination: '/terms', permanent: true },
    ];
  },
};

export default nextConfig;

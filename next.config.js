/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-store' }],
      },
    ];
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: ['localhost'],
      allowedOrigins: ['http://localhost'],
    },
  },
};

module.exports = nextConfig;

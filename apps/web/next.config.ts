import type { NextConfig } from 'next';

const blogUrl = process.env.BLOG_URL || 'http://localhost:3001';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/hello-world',
        destination: `${blogUrl}/hello-world`,
      },
      {
        source: '/hello-world/:path*',
        destination: `${blogUrl}/hello-world/:path*`,
      },
    ];
  },
};

export default nextConfig;
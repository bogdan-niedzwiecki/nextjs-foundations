import type { NextConfig } from 'next';

const blogUrl = process.env.BLOG_URL || 'http://localhost:3001';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/demo/boundary',
        destination: `${blogUrl}/demo/boundary`,
      },
      {
        source: '/demo/boundary/:path*',
        destination: `${blogUrl}/demo/boundary/:path*`,
      },
    ];
  },
};

export default nextConfig;
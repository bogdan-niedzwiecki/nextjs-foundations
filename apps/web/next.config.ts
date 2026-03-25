import type { NextConfig } from 'next';

const blogUrl = process.env.BLOG_URL || 'http://localhost:3001';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
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
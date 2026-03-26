import type { NextConfig } from 'next';

const blogUrl = process.env.BLOG_URL || 'http://localhost:3001';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
    // Match Tailwind breakpoints
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    // Common UI sizes
    imageSizes: [32, 48, 64, 96, 128, 192, 256],
    // Restrict quality values (required in Next.js 16)
    qualities: [75, 85],
    // Modern formats
    formats: ["image/avif", "image/webp"],
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
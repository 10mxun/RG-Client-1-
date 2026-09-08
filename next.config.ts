import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://jsonplaceholder.typicode.com/:path*',
      },
    ];
  },
};

export default nextConfig;

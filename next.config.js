/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb'
    }
  },
  images: {
    domains: ['utfs.io', 'api.slingacademy.com']
  },
  webpack: {
    experiments: {
      asyncWebAssembly: true
    }
  }
};

module.exports = nextConfig;

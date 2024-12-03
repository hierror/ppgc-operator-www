/** @type {import('next').NextConfig} */
const nextConfig = {
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

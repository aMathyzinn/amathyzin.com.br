/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Allow development requests from your local network IP
  allowedDevOrigins: ['192.168.1.3:3000'],
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Enable static optimization
  trailingSlash: false,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  images: {
    domains: ['amathyzin.com.br', 'drive.google.com', 'www.youtube.com', 'discord.com'],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/WYbPYDhQ8y',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@aMathyzin',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/amathyzin',
        permanent: false,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // point problematic imports to local shims that provide default exports
      'webgl-sdf-generator': path.resolve(__dirname, 'src/shims/webgl-sdf-generator.js'),
      'bidi-js': path.resolve(__dirname, 'src/shims/bidi-js.js'),
    }
    return config
  },
}

module.exports = nextConfig
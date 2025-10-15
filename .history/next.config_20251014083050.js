/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.3'],
  images: {
    domains: ['amathyzin.com', 'drive.google.com', 'www.youtube.com', 'discord.com', 'i.ytimg.com'],
    unoptimized: true
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

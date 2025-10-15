/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Configure static export to generate 'out' folder
  output: 'export',
  trailingSlash: true,
  // Allow development requests from your local network IP
  allowedDevOrigins: ['192.168.1.3:3000', '192.168.1.3:3001'],
  images: {
    // Enable Next Image optimization and modern formats
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'amathyzin.com.br', pathname: '/**' },
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' },
      // Keep compatibility with existing external assets if needed
      { protocol: 'https', hostname: 'drive.google.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.youtube.com', pathname: '/**' },
      { protocol: 'https', hostname: 'discord.com', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/XBajMu5dcr',
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
    
    // Improve cache stability
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    }
    
    return config
  },
}

module.exports = nextConfig
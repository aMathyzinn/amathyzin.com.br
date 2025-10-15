/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Migrar de export estático para build padrão da Vercel
  // (serverless/edge), habilitando compressão e evitando redirects extras
  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
  // Allow development requests from your local network IP
  allowedDevOrigins: ['192.168.1.3:3000', '192.168.1.3:3001'],
  images: {
    // Usar otimização nativa do Next/Image na Vercel
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'amathyzin.com.br', pathname: '/**' },
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/**' },
      // Keep compatibility with existing external assets if needed
      { protocol: 'https', hostname: 'drive.google.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.youtube.com', pathname: '/**' },
      { protocol: 'https', hostname: 'discord.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      // Cache agressivo para assets estáticos gerados pelo Next
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: 'Thu, 31 Dec 2037 23:55:55 GMT' },
        ],
      },
      // Cache longo para imagens otimizadas
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache para assets do diretório público
      {
        source: '/imgs/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: 'Thu, 31 Dec 2037 23:55:55 GMT' },
        ],
      },
      {
        source: '/download_files/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800' },
        ],
      },
    ]
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
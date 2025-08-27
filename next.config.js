/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['amathyzin.com', 'drive.google.com', 'www.youtube.com', 'discord.com'],
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
}

module.exports = nextConfig
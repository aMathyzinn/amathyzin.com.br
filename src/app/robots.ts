import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://amathyzin.com.br/sitemap.xml',
    host: 'https://amathyzin.com.br',
  }
}
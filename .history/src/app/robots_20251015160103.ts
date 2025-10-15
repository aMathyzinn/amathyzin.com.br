import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'
export const revalidate = 86400

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
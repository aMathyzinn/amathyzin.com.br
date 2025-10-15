import type { MetadataRoute } from 'next'
import products from '@/data/products'
export const dynamic = 'force-static'
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amathyzin.com.br'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/downloads/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/sobre/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}${p.projectUrl}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
}
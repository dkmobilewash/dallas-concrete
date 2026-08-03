import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = services.map((s) => ({
    url: `${site.baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const cityUrls = cities.map((c) => ({
    url: `${site.baseUrl}/service-areas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const serviceCityUrls = cities.flatMap((c) =>
    services.map((s) => ({
      url: `${site.baseUrl}/service-areas/${c.slug}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  const blogUrls = getAllPosts().map((post) => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [
    { url: site.baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${site.baseUrl}/about`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${site.baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${site.baseUrl}/blog`, priority: 0.5, changeFrequency: 'weekly' },
    ...serviceUrls,
    ...cityUrls,
    ...serviceCityUrls,
    ...blogUrls,
  ]
}

import { site } from '@/data/site'

export default function ArticleSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string
  description: string
  date: string
  slug: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.baseUrl}/blog/${slug}`,
    },
    url: `${site.baseUrl}/blog/${slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

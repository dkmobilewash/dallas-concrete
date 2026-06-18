import { site } from '@/data/site'

export default function ServiceSchema({ name, description }: { name: string; description: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phone,
    },
    areaServed: { '@type': 'Place', name: 'Dallas, TX' },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

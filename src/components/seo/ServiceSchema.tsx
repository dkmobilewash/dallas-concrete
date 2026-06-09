import { site } from '@/data/site'

interface ServiceSchemaProps {
  name: string
  description: string
}

export default function ServiceSchema({ name, description }: ServiceSchemaProps) {
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
    areaServed: {
      '@type': 'Place',
      name: 'Dallas, TX',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

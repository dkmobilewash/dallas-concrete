import { site } from '@/data/site'

export default function LocalBusinessSchema({ city }: { city?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.baseUrl}/#business`,
    name: site.name,
    url: site.baseUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || site.address.city,
      addressRegion: site.address.stateCode,
      addressCountry: 'US',
    },
    areaServed: [
      'Dallas, TX', 'Irving, TX', 'Garland, TX',
      'Grand Prairie, TX', 'Mesquite, TX',
      'Plano, TX', 'Frisco, TX', 'McKinney, TX',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Driveways' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Patios' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Foundations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stamped Concrete' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Concrete' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

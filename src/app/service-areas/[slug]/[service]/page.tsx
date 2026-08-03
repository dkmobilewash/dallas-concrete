import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CtaSection from '@/components/sections/CtaSection'
import { CheckCircle, ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  const params: { slug: string; service: string }[] = []
  for (const city of cities) {
    for (const svc of services) {
      params.push({ slug: city.slug, service: svc.slug })
    }
  }
  return params
}

export function generateMetadata({ params }: { params: { slug: string; service: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  const service = services.find((s) => s.slug === params.service)
  if (!city || !service) return {}
  return buildMetadata({
    title: `${service.name} in ${city.name}, TX`,
    description: `Professional ${service.name.toLowerCase()} installation and services in ${city.name}, TX. Serving ${city.name} homeowners and businesses. Free estimates — call ${site.phone}.`,
    canonical: `${site.baseUrl}/service-areas/${city.slug}/${service.slug}`,
  })
}

const serviceHighlights: Record<string, string[]> = {
  'concrete-driveways': [
    'Vehicle-grade thickness and reinforcement',
    'Proper apron transitions at the street',
    'Control joints for crack management',
    'Heat-resistant curing for North Texas summers',
  ],
  'concrete-patios': [
    'Drainage slope away from your foundation',
    'Multiple finish options available',
    'Expansion joints for thermal movement',
    'Integration with outdoor living features',
  ],
  'concrete-walkways': [
    'Slip-resistant surface finishes',
    'ADA-compliant design for commercial properties',
    'Trip hazard prevention through proper base work',
    'Smooth transitions at driveways and entries',
  ],
  'concrete-foundations': [
    'Engineered for local clay soil conditions',
    'Post-tension and conventional slab options',
    'Drainage integration around the perimeter',
    'Full code compliance and inspections',
  ],
  'retaining-walls': [
    'Engineered for lateral soil pressure',
    'Integrated drainage behind the wall',
    'Tiered wall options for large grade changes',
    'Erosion and foundation protection',
  ],
  'stamped-concrete': [
    'Premium pattern selection (ashlar slate, flagstone, cobblestone)',
    'Color hardener for durable, rich finishes',
    'UV-resistant sealer included',
    'Cost-effective alternative to natural stone',
  ],
  'commercial-concrete': [
    'Heavy-load engineering for vehicle traffic',
    'ADA-compliant surfaces and ramps',
    'Phased scheduling to minimize business disruption',
    'Code-compliant, liability-grade installations',
  ],
}

export default function ServiceCityPage({ params }: { params: { slug: string; service: string } }) {
  const city = cities.find((c) => c.slug === params.slug)
  const service = services.find((s) => s.slug === params.service)
  if (!city || !service) notFound()

  const highlights = serviceHighlights[service.slug] || []
  const otherServices = services.filter((s) => s.slug !== service.slug)
  const otherCities = cities.filter((c) => c.slug !== city.slug)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/#service-areas' },
    { name: `${city.name}, TX`, href: `/service-areas/${city.slug}` },
    { name: service.name, href: `/service-areas/${city.slug}/${service.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema city={city.name} />
      <ServiceSchema name={`${service.name} in ${city.name}`} description={service.metaDescription} />

      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            {service.name} in {city.name}, TX
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Professional {service.name.toLowerCase()} for {city.name} homeowners and businesses. Locally operated, fully licensed and insured.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            {service.name} Services for {city.name} Properties
          </h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            Dallas Concrete Solutions provides professional {service.name.toLowerCase()} throughout {city.name} and {city.county}. We understand the local soil conditions, weather patterns, and building requirements that affect concrete work in this area.
          </p>
          <p className="text-brand-gray leading-relaxed mb-4">
            Whether you are in {city.neighborhoods.slice(0, 3).join(', ')}, or other {city.name} neighborhoods, we deliver the same quality workmanship and attention to detail on every project. Our crews are experienced with the specific challenges that {city.name} properties present.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Near {city.landmarks.slice(0, 2).join(' or ')}? We are familiar with the area and can provide a fast, accurate estimate for your project.
          </p>
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-gray-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8">
              Why Choose Us for {service.name} in {city.name}
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-brand-gray">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Get a Free {service.shortName} Estimate in {city.name}
          </h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            We provide free on-site estimates for all {service.name.toLowerCase()} projects in {city.name}. Call{' '}
            <a href={site.phoneHref} className="text-brand-orange-dark hover:underline font-semibold">{site.phone}</a>{' '}
            or <Link href="/contact" className="text-brand-orange-dark hover:underline font-semibold">request an estimate online</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
            Other Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/service-areas/${city.slug}/${s.slug}`}
                className="flex items-center justify-between bg-white border border-brand-gray-mid/30 rounded-lg p-4 hover:border-brand-orange transition-colors group"
              >
                <span className="font-medium text-brand-charcoal">{s.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-brand-charcoal mb-4 text-center">
            {service.name} in Other Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}/${service.slug}`}
                className="text-sm text-brand-orange-dark hover:underline"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CtaSection from '@/components/sections/CtaSection'
import Button from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

const validSlugs = new Set(
  services.flatMap((s) => cities.map((c) => `${s.slug}__${c.slug}`))
)

export function generateStaticParams() {
  const params: { service: string; city: string }[] = []
  for (const svc of services) {
    for (const city of cities) {
      params.push({ service: svc.slug, city: city.slug })
    }
  }
  return params
}

export function generateMetadata({ params }: { params: { service: string; city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city)
  const service = services.find((s) => s.slug === params.service)
  if (!city || !service) return {}
  return buildMetadata({
    title: `${service.name} in ${city.name}, TX`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, TX. Licensed & insured concrete contractor serving ${city.name} homeowners and businesses. Free estimates — ${site.phone}.`,
    canonical: `${site.baseUrl}/${service.slug}/${city.slug}`,
  })
}

const serviceHighlights: Record<string, string[]> = {
  'concrete-driveways': [
    'Vehicle-grade thickness and reinforcement for daily use',
    'Proper apron transitions at the street',
    'Control joints placed to manage cracking',
    'Heat-resistant curing methods for North Texas summers',
  ],
  'concrete-patios': [
    'Drainage slope engineered away from your foundation',
    'Broom finish, stamped, or exposed aggregate options',
    'Expansion joints for thermal movement',
    'Designed around outdoor kitchens, fire pits, and furniture layouts',
  ],
  'concrete-walkways': [
    'Slip-resistant surface finishes for safety',
    'ADA-compliant design for commercial properties',
    'Trip hazard prevention through proper base preparation',
    'Smooth transitions at driveways and entry points',
  ],
  'concrete-foundations': [
    'Engineered for Dallas-area expansive clay soil',
    'Post-tension and conventional reinforced slab options',
    'Integrated drainage around the foundation perimeter',
    'Full code compliance with inspections at every stage',
  ],
  'retaining-walls': [
    'Designed for lateral soil pressure at your specific site',
    'Integrated drainage to prevent hydrostatic pressure buildup',
    'Tiered wall options for grade changes over 4 feet',
    'Erosion control that protects your foundation and landscape',
  ],
  'stamped-concrete': [
    'Ashlar slate, flagstone, cobblestone, and wood plank patterns',
    'Color hardener for richer, more durable surface color',
    'UV-resistant sealer included with every installation',
    '30-50% less cost than natural stone with similar appearance',
  ],
  'commercial-concrete': [
    'Heavy-load engineering for vehicle and equipment traffic',
    'ADA-compliant surfaces, ramps, and parking areas',
    'Phased scheduling to minimize disruption to your business',
    'Liability-grade, code-compliant installations',
  ],
}

export default function ServiceCityPage({ params }: { params: { service: string; city: string } }) {
  if (!validSlugs.has(`${params.service}__${params.city}`)) notFound()

  const city = cities.find((c) => c.slug === params.city)!
  const service = services.find((s) => s.slug === params.service)!

  const highlights = serviceHighlights[service.slug] || []
  const otherServices = services.filter((s) => s.slug !== service.slug)
  const otherCities = cities.filter((c) => c.slug !== city.slug)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: service.name, href: `/services/${service.slug}` },
    { name: `${city.name}, TX`, href: `/${service.slug}/${city.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema city={city.name} />
      <ServiceSchema name={`${service.name} in ${city.name}`} description={`Professional ${service.name.toLowerCase()} in ${city.name}, TX by ${site.name}.`} />

      <section className="relative bg-brand-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={`${service.name} in ${city.name}`} fill sizes="100vw" className="object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            {service.name} in {city.name}, TX
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Professional {service.name.toLowerCase()} for {city.name} homes and businesses. Licensed, insured, and locally operated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary">Get Free Estimate</Button>
            <Button href={site.phoneHref} variant="secondary">Call {site.phone}</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
                {service.name} for {city.name} Properties
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Dallas Concrete Solutions provides professional {service.name.toLowerCase()} throughout {city.name} and {city.county}. We understand the local soil conditions, weather patterns, and building requirements that affect concrete work in this area.
              </p>
              <p className="text-brand-gray leading-relaxed mb-4">
                Whether you are in {city.neighborhoods.slice(0, 3).join(', ')}, or other {city.name} neighborhoods, we deliver quality workmanship and attention to detail on every project. Our crews handle the specific challenges that {city.name} properties present — from expansive clay soil to the extreme summer heat.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Near {city.landmarks.slice(0, 2).join(' or ')}? We know the area well and can provide a fast, accurate estimate for your {service.name.toLowerCase()} project.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image src={service.image} alt={`${service.name} project in ${city.name}, TX`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-gray-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
              Why Choose Us for {service.name} in {city.name}
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-brand-gray">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Get a Free {service.shortName} Estimate in {city.name}
          </h2>
          <p className="text-brand-gray leading-relaxed mb-8">
            Ready to start your {service.name.toLowerCase()} project in {city.name}? We provide free on-site estimates with no obligation. Call us directly or fill out our online form.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-md transition-colors">
              <Phone className="w-5 h-5" />{site.phone}
            </a>
            <Button href="/contact">Request Estimate Online</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
            Other Concrete Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${city.slug}`}
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
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${service.slug}/${c.slug}`}
                className="text-sm text-brand-orange-dark hover:underline px-3 py-1 bg-brand-gray-light rounded-full"
              >
                {c.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

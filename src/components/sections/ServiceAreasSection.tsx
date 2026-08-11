import Link from 'next/link'
import { cities } from '@/data/cities'
import CityCard from '@/components/ui/CityCard'
import { ArrowRight } from 'lucide-react'

const featuredSlugs = ['dallas', 'plano', 'frisco']

export default function ServiceAreasSection() {
  const featured = featuredSlugs.map((s) => cities.find((c) => c.slug === s)!).filter(Boolean)
  const remaining = cities.filter((c) => !featuredSlugs.includes(c.slug))

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">Serving the Dallas-Fort Worth Metro Area</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">We provide concrete contracting services across Dallas and surrounding cities. Licensed, insured, and locally operated.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {featured.map((city) => (<CityCard key={city.slug} city={city} />))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {remaining.map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="text-sm text-brand-blue-dark hover:underline px-3 py-1 bg-brand-gray-light rounded-full">
              {c.name}, TX
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/#service-areas" className="inline-flex items-center gap-2 text-brand-blue-dark font-medium hover:underline">
            View All Service Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

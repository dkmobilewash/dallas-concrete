import Image from 'next/image'
import Button from '@/components/ui/Button'
import { site } from '@/data/site'
import { Phone } from 'lucide-react'

const trustBadges = [
  'Licensed & Insured',
  'Serving DFW Since 2015',
  'Free On-Site Estimates',
  '4.9★ Google Rating',
]

export default function HomepageHero() {
  return (
    <section className="relative bg-brand-charcoal text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/concrete-images/commcerical-concretet-slab-foundation-dallas.jpg"
          alt="Concrete crew pouring a commercial slab foundation in Dallas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Dallas&apos;s Trusted Concrete Contractors
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Licensed concrete contractor serving Dallas-Fort Worth with driveways, patios,
            foundations, stamped concrete, and commercial flatwork. Quality work. Honest
            pricing. Free estimates.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="text-sm text-white/80 border border-white/20 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary">Get Free Quote</Button>
            <Button href="/contact" variant="secondary">Book Now</Button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 text-white underline underline-offset-4 transition-colors hover:text-brand-blue font-semibold"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

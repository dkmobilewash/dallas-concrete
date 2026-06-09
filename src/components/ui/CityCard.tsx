import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import type { City } from '@/data/cities'

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="group block bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all border border-brand-gray-mid/30 hover:border-brand-orange"
    >
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
        <div>
          <h3 className="text-base font-semibold text-brand-charcoal mb-1">{city.name}, TX</h3>
          <p className="text-brand-gray text-sm">{city.county}</p>
          <span className="inline-flex items-center text-brand-orange text-sm font-medium mt-2 group-hover:gap-2 transition-all">
            View Services <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

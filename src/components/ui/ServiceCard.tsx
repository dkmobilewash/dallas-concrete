import Link from 'next/link'
import { Car, Sofa, Footprints, Building2, Layers, Palette, Warehouse, ArrowRight } from 'lucide-react'
import type { Service } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Sofa, FootprintsIcon: Footprints, Building2, Layers, Palette, Warehouse,
}

const descriptions: Record<string, string> = {
  'concrete-driveways': 'Professionally installed concrete driveways built to handle daily use and North Texas weather.',
  'concrete-patios': 'Custom patios designed to expand your outdoor living space with durable, attractive concrete.',
  'concrete-walkways': 'Safe, slip-resistant walkways and sidewalks that enhance curb appeal and accessibility.',
  'concrete-foundations': 'Engineered foundations designed to withstand the expansive clay soils of North Texas.',
  'retaining-walls': 'Structural retaining walls that manage grade changes and protect your landscape.',
  'stamped-concrete': 'Decorative stamped concrete that replicates the look of stone, brick, or slate.',
  'commercial-concrete': 'Commercial-grade concrete solutions for parking lots, warehouse floors, and storefronts.',
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-b-2 border-transparent hover:border-brand-orange"
    >
      {Icon && <Icon className="w-6 h-6 text-brand-orange mb-4" />}
      <h3 className="text-lg font-semibold text-brand-charcoal mb-2">{service.name}</h3>
      <p className="text-brand-gray text-sm mb-4">{descriptions[service.slug]}</p>
      <span className="inline-flex items-center text-brand-orange text-sm font-medium group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </span>
    </Link>
  )
}

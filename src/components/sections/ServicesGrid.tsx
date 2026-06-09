import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">Our Concrete Services</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            From driveways and patios to commercial foundations, we deliver quality concrete work across the Dallas-Fort Worth metro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { cities } from '@/data/cities'
import CityCard from '@/components/ui/CityCard'

export default function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">Serving the Dallas-Fort Worth Metro</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">We provide concrete services across Dallas and surrounding cities. Click your city to learn more about our local services.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (<CityCard key={city.slug} city={city} />))}
        </div>
      </div>
    </section>
  )
}

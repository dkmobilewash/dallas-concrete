import { Star } from 'lucide-react'
import TestimonialCard from '@/components/ui/TestimonialCard'

const testimonials = [
  { quote: 'They replaced our entire driveway — removed the old one, prepped the base, poured, and finished in three days. The crew was professional and cleaned up everything when they were done. Driveway looks great a year later.', attribution: 'Sarah M. — Oak Cliff, Dallas' },
  { quote: 'We got quotes from four companies for a stamped patio. Dallas Concrete Solutions gave us the most detailed estimate, explained exactly what was included, and delivered on schedule. The ashlar slate pattern looks like real stone.', attribution: 'James R. — West Plano, TX' },
  { quote: 'Used them for a commercial sidewalk and parking area repair at our strip center. They handled the permits, worked around our tenants\' operating hours, and the concrete has held up perfectly through two Texas summers.', attribution: 'Mike T. — Business Owner, Irving' },
  { quote: 'Our backyard patio had cracked and settled after 15 years. They tore it out, fixed the drainage issue that caused the problem, and poured a new patio with proper slope away from the house. Should have called them years ago.', attribution: 'Linda K. — Lake Highlands, Dallas' },
  { quote: 'Had a retaining wall built to stop the erosion in our backyard. They engineered it with drainage behind the wall, which our previous contractor never did. Zero water issues since installation.', attribution: 'David & Karen P. — Stonebriar, Frisco' },
  { quote: 'They poured the foundation for our custom home in McKinney. Passed every inspection on the first call. The GC said they were the most reliable concrete sub he had worked with that year.', attribution: 'Robert S. — Craig Ranch, McKinney' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">What Dallas Homeowners Say About Our Work</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">4.9-star average across Google reviews. Here is what our customers have to say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (<TestimonialCard key={i} quote={t.quote} attribution={t.attribution} />))}
        </div>
      </div>
    </section>
  )
}

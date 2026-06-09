import TestimonialCard from '@/components/ui/TestimonialCard'

// TODO: Replace with verified Google/Yelp reviews before launch
const testimonials = [
  {
    quote: 'They replaced our entire driveway and the finished product looks great. The crew was professional and cleaned up everything when they were done.',
    attribution: 'Homeowner in Dallas',
  },
  {
    quote: 'We got quotes from several companies for a new patio. Dallas Concrete Solutions gave us a fair price and delivered exactly what they promised, on schedule.',
    attribution: 'Homeowner in Plano',
  },
  {
    quote: 'Used them for a commercial sidewalk project. They handled the permits, communicated well throughout, and the concrete work has held up perfectly.',
    attribution: 'Business Owner in Irving',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">What Our Customers Say</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Hear from homeowners and businesses across the Dallas area.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} attribution={t.attribution} />
          ))}
        </div>
      </div>
    </section>
  )
}

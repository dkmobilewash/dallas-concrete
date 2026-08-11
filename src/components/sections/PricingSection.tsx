import { CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { site } from '@/data/site'

const tiers = [
  {
    name: 'Basic Flatwork',
    description: 'Walkways, small pads, and simple slab pours',
    popular: false,
    included: [
      'Site preparation and grading',
      '4-inch concrete with wire mesh',
      'Broom finish for slip resistance',
      'Control joint cutting',
      'Full cleanup and haul-off',
    ],
    bestFor: 'Side walkways, shed pads, utility slabs',
  },
  {
    name: 'Standard Driveway Package',
    description: 'Full driveway replacement with proper base and reinforcement',
    popular: true,
    included: [
      'Old driveway demolition and removal',
      '6-inch compacted aggregate base',
      '4-5 inch concrete with rebar reinforcement',
      'Broom or swirl finish',
      'Control joints and curing compound',
      'Site restoration and cleanup',
    ],
    bestFor: 'Single and double driveways, garage aprons, parking pads',
  },
  {
    name: 'Premium Stamped & Decorative',
    description: 'High-end stamped patterns with color hardener and UV sealer',
    popular: false,
    included: [
      'Everything in Standard, plus:',
      'Stamp pattern and color consultation',
      'Dry-shake color hardener application',
      'Professional stamp mat imprinting',
      'Accent release agent for tonal depth',
      'UV-resistant acrylic sealer',
      'Edge and detail touch-up',
    ],
    bestFor: 'Patios, pool decks, front entries, decorative driveways',
  },
  {
    name: 'Full Restoration & Resurfacing',
    description: 'Complete concrete repair, resurfacing, or replacement for aging surfaces',
    popular: false,
    included: [
      'Full condition assessment',
      'Crack repair and surface prep',
      'Concrete overlay or full replacement',
      'Leveling and grade correction',
      'Finish matching or upgrade',
      'Final seal and protection',
    ],
    bestFor: 'Cracked driveways, deteriorated patios, uneven walkways, commercial surfaces',
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-4">
            Concrete Service Packages for Every Dallas Project
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            From simple flatwork to decorative stamped installations, we offer clear
            packages with transparent pricing. Every package includes a free on-site
            estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-lg border p-6 flex flex-col ${
                tier.popular ? 'border-brand-blue' : 'border-gray-200'
              }`}
            >
              {tier.popular && (
                <span className="self-start bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-brand-charcoal mb-1">{tier.name}</h3>
              <p className="text-brand-gray text-sm mb-4">{tier.description}</p>

              <ul className="space-y-2 mb-4">
                {tier.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal">
                    <CheckCircle className="h-4 w-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-brand-gray italic mb-6">
                <span className="font-semibold not-italic">Best for:</span> {tier.bestFor}
              </p>

              <div className="mt-auto">
                <Button href="/contact" variant="primary" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
            Not Sure Which Package Is Right for You?
          </h3>
          <p className="text-brand-gray mb-6">
            Most Dallas homeowners choose our Standard Driveway Package for replacements
            and our Premium Package for patios and outdoor living areas. If your existing
            concrete has structural cracks, settling, or surface deterioration, our
            Restoration package covers the full assessment and repair process. Call us at{' '}
            {site.phone} or request a free estimate — we will visit your property and
            recommend the right option for your project and budget.
          </p>
          <Button href="/contact" variant="primary">
            Get a Free Recommendation
          </Button>
        </div>
      </div>
    </section>
  )
}

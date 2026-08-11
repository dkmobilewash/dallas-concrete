import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Concrete Driveways',
    href: '/services/concrete-driveways',
    description:
      'Your driveway handles more abuse than any other concrete surface on your property — daily vehicle loads, Dallas sun that pushes surface temps past 140°F, and the constant expansion and contraction of the clay soil beneath it. We pour driveways at 4-6 inch thickness over compacted crushed limestone base with rebar reinforcement, because the standard 3.5-inch builder spec does not hold up to North Texas conditions.',
    bullets: [
      'Driveway replacement and new installation',
      '4,000+ PSI concrete with rebar reinforcement',
      'Proper street apron transitions and grading',
      'Control joints cut at engineered intervals',
      'Heat-adapted curing for Dallas summers',
    ],
  },
  {
    title: 'Concrete Patios',
    href: '/services/concrete-patios',
    description:
      'A concrete patio turns your backyard into a functional outdoor living space — and in DFW, where you can use your patio eight months out of the year, it is one of the highest-return improvements you can make. We engineer drainage slope away from your foundation, because water pooling against a North Texas foundation causes the clay to swell and leads to expensive structural damage.',
    bullets: [
      'Patio design for outdoor kitchens and fire pits',
      'Broom finish, stamped, or exposed aggregate options',
      'Drainage slope engineered away from foundation',
      'Expansion joints for thermal movement',
      'Pool deck installations with slip-resistant finish',
    ],
  },
  {
    title: 'Stamped & Decorative Concrete',
    href: '/services/stamped-concrete',
    description:
      'Stamped concrete gives you the appearance of natural stone, brick, or slate at 30-50% less cost — and unlike individual pavers, a stamped slab will not shift, settle, or grow weeds between joints. Our crews use color hardener rather than integral color for richer surface tone and a denser, more wear-resistant finish. Every stamped project includes a UV-resistant sealer to protect against the intense North Texas sun that fades unprotected decorative concrete within two years.',
    bullets: [
      'Ashlar slate, flagstone, cobblestone, and wood plank patterns',
      'Dry-shake color hardener for premium surface',
      'UV-resistant acrylic sealer included',
      'Pattern alignment across large slab areas',
      'Non-slip additive available for pool decks',
    ],
  },
  {
    title: 'Concrete Foundations',
    href: '/services/concrete-foundations',
    description:
      'Dallas sits on some of the most challenging foundation soil in the country. The Blackland Prairie clay beneath most DFW properties can swell 4-8% when saturated and shrink by similar amounts during drought — cycles that crack and shift foundations not engineered for these conditions. We install both post-tension and conventional reinforced slab foundations designed by licensed structural engineers who understand DFW soil behavior.',
    bullets: [
      'Post-tension and conventional slab systems',
      'Engineered for DFW expansive clay soil',
      'Grade beam excavation and rebar placement',
      'Underground plumbing coordination',
      'All building inspections coordinated and passed',
    ],
  },
  {
    title: 'Concrete Repair & Resurfacing',
    href: '/contact',
    description:
      'Not every concrete problem requires a full replacement. Spalling surfaces, hairline cracks, and minor settling can often be repaired or resurfaced at a fraction of replacement cost. We assess the damage honestly — if a repair will hold, we recommend it. If the slab is too far gone, we will tell you that too. Our concrete repair services cover residential driveways, patios, walkways, and commercial surfaces throughout the Dallas metro.',
    bullets: [
      'Crack routing and sealing',
      'Surface resurfacing and overlay',
      'Trip hazard grinding',
      'Spalling and scaling repair',
      'Honest assessment — repair vs. replace recommendation',
    ],
  },
  {
    title: 'Sidewalks & Walkways',
    href: '/services/concrete-walkways',
    description:
      'A cracked or heaved walkway is not just an eyesore — it is a trip hazard and a liability concern. In Dallas, live oak and pecan tree roots push up under walkways within 5-10 years if root barriers are not installed during construction. We build walkways with proper base compaction, root mitigation where needed, and slip-resistant broom finish that handles wet conditions safely.',
    bullets: [
      'Residential and commercial walkway installation',
      'ADA-compliant design for commercial properties',
      'Root barrier installation near mature trees',
      'Slip-resistant broom and textured finishes',
      'Smooth transitions at driveways and entries',
    ],
  },
  {
    title: 'Retaining Walls',
    href: '/services/retaining-walls',
    description:
      'Grade changes, erosion, and drainage problems are common on DFW properties — especially in neighborhoods built along creek beds and rolling terrain in Collin County. A properly engineered retaining wall holds back soil, creates usable flat areas, and prevents water from undermining your foundation. Every wall we build includes drainage behind it, because hydrostatic pressure buildup is the number one cause of retaining wall failure.',
    bullets: [
      'Engineered for lateral soil pressure',
      'Gravel backfill and drain pipe behind every wall',
      'Tiered wall options for grade changes over 4 feet',
      'Reinforced concrete footer below grade',
      'Structural engineering for walls over 4 feet',
    ],
  },
  {
    title: 'Commercial & Industrial Concrete',
    href: '/services/commercial-concrete',
    description:
      'Commercial concrete demands heavier engineering, stricter code compliance, and scheduling that does not shut down your business. We pour warehouse floors to tight flatness tolerances for forklift operation, parking lots engineered for constant vehicle traffic, and ADA-compliant sidewalks and ramps for commercial properties. We coordinate with general contractors and schedule phased pours around your operating hours.',
    bullets: [
      'Parking lots, loading docks, and truck aprons',
      'Warehouse and industrial floor slabs',
      'ADA-compliant ramps and sidewalks',
      'Phased scheduling for operating businesses',
      'Flatness tolerances for forklift and racking systems',
    ],
  },
]

export default function ServiceShowcase() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">
            Concrete Services for Dallas Homes and Businesses
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Every service we offer is built around the specific challenges of working in the Dallas-Fort Worth climate and soil conditions.
          </p>
        </div>
        <div>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-8 items-start py-10 ${index < services.length - 1 ? 'border-b border-brand-gray-mid/20' : ''}`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">{service.title}</h3>
                <p className="text-brand-gray leading-relaxed mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-brand-blue-dark font-medium hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-brand-gray text-sm leading-relaxed">
                      <span className="text-brand-blue mt-1 shrink-0">&#10003;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

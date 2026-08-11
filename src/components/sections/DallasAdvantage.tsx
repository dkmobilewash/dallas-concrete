import { Thermometer, Droplets, Snowflake, Mountain } from 'lucide-react'

const conditions = [
  {
    icon: Thermometer,
    title: 'Extreme Summer Heat & Curing',
    description:
      'Dallas summers regularly exceed 100°F, pushing concrete surface temperatures past 140°F. We schedule pours before dawn during peak heat, use evaporation retarders, and apply curing compounds rated for high-temperature conditions to prevent surface scaling and premature cracking.',
  },
  {
    icon: Droplets,
    title: 'Expansive Clay Soil Movement',
    description:
      'Most of the DFW metro sits on Blackland Prairie clay that swells when wet and shrinks during drought. This constant soil movement cracks concrete that is not properly reinforced and based. We adjust rebar spacing, base depth, and joint design to the specific soil conditions at your property.',
  },
  {
    icon: Snowflake,
    title: 'Winter Freeze-Thaw Cycles',
    description:
      'While Dallas winters are mild compared to northern states, overnight freezes followed by rapid daytime warming create freeze-thaw stress that deteriorates concrete surfaces over time. We use air-entrained concrete mixes and proper curing practices that resist this damage.',
  },
  {
    icon: Mountain,
    title: 'Drainage and Grade Challenges',
    description:
      'Heavy spring thunderstorms drop significant rainfall quickly, and poor drainage around concrete installations leads to erosion, foundation damage, and pooling. Every patio, driveway, and walkway we install includes engineered drainage slope and proper grading to move water away from structures.',
  },
]

export default function DallasAdvantage() {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">
            Why Dallas Homeowners Choose a Local Concrete Contractor
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            North Texas soil and weather create specific challenges for concrete installations. Here is how we address them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {conditions.map((condition) => (
            <div key={condition.title} className="bg-white rounded-lg p-6 border">
              <condition.icon className="w-8 h-8 text-brand-blue mb-3" />
              <h3 className="font-semibold text-brand-charcoal mb-2">{condition.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{condition.description}</p>
            </div>
          ))}
        </div>
        <p className="text-brand-gray text-sm leading-relaxed max-w-5xl mx-auto mt-10 text-center">
          We serve homeowners and businesses across Dallas, Plano, Frisco, McKinney, Irving, Garland, Grand Prairie, Mesquite, and surrounding cities. Our crews work in these neighborhoods daily and understand the soil, weather, and permitting conditions specific to each area.
        </p>
      </div>
    </section>
  )
}

import { CheckCircle, Users, Building, MessageSquare, Thermometer, Sparkles } from 'lucide-react'

const reasons = [
  { icon: CheckCircle, title: 'Quality Workmanship on Every Pour', description: 'We take pride in delivering concrete that is level, properly finished, and built to last through North Texas weather cycles.' },
  { icon: Users, title: 'Experienced, Professional Crews', description: 'Our crews bring hands-on concrete experience to every project, from small residential jobs to large commercial pours.' },
  { icon: Building, title: 'Residential and Commercial Capacity', description: "Whether it's a backyard patio or a commercial parking lot, we have the equipment and expertise to handle the scope." },
  { icon: MessageSquare, title: 'Clear Communication and Honest Timelines', description: 'We keep you informed at every stage, provide realistic schedules, and follow through on what we promise.' },
  { icon: Thermometer, title: 'Built for North Texas Conditions', description: 'We account for expansive clay soils, extreme summer heat, and occasional freeze-thaw cycles in every installation.' },
  { icon: Sparkles, title: 'Attention to Finish, Detail, and Cleanup', description: 'From clean edges and proper grading to thorough jobsite cleanup, we treat your property with respect.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">Why Choose Dallas Concrete Solutions</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">We focus on doing concrete work the right way — with quality materials, skilled crews, and honest communication.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <reason.icon className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-charcoal mb-1">{reason.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

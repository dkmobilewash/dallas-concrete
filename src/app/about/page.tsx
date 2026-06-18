import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import Button from '@/components/ui/Button'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = buildMetadata({
  title: 'About Dallas Concrete Solutions | Concrete Contractors Dallas TX',
  description: 'Learn about Dallas Concrete Solutions — a licensed and insured concrete contractor serving residential and commercial clients across the Dallas-Fort Worth metro area.',
  canonical: `${site.baseUrl}/about`,
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">About Dallas Concrete Solutions</h1>
          <p className="text-lg text-white/80 max-w-2xl">A concrete contractor built on quality work, honest communication, and respect for every property we touch.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            {/* [PLACEHOLDER] Replace with actual company founding story and owner details when available */}
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Our Approach to Concrete Work</h2>
            <p className="text-brand-gray leading-relaxed mb-4">Dallas Concrete Solutions provides professional concrete contracting services across the Dallas-Fort Worth metro area. We work with homeowners, property managers, and businesses to deliver durable, well-finished concrete installations that stand up to North Texas conditions.</p>
            <p className="text-brand-gray leading-relaxed">Our approach is straightforward: assess the site properly, prepare the base correctly, pour and finish with care, and clean up when we&apos;re done. We believe that quality concrete work starts with honest communication about what a project requires and realistic timelines for completion.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What We Do</h2>
            <p className="text-brand-gray leading-relaxed mb-4">We handle the full range of residential and commercial concrete projects, including driveways, patios, walkways, foundations, retaining walls, stamped decorative concrete, and commercial flatwork. Whether it&apos;s a single residential driveway or a multi-phase commercial project, we have the equipment and crew capacity to deliver.</p>
            <p className="text-brand-gray leading-relaxed">Our service area covers Dallas and the surrounding cities, including Irving, Garland, Grand Prairie, Mesquite, Plano, Frisco, and McKinney. We know the local soil conditions, permitting requirements, and weather patterns that affect concrete work in this region.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Licensed and Insured</h2>
            <p className="text-brand-gray leading-relaxed mb-4">Dallas Concrete Solutions is a licensed and insured concrete contractor. We carry general liability insurance and workers&apos; compensation coverage on every project. Our crews are experienced professionals who take pride in their work and treat your property with respect.</p>
            {/* [PLACEHOLDER] Add specific license numbers, certifications, or association memberships when available */}
          </div>
          <div className="pt-4"><Button href="/contact">Get a Free Estimate</Button></div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}

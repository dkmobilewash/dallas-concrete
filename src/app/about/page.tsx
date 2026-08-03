import Image from 'next/image'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import Button from '@/components/ui/Button'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = buildMetadata({
  title: 'About Our Dallas Concrete Company',
  description: 'Learn about Dallas Concrete Solutions — a licensed and insured concrete contractor serving residential and commercial clients across the Dallas-Fort Worth metro area.',
  canonical: `${site.baseUrl}/about`,
})

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-brand-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/concrete-images/frisco-concrete-patio-isntallation.jpg"
            alt="Dallas Concrete Solutions crew finishing a patio"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">About Dallas Concrete Solutions</h1>
          <p className="text-lg text-white/80 max-w-2xl">A concrete contractor built on quality work, honest communication, and respect for every property we touch.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Our Approach to Concrete Work</h2>
                <p className="text-brand-gray leading-relaxed mb-4">Dallas Concrete Solutions provides professional concrete contracting services across the Dallas-Fort Worth metro area. We work with homeowners, property managers, and businesses to deliver durable, well-finished concrete installations that stand up to North Texas conditions.</p>
                <p className="text-brand-gray leading-relaxed">Our approach is straightforward: assess the site properly, prepare the base correctly, pour and finish with care, and clean up when we&apos;re done. We believe that quality concrete work starts with honest communication about what a project requires and realistic timelines for completion.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What We Do</h2>
                <p className="text-brand-gray leading-relaxed mb-4">We handle the full range of residential and commercial concrete projects, including driveways, patios, walkways, foundations, retaining walls, stamped decorative concrete, and commercial flatwork. Whether it&apos;s a single residential driveway or a multi-phase commercial project, we have the equipment and crew capacity to deliver.</p>
                <p className="text-brand-gray leading-relaxed">Our service area covers Dallas and the surrounding cities, including Irving, Garland, Grand Prairie, Mesquite, Plano, Frisco, and McKinney. We know the local soil conditions, permitting requirements, and weather patterns that affect concrete work in this region.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/concrete-images/commcerical-concretet-slab-foundation-dallas.jpg"
                  alt="Our crew pouring a concrete slab foundation in Dallas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/concrete-images/concrete-driveway-installation-wolf-creek-dallas.jpg"
                    alt="Finished concrete driveway in Dallas"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/concrete-images/concrete-patio-installation-oak-cliff-dallas.jpg"
                    alt="Completed concrete patio in Oak Cliff, Dallas"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Licensed and Insured</h2>
          <p className="text-brand-gray leading-relaxed mb-4">Dallas Concrete Solutions is a licensed and insured concrete contractor. We carry general liability insurance and workers&apos; compensation coverage on every project. Our crews are experienced professionals who take pride in their work and treat your property with respect.</p>
          <div className="pt-4"><Button href="/contact">Get a Free Estimate</Button></div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}

import { buildMetadata } from '@/lib/metadata'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ServiceAreasSection from '@/components/sections/ServiceAreasSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

const meta = buildMetadata({
  title: 'Dallas Concrete Contractors',
  description: 'Dallas Concrete Solutions offers professional concrete contracting for driveways, patios, foundations, and more throughout Dallas and the surrounding areas. Call 214-239-0709 for a free estimate.',
  canonical: 'https://www.dallasconcretesolutions.net',
})

export const metadata = {
  ...meta,
  title: { absolute: 'Dallas Concrete Contractors | Dallas Concrete Solutions' },
}

const faqs = [
  { question: 'How much does a concrete driveway cost in Dallas?', answer: 'Concrete driveway costs in Dallas vary depending on the size, thickness, finish, and site preparation required. A standard two-car driveway typically costs between $3,000 and $7,000. We provide free on-site estimates so you get an accurate price for your specific project.' },
  { question: 'How long does concrete take to cure in Texas heat?', answer: 'In the Dallas area, concrete typically reaches initial set within 24-48 hours and working strength within 7 days. Full cure takes approximately 28 days. During hot Texas summers, we take extra precautions like curing compounds and proper hydration to prevent rapid moisture loss and cracking.' },
  { question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for all residential and commercial concrete projects. We will visit your property, assess the site conditions, discuss your goals, and provide a detailed written estimate.' },
  { question: 'What cities do you serve in the Dallas area?', answer: "We serve Dallas and the surrounding metro area, including Irving, Garland, Grand Prairie, Mesquite, Plano, Frisco, and McKinney. Contact us if your city isn't listed — we may still be able to help." },
  { question: 'Are you licensed and insured?', answer: "Yes. Dallas Concrete Solutions is a licensed and insured concrete contractor. We carry general liability insurance and workers' compensation coverage to protect our customers and crew on every project." },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Dallas Concrete Contractors"
        subtitle="Professional concrete contracting for driveways, patios, foundations, and more. Serving Dallas and the surrounding metro area with quality workmanship and honest pricing."
      />
      <ServicesGrid />
      <WhyChooseUs />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FaqSection faqs={faqs} />
      <CtaSection />
    </>
  )
}

import { buildMetadata } from '@/lib/metadata'
import HomepageHero from '@/components/sections/HomepageHero'
import PricingSection from '@/components/sections/PricingSection'
import ServiceShowcase from '@/components/sections/ServiceShowcase'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import DallasAdvantage from '@/components/sections/DallasAdvantage'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProjectGallery from '@/components/sections/ProjectGallery'
import LeadCapture from '@/components/sections/LeadCapture'
import ServiceAreasSection from '@/components/sections/ServiceAreasSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

const meta = buildMetadata({
  title: 'Dallas Concrete Contractors',
  description: 'Dallas Concrete Solutions is a licensed concrete contractor serving Dallas-Fort Worth. Driveways, patios, foundations, stamped concrete, retaining walls, and commercial flatwork. Free estimates — call 214-239-0709.',
  canonical: 'https://www.dallasconcretesolutions.net',
})

export const metadata = {
  ...meta,
  title: { absolute: 'Dallas Concrete Contractors | Driveways, Patios & Foundations | Dallas Concrete Solutions' },
}

const faqs = [
  { question: 'How much does a concrete driveway cost in Dallas?', answer: 'A standard two-car driveway replacement in Dallas typically costs between $3,500 and $7,500 depending on size, thickness, finish type, and site conditions. Stamped or decorative driveways run higher. We provide free on-site estimates with exact pricing — no ballpark guesses over the phone.' },
  { question: 'How long does concrete take to cure in Texas heat?', answer: 'Concrete reaches initial set within 24-48 hours, working strength at 7 days, and full structural cure at 28 days. During Dallas summers when temperatures exceed 100°F, we use evaporation retarders, early-morning pour schedules, and curing compounds to prevent rapid moisture loss that causes surface scaling.' },
  { question: 'Do I need a permit for concrete work in Dallas?', answer: 'Driveway approaches (the apron where your driveway meets the street) typically require a permit in the City of Dallas. Retaining walls over 4 feet require a building permit and engineered plans. We handle all permitting and inspection coordination for projects that require it.' },
  { question: 'How does Dallas clay soil affect concrete installations?', answer: 'Most of the DFW metro sits on expansive Blackland Prairie clay that swells when wet and shrinks during drought. This soil movement is the primary cause of concrete cracking and foundation shifting in North Texas. We counter it with proper base compaction, adequate slab thickness, reinforcement, and correctly spaced control joints.' },
  { question: 'What is the best time of year to pour concrete in North Texas?', answer: 'Spring and fall are ideal — moderate temperatures between 50-80°F allow optimal curing. Summer pours require extra precautions (early-morning scheduling, retarders, curing compounds) but we pour year-round. Winter pours during freeze warnings may need to be rescheduled for safety.' },
  { question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation on-site estimates for all residential and commercial concrete projects across the Dallas-Fort Worth metro. We visit your property, assess soil and site conditions, discuss your goals, and provide a detailed written estimate — typically within 48 hours of the visit.' },
  { question: 'What cities do you serve in the Dallas area?', answer: 'We serve Dallas, Irving, Garland, Grand Prairie, Mesquite, Plano, Frisco, McKinney, and surrounding cities throughout the DFW metro. If your city is not listed, contact us — we may still be able to help depending on location.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Dallas Concrete Solutions is a licensed and insured concrete contractor. We carry general liability insurance and workers\' compensation coverage on every project to protect our customers, their property, and our crew.' },
  { question: 'How long does a typical concrete project take?', answer: 'A standard driveway replacement takes 3-5 days from demo to finish. Patios take 3-4 days. Walkways are typically 2-3 days. Foundations span 2-3 weeks including excavation, plumbing, reinforcement, and curing. We provide a specific timeline as part of every estimate.' },
  { question: 'Do you guarantee your concrete work?', answer: 'We stand behind our workmanship. If a defect in our installation causes a problem within the warranty period, we address it at no cost. We also use quality materials — minimum 4,000 PSI concrete, proper reinforcement, and professional-grade curing compounds — because the best warranty is concrete that does not fail in the first place.' },
]

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <PricingSection />
      <ServiceShowcase />
      <WhyChooseUs />
      <DallasAdvantage />
      <TestimonialsSection />
      <ProjectGallery />
      <LeadCapture />
      <ServiceAreasSection />
      <FaqSection title="Common Questions About Concrete Work in Dallas" faqs={faqs} />
      <CtaSection />
    </>
  )
}

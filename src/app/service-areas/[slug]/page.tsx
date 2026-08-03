import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import FaqAccordion from '@/components/ui/FaqAccordion'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import CtaSection from '@/components/sections/CtaSection'
import { ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) return {}
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `${site.baseUrl}/service-areas/${city.slug}`,
  })
}

const cityDetails: Record<string, {
  extendedIntro: string
  neighborhoodContent: string
  faqs: { question: string; answer: string }[]
}> = {
  dallas: {
    extendedIntro: "Whether you live near White Rock Lake and need a new patio for lakeside entertaining, or you're updating the driveway at a Deep Ellum property, we know the soil conditions and permitting requirements across Dallas. The Bishop Arts District, Uptown, and surrounding neighborhoods all present unique site conditions that we handle daily.",
    neighborhoodContent: "In Oak Cliff, we frequently replace aging driveways and install new walkways for the area's character homes. Lake Highlands homeowners often request patio installations for backyard entertaining. Preston Hollow properties typically involve larger-scale projects including stamped concrete driveways and expansive outdoor living areas. North Dallas and East Dallas neighborhoods keep us busy with a mix of driveway replacements, foundation work, and commercial projects.",
    faqs: [
      { question: 'What areas of Dallas do you serve?', answer: 'We serve all Dallas neighborhoods including Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, East Dallas, Uptown, Deep Ellum, and surrounding areas.' },
      { question: 'Do you handle permits for concrete work in Dallas?', answer: 'We assist with permitting requirements for concrete work in the City of Dallas. Permit needs vary by project type and scope.' },
      { question: 'How does Dallas soil affect concrete installations?', answer: 'Dallas sits on expansive clay soil that swells when wet and shrinks when dry. We account for this with proper base preparation, appropriate thickness, and correct joint spacing.' },
      { question: 'Can I get a free concrete estimate in Dallas?', answer: 'Yes. We provide free on-site estimates for all residential and commercial concrete projects in Dallas. Call 214-239-0709 to schedule.' },
    ],
  },
  irving: {
    extendedIntro: 'The Las Colinas urban center, Toyota Music Factory area, and neighborhoods around Lake Carolyn represent active construction areas in the DFW metro. We work with Irving homeowners on driveway replacements and patio installations, and handle commercial concrete along the SH-114 corridor.',
    neighborhoodContent: 'Valley Ranch residents commonly request driveway and patio work for established homes. Las Colinas properties often involve commercial or upscale residential projects. North Irving and South Irving have a strong mix of driveway replacements and patio installations. West Irving sees consistent demand for residential and light commercial concrete.',
    faqs: [
      { question: 'Do you serve all of Irving, TX?', answer: 'Yes. We serve all Irving neighborhoods including Las Colinas, Valley Ranch, North Irving, South Irving, and West Irving.' },
      { question: 'How far is Irving from your base of operations?', answer: 'Irving is adjacent to Dallas and is one of our most active service areas with competitive pricing and quick response times.' },
      { question: 'Do you do commercial concrete work in Irving?', answer: "Yes. Irving's commercial corridors around Las Colinas and SH-114 are active markets for our commercial concrete services." },
      { question: 'What is the most popular concrete service in Irving?', answer: 'Driveway replacement and patio installation are our most requested services in Irving.' },
    ],
  },
  garland: {
    extendedIntro: "From neighborhoods near Spring Creek Forest Preserve to newer developments near Lake Ray Hubbard and Firewheel Town Center, Garland offers diverse concrete project types. The city's large inventory of homes from the 1970s-1990s creates steady demand for replacement work.",
    neighborhoodContent: 'North Garland near Firewheel sees driveway replacements and patio projects. South Garland older subdivisions need full driveway replacements and walkway repairs. Duck Creek and Lake Ray Hubbard areas are popular for patio and outdoor living projects.',
    faqs: [
      { question: 'Do you serve all Garland neighborhoods?', answer: 'Yes. We work throughout Garland including North Garland, South Garland, Duck Creek, Firewheel, and Lake Ray Hubbard area.' },
      { question: 'My Garland home was built in the 1980s. Is it time to replace the driveway?', answer: 'Concrete driveways typically last 25-30 years. If showing significant cracking, settling, or deterioration, it is likely time for replacement.' },
      { question: 'What concrete services are most common in Garland?', answer: 'Driveway replacement is our top service, followed by patio installations and walkway repairs.' },
      { question: 'How do I get a concrete estimate in Garland?', answer: 'Call 214-239-0709 or submit a request through our contact page for a free on-site visit.' },
    ],
  },
  'grand-prairie': {
    extendedIntro: 'The neighborhoods around Epic Waters Indoor Waterpark and Joe Pool Lake are among our busiest in Grand Prairie. The Lone Star Park area and surrounding commercial districts also generate demand for commercial concrete work.',
    neighborhoodContent: 'South Grand Prairie homeowners request patio and driveway work near Joe Pool Lake. North Grand Prairie sees residential and commercial projects. Lynn Creek is popular for outdoor living concrete. Dalworth Park provides steady driveway replacement and walkway work.',
    faqs: [
      { question: 'Do you service Grand Prairie, TX?', answer: 'Yes. We handle residential and commercial concrete projects throughout the city.' },
      { question: 'What types of concrete projects do you do in Grand Prairie?', answer: 'Driveways, patios, walkways, foundations, retaining walls, stamped concrete, and commercial flatwork.' },
      { question: 'Is Grand Prairie in your standard service area?', answer: 'Yes. No additional travel charges for Grand Prairie projects.' },
      { question: 'Can I get a free estimate in Grand Prairie?', answer: 'Absolutely. Call 214-239-0709 or fill out our online contact form.' },
    ],
  },
  mesquite: {
    extendedIntro: "Areas near the Mesquite Rodeo, Town East Mall, and Mesquite Golf Club are within our range. Mesquite's housing stock from the 1970s-1990s creates consistent demand for concrete replacement projects.",
    neighborhoodContent: 'North Mesquite homeowners call for driveway replacements and patio installations. South Mesquite and Sunnyvale-adjacent areas see similar demand. The Mesquite Industrial District along I-635 provides commercial opportunities including parking lots and sidewalks.',
    faqs: [
      { question: 'Do you work in Mesquite, TX?', answer: 'Yes. Mesquite is part of our regular service area in East Dallas County.' },
      { question: 'My Mesquite driveway has large cracks. Can it be repaired?', answer: 'Large structural cracks usually mean replacement is the better investment. We will assess and give an honest recommendation.' },
      { question: 'What is the most common concrete project in Mesquite?', answer: 'Driveway replacement is number one. Many homes are 30-50 years old with aging original driveways.' },
      { question: 'How do I schedule a concrete estimate in Mesquite?', answer: 'Call 214-239-0709 or use our online contact form for a free on-site visit.' },
    ],
  },
  plano: {
    extendedIntro: "From corporate campuses around Legacy West to residential neighborhoods near Arbor Hills Nature Preserve, Plano demands high-quality concrete work. The mix of high-value homes and commercial properties means we bring equal attention to detail to every project.",
    neighborhoodContent: 'West Plano homeowners request stamped concrete patios and decorative driveways. East Plano sees driveway replacements and standard patio installations. Legacy and Haggard Estates combine residential and commercial needs. Russell Creek neighborhoods request walkway and patio projects.',
    faqs: [
      { question: 'Do you serve Plano, TX?', answer: 'Yes. We work throughout West Plano, East Plano, Legacy, Haggard Estates, and Russell Creek.' },
      { question: 'What decorative concrete options are popular in Plano?', answer: 'Stamped concrete is very popular, especially ashlar slate and flagstone patterns with earth-tone colors.' },
      { question: 'Do you handle commercial concrete in Plano?', answer: 'Yes. We work on parking lots, sidewalks, curbing, and other commercial projects throughout Plano.' },
      { question: 'How do I get a concrete estimate in Plano?', answer: 'Call 214-239-0709 or submit a request through our contact page for a free on-site estimate.' },
    ],
  },
  frisco: {
    extendedIntro: 'With PGA Frisco, Frisco Square, and expansion around Toyota Stadium and The Star District, Frisco is one of the fastest-growing concrete markets in DFW. New construction and early replacement work in older neighborhoods both keep us busy.',
    neighborhoodContent: 'Stonebriar and Starwood homeowners invest in decorative concrete. Eldorado and Lebanon Road Corridor see new construction and replacement projects. The Star District generates commercial concrete work for growing businesses.',
    faqs: [
      { question: 'Do you work with new construction in Frisco?', answer: 'Yes. We work with builders and homeowners on new construction driveways, patios, walkways, and foundations.' },
      { question: 'What Frisco neighborhoods do you serve?', answer: 'All neighborhoods including Stonebriar, Eldorado, Starwood, Lebanon Road Corridor, and The Star District.' },
      { question: 'Is stamped concrete popular in Frisco?', answer: 'Very popular for patios and pool decks. Ashlar slate and modern geometric patterns are common choices.' },
      { question: 'How do I get a concrete estimate in Frisco?', answer: 'Call 214-239-0709 or fill out our contact form for a free estimate.' },
    ],
  },
  mckinney: {
    extendedIntro: "Historic Downtown McKinney, Erwin Park trails, and master-planned communities like Craig Ranch and Stonebridge Ranch all fall within our service area. The mix of historic and new development creates diverse concrete needs.",
    neighborhoodContent: "Historic Downtown properties need walkway and patio work respecting the area's character. Craig Ranch and Stonebridge Ranch residents request patio and driveway work. Tucker Hill and Adriatica feature distinctive architecture that pairs well with decorative stamped concrete.",
    faqs: [
      { question: 'Do you serve McKinney, TX?', answer: 'Yes. McKinney is part of our regular service area in Collin County for both residential and commercial projects.' },
      { question: 'Can you work on concrete near historic McKinney properties?', answer: 'Yes. We have experience with concrete work in and around Historic Downtown McKinney.' },
      { question: 'What McKinney neighborhoods do you work in?', answer: 'All neighborhoods including Historic Downtown, Craig Ranch, Stonebridge Ranch, Tucker Hill, and Adriatica.' },
      { question: 'How do I schedule an estimate in McKinney?', answer: 'Call 214-239-0709 or submit a request online for a free visit to your McKinney property.' },
    ],
  },
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) notFound()

  const details = cityDetails[params.slug]
  if (!details) notFound()

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/#service-areas' },
    { name: `${city.name}, TX`, href: `/service-areas/${city.slug}` },
  ]

  return (
    <>
      <LocalBusinessSchema city={city.name} />

      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{city.headline}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{city.subhead}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gray leading-relaxed mb-4">{city.intro}</p>
          <p className="text-brand-gray leading-relaxed">{details.extendedIntro}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Services We Offer in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/${city.slug}`} className="flex items-center justify-between bg-white border border-brand-gray-mid/30 rounded-lg p-4 hover:border-brand-orange transition-colors group">
                <span className="font-medium text-brand-charcoal">{s.name} in {city.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Concrete Work in {city.name} Neighborhoods</h2>
          <p className="text-brand-gray leading-relaxed">{details.neighborhoodContent}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Questions About Our {city.name} Concrete Services</h2>
          <FaqAccordion faqs={details.faqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

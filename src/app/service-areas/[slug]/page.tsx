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
    extendedIntro: "Whether you live near White Rock Lake and need a new patio for lakeside entertaining, or you're updating the driveway at a Deep Ellum property, we know the soil conditions and permitting requirements across Dallas. The Bishop Arts District, Uptown, and the surrounding neighborhoods all present unique site conditions that we handle daily.",
    neighborhoodContent: "In Oak Cliff, we frequently replace aging driveways and install new walkways for the area's character homes. Lake Highlands homeowners often request patio installations for backyard entertaining. Preston Hollow properties typically involve larger-scale projects including stamped concrete driveways and expansive outdoor living areas. North Dallas and East Dallas neighborhoods keep us busy with a mix of driveway replacements, foundation work, and commercial projects.",
    faqs: [
      { question: 'What areas of Dallas do you serve?', answer: "We serve all Dallas neighborhoods including Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, East Dallas, Uptown, Deep Ellum, and surrounding areas." },
      { question: 'Do you handle permits for concrete work in Dallas?', answer: 'We assist with permitting requirements for concrete work in the City of Dallas. Permit requirements vary by project type and scope — we will advise you on what is needed.' },
      { question: 'How does Dallas soil affect concrete installations?', answer: 'Dallas sits on expansive clay soil that swells when wet and shrinks when dry. We account for this in every installation with proper base preparation, appropriate thickness, and correct joint spacing.' },
      { question: 'Can I get a free concrete estimate in Dallas?', answer: 'Yes. We provide free on-site estimates for all residential and commercial concrete projects in Dallas. Call 214-239-0709 or fill out our contact form to schedule yours.' },
    ],
  },
  irving: {
    extendedIntro: 'The Las Colinas urban center, Toyota Music Factory area, and neighborhoods around Lake Carolyn represent some of the most active commercial and residential construction areas in the DFW metro. We work with Irving homeowners on everything from driveway replacements to backyard patio installations, and we handle commercial concrete for businesses along the SH-114 corridor.',
    neighborhoodContent: 'Valley Ranch residents commonly request driveway and patio work for their established suburban homes. Las Colinas properties often involve commercial concrete or upscale residential projects. North Irving and South Irving neighborhoods have a strong mix of driveway replacements and new patio installations. West Irving sees consistent demand for both residential and light commercial concrete work.',
    faqs: [
      { question: 'Do you serve all of Irving, TX?', answer: 'Yes. We serve all Irving neighborhoods including Las Colinas, Valley Ranch, North Irving, South Irving, and West Irving.' },
      { question: 'How far is Irving from your base of operations?', answer: 'Irving is adjacent to Dallas and is one of our most active service areas. Travel time is minimal, which means competitive pricing and quick response times.' },
      { question: 'Do you do commercial concrete work in Irving?', answer: "Yes. Irving's commercial corridors, especially around Las Colinas and the SH-114 area, are active markets for our commercial concrete services." },
      { question: 'What is the most popular concrete service in Irving?', answer: 'Driveway replacement and patio installation are our most requested services in Irving.' },
    ],
  },
  garland: {
    extendedIntro: "From the established neighborhoods near Spring Creek Forest Preserve to the newer developments near Lake Ray Hubbard and the shopping areas around Firewheel Town Center, Garland offers a diverse mix of concrete project types. The city's large inventory of homes built from the 1970s through 1990s creates steady demand for driveway and patio replacement work.",
    neighborhoodContent: 'North Garland neighborhoods near Firewheel see a good mix of driveway replacements and new patio projects. South Garland older subdivisions frequently need full driveway replacements and walkway repairs. The Duck Creek area and neighborhoods near Lake Ray Hubbard are popular for patio and outdoor living projects.',
    faqs: [
      { question: 'Do you serve all Garland neighborhoods?', answer: 'Yes. We work throughout Garland including North Garland, South Garland, Duck Creek, Firewheel, and the Lake Ray Hubbard area.' },
      { question: 'My Garland home was built in the 1980s. Is it time to replace the driveway?', answer: 'Concrete driveways typically last 25-30 years with good maintenance. If your driveway is showing significant cracking, settling, or surface deterioration, it is likely time for a replacement.' },
      { question: 'What concrete services are most common in Garland?', answer: 'Driveway replacement is our top service in Garland, followed by patio installations and walkway repairs.' },
      { question: 'How do I get a concrete estimate in Garland?', answer: 'Call us at 214-239-0709 or submit a request through our contact page. We will schedule a free on-site visit.' },
    ],
  },
  'grand-prairie': {
    extendedIntro: 'The neighborhoods around Epic Waters Indoor Waterpark and Joe Pool Lake are among our busiest areas in Grand Prairie, with homeowners investing in outdoor living improvements like concrete patios and extended driveways. The Lone Star Park area and surrounding commercial districts also generate steady demand for commercial concrete work.',
    neighborhoodContent: 'South Grand Prairie homeowners frequently request patio installations and driveway work for properties near Joe Pool Lake. North Grand Prairie sees a mix of residential and commercial projects. The Lynn Creek area is popular for outdoor living concrete work. Dalworth Park and surrounding neighborhoods provide a steady stream of driveway replacement and walkway projects.',
    faqs: [
      { question: 'Do you service Grand Prairie, TX?', answer: 'Yes. Grand Prairie is a regular service area for us. We handle residential and commercial concrete projects throughout the city.' },
      { question: 'What types of concrete projects do you do in Grand Prairie?', answer: 'We handle the full range — driveways, patios, walkways, foundations, retaining walls, stamped concrete, and commercial flatwork.' },
      { question: 'Is Grand Prairie in your standard service area?', answer: 'Yes. Grand Prairie is centrally located in the DFW metro and is well within our standard service area. There are no additional travel charges.' },
      { question: 'Can I get a free estimate for concrete work in Grand Prairie?', answer: 'Absolutely. Call 214-239-0709 or fill out our online contact form to schedule a free on-site estimate.' },
    ],
  },
  mesquite: {
    extendedIntro: "The areas near the Mesquite Rodeo, Town East Mall, and Mesquite Golf Club are all well within our service range. Mesquite's large housing stock from the 1970s through 1990s creates a consistent pipeline of concrete replacement projects.",
    neighborhoodContent: 'North Mesquite homeowners often call us for driveway replacements and new patio installations in established neighborhoods. South Mesquite and the areas adjacent to Sunnyvale see similar demand for residential concrete. The Mesquite Industrial District along I-635 provides commercial concrete opportunities including parking lots and sidewalk installations.',
    faqs: [
      { question: 'Do you work in Mesquite, TX?', answer: 'Yes. Mesquite is part of our regular service area in East Dallas County. We handle both residential and commercial concrete projects throughout the city.' },
      { question: 'My Mesquite driveway has large cracks. Can it be repaired?', answer: 'It depends on the extent of the damage. Large structural cracks, settling, or widespread deterioration usually mean replacement is the better investment. We will assess and give you an honest recommendation.' },
      { question: 'What is the most common concrete project in Mesquite?', answer: 'Driveway replacement is our number one service in Mesquite. Many homes in the area were built 30-50 years ago, and the original driveways are showing their age.' },
      { question: 'How do I schedule a concrete estimate in Mesquite?', answer: 'Call us at 214-239-0709 or use our online contact form. We will set up a free on-site visit at a time that works for you.' },
    ],
  },
  plano: {
    extendedIntro: "From the corporate campuses around Legacy West and The Shops at Legacy to the residential neighborhoods near Arbor Hills Nature Preserve, Plano demands high-quality concrete work. The city's mix of high-value homes and major commercial properties means we bring the same attention to detail to every project.",
    neighborhoodContent: 'West Plano homeowners often request stamped concrete patios and decorative driveway work for upscale properties. East Plano sees strong demand for driveway replacements and standard patio installations. The Legacy and Haggard Estates areas combine residential and commercial concrete needs. Russell Creek neighborhoods request a mix of walkway improvements and patio projects.',
    faqs: [
      { question: 'Do you serve Plano, TX?', answer: 'Yes. Plano is one of our most active service areas. We work throughout the city including West Plano, East Plano, Legacy, Haggard Estates, and Russell Creek.' },
      { question: 'What decorative concrete options are popular in Plano?', answer: 'Stamped concrete is very popular in Plano, particularly for patios and driveways in West Plano. Ashlar slate and flagstone patterns with earth-tone colors are the most requested designs.' },
      { question: 'Do you handle commercial concrete in Plano?', answer: 'Yes. We work with businesses and property managers throughout Plano on parking lots, sidewalks, curbing, and other commercial concrete projects.' },
      { question: 'How do I get a concrete estimate in Plano?', answer: 'Call 214-239-0709 or submit a request through our contact page. We provide free on-site estimates for all Plano projects.' },
    ],
  },
  frisco: {
    extendedIntro: 'With developments like PGA Frisco, Frisco Square, and the ongoing expansion around Toyota Stadium and The Star District, Frisco is one of the fastest-growing concrete markets in the DFW area. New construction creates demand for initial concrete installations, while neighborhoods built 10-15 years ago are starting to see replacement needs.',
    neighborhoodContent: 'Stonebriar and Starwood homeowners often invest in decorative concrete including stamped patios and custom driveways. Eldorado and the Lebanon Road Corridor see a mix of new construction concrete and replacement projects. The Star District area generates commercial concrete work for businesses serving the growing Frisco population.',
    faqs: [
      { question: 'Do you work with new construction in Frisco?', answer: "Yes. We work with builders and homeowners on new construction concrete including driveways, patios, walkways, and foundations." },
      { question: 'What Frisco neighborhoods do you serve?', answer: 'We serve all Frisco neighborhoods including Stonebriar, Eldorado, Starwood, the Lebanon Road Corridor, The Star District, and all new and established developments.' },
      { question: 'Is stamped concrete popular in Frisco?', answer: 'Very popular. Frisco homeowners frequently choose stamped concrete for patios and pool decks. Ashlar slate and modern geometric stamp patterns are common choices.' },
      { question: 'How do I get a concrete estimate in Frisco?', answer: 'Call us at 214-239-0709 or fill out our contact form. We provide free estimates for all concrete projects in Frisco.' },
    ],
  },
  mckinney: {
    extendedIntro: "Historic Downtown McKinney, the trails around Erwin Park, and the master-planned communities like Craig Ranch and Stonebridge Ranch all fall within our McKinney service area. The city's mix of historic properties and new development creates diverse concrete needs.",
    neighborhoodContent: "Historic Downtown McKinney properties sometimes need walkway and patio work that respects the area's character while meeting modern standards. Craig Ranch and Stonebridge Ranch residents frequently request patio installations and driveway work. Tucker Hill and Adriatica neighborhoods feature distinctive architecture that pairs well with decorative stamped concrete.",
    faqs: [
      { question: 'Do you serve McKinney, TX?', answer: 'Yes. McKinney is part of our regular service area in Collin County. We handle both residential and commercial concrete projects throughout the city.' },
      { question: 'Can you work on concrete near historic McKinney properties?', answer: 'Yes. We have experience with concrete work in and around Historic Downtown McKinney. We understand the importance of matching the character of the area.' },
      { question: 'What McKinney neighborhoods do you work in?', answer: 'We serve all McKinney neighborhoods including Historic Downtown, Craig Ranch, Stonebridge Ranch, Tucker Hill, Adriatica, and all developing areas.' },
      { question: 'How do I schedule an estimate in McKinney?', answer: 'Call 214-239-0709 or submit a request online. We will schedule a free visit to your McKinney property.' },
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Concrete Services in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center justify-between bg-white border border-brand-gray-mid/30 rounded-lg p-4 hover:border-brand-orange transition-colors group">
                <span className="font-medium text-brand-charcoal">{s.name}</span>
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

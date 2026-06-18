import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import FaqAccordion from '@/components/ui/FaqAccordion'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CtaSection from '@/components/sections/CtaSection'
import { CheckCircle, ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `${site.baseUrl}/services/${service.slug}`,
  })
}

const serviceContent: Record<string, {
  overview: string[]
  benefits: { title: string; description: string }[]
  process: { step: string; description: string }[]
  faqs: { question: string; answer: string }[]
}> = {
  'concrete-driveways': {
    overview: [
      'A concrete driveway is one of the most visible and heavily used features of any residential property. It supports the weight of multiple vehicles daily, handles constant thermal cycling from the North Texas sun, and serves as the first impression of your home. A properly installed concrete driveway provides decades of reliable performance with minimal maintenance.',
      'At Dallas Concrete Solutions, we install driveways with proper base preparation, appropriate thickness for vehicle loads, and control joints placed to manage cracking. We pay close attention to the apron transition where the driveway meets the street, ensuring a smooth grade change that protects both the concrete and your vehicles. Every driveway we pour is finished to a consistent texture and properly cured to maximize strength.',
    ],
    benefits: [
      { title: 'Vehicle-Grade Durability', description: 'Engineered thickness and reinforcement designed to support cars, trucks, and trailers without cracking or settling.' },
      { title: 'Crack-Controlled Joints', description: 'Strategic control joint placement directs any natural cracking to predetermined lines, keeping your driveway looking clean.' },
      { title: 'Proper Apron Transitions', description: 'Smooth grade transitions between the street and driveway protect your vehicles and ensure proper water drainage.' },
      { title: 'Heat-Resistant Finishing', description: 'Curing methods and finish techniques selected for North Texas summers to prevent surface scaling and premature wear.' },
    ],
    process: [
      { step: 'Site Assessment & Preparation', description: 'We evaluate soil conditions, remove existing materials, and compact a proper aggregate base to prevent settling.' },
      { step: 'Forming & Reinforcement', description: 'We set forms to the correct grade and install rebar or fiber reinforcement based on the load requirements.' },
      { step: 'Pour & Finish', description: 'Concrete is poured to consistent thickness, finished to a uniform texture, and control joints are cut at proper intervals.' },
      { step: 'Curing & Cleanup', description: 'We apply curing compound to protect the surface during the critical early curing period and clean up the site completely.' },
    ],
    faqs: [
      { question: 'How thick should a concrete driveway be in Dallas?', answer: 'Most residential driveways in Dallas should be 4 inches thick with a compacted aggregate base. For heavier vehicles like RVs or work trucks, we recommend 5-6 inches with rebar reinforcement.' },
      { question: 'How long before I can drive on a new concrete driveway?', answer: 'We recommend waiting at least 7 days before driving passenger vehicles on new concrete and 14 days for heavier trucks or trailers. Full cure takes 28 days.' },
      { question: 'Can you replace just part of a driveway?', answer: 'Yes, we can remove and replace damaged sections. However, partial replacements will show a visible joint between old and new concrete. We will advise you on whether a full replacement provides better long-term value.' },
      { question: 'Do concrete driveways crack in Texas heat?', answer: 'Properly installed concrete with correct joint spacing, adequate thickness, and good curing practices handles Texas heat well. Control joints direct any natural movement to predetermined lines, keeping cracks controlled and cosmetically minimal.' },
    ],
  },
  'concrete-patios': {
    overview: [
      'Outdoor living is central to the Texas lifestyle, and a well-built concrete patio is the foundation of a functional backyard space. Whether you need a simple slab for a grill area or an expansive entertaining surface with decorative finishes, concrete is the most durable and cost-effective material for North Texas patios.',
      'We design and install patios with proper drainage slope to move water away from your foundation, expansion joints that accommodate the significant thermal movement caused by Dallas summers, and finish options ranging from broom-finish to exposed aggregate. Shade considerations, furniture layout, and connection to existing structures are all part of our planning process.',
    ],
    benefits: [
      { title: 'Drainage Engineering', description: "Proper slope and grading directs water away from your home's foundation, preventing pooling and moisture issues." },
      { title: 'Thermal Expansion Control', description: 'Expansion joints and isolation joints accommodate the significant concrete movement caused by 100°F+ summer temperatures.' },
      { title: 'Versatile Finish Options', description: 'Choose from broom finish, exposed aggregate, stamped patterns, or colored concrete to match your outdoor living vision.' },
      { title: 'Outdoor Living Integration', description: 'We plan patios around shade structures, outdoor kitchens, fire pits, and furniture layouts for maximum usability.' },
    ],
    process: [
      { step: 'Design & Layout', description: 'We work with you on size, shape, finish selection, and connection points to your home and landscape.' },
      { step: 'Grade & Base Preparation', description: 'Proper grading ensures drainage away from structures, and a compacted base prevents settling and cracking.' },
      { step: 'Pour & Finish', description: 'Concrete is placed to the designed thickness with your selected finish applied while the surface is workable.' },
      { step: 'Joint Cutting & Curing', description: 'Expansion and control joints are placed to manage thermal movement, and curing compound protects the finish.' },
    ],
    faqs: [
      { question: 'What is the best concrete finish for a patio in Dallas?', answer: 'Broom finish is the most popular and cost-effective option, providing good slip resistance. Stamped concrete offers a decorative look, while exposed aggregate adds texture and visual interest. We will help you choose based on your usage and budget.' },
      { question: 'How do you handle drainage on a patio?', answer: "Every patio we install has a minimum slope of 1/8 inch per foot away from your home's foundation. For covered patios, we also plan drainage paths for water coming off the roof line." },
      { question: 'Can you build a patio next to an existing structure?', answer: 'Yes. We use isolation joints between the patio and any existing structure like your house foundation or a retaining wall. This allows each structure to move independently without causing damage.' },
      { question: 'How long does a concrete patio installation take?', answer: 'Most residential patios take 2-4 days depending on size and complexity. This includes demolition of any existing surface, base preparation, forming, pouring, and finishing. Decorative finishes may add a day.' },
    ],
  },
  'concrete-walkways': {
    overview: [
      'Concrete walkways serve a dual purpose: they provide safe, accessible paths across your property and they contribute significantly to curb appeal. A well-designed walkway guides visitors from the curb to your front door, connects outdoor living areas, and creates defined paths through landscaping.',
      'Dallas Concrete Solutions installs walkways with slip-resistant finishes, proper grading for accessibility, and smooth transitions at driveways, patios, and doorways. For commercial properties, we ensure compliance with ADA accessibility standards including proper width, cross-slope, and detectable warning surfaces where required.',
    ],
    benefits: [
      { title: 'Slip-Resistant Surfaces', description: 'Broom finish and textured options provide safe footing in wet conditions, reducing slip-and-fall risk on your property.' },
      { title: 'ADA-Compliant Design', description: 'Commercial and public walkways meet ADA requirements for width, slope, cross-slope, and detectable warning surfaces.' },
      { title: 'Trip Hazard Prevention', description: 'Proper base preparation and joint design prevents the settling and heaving that creates dangerous uneven surfaces over time.' },
      { title: 'Curb-to-Door Flow', description: 'Thoughtful layout creates a natural, welcoming path from the street to your entry, enhancing both function and property value.' },
    ],
    process: [
      { step: 'Layout & Grading Plan', description: 'We establish the path, width, and grade to ensure proper drainage and accessibility from end to end.' },
      { step: 'Excavation & Base Work', description: 'The path is excavated to depth and a compacted aggregate base is installed to prevent settling and heaving.' },
      { step: 'Forming & Pouring', description: 'Forms are set to the designed width and grade, and concrete is poured and finished with a slip-resistant texture.' },
      { step: 'Finishing & Cleanup', description: 'Joints are cut, edges are tooled for a clean look, and the site is cleaned up completely.' },
    ],
    faqs: [
      { question: 'How wide should a residential walkway be?', answer: 'We recommend a minimum of 3 feet for side walkways and 4 feet for front entry walkways. For properties with wheelchair or mobility access needs, 4-5 feet is standard to meet accessibility guidelines.' },
      { question: 'Can you match a walkway to an existing patio or driveway?', answer: 'We can match the color and finish of new walkways to existing concrete, though there will always be some variation due to aging and weathering of the original surface.' },
      { question: 'How do you prevent walkway concrete from heaving?', answer: 'Proper base preparation is the key. We excavate to sufficient depth, install and compact aggregate base material, and use control joints at regular intervals. This addresses the root causes of heaving in North Texas expansive clay soils.' },
      { question: 'Do you install walkways for commercial properties?', answer: 'Yes. We install commercial walkways that meet ADA requirements and local building codes, including proper width, slope, cross-slope, detectable warning surfaces at curb ramps, and appropriate joint spacing.' },
    ],
  },
  'concrete-foundations': {
    overview: [
      'The foundation is the most critical structural element of any building, and North Texas presents unique challenges for foundation work. The expansive clay soils common throughout the Dallas metro area absorb water and swell, then shrink during dry periods, creating cycles of movement that can crack and damage improperly designed foundations.',
      'Dallas Concrete Solutions installs residential and commercial foundations engineered for local soil conditions. We work with structural engineers and geotechnical reports to determine the right foundation type — whether that is a post-tension slab, conventional reinforced slab, or pier and beam system. Proper drainage planning around the foundation is included in every project.',
    ],
    benefits: [
      { title: 'Engineered for Clay Soil', description: 'Foundation designs account for the expansive clay soils found throughout Dallas, reducing the risk of movement-related cracking and structural issues.' },
      { title: 'Multiple Foundation Types', description: "We install post-tension slabs, conventional reinforced slabs, and pier and beam foundations based on your site's specific requirements." },
      { title: 'Drainage Integration', description: 'Proper drainage planning around the foundation helps manage soil moisture and reduces long-term movement.' },
      { title: 'Code-Compliant Construction', description: 'Every foundation meets local building codes and structural engineering specifications, with inspections at each required stage.' },
    ],
    process: [
      { step: 'Site Evaluation & Engineering', description: 'Soil testing and structural engineering determine the right foundation type, depth, and reinforcement for your site.' },
      { step: 'Excavation & Plumbing', description: 'The site is excavated to the designed depth, and underground plumbing is installed before the pour.' },
      { step: 'Reinforcement & Pour', description: 'Steel reinforcement or post-tension cables are placed per engineering specs, and concrete is poured and consolidated.' },
      { step: 'Curing & Inspection', description: 'The foundation cures under controlled conditions, and all required inspections are completed before construction proceeds.' },
    ],
    faqs: [
      { question: 'What type of foundation is best for Dallas soil?', answer: 'Post-tension slab foundations are the most common choice for new construction in the Dallas area because they handle the movement of expansive clay soils better than conventional foundations.' },
      { question: 'How does clay soil affect foundations in North Texas?', answer: 'Expansive clay absorbs water and swells, then dries and contracts. This cycle creates movement that can crack and shift foundations over time. Proper foundation design, drainage, and soil moisture management minimize these effects.' },
      { question: 'Do you do foundation repair?', answer: 'We focus on new foundation installation. For foundation repair on existing structures, we can recommend trusted specialists in the Dallas area who handle pier installation and leveling work.' },
      { question: 'How long does a foundation pour take?', answer: 'A typical residential foundation pour takes 1-2 days for the actual concrete placement. The full process including excavation, plumbing, reinforcement, and curing spans 2-3 weeks.' },
    ],
  },
  'retaining-walls': {
    overview: [
      'Retaining walls serve both structural and aesthetic purposes on properties with grade changes, drainage challenges, or erosion issues. A properly engineered retaining wall holds back soil, redirects water flow, and creates usable flat areas on sloped lots.',
      'Dallas Concrete Solutions builds concrete retaining walls designed to handle the lateral soil pressure specific to your site. We account for soil type, wall height, drainage requirements, and surcharge loads in every design. Drainage behind the wall is critical — we install gravel backfill and weep holes or drain tile to prevent hydrostatic pressure buildup that causes wall failure.',
    ],
    benefits: [
      { title: 'Engineered for Soil Pressure', description: 'Wall design accounts for lateral soil pressure, surcharge loads, and the specific soil conditions at your property.' },
      { title: 'Integrated Drainage', description: 'Gravel backfill, filter fabric, and drain systems behind the wall prevent hydrostatic pressure buildup that causes failure.' },
      { title: 'Tiered Wall Options', description: 'For larger grade changes, tiered walls distribute pressure across multiple levels, providing a safer and more attractive solution.' },
      { title: 'Erosion Control', description: "Retaining walls stop soil erosion, protect landscaping, and prevent grading issues from affecting your foundation." },
    ],
    process: [
      { step: 'Site Assessment', description: 'We evaluate the grade change, soil conditions, drainage patterns, and any structures that the wall will protect or interact with.' },
      { step: 'Design & Engineering', description: 'Wall height, thickness, reinforcement, and drainage systems are designed based on site-specific pressure calculations.' },
      { step: 'Excavation & Footer', description: 'A reinforced concrete footer is poured below grade to anchor the wall and distribute loads to stable soil.' },
      { step: 'Wall Construction & Backfill', description: 'The wall is built to design height, drainage is installed behind it, and backfill is placed in compacted lifts.' },
    ],
    faqs: [
      { question: 'How tall can a concrete retaining wall be?', answer: 'Walls up to 4 feet can often be built with standard designs. Walls taller than 4 feet typically require engineered plans with a stamped structural drawing.' },
      { question: 'What causes retaining walls to fail?', answer: 'The most common cause is inadequate drainage behind the wall. Water builds up hydrostatic pressure that pushes the wall forward. Proper drainage systems, gravel backfill, and weep holes prevent this.' },
      { question: 'Is a tiered retaining wall better than a single tall wall?', answer: 'For grade changes over 4-5 feet, tiered walls are often a better choice. They distribute soil pressure across two or more walls, require less engineering, and are typically more attractive.' },
      { question: 'Do retaining walls need a footer?', answer: 'Yes. A reinforced concrete footer below grade is essential for wall stability. The footer width and depth depend on the wall height and soil conditions.' },
    ],
  },
  'stamped-concrete': {
    overview: [
      'Stamped concrete delivers the appearance of natural stone, brick, or slate at a fraction of the cost, with the durability and low maintenance of standard concrete. It is one of the most popular decorative concrete options for Dallas homeowners, used on patios, driveways, walkways, and pool decks.',
      'Dallas Concrete Solutions offers a range of stamp patterns including ashlar slate, cobblestone, flagstone, and wood plank designs. We use integral color, color hardeners, and release agents to create realistic, multi-toned finishes. Every stamped concrete project includes a high-quality sealer that protects the color from UV fading in the intense Texas sun.',
    ],
    benefits: [
      { title: 'Premium Pattern Options', description: "Choose from ashlar slate, cobblestone, flagstone, brick, and wood plank patterns to match your home's architecture." },
      { title: 'Color Hardener Durability', description: 'Color hardeners create a denser, stronger surface layer with richer color than integral color alone, improving long-term wear resistance.' },
      { title: 'UV-Stable Sealing', description: 'Professional-grade sealers protect against UV fading in the Texas sun and make surfaces easier to clean and maintain.' },
      { title: 'Cost-Effective Elegance', description: 'Achieve the look of natural stone, brick, or slate at 30-50% less cost, with lower maintenance requirements over time.' },
    ],
    process: [
      { step: 'Design & Color Selection', description: 'We help you choose the right stamp pattern and color combination to complement your home and landscape.' },
      { step: 'Base Preparation & Pour', description: 'A properly prepared base and correct concrete thickness ensure the stamped surface will not crack or settle.' },
      { step: 'Coloring & Stamping', description: 'Color hardener and release agent are applied, then stamp mats are pressed into the fresh concrete to create the pattern.' },
      { step: 'Sealing & Protection', description: 'After curing, a UV-resistant sealer is applied to lock in color, add sheen, and protect the surface from wear and staining.' },
    ],
    faqs: [
      { question: 'How long does stamped concrete last in Dallas?', answer: 'Properly installed and maintained stamped concrete lasts 25 years or more. The key to longevity is periodic resealing every 2-3 years to protect the color and surface from UV exposure and wear.' },
      { question: 'Is stamped concrete slippery when wet?', answer: 'The texture from the stamp pattern provides some traction, but sealed stamped concrete can be slippery when wet. For pool decks and slopes, we can add a non-slip additive to the sealer.' },
      { question: 'What is the best stamp pattern for a driveway?', answer: "Ashlar slate and cobblestone are the most popular driveway patterns because they complement most home styles and age well." },
      { question: 'How often does stamped concrete need to be resealed?', answer: 'In the Dallas area, we recommend resealing every 2-3 years. The intense Texas sun breaks down sealer faster than in cooler climates.' },
    ],
  },
  'commercial-concrete': {
    overview: [
      'Commercial concrete work demands a different level of planning, specification, and execution than residential projects. Parking lots, warehouse floors, loading docks, and commercial sidewalks must meet strict engineering standards, ADA accessibility requirements, and often need to be completed within tight timelines to minimize business disruption.',
      'Dallas Concrete Solutions handles commercial concrete projects across the Dallas metro, from small storefront sidewalks to large-scale parking lot pours. We coordinate with general contractors, property managers, and business owners to plan work around operating hours, manage traffic flow during construction, and deliver surfaces that meet heavy-duty load specifications and liability standards.',
    ],
    benefits: [
      { title: 'Heavy-Load Engineering', description: 'Commercial slabs are designed for vehicle traffic, forklift loads, and heavy equipment with appropriate thickness and reinforcement.' },
      { title: 'ADA Compliance', description: 'Parking lots, sidewalks, and ramps meet current ADA standards for accessibility, slope, and detectable warning surfaces.' },
      { title: 'Minimal Business Disruption', description: 'We plan phased pours and schedule work around your operating hours to keep your business running during construction.' },
      { title: 'Liability-Grade Surfaces', description: "Slip-resistant finishes, proper drainage, and code-compliant installations reduce your property's liability exposure." },
    ],
    process: [
      { step: 'Scope & Scheduling', description: 'We assess the full scope of work and create a phased schedule that minimizes impact on your business operations.' },
      { step: 'Engineering & Permits', description: 'Commercial projects are designed to engineering specifications and all required permits are obtained before work begins.' },
      { step: 'Phased Construction', description: 'Work is completed in planned phases, maintaining access for customers and tenants throughout the project.' },
      { step: 'Inspection & Handoff', description: 'All work passes required inspections, and we provide a complete walkthrough before final handoff.' },
    ],
    faqs: [
      { question: 'Can you work around our business hours?', answer: 'Yes. We regularly schedule commercial pours for early mornings, evenings, or weekends to minimize disruption to your business.' },
      { question: 'What thickness is required for a commercial parking lot?', answer: 'Commercial parking lots typically require 5-6 inches of concrete over a compacted aggregate base. Areas with heavy truck traffic may require 8 inches or more with additional reinforcement.' },
      { question: 'Do you handle ADA compliance for parking lots?', answer: 'Yes. We install ADA-compliant accessible parking spaces, curb ramps with detectable warning surfaces, and accessible routes that meet current federal and local requirements.' },
      { question: 'How long does a commercial concrete project take?', answer: 'Timeline depends on scope. A small storefront sidewalk may take 2-3 days, while a full parking lot project can span several weeks with phased pours.' },
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const content = serviceContent[params.slug]
  if (!content) notFound()

  const relatedServices = service.relatedSlugs
    .map((rs) => services.find((s) => s.slug === rs))
    .filter(Boolean)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: service.name, href: `/services/${service.slug}` },
  ]

  return (
    <>
      <ServiceSchema name={service.name} description={service.metaDescription} />

      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{service.headline}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{service.heroSubhead}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">What Are {service.name} in Dallas?</h2>
          {content.overview.map((p, i) => (
            <p key={i} className="text-brand-gray leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Benefits of {service.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 bg-white rounded-lg p-6">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-1">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">How We Install {service.name}</h2>
          <div className="space-y-6">
            {content.process.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-1">{step.step}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Common Questions</h2>
          <FaqAccordion faqs={content.faqs} />
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rs) => rs && (
                <Link key={rs.slug} href={`/services/${rs.slug}`} className="flex items-center justify-between bg-white border border-brand-gray-mid/30 rounded-lg p-4 hover:border-brand-orange transition-colors group">
                  <span className="font-medium text-brand-charcoal">{rs.name}</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gray leading-relaxed">
            We install {service.name.toLowerCase()} throughout Dallas, Irving, Plano, Frisco, McKinney, Garland, Grand Prairie, Mesquite, and surrounding cities. Contact us for a free estimate on your project.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

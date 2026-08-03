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
import Button from '@/components/ui/Button'
import { ArrowRight, Phone, Award, Briefcase } from 'lucide-react'

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

interface CaseStudy {
  title: string
  location: string
  challenge: string
  solution: string
  result: string
}

interface WhyReason {
  title: string
  description: string
}

interface Faq {
  question: string
  answer: string
}

const cityDetails: Record<string, {
  about: string[]
  caseStudies: CaseStudy[]
  whyNumberOne: WhyReason[]
  faqs: Faq[]
}> = {
  dallas: {
    about: [
      "Dallas is a city of contrasts when it comes to concrete work. In a single week we might pour a modern stamped patio behind a new build near Uptown, replace a cracked original driveway on a 1950s bungalow in Oak Cliff, and repair a heaved walkway in Old East Dallas. The city's housing stock spans nearly a century, and every era of construction brings its own quirks — from shallow, undersized original slabs to modern foundations that still have to fight the same soil.",
      "That soil is the real constant across Dallas. Most of the city sits on expansive clay that swells dramatically when it absorbs water and shrinks just as dramatically during the summer dry spells that follow. Neighborhoods near White Rock Lake and low-lying pockets of East Dallas see extra moisture cycling that accelerates this movement, while higher, better-drained areas of Preston Hollow and North Dallas still deal with seasonal shifting that cracks poorly-prepared concrete within a few years. We adjust base depth, rebar placement, and control joint spacing block by block rather than using one generic spec for the whole city.",
      "Professional installation matters more in Dallas than in most suburbs simply because of how varied the properties are. A driveway in Bishop Arts District has to account for narrow lots and mature tree roots; a commercial pad near Deep Ellum has to work around loading logistics and tight permitting timelines; a backyard patio in Lake Highlands has to handle runoff toward the lake without eroding the yard. We've built our process around reading each site correctly before the first yard of concrete is ordered.",
    ],
    caseStudies: [
      {
        title: 'Driveway Replacement in Oak Cliff',
        location: 'Oak Cliff, near the Bishop Arts District',
        challenge: 'A 1948 bungalow had a driveway with no rebar, a 3-inch pour depth, and severe cracking caused by a mature live oak whose roots had migrated under one edge of the slab.',
        solution: 'We removed the old slab and root-pruned along a boundary line set back from the new pour, installed a root barrier, and poured a 4-inch slab with rebar reinforcement and a properly compacted base.',
        result: 'The homeowner got a driveway rated to handle the root pressure for decades, with a design that protected the tree instead of removing it.',
      },
      {
        title: 'Backyard Patio Near White Rock Lake',
        location: 'Lake Highlands, close to White Rock Lake',
        challenge: 'Standing water was collecting against the back of the house after storms because the yard sloped toward the foundation, and the homeowner wanted an entertaining space that would fix the drainage rather than add to it.',
        solution: 'We designed a broom-finished patio with a slight grade change and integrated a channel drain tied into the existing yard drainage, directing water away from the foundation and toward the street.',
        result: 'The family now hosts lakeside gatherings on a dry, level patio, and the standing-water issue against the house has not returned through two full rainy seasons.',
      },
      {
        title: 'Commercial Sidewalk Near Deep Ellum',
        location: 'Deep Ellum, adjacent to Uptown Dallas',
        challenge: 'A retail property needed new ADA-compliant sidewalk sections replaced without shutting down customer access during business hours, and the City of Dallas permitting process required specific joint layouts.',
        solution: 'We sequenced the pour in sections overnight and on a Sunday, coordinated the permit documentation with the city inspector in advance, and matched control joints to the required ADA slope and layout specs.',
        result: 'The business never lost a full day of foot traffic, and the sidewalk passed city inspection on the first review.',
      },
    ],
    whyNumberOne: [
      { title: 'We Read Dallas Clay Soil Correctly', description: "Expansive clay behaves differently in Preston Hollow than it does near White Rock Lake. We adjust base prep and joint spacing to the specific soil conditions of the property, not a one-size-fits-all spec." },
      { title: 'Deep Familiarity With Every Dallas Neighborhood', description: "From historic Oak Cliff bungalows to new construction in North Dallas, we've worked on properties across every era of Dallas housing and know what each one needs." },
      { title: 'Fast Response From Our Addison Base', description: 'Being based just north of Dallas means quicker site visits, faster estimates, and shorter scheduling windows than contractors driving in from farther out.' },
      { title: 'Licensed, Insured, and City-Permit Ready', description: 'We handle City of Dallas permitting requirements directly so homeowners and commercial property managers do not have to navigate them alone.' },
      { title: 'A Portfolio Built Inside the City Limits', description: 'Our completed work spans Bishop Arts, Deep Ellum, Lake Highlands, and Preston Hollow — we can show you comparable projects near your own property.' },
    ],
    faqs: [
      { question: 'What areas of Dallas do you serve?', answer: 'We serve all Dallas neighborhoods including Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, East Dallas, Uptown, Deep Ellum, and the Bishop Arts District. If you are inside the Dallas city limits, we cover it.' },
      { question: 'Do you handle permits for concrete work in Dallas?', answer: 'Yes. We manage the City of Dallas permitting process for projects that require it, including documentation for driveway approaches and commercial sidewalk work. Requirements vary by project type and location.' },
      { question: 'How does Dallas clay soil affect my concrete?', answer: 'Expansive clay swells when wet and shrinks when dry, which can crack poorly-prepared concrete within a few years. We counter this with proper base compaction, correct slab thickness, and rebar or joint spacing suited to the site.' },
      { question: 'Can you work around mature trees on older Dallas lots?', answer: 'Yes, this comes up constantly in neighborhoods like Oak Cliff and East Dallas. We use root barriers and adjusted pour boundaries to protect established trees while still delivering a stable slab.' },
      { question: 'Do you do commercial concrete near Deep Ellum and Uptown?', answer: 'Yes. We handle commercial sidewalks, ADA-compliant approaches, and pads for retail and mixed-use properties, and we can schedule pours during off-hours to minimize disruption to businesses.' },
      { question: 'Can I get a free concrete estimate in Dallas?', answer: 'Yes. We provide free on-site estimates for all residential and commercial concrete projects in Dallas. Call 214-239-0709 to schedule a visit.' },
    ],
  },
  irving: {
    about: [
      "Irving's concrete work splits pretty evenly between two worlds: the polished commercial environment around Las Colinas and the Toyota Music Factory, and the residential neighborhoods of Valley Ranch, North Irving, and South Irving where families are replacing driveways and adding patios. Few cities in the DFW metro ask a concrete contractor to move between those two standards as often as Irving does, and we've built our crews to handle both without dropping quality on either end.",
      "The soil around Lake Carolyn and the Elm Fork of the Trinity River holds more moisture than the sandier ground further west in the city, which changes how we approach drainage on patios and walkways near the water. Along the SH-114 corridor, commercial sites often sit on fill soil from decades of development, which means base verification matters even more before a warehouse apron or parking lot pour goes in.",
      "Because Irving sits at the intersection of so much commercial growth and long-established residential streets, professional concrete work here has to account for two different sets of expectations. Corporate property managers near Las Colinas want documentation, scheduling precision, and load-rated specs. Homeowners in Valley Ranch and West Irving want a driveway or patio installed correctly the first time with minimal disruption to daily life. We staff and schedule accordingly.",
    ],
    caseStudies: [
      {
        title: 'Corporate Plaza Concrete Work Near Las Colinas',
        location: 'Las Colinas Urban Center',
        challenge: 'A corporate office building needed a cracked entry plaza and adjoining walkway replaced without closing the main entrance during business hours, and the property required a load rating suitable for occasional delivery vehicles.',
        solution: 'We poured the plaza in two phases using temporary barriers to keep one entrance path open at all times, and specified a reinforced 5-inch slab rated for light vehicle loads.',
        result: 'The building stayed fully accessible throughout the project, and the property manager now uses us for all subsequent exterior concrete maintenance.',
      },
      {
        title: 'Driveway and Walkway Replacement in Valley Ranch',
        location: 'Valley Ranch',
        challenge: "A homeowner's original 1990s driveway had settled unevenly at the garage apron, creating a trip hazard and a persistent puddle that never fully drained.",
        solution: 'We removed the settled section, re-compacted the base with additional fill to correct the grade, and poured a new driveway and connecting walkway with proper slope away from the garage.',
        result: 'The drainage issue was eliminated and the new surface ties in seamlessly with the existing street grade.',
      },
      {
        title: 'Patio Installation in North Irving',
        location: 'North Irving',
        challenge: 'A family wanted to extend their living space outdoors but had a narrow side-yard access point that made equipment staging difficult.',
        solution: 'We used a compact mixer and hand-placed forms to work within the tight access, pouring a broom-finished patio with a built-in step down to the yard.',
        result: 'The homeowners gained a full outdoor living area without any damage to the fencing or landscaping along the access path.',
      },
    ],
    whyNumberOne: [
      { title: 'Comfortable at Both Corporate and Residential Standards', description: 'We move between Las Colinas commercial plazas and Valley Ranch driveways in the same week, and we hold both to the same documented quality standard.' },
      { title: 'Familiar With SH-114 Corridor Logistics', description: 'Staging, permitting, and scheduling around the commercial corridor requires coordination we handle regularly for Irving businesses.' },
      { title: 'Experience With Lake Carolyn Area Moisture', description: 'Properties near the water table require different drainage planning than the rest of the city, and we design for it rather than applying a generic patio spec.' },
      { title: 'Quick Turnaround for a High-Traffic City', description: 'Irving is one of our most active service areas, which means shorter scheduling windows and estimate visits than a contractor unfamiliar with the city.' },
      { title: 'Transparent Commercial Documentation', description: 'Corporate property managers get load ratings, spec sheets, and scheduling plans up front, not after the pour.' },
    ],
    faqs: [
      { question: 'Do you serve all of Irving, TX?', answer: 'Yes. We cover Las Colinas, Valley Ranch, North Irving, South Irving, and West Irving for both residential and commercial concrete work.' },
      { question: 'Can you pour commercial concrete without closing our building entrance?', answer: 'In most cases yes. We regularly phase commercial pours near Las Colinas to keep at least one access point open during business hours.' },
      { question: 'Does the soil near Lake Carolyn require special preparation?', answer: 'Yes, properties closer to the water table hold more moisture, so we adjust drainage design and base compaction accordingly, especially for patios and walkways.' },
      { question: 'How quickly can you get a crew to a job in Irving?', answer: 'Irving is one of our busiest service areas, so scheduling windows tend to be shorter than in less central parts of the metro. Call for current availability.' },
      { question: 'Do you handle load-rated concrete for commercial properties?', answer: 'Yes. We specify reinforced slab thickness for any surface that will see delivery vehicles or heavier equipment, and we document the rating for the property manager.' },
      { question: 'What is the most requested concrete service in Irving?', answer: 'Driveway replacement and patio installation lead on the residential side, while entry plazas and walkways are most common in the Las Colinas commercial corridor.' },
    ],
  },
  garland: {
    about: [
      "Garland has one of the largest inventories of aging concrete in the northeast Dallas metro, and it shapes almost everything we do in the city. Huge swaths of North Garland and South Garland were built out between the 1970s and 1990s, and those original driveways and walkways are now well past their expected service life. Replacement work, not new construction, is the backbone of what we do here.",
      "The areas around Lake Ray Hubbard and Duck Creek add a different wrinkle — higher moisture content in the soil and a heavier tree canopy that both put stress on slabs over time. We see more root intrusion and moisture-related heaving in these pockets than in the drier, newer sections near Firewheel Town Center, so our approach to base prep changes depending on which side of the city we're working in.",
      "Because so much of our Garland work involves replacing concrete that failed prematurely, we spend real time diagnosing why the original pour cracked or settled before we touch a shovel. A driveway that failed because of an undersized base needs a different fix than one that failed because of root intrusion near Spring Creek Forest Preserve, and getting that diagnosis right is what keeps the new concrete from failing the same way in another twenty years.",
    ],
    caseStudies: [
      {
        title: 'Full Driveway Replacement in South Garland',
        location: 'South Garland, a 1983-built subdivision',
        challenge: "A homeowner's original driveway had spalled badly and developed a network of cracks wide enough to catch a lawnmower wheel, with visible settling near the street connection.",
        solution: 'We tore out the full driveway, corrected the sub-base grading that had caused the settling, and poured a new 4-inch reinforced slab with properly spaced control joints.',
        result: 'The homeowner now has a driveway built to modern spec instead of a 40-year-old original pour, with no visible settling after the first full year.',
      },
      {
        title: 'Lakeside Patio Near Duck Creek',
        location: 'Duck Creek, near Lake Ray Hubbard',
        challenge: 'A family wanted a larger entertaining patio, but the existing yard held moisture longer than normal after rain due to the clay-heavy soil common near the lake.',
        solution: 'We built up a properly compacted gravel base above grade and integrated a drainage swale along the low side of the patio to move water toward the yard\'s natural runoff path.',
        result: 'The new patio stays dry within hours of a storm, replacing a yard that used to hold puddles for a day or more.',
      },
      {
        title: 'Walkway Repair Near Firewheel',
        location: 'North Garland, near Firewheel Town Center',
        challenge: 'A front walkway had heaved at multiple joints from nearby tree roots, creating trip hazards the homeowner was concerned about for elderly visitors.',
        solution: 'We removed the affected sections, installed a root deflection barrier along the tree line, and repoured with wider control joints to accommodate future minor movement.',
        result: 'The walkway is level and safe again, and the mature trees along the front of the property were left undisturbed.',
      },
    ],
    whyNumberOne: [
      { title: 'Specialists in Replacing Aging Garland Driveways', description: 'With so much of the city built between the 1970s and 1990s, we have deep experience diagnosing why original concrete failed before we replace it.' },
      { title: 'We Know the Lake Ray Hubbard Moisture Pattern', description: 'Properties near the lake and Duck Creek hold more water in the soil, and we design drainage and base prep specifically for that.' },
      { title: 'Root-Intrusion Experience Near Spring Creek', description: 'The mature tree canopy around Spring Creek Forest Preserve causes root-related heaving we know how to diagnose and prevent from recurring.' },
      { title: 'Honest Repair-vs-Replace Assessments', description: 'We tell homeowners plainly whether a patch will hold or whether the slab needs full replacement, based on the specific damage we see.' },
      { title: 'Efficient Tear-Out and Haul-Off', description: 'Replacement jobs move faster with us because we handle demolition and disposal of the old slab as part of the standard process, not an add-on.' },
    ],
    faqs: [
      { question: 'Do you serve all Garland neighborhoods?', answer: 'Yes. We work throughout North Garland, South Garland, Duck Creek, Firewheel, and the Lake Ray Hubbard area.' },
      { question: 'My Garland home was built in the 1980s. Is it time to replace the driveway?', answer: 'Concrete driveways typically last 25 to 30 years. If yours shows significant cracking, spalling, or settling, replacement is usually a better investment than repeated patching.' },
      { question: 'Does the soil near Lake Ray Hubbard cause extra problems?', answer: 'Yes, the higher moisture content in soil near the lake and Duck Creek contributes to heaving and settling more than in drier parts of the city, so we adjust drainage and base design there.' },
      { question: 'Can you fix a walkway damaged by tree roots?', answer: 'Yes. We regularly repair root-heaved walkways near Spring Creek Forest Preserve using root barriers and adjusted joint spacing to prevent it from happening again.' },
      { question: 'What concrete services are most common in Garland?', answer: 'Full driveway replacement is our top service in Garland, followed by patio installations and walkway repairs on older properties.' },
      { question: 'How do I get a concrete estimate in Garland?', answer: 'Call 214-239-0709 or submit a request through our contact page for a free on-site visit and assessment.' },
    ],
  },
  'grand-prairie': {
    about: [
      "Grand Prairie sits right at the geographic center of the Dallas-Fort Worth metro, and the concrete work reflects that central, fast-growing position. We're pouring new driveways in subdivisions going up near Lynn Creek one month and repairing commercial concrete near Lone Star Park the next. The city's growth has been steady enough that we see a healthy mix of new construction and replacement work in the same neighborhoods.",
      "The ground around Joe Pool Lake and the areas near Epic Waters Indoor Waterpark carry more moisture and clay content than the drier sections toward Dalworth Park, which changes how aggressively we compact base material before a pour. Grand Prairie also gets a fair amount of commercial and light-industrial concrete work tied to its position along major highway corridors, which requires a different scheduling and load-rating approach than residential jobs.",
      "Professional concrete work matters in Grand Prairie because the city is growing quickly enough that corner-cutting on a rushed subdivision job shows up fast — cracked driveways within a couple of years, patios that pond water because grading was skipped. We slow down on base prep specifically because we see so many newer properties in this city where that step was shortchanged the first time around.",
    ],
    caseStudies: [
      {
        title: 'Patio Installation Near Joe Pool Lake',
        location: 'South Grand Prairie',
        challenge: 'A homeowner near the lake wanted a large patio for entertaining, but the lot had a natural low point where water collected during heavy rain.',
        solution: 'We regraded the patio area above the natural low point and installed a gravel drainage bed beneath the slab to route water around rather than under the concrete.',
        result: 'The patio has stayed dry through multiple heavy rain events, and the previous low-point puddling in that section of the yard is gone.',
      },
      {
        title: 'Commercial Apron Near Lynn Creek',
        location: 'Lynn Creek business corridor',
        challenge: 'A light-industrial tenant needed a loading apron replaced without shutting down deliveries for more than a weekend.',
        solution: 'We scheduled demolition on a Friday evening, poured a reinforced 6-inch slab rated for truck traffic, and used accelerated curing additives to meet the Monday deadline.',
        result: 'The business resumed deliveries on schedule with a loading apron built to handle daily truck traffic for years to come.',
      },
      {
        title: 'New Driveway in Dalworth Park',
        location: 'Dalworth Park',
        challenge: 'A newer home had a driveway installed by the original builder that was already cracking after just a few years due to a thin, under-reinforced pour.',
        solution: 'We removed the builder-grade slab and replaced it with a properly reinforced 4-inch driveway on a compacted base meeting our standard spec rather than the minimum builder spec.',
        result: 'The homeowner now has a driveway built to hold up for decades instead of one that was already failing before the mortgage hit its fifth year.',
      },
    ],
    whyNumberOne: [
      { title: 'Central Location Means Fast Response', description: "Grand Prairie's central position in the metro lets us schedule estimates and jobs quickly without the long drive times some contractors face." },
      { title: 'We Compact Base Material Where Builders Cut Corners', description: 'We see a lot of newer Grand Prairie properties where original builder-grade concrete failed early from thin bases — we do not repeat that mistake.' },
      { title: 'Drainage Design for the Joe Pool Lake Area', description: 'Properties near the lake and Epic Waters need grading and drainage planning suited to the heavier clay and moisture in that part of the city.' },
      { title: 'Commercial Load Ratings for Highway Corridor Businesses', description: 'We handle the reinforced, load-rated concrete that light-industrial and commercial tenants along the highway corridors require.' },
      { title: 'Flexible Scheduling for Fast-Growing Areas', description: 'New subdivisions and expanding commercial sites move quickly in Grand Prairie, and our scheduling keeps pace with that growth.' },
    ],
    faqs: [
      { question: 'Do you service Grand Prairie, TX?', answer: 'Yes. We handle residential and commercial concrete projects throughout Grand Prairie, including South Grand Prairie, North Grand Prairie, Lynn Creek, and Dalworth Park.' },
      { question: 'Can you fix a driveway that is already cracking a few years after a new build?', answer: 'Yes, this is common with builder-grade concrete poured too thin. We assess the base and slab depth and typically recommend full replacement to a proper 4-inch reinforced spec.' },
      { question: 'Does the soil near Joe Pool Lake need special handling?', answer: 'Yes. Properties near the lake and Epic Waters sit on heavier, more moisture-retentive clay, so we grade and drain patios and driveways differently than on the drier side of the city.' },
      { question: 'Do you do commercial concrete along the highway corridors?', answer: 'Yes. We handle loading aprons, parking areas, and reinforced pads for light-industrial and commercial tenants near Lynn Creek and other corridor businesses.' },
      { question: 'Is Grand Prairie in your standard service area?', answer: 'Yes, with no additional travel charges for Grand Prairie projects given its central location in our service footprint.' },
      { question: 'Can I get a free estimate in Grand Prairie?', answer: 'Absolutely. Call 214-239-0709 or fill out our online contact form to schedule a free on-site visit.' },
    ],
  },
  mesquite: {
    about: [
      "Mesquite's concrete needs are driven largely by age. Neighborhoods in North Mesquite and South Mesquite were built out heavily in the 1970s through 1990s, and a huge share of the original driveways and walkways from that era are now cracking, spalling, or settling. We spend more time on straightforward replacement work in Mesquite than almost anywhere else in our service area.",
      "The Mesquite Industrial District along I-635 brings a different kind of job entirely — commercial pads, parking areas, and sidewalks for warehouses and light-industrial tenants who need durable, load-rated concrete installed on a tight timeline. Between the aging residential stock near the Mesquite Rodeo and Town East Mall and the industrial corridor, we stay busy across two very different types of concrete work in the same city.",
      "Professional replacement matters in Mesquite because so many original slabs here were poured to older, thinner building standards that don't hold up the way modern reinforced concrete does. When we replace a 40-year-old driveway, we're not just patching a cosmetic problem — we're correcting a base and reinforcement spec that was inadequate from the start.",
    ],
    caseStudies: [
      {
        title: 'Driveway Replacement in North Mesquite',
        location: 'North Mesquite, near the Mesquite Golf Club',
        challenge: 'A homeowner had a 1978 driveway with no rebar that had cracked into six separate slabs, several of which rocked underfoot when a car drove over them.',
        solution: 'We fully demolished and hauled off the old slab, corrected sub-base compaction, and poured a new 4-inch reinforced driveway with modern control joint spacing.',
        result: 'The unstable, rocking sections are gone, replaced with a driveway built to current standards that will outlast the original by decades.',
      },
      {
        title: 'Commercial Sidewalk in the Industrial District',
        location: 'Mesquite Industrial District, near I-635',
        challenge: 'A warehouse tenant needed ADA-compliant sidewalk sections added to an existing loading area without disrupting daily truck traffic.',
        solution: 'We phased the sidewalk pour around the facility\'s delivery schedule, working early mornings before truck traffic picked up, and matched the new sections to code-required slope.',
        result: 'The facility gained compliant pedestrian access with zero disruption to its shipping schedule.',
      },
      {
        title: 'Patio Addition in South Mesquite',
        location: 'South Mesquite',
        challenge: "A family wanted an outdoor living space added to a home near Town East Mall, but the backyard's existing grade sloped toward the house.",
        solution: 'We poured a patio with a corrected slope away from the foundation and added a small retaining edge to hold the adjacent landscaping bed in place.',
        result: 'The family now has a stable, properly draining patio, and water no longer pools against the back of the house after rain.',
      },
    ],
    whyNumberOne: [
      { title: 'Deep Experience With Mesquite-Era Driveways', description: 'We have replaced dozens of original 1970s-1990s driveways in Mesquite and know exactly what fails on that generation of concrete and why.' },
      { title: 'Straightforward Tear-Out and Disposal Pricing', description: "No surprise fees for demolition and haul-off — it's built into our standard replacement pricing from the start." },
      { title: 'Commercial Experience Along the I-635 Corridor', description: 'We regularly work with Mesquite Industrial District tenants who need durable, code-compliant concrete on tight commercial schedules.' },
      { title: 'Honest, No-Upsell Estimates', description: 'We tell Mesquite homeowners plainly whether a slab needs full replacement or can be reasonably repaired, without pushing unnecessary work.' },
      { title: 'Fast Scheduling for Replacement Jobs', description: 'Because replacement is our most common Mesquite job, our crews are set up to move efficiently from tear-out to finished pour.' },
    ],
    faqs: [
      { question: 'Do you work in Mesquite, TX?', answer: 'Yes. Mesquite is part of our regular service area in East Dallas County, covering North Mesquite, South Mesquite, and the Industrial District.' },
      { question: 'My Mesquite driveway has large cracks. Can it be repaired?', answer: 'Large structural cracks in an older slab usually mean replacement is the better long-term investment rather than repeated patching. We will assess it honestly and give a clear recommendation.' },
      { question: 'What is the most common concrete project in Mesquite?', answer: 'Driveway replacement is number one by a wide margin. Many Mesquite homes are 30 to 50 years old with original, under-reinforced driveways nearing the end of their service life.' },
      { question: 'Do you handle commercial concrete near I-635?', answer: 'Yes. We work with warehouse and light-industrial tenants in the Mesquite Industrial District on loading aprons, parking areas, and ADA-compliant sidewalks.' },
      { question: 'How long does a typical driveway replacement take in Mesquite?', answer: 'Most residential driveway replacements take two to four days from demolition through final cure time, depending on size and weather.' },
      { question: 'How do I schedule a concrete estimate in Mesquite?', answer: 'Call 214-239-0709 or use our online contact form for a free on-site visit and assessment.' },
    ],
  },
  plano: {
    about: [
      "Plano concrete work runs at a higher finish standard than most cities we serve, and that's by design — the city's mix of high-value residential neighborhoods and major corporate campuses around Legacy West means clients expect precision. West Plano homeowners frequently request stamped and decorative concrete rather than standard broom finish, while East Plano and Haggard Estates see a steady mix of driveway replacement and traditional patio work.",
      "Soil-wise, Plano is less uniformly clay-heavy than some of its neighbors, but properties near Russell Creek and the greenbelt areas still deal with moisture-driven movement that requires proper joint spacing and base prep. Corporate and commercial sites near Legacy and The Shops at Legacy bring their own standard — architectural specs, tighter tolerances, and coordination with property management schedules that differ from a residential job.",
      "Professional concrete work matters in Plano because the bar here is simply higher. A visibly uneven stamped patio or a driveway that doesn't match the color and pattern consistency homeowners expect reflects poorly on a property in a way it might not in a less design-conscious market, and we treat every Plano job — residential or commercial — with that level of finish attention.",
    ],
    caseStudies: [
      {
        title: 'Stamped Concrete Patio in West Plano',
        location: 'West Plano, near Arbor Hills Nature Preserve',
        challenge: 'A homeowner wanted a patio that matched the natural stone look of their landscaping without the cost and maintenance of real flagstone.',
        solution: 'We installed an ashlar slate stamped concrete patio with an earth-tone color hardener and matching border detail, hand-finished for a natural texture.',
        result: 'The homeowner got the high-end stone appearance they wanted at a fraction of natural stone cost, with far less long-term maintenance.',
      },
      {
        title: 'Corporate Campus Walkway Near Legacy West',
        location: 'Legacy business district',
        challenge: 'A corporate campus needed a section of exterior walkway replaced to match existing architectural concrete specs exactly, with minimal disruption to employee foot traffic.',
        solution: 'We matched the existing aggregate finish and joint pattern precisely, and scheduled the pour over a weekend to avoid disrupting weekday employee traffic.',
        result: 'The new section is indistinguishable from the original architectural concrete, and the campus stayed fully accessible during business hours throughout the project.',
      },
      {
        title: 'Driveway Replacement in East Plano',
        location: 'East Plano',
        challenge: 'An older home had a driveway with a rough broom finish that had discolored unevenly over the years and developed several surface cracks.',
        solution: 'We replaced the full driveway with a clean, consistent broom finish and integral color to match the homeowner\'s updated exterior palette.',
        result: 'The home now has a driveway with a uniform, modern appearance that improved curb appeal ahead of a planned home sale.',
      },
    ],
    whyNumberOne: [
      { title: 'Decorative Concrete Expertise for Plano\'s Aesthetic Standard', description: 'We specialize in stamped and colored concrete finishes that match the design-conscious expectations of West Plano and Legacy area homeowners.' },
      { title: 'Commercial-Grade Precision Near Legacy West', description: 'We match existing architectural concrete specs exactly for corporate campus work, not just a generic commercial pour.' },
      { title: 'Familiar With Plano HOA Requirements', description: 'Many Plano neighborhoods have HOA guidelines around driveway color and finish, and we design projects that meet them from the start.' },
      { title: 'Meticulous Finish Work on High-Value Homes', description: 'We hold Plano residential jobs to the same finish standard as our commercial work, because the properties demand it.' },
      { title: 'Responsive Scheduling for Corporate and Residential Clients', description: 'We coordinate around both corporate property management timelines and homeowner schedules without compromising either.' },
    ],
    faqs: [
      { question: 'Do you serve Plano, TX?', answer: 'Yes. We work throughout West Plano, East Plano, Legacy, Haggard Estates, and Russell Creek.' },
      { question: 'What decorative concrete options are popular in Plano?', answer: 'Stamped concrete is very popular in Plano, especially ashlar slate and flagstone patterns with earth-tone color hardeners for patios and driveways.' },
      { question: 'Do you handle commercial concrete near Legacy West?', answer: 'Yes. We work on walkways, plazas, and parking areas for corporate campuses, matching existing architectural specs and finishes precisely.' },
      { question: 'Will my HOA approve a stamped concrete driveway?', answer: 'Most Plano HOAs allow decorative concrete within certain color guidelines. We can help select a pattern and color that fits your community\'s requirements.' },
      { question: 'How does the soil near Russell Creek affect concrete?', answer: 'Properties near the greenbelt and creek areas see more moisture-driven soil movement, so we adjust joint spacing and base preparation there compared to drier parts of the city.' },
      { question: 'How do I get a concrete estimate in Plano?', answer: 'Call 214-239-0709 or submit a request through our contact page for a free on-site estimate.' },
    ],
  },
  frisco: {
    about: [
      "Frisco has been one of the fastest-growing cities in the country for years, and our work here reflects that constant expansion. We're regularly on new construction sites in areas like Stonebriar and the Lebanon Road Corridor pouring first-time driveways and patios for homes that didn't exist eighteen months earlier, while also handling early replacement work in slightly older Frisco neighborhoods where the original builder-grade concrete is already showing wear.",
      "The commercial side of Frisco is just as active. The Star District and the area around PGA Frisco and Toyota Stadium have brought a wave of new commercial concrete work — parking structures, plazas, and pads for businesses opening to serve the growing population. New construction also means working closely with homebuilders on timelines, since concrete often sits on the critical path before framing can proceed.",
      "Professional concrete work matters in fast-growth cities like Frisco because rushed subdivision-grade pours don't hold up, and homeowners in neighborhoods like Starwood and Eldorado are increasingly choosing upgraded, decorative concrete rather than settling for the builder minimum. We treat both new construction and high-end residential decorative work as core parts of our Frisco business, not side jobs.",
    ],
    caseStudies: [
      {
        title: 'New Construction Driveway in Stonebriar',
        location: 'Stonebriar',
        challenge: 'A homebuilder needed a driveway poured on a tight construction timeline to keep the project on schedule for closing, with the homeowner requesting an upgraded finish beyond the standard builder spec.',
        solution: 'We coordinated directly with the builder\'s site schedule to pour as soon as the sub-base was ready, and delivered an exposed aggregate finish upgrade within the same timeline as a standard pour.',
        result: 'The home closed on schedule with a driveway finish well above the standard builder-grade offering.',
      },
      {
        title: 'Retaining Wall in Starwood',
        location: 'Starwood',
        challenge: 'A backyard with a significant grade change was eroding along a slope near the property line, undermining part of the landscaping and threatening a fence line.',
        solution: 'We designed and poured a tiered concrete retaining wall system to manage the grade change, with proper drainage weep holes to relieve water pressure behind the wall.',
        result: 'The erosion stopped completely, and the homeowner reclaimed usable yard space that had previously been an unstable slope.',
      },
      {
        title: 'Commercial Plaza Near The Star District',
        location: 'The Star District',
        challenge: 'A new restaurant space needed an outdoor patio and entry plaza poured on an aggressive opening-day deadline shared by several other trades on-site simultaneously.',
        solution: 'We worked in coordination with the general contractor\'s schedule, sequencing our pour and cure time around electrical and landscaping crews to avoid conflicts.',
        result: 'The plaza and patio were finished and cured in time for the restaurant\'s opening date with no schedule conflicts with other trades.',
      },
    ],
    whyNumberOne: [
      { title: 'Built for New Construction Timelines', description: 'We coordinate directly with homebuilders and general contractors on Frisco\'s fast-moving construction schedules so concrete never becomes the bottleneck.' },
      { title: 'Expansion Joint Expertise for Rapidly Built Subdivisions', description: 'New Frisco neighborhoods need correct joint spacing from day one since the concrete has not had years to reveal weak points the way older cities have.' },
      { title: 'Large-Scale Capacity for Star District Commercial Work', description: 'We handle the volume and scheduling demands of commercial plazas and pads in Frisco\'s busiest new commercial corridor.' },
      { title: 'Up to Date on Frisco\'s Permitting Pace', description: "Frisco's rapid growth means permitting processes shift, and we stay current so projects don't stall on paperwork." },
      { title: 'High-End Decorative Concrete for Upgraded Homes', description: 'Stonebriar and Eldorado homeowners increasingly want upgrades beyond builder-grade concrete, and decorative stamped work is a core part of what we offer.' },
    ],
    faqs: [
      { question: 'Do you work with new construction in Frisco?', answer: 'Yes. We work directly with builders and homeowners on new construction driveways, patios, walkways, and foundations, coordinating around construction timelines.' },
      { question: 'What Frisco neighborhoods do you serve?', answer: 'All neighborhoods including Stonebriar, Eldorado, Starwood, the Lebanon Road Corridor, and The Star District.' },
      { question: 'Is stamped concrete popular in Frisco?', answer: 'Very popular, especially for patios and pool decks. Ashlar slate and modern geometric patterns are common choices among Frisco homeowners upgrading beyond builder-grade concrete.' },
      { question: 'Can you build a retaining wall for a sloped backyard?', answer: 'Yes. Frisco neighborhoods like Starwood often have grade changes that need managing, and we design tiered concrete retaining walls with proper drainage to stop erosion.' },
      { question: 'Do you handle commercial concrete near The Star District?', answer: 'Yes. We coordinate with general contractors on commercial plazas, patios, and pads for new businesses opening in Frisco\'s commercial corridors.' },
      { question: 'How do I get a concrete estimate in Frisco?', answer: 'Call 214-239-0709 or fill out our contact form for a free estimate at your property or job site.' },
    ],
  },
  mckinney: {
    about: [
      "McKinney asks more range of a concrete contractor than almost any other city we serve. Historic Downtown McKinney has character homes and streetscape requirements that call for a careful, preservation-minded approach, while master-planned communities like Craig Ranch and Stonebridge Ranch are full of newer construction with strict HOA design standards. We move between the two regularly, sometimes in the same week.",
      "Neighborhoods like Tucker Hill and Adriatica bring distinctive architecture — walkable, traditional-neighborhood-design streets and Mediterranean-influenced homes — that pair well with decorative stamped concrete rather than standard finishes. Around Erwin Park and the older parts of the city, we also see more mature tree root systems and settled soil that require a different approach than the compacted, engineered soil common in newer Craig Ranch developments.",
      "Professional concrete work matters in McKinney because the city holds two standards at once: historic character that needs to be respected and matched, and master-planned community aesthetics that come with strict HOA review. Getting either one wrong shows up fast, whether that's mismatched finish near a downtown historic property or a driveway color that doesn't clear a Stonebridge Ranch architectural committee.",
    ],
    caseStudies: [
      {
        title: 'Walkway Restoration in Historic Downtown McKinney',
        location: 'Historic Downtown McKinney',
        challenge: 'A century-old property near the downtown square needed a front walkway replaced, but the homeowner wanted the new concrete to respect the character of the original streetscape rather than look like a modern patch.',
        solution: 'We poured a broom-finished walkway with a scored pattern and edge detail matching the era-appropriate look of the surrounding historic block.',
        result: 'The new walkway blends seamlessly with the historic streetscape, and the homeowner received compliments from neighbors who assumed it was original.',
      },
      {
        title: 'Stamped Driveway in Craig Ranch',
        location: 'Craig Ranch',
        challenge: 'A new-construction homeowner wanted a decorative driveway that would clear the community\'s strict HOA architectural review before installation.',
        solution: 'We submitted color and pattern samples for HOA approval in advance and installed a stamped concrete driveway in an approved earth-tone finish matching the community\'s design guidelines.',
        result: 'The driveway cleared architectural review on the first submission and gave the home standout curb appeal within the neighborhood\'s guidelines.',
      },
      {
        title: 'Foundation Repair in Tucker Hill',
        location: 'Tucker Hill',
        challenge: 'An older home near Tucker Hill had a section of foundation slab showing cracking consistent with settled soil beneath a portion of the home.',
        solution: 'We evaluated the affected area, addressed the soil compaction issue beneath the slab, and repaired the foundation section with reinforced concrete matched to the home\'s structural requirements.',
        result: 'The cracking was stopped at its source rather than just cosmetically patched, protecting the long-term structural integrity of the home.',
      },
    ],
    whyNumberOne: [
      { title: 'Preservation-Minded Work in Historic Downtown', description: 'We match finish, scoring, and edge detail to the character of historic McKinney properties instead of installing a generic modern slab.' },
      { title: 'HOA-Ready for Craig Ranch and Stonebridge Ranch', description: 'We handle architectural committee submissions and select colors and patterns that clear master-planned community design guidelines.' },
      { title: 'Foundation Expertise for Older McKinney Homes', description: 'We diagnose and repair settlement-related foundation issues common in Tucker Hill and other established McKinney neighborhoods.' },
      { title: 'Decorative Concrete Matching Adriatica\'s Architecture', description: 'We offer stamped and colored finishes suited to the Mediterranean-influenced design found in neighborhoods like Adriatica.' },
      { title: 'Equally Responsive to Old and New McKinney', description: 'Whether the job is a sensitive historic infill project or a new build in Craig Ranch, we bring the appropriate expertise to each.' },
    ],
    faqs: [
      { question: 'Do you serve McKinney, TX?', answer: 'Yes. McKinney is part of our regular service area in Collin County for both residential and commercial projects.' },
      { question: 'Can you work on concrete near historic McKinney properties?', answer: 'Yes. We have experience matching finish and detail to the character of properties in and around Historic Downtown McKinney rather than installing a generic modern slab.' },
      { question: 'Will my HOA approve a decorative driveway in Craig Ranch or Stonebridge Ranch?', answer: 'Most master-planned community HOAs in McKinney require design review. We help select colors and patterns likely to be approved and can submit samples ahead of installation.' },
      { question: 'Do you repair foundation cracking in older McKinney homes?', answer: 'Yes. We diagnose settlement-related foundation issues, which are more common in established neighborhoods like Tucker Hill, and repair the underlying cause rather than just the crack.' },
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

      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{city.headline}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{city.subhead}</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">About Concrete Services in {city.name}</h2>
          <div className="space-y-4">
            {details.about.map((paragraph, index) => (
              <p key={index} className="text-brand-gray leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Recent Concrete Projects in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {details.caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-brand-gray-mid/30 rounded-lg p-6">
                <Briefcase className="w-6 h-6 text-brand-orange mb-3" />
                <h3 className="font-bold text-brand-charcoal mb-1">{study.title}</h3>
                <p className="text-sm text-brand-orange font-medium mb-4">{study.location}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-brand-charcoal">Challenge</p>
                    <p className="text-brand-gray leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-charcoal">Solution</p>
                    <p className="text-brand-gray leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-charcoal">Result</p>
                    <p className="text-brand-gray leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're #1 */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">What Makes Dallas Concrete Solutions #1 in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {details.whyNumberOne.map((reason, index) => (
              <div key={index} className="bg-white border border-brand-gray-mid/30 rounded-lg p-6 flex gap-4">
                <Award className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-charcoal mb-2">{reason.title}</h3>
                  <p className="text-brand-gray leading-relaxed text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
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

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Common Questions About Concrete Work in {city.name}</h2>
          <FaqAccordion faqs={details.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-orange text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get a Free Concrete Estimate in {city.name}</h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-xl mx-auto">
            Ready to start your driveway, patio, or commercial concrete project in {city.name}? Call us today or request a free on-site estimate — Dallas Concrete Solutions is licensed, insured, and ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-md hover:bg-brand-gray-light transition-colors">
              <Phone className="w-5 h-5" />
              Call {site.phone}
            </a>
            <Button href="/contact" variant="ghost">
              Request a Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

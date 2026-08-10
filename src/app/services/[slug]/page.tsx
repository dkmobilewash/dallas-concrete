import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import FaqAccordion from '@/components/ui/FaqAccordion'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CtaSection from '@/components/sections/CtaSection'
import { CheckCircle, ArrowRight, MapPin, Star, Users } from 'lucide-react'

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
  about: string[]
  process: { step: string; description: string }[]
  included: string[]
  standOut: { title: string; description: string }[]
  whoBenefits: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}> = {
  'concrete-driveways': {
    about: [
      "A concrete driveway is the daily workhorse of your property. It carries the weight of every vehicle that comes home, it takes the brunt of Dallas summers where pavement surface temperatures regularly top 140°F, and it's the first thing anyone sees before they reach your front door. Unlike a patio or walkway, a driveway has to be engineered for repeated, concentrated point loads — tires, not foot traffic — which is why thickness, base compaction, and reinforcement matter far more here than on almost any other flatwork we pour.",
      "Most driveway failures we get called out to repair in North Texas trace back to one of two things: a base that wasn't compacted to spec before the pour, or a slab poured too thin for what actually drives on it. Add in the Blackland Prairie clay that dominates soil from Oak Cliff to Frisco — clay that can swell and shrink several inches between a wet spring and a dry August — and you get the alligator cracking and slab tilt that homeowners assume is just \"what concrete does\" here. It isn't. A 4-6 inch slab over 6 inches of compacted crushed limestone base, with control joints cut at the right intervals, holds up for decades even on reactive clay.",
      "We also treat the street apron as part of the driveway, not an afterthought. A poorly transitioned apron is where you'll hear the scrape of a low-clearance car and where standing water collects after a thunderstorm rolls through. Getting that grade transition right the first time saves you from a second repair bill down the road.",
    ],
    process: [
      { step: 'Free On-Site Walkthrough', description: 'We come to your property, measure the existing driveway or planned footprint, check the grade and drainage direction, and talk through vehicle loads — is this for daily sedans, or does a work truck or RV need to sit on it too?' },
      { step: 'Demo & Haul-Off', description: 'We saw-cut and remove the existing slab (or clear the site for new construction), then haul away all debris. You never have to deal with broken concrete piled in your yard.' },
      { step: 'Base Prep & Forming', description: 'We excavate to depth, install and compact 6 inches of crushed limestone base in lifts, and set wood forms to the exact grade and width we quoted — this is the step that determines whether the slab stays flat for the next 30 years.' },
      { step: 'Reinforcement & Pour', description: 'Depending on load requirements we place #3 rebar on an 18-inch grid or synthetic fiber mesh, then pour to full thickness in one continuous placement so there are no cold joints inside the slab.' },
      { step: 'Finish, Joint Cutting & Cure', description: 'We hand-finish to a uniform broom texture for traction, cut control joints at 10x10-foot intervals to direct any shrinkage cracking, apply curing compound, and walk the finished driveway with you before we leave.' },
    ],
    included: [
      'Written estimate with exact square footage and thickness spec',
      'Full demo and haul-off of the old driveway slab',
      '6" compacted crushed limestone base',
      '4" standard slab, or 5-6" with rebar for trucks, RVs, and trailers',
      '#3 rebar grid or fiber-reinforced mix, sized to your vehicle loads',
      'Control joints cut at proper 10x10-foot spacing',
      'Broom finish for slip resistance (stamped or exposed aggregate available)',
      'Apron transition tie-in to the street and full site cleanup',
    ],
    standOut: [
      { title: 'We Design Around Dallas Clay, Not Around It', description: "We size base depth and reinforcement for the specific swell potential of Blackland Prairie clay, not a one-size-fits-all national spec. That's the difference between a driveway that cracks in year three and one that's still flat in year twenty." },
      { title: 'Summer Pour Scheduling', description: "We schedule driveway pours for early morning starts in July and August so the concrete doesn't set too fast in 100°F heat, which is a leading cause of surface crazing and weak finishes from crews who pour on the wrong schedule." },
      { title: 'Municipal Apron & ROW Knowledge', description: 'Dallas, Plano, Frisco, and the surrounding cities each have slightly different requirements for driveway approaches within the right-of-way. We handle permitting and inspection scheduling so you never get a stop-work order mid-project.' },
      { title: 'Rebar vs. Fiber, Decided Correctly', description: "We don't upsell rebar on every job or cut corners with fiber on every job — we spec reinforcement based on what actually parks on your driveway, and we'll tell you honestly which one your project needs." },
      { title: 'Local Reputation You Can Verify', description: "We're a Dallas-based crew, not a franchise dispatching subcontractors. You can drive by driveways we poured years ago throughout Oak Cliff, Irving, and Plano and see how they've held up." },
    ],
    whoBenefits: [
      { title: 'Homeowners with Cracked or Sunken Driveways', description: 'If your slab has visible cracking, settling at one corner, or standing water at the garage apron, those are signs of clay-related base failure that a proper replacement fixes for good.' },
      { title: 'RV, Boat, and Work Truck Owners', description: 'Heavier vehicles need a reinforced 5-6 inch slab rather than a standard 4-inch pour — we spec the extra thickness and rebar so the concrete doesn\'t crack under repeated heavy loads.' },
      { title: 'New Home Buyers Adding a Second Pad or Extension', description: 'Whether you need a widened driveway for a second car or a side pad for a trailer, we tie new concrete into existing slabs cleanly with matched joints and grade.' },
      { title: 'Landlords and Property Managers', description: 'A cracked driveway is one of the fastest ways to lose a prospective tenant at the curb — we handle multi-property scheduling so your rental listings show well.' },
      { title: 'Sellers Preparing to List', description: 'A fresh, properly finished driveway is one of the highest-return curb appeal projects before putting a North Texas home on the market.' },
    ],
    faqs: [
      { question: 'How thick should a concrete driveway be in Dallas?', answer: 'Standard passenger-vehicle driveways should be 4 inches thick over 6 inches of compacted base. If you regularly park an RV, work truck, or trailer, we recommend 5-6 inches with #3 rebar reinforcement to handle the added weight.' },
      { question: 'How long before I can drive on a new driveway?', answer: 'We recommend keeping passenger vehicles off the slab for 7 days and heavier trucks or trailers off for 14 days. Concrete reaches roughly 90% of its design strength by then, though full cure continues out to 28 days.' },
      { question: 'Can you replace just a section of my driveway?', answer: "Yes, we can saw-cut and replace damaged sections rather than the whole slab. There will be a visible joint line and some color variation between old and new concrete, but it's a cost-effective fix for isolated damage." },
      { question: 'Why does my driveway keep cracking even though it\'s only a few years old?', answer: "In most cases we find an under-compacted base or a slab poured too thin for the soil's expansive clay content. Proper 6-inch compacted base and correctly sized control joints prevent this from recurring." },
      { question: 'Do I need a permit for a new driveway?', answer: 'Most cities in the DFW metro require a permit for new driveway construction or apron work within the right-of-way, though straight replacements on existing footprints are often exempt. We pull and handle all required permits as part of the project.' },
      { question: 'Should I use rebar or fiber mesh?', answer: "Fiber mesh is adequate for standard 4-inch residential driveways with normal passenger vehicle traffic. We move to #3 rebar on an 18-inch grid for anything carrying heavier or repeated loads, since steel resists cracking under concentrated weight better than fiber alone." },
    ],
  },
  'concrete-patios': {
    about: [
      "Outdoor living isn't a trend in North Texas, it's how the calendar works — spring and fall are short and precious, so the patio is where that time actually gets used. A concrete patio is the most durable, lowest-maintenance surface you can build that space on, and unlike a wood deck it won't warp, rot, or need refinishing every few years in this climate.",
      "The part homeowners underestimate is drainage. Every patio we design slopes a minimum of 1/8 inch per foot away from the house, because a flat or backward-sloping slab next to a foundation on expansive clay is one of the most common causes of foundation moisture problems we see called in later as \"unrelated\" foundation repairs. We also isolate the patio from the house foundation with an expansion joint, so the two structures can move independently through Dallas's wet-spring, bone-dry-August cycle without cracking either one.",
      "Beyond structure, this is where finish choice matters most. Broom finish is the workhorse — durable, affordable, good traction around a pool or grill. Exposed aggregate and stamped patterns dress it up and, done right, stay cooler underfoot in July than plain gray concrete. We plan the slab layout around what actually goes on it: pergola footings, an outdoor kitchen slab-in-slab, a fire pit pad, or just furniture and a grill.",
    ],
    process: [
      { step: 'Design Consultation', description: "We walk the yard with you, talk through how you'll actually use the space — dining, a kitchen, a fire pit, pool decking — and sketch the size, shape, and finish before anything is quoted." },
      { step: 'Grading & Drainage Layout', description: "We establish the finished grade so water sheets away from the foundation at a minimum 1/8-inch-per-foot slope, and plan for any low points where a drain or gravel bed is needed." },
      { step: 'Base Prep & Forming', description: 'We excavate, compact a 4-inch aggregate base, and set forms to the exact shape — including curves, if the design calls for them — with isolation joint material placed against the house.' },
      { step: 'Pour & Finish', description: 'Concrete is placed to a 4-inch slab thickness (thicker under any grill island or kitchen structure) and finished in your chosen texture: broom, exposed aggregate, or stamped.' },
      { step: 'Joint Cutting, Sealing & Walkthrough', description: 'Control and expansion joints are cut at proper intervals, sealer is applied on decorative finishes, and we walk the finished patio with you to confirm it matches what we designed.' },
    ],
    included: [
      'Design consultation covering layout, finish, and drainage direction',
      'Site grading engineered for minimum 1/8" per foot slope away from the house',
      '4" compacted aggregate base',
      '4" reinforced slab (thicker under kitchen islands or fireplace structures)',
      'Isolation joint at every point the patio meets the house foundation',
      'Control joints cut to prevent random cracking',
      'Choice of broom, exposed aggregate, or stamped finish',
      'Sealer application on decorative finishes and full site cleanup',
    ],
    standOut: [
      { title: 'Drainage That Protects Your Foundation, Not Just Your Feet', description: "We treat patio grading as foundation protection first and aesthetics second — a mis-sloped patio slab is one of the top preventable causes of soil moisture problems against a Dallas foundation." },
      { title: 'Heat-Smart Finish Recommendations', description: "We steer clients toward lighter integral colors and exposed aggregate for pool decks and dining patios, since dark broom-finished concrete in direct North Texas sun can get uncomfortably hot to walk on barefoot by early afternoon." },
      { title: 'Built to Work With Your Outdoor Kitchen', description: 'We coordinate slab thickness and footing depth with your gas line, electrical, and grill island plans up front, rather than pouring a standard slab and forcing your outdoor kitchen contractor to work around it later.' },
      { title: 'Entertaining-Season Scheduling', description: "We know spring and fall book up fast for backyard projects in Dallas, and we plan crew schedules to get patios finished before the weather windows homeowners actually want to use them in." },
      { title: 'Joint Design That Actually Prevents Cracking', description: "Expansion and control joints are placed based on the specific slab geometry and thermal exposure of your yard, not a generic grid — this is what keeps a large open patio from developing random cracks its first hot summer." },
    ],
    whoBenefits: [
      { title: 'Families Building an Outdoor Entertaining Space', description: 'A properly sized and sloped patio becomes the default gathering spot for cookouts, birthdays, and everyday evenings outside.' },
      { title: 'Homeowners Installing Outdoor Kitchens or Fire Pits', description: "We plan slab thickness, footings, and utility rough-ins around these features from day one instead of retrofitting a standard slab." },
      { title: 'Owners of Older Homes Without Existing Patios', description: 'Many homes built before the 1990s in Dallas neighborhoods like Oak Cliff and East Dallas never had a patio poured — we design one to fit the existing yard and foundation.' },
      { title: 'Homeowners with Standing Water Near the Foundation', description: 'If water pools against your house after rain, a properly sloped patio replacement often solves both the drainage problem and adds usable outdoor space at once.' },
      { title: 'Empty Nesters Simplifying Their Landscape', description: 'Converting high-maintenance grass or garden beds into a durable, low-upkeep patio is a common project for homeowners looking to spend less time on yard work.' },
    ],
    faqs: [
      { question: 'What is the best concrete finish for a patio in Dallas?', answer: "Broom finish is the most affordable and slip-resistant option and works well for most families. Exposed aggregate and light-colored stamped finishes are worth the upgrade for pool decks or dining areas, since they stay noticeably cooler underfoot in summer sun." },
      { question: 'How do you keep water away from my foundation?', answer: "Every patio we pour slopes a minimum of 1/8 inch per foot away from the house, and we place an isolation joint everywhere the patio meets the foundation so the two can move independently without cracking or trapping moisture against the house." },
      { question: 'Can you pour a patio right next to my house?', answer: "Yes — that's the most common layout. We use an isolation joint at the connection point so seasonal foundation and slab movement don't transfer stress between the two structures." },
      { question: 'How long does a patio installation take?', answer: 'Most residential patios take 2-4 days from forming to finish, depending on size and whether the design includes stamped patterns, curves, or an integrated kitchen structure. Full cure for foot traffic is about 7 days.' },
      { question: 'Will my patio get too hot to walk on barefoot?', answer: "Standard gray broom-finished concrete can get hot in direct July and August sun, but lighter integral colors and exposed aggregate finishes stay noticeably cooler. We'll talk through finish options with heat in mind if the patio gets full afternoon sun." },
      { question: 'Can a patio be built around an existing tree or garden bed?', answer: "Yes, we regularly form patios around existing trees and landscape features. We'll talk through root protection and any control joint adjustments needed near a large tree during the design consultation." },
    ],
  },
  'concrete-walkways': {
    about: [
      "A walkway does one job above everything else: get people from point A to point B without them tripping, slipping, or twisting an ankle. That sounds simple until you account for North Texas rain patterns, expansive clay that heaves unevenly under a narrow slab, and the fact that a walkway often connects a driveway, a porch, and a yard at three different grades.",
      "Most of the walkway repair calls we get aren't cosmetic — they're safety calls. A lifted joint at a front step, a settled section that collects rainwater and ices over on the rare hard freeze, a crack wide enough to catch a heel. These come from base prep that was skipped or rushed on the original install. We excavate to proper depth and compact a real aggregate base under every walkway we pour, not just the wide, heavily-loaded slabs like driveways.",
      "For businesses, churches, schools, and any property open to the public, walkways carry ADA obligations most homeowners never have to think about — minimum width, running slope, cross-slope, and detectable warning surfaces at curb ramps. We build those requirements into commercial walkway design from the start rather than treating them as an afterthought.",
    ],
    process: [
      { step: 'Path & Grading Walkthrough', description: "We walk the route with you, establish width based on use — 3 feet for a side path, 4-5 feet for a front entry or ADA route — and set the grade to shed water instead of pooling it." },
      { step: 'Excavation & Base Compaction', description: 'We excavate to depth and install a compacted aggregate base, which is the single biggest factor in whether a narrow slab stays flat through clay soil movement.' },
      { step: 'Forming to Width & Grade', description: 'Forms are set precisely to the designed width and slope, including any accessibility requirements for cross-slope and running slope on commercial routes.' },
      { step: 'Pour & Slip-Resistant Finish', description: 'Concrete is poured to 4 inches and finished with a broom or light-broom texture selected specifically for wet-weather traction.' },
      { step: 'Joint Cutting, Edging & Cleanup', description: 'Control joints and tooled edges are placed for a clean, durable finish, and we tie the new walkway smoothly into any adjoining driveway, patio, or step.' },
    ],
    included: [
      'Path layout and width consultation for your specific use case',
      'Excavation to proper subgrade depth',
      'Compacted aggregate base (4-6")',
      '4" reinforced slab',
      'Broom or slip-resistant finish selected for wet-weather traction',
      'Tooled edges and properly spaced control joints',
      'ADA-compliant slope, width, and warning surfaces for commercial routes',
      'Seamless transitions at driveways, steps, and patios, plus full cleanup',
    ],
    standOut: [
      { title: 'We Build the Base Others Skip', description: "Narrow slabs like walkways are the ones most often poured on minimal base prep by crews trying to save time — we compact the same aggregate base under a 3-foot walkway as we do under a driveway, because clay soil doesn't care how wide the slab is." },
      { title: 'ADA Expertise for Commercial Clients', description: 'We design and build to current ADA slope, width, and detectable-warning requirements for businesses, HOAs, schools, and churches, reducing your liability exposure on public-facing property.' },
      { title: 'Trip-Hazard Prevention as a Design Priority', description: "Joint spacing and base depth are chosen specifically to control the differential settlement that creates the lifted, uneven joints most common trip-and-fall claims come from." },
      { title: 'Clean Tie-Ins to Existing Concrete', description: "We match grade, joint pattern, and finish texture where new walkways meet existing driveways or patios so the connection looks intentional, not patched." },
      { title: 'Local Code Familiarity', description: 'From HOA architectural guidelines to municipal right-of-way sidewalk requirements across Dallas, Plano, Frisco, and neighboring cities, we know what each jurisdiction expects before we pour.' },
    ],
    whoBenefits: [
      { title: 'Homeowners with Cracked or Uneven Front Walks', description: 'A heaved or settled walkway section is a fall risk and one of the most noticeable curb appeal problems on an otherwise well-kept property.' },
      { title: 'Property Managers and HOAs', description: 'Common-area walkways carry liability exposure when they deteriorate — we handle multi-unit and community-wide replacement projects on a phased schedule.' },
      { title: 'Businesses, Schools, and Churches', description: 'Public-facing properties need ADA-compliant accessible routes, and we design curb ramps, width, and slope to meet current standards.' },
      { title: 'Elderly Homeowners and Their Families', description: 'A slip-resistant, properly graded walkway with no trip hazards is one of the most practical home-safety upgrades for aging in place.' },
      { title: 'Homeowners Adding Landscape Pathways', description: "New garden paths, side-yard access routes, or backyard connections to a patio or shed all need the same base prep as a front walkway to avoid future heaving." },
    ],
    faqs: [
      { question: 'How wide should a residential walkway be?', answer: "We recommend a minimum of 3 feet for a side-yard or utility path, and 4 feet for a front entry walkway. For routes that need to accommodate wheelchairs or accessibility, we build to a minimum 4-5 foot ADA-compliant width." },
      { question: 'Can you match a new walkway to my existing patio or driveway?', answer: "We can closely match color and finish texture, though there will always be some natural variation since the existing concrete has aged and weathered differently than a fresh pour." },
      { question: 'Why do walkways heave more than driveways?', answer: "Narrower slabs are more sensitive to inconsistent base compaction and clay soil movement because there's less mass to resist differential lift. We compact aggregate base to the same standard under walkways as we do under driveways to prevent this." },
      { question: 'Do you handle ADA-compliant walkways for businesses?', answer: "Yes. We build commercial walkways and curb ramps to current ADA requirements for width, running slope, cross-slope, and detectable warning surfaces, and we're familiar with how local Dallas-area jurisdictions enforce them." },
      { question: 'How long does a walkway installation take?', answer: "A typical residential front walkway takes 1-2 days from excavation to finish. Larger commercial routes or ones requiring multiple curb ramps can take longer depending on scope." },
      { question: 'Can a walkway be poured in a curve instead of a straight line?', answer: "Yes, we form curved walkways regularly for a more natural look through landscaping. Curved forms take slightly more labor to set correctly, which we account for in the estimate." },
    ],
  },
  'concrete-foundations': {
    about: [
      "The foundation is the one part of a building nobody sees and everybody depends on, and North Texas soil makes that job harder than almost anywhere else in the country. The Blackland Prairie and Eagle Ford clay that runs under most of the Dallas metro is highly expansive — it can absorb enough water to swell several inches during a wet spring, then shrink back down during a dry August, and that seasonal movement is what cracks foundations that weren't designed for it.",
      "We install foundations engineered specifically for that condition, most commonly post-tension slabs, which use steel cables stressed after the pour to keep the slab in compression and resist the flexing that expansive clay causes. Conventional rebar-reinforced slabs and pier-and-beam foundations both still have their place depending on the site, soil report, and structure — we work from geotechnical data and structural engineering, not a default answer.",
      "Every foundation we pour also accounts for what happens around it, not just under it. Drainage grading, moisture barriers, and plumbing rough-in coordination all affect long-term foundation performance, and getting them wrong is a major reason foundations that were built to spec still develop problems five or ten years later.",
    ],
    process: [
      { step: 'Soil Report & Engineering', description: 'We work from a geotechnical soil report and a licensed structural engineer\'s design to determine foundation type, slab thickness, and reinforcement — post-tension, conventional rebar, or pier and beam.' },
      { step: 'Permitting', description: 'We pull all required building permits and schedule the inspections your municipality requires at each construction stage before work begins.' },
      { step: 'Excavation & Plumbing Rough-In', description: 'The site is excavated and graded to design depth, underground plumbing is roughed in and pressure-tested, and a vapor barrier is installed before any steel goes down.' },
      { step: 'Reinforcement Placement & Pour', description: 'Post-tension cables or rebar are placed and inspected per the engineer\'s stamped plan, then concrete is poured and mechanically consolidated in a single continuous placement.' },
      { step: 'Curing, Stressing & Inspection', description: 'The slab cures under controlled conditions, post-tension cables are stressed on schedule if applicable, and all required city and engineering inspections are completed before framing begins.' },
    ],
    included: [
      'Coordination with your structural engineer and geotechnical report',
      'Foundation type recommendation matched to your soil conditions',
      'Full permitting and inspection scheduling',
      'Vapor barrier and moisture protection installation',
      'Post-tension cables or rebar placed to stamped engineering spec',
      'Plumbing rough-in coordination and pressure testing before pour',
      'Mechanically consolidated pour with no cold joints',
      'Post-pour grading plan to direct water away from the new foundation',
    ],
    standOut: [
      { title: 'Deep Familiarity with Blackland Prairie Clay', description: "We've poured foundations across the full range of DFW soil conditions, from the heavy clay of South Dallas to the rockier ground further north, and we design reinforcement and drainage around what's actually under your lot." },
      { title: 'Post-Tension Specialization', description: 'Post-tension slabs are the standard for new residential construction on expansive clay in North Texas, and we have the crews and cable-stressing experience to install them correctly — this is not a system every concrete contractor is equipped for.' },
      { title: 'Engineer and Geotechnical Relationships', description: "We work directly with licensed structural engineers and can coordinate soil testing if you don't already have a current geotechnical report, rather than pouring off a generic plan." },
      { title: 'Multi-City Code Fluency', description: 'Foundation permitting and inspection requirements differ across Dallas, Plano, Frisco, McKinney, and the rest of the metro — we handle that variation so your project doesn\'t stall on a permitting issue.' },
      { title: 'Moisture Management Built In', description: "We plan pre-pour and post-pour soil moisture management, including grading and downspout direction, since keeping soil moisture consistent around the foundation is as important as the pour itself for long-term performance." },
    ],
    whoBenefits: [
      { title: 'Custom Home Builders and General Contractors', description: 'We work as a trusted foundation subcontractor on new builds, coordinating scheduling and inspections directly with your project timeline.' },
      { title: 'Homeowners Building an Addition', description: 'Room additions, garage conversions, and accessory structures need a foundation engineered to tie into or match the performance of your existing home.' },
      { title: 'Owners of Lots with Difficult Soil', description: "If a geotechnical report flags high plasticity clay or fill soil, we design a foundation system — often post-tension — specifically suited to that condition." },
      { title: 'Custom Home Buyers on Undeveloped Land', description: 'New construction on raw DFW lots needs soil testing and an engineered foundation before anything else gets built, and we manage that first critical step.' },
      { title: 'Commercial Developers', description: 'Slab-on-grade foundations for retail, office, and light industrial buildings need the same engineering rigor as residential work, scaled to commercial loads and code.' },
    ],
    faqs: [
      { question: 'What type of foundation is best for Dallas soil?', answer: "Post-tension slab foundations are the most common choice for new residential construction in North Texas because the stressed cables keep the slab in compression, which resists the flexing caused by expansive clay far better than a conventional slab." },
      { question: 'How does clay soil actually damage a foundation?', answer: "Expansive clay absorbs water and swells during wet periods, then dries and shrinks during Texas summers. That repeated swell-shrink cycle creates uneven movement under the slab, and over years it can crack a foundation that wasn't engineered to handle it." },
      { question: 'Do you repair existing foundations?', answer: "We focus on new foundation installation for additions, new construction, and accessory structures. For repair work on an existing home's settled foundation, we can refer you to foundation repair specialists we trust in the Dallas area." },
      { question: 'How long does a foundation project take start to finish?', answer: "The pour itself typically takes 1-2 days, but the full process — soil testing, engineering, permitting, excavation, plumbing rough-in, and cure — usually spans 3-5 weeks depending on your city's inspection scheduling." },
      { question: 'Is post-tension more expensive than a conventional slab?', answer: "Post-tension typically costs more upfront than a conventional rebar slab, but for expansive clay soil it usually performs better long-term and is what most structural engineers spec for new residential construction in this region." },
      { question: 'What inspections are required during a foundation pour?', answer: "Most DFW municipalities require a pre-pour inspection of the steel or cable placement and plumbing rough-in, and some require a post-tension stressing verification. We schedule and coordinate all required inspections as part of the project." },
    ],
  },
  'retaining-walls': {
    about: [
      "A retaining wall has one job that sounds passive but is entirely structural: hold back a slope of soil that wants to move downhill. Get the engineering wrong and the wall doesn't just crack — it leans, bulges, or fails outright, usually after a heavy DFW rain event saturates the soil behind it and adds hydrostatic pressure the wall was never designed to resist.",
      "That drainage behind the wall is the part most walls fail on, not the wall face itself. We build a gravel backfill zone with filter fabric and weep holes or drain tile behind every wall we construct, so water pressure has somewhere to go instead of pushing directly against the concrete. Combined with a properly sized reinforced footer below grade, this is what separates a retaining wall that lasts decades from one that needs replacing in five years.",
      "North Texas yards often have exactly the kind of grade changes and erosion issues retaining walls solve — sloped lots near creeks and floodplains, backyards graded toward a foundation instead of away from it, or simply a desire to create a flat, usable terrace out of a hillside. We design each wall for the actual soil pressure and drainage conditions on your specific property, not a generic height chart.",
    ],
    process: [
      { step: 'Site & Grade Assessment', description: 'We evaluate the slope, existing drainage patterns, soil type, and anything the wall needs to protect — a foundation, a patio, a driveway — before designing anything.' },
      { step: 'Engineering & Drainage Design', description: 'Wall height, thickness, footer size, and the drainage system behind it are calculated based on the lateral soil pressure your specific site generates, with a stamped engineering plan for any wall over 4 feet.' },
      { step: 'Footer Excavation & Pour', description: 'A reinforced concrete footer is excavated below grade and poured first, sized to anchor the wall and distribute its load to stable soil beneath the frost and moisture-active zone.' },
      { step: 'Wall Construction', description: 'The wall is built up to design height with proper steel reinforcement, using either poured concrete or block construction depending on the design and your aesthetic preference.' },
      { step: 'Drainage Install & Backfill', description: 'Gravel backfill, filter fabric, and weep holes or drain tile are installed behind the wall, then backfill soil is placed and compacted in controlled lifts to avoid overloading the fresh concrete.' },
    ],
    included: [
      'Site grading and drainage pattern assessment',
      'Engineered wall design sized to your soil\'s lateral pressure',
      'Reinforced concrete footer poured below grade',
      'Steel-reinforced wall construction to design height',
      'Gravel backfill with filter fabric behind the wall',
      'Weep holes or drain tile to relieve hydrostatic pressure',
      'Compacted backfill placed in controlled lifts',
      'Finish grading and tie-in to surrounding landscaping',
    ],
    standOut: [
      { title: 'Drainage-First Engineering', description: 'We design the drainage system behind the wall with the same rigor as the wall itself, since inadequate drainage — not weak concrete — is the cause of the vast majority of retaining wall failures we see in this region.' },
      { title: 'Experience on Steep DFW Terrain', description: "From bluff lots near White Rock Lake to graded subdivisions on rolling Collin County terrain, we've engineered walls for a wide range of North Texas slope conditions, including tiered designs for significant grade changes." },
      { title: 'Built for Heavy Rain Events', description: "Dallas gets intense, fast rainfall that can quickly saturate soil behind a poorly drained wall — we size drainage capacity for real regional rain intensity, not a minimal code baseline." },
      { title: 'Footer Depth Calibrated to Expansive Soil', description: "Footer depth accounts for the active moisture zone in expansive DFW clay so the wall's foundation stays stable through the same wet-dry cycles that move everything else on the property." },
      { title: 'Finish Options That Match Your Home', description: "Beyond structural block, we offer form-finished and faced concrete options so the wall complements your home's exterior rather than looking purely utilitarian." },
    ],
    whoBenefits: [
      { title: 'Homeowners on Sloped Lots', description: 'A properly engineered wall turns an unusable slope into flat, functional yard space while stopping soil erosion at the same time.' },
      { title: 'Properties Near Creeks or Floodplain Edges', description: 'Erosion control is critical on lots adjacent to drainage easements or waterways common throughout the Dallas metro, and a retaining wall is often the most durable solution.' },
      { title: 'Homeowners with Drainage Flowing Toward the House', description: "When yard grade sends water toward the foundation instead of away from it, a retaining wall combined with regrading can redirect that flow permanently." },
      { title: 'Owners of Leaning or Failing Existing Walls', description: 'If an older wall — especially a timber or unreinforced masonry one — is bulging or leaning, we design a proper concrete replacement with correct drainage this time.' },
      { title: 'Homeowners Creating Tiered Landscape Beds', description: "Multi-level retaining walls let homeowners build terraced gardens, patios, or play areas on lots that would otherwise be too steep to use." },
    ],
    faqs: [
      { question: 'How tall can a retaining wall be without an engineer?', answer: "Walls up to about 4 feet can generally use standard, pre-established designs. Anything taller than 4 feet typically requires a stamped engineering plan from a licensed structural engineer, which we coordinate as part of the project." },
      { question: 'What actually causes retaining walls to fail?', answer: "The most common cause by far is inadequate drainage behind the wall — water pressure builds up with nowhere to go and pushes the wall outward. Gravel backfill, filter fabric, and weep holes or drain tile prevent this." },
      { question: 'Is a tiered wall better than one tall wall?', answer: "For grade changes over about 4-5 feet, tiered walls are often the better choice. They distribute soil pressure across multiple shorter walls instead of one tall one, which is generally more stable and often more visually appealing." },
      { question: 'Do retaining walls really need a concrete footer?', answer: "Yes, a properly sized reinforced concrete footer below grade is essential. It anchors the wall and spreads its load to stable soil below the layer that moves the most with seasonal moisture changes." },
      { question: 'How much does a retaining wall cost per linear foot?', answer: "Cost varies with wall height, soil conditions, and finish choice, since taller walls require deeper footers and more steel. We provide a detailed linear-foot estimate after the site assessment so you know exactly what drives the price." },
      { question: 'How long does a retaining wall project take?', answer: "A typical residential retaining wall takes about 1-2 weeks from footer excavation through backfill and finish grading, depending on wall length, height, and whether it's a single wall or a tiered system." },
    ],
  },
  'stamped-concrete': {
    about: [
      "Stamped concrete exists to solve one problem: you want the look of natural stone, brick, or slate without the cost, the irregular joints that collect weeds, or the long-term maintenance those materials demand. A textured stamp mat is pressed into the surface while the concrete is still plastic, and combined with color hardener and a release agent, it produces a multi-toned, realistic finish that reads as real stone from a few feet away — at roughly 30-50% less than importing and setting actual cut stone.",
      "The finish quality on stamped concrete depends almost entirely on two things most homeowners never see quoted separately: the base slab underneath and the coloring technique. A stamped surface still cracks like plain concrete if the base isn't properly compacted and the slab isn't thick enough — decorative texture doesn't add structural strength. And the difference between a flat, artificial-looking stamp job and one that reads as genuine stone comes down to color hardener depth, release agent technique, and hand-detailing around edges and curves that a stamp mat can't reach.",
      "We offer the full range of pattern families — ashlar slate, flagstone, cobblestone, brick, and wood plank — and every stamped project we finish gets a UV-resistant sealer, which matters more here than almost anywhere in the country given how much direct sun North Texas concrete takes year-round.",
    ],
    process: [
      { step: 'Pattern & Color Consultation', description: "We bring physical samples so you can see and touch pattern and color combinations in person before committing, and talk through what pairs well with your home's exterior." },
      { step: 'Base Prep & Structural Pour', description: 'We compact the base and pour the slab to full structural thickness exactly as we would for a plain finish, because the decorative texture applied later adds no strength on its own.' },
      { step: 'Color Hardener & Release Agent', description: 'Color hardener is broadcast and worked into the surface for a denser, richer-colored top layer, then a release agent is applied so the stamp mats lift cleanly without sticking.' },
      { step: 'Stamping & Hand Detailing', description: 'Stamp mats are pressed into the surface while it\'s still plastic, and our crew hand-details borders, curves, and edges the mats can\'t reach for a consistent, natural-looking pattern.' },
      { step: 'Sealing & Care Walkthrough', description: 'After proper cure, we apply a UV-resistant sealer to lock in color and protect the surface, then walk you through the resealing schedule to keep it looking new.' },
    ],
    included: [
      'In-person pattern and color sample consultation',
      'Full-thickness structurally reinforced base slab',
      'Integral or color hardener coloring for depth and durability',
      'Release agent application for authentic multi-tone texture',
      'Hand-detailing around borders, curves, and edges',
      'Control joints placed to follow the pattern lines where possible',
      'UV-resistant sealer coat',
      'Written maintenance and resealing guidance',
    ],
    standOut: [
      { title: 'A Real Pattern Library, Not Two Options', description: 'We stock ashlar slate, flagstone, cobblestone, running bond brick, and wood plank stamp mats, so you\'re choosing the pattern that fits your home rather than settling for whatever one contractor happens to own.' },
      { title: 'Hand-Detailing Crews', description: "Stamp mats can't reach tight borders, curves around a pool, or edges against a house — our crews hand-tool those areas so the pattern reads as continuous instead of trailing off at the edges." },
      { title: 'Heat-Smart Color and Sealer Choices', description: 'We help clients choose colors and sealer sheens that hold up to 100°F+ direct sun exposure without excessive fading or becoming uncomfortably hot underfoot, which is a real consideration for pool decks and west-facing patios here.' },
      { title: 'Resealing Relationship, Not a One-Time Job', description: 'We stay available for the periodic resealing stamped concrete needs in this climate, so the color and protection you paid for at installation doesn\'t fade out in a couple of summers from neglect.' },
      { title: 'Real Cost Savings Over Imported Stone', description: 'Natural stone has to be quarried, cut, and set individually with mortar joints that need maintenance — stamped concrete delivers a comparable look as one monolithic, low-maintenance slab at a fraction of the material and labor cost.' },
    ],
    whoBenefits: [
      { title: 'Homeowners Who Want a Stone Look Without Stone Pricing', description: 'Stamped concrete delivers 80-90% of the visual impact of natural stone or brick hardscaping at a significantly lower installed cost.' },
      { title: 'Pool Owners Upgrading Deck Surfaces', description: 'Lighter stamped patterns with a slip-resistant sealer additive are a popular upgrade from plain broom-finished pool decks, both for looks and for staying cooler in the sun.' },
      { title: 'Homeowners Refreshing a Plain Patio or Driveway', description: 'An existing plain slab in good structural condition can sometimes be overlaid or a new stamped section added, giving a decorative upgrade without full replacement in every case.' },
      { title: 'Builders and Spec Home Developers', description: 'Stamped concrete is a common upgrade feature builders offer in North Texas new construction to differentiate a home\'s curb appeal from standard broom-finished neighbors.' },
      { title: 'HOA Communities with Design Standards', description: 'Many DFW HOAs have aesthetic requirements for driveways and walkways, and stamped concrete patterns often satisfy design guidelines that plain concrete doesn\'t meet.' },
    ],
    faqs: [
      { question: 'How long does stamped concrete last in Dallas?', answer: "Properly installed and maintained stamped concrete typically lasts 25 years or more structurally. The key to keeping it looking good that whole time is resealing every 2-3 years, since our sun exposure breaks down sealer faster than in milder climates." },
      { question: 'Is stamped concrete slippery when wet?', answer: "The textured pattern itself provides some traction, but a sealed surface can get slick when wet, especially around pools. We can add a non-slip additive to the sealer for any area where that's a concern." },
      { question: 'What is the best stamp pattern for a driveway?', answer: "Ashlar slate and cobblestone are the most popular driveway patterns in our area because their irregular joint lines complement most home exterior styles and hide minor tire wear better than a uniform pattern like running-bond brick." },
      { question: 'How often does stamped concrete need to be resealed?', answer: "In North Texas we recommend resealing every 2-3 years due to the intensity of UV exposure here. Skipping resealing doesn't damage the concrete itself, but the color fades and the surface loses its water and stain resistance." },
      { question: 'Does stamped concrete cost more than plain concrete?', answer: "Yes, stamped concrete typically costs more than plain broom-finished concrete due to the color hardener, stamp mat labor, and sealer, but it still runs well below the cost of installing equivalent natural stone or pavers." },
      { question: 'Can cracks be repaired without ruining the pattern?', answer: "Small cracks along a joint line can often be filled and color-matched with minimal visual impact. A crack running through the middle of a pattern section is more noticeable to repair invisibly, which is why correct control joint placement during installation matters so much." },
    ],
  },
  'commercial-concrete': {
    about: [
      "Commercial concrete work operates under a different rulebook than residential flatwork. Parking lots, warehouse floors, loading docks, and commercial sidewalks have to be engineered for repeated heavy vehicle traffic or forklift loads, meet ADA accessibility requirements that carry real liability exposure, and very often need to be built in phases so the business on-site never fully shuts down.",
      "We work directly with general contractors, property managers, and business owners across the Dallas-Fort Worth metro on projects ranging from a single storefront sidewalk to a full parking lot repour. That means coordinating around your operating hours, sequencing pours so tenants and customers retain access throughout construction, and delivering documentation — inspection sign-offs, concrete strength test results — that satisfies your GC, lender, or municipality.",
      "Load specification is where commercial work diverges most from residential. A standard driveway thickness doesn't come close to what a loaded delivery truck or forklift requires, and we design slab thickness, base depth, and reinforcement around your actual traffic class rather than a generic minimum.",
    ],
    process: [
      { step: 'Scope Assessment & Bid', description: "We evaluate the full project scope — traffic loads, square footage, timeline constraints, and any phasing requirements — and provide a detailed bid a GC or property manager can act on." },
      { step: 'Engineering & Permitting', description: 'Slab thickness, reinforcement, and jointing are designed to the required load class, and we handle permit applications and municipal approvals before mobilizing.' },
      { step: 'Phased Scheduling', description: 'We build a phasing plan around your business hours or tenant access needs, often running pours during off-hours or weekends to minimize disruption to daily operations.' },
      { step: 'Construction', description: 'Subgrade compaction, reinforcement placement, and pours proceed phase by phase, with concrete strength testing (cylinder breaks) documented at each stage for your records.' },
      { step: 'Inspection & Closeout', description: "All work passes required municipal inspections, we walk the completed site with you or your GC, and provide closeout documentation for your project file." },
    ],
    included: [
      'Site evaluation and traffic/load classification',
      'Engineered slab thickness and reinforcement plan',
      'Full permitting and municipal inspection coordination',
      'Phased or off-hours scheduling to minimize business disruption',
      'Compacted subgrade and reinforced pour per traffic class',
      'ADA-compliant parking, ramp, and route layout where applicable',
      'Concrete strength testing and documentation (cylinder breaks)',
      'Final inspection sign-off and project closeout package',
    ],
    standOut: [
      { title: 'Multi-City Commercial Code Fluency', description: 'Commercial permitting and inspection requirements differ across Dallas, Plano, Frisco, Irving, and the rest of the metro — we\'ve worked all of them and know what each jurisdiction expects before we bid.' },
      { title: 'Night and Weekend Pour Capability', description: "We regularly schedule commercial pours during off-hours specifically so retail, restaurant, and office tenants don't lose business days to construction." },
      { title: 'Documented Quality Control', description: 'We provide concrete strength test results and inspection documentation as standard practice, giving your GC, lender, or property owner a verifiable record of the work.' },
      { title: 'ADA Compliance That Reduces Liability', description: "We design parking layouts, curb ramps, and accessible routes to current ADA standards, which protects property owners from the accessibility complaints and liability that outdated concrete work invites." },
      { title: 'Reliable Communication with GCs and PMs', description: "We understand commercial projects run on schedules with real financial consequences for delay, and we communicate proactively with the general contractor or property manager rather than going dark between milestones." },
    ],
    whoBenefits: [
      { title: 'General Contractors on Commercial Builds', description: 'We work as a dependable concrete subcontractor on new commercial construction, coordinating tightly with your overall project schedule.' },
      { title: 'Property Managers and REITs', description: 'Parking lot repairs, resurfacing, and sidewalk maintenance across a property portfolio need a contractor who can handle scheduling and documentation at scale.' },
      { title: 'Warehouse and Distribution Facility Owners', description: 'Forklift and heavy-truck traffic requires slab specifications well beyond standard flatwork, and we design floors and loading areas to handle those loads without premature cracking.' },
      { title: 'Retail and Restaurant Owners', description: "Storefront sidewalks, patios, and accessible entrances need to meet ADA requirements while staying open for business during construction." },
      { title: 'Schools, Churches, and Municipalities', description: 'Public infrastructure projects — sidewalks, parking, accessible routes — require the code compliance and documentation these institutions are held to.' },
    ],
    faqs: [
      { question: 'Can you work around our business hours?', answer: "Yes. We regularly schedule commercial pours for early mornings, evenings, or weekends specifically to minimize disruption to customers, tenants, and daily operations." },
      { question: 'What thickness is required for a commercial parking lot?', answer: "Standard passenger vehicle parking areas typically run 5-6 inches over a compacted aggregate base. Areas with regular heavy truck or delivery traffic, like loading zones, often require 8 inches or more with additional reinforcement." },
      { question: 'Do you handle ADA compliance for parking lots and sidewalks?', answer: "Yes. We design and install ADA-compliant accessible parking spaces, curb ramps with detectable warning surfaces, and accessible routes that meet current federal and local requirements." },
      { question: 'How long does a commercial concrete project take?', answer: "Timeline depends heavily on scope — a small storefront sidewalk might take 2-3 days, while a full parking lot repour with phased scheduling can span several weeks. We provide a project-specific timeline as part of every bid." },
      { question: 'What PSI strength do you use for commercial concrete?', answer: "We typically spec 4,000 PSI concrete for standard commercial flatwork and parking areas, increasing to higher strength mixes for heavy-load applications like loading docks or industrial floors, based on the engineered load requirements." },
      { question: 'How does the bidding process work for GCs?', answer: "We provide detailed line-item bids based on plans and specifications, including thickness, reinforcement, and jointing per the engineer of record. We're comfortable working from architectural drawings and coordinating directly with your project team." },
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const content = serviceContent[params.slug]
  if (!content) notFound()

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: service.name, href: `/services/${service.slug}` },
  ]

  return (
    <>
      <ServiceSchema name={service.name} description={service.metaDescription} />

      <section className="relative bg-brand-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.headline} fill sizes="100vw" className="object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{service.headline}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{service.heroSubhead}</p>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">What Are {service.name}?</h2>
              {content.about.map((p, i) => (
                <p key={i} className="text-brand-gray leading-relaxed mb-4">{p}</p>
              ))}
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image src={service.image} alt={`${service.name} project by Dallas Concrete Solutions`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">What It Looks Like Working With Us</h2>
          <div className="space-y-6">
            {content.process.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-1">{step.step}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">What&apos;s Included From Start to Finish</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.included.map((item) => (
              <div key={item} className="flex gap-3 bg-white border border-brand-gray-mid/30 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-brand-gray leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Stand Out */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-brand-charcoal mb-8 text-center">
            <Star className="w-6 h-6 text-brand-blue" />
            How Dallas Concrete Solutions Stands Out in DFW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.standOut.map((item) => (
              <div key={item.title} className="bg-white border border-brand-gray-mid/30 rounded-lg p-6">
                <h3 className="font-semibold text-brand-charcoal mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-brand-charcoal mb-8 text-center">
            <Users className="w-6 h-6 text-brand-blue" />
            Who Benefits From {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.whoBenefits.map((item) => (
              <div key={item.title} className="bg-brand-gray-light rounded-lg p-6">
                <h3 className="font-semibold text-brand-charcoal mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
            Areas We Offer {service.name} In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/${service.slug}/${c.slug}`}
                className="flex items-center gap-3 bg-white border border-brand-gray-mid/30 rounded-lg p-4 hover:border-brand-blue transition-colors group"
              >
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="font-medium text-brand-charcoal">{c.name}, TX</span>
                <ArrowRight className="w-4 h-4 text-brand-blue ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">Frequently Asked Questions</h2>
          <FaqAccordion faqs={content.faqs} />
        </div>
      </section>

      <CtaSection />
    </>
  )
}

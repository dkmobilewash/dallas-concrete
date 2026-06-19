export interface City {
  slug: string
  name: string
  county: string
  metaTitle: string
  metaDescription: string
  headline: string
  subhead: string
  landmarks: string[]
  neighborhoods: string[]
  intro: string
}

export const cities: City[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Dallas TX',
    metaDescription: 'Trusted concrete contractor serving Dallas, TX. Driveways, patios, foundations, and more. Family-owned, locally operated. Free estimates — 214-239-0709.',
    headline: 'Concrete Contractor in Dallas, TX',
    subhead: 'Residential and commercial concrete services throughout Dallas and surrounding neighborhoods.',
    landmarks: ['White Rock Lake', 'Deep Ellum', 'Uptown Dallas', 'Bishop Arts District'],
    neighborhoods: ['Oak Cliff', 'Lake Highlands', 'Preston Hollow', 'North Dallas', 'East Dallas'],
    intro: 'Dallas Concrete Solutions is based in Dallas and serves homeowners and businesses across the entire city. From Preston Hollow driveways to Oak Cliff patios, we understand the unique demands that North Texas heat and clay soil place on concrete work.',
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Irving TX',
    metaDescription: 'Professional concrete services in Irving, TX. Driveways, patios, walkways, and foundations. Serving all Irving neighborhoods. Call 214-239-0709.',
    headline: 'Concrete Contractor in Irving, TX',
    subhead: 'Serving Irving homeowners and businesses with quality concrete work at honest prices.',
    landmarks: ['Las Colinas', 'Toyota Music Factory', 'Lake Carolyn'],
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'North Irving', 'South Irving', 'West Irving'],
    intro: 'Irving is one of our most active service areas, from the established neighborhoods of Valley Ranch to the growing commercial corridor along SH-114. We handle both residential concrete projects and commercial work throughout Irving and the Las Colinas urban center.',
  },
  {
    slug: 'garland',
    name: 'Garland',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Garland TX',
    metaDescription: 'Concrete driveways, patios, and more in Garland, TX. Local concrete company serving Garland neighborhoods. Free estimates — 214-239-0709.',
    headline: 'Concrete Contractor in Garland, TX',
    subhead: 'Quality concrete installations for Garland residential and commercial properties.',
    landmarks: ['Lake Ray Hubbard', 'Spring Creek Forest Preserve', 'Firewheel Town Center'],
    neighborhoods: ['North Garland', 'South Garland', 'Duck Creek', 'Firewheel'],
    intro: 'Garland is one of the most densely populated suburbs in the Dallas metro, with a mix of older established neighborhoods and newer developments near Lake Ray Hubbard. We serve the full range of Garland concrete needs, from driveway replacements in older subdivisions to new patios in lakeside communities.',
  },
  {
    slug: 'grand-prairie',
    name: 'Grand Prairie',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Grand Prairie TX',
    metaDescription: 'Concrete services in Grand Prairie, TX. Residential and commercial concrete — driveways, patios, foundations. Call Dallas Concrete Solutions.',
    headline: 'Concrete Contractor in Grand Prairie, TX',
    subhead: 'Trusted concrete work for Grand Prairie homes and businesses.',
    landmarks: ['Epic Waters Indoor Waterpark', 'Joe Pool Lake', 'Lone Star Park'],
    neighborhoods: ['South Grand Prairie', 'North Grand Prairie', 'Lynn Creek', 'Dalworth Park'],
    intro: 'Grand Prairie sits at the geographic center of the Dallas-Fort Worth metro, and we serve this community regularly for both residential and commercial projects. The Joe Pool Lake area and the neighborhoods around Epic Waters are active areas for our driveway and patio work.',
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    county: 'Dallas County',
    metaTitle: 'Concrete Contractor Mesquite TX',
    metaDescription: 'Concrete driveways, patios, and walkways in Mesquite, TX. Local concrete contractor serving all Mesquite neighborhoods. Free estimates.',
    headline: 'Concrete Contractor in Mesquite, TX',
    subhead: 'Residential and commercial concrete solutions for Mesquite and East Dallas County.',
    landmarks: ['Mesquite Rodeo', 'Town East Mall', 'Mesquite Golf Club'],
    neighborhoods: ['North Mesquite', 'South Mesquite', 'Sunnyvale adjacent', 'Mesquite Industrial District'],
    intro: 'Mesquite is a solid service area for us, with a large inventory of homes built in the 1970s through 1990s that are prime candidates for driveway replacement and patio upgrades. We also handle commercial work in the Mesquite industrial corridor along I-635.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Plano TX',
    metaDescription: 'Professional concrete services in Plano, TX. Driveways, patios, stamped concrete, and foundations. Serving all Plano neighborhoods. Call 214-239-0709.',
    headline: 'Concrete Contractor in Plano, TX',
    subhead: "Premium concrete work for Plano's residential and corporate communities.",
    landmarks: ['Legacy West', 'The Shops at Legacy', 'Arbor Hills Nature Preserve'],
    neighborhoods: ['West Plano', 'East Plano', 'Legacy', 'Haggard Estates', 'Russell Creek'],
    intro: "Plano's combination of high-value residential neighborhoods and major corporate campuses creates strong demand for quality concrete work. From stamped concrete patios in West Plano to commercial concrete around Legacy West, we bring the same attention to detail to every Plano project.",
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor Frisco TX',
    metaDescription: 'Concrete driveways, patios, and more in Frisco, TX. New construction and replacement concrete for Frisco homes and businesses. Free estimates.',
    headline: 'Concrete Contractor in Frisco, TX',
    subhead: "Serving Frisco's growing residential communities with quality concrete installations.",
    landmarks: ['PGA Frisco', 'Frisco Square', 'Toyota Stadium'],
    neighborhoods: ['Stonebriar', 'Eldorado', 'Starwood', 'Lebanon Road Corridor', 'The Star District'],
    intro: 'Frisco is one of the fastest-growing cities in the country, which means a constant stream of new construction and early replacement work in older neighborhoods. We work with Frisco homeowners and builders on everything from new driveway pours to decorative stamped concrete for outdoor living areas.',
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    metaTitle: 'Concrete Contractor McKinney TX',
    metaDescription: 'Concrete services in McKinney, TX. Trusted local concrete contractor for driveways, patios, foundations, and commercial work. Call 214-239-0709.',
    headline: 'Concrete Contractor in McKinney, TX',
    subhead: "Quality concrete work for McKinney's historic neighborhoods and new developments alike.",
    landmarks: ['Historic Downtown McKinney', 'Erwin Park', 'Craig Ranch'],
    neighborhoods: ['Historic Downtown', 'Craig Ranch', 'Stonebridge Ranch', 'Tucker Hill', 'Adriatica'],
    intro: 'McKinney offers an interesting mix of historic downtown properties, established mid-century neighborhoods, and new master-planned communities like Stonebridge Ranch. We serve all of them, bringing appropriate expertise whether the job is a sensitive historical infill walkway or a large new construction driveway in Craig Ranch.',
  },
]

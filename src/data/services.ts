export interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  metaTitle: string
  metaDescription: string
  heroSubhead: string
  icon: string
  image: string
  relatedSlugs: string[]
}

export const services: Service[] = [
  {
    slug: 'concrete-driveways',
    name: 'Concrete Driveways',
    shortName: 'Driveways',
    headline: 'Concrete Driveways in Dallas, TX',
    metaTitle: 'Concrete Driveway Installation Dallas TX',
    metaDescription: 'Professional concrete driveway installation and replacement in Dallas, TX. Get a free estimate from Dallas Concrete Solutions — 214-239-0709.',
    heroSubhead: 'Durable, professionally installed driveways built for North Texas conditions.',
    icon: 'Car',
    image: '/concrete-images/concrete-driveway-installation-wolf-creek-dallas.jpg',
    relatedSlugs: ['concrete-patios', 'concrete-walkways', 'stamped-concrete'],
  },
  {
    slug: 'concrete-patios',
    name: 'Concrete Patios',
    shortName: 'Patios',
    headline: 'Concrete Patios in Dallas, TX',
    metaTitle: 'Concrete Patio Installation Dallas TX',
    metaDescription: 'Custom concrete patio installation in Dallas and surrounding areas. Expand your outdoor living space. Free estimates — 214-239-0709.',
    heroSubhead: 'Transform your backyard into a functional, beautiful outdoor living area.',
    icon: 'Sofa',
    image: '/concrete-images/concrete-patio-installation-oak-cliff-dallas.jpg',
    relatedSlugs: ['stamped-concrete', 'concrete-walkways', 'concrete-driveways'],
  },
  {
    slug: 'concrete-walkways',
    name: 'Concrete Walkways',
    shortName: 'Walkways',
    headline: 'Concrete Walkways & Sidewalks in Dallas, TX',
    metaTitle: 'Concrete Walkway Installation Dallas TX',
    metaDescription: 'Concrete walkway and sidewalk installation in Dallas, TX. Safe, durable paths for residential and commercial properties. Free estimates.',
    heroSubhead: 'Safe, clean pathways that add curb appeal and function to your property.',
    icon: 'FootprintsIcon',
    image: '/concrete-images/garland-tx-commerical-concrete-sidewalk-installation.jpg',
    relatedSlugs: ['concrete-driveways', 'concrete-patios', 'stamped-concrete'],
  },
  {
    slug: 'concrete-foundations',
    name: 'Concrete Foundations',
    shortName: 'Foundations',
    headline: 'Concrete Foundation Services in Dallas, TX',
    metaTitle: 'Concrete Foundations Dallas TX',
    metaDescription: 'Expert concrete foundation installation and repair in Dallas, TX. Built to withstand North Texas soil conditions. Call 214-239-0709.',
    heroSubhead: 'Engineered foundations built for the unique challenges of North Texas soil.',
    icon: 'Building2',
    image: '/concrete-images/commcerical-concretet-slab-foundation-dallas.jpg',
    relatedSlugs: ['commercial-concrete', 'concrete-driveways'],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    shortName: 'Retaining Walls',
    headline: 'Concrete Retaining Walls in Dallas, TX',
    metaTitle: 'Concrete Retaining Walls Dallas TX',
    metaDescription: 'Custom concrete retaining wall installation in Dallas. Solve drainage and erosion issues with lasting concrete solutions. Free estimates.',
    heroSubhead: 'Structural and decorative retaining walls that manage grade changes and protect your landscape.',
    icon: 'Layers',
    image: '/concrete-images/concrete-retention-wall-frisco-tx.jpg',
    relatedSlugs: ['concrete-foundations', 'concrete-patios'],
  },
  {
    slug: 'stamped-concrete',
    name: 'Stamped Concrete',
    shortName: 'Stamped Concrete',
    headline: 'Stamped Concrete Installation in Dallas, TX',
    metaTitle: 'Stamped Concrete Dallas TX | Decorative Concrete',
    metaDescription: 'Decorative stamped concrete for driveways, patios, and walkways in Dallas, TX. Premium finishes at competitive prices. Call 214-239-0709.',
    heroSubhead: 'The look of stone, brick, or slate — the durability of concrete.',
    icon: 'Palette',
    image: '/concrete-images/frisco-concrete-patio-isntallation.jpg',
    relatedSlugs: ['concrete-patios', 'concrete-driveways', 'concrete-walkways'],
  },
  {
    slug: 'commercial-concrete',
    name: 'Commercial Concrete',
    shortName: 'Commercial',
    headline: 'Commercial Concrete Services in Dallas, TX',
    metaTitle: 'Commercial Concrete Contractor Dallas TX',
    metaDescription: 'Commercial concrete services for Dallas businesses — parking lots, warehouse floors, sidewalks, and foundations. Licensed and insured.',
    heroSubhead: 'Scalable concrete solutions for commercial projects across the Dallas metro.',
    icon: 'Warehouse',
    image: '/concrete-images/commerical-concrete-slab-contractor-frisco.jpg',
    relatedSlugs: ['concrete-foundations', 'retaining-walls', 'concrete-driveways'],
  },
]

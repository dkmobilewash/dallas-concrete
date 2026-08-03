import Image from 'next/image'

const projects = [
  { src: '/concrete-images/concrete-driveway-isntallation-before-and-after-west-dallas.jpg', alt: 'Concrete driveway before and after in West Dallas', label: 'Driveway — West Dallas' },
  { src: '/concrete-images/concrete-patio-installation-oak-cliff-dallas.jpg', alt: 'Concrete patio installation in Oak Cliff, Dallas', label: 'Patio — Oak Cliff' },
  { src: '/concrete-images/commerical-concrete-slab-contractor-frisco.jpg', alt: 'Commercial concrete slab in Frisco', label: 'Commercial Slab — Frisco' },
  { src: '/concrete-images/concrete-driveway-installation-park-forest-plano-tx.jpg', alt: 'Concrete driveway installation in Park Forest, Plano', label: 'Driveway — Plano' },
  { src: '/concrete-images/concrete-retention-wall-frisco-tx.jpg', alt: 'Concrete retaining wall installation in Frisco', label: 'Retaining Wall — Frisco' },
  { src: '/concrete-images/garland-tx-commerical-concrete-sidewalk-installation.jpg', alt: 'Commercial concrete sidewalk installation in Garland', label: 'Sidewalk — Garland' },
]

export default function ProjectGallery() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">Recent Projects</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">Real work from real job sites across the Dallas-Fort Worth metro. Every project completed by our crew.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.src} className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{project.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

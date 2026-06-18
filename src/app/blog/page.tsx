import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'

export const metadata = buildMetadata({
  title: 'Concrete Tips & Resources | Dallas Concrete Solutions Blog',
  description: 'Helpful articles about concrete driveways, patios, foundations, and more for Dallas homeowners. Tips, guides, and project ideas from Dallas Concrete Solutions.',
  canonical: `${site.baseUrl}/blog`,
})

// TODO: Connect to CMS or add MDX blog posts
const posts = [
  { title: 'How to Prepare Your Property for a Concrete Driveway Pour', excerpt: 'Learn what steps homeowners should take before the crew arrives, from clearing the area to understanding the grading process.' },
  { title: 'Stamped Concrete vs. Pavers: Which Is Right for Your Dallas Patio?', excerpt: 'A practical comparison of stamped concrete and paver patios, covering cost, maintenance, durability, and aesthetics in North Texas conditions.' },
  { title: 'Understanding Concrete Curing in Texas Heat', excerpt: 'Why curing matters, how Dallas summers affect the process, and what your contractor should be doing to protect your new concrete.' },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Concrete Tips &amp; Resources for Dallas Homeowners</h1>
          <p className="text-lg text-white/80 max-w-2xl">Practical guides and insights to help you make informed decisions about your concrete projects.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-lg border border-brand-gray-mid/30 overflow-hidden">
                <div className="aspect-video bg-brand-gray-light flex items-center justify-center">
                  <span className="text-brand-gray text-sm">Image coming soon</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-semibold px-2 py-1 rounded mb-3">Coming Soon</span>
                  <h2 className="text-lg font-semibold text-brand-charcoal mb-2">{post.title}</h2>
                  <p className="text-brand-gray text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

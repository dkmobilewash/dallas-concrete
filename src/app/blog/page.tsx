import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import { ArrowRight } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Concrete Tips & Resources for Dallas Homeowners',
  description: 'Helpful articles about concrete driveways, patios, foundations, and more for Dallas homeowners. Tips, guides, and project ideas from Dallas Concrete Solutions.',
  canonical: `${site.baseUrl}/blog`,
})

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
]

const blogImages: Record<string, string> = {
  'how-to-prepare-property-for-concrete-driveway-pour': '/concrete-images/concrete-driveway-installation.jpg',
  'stamped-concrete-vs-pavers-dallas-patio': '/concrete-images/concrete-patio-installation-prosper-tx.jpg',
  'understanding-concrete-curing-texas-heat': '/concrete-images/concrete-installation-frisco-west-tx.jpg',
  'how-much-does-concrete-patio-cost-dallas': '/concrete-images/concrete-back-patio-contractor-hutchins-tx.jpg',
  'best-time-pour-concrete-north-texas': '/concrete-images/concrete-installation-chapel-creek-frisco-tx.jpg',
  'signs-concrete-driveway-needs-replacement': '/concrete-images/concrete-driveway-isntallation-before-and-after-west-dallas.jpg',
  'dallas-foundation-problems-clay-soil-concrete': '/concrete-images/concrete-foundation-installation-frisco-starwood-tx.jpg',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Concrete Tips &amp; Resources for Dallas Homeowners</h1>
          <p className="text-lg text-white/80 max-w-2xl">Practical guides and insights to help you make informed decisions about your concrete projects.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg border border-brand-gray-mid/30 overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  {blogImages[post.slug] ? (
                    <Image
                      src={blogImages[post.slug]}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-gray-light flex items-center justify-center">
                      <span className="text-brand-gray text-sm">Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <time dateTime={post.date} className="text-xs text-brand-gray">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2 className="text-lg font-semibold text-brand-charcoal mt-2 mb-2">{post.title}</h2>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brand-blue-dark text-sm font-medium group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

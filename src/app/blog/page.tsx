import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Concrete Tips & Resources | Dallas Concrete Solutions Blog',
  description: 'Helpful articles about concrete driveways, patios, foundations, and more for Dallas homeowners. Tips, guides, and project ideas from Dallas Concrete Solutions.',
  canonical: `${site.baseUrl}/blog`,
})

export default function BlogPage() {
  const posts = getAllPosts()

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
              <article key={post.slug} className="bg-white rounded-lg border border-brand-gray-mid/30 overflow-hidden group">
                <div className="aspect-video bg-brand-gray-light flex items-center justify-center">
                  <span className="text-brand-gray text-sm">Image coming soon</span>
                </div>
                <div className="p-6">
                  <time dateTime={post.date} className="text-xs text-brand-gray">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2 className="text-lg font-semibold text-brand-charcoal mt-2 mb-2">{post.title}</h2>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brand-orange text-sm font-medium group-hover:gap-2 transition-all">
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

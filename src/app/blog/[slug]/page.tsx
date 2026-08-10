import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import ArticleSchema from '@/components/seo/ArticleSchema'
import CtaSection from '@/components/sections/CtaSection'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `${site.baseUrl}/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ]

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
      />

      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">{post.title}</h1>
          <time dateTime={post.date} className="text-white/60 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
      </section>

      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-brand">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link href="/blog" className="inline-flex items-center text-brand-blue-dark hover:text-brand-charcoal font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />Back to All Articles
        </Link>
      </div>

      <CtaSection />
    </>
  )
}

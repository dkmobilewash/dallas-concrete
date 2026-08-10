import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-extrabold text-brand-charcoal mb-4">404</h1>
        <p className="text-xl text-brand-gray mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  )
}

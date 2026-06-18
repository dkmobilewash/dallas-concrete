import Button from '@/components/ui/Button'
import { site } from '@/data/site'

export default function HeroSection({ title, subtitle, showCtas = true }: { title: string; subtitle: string; showCtas?: boolean }) {
  return (
    <section className="bg-brand-charcoal text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">{subtitle}</p>
          {showCtas && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">Get Free Estimate</Button>
              <Button href={site.phoneHref} variant="secondary">Call {site.phone}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

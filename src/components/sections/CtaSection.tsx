import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { site } from '@/data/site'

export default function CtaSection() {
  return (
    <section className="bg-brand-blue py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Concrete Project?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get a free, no-obligation estimate for your residential or commercial concrete project in Dallas and surrounding areas.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-brand-gray-light font-bold px-8 py-4 rounded-md text-lg transition-colors">
            <Phone className="w-5 h-5" />{site.phone}
          </a>
          <Button href="/contact" variant="ghost">Request Estimate Online</Button>
        </div>
      </div>
    </section>
  )
}

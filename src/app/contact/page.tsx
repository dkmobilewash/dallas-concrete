import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import { Phone, Mail, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata = buildMetadata({
  title: 'Contact Us | Get a Free Concrete Estimate in Dallas TX',
  description: 'Contact Dallas Concrete Solutions for a free concrete estimate. Call 214-239-0709 or fill out our online form for driveways, patios, foundations, and more.',
  canonical: `${site.baseUrl}/contact`,
})

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <section className="bg-brand-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Get a Free Concrete Estimate in Dallas
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Tell us about your project and we&apos;ll provide a free, no-obligation estimate. You can also call us directly at any time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Request an Estimate</h2>
              <ContactForm
                services={services.map((s) => ({ slug: s.slug, name: s.name }))}
                cities={cities.map((c) => ({ slug: c.slug, name: c.name }))}
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Contact Details</h2>
                <ul className="space-y-4">
                  <li>
                    <a href={site.phoneHref} className="flex items-center gap-3 text-brand-charcoal hover:text-brand-orange transition-colors">
                      <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                      <div>
                        <p className="font-semibold">{site.phone}</p>
                        <p className="text-sm text-brand-gray">Call or text</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-brand-charcoal hover:text-brand-orange transition-colors">
                      <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                      <div>
                        <p className="font-semibold">{site.email}</p>
                        <p className="text-sm text-brand-gray">Email us anytime</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-charcoal">Business Hours</p>
                      <p className="text-sm text-brand-gray">{site.hours.weekdays}</p>
                      <p className="text-sm text-brand-gray">{site.hours.weekend}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

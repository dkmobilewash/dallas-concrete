import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Image
              src="/concrete-images/dallas-concrete-solutions-5-star-concrete-contractor-near-me.png"
              alt="Dallas Concrete Solutions"
              width={180}
              height={60}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">Professional concrete contracting for residential and commercial properties throughout the Dallas-Fort Worth metro area.</p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-blue shrink-0" /><span>{site.hours.weekdays}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-blue shrink-0" /><span>{site.hours.weekend}</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-sm text-white/70 hover:text-brand-blue transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}><Link href={`/service-areas/${c.slug}`} className="text-sm text-white/70 hover:text-brand-blue transition-colors">{c.name}, TX</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-blue transition-colors"><Phone className="w-4 h-4 text-brand-blue shrink-0" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-blue transition-colors"><Mail className="w-4 h-4 text-brand-blue shrink-0" />{site.email}</a></li>
              <li className="flex items-start gap-2 text-sm text-white/70"><MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" /><span>{site.address.streetAddress}<br />{site.address.city}, {site.address.stateCode} {site.address.postalCode}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Dallas Concrete Solutions. All rights reserved.</p>
          <p>Licensed &amp; Insured Concrete Contractor in Dallas, TX</p>
        </div>
      </div>
    </footer>
  )
}

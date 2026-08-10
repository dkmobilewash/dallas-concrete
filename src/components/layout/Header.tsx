'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { site } from '@/data/site'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-brand-charcoal transition-all ${scrolled ? 'border-b border-brand-gray-mid/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/concrete-images/dallas-concrete-solutions-5-star-concrete-contractor-near-me.png"
              alt="Dallas Concrete Solutions"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-brand-gray-mid/20 py-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-gray-light hover:text-brand-blue transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Service Areas <ChevronDown className="w-4 h-4" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-brand-gray-mid/20 py-2">
                  {cities.map((c) => (
                    <Link key={c.slug} href={`/service-areas/${c.slug}`} className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-gray-light hover:text-brand-blue transition-colors">
                      {c.name}, TX
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link href="/blog" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
            <Link href="/contact" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={site.phoneHref} className="hidden sm:inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              <Phone className="w-4 h-4" />
              Call {site.phone}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [areasExpanded, setAreasExpanded] = useState(false)

  return (
    <div className="lg:hidden bg-brand-charcoal border-t border-brand-gray-mid/20">
      <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
        <div>
          <button onClick={() => setServicesExpanded(!servicesExpanded)} className="flex items-center justify-between w-full text-white/90 hover:text-white py-2 text-sm font-medium">
            Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} />
          </button>
          {servicesExpanded && (
            <div className="pl-4 space-y-1">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={onClose} className="block text-white/70 hover:text-brand-blue py-1.5 text-sm transition-colors">{s.name}</Link>
              ))}
            </div>
          )}
        </div>
        <div>
          <button onClick={() => setAreasExpanded(!areasExpanded)} className="flex items-center justify-between w-full text-white/90 hover:text-white py-2 text-sm font-medium">
            Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasExpanded ? 'rotate-180' : ''}`} />
          </button>
          {areasExpanded && (
            <div className="pl-4 space-y-1">
              {cities.map((c) => (
                <Link key={c.slug} href={`/service-areas/${c.slug}`} onClick={onClose} className="block text-white/70 hover:text-brand-blue py-1.5 text-sm transition-colors">{c.name}, TX</Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/about" onClick={onClose} className="block text-white/90 hover:text-white py-2 text-sm font-medium">About</Link>
        <Link href="/blog" onClick={onClose} className="block text-white/90 hover:text-white py-2 text-sm font-medium">Blog</Link>
        <Link href="/contact" onClick={onClose} className="block text-white/90 hover:text-white py-2 text-sm font-medium">Contact</Link>
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-4 py-3 rounded-md mt-4 transition-colors">
          <Phone className="w-4 h-4" />Call {site.phone}
        </a>
      </nav>
    </div>
  )
}

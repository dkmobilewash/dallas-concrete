'use client'

import { useState } from 'react'

// TODO: Connect to form service (e.g., Resend, Formspree, or Netlify Forms)

export default function ContactForm({ services, cities }: { services: { slug: string; name: string }[]; cities: { slug: string; name: string }[] }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <p className="text-green-800 font-semibold text-lg mb-2">Thank you for your request!</p>
        <p className="text-green-700">We&apos;ll review your project details and get back to you within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email</label>
        <input type="email" id="email" name="email" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-1">Service</label>
          <select id="service" name="service" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white">
            <option value="">Select a service</option>
            {services.map((s) => (<option key={s.slug} value={s.slug}>{s.name}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-brand-charcoal mb-1">City</label>
          <select id="city" name="city" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white">
            <option value="">Select your city</option>
            {cities.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-brand-charcoal mb-1">Project Description</label>
        <textarea id="description" name="description" rows={4} required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-y" />
      </div>
      <button type="submit" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded-md transition-colors">Submit Request</button>
    </form>
  )
}

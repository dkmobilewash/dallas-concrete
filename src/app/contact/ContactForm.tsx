'use client'

import { useState } from 'react'

export default function ContactForm({ services, cities }: { services: { slug: string; name: string }[]; cities: { slug: string; name: string }[] }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <p className="text-green-800 font-semibold text-lg mb-2">Thank you for your request!</p>
        <p className="text-green-700">We&apos;ll review your project details and get back to you within one business day.</p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).selectedOptions[0]?.text || '',
      city: (form.elements.namedItem('city') as HTMLSelectElement).selectedOptions[0]?.text || '',
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please call us at 214-239-0709.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">{error}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email</label>
        <input type="email" id="email" name="email" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-1">Service</label>
          <select id="service" name="service" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white">
            <option value="">Select a service</option>
            {services.map((s) => (<option key={s.slug} value={s.slug}>{s.name}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-brand-charcoal mb-1">City</label>
          <select id="city" name="city" required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white">
            <option value="">Select your city</option>
            {cities.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-brand-charcoal mb-1">Project Description</label>
        <textarea id="description" name="description" rows={4} required className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-y" />
      </div>
      <button type="submit" disabled={loading} className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? 'Sending...' : 'Submit Request'}
      </button>
    </form>
  )
}

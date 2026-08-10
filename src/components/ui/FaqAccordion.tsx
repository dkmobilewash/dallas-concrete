'use client'

import { useState } from 'react'
import FaqSchema from '@/components/seo/FaqSchema'

export default function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <FaqSchema faqs={faqs} />
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border border-brand-gray-mid/30 rounded-lg overflow-hidden group"
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault()
              setOpenIndex(openIndex === index ? null : index)
            }}
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-brand-gray-light/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-brand-charcoal pr-4">{faq.question}</span>
              <span className="text-brand-blue text-xl font-bold shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </summary>
            {openIndex === index && (
              <div className="px-4 pb-4 text-brand-gray leading-relaxed">
                {faq.answer}
              </div>
            )}
          </details>
        ))}
      </div>
    </>
  )
}

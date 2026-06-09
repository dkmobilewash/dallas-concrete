import FaqAccordion from '@/components/ui/FaqAccordion'

interface FaqSectionProps {
  title?: string
  faqs: { question: string; answer: string }[]
}

export default function FaqSection({ title = 'Frequently Asked Questions', faqs }: FaqSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8 text-center">{title}</h2>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}

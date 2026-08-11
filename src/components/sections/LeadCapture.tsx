import { FileText } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function LeadCapture() {
  return (
    <section className="py-16 md:py-20 bg-brand-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center">
              <FileText className="w-10 h-10 text-brand-blue" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">Free Dallas Concrete Pricing &amp; Cost Guide</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Wondering what a driveway, patio, or foundation costs in the Dallas area? Our free guide covers typical project costs, what affects pricing, and how to spot a bad concrete bid before you sign. No fluff — just the numbers and details Dallas homeowners need to make an informed decision.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/contact" variant="primary">Get Your Free Guide</Button>
              <span className="text-white/50 text-sm">No spam. Just useful info for your project.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

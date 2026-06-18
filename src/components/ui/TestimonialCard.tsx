import { Quote } from 'lucide-react'

// TODO: Replace with verified Google/Yelp reviews before launch
export default function TestimonialCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-gray-mid/20">
      <Quote className="w-8 h-8 text-brand-orange/30 mb-3" />
      <p className="text-brand-charcoal leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-brand-gray text-sm font-medium">— {attribution}</p>
    </div>
  )
}

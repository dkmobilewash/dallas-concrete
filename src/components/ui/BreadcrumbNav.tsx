import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export default function BreadcrumbNav({ items }: { items: { name: string; href: string }[] }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-brand-gray-mid mx-1" />}
              {index === items.length - 1 ? (
                <span className="text-brand-gray">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-brand-blue hover:text-brand-blue-dark transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

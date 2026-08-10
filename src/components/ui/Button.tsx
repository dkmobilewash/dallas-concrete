import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-md transition-colors',
  secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-md transition-colors',
  ghost: 'text-white underline underline-offset-4 transition-colors hover:text-brand-blue',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
}: {
  variant?: ButtonVariant
  href: string
  children: React.ReactNode
  className?: string
}) {
  const styles = `inline-flex items-center justify-center ${variantStyles[variant]} ${className}`

  if (href.startsWith('tel:') || href.startsWith('mailto:')) {
    return <a href={href} className={styles}>{children}</a>
  }

  return <Link href={href} className={styles}>{children}</Link>
}

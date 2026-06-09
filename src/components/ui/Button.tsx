import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  href: string
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md transition-colors',
  secondary: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-6 py-3 rounded-md transition-colors',
  ghost: 'text-white underline underline-offset-4 transition-colors hover:text-brand-orange',
}

export default function Button({ variant = 'primary', href, children, className = '' }: ButtonProps) {
  const styles = `inline-flex items-center justify-center ${variantStyles[variant]} ${className}`

  if (href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  )
}

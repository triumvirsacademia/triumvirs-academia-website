'use client'

import { usePathname } from 'next/navigation'

export default function Underline({
  href,
  exact = false,
  className,
}: {
  href: string
  exact?: boolean
  className?: string
}) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  const newClassName = isActive ? `${className} active` : className

  return (
    <span className={newClassName}></span>
  )
}
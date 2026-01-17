'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

export default function NavLink({
  href, inactiveClassName, activeClassName, children
}: {
  href?: any,
  inactiveClassName?: string,
  activeClassName?: string,
  children?: ReactNode,
}) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={pathname === href ? activeClassName : inactiveClassName}
    >
      {children}
    </Link>
  )
}

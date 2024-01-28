'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink({
  href, inactiveClassName, activeClassName, children
}: {
  href?: any,
  inactiveClassName?: string,
  activeClassName?: string,
  children?: JSX.Element | string,
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

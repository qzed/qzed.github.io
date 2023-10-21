'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/navbar.module.scss'


const navlinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]

type Props = {
  name: string
  path: string
}

function NavItem({ name, path }: Props) {
  const pathname = usePathname()
  const active = pathname === path ? styles.active : styles.inactive;

  return (
    <li className={`${styles.item} ${active}`}>
      <Link href={path}>
        <div>
          {name}
        </div>
      </Link>
    </li>
  )
}

export default function NavBar() {
  return (
    <nav className={styles.base}>
      <ul className={styles.menu}>
        {
          navlinks.map((link, index) => {
            return (
              <NavItem name={link.name} path={link.path} key={index} />
            )
          })
        }
      </ul>
    </nav>
  )
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.scss'


const navlinks = [
  { name: "Home", path: "/"},
  { name: "Blog", path: "/blog"},
]

type NavProps = {
  name: string
  path: string
}

const NavItem = ({name, path}: NavProps) => {
  const router = useRouter()
  const active = router.asPath === path ? styles.active : styles.inactive;

  return (
    <li className={`${styles.item} ${active}`}>
      <Link href={path}>
        <a>
          <div>
            {name}
          </div>
        </a>
      </Link>
    </li>
  )
};

const NavBar = () => {
  return (
    <nav className={styles.base}>
      <ul className={styles.menu}>
        {
          navlinks.map((link, index) => {
            return (
              <NavItem name={link.name} path={link.path} key={index}/>
            )
          })
        }
      </ul>
    </nav>
  )
};

export default NavBar;

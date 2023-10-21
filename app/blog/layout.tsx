import { Metadata } from 'next'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import styles from '../../styles/home.module.scss'

export const metadata: Metadata = {
  title: 'Maximilian Luz',
  description: 'Blog | Maximilian Luz',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.base} >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

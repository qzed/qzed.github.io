import { Metadata } from 'next'

import Footer from '../components/Footer'
import styles from '../styles/home.module.scss'

export const metadata: Metadata = {
  title: 'Maximilian Luz',
  description: 'Personal website of Maximilian Luz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.base} >
        {children}
        <Footer />
      </body>
    </html>
  )
}

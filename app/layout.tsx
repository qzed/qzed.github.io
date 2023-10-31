import { Metadata } from 'next'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

import styles from '@/styles/home.module.scss'

export const metadata: Metadata = {
  title: 'Maximilian Luz',
  description: 'Personal website of Maximilian Luz',
  icons: {
    icon: [
      {
        url: '/assets/icon-dark.svg',
        href: '/assets/icon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/icon-dark.svg',
        href: '/assets/icon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/icon-light.svg',
        href: '/assets/icon-light.svg',
      },
    ]
  },
}

export default function RootLayout({
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

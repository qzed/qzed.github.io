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
        url: '/assets/icons/dark/favicon.svg',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/icons/dark/favicon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/icons/light/favicon.svg',
      },
    ],
    apple: [
      {
        url: '/assets/icons/dark/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/icons/dark/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/icons/light/apple-touch-icon.png',
      },
    ],
    shortcut: [
      {
        url: '/assets/icons/dark/favicon.png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/icons/dark/favicon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/assets/icons/light/favicon.png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/icons/black/favicon.png',
        color: "#06060b",
      },
      {
        rel: 'mask-icon',
        media: '(prefers-color-scheme: light)',
        url: '/assets/icons/black/favicon.png',
        color: "#06060b",
      },
      {
        rel: 'mask-icon',
        media: '(prefers-color-scheme: dark)',
        url: '/assets/icons/black/favicon.png',
        color: "#ffffff",
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

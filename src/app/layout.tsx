import '@/styles/common/tailwind.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import { Metadata } from 'next'
import { SidebarProvider } from '@/components/SidebarContext'
import Sidebar from '@/components/Sidebar'

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
    <html lang="en" className='scroll-pt-[4rem] lg:scroll-pt-[5rem]'>
      <body className="
        relative min-h-dvh
        bg-slate-100 dark:bg-slate-900
        text-slate-800 dark:text-slate-300
      ">
        <SidebarProvider>
          <Sidebar />
          <Header />
        </SidebarProvider>
        <div className="pt-12 lg:pt-14 pb-14 min-h-dvh">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

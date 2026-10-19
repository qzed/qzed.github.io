import type { Metadata } from 'next'

export const SITE_URL = 'https://mxnluz.io'
export const SITE_NAME = 'Maximilian Luz'

type PageMetadata = {
  title: string
  shareTitle?: string     // title for link previews, defaults to title
  description: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  tags?: string[]
  image?: string
}

// Metadata for a page, including Open Graph and Twitter card metadata for link
// previews. Next.js does not merge nested metadata objects with the ones of
// parent layouts, so these are always fully specified here.
export function pageMetadata({ title, shareTitle, description, path, type, publishedTime, tags, image }: PageMetadata): Metadata {
  image = image ?? '/og/site.png'
  shareTitle = shareTitle ?? title

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: type ?? 'website',
      ...(type == 'article' ? { publishedTime, authors: [SITE_NAME], tags } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: shareTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      creator: '@mxnluz',
      images: [image],
    },
  }
}

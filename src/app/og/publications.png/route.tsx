import { ImageResponse } from 'next/og'

import { PageImage, imageOptions } from '@/lib/og'

import publications from '@data/publications'

// Link preview (Open Graph) image for the publications page, served at
// /og/publications.png.

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <PageImage
        header='Maximilian Luz'
        title='Publications'
        footer={`mxnluz.io/publications · ${publications.length} publications`}
      />
    ),
    imageOptions(),
  )
}

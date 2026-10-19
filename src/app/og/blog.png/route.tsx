import { ImageResponse } from 'next/og'

import { PageImage, imageOptions } from '@/lib/og'

// Link preview (Open Graph) image for the blog index, served at /og/blog.png.

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <PageImage
        header='Maximilian Luz'
        title='Blog'
        footer='mxnluz.io/blog'
      />
    ),
    imageOptions(),
  )
}

import { ImageResponse } from 'next/og'

import { getAllPostsRaw, getPostById } from '@/lib/blog'
import { PageImage, imageOptions } from '@/lib/og'

// Link preview (Open Graph) images for blog posts, served at
// /og/posts/<post>.png. Generated via a route handler, as image metadata files
// are not supported below catch-all routes.

export const dynamic = 'force-static'
export const dynamicParams = false

type Params = {
  id: string[]
}

export function generateStaticParams() {
  return getAllPostsRaw().map((post) => ({ id: postImagePath(post.id) }))
}

// Path segments for the image of a post, the last one with a .png extension
// so that the exported file is served with the correct content type.
function postImagePath(id: string[]): string[] {
  return [...id.slice(0, -1), `${id[id.length - 1]}.png`]
}

export async function GET(_request: Request, { params }: { params: Promise<Params> }) {
  const id = (await params).id
  const post = getPostById([...id.slice(0, -1), id[id.length - 1].replace(/\.png$/, '')])!

  const date = new Date(post.date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return new ImageResponse(
    (
      <PageImage
        header='Maximilian Luz · Blog'
        title={post.title}
        footer={`${date} · ${post.readingTime} min read`}
      />
    ),
    imageOptions(),
  )
}

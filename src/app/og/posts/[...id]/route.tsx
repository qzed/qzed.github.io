import { ImageResponse } from 'next/og'

import { getAllPostsRaw, getPostById } from '@/lib/blog'
import { Frame, Logo, colors, imageOptions } from '@/lib/og'

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

  // Scale down the title for long titles to keep it within three lines
  const fontSize = post.title.length > 60 ? 60 : 72

  return new ImageResponse(
    (
      <Frame>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: colors.accent }}>
          <Logo size={30} />
          Maximilian Luz · Blog
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <div style={{ fontSize, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.15 }}>
            {post.title}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: colors.subtle }}>
          {date} · {post.readingTime} min read
        </div>
      </Frame>
    ),
    imageOptions(),
  )
}

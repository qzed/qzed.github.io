import fs from 'fs'
import path from 'path'
import { ImageResponse } from 'next/og'

import { Frame, Logo, colors, imageOptions } from '@/lib/og'

// Default link preview (Open Graph) image for the site, served at
// /og/site.png. Generated via a route handler instead of an opengraph-image
// file, as the latter is exported without file extension and would thus not
// be served with the correct content type.

export const dynamic = 'force-static'

export function GET() {
  const photo = fs.readFileSync(path.join(process.cwd(), 'public/assets/profile.jpg'))
  const src = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <Frame>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 64 }}>
          <img
            src={src}
            alt=''
            width={300}
            height={300}
            style={{ borderRadius: 9999, border: `8px solid ${colors.border}` }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -1.5 }}>
              Maximilian Luz
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 34, color: colors.muted, lineHeight: 1.4 }}>
              <span>PhD Student, Robot Learning Lab</span>
              <span>University of Freiburg</span>
              <span>Linux Kernel Maintainer</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: colors.accent }}>
          <Logo size={30} />
          mxnluz.io
        </div>
      </Frame>
    ),
    imageOptions(),
  )
}

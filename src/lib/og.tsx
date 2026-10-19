import fs from 'fs'
import path from 'path'
import type { ReactNode } from 'react'

// Shared parts for generated link preview (Open Graph) images.

export const OG_SIZE = { width: 1200, height: 630 }

function font(weight: 400 | 600) {
  const file = path.join(process.cwd(), `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)
  return { name: 'Inter', data: fs.readFileSync(file), weight, style: 'normal' as const }
}

// Options for ImageResponse: Size and fonts. The site uses the system font,
// for which Inter is a close and portable stand-in.
export function imageOptions() {
  return {
    ...OG_SIZE,
    fonts: [font(400), font(600)],
  }
}

export const colors = {
  background: '#f1f5f9',   // slate-100
  text: '#0f172a',         // slate-900
  muted: '#475569',        // slate-600
  subtle: '#64748b',       // slate-500
  accent: '#075985',       // sky-800
  border: '#cbd5e1',       // slate-300
}

export function Logo({ size }: { size: number }) {
  return (
    <svg viewBox="0 16 128 96" width={size * 4 / 3} height={size} fill={colors.accent}>
      <path d="M46.3683 21.0665L56.2987 42.3623L25.8608 107.636H6L46.3683 21.0665Z" />
      <path d="M78.7081 107.636H122.866L114.472 89.6365H87.1016L78.7081 107.636Z" />
      <path d="M92.2987 42.3623L82.3683 21.0665L42 107.636H61.8608L92.2987 42.3623Z" />
    </svg>
  )
}

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 72,
      background: colors.background,
      borderBottom: `12px solid ${colors.accent}`,
      color: colors.text,
      fontFamily: 'Inter',
    }}>
      {children}
    </div>
  )
}

// Image for a page or post: Header with logo, large title, and a footer line.
export function PageImage({ header, title, footer }: { header: string, title: string, footer: string }) {
  // Scale down the title for long titles to keep it within three lines
  const fontSize = title.length > 60 ? 60 : title.length > 20 ? 72 : 96

  return (
    <Frame>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: colors.accent }}>
        <Logo size={30} />
        {header}
      </div>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
        <div style={{ fontSize, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.15 }}>
          {title}
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: 30, color: colors.subtle }}>
        {footer}
      </div>
    </Frame>
  )
}

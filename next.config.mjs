import path from 'path'
import { fileURLToPath } from 'url'

import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  turbopack: {},

  images: {
    unoptimized: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
}

// Only use static export for builds. In development, static export causes
// errors for unknown paths of dynamic routes (e.g., misspelled post URLs)
// instead of showing the not-found page.
export default function config(phase) {
  return {
    ...nextConfig,
    output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : 'export',
  }
}

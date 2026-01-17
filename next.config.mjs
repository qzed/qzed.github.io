import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

export default nextConfig

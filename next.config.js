const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    unoptimized: true,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

  experimental: {
    serverComponentsExternalPackages: ["mdx-bundler"],
  }
}

module.exports = nextConfig

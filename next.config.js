const fs = require('fs')
const path = require('path')
const {join} = require('path')
const {promisify} = require('util')

const copyFile = promisify(fs.copyFile)

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
}

module.exports = nextConfig

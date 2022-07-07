const fs = require('fs')
const path = require('path')
const {join} = require('path')
const {promisify} = require('util')

const copyFile = promisify(fs.copyFile)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

  experimental: {
    images: {
        unoptimized: true,
    },
  },

  exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    if (dev) {
      return defaultPathMap
    }

    await copyFile(join(dir, 'CNAME'), join(outDir, 'CNAME'))
    await copyFile(join(dir, '.nojekyll'), join(outDir, '.nojekyll'))

    return defaultPathMap
  }
}

module.exports = nextConfig

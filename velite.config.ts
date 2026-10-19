import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import { defineConfig, defineLoader, s } from 'velite'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import type { VFile } from 'vfile'
import type { Root as HastRoot } from 'hast'

// Estimate reading time in minutes: Count words of the prose only (without
// math, code, and markup, which would inflate the count), and add some time
// for each displayed equation, as these take longer to read.
function readingTime(content: string): number {
  const WORDS_PER_MINUTE = 230
  const SECONDS_PER_EQUATION = 10

  const equations = content.match(/\$\$[\s\S]*?\$\$/g)?.length ?? 0

  const prose = content
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\$[^$\n]+\$/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[@[^\]]*\]/g, '')

  const words = prose.match(/['\u2019]?[a-zA-Z]+(?:['\u2019]?[a-zA-Z]+)*/g)?.length ?? 0
  const minutes = words / WORDS_PER_MINUTE + equations * SECONDS_PER_EQUATION / 60

  return Math.max(1, Math.round(minutes))
}

// Cache for parsed frontmatter, keyed by absolute file path
const frontmatterCache = new Map<string, Record<string, unknown>>()

// Derive a plain-text description from the markdown abstract, e.g., for link
// previews: Use the first paragraph without markup, shortened to a reasonable
// length at a word boundary.
function describe(abstract: string): string {
  const MAX_LENGTH = 200

  const text = abstract.trim().split(/\n\s*\n/)[0]
    .replace(/\[@[^\]]*\]/g, '')
    .replace(/\$[^$]*\$/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= MAX_LENGTH) {
    return text
  }

  return text.slice(0, text.lastIndexOf(' ', MAX_LENGTH)).replace(/[,;:.]$/, '') + '…'
}

// Custom matter loader that caches frontmatter for rehype plugins to access
// Based on https://github.com/zce/velite/blob/main/src/loaders/matter.ts
const MATTER_RE = /^---(?:\r?\n|\r)(?:([\s\S]*?)(?:\r?\n|\r))?---(?:\r?\n|\r|$)/

const matterLoader = defineLoader({
  test: /\.mdx$/,
  load: file => {
    const value = file.toString().trim()
    const match = value.match(MATTER_RE)
    const matter = match == null ? null : match[1]
    const data = matter == null ? {} : (yaml.parse(matter) ?? {})
    const content = match == null ? value : value.slice(match[0].length).trim()

    if (data.description == null && typeof data.abstract == 'string') {
      data.description = describe(data.abstract)
    }

    // Cache the frontmatter for rehype plugins
    if (file.path) {
      frontmatterCache.set(file.path, data)
    }

    return { data, content }
  }
})

// Custom rehype plugin to inject bibliography path for rehype-citation
function rehypeInjectBibliography() {
  return (_tree: HastRoot, file: VFile) => {
    if (!file.path) return

    // Get cached frontmatter from our custom loader
    const fm = frontmatterCache.get(file.path)
    if (!fm?.bibliography || typeof fm.bibliography !== 'string') return

    // Resolve relative to the file's directory
    const bibPath = path.isAbsolute(fm.bibliography)
      ? fm.bibliography
      : path.join(file.dirname || '', fm.bibliography)

    if (!fs.existsSync(bibPath)) {
      console.warn(`Bibliography file not found: ${bibPath}`)
      return
    }

    const relativeBibPath = path.relative(process.cwd(), bibPath)
    file.data.frontmatter = file.data.frontmatter || {}
    ;(file.data.frontmatter as Record<string, unknown>).bibliography = relativeBibPath
  }
}

export default defineConfig({
  root: 'data/blog',
  loaders: [matterLoader],
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  mdx: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: { class: 'autolink-anchor', ariaHidden: true, tabIndex: -1 },
      }],
      [rehypeKatex, {
        trust: (ctx: { command: string }) => ['\\htmlId'].includes(ctx.command),
        strict: false,
        macros: { '\\label': '\\htmlId{#1}{}' },
      }],
      rehypeInjectBibliography,
      [rehypeCitation, {
        path: process.cwd(),
        linkCitations: true,
        inlineClass: ['csl-ref'],
        csl: 'data/blog/acm-siggraph.csl',
      }],
      rehypePrismPlus,
    ],
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s.object({
        title: s.string(),
        subtitle: s.string().optional(),
        author: s.string(),
        date: s.isodate(),
        abstract: s.mdx(),
        description: s.string().optional(),
        tags: s.array(s.string()).optional(),
        visibility: s.enum(['default', 'draft', 'devel', 'hidden']).default('default'),
        bibliography: s.string().optional(),
        code: s.mdx(),
        toc: s.toc({ maxDepth: 3 }),
        readingTime: s.raw().transform(readingTime),
        // Use Velite's built-in path helper to get the flattened path
        slug: s.path(),
      }).transform((data) => {
        // slug from s.path() gives us "posts/2022/08/irl-maxent"
        // We need to strip the "posts/" prefix
        const pathWithoutPrefix = data.slug.replace(/^posts\//, '')
        return {
          ...data,
          // Override slug to remove prefix
          slug: pathWithoutPrefix,
          // Compute id as array for catch-all route
          id: pathWithoutPrefix.split('/'),
          // Compute URL
          url: `/blog/posts/${pathWithoutPrefix}`,
        }
      }),
    },
  },
})

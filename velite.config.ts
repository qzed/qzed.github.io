import fs from 'fs'
import path from 'path'
import { defineConfig, s } from 'velite'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import type { Root as HastRoot } from 'hast'
import type { VFile } from 'vfile'

// Custom rehype plugin to inject bibliography path for rehype-citation
// Velite doesn't pass frontmatter to MDX processing, so we infer the
// bibliography path from the file path (checking for .bib or .bib.json)
// TODO: can we store the bibliography in the frontmatter somehow
function rehypeInjectBibliography() {
  return (_tree: HastRoot, file: VFile) => {
    if (!file.dirname || !file.stem) return

    // Check for bibliography files in the same directory
    const bibPaths = [
      path.join(file.dirname, `${file.stem}.bib`),
      path.join(file.dirname, `${file.stem}.bib.json`),
    ]

    for (const bibPath of bibPaths) {
      if (fs.existsSync(bibPath)) {
        // Inject the bibliography path where rehype-citation expects it
        // Use path relative to cwd since rehype-citation resolves paths against its `path` option
        const relativeBibPath = path.relative(process.cwd(), bibPath)
        file.data.frontmatter = file.data.frontmatter || {}
        ;(file.data.frontmatter as Record<string, unknown>).bibliography = relativeBibPath
        break
      }
    }
  }
}

export default defineConfig({
  root: 'data/blog',
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
        tags: s.array(s.string()).optional(),
        visibility: s.enum(['default', 'draft', 'devel', 'hidden']).default('default'),
        bibliography: s.string().optional(),
        code: s.mdx(),
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

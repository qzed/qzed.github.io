import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

import type { ProcessorOptions } from '@mdx-js/esbuild/lib'
import { bundleMDX } from 'mdx-bundler'

import fs from 'fs'
import { dirname, join } from 'path'

import { remarkCite } from './cite/remark'
import { rehypeCite } from './cite/rehype'


export async function renderMdx(source: string, cwd?: string) {
    const { code, frontmatter } = await bundleMDX({
        source: source,
        cwd: cwd,
        mdxOptions: (options: ProcessorOptions, frontmatter: { [key: string]: any; }) => {
            const bibliography = frontmatter?.bibliography
                ? join(cwd || '', frontmatter?.bibliography)
                : undefined

            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                [remarkMath, {}],
                [remarkCite, {}],
                [remarkGfm, {}],
            ]

            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                [rehypeCite, {
                    bibliography: bibliography,
                }],
                [rehypePrism],
                [rehypeKatex, {}],
                [rehypeSlug, {}],
                [rehypeAutolinkHeadings, {
                    behavior: "wrap",
                    properties: {
                        class: 'autolink-anchor',
                        ariaHidden: true,
                        tabIndex: -1
                    },
                }],
            ]

            options.remarkRehypeOptions = {
                passThrough: [
                    'cite',
                    'bibliography'
                ]
            }

            return options
        },
        esbuildOptions: options => {
            options.define = {
              "process.env.__NEXT_TRAILING_SLASH": JSON.stringify(process.env.__NEXT_TRAILING_SLASH),
              "process.env.__NEXT_IMAGE_OPTS": JSON.stringify(process.env.__NEXT_IMAGE_OPTS),
              "process.env.__NEXT_REACT_ROOT": JSON.stringify(process.env.__NEXT_REACT_ROOT),
              "process.env.__NEXT_OPTIMIZE_FONTS": JSON.stringify(process.env.__NEXT_OPTIMIZE_FONTS)
            };

            return options
        },
    })

    return { code, frontmatter }
}

export async function renderMdxFile(file: string) {
    const data = fs.readFileSync(file, 'utf8')
    return await renderMdx(data, join(process.cwd(), dirname(file)))
}

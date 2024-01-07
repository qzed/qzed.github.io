import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

// @ts-ignore
import type { ProcessorOptions } from '@mdx-js/esbuild/lib'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'

import fs from 'fs'
import { dirname, join } from 'path'

// @ts-ignore
import rehypeCitation from 'rehype-citation'


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
                [remarkGfm, {}],
            ]

            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                [rehypeKatex, {
                    trust: (context: any) => ['\\htmlId', '\\href'].includes(context.command),
                    macros: {
                        "\\eqref": "\\href{###1}{(\\text{#1})}",
                        "\\ref": "\\href{###1}{\\text{#1}}",
                        "\\label": "\\htmlId{#1}{}"
                    },
                }],
                [rehypeCitation, {
                    bibliography: bibliography,
                    linkCitations: true,
                    inlineClass: ['csl-ref'],
                }],
                [rehypePrism],
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
            options.platform = "node"
            options.define = {
                "process.env.__NEXT_TRAILING_SLASH": String(JSON.stringify(process.env.__NEXT_TRAILING_SLASH)),
                "process.env.__NEXT_IMAGE_OPTS": String(JSON.stringify(process.env.__NEXT_IMAGE_OPTS)),
                "process.env.__NEXT_REACT_ROOT": String(JSON.stringify(process.env.__NEXT_REACT_ROOT)),
                "process.env.__NEXT_OPTIMIZE_FONTS": String(JSON.stringify(process.env.__NEXT_OPTIMIZE_FONTS)),
                "process.env": String(JSON.stringify(process.env))
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

export async function renderMdxComponent(file: string) {
    return getMDXComponent((await renderMdxFile(file)).code)
}

import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

import type {ProcessorOptions} from '@mdx-js/esbuild/lib'
import {bundleMDX} from 'mdx-bundler'

import fs from 'fs'
import { dirname, join } from 'path'


export async function renderMdx(source: string, cwd?: string) {
    const {code, frontmatter} = await bundleMDX({
        source: source,
        cwd: cwd,
        mdxOptions: (options: ProcessorOptions, frontmatter: { [key: string]: any; }) => {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                [remarkMath, {}],
                [remarkGfm, {}],
            ]

            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                [rehypeHighlight, {plainText: ['txt', 'text']}],
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

            return options
        }
    })

    return {code, frontmatter}
}

export async function renderMdxFile(file: string) {
    const data = fs.readFileSync(file, 'utf8')
    return await renderMdx(data, join(process.cwd(), dirname(file)))
}

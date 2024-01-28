import { VFile, Compatible } from 'vfile'
import { read } from 'to-vfile'
import { matter } from 'vfile-matter'

import dynamic from 'next/dynamic'

// @ts-ignore
import rehypeCitation from 'rehype-citation'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

import { MDXRemote } from '@alisowski/next-mdx-remote/rsc'

import katex from 'katex'


const options: any = {
    parseFrontmatter: true,
    mdxOptions: {
        remarkPlugins: [
            [remarkMath, {}],
            [remarkGfm, {}],
        ],
        rehypePlugins: [
            [rehypeCitation, {
                path: process.cwd(),
                linkCitations: true,
                inlineClass: ['csl-ref'],
                csl: "data/acm-siggraph.csl",
            }],
            [rehypeKatex as any, {
                trust: (context: any) => ['\\htmlId'].includes(context.command),
                strict: false,
                macros: {
                    "\\label": "\\htmlId{#1}{}"
                },
            }],
            [rehypePrism as any, {}],
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, {
                behavior: "wrap",
                properties: {
                    class: 'autolink-anchor',
                    ariaHidden: true,
                    tabIndex: -1
                },
            }],
        ],
    },
    scope: {
        // TODO: replace @alisowski/next-mdx-remote with original
        //       next-mdx-remote once it supports mdx 3
        //       see https://github.com/hashicorp/next-mdx-remote/pull/425
        // TODO: once next-mdx-remote supports MDX3 we should be able to
        //       replace this with direct imports in the .mdx files
        katex: katex,
    }
}

// TODO: once next-mdx-remote supports MDX3 we should be able to replace this
//       with direct imports in the .mdx files
const components: any = {
    EqRef: dynamic(() => import('./blog/EqRef')),
    Note: dynamic(() => import('./blog/Note')),
    Counter: dynamic(() => import('./blog/Counter')),
}

export async function MdxFromFile({ path }: { path: string }) {
    const vf = await read(path)

    return <MdxFromSource source={vf}/>
}

export function MdxFromSource({ source }: { source: Compatible }) {
    let file = new VFile(source)

    matter(file, { strip: false })

    // rehype-cite expects the frontmatter to be at a different place...
    file.data.frontmatter = file.data.matter

    return (
        <MDXRemote
            source={file as any}
            options={options}
            components={components}
        />
    )
}

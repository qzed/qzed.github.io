import { VFile, Compatible } from 'vfile'
import { read } from 'to-vfile'
import { matter } from 'vfile-matter'

import dynamic from 'next/dynamic'

// @ts-ignore
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

import { MDXRemote } from 'next-mdx-remote-client/rsc'


const options: any = {
    parseFrontmatter: true,
    mdxOptions: {
        baseUrl: import.meta.url,
        development: false,
        remarkPlugins: [
            [remarkMath, {}],
            [remarkGfm, {}],
        ],
        rehypePlugins: [
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, {
                behavior: "wrap",
                properties: {
                    class: 'autolink-anchor',
                    ariaHidden: true,
                    tabIndex: -1
                },
            }],
            [rehypeKatex as any, {
                trust: (context: any) => ['\\htmlId'].includes(context.command),
                strict: false,
                macros: {
                    "\\label": "\\htmlId{#1}{}"
                },
            }],
            [rehypeCitation, {
                path: process.cwd(),
                linkCitations: true,
                inlineClass: ['csl-ref'],
                csl: "data/blog/acm-siggraph.csl",
            }],
            [rehypePrismPlus, {}],
        ],
    },
}

// TODO: Theoretically we support imports. But those are currently only
//       supported for javascript. So there is no automatic transpiling for tsx
//       etc. enabled. Until we figure that out, just re-export the components
//       here.
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

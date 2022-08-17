import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h, s } from "hastscript";

import fs from 'fs'


export async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeHighlight, {plainText: ['txt', 'text']})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            behavior: "prepend",
            properties: {
                class: 'autolink-anchor',
                ariaHidden:
                true, tabIndex: -1
            },
            content: [
                h("span.autolink-icon", "#"),
            ]
        })
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(markdown)

    return result.toString();
}

export async function makrdownFileToHtml(file: string) {
    const data = fs.readFileSync(file, 'utf8');
    return await markdownToHtml(data);
}

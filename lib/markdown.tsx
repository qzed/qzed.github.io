import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

import fs from 'fs'


export async function markdownToHtml(markdown: string) {
    const result = await unified()
        .use(remarkParse)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeHighlight, {plainText: ['txt', 'text']})
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(markdown)

    return result.toString();
}

export async function makrdownFileToHtml(file: string) {
    const data = fs.readFileSync(file, 'utf8');
    return await markdownToHtml(data);
}

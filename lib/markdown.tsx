import { remark } from 'remark'
import html from 'remark-html'

import fs from 'fs'


export async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}

export async function makrdownFileToHtml(file: string) {
    const data = fs.readFileSync(file, 'utf8');
    return await markdownToHtml(data);
}

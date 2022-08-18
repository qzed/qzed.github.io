import fs from 'fs'
import { join, dirname } from 'path'
import matter from "gray-matter";
import { renderMdx } from './mdx'

const postsDirectory = join(process.cwd(), '_data', 'posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
        .filter((path) => /\.mdx?$/.test(path))
}

export async function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const source = fs.readFileSync(fullPath, 'utf8')

    const {code, frontmatter} = await renderMdx(source, dirname(fullPath))

    return {
        slug: realSlug,
        title: frontmatter.title,
        author: frontmatter.author,
        date: Date.parse(frontmatter.date),
        abstract: frontmatter.abstract,
        tags: frontmatter.tags ? frontmatter.tags : null,
        content: code,
    }
}

export async function getAllPosts() {
    const posts = await Promise.all(getPostSlugs()
        .map(async (file) => {
            const path = join(postsDirectory, file)
            const source = fs.readFileSync(path, 'utf8')
            const {data} = matter(source)

            const {code} = await renderMdx(data.abstract)

            return {
                slug: file.replace(/\.mdx$/, ''),
                title: data.title,
                author: data.author,
                date: Date.parse(data.date),
                abstract: code,
                tags: data.tags ? data.tags : null,
                visibility: data.visibility ? data.visibility : 'default',
                content: null,
            }
        }))

    return posts.filter((post) => {
        const env = process.env.NODE_ENV

        if (env == "production") {
            return !['hidden', 'draft', 'devel'].includes(post.visibility)
        } else if (env == "development") {
            return !['hidden'].includes(post.visibility)
        } else {
            return false
        }
    })
}

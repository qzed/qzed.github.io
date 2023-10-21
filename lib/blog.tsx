import fs from 'fs'
import { join, dirname } from 'path'
import matter from "gray-matter";
import { renderMdx } from './mdx'
import { Post, PostMetadata } from '../types/blog/post';

const postsDirectory = join(process.cwd(), '_data', 'posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
        .filter((path) => /\.mdx?$/.test(path))
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const source = fs.readFileSync(fullPath, 'utf8')

    const { code: content, frontmatter } = await renderMdx(source, dirname(fullPath))
    const { code: abstract } = await renderMdx(frontmatter.abstract, dirname(fullPath))

    return {
        meta: {
            slug: realSlug,
            title: frontmatter.title,
            author: frontmatter.author,
            date: Date.parse(frontmatter.date),
            abstract: abstract,
            tags: frontmatter.tags ? frontmatter.tags : null,
            visibility: frontmatter.visibility ? frontmatter.visibility : 'default',
        },
        content: content,
    }
}

export async function getAllPosts() {
    const posts = await Promise.all(getPostSlugs()
        .map(async (file: string): Promise<PostMetadata> => {
            const path = join(postsDirectory, file)
            const source = fs.readFileSync(path, 'utf8')
            const { data } = matter(source)

            const { code } = await renderMdx(data.abstract)

            return {
                slug: file.replace(/\.mdx$/, ''),
                title: data.title,
                author: data.author,
                date: Date.parse(data.date),
                abstract: code,
                tags: data.tags ? data.tags : null,
                visibility: data.visibility ? data.visibility : 'default',
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

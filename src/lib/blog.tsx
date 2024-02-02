import fs from 'fs'
import path from 'path'
import { join } from 'path'

import { read } from 'to-vfile'
import { matter } from "vfile-matter";

import { Post, PostMetadata } from '@/types/blog/post';

const postsDirectory = join(process.cwd(), 'data', 'blog', 'posts')


async function getAllFilesRecursive(dir: string): Promise<Array<string>> {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getAllFilesRecursive(res) : res;
    }));
    return Array.prototype.concat(...files);
}

export async function getPostSlugs() {
    return (await getAllFilesRecursive(postsDirectory))
        .filter((p) => /\.mdx?$/.test(p))
        .map((p) => path.relative(postsDirectory, p))
}

export async function getPostById(id: Array<string>): Promise<Post> {
    const fullPath = join(postsDirectory, `${id.join('/')}.mdx`)
    const file = await read(fullPath)

    matter(file, { strip: false })

    const meta: Record<string, any> = file.data.matter as any

    return {
        meta: {
            id: id,
            title: meta.title,
            subtitle: meta.subtitle,
            author: meta.author,
            date: Date.parse(meta.date),
            abstract: meta.abstract,
            tags: meta.tags || null,
            visibility: meta.visibility || 'default',
            path: fullPath,
        },
        file: file,
    }
}

export async function getAllPosts() {
    const slugs = await getPostSlugs()

    const posts = await Promise.all(slugs
        .map(async (file: string): Promise<PostMetadata> => {
            const path = join(postsDirectory, file)
            const vf = await read(path)

            matter(vf, { strip: false })

            const meta: Record<string, any> = vf.data.matter as any

            return {
                id: file.replace(/\.mdx$/, '').split('/'),
                title: meta.title,
                subtitle: meta.subtitle,
                author: meta.author,
                date: Date.parse(meta.date),
                abstract: meta.abstract,
                tags: meta.tags || null,
                visibility: meta.visibility || 'default',
                path: path,
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

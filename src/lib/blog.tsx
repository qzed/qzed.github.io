import { posts, type Post } from '#velite'
import { PostMetadata } from '@/types/blog/post'

export type { Post }

export function getPostById(id: string[]): Post | undefined {
  return posts.find((post) => post.slug === id.join('/'))
}

export function getAllPosts(): PostMetadata[] {
  const env = process.env.NODE_ENV
  return posts
    .filter((post) => {
      const vis = post.visibility
      if (env === 'production') return !['hidden', 'draft', 'devel'].includes(vis)
      if (env === 'development') return !['hidden'].includes(vis)
      return false
    })
    .map((post) => ({
      id: post.id,
      title: post.title,
      subtitle: post.subtitle,
      author: post.author,
      date: new Date(post.date).getTime(),
      abstract: post.abstract,
      tags: post.tags || null,
      visibility: post.visibility,
      path: post.slug,
    }))
}

export function getAllPostsRaw(): Post[] {
  const env = process.env.NODE_ENV
  return posts.filter((post) => {
    const vis = post.visibility
    if (env === 'production') return !['hidden', 'draft', 'devel'].includes(vis)
    if (env === 'development') return !['hidden'].includes(vis)
    return false
  })
}

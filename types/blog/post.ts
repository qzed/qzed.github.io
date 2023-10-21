export type PostMetadata = {
  slug: string
  title: string
  author: string
  date: number
  abstract: string
  tags: [string]
  visibility: string
}

export type Post = {
  meta: PostMetadata
  content: string
}

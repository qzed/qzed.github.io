import { VFile } from 'vfile'

export type PostMetadata = {
  id: string[]
  title: string
  subtitle?: string
  author: string
  date: number
  abstract: string
  tags: [string]
  visibility: string
  path: string
}

export type Post = {
  meta: PostMetadata
  file: VFile
}

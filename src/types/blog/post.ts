export type PostMetadata = {
  id: string[]
  title: string
  subtitle?: string
  author: string
  date: number
  abstract: string
  tags: string[] | null
  visibility: string
  path: string
}

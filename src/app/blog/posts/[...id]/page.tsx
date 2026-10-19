import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllPosts, getAllPostsRaw, getPostById } from '@/lib/blog'
import { PostMetadata } from '@/types/blog/post'

import Prose from '@/components/Prose'
import CitationPreview from '@/components/blog/CitationPreview'
import Tags from '@/components/blog/Tags'
import TableOfContents, { TableOfContentsInline, type TocEntry } from '@/components/blog/TableOfContents'
import { Mdx } from '@/components/Mdx'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'


function PostTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className='mt-2 sm:mt-3 mb-5 sm:mb-6'>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h1>
      {subtitle ? <h2 className='text-2xl sm:text-3xl mt-4'>{subtitle}</h2> : <></>}
    </div>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

function PostDate({ date, readingTime }: { date: string, readingTime: number }) {
  return (
    <p className='text-gray-500 dark:text-gray-500'>
      {formatDate(date)} · {readingTime} min read
    </p>
  )
}

type PostMeta = {
  title: string
  subtitle?: string
  author: string
  date: string
  tags?: string[]
  readingTime: number
}

function PostHeader({ meta }: { meta: PostMeta }) {
  return (
    <div className='mb-10'>
      <PostDate date={meta.date} readingTime={meta.readingTime} />
      <PostTitle title={meta.title} subtitle={meta.subtitle} />
      <Tags tags={meta.tags} />
    </div>
  )
}

function AdjacentPost({ post, label, align }: { post: PostMetadata, label: string, align: 'left' | 'right' }) {
  return (
    <Link href={`/blog/posts/${post.path}`} className={`
      group flex flex-col gap-1 min-w-0
      ${align == 'right' ? 'sm:col-start-2 sm:text-right' : ''}
    `}>
      <span className='text-xs uppercase tracking-[0.15em] text-slate-500'>{label}</span>
      <span className='
        font-medium text-slate-800 dark:text-slate-200
        group-hover:text-sky-700 dark:group-hover:text-sky-400
        transition-colors
      '>
        {post.title}
      </span>
    </Link>
  )
}

function PostFooter({ meta, newer, older }: { meta: PostMeta, newer?: PostMetadata, older?: PostMetadata }) {
  return (
    <footer className='mt-16 border-t border-slate-200 dark:border-slate-800'>
      {
        (newer || older) &&
        <nav aria-label='Adjacent posts' className='
          grid grid-cols-1 sm:grid-cols-2 gap-6 py-6
          border-b border-slate-200 dark:border-slate-800
        '>
          {older && <AdjacentPost post={older} label='&larr; Previous' align='left' />}
          {newer && <AdjacentPost post={newer} label='Next &rarr;' align='right' />}
        </nav>
      }
      <div className='pt-6 flex flex-wrap justify-between gap-4 text-sm text-slate-500'>
        <Link href='/blog' className='hover:text-sky-700 dark:hover:text-sky-400'>
          All posts
        </Link>
        <span>Published {formatDate(meta.date)}</span>
      </div>
    </footer>
  )
}


function countTocEntries(toc: TocEntry[]): number {
  return toc.reduce((count, entry) => count + 1 + countTocEntries(entry.items), 0)
}


type Params = {
  id: string[]
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const post = getPostById((await params).id)

  if (!post) {
    notFound()
  }

  // Only show a table of contents for posts with enough sections
  const toc = post.toc ?? []
  const showToc = countTocEntries(toc) >= 3

  // Adjacent posts, ordered from newest to oldest
  const posts = getAllPosts().sort((a, b) => b.date - a.date)
  const index = posts.findIndex((entry) => entry.path == post.slug)
  const newer = index > 0 ? posts[index - 1] : undefined
  const older = index >= 0 ? posts[index + 1] : undefined

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='flex justify-center gap-12'>
          {/* Spacer to keep the post centered next to the table of contents */}
          {showToc && <div className='hidden xl:block w-56 shrink-0' />}
          <article className='min-w-0 w-full max-w-[72ch]'>
            <PostHeader meta={post} />
            {showToc && <TableOfContentsInline toc={toc} className='xl:hidden -mt-2 mb-10' />}
            <Prose>
              <Mdx code={post.code} />
            </Prose>
            <PostFooter meta={post} newer={newer} older={older} />
            <CitationPreview />
          </article>
          {
            showToc &&
            <aside className='hidden xl:block w-56 shrink-0'>
              <div className='sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto'>
                <TableOfContents toc={toc} />
              </div>
            </aside>
          }
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const post = getPostById((await params).id)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.author} | ${post.title}`,
    description: `${post.title} - A blog post by ${post.author}`,
  }
}

// Only generate pages for known posts, show the not-found page for others
export const dynamicParams = false

export function generateStaticParams() {
  const posts = getAllPostsRaw()

  return posts.map((post) => {
    return { id: post.id }
  })
}

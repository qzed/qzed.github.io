import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllPostsRaw, getPostById } from '@/lib/blog'

import Prose from '@/components/Prose'
import Tags from '@/components/blog/Tags'
import TableOfContents, { type TocEntry } from '@/components/blog/TableOfContents'
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

function PostDate({ date }: { date: string }) {
  return <p className='text-gray-500 dark:text-gray-500'>{formatDate(date)}</p>
}

type PostMeta = {
  title: string
  subtitle?: string
  author: string
  date: string
  tags?: string[]
}

function PostHeader({ meta }: { meta: PostMeta }) {
  return (
    <div className='mb-10'>
      <PostDate date={meta.date} />
      <PostTitle title={meta.title} subtitle={meta.subtitle} />
      <Tags tags={meta.tags} />
    </div>
  )
}

function PostFooter({ meta }: { meta: PostMeta }) {
  return (
    <footer className='
      mt-16 pt-6 flex flex-wrap justify-between gap-4
      border-t border-slate-200 dark:border-slate-800
      text-sm text-slate-500
    '>
      <Link href='/blog' className='hover:text-sky-700 dark:hover:text-sky-400'>
        All posts
      </Link>
      <span>Published {formatDate(meta.date)}</span>
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

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='flex justify-center gap-12'>
          {/* Spacer to keep the post centered next to the table of contents */}
          {showToc && <div className='hidden xl:block w-56 shrink-0' />}
          <article className='min-w-0 w-full max-w-[72ch]'>
            <PostHeader meta={post} />
            <Prose>
              <Mdx code={post.code} />
            </Prose>
            <PostFooter meta={post} />
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

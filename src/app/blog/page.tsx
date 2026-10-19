import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'

import { getAllPosts } from '@/lib/blog'

import Prose from '@/components/Prose'
import SectionHeading from '@/components/SectionHeading'
import Tags from '@/components/blog/Tags'
import { Mdx } from '@/components/Mdx'
import { PostMetadata } from '@/types/blog/post'
import { pageMetadata } from '@/lib/metadata'


function PostTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div>
      <h3 className='
        text-lg sm:text-xl font-semibold
        text-slate-900 dark:text-slate-100
        group-hover:text-sky-700 dark:group-hover:text-sky-400
        transition-colors
      '>
        {title}
      </h3>
      {subtitle ? <p className='text-base sm:text-lg mt-0.5'>{subtitle}</p> : <></>}
    </div>
  )
}

function PostDate({ date, readingTime }: { date: number, readingTime: number }) {
  const displayDate = new Date(date).toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className='
      sm:w-20 shrink-0 flex sm:flex-col gap-x-2
      text-sm sm:text-base text-slate-400 dark:text-slate-500 tabular-nums sm:leading-7
    '>
      <span>{displayDate}</span>
      <span className='sm:hidden'>·</span>
      <span className='sm:text-sm'>{readingTime} min</span>
    </div>
  )
}

function PostAbstract({ abstract }: { abstract: string }) {
  return (
    <div className='[&_p]:text-slate-600 dark:[&_p]:text-slate-400'>
      <Prose>
        <Mdx code={abstract} />
      </Prose>
    </div>
  )
}

function PostPreview({ post }: { post: PostMetadata }) {
  const fragment = post.id.join('/')
  const url = `/blog/posts/${fragment}`

  return (
    <article className='relative group flex flex-col sm:flex-row gap-1 sm:gap-4'>
      {/* Invisible link overlay for the entire post */}
      <Link href={url} className='absolute inset-0 z-10' aria-label={post.title}>
        <span className='sr-only'>{post.title}</span>
      </Link>
      <PostDate date={post.date} readingTime={post.readingTime} />
      <div className='min-w-0'>
        <PostTitle title={post.title} subtitle={post.subtitle} />
        <Tags tags={post.tags} className='mt-2 mb-3' />
        <PostAbstract abstract={post.abstract} />
      </div>
    </article>
  )
}

function Group({ year, posts }: { year: string, posts: PostMetadata[] }) {
  return (
    <div>
      <SectionHeading className='mb-5 sm:mb-6'>{year}</SectionHeading>
      <div className='flex flex-col gap-8 sm:gap-10'>
        {
          posts.map((post) => <PostPreview post={post} key={post.id.join('/')} />)
        }
      </div>
    </div>
  )
}


export const metadata: Metadata = pageMetadata({
  title: 'Maximilian Luz | Blog',
  description: 'Blog of Maximilian Luz',
  path: '/blog',
})

export default function BlogIndex() {
  const posts = getAllPosts()
  const sorted = posts.sort((a, b) => b.date - a.date)

  const years = Array.from(new Set(sorted.map((post) => new Date(post.date).getFullYear())))
  const grouped = years.map((year) => {
    return { year: String(year), posts: sorted.filter((post) => new Date(post.date).getFullYear() == year) }
  })

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='mx-auto max-w-prose flex flex-col gap-12'>
          {
            grouped.map(({ year, posts }) => <Group year={year} posts={posts} key={year} />)
          }
        </div>
      </div>
    </main>
  )
}

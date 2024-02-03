import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'

import { getAllPosts } from '@/lib/blog'

import Prose from '@/components/Prose'
import { PostMetadata } from '@/types/blog/post'


function PostTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className=''>
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      {subtitle ? <h2 className='text-lg sm:text-xl mt-1'>{subtitle}</h2> : <></>}
    </div>
  )
}

function PostDate({ date }: { date: number }) {
  const displayDate = new Date(date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <p className='mb-1 text-xs sm:text-sm text-gray-500 dark:text-gray-500'>
      {displayDate}
    </p>
  )
}

function PostHeader({ post }: { post: PostMetadata }) {
  return (
    <div className='mb-4'>
      <PostDate date={post.date} />
      <PostTitle title={post.title} subtitle={post.subtitle} />
    </div>
  )
}

function PostAbstract({ abstract }: { abstract: string }) {
  return (
    <Prose>
      {abstract}
    </Prose>
  )
}

function PostPreview({ post }: { post: PostMetadata }) {
  const fragment = post.id.join('/')
  const url = `/blog/posts/${fragment}`

  return (
    <Link href={url} className='hover:text-sky-800 dark:hover:text-slate-100'>
      <PostHeader post={post} />
      <PostAbstract abstract={post.abstract} />
    </Link>
  )
}


export const metadata: Metadata = {
  title: 'Maximilian Luz | Blog',
  description: 'Blog of Maximilian Luz',
}

export default async function BlogIndex() {
  const posts = await getAllPosts()
  const sorted = posts.sort((a, b) => b.date - a.date)

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='mx-auto max-w-prose flex flex-col gap-10'>
          {
            sorted.map((post) => <>
              <PostPreview post={post} key={post.id.join('/')} />
              <hr className='last:hidden h-px bg-slate-200 dark:bg-slate-800 border-0' />
            </>)
          }
        </div>
      </div>
    </main>
  )
}

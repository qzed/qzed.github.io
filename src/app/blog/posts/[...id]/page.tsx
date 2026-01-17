import { notFound } from 'next/navigation'

import { getAllPostsRaw, getPostById } from '@/lib/blog'

import Prose from '@/components/Prose'
import { Mdx } from '@/components/Mdx'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'


function PostTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className='mt-2 sm:mt-3 mb-5 sm:mb-6'>
      <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
      {subtitle ? <h2 className='text-2xl sm:text-3xl mt-4'>{subtitle}</h2> : <></>}
    </div>
  )
}

function PostDate({ date }: { date: string }) {
  const displayDate = new Date(date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return <p className='text-gray-500 dark:text-gray-500'>{displayDate}</p>
}

function Tag({ name }: { name: string }) {
  return (
    <p className='
      px-1 py-0.5
      rounded
      text-sm font-light whitespace-nowrap
      bg-slate-300 text-slate-900
      dark:bg-slate-800 dark:text-slate-100
    '>
      #{name}
    </p>
  )
}

function PostTags({ tags }: { tags?: string[] }) {
  return (
    <div className='flex flex-wrap items-center gap-1'>
      {
        tags?.map((tag) => {
          return <Tag name={tag} key={tag} />
        })
      }
    </div>
  )
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
      <PostTags tags={meta.tags} />
    </div>
  )
}


type Params = {
  id: string[]
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <article className='mx-auto max-w-prose'>
          <PostHeader meta={post} />
          <Prose>
            <Mdx code={post.code} />
          </Prose>
        </article>
      </div>
    </main>
  )
}

export function generateMetadata({ params }: { params: Params }) {
  const post = getPostById(params.id)

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

export function generateStaticParams() {
  const posts = getAllPostsRaw()

  return posts.map((post) => {
    return { id: post.id }
  })
}

import React from 'react'

import { getAllPosts, getPostById } from '@/lib/blog'

import MdxComponent from '@/components/MdxComponent'

import styles from '@/styles/blog-post.module.scss'
import mdstyles from '@/styles/markdown.module.scss'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'


type Params = {
  id: string
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPostById(params.id)

  const date = new Date(post.meta.date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <main>
      <div className={styles.topspace}></div>
      <div className={styles.page}>
        <div className={styles.column}>
          <div className={styles.text}>
            <h1 className={styles.title}>{post.meta.title}</h1>
            <div className={styles.meta}>
              <p className={styles.date}>{date}</p>
              <div className={styles.tags}>
                {
                  post.meta.tags?.map((tag) => {
                    return (<p className={styles.tag} key={tag}>#{tag}</p>)
                  })
                }
              </div>
            </div>
            <div className={mdstyles.markdown}>
              <MdxComponent code={post.content} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPostById(params.id)

  return {
    title: `${post.meta.title} | ${post.meta.author}`,
    description: "Blog of Maximilian Luz",
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => {
    return { id: post.id }
  })
}

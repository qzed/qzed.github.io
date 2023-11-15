import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts } from '@/lib/blog'

import styles from '@/styles/blog-index.module.scss'
import mdstyles from '@/styles/markdown.module.scss'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'


export const metadata: Metadata = {
  title: 'Blog | Maximilian Luz',
  description: 'Blog of Maximilian Luz',
}

export default async function BlogIndex() {
  const posts = await getAllPosts()
  const sorted = posts.sort((a, b) => b.date - a.date)

  return (
    <main>
      {sorted.map((post) => {
        const MdxAbstract = getMDXComponent(post.abstract)

        return (
          <div className={styles.post} key={post.id}>
            <div className={styles.column}>
              <div className={styles.text}>
                <div>
                  <div>
                    <div className={styles.title}>
                      <h1>
                        <Link href={`/blog/posts/${post.id}`}>{post.title}</Link>
                      </h1>
                    </div>
                    <div className={styles.meta}>
                      <p className={styles.date}>
                        {
                          new Date(post.date).toLocaleDateString('en-us', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })
                        }
                      </p>
                      <div className={styles.tags}>
                        {
                          post.tags?.map((tag) => {
                            return (<p className={styles.tag} key={tag}>#{tag}</p>)
                          })
                        }
                      </div>
                    </div>
                    <div className={mdstyles.markdown}>
                      <MdxAbstract />
                    </div>
                    <div>
                      <Link href={`/blog/posts/${post.id}`}>Read more...</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  )
}

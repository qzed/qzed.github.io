import Head from 'next/head'
import Post from '../../types/blog/post'
import styles from '../../styles/blog-index.module.scss'
import mdstyles from '../../styles/markdown.module.scss'
import Footer from '../../components/Footer'

import { getAllPosts } from '../../lib/blog'
import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import 'katex/dist/katex.css';
import 'highlight.js/styles/nord.css';

type Props = {
  posts: Post[]
}

const BlogIndex = ({ posts }: Props) => {
  const sorted = posts.sort((a, b) => b.date - a.date)

  return (
    <div className={styles.base}>
      <Head>
        <title>Blog | Maximilian Luz</title>
        <meta name="description" content="Blog of Maximilian Luz" />
      </Head>

      <main>
        {sorted.map((post) => {
          const MdxAbstract = getMDXComponent(post.abstract)

          return (
            <div className={styles.post} key={post.slug}>
              <div className={styles.column}>
                <div className={styles.text}>
                  <div>
                    <div>
                      <div className={styles.title}>
                        <a href={`/blog/posts/${post.slug}`}>
                          <h1>{post.title}</h1>
                        </a>
                      </div>
                      <div className={styles.meta}>
                        <div className={styles.tags}>
                          {
                            post.tags?.map((tag) => {
                              return (<p className={styles.tag} key={tag}>#{tag}</p>)
                            })
                          }
                        </div>
                        <p className={styles.date}>
                          {
                            new Date(post.date).toLocaleDateString('en-us', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          }
                        </p>
                      </div>
                      <div className={mdstyles.markdown}>
                        <MdxAbstract/>
                      </div>
                      <div>
                        <a href={`/blog/posts/${post.slug}`}>Read more...</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </main>

      <Footer/>
    </div>
  )
}

export default BlogIndex

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

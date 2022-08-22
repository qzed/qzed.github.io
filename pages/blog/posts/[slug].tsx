import React from 'react'
import Head from 'next/head'
import {getMDXComponent} from 'mdx-bundler/client'

import Post from '../../../types/blog/post'
import Footer from '../../../components/Footer'
import styles from '../../../styles/blog-post.module.scss'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import NavBar from '../../../components/NavBar'

import mdstyles from '../../../styles/markdown.module.scss'

import 'katex/dist/katex.css';
import 'prism-themes/themes/prism-nord.css'


type Props = {
  post: Post
}

const BlogPost = ({ post }: Props) => {
  const title = `${post.title} | ${post.author}`;

  const date = new Date(post.date).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  const MdxContent = React.useMemo(() => getMDXComponent(post.content), [post.content])

  return (
    <div className={styles.base}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog of Maximilian Luz" />
      </Head>

      <NavBar/>

      <main>
        <div className={styles.topspace}></div>
        <div className={styles.page}>
          <div className={styles.column}>
            <div className={styles.text}>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <div className={styles.tags}>
                  {
                    post.tags?.map((tag) => {
                      return (<p className={styles.tag} key={tag}>#{tag}</p>)
                    })
                  }
                </div>
                <p className={styles.date}>{date}</p>
              </div>
              <div className={mdstyles.markdown}>
                <MdxContent/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default BlogPost

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

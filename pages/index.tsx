import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss'

import MeshBackground from '../components/MeshBackground';


const Home: NextPage = () => {
  return (
    <div className={styles.base}>
      <Head>
        <title>Maximilian Luz</title>
        <meta name="description" content="Personal website of Maximilian Luz" />
      </Head>

      <MeshBackground className={styles.particles} />

      <main className={styles.wrapper}>
        <p className={styles.notice}>
          Under construction... Check back later.
        </p>
        <p className={styles.referral}>
          In the meantime:
          Have a look at the <a href="https://www.github.com/qzed">things I&apos;m working on</a>!
        </p>
      </main>
    </div>
  )
}

export default Home

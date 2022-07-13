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

      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.column}>
            <div className={styles.text}>
              <p className={styles.notice}>
                Under construction... Check back later.
              </p>
              <p className={styles.referral}>
                In the meantime:
                Have a look at the <a href="https://www.github.com/qzed">things I&apos;m working on</a>!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

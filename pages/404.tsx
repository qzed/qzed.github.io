import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/404.module.scss'

import MeshBackground from '../components/MeshBackground';


const Error404: NextPage = () => {
  return (
    <div className={styles.base}>
      <Head>
        <title>Page not found | Maximilian Luz</title>
      </Head>

      <MeshBackground className={styles.particles} />

      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.column}>
            <div className={styles.text}>
              <p className={styles.errorcode}>404</p>
              <p className={styles.errortext}>Page not found!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error404

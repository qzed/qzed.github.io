import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/404.module.scss'

import PolyBackground from '../components/PolyBackground';


const Error404: NextPage = () => {
  return (
    <div className={styles.base}>
      <Head>
        <title>Page not found | Maximilian Luz</title>
      </Head>

      <PolyBackground className={styles.particles} />

      <main className={styles.wrapper}>
        <p className={styles.errorcode}>404</p>
        <p className={styles.errortext}>Page not found!</p>
      </main>
    </div>
  )
}

export default Error404

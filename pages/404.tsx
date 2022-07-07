import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss'

const Error404: NextPage = () => {
  return (
    <div className={styles.base}>
      <Head>
        <title>Maximilian Luz</title>
      </Head>

      <main className={styles.wrapper}>
        <p className={styles.notice}>
          404
        </p>
        <p className={styles.referral}>
          Page not found.
        </p>
      </main>
    </div>
  )
}

export default Error404

import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/404.module.scss'


const Error404: NextPage = () => {
  return (
    <div className={styles.base}>
      <Head>
        <title>Page not found | Maximilian Luz</title>
      </Head>

      <main>
        <div className={`${styles.section} ${styles.error}`}>
          <div className={styles.column}>
            <div className={styles.text}>
              <p className={styles.errorcode}>404</p>
              <p className={styles.errortext}>Page not found!</p>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Error404

import { Metadata } from 'next'

import styles from '@/styles/not-found.module.scss'

export const metadata: Metadata = {
  title: 'Page not found | Maximilian Luz',
}

export default function NotFound() {
  return (
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
  )
}

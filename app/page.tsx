import React from 'react'
import NavBar from '../components/NavBar'
import ObfuscatedLink from '../components/ObfuscatedLink'
import { renderMdxComponent } from '../lib/mdx'
import styles from '../styles/home.module.scss'
import mdstyles from '../styles/markdown.module.scss'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Maximilian Luz',
  description: 'Personal website of Maximilian Luz',
}

export default async function Home() {
  const About = await renderMdxComponent("_data/about.mdx")

  return (
      <main>
        <div className={`${styles.section} ${styles.profile}`}>
          <div className={styles.column}>
            <div className={styles.profileCard}>
              <div className={styles.profileMain}>
                <img className={styles.profileImage} src="/assets/profile.png" alt="Profile Picture" />
                <div className={styles.profileText}>
                  <p className={styles.profileName}>
                    Maximilian Luz
                  </p>
                  <ul>
                    <li>PhD Student @ <a href="https://rl.uni-freiburg.de/">Robot Learning Lab, University of Freiburg</a></li>
                    <li>Linux Kernel Maintainer</li>
                  </ul>
                </div>
              </div>
              <div className={styles.profileLinks}>
                <a href="https://github.com/qzed">
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <title>GitHub</title>
                    <use href="/assets/social-icons.svg#github"></use>
                  </svg>
                </a>
                <a href="https://twitter.com/mxnluz">
                  <svg className={styles.icon} viewBox="-1.5 -1.5 18 18">
                    <title>Twitter</title>
                    <use href="/assets/social-icons.svg#twitter"></use>
                  </svg>
                </a>
                <a href="https://scholar.google.com/citations?user=6AO18q8AAAAJ">
                  <svg className={styles.icon} viewBox="38 38 436 436">
                    <title>Goolge Scholar</title>
                    <use href="/assets/social-icons.svg#google-scholar"></use>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/mxnluz">
                  <svg className={styles.icon} viewBox="-3.0 -3.0 22 22">
                    <title>LinkedIn</title>
                    <use href="/assets/social-icons.svg#linkedin"></use>
                  </svg>
                </a>
                <ObfuscatedLink href="bWFpbHRvOk1heGltaWxpYW4lMjBMdXo8bUBteG5sdXouaW8+">
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <title>E-Mail</title>
                    <use href="/assets/social-icons.svg#email"></use>
                  </svg>
                </ObfuscatedLink>
              </div>
            </div>
          </div>
        </div>

        <NavBar />

        <div className={`${styles.section} ${styles.about}`}>
          <div className={styles.column}>
            <div className={styles.text}>
              <div className={mdstyles.markdown}>
                <About />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

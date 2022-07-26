import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import styles from '../styles/home.module.scss'


function obfuscate(text: string): string {
  return Buffer.from(text).toString('base64')
}

function deobfuscate(text: string): string {
  return Buffer.from(text, 'base64').toString('utf-8')
}


const Home: NextPage = () => {
  const email = "mailto:Maximilian%20Luz<luzmaximilian@gmail.com>";
  const emailObfuscated = obfuscate(email);
                // <a href="mailto:Maximilian%20Luz<luzmaximilian@gmail.com>"></a>
  useEffect(() => {
    var elem = document.getElementById("maillink") as HTMLAnchorElement;

    if (elem !== null) {
      elem.href=deobfuscate(emailObfuscated);
    }
  });

  return (
    <div className={styles.base}>
      <Head>
        <title>Maximilian Luz</title>
        <meta name="description" content="Personal website of Maximilian Luz" />
      </Head>

      <main>
        <div className={`${styles.section} ${styles.profile}`}>
          <div className={styles.column}>
            <div className={styles.profileCard}>
              <div className={styles.profileMain}>
                <img className={styles.profileImage} src="/assets/profile.png" alt="Profile Picture"/>
                <div className={styles.profileText}>
                  <p className={styles.profileName}>
                    Maximilian Luz
                  </p>
                  <ul>
                    <li>M.Sc. Student in Computer Science</li>
                    <li>Currently looking for a PhD position</li>
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
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <title>Twitter</title>
                    <use href="/assets/social-icons.svg#twitter"></use>
                  </svg>
                </a>
                <a href="" id="maillink">
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <title>E-Mail</title>
                    <use href="/assets/social-icons.svg#email"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.about}`}>
          <div className={styles.column}>
            <div className={styles.text}>
              <h2>About Me</h2>
              <p>
                Hi, I&apos;m Maximilian.
              </p>
              <p>
                I just finished my Master&apos;s Thesis in Computer Science at the University of Stuttgart, Germany.
                I&apos;m interested in Computer Vision and Robotics and currently looking for a PhD position.
              </p>
              <p>
                In my spare time, I&apos;m a Linux Kernel maintainer for Microsoft Surface devices.
                Presently, I&apos;m trying to make the ARM-based Surface Pro X and its Qualcomm SoC play nice with Linux.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

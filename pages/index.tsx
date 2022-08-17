import { getMDXComponent } from 'mdx-bundler/client'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import { renderMdxFile } from '../lib/mdx'
import styles from '../styles/home.module.scss'
import mdstyles from '../styles/markdown.module.scss'


function obfuscate(text: string): string {
  return Buffer.from(text).toString('base64')
}

function deobfuscate(text: string): string {
  return Buffer.from(text, 'base64').toString('utf-8')
}


type Props = {
  about: string
}

const Home = (props: Props) => {
  const email = "mailto:Maximilian%20Luz<luzmaximilian@gmail.com>";
  const emailObfuscated = obfuscate(email);

  useEffect(() => {
    var elem = document.getElementById("maillink") as HTMLAnchorElement;

    if (elem !== null) {
      elem.href=deobfuscate(emailObfuscated);
    }
  });

  const About = React.useMemo(() => getMDXComponent(props.about), [props.about])

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
                    <li>Research Assistant @ <a href="https://www.vis.uni-stuttgart.de/en/institute/research_group/computer_vision/">Computer Vision Group, <br/> University of Stuttgart</a></li>
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
              <div className={mdstyles.markdown}>
                <About />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      about: (await renderMdxFile("pages/index.about.mdx")).code
    }
  }
}

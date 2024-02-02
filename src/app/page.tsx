import { Metadata } from 'next'
import Link from 'next/link'

import Prose from '@/components/Prose'

import socials from '@data/links/socials'


function Profile() {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <img
        className='size-32 mx-5 mt-4 mb-1 rounded-full border-[3px] border-slate-300 dark:border-slate-700'
        src="/assets/profile.png"
        alt="Profile Picture"
      />
      <div className='text-right mx-5 my-4'>
        <p className='text-6xl text-nowrap whitespace-nowrap font-semibold'>
          Maximilian Luz
        </p>
        <ul className='text-sm'>
          <li>PhD Student @ <a href="https://rl.uni-freiburg.de/">Robot Learning Lab, University of Freiburg</a></li>
          <li>Linux Kernel Maintainer</li>
        </ul>
      </div>
    </div>
  )
}

function SocialLink({ Anchor, Icon, href }: { Anchor?: any, Icon: any, href: string }) {
  const LinkComponent = Anchor || Link;

  return (
    <LinkComponent href={href} className='
      p-2
      rounded
      bg-slate-300 dark:bg-slate-800
      text-slate-700 dark:text-slate-200
      border border-transparent
      hover:border-slate-400 dark:hover:border-slate-600
    '>
      <Icon className='size-10' />
    </LinkComponent>
  )
}

function SocialLinks() {
  return (
    <div className='flex items-center gap-3 w-fit mx-auto my-12'>
      {
        socials.map((entry) => {
          return <SocialLink
            Anchor={entry.anchor}
            Icon={entry.icon}
            href={entry.link}
            key={entry.title}
          />
        })
      }
    </div>
  )
}

function Biography() {
  return (
    <Prose>
      <h2>Biography</h2>
      <p>
        I am interested in Computer Vision, Robotics and Machine Learning in
        general, working as a PhD student at the <a href="https://rl.uni-freiburg.de">
        Robot Learning Lab of the University of Freiburg</a>.
      </p>
      <p>
        In my spare time, I am a Linux Kernel maintainer for Microsoft Surface
        devices. Presently, I am trying to make the ARM-based Surface Pro X and
        its Qualcomm SoC play nice with Linux.
      </p>
    </Prose>
  )
}


export const metadata: Metadata = {
  title: 'Maximilian Luz',
  description: 'Personal website of Maximilian Luz',
}

export default async function Home() {
  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='mx-auto max-w-prose'>
          <Profile />
          <SocialLinks />
          <Biography />
        </div>
      </div>
    </main >
  )
}

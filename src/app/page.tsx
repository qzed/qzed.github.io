import { Metadata } from 'next'
import Link from 'next/link'

import { MdxFromFile } from '@/components/Mdx'
import Prose from '@/components/Prose'

import socials from '@/components/links/socials'


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

function SocialLink({ Icon, href }: { Icon: any, href: string }) {
  return (
    <Link href={href} className='
      p-2
      rounded
    bg-slate-200 dark:bg-slate-800
    text-slate-700 dark:text-slate-200
    hover:text-sky-700 dark:hover:text-sky-500
      border border-slate-300 dark:border-slate-700
      hover:order-slate-400 dark:hover:border-slate-600

    '>
      <Icon className='size-10' />
    </Link>
  )
}

function SocialLinks() {
  return (
    <div className='flex items-center gap-3 w-fit mx-auto'>
      {
        socials.map((entry) => {
          return <SocialLink Icon={entry.icon} href={entry.link} key={entry.title} />
        })
      }
    </div>
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
          <div className='my-12'>
            <SocialLinks />
          </div>
          <Prose>
            <MdxFromFile path="data/biography.mdx" />
          </Prose>
        </div>
      </div>
    </main >
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import CollapsibleList from '@/components/CollapsibleList'
import Prose from '@/components/Prose'
import SectionHeading from '@/components/SectionHeading'
import Publication, { LinkChip } from '@/components/Publication'
import icons from '@/components/icons'

import awards from '@data/awards'
import news from '@data/news'
import publications from '@data/publications'
import socials from '@data/links/socials'


function Affiliation() {
  return (
    <>
      <p>
        <span className='whitespace-nowrap'>PhD Student,</span>
        <> </>
        <a href="https://rl.uni-freiburg.de/" className='whitespace-nowrap hover:text-sky-700 dark:hover:text-sky-400'>
          Robot Learning Lab
        </a>,
        <> </>
        <span className='whitespace-nowrap'>University of Freiburg</span>
      </p>
      <p>Linux Kernel Maintainer</p>
    </>
  )
}

function SocialIcon({ Anchor, Icon, href, title }: { Anchor?: any, Icon: any, href: string, title: string }) {
  const LinkComponent = Anchor || Link;

  return (
    <LinkComponent href={href} title={title} aria-label={title} className='
      p-1.5 rounded
      text-slate-500 dark:text-slate-400
      hover:text-sky-700 dark:hover:text-sky-400
      hover:bg-slate-200 dark:hover:bg-slate-800
      transition-colors
    '>
      <Icon className='size-5' />
    </LinkComponent>
  )
}

function SocialLabel({ Anchor, Icon, href, title }: { Anchor?: any, Icon: any, href: string, title: string }) {
  const LinkComponent = Anchor || Link;

  return (
    <LinkComponent href={href} title={title} className='
      flex items-center gap-3 py-1
      text-slate-600 dark:text-slate-400
      hover:text-sky-700 dark:hover:text-sky-400
      transition-colors
    '>
      <Icon className='size-4' />
      {title}
    </LinkComponent>
  )
}

// Profile shown in the sticky sidebar on large screens.
function ProfileSidebar() {
  return (
    <aside className='hidden lg:block w-60 shrink-0'>
      <div className='sticky top-24 flex flex-col'>
        <img
          className='size-40 rounded-full ring-4 ring-slate-200 dark:ring-slate-800'
          src="/assets/profile.jpg"
          alt="Profile Picture"
        />
        <h1 className='mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100'>
          Maximilian Luz
        </h1>
        <div className='mt-2 text-sm text-slate-600 dark:text-slate-400 flex flex-col gap-1'>
          <Affiliation />
        </div>
        <nav className='mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 text-sm flex flex-col'>
          {
            socials.map((entry) => {
              return <SocialLabel
                Anchor={entry.anchor}
                Icon={entry.icon}
                href={entry.link}
                title={entry.title}
                key={entry.title}
              />
            })
          }
        </nav>
      </div>
    </aside>
  )
}

// Compact profile shown above the content on small and medium screens.
function ProfileHeader() {
  return (
    <div className='lg:hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12'>
      <img
        className='size-28 sm:size-32 shrink-0 rounded-full ring-4 ring-slate-200 dark:ring-slate-800'
        src="/assets/profile.jpg"
        alt="Profile Picture"
      />
      <div className='text-center sm:text-left'>
        <h1 className='text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100'>
          Maximilian Luz
        </h1>
        <div className='mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400'>
          <Affiliation />
        </div>
        <div className='flex items-center gap-1 -ml-1.5 mt-4 justify-center sm:justify-start'>
          {
            socials.map((entry) => {
              return <SocialIcon
                Anchor={entry.anchor}
                Icon={entry.icon}
                href={entry.link}
                title={entry.title}
                key={entry.title}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

function Biography() {
  return (
    <>
      <p className='lead'>
        I am a PhD student at the <a href="https://rl.uni-freiburg.de">Robot
        Learning Lab of the University of Freiburg</a>, interested in Computer
        Vision, Robotics, and Machine Learning in general.
      </p>
      <p>
        In my spare time, I am a Linux Kernel maintainer for Microsoft Surface
        devices.
      </p>
    </>
  )
}

function formatDate(date: string) {
  const [year, month] = date.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function News() {
  return (
    <>
      <SectionHeading>News</SectionHeading>
      <CollapsibleList visible={4} className='not-prose flex flex-col gap-2'>
        {
          news.map((entry, i) => {
            return (
              <li className='flex gap-4' key={i}>
                <span className='w-20 shrink-0 text-slate-400 dark:text-slate-500 tabular-nums'>{formatDate(entry.date)}</span>
                <span className='
                  [&_a]:font-medium [&_a]:underline
                  [&_a]:decoration-slate-400 [&_a:hover]:decoration-slate-700
                  dark:[&_a]:decoration-slate-600 dark:[&_a:hover]:decoration-slate-300
                '>
                  {entry.content}
                </span>
              </li>
            )
          })
        }
      </CollapsibleList>
    </>
  )
}

function SelectedPublications() {
  return (
    <>
      <SectionHeading action={
        <Link href="/publications" className='
          whitespace-nowrap normal-case tracking-normal font-normal
          text-slate-500 hover:text-sky-700 dark:hover:text-sky-400
        '>
          All publications
        </Link>
      }>
        Selected Publications
      </SectionHeading>
      <div className='not-prose flex flex-col gap-7 sm:gap-8'>
        {
          publications.filter((entry) => entry.featured).map((entry) => {
            return <Publication data={entry} teaser key={entry.id} />
          })
        }
      </div>
    </>
  )
}

function Awards() {
  const sorted = [...awards].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <SectionHeading>Awards &amp; Honors</SectionHeading>
      <ul className='not-prose flex flex-col gap-4'>
        {
          sorted.map((entry) => {
            const paper = publications.find((p) => p.id == entry.publication)

            return (
              <li id={`award-${entry.id}`} className='target-highlight flex gap-4' key={entry.id}>
                <span className='w-20 shrink-0 text-slate-400 dark:text-slate-500 tabular-nums'>{formatDate(entry.date)}</span>
                <div className='flex flex-col gap-1.5 items-start'>
                  <span>
                    <span className='font-semibold'>{entry.title}</span>
                    <>, </>
                    <span className='italic'>{entry.event}</span>
                  </span>
                  {
                    paper &&
                    <span className='text-slate-600 dark:text-slate-400'>
                      <>for </>
                      <a href={`/publications#pub-${paper.id}`} className='
                        font-medium border-b border-slate-300 dark:border-slate-700
                        hover:border-slate-700 hover:text-slate-800
                        dark:hover:border-slate-400 dark:hover:text-slate-200
                      '>
                        {paper.title}
                      </a>
                    </span>
                  }
                  <div className='flex flex-row flex-wrap gap-2'>
                    <LinkChip title="Certificate" link={entry.certificate} Icon={icons.Trophy} />
                    {
                      [...(entry.links ?? []), ...(paper?.links ?? [])].map((link) => {
                        return <LinkChip title={link.title} link={link.link} Icon={link.icon} key={link.title} />
                      })
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

function OpenSource() {
  return (
    <>
      <SectionHeading>Open Source</SectionHeading>
      <p>
        I strive to publish the code for all of my papers. You can find it
        linked with each <Link href="/publications">publication</Link>.
      </p>
      <ul>
        <li>
          Maintainer of several Microsoft Surface platform drivers in the
          mainline Linux kernel, including the <a href="https://docs.kernel.org/driver-api/surface_aggregator/index.html">
          Surface System Aggregator Module (SSAM)</a> subsystem.
        </li>
        <li>
          Core maintainer of and contributor to the <a href="https://github.com/linux-surface/linux-surface">
          linux-surface</a> project.
        </li>
      </ul>
    </>
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
        <div className='flex justify-center gap-16'>
          <ProfileSidebar />
          <div className='flex-1 min-w-0 max-w-prose'>
            <ProfileHeader />
            <Prose>
              <Biography />
              <News />
              <SelectedPublications />
              <Awards />
              <OpenSource />
            </Prose>
          </div>
        </div>
      </div>
    </main >
  )
}

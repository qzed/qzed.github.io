import { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import CollapsibleList from '@/components/CollapsibleList'
import Prose from '@/components/Prose'
import Publication, { AwardChip } from '@/components/Publication'
import icons from '@/components/icons'

import awards from '@data/awards'
import news from '@data/news'
import publications from '@data/publications'
import socials from '@data/links/socials'


function SocialLink({ Anchor, Icon, href, title }: { Anchor?: any, Icon: any, href: string, title: string }) {
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

function SocialLinks() {
  return (
    <div className='flex items-center gap-1 -ml-1.5 mt-4 justify-center sm:justify-start'>
      {
        socials.map((entry) => {
          return <SocialLink
            Anchor={entry.anchor}
            Icon={entry.icon}
            href={entry.link}
            title={entry.title}
            key={entry.title}
          />
        })
      }
    </div>
  )
}

function Profile() {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8'>
      <img
        className='size-28 sm:size-36 shrink-0 rounded-full ring-4 ring-slate-200 dark:ring-slate-800'
        src="/assets/profile.jpg"
        alt="Profile Picture"
      />
      <div className='text-center sm:text-left'>
        <h1 className='font-display text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-slate-100'>
          Maximilian Luz
        </h1>
        <div className='mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400'>
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
        </div>
        <SocialLinks />
      </div>
    </div>
  )
}

function SectionHeading({ children, action }: { children: ReactNode, action?: ReactNode }) {
  return (
    <h2 className='
      not-prose mt-14 sm:mt-16 mb-5 sm:mb-6
      flex items-center gap-4
      text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]
      text-sky-800 dark:text-sky-400
    '>
      <span className='whitespace-nowrap'>{children}</span>
      <span className='flex-1 h-px bg-slate-300 dark:bg-slate-700' />
      {action}
    </h2>
  )
}

function ArrowLink({ href, children, className }: { href: string, children: ReactNode, className?: string }) {
  const LinkComponent = href.startsWith('/') ? Link : 'a'

  return (
    <LinkComponent href={href} className={`
      inline-flex items-center gap-1 whitespace-nowrap
      text-slate-500 hover:text-sky-700 dark:hover:text-sky-400
      ${className ?? ''}
    `}>
      {children}
      <icons.ArrowForward className='size-[1.1em]' />
    </LinkComponent>
  )
}

function Biography() {
  return (
    <>
      <SectionHeading>Biography</SectionHeading>
      <p>
        I am interested in Computer Vision, Robotics and Machine Learning in
        general, working as a PhD student at the <a href="https://rl.uni-freiburg.de">
        Robot Learning Lab of the University of Freiburg</a>.
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
      <CollapsibleList visible={3} className='not-prose flex flex-col gap-2'>
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
            return <Publication data={entry} key={entry.id} />
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
              <li className='flex gap-4' key={entry.id}>
                <span className='w-20 shrink-0 text-slate-400 dark:text-slate-500 tabular-nums'>{formatDate(entry.date)}</span>
                <div className='flex flex-col gap-1.5 items-start'>
                  <span>
                    <span className='font-semibold'>{entry.title}</span>
                    <>, </>
                    <span className='italic'>{entry.event}</span>
                  </span>
                  <div className='flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-sm'>
                    <AwardChip title="Certificate" link={entry.certificate} />
                    {
                      paper &&
                      <ArrowLink href={paper.link}>{paper.short}</ArrowLink>
                    }
                    {
                      entry.links?.map((link) => {
                        return <ArrowLink href={link.link} key={link.title}>{link.title}</ArrowLink>
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
        <div className='mx-auto max-w-prose'>
          <Profile />
          <Prose>
            <Biography />
            <News />
            <SelectedPublications />
            <Awards />
            <OpenSource />
          </Prose>
        </div>
      </div>
    </main >
  )
}

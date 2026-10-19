import { Metadata } from 'next'
import Link from 'next/link'

import CollapsibleList from '@/components/CollapsibleList'
import Prose from '@/components/Prose'
import Publication, { LinkChip } from '@/components/Publication'
import icons from '@/components/icons'

import awards from '@data/awards'
import news from '@data/news'
import publications from '@data/publications'
import socials from '@data/links/socials'


function Profile() {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <img
        className='size-32 mx-5 mt-4 mb-1 rounded-full border-[3px] border-slate-300 dark:border-slate-700'
        src="/assets/profile.jpg"
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
    <>
      <h2>Biography</h2>
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
      <h2>News</h2>
      <CollapsibleList visible={3} className='not-prose flex flex-col gap-2'>
        {
          news.map((entry, i) => {
            return (
              <li className='flex gap-4' key={i}>
                <span className='w-20 shrink-0 text-slate-500 tabular-nums'>{formatDate(entry.date)}</span>
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
      <h2 className='flex items-baseline justify-between gap-4'>
        <span>Selected Publications</span>
        <Link href="/publications" className='text-sm sm:text-base font-normal whitespace-nowrap'>
          All publications &rarr;
        </Link>
      </h2>
      <div className='not-prose flex flex-col gap-5 sm:gap-6'>
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
  return (
    <>
      <h2>Awards &amp; Honors</h2>
      <ul className='not-prose flex flex-col gap-3'>
        {
          awards.map((entry) => {
            const paper = publications.find((p) => p.id == entry.publication)

            return (
              <li className='flex gap-4' key={entry.id}>
                <span className='w-20 shrink-0 text-slate-500 tabular-nums'>{formatDate(entry.date)}</span>
                <div className='flex flex-col gap-1.5 items-start'>
                  <span>
                    <span className='font-semibold'>{entry.title}</span>
                    <>, </>
                    <span className='italic'>{entry.event}</span>
                  </span>
                  <div className='flex flex-row flex-wrap gap-2'>
                    <LinkChip title="Certificate" link={entry.certificate} Icon={icons.Trophy} />
                    {
                      [...(paper?.links ?? []), ...(entry.links ?? [])].map((link) => {
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
      <h2>Open Source</h2>
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
          <SocialLinks />
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

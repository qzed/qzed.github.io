import { Metadata } from 'next'
import { Fragment } from 'react'

import Publication from '@/components/Publication'
import SectionHeading from '@/components/SectionHeading'

import publications from '@data/publications'


function Group({ title, publications }: { title: string, publications: any[] }) {
  return (
    <div>
      <SectionHeading className='mb-5 sm:mb-6'>{title}</SectionHeading>
      <div className='flex flex-col gap-5 sm:gap-6'>
        {
          publications.map((entry) => {
            return (
              <Fragment key={entry.title} >
                <Publication data={entry} />
                <hr className='last:hidden h-px bg-slate-200 dark:bg-slate-800 border-0' />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'Maximilian Luz | Publications',
  description: 'Publications of Maximilian Luz',
}

export default async function Publications() {
  const years = Array.from(new Set(publications.map((entry) => entry.year))).sort().reverse()

  let ordered = years.map((year) => {
    return { year: String(year), publications: publications.filter((entry) => entry.year == year) }
  });

  return (
    <main>
      <div className='py-8 sm:py-12 lg:py-16 px-8'>
        <div className='mx-auto max-w-prose flex flex-col gap-12'>
          {
            ordered.map(({ year, publications }) => {
              return <Group title={year} publications={publications} key={year} />
            })
          }
        </div>
      </div>
    </main >
  )
}

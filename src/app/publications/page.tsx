import { Metadata } from 'next'
import { Fragment } from 'react'

import Publication from '@/components/Publication'

import publications from '@data/publications'


function Group({ title, publications }: { title: string, publications: any[] }) {
  return (
    <div>
      <h1 className='text-lg sm:text-2xl text-slate-500'>{title}</h1>
      <hr className='border-none h-px bg-slate-500' />
      <div className='flex flex-col gap-5 sm:gap-6 pt-5 sm:pt-8'>
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

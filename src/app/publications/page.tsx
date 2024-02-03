import { Metadata } from 'next'

import publications from '@data/publications'


const me = "Maximilian Luz"


function Title({ title, link }: { title: string, link: string }) {
  return (
    <h2 className='mb-1'>
      <a href={link} className='font-bold hover:text-sky-800 dark:hover:text-slate-100'>
        {title}
      </a>
    </h2>
  )
}

function Author({ author }: { author: any }) {
  let classes: string[] = []

  if (author.name == me) {
    classes.push('font-semibold')
  }

  if (author.link) {
    classes.push('border-b')
    classes.push('border-slate-300 hover:border-slate-700 hover:text-slate-800')
    classes.push('dark:border-slate-700 hover:dark:border-slate-400 hover:dark:text-slate-200')
  }

  const mark = author.mark ? <sup>{author.mark}</sup> : <></>

  return (
    <a href={author.link} className='whitespace-nowrap'>
      {
        <>
          <span className={classes.join(' ')}>{author.name}</span>
          <span>{mark}</span>
        </>
      }
    </a>
  )
}

function Authors({ authors }: { authors: any[] }) {
  let elems = <></>

  if (authors.length == 1) {
    elems = <Author author={authors[0]} />
  } else if (authors.length == 2) {
    elems = <>
      <Author author={authors[0]} />
      <> and </>
      <Author author={authors[1]} />
    </>
  } else {
    elems = <>
      {
        authors.slice(0, -1).map((author) => {
          return <><Author author={author} />, </>
        })
      }
      <>and <Author author={authors[authors.length - 1]} /></>
    </>
  }

  return (
    <div className='text-slate-700 dark:text-slate-400'>
      {elems}
    </div>
  )
}

function Published({ published, year }: { published: string, year: number }) {
  return (
    <div className='mt-1 dark:text-slate-300'>
      <span className='italic'>{published}</span>
      <>, </>
      <span className=''>{year}</span>
    </div>
  )
}

function Link({ title, link, Icon }: { title: string, link: string, Icon: any }) {
  return (
    <a href={link} className='
      py-1 px-2 text-xs sm:text-sm font-light whitespace-nowrap
      rounded-full border border-transparent
      bg-slate-300 dark:bg-slate-800
      hover:border-slate-400 dark:hover:border-slate-600
      flex items-center gap-1.5
    '>
      <Icon className='size-3.5' />
      {title}
    </a>
  )
}

function Links({ links }: { links: any[] }) {
  return (
    <div className='flex flex-row flex-wrap gap-2 mt-2'>
      {
        links.map((entry) => {
          return <Link title={entry.title} link={entry.link} Icon={entry.icon} key={entry.title} />
        })
      }
    </div>
  )
}

function Publication({ data }: { data: any }) {
  return (
    <div className='text-sm sm:text-base'>
      <Title title={data.title} link={data.link} />
      <Authors authors={data.authors} />
      <Published published={data.published} year={data.year} />
      <Links links={data.links} />
    </div>
  )
}

function Group({ title, publications }: { title: string, publications: any[] }) {
  return (
    <div>
      <h1 className='text-lg sm:text-2xl text-slate-500'>{title}</h1>
      <hr className='border-none h-px bg-slate-500' />
      <div className='flex flex-col gap-5 sm:gap-6 pt-5 sm:pt-8'>
        {
          publications.map((entry) => {
            return (
              <>
              <Publication data={entry} key={entry.title} />
              <hr className='last:hidden h-px bg-slate-200 dark:bg-slate-800 border-0' />
              </>
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

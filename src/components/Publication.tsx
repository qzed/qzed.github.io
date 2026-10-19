import { Fragment } from 'react'

import icons from '@/components/icons'

import awards from '@data/awards'


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
          return <Fragment key={author.name}><Author author={author} />, </Fragment>
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

export function AwardChip({ title, link }: { title: string, link: string }) {
  return (
    <a href={link} className='
      py-1 px-2 text-xs sm:text-sm font-light whitespace-nowrap
      rounded-full border border-transparent
      bg-amber-100 dark:bg-amber-950/60
      text-amber-800 dark:text-amber-300
      hover:border-amber-400 dark:hover:border-amber-700
      flex items-center gap-1.5
    '>
      <icons.Trophy className='size-3.5' />
      {title}
    </a>
  )
}

export function LinkChip({ title, link, Icon }: { title: string, link: string, Icon: any }) {
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

function Links({ links, awards }: { links: any[], awards: any[] }) {
  return (
    <div className='flex flex-row flex-wrap gap-2 mt-2'>
      {
        awards.map((entry) => {
          return <AwardChip title={entry.badge ?? entry.title} link={`/#award-${entry.id}`} key={entry.id} />
        })
      }
      {
        links.map((entry) => {
          return <LinkChip title={entry.title} link={entry.link} Icon={entry.icon} key={entry.title} />
        })
      }
    </div>
  )
}

// Renders and photos fill the teaser box and stretch to the height of the
// publication details, figures and diagrams are shown in full with padding.
// Hidden on small screens, where there is not enough space next to the
// details.
function Teaser({ src, fill, link, alt }: { src: string, fill?: boolean, link: string, alt: string }) {
  return (
    <a href={link} className={`
      shrink-0 self-start w-44 aspect-[4/3]
      ${fill ? 'sm:aspect-auto sm:self-stretch sm:min-h-33' : 'p-2'}
      hidden sm:flex items-center justify-center
      rounded-lg overflow-hidden bg-white
      border border-slate-200 dark:border-slate-700
      hover:ring-2 hover:ring-sky-600 dark:hover:ring-sky-400
      hover:border-sky-600 dark:hover:border-sky-400
      transition
    `}>
      <img
        src={src} alt={alt} loading='lazy'
        className={fill ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}
      />
    </a>
  )
}

export default function Publication({ data, teaser = false }: { data: any, teaser?: boolean }) {
  const related = awards.filter((entry) => entry.publication == data.id)

  const details = (
    <div className='text-sm sm:text-base min-w-0'>
      <Title title={data.title} link={data.link} />
      <Authors authors={data.authors} />
      <Published published={data.published} year={data.year} />
      <Links links={data.links} awards={related} />
    </div>
  )

  if (!teaser || !data.teaser) {
    return <div id={`pub-${data.id}`} className='target-highlight'>{details}</div>
  }

  return (
    <div id={`pub-${data.id}`} className='target-highlight flex flex-row gap-5'>
      <Teaser
        src={data.teaser} fill={data.teaserFill} link={data.link}
        alt={`Teaser for ${data.short ?? data.title}`}
      />
      {details}
    </div>
  )
}

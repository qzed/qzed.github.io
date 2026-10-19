'use client'

import { useEffect, useState } from 'react'

import icons from '@/components/icons'

export type TocEntry = {
  title: string
  url: string
  items: TocEntry[]
}

type FlatEntry = {
  title: string
  id: string
  depth: number
}

function flatten(entries: TocEntry[], depth = 0): FlatEntry[] {
  return entries.flatMap((entry) => [
    { title: entry.title, id: decodeURIComponent(entry.url.slice(1)), depth },
    ...flatten(entry.items, depth + 1),
  ])
}

// Offset from the top of the viewport (below the header) at which a heading
// counts as the start of the current section.
const ACTIVE_OFFSET = 120

function useActiveId(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    function update() {
      frame = 0

      // The current section is the last one whose heading has been scrolled
      // past the offset.
      let current: string | null = null
      for (const id of ids) {
        const elem = document.getElementById(id)
        if (elem && elem.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = id
        }
      }

      setActive(current)
    }

    function onScroll() {
      if (!frame) {
        frame = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}

// Scroll back to the top of the page, removing the section from the URL.
function scrollToTop(event: React.MouseEvent) {
  event.preventDefault()
  window.scrollTo({ top: 0 })
  history.replaceState(null, '', location.pathname + location.search)
}

export default function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [entries] = useState(() => flatten(toc))
  const [ids] = useState(() => entries.map((entry) => entry.id))
  const active = useActiveId(ids)

  return (
    <nav aria-label='Table of contents' data-no-highlight className='text-sm'>
      <a
        href='#'
        onClick={scrollToTop}
        className='
          block mb-3 text-xs font-semibold uppercase tracking-[0.15em]
          text-sky-800 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300
        '
      >
        On this page
      </a>
      <ul className='border-l border-slate-200 dark:border-slate-800'>
        {
          entries.map((entry) => {
            const isActive = entry.id == active

            return (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  style={{ paddingLeft: `${0.75 + entry.depth * 0.75}rem` }}
                  className={`
                    block -ml-px py-1 border-l transition-colors
                    ${isActive
                      ? 'border-sky-600 text-sky-700 dark:border-sky-400 dark:text-sky-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}
                  `}
                >
                  {entry.title}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

// Collapsible table of contents shown above the post on smaller screens, where
// there is no space for it next to the post.
export function TableOfContentsInline({ toc, className }: { toc: TocEntry[], className?: string }) {
  const entries = flatten(toc)

  return (
    <details data-no-highlight className={`
      group rounded-lg text-sm
      border border-slate-200 dark:border-slate-800
      ${className ?? ''}
    `}>
      <summary className='
        flex items-center justify-between gap-4 px-4 py-3
        cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden
        text-xs font-semibold uppercase tracking-[0.15em] text-sky-800 dark:text-sky-400
      '>
        On this page
        <icons.ExpandMore className='size-5 transition-transform group-open:rotate-180' />
      </summary>
      <nav aria-label='Table of contents' className='px-4 pb-3'>
        <ul>
          {
            entries.map((entry) => {
              return (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    style={{ paddingLeft: `${entry.depth * 0.75}rem` }}
                    className='block py-1 text-slate-600 dark:text-slate-400 hover:text-sky-700 dark:hover:text-sky-400'
                  >
                    {entry.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </details>
  )
}

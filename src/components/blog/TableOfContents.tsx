'use client'

import { useEffect, useState } from 'react'

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

export default function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [entries] = useState(() => flatten(toc))
  const [ids] = useState(() => entries.map((entry) => entry.id))
  const active = useActiveId(ids)

  return (
    <nav aria-label='Table of contents' data-no-highlight className='text-sm'>
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sky-800 dark:text-sky-400'>
        On this page
      </p>
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

'use client'

import { useEffect, useRef, useState } from 'react'

type Preview = {
  html: string
  top: number
  left: number
  above: boolean
}

const WIDTH = 448        // max. width of the popover in px
const MARGIN = 16        // min. distance to the viewport edges in px
const GAP = 8            // distance between link and popover in px
const HIDE_DELAY = 150   // delay before hiding, allows moving into the popover

// Shows the full reference entry when hovering or focusing a citation in a
// blog post. References are looked up in the bibliography rendered at the end
// of the post.
export default function CitationPreview() {
  const [preview, setPreview] = useState<Preview | null>(null)
  const hideTimer = useRef<number>(0)

  useEffect(() => {
    function citation(target: EventTarget | null): HTMLAnchorElement | null {
      return target instanceof Element
        ? target.closest<HTMLAnchorElement>('.csl-ref > a[href^="#"]')
        : null
    }

    function show(link: HTMLAnchorElement) {
      const entry = document.getElementById(decodeURIComponent(link.hash.slice(1)))
      if (!entry) {
        return
      }

      window.clearTimeout(hideTimer.current)

      const rect = link.getBoundingClientRect()
      const width = Math.min(WIDTH, window.innerWidth - 2 * MARGIN)
      const left = Math.min(Math.max(rect.left, MARGIN), window.innerWidth - width - MARGIN)

      // Show below the citation unless it is close to the bottom.
      const above = rect.bottom > window.innerHeight * 0.65
      const top = above ? rect.top - GAP : rect.bottom + GAP

      setPreview({ html: entry.innerHTML, top, left, above })
    }

    function hide() {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => setPreview(null), HIDE_DELAY)
    }

    function onOver(event: Event) {
      const link = citation(event.target)
      if (link) {
        show(link)
      }
    }

    function onOut(event: Event) {
      if (citation(event.target)) {
        hide()
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        setPreview(null)
      }
    }

    function onScroll() {
      setPreview(null)
    }

    // Only show on hover for devices that support it, taps navigate to the
    // reference as before.
    const canHover = window.matchMedia('(hover: hover)').matches

    if (canHover) {
      document.addEventListener('mouseover', onOver)
      document.addEventListener('mouseout', onOut)
    }
    document.addEventListener('focusin', onOver)
    document.addEventListener('focusout', onOut)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('focusin', onOver)
      document.removeEventListener('focusout', onOut)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(hideTimer.current)
    }
  }, [])

  if (!preview) {
    return null
  }

  return (
    <div
      role='tooltip'
      onMouseEnter={() => window.clearTimeout(hideTimer.current)}
      onMouseLeave={() => setPreview(null)}
      style={{
        top: preview.top,
        left: preview.left,
        maxWidth: Math.min(WIDTH, window.innerWidth - 2 * MARGIN),
        transform: preview.above ? 'translateY(-100%)' : undefined,
      }}
      className='
        fixed z-50 px-4 py-3 rounded-lg shadow-lg
        text-sm font-light leading-relaxed
        bg-white dark:bg-slate-800
        text-slate-700 dark:text-slate-300
        border border-slate-200 dark:border-slate-700
        [&_a]:underline [&_a]:decoration-slate-300 dark:[&_a]:decoration-slate-600
        [&_a]:break-all
      '
      dangerouslySetInnerHTML={{ __html: preview.html }}
    />
  )
}

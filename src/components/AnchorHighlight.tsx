'use client'

import { useEffect } from 'react'

// Briefly highlights elements with the `target-highlight` class, as well as
// equations, references, and headings in blog posts, when navigated to via
// anchor link. Unlike CSS `:target`, this also re-triggers when a link to
// the current target is clicked again.
export default function AnchorHighlight() {
  useEffect(() => {
    // Resolve the element to highlight for an anchor target. In blog posts,
    // also highlight equations, references, footnotes, and headings, which
    // cannot be marked directly as they are generated from markdown.
    function resolve(target: HTMLElement | null): HTMLElement | null {
      if (!target) {
        return null
      }

      if (target.classList.contains('target-highlight')) {
        return target
      }

      if (!target.closest('.mdprose')) {
        return null
      }

      // Equation labels are empty elements inside the equation.
      const equation = target.closest<HTMLElement>('.katex-display')
      if (equation) {
        return equation
      }

      if (target.matches('.csl-entry, [id^="user-content-fn"], h2, h3, h4, h5, h6')) {
        return target
      }

      return null
    }

    function highlight(hash: string) {
      const elem = resolve(hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null)
      if (!elem) {
        return
      }

      elem.classList.add('target-highlight')

      // Remove and re-add class to restart the animation.
      elem.classList.remove('highlighted')
      void elem.offsetWidth
      elem.classList.add('highlighted')
    }

    // Set when a link that should not trigger the highlight has been clicked,
    // to skip the subsequent hash change.
    let skipNext = false

    function onHashChange() {
      if (skipNext) {
        skipNext = false
        return
      }

      highlight(location.hash)
    }

    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest('a')
      if (!link) {
        return
      }

      // Links can opt out of highlighting, e.g., for the table of contents.
      if (link.closest('[data-no-highlight]')) {
        skipNext = link.hash != location.hash
        return
      }

      // Links to other targets are handled via the hashchange event.
      const url = new URL(link.href, location.href)
      if (url.pathname == location.pathname && url.hash && url.hash == location.hash) {
        highlight(url.hash)
      }
    }

    highlight(location.hash)

    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}

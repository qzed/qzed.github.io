'use client'

import { useEffect } from 'react'

// Briefly highlights elements with the `target-highlight` class when navigated
// to via anchor link. Unlike CSS `:target`, this also re-triggers when a link to
// the current target is clicked again.
export default function AnchorHighlight() {
  useEffect(() => {
    function highlight(hash: string) {
      const elem = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!elem || !elem.classList.contains('target-highlight')) {
        return
      }

      // Remove and re-add class to restart the animation.
      elem.classList.remove('highlighted')
      void elem.offsetWidth
      elem.classList.add('highlighted')
    }

    function onHashChange() {
      highlight(location.hash)
    }

    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest('a')
      if (!link) {
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

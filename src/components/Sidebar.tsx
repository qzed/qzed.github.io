'use client'

import { PageLinks, SocialLinks } from './SidebarLinks'

import { useContext, useEffect } from 'react'
import { SidebarContext } from './SidebarContext'

export default function Sidebar() {
  const { isVisible, setVisible } = useContext(SidebarContext)

  // Close the sidebar when the window becomes wide enough to show the regular
  // navigation in the header (sm breakpoint).
  useEffect(() => {
    const media = window.matchMedia('(min-width: 40rem)')
    const close = () => media.matches && setVisible(false)

    media.addEventListener('change', close)
    return () => media.removeEventListener('change', close)
  }, [setVisible])

  const clsSidebar = isVisible ? "" : "-right-52"
  const clsLigthbox = isVisible ? "block" : "hidden"

  return (
    <>
      <div className={`
        fixed inset-0 w-full h-full z-20
        sm:hidden
        ${clsLigthbox}
        backdrop-blur-[0.5px]
        bg-black/25
      `} onClick={() => setVisible(false)}
      />
      <div className={`
        fixed inset-0 h-full top-12 lg:top-14
        left-auto z-30
        ${clsSidebar}
        transition-all
        duration-300
      `} onClick={() => setVisible(false)}>
        <div className="
          w-52 h-full
          border-l border-slate-200 dark:border-slate-800
          backdrop-blur-lg
          before:content-['']
          before:absolute before:top-0 before:left-0 before:inset-0
          before:opacity-75 before:bg-slate-100 dark:before:bg-slate-900
          before:z-[-1]
        ">
          <div className='h-full overflow-y-auto  py-8 px-4'>
            <nav>
              <PageLinks />
              <hr className="my-4 border-t border-slate-200 dark:border-slate-800" />
              <SocialLinks />
            </nav>
            <div className='h-8'></div>
          </div>
        </div>
      </div>
    </>
  )
}

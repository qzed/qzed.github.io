'use client'

import { PageLinks, SocialLinks } from './SidebarLinks'

import { useContext } from 'react'
import { SidebarContext } from './SidebarContext'

export default function Sidebar() {
  const { isVisible, setVisible } = useContext(SidebarContext)

  const clsSidebar = isVisible ? "" : "-left-52"
  const clsLigthbox = isVisible ? "block" : "hidden"

  return (
    <>
      <div className={`
        fixed inset-0 w-full h-full
        sm:hidden
        ${clsLigthbox}
        backdrop-blur-[0.5px]
        before:content-['']
        before:absolute before:top-0 before:left-0 before:inset-0
        before:sm:hidden
        before:opacity-25 before:bg-black dark:before:bg-black
        before:z-[-1]
      `} onClick={() => setVisible(false)}
      />
      <div className={`
        fixed inset-0 h-full top-12 lg:top-14
        right-auto z-10
        sm:-left-52 ${clsSidebar}
        transition-all
        duration-300
      `} onClick={() => setVisible(false)}>
        <div className="
          w-52 h-full
          border-r border-slate-200 dark:border-slate-800
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

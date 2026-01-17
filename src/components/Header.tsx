import type { ReactNode } from 'react'
import Link from 'next/link'

import Logo from '@/components/Logo'
import NavLink from "@/components/NavLink"
import SidebarButton from '@/components/SidebarButton'

import pages from '@data/links/pages'

function MenuItem({ href, children }: { href?: any, children?: ReactNode }) {
  return (
    <NavLink
      inactiveClassName='
        relative h-full flex items-center
        hover:text-sky-700 hover:dark:text-sky-500
        before:content-[""]
        before:absolute before:top-0 before:left-0 before:inset-0
        before:box-border before:border-b-4
        before:border-transparent hover:before:border-slate-200 dark:hover:before:border-slate-800
        transition-color before:transition-color duration-250 before:duration-250'
      activeClassName='
        relative h-full flex items-center
        text-sky-700 dark:text-sky-500
        before:content-[""]
        before:absolute before:top-0 before:left-0 before:inset-0
        before:box-border before:border-b-4
        before:border-sky-700 dark:before:border-sky-500
        transition-color before:transition-color duration-250 before:duration-250'
      href={href}
    >
      {children}
    </NavLink>
  )
}

function Menu() {
  return (
    <ul className='flex items-center gap-5 h-full'>
      {
        pages.map((entry) => {
          return (
            <li className='h-full' key={entry.title}>
              <MenuItem href={entry.link}>
                {entry.title}
              </MenuItem>
            </li>
          )
        })
      }
    </ul>
  )
}

function LogoBlock() {
  return (
    <div className='
      flex items-center gap-2 lg:gap-3
      select-none whitespace-nowrap
      text-sky-800 dark:text-sky-100
    '>
      <Logo className='h-5 lg:h-6' />
      <span className='text-xl lg:text-2xl font-medium'>
        Maximilian Luz
      </span>
    </div>
  )
}

export default function Header() {
  return (
    <header className='
      fixed top-0 w-full h-12 lg:h-14 z-40 flex-none
      border-b border-slate-200 dark:border-slate-800
    '>
      <div className='
        absolute top-0 left-0 inset-0
        backdrop-blur-lg 
        before:content-[""]
        before:absolute before:top-0 before:left-0 before:inset-0
        before:opacity-75 before:bg-slate-100 dark:before:bg-slate-900
        before:z-[-1]
      '>
        <div className='
          flex items-center
          px-8 max-w-screen-xl mx-auto h-full
          text-slate-900 dark:text-slate-100
        '>
          <Link className='mr-auto' href='/'>
            <LogoBlock />
          </Link>
          <nav className='h-full font-medium text-base lg:text-[1.025rem] hidden sm:inline-block'>
            <Menu />
          </nav>
          <div className='absolute right-8 sm:hidden flex items-center'>
            <SidebarButton />
          </div>
        </div>
      </div>
    </header>
  )
}

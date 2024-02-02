import Link from 'next/link'
import NavLink from "@/components/NavLink"

import pages from '@data/links/pages'
import socials from '@data/links/socials'


function PageLink({
  Icon, href, children
}: {
  Icon: any, href: string, children?: JSX.Element | string
}) {
  return (
    <NavLink
      href={href}
      inactiveClassName="
        w-full
        px-3 py-1 gap-3
        rounded-full
        inline-flex items-center
        text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-100
        border border-transparent hover:border-slate-300 dark:hover:border-slate-700
        hover:bg-slate-200 dark:hover:bg-slate-800
        hover:drop-shadow-sm
        transition-colors duration-250"
      activeClassName="
        w-full
        px-3 py-1 gap-3
        rounded-full
        inline-flex items-center
        text-sky-800 dark:text-sky-500
        border border-slate-300 dark:border-slate-700
        bg-slate-200 dark:bg-slate-800
        drop-shadow-sm
        transition-colors duration-250"
    >
      <>
        <Icon className="w-4 h-4" />
        {children}
      </>
    </NavLink>
  )
}

function SocialLink({
  Icon, href, Anchor, children
}: {
  Icon: any, href: string, Anchor?: any, children?: JSX.Element | string
}) {
  let LinkComponent = Anchor || Link;

  return (
    <LinkComponent
      href={href}
      className="
        w-full
        px-3 py-1 gap-3
        rounded-full
        inline-flex items-center
        text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300
        border border-transparent hover:border-slate-300 dark:hover:border-slate-700
        hover:bg-slate-200 dark:hover:bg-slate-800
        hover:drop-shadow-sm
        transition-colors duration-200
      "
    >
      <Icon className="w-4 h-4" />
      {children}
    </LinkComponent>
  )
}

export function PageLinks() {
  return (
    <ul className="flex flex-col gap-2 m-0 p-0">
      {
        pages.map((entry) => {
          return (
            <li className="m-0 p-0 list-none" key={entry.title}>
              <PageLink Icon={entry.icon} href={entry.link}>
                {entry.title}
              </PageLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export function SocialLinks() {
  return (
    <ul className="flex flex-col gap-2 m-0 p-0">
      {
        socials.map((entry) => {
          return (
            <li className="m-0 p-0 list-none" key={entry.title}>
              <SocialLink Icon={entry.icon} Anchor={entry.anchor} href={entry.link}>
                {entry.title}
              </SocialLink>
            </li>
          )
        })
      }
    </ul>
  )
}

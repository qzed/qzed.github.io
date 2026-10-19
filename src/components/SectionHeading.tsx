import type { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  action?: ReactNode,
  className?: string,
}

export default function SectionHeading({ children, action, className = 'mt-14 sm:mt-16 mb-5 sm:mb-6' }: Props) {
  return (
    <h2 className={`
      not-prose ${className}
      flex items-center gap-4
      text-sm sm:text-base font-semibold uppercase tracking-[0.15em]
      text-sky-800 dark:text-sky-400
    `}>
      <span className='whitespace-nowrap'>{children}</span>
      <span className='flex-1 h-px bg-slate-300 dark:bg-slate-700' />
      {action}
    </h2>
  )
}

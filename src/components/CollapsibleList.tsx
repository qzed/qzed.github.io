'use client'

import { Children, cloneElement, isValidElement, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode[] | ReactNode,
  visible: number,
  className?: string,
}

export default function CollapsibleList({ children, visible, className }: Props) {
  const [expanded, setExpanded] = useState(false)

  const items = Children.toArray(children)
  const collapsed = !expanded && items.length > visible

  // When collapsed, show one more item as a faded-out preview of what's hidden.
  const shown = collapsed ? items.slice(0, visible + 1) : items

  return (
    <div>
      <ul
        className={className}
        style={collapsed ? {
          maskImage: 'linear-gradient(to bottom, black calc(100% - 2.5rem), transparent calc(100% - 0.5rem))',
        } : undefined}
      >
        {
          shown.map((item, i) => {
            return collapsed && i == visible && isValidElement(item)
              ? cloneElement(item as React.ReactElement<any>, { inert: true, 'aria-hidden': true })
              : item
          })
        }
      </ul>
      {
        items.length > visible &&
        <button
          type='button'
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className='
            mt-1 text-sm text-slate-500 cursor-pointer
            hover:text-slate-800 dark:hover:text-slate-200
          '
        >
          {expanded ? <>Show less &uarr;</> : <>Show {items.length - visible} more &darr;</>}
        </button>
      }
    </div>
  )
}

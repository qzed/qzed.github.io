type Props = {
  children: JSX.Element[] | JSX.Element | string,
}

export default function Prose({ children }: Props) {
  return (
    <div className='
      prose max-w-none prose-slate dark:prose-invert
      prose-sm sm:prose-base

      text-pretty break-words hyphens-auto

      prose-img:rounded prose-img:border
      prose-img:border-slate-200 dark:prose-img:border-slate-800

      prose-table:rounded
      prose-table:bg-slate-200
      dark:prose-table:bg-slate-800

      prose-th:px-3
      prose-td:px-3
      prose-th:py-2
      prose-td:py-2

      prose-thead:border-b prose-thead:border-slate-400 dark:prose-thead:border-slate-500
      prose-td:border-b prose-td:border-slate-300 dark:prose-td:border-slate-700 [&>*]:last:prose-tr:border-none

      first:prose-th:pl-5
      first:prose-td:pl-5
      last:prose-th:pr-5
      last:prose-td:pr-5

      prose-code:font-normal
    '>
      {children}
    </div>
  )
}

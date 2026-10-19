function Tag({ name }: { name: string }) {
  return (
    <span className='
      py-0.5 px-2 text-xs sm:text-sm font-light whitespace-nowrap
      rounded-full
      bg-slate-300 dark:bg-slate-800
      text-slate-800 dark:text-slate-200
    '>
      #{name}
    </span>
  )
}

export default function Tags({ tags, className }: { tags?: string[] | null, className?: string }) {
  if (!tags?.length) {
    return <></>
  }

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className ?? ''}`}>
      {
        tags.map((tag) => {
          return <Tag name={tag} key={tag} />
        })
      }
    </div>
  )
}

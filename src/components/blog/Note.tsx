type NoteProps = {
  type?: string,
  children: JSX.Element,
}

export default function Note({ type, children }: NoteProps) {
  const colors: { [key: string]: { light: string, dark: string } } = {
    normal: {
      light: "border-sky-600",
      dark: "border-sky-700",
    },
    important: {
      light: "border-amber-500",
      dark: "border-amber-500",
    },
    critical: {
      light: "border-rose-600",
      dark: "border-rose-700",
    },
  }

  let ty: string = type || "normal"
  let color = colors[ty];

  return (
    <div className={`
        p-4 my-4
        rounded border-l-4 ${color.light} dark:${color.dark}
        bg-slate-200 dark:bg-slate-800
        [&>*:first-child]:mt-0 [&>*:last-child]:mb-0
    `}>
      {children}
    </div>
  )
}

type NoteProps = {
  type?: string,
  children: JSX.Element,
}

export default function Note({ type, children }: NoteProps) {
  let cls = "note"
  if (type) {
    cls += " " + type
  }

  return (
    <div className={cls}>
      {children}
    </div>
  )
}

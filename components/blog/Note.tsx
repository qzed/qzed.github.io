type NoteProps = {
  type?: string,
  children: JSX.Element,
}

const Note = ({type, children}: NoteProps) => {
  let cls = "note"
  if (type) {
    cls += " " + type
  }

  return (
    <div className={cls}>
      {children}
    </div>
  )
};

export default Note;

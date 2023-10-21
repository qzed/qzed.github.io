type EqRefProps = {
  label: string,
  num: string,
  text: string | undefined,
}

export default function EqRef({ label, num, text }: EqRefProps) {
  const txt = text || "Equation"

  return (
    <a className="eq-ref" href={`#${label}`}>{`${txt} (${num})`}</a>
  )
}

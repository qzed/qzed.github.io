type EqRefProps = {
  label: string,
  num: string,
  text: string | undefined,
}

export default function EqRef({ label, num, text }: EqRefProps) {
  const txt = text || "Equation"

  return <a href={`#${label}`} className='eq-ref'>{`${txt} (${num})`}</a>
}

'use client'

import katex from 'katex'

type KatexMathProps = {
  math: string
  displayMode?: boolean
}

export default function KatexMath({ math, displayMode = true }: KatexMathProps) {
  const html = katex.renderToString(math, { displayMode })

  return (
    <div
      className={displayMode ? "math math-display" : "math math-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

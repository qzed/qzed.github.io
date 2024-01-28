'use client'

import React from "react"

export const initialCounterState = 4;

export default function Counter() {
  const [counter, setCounter] = React.useState(initialCounterState);

  return (
    <button
      className="
        px-2 py-1
        rounded border-2 border-black
        text-slate-800 bg-slate-300"
      onClick={() => setCounter((c) => c + 1)}
    >
      Increment {counter}
    </button>
  )
}

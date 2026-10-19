'use client'

import React from "react"

export const initialCounterState = 4;

export default function Counter() {
  const [counter, setCounter] = React.useState(initialCounterState);

  return (
    <button
      className="
        py-1 px-3 text-sm whitespace-nowrap cursor-pointer
        rounded-full border border-transparent
        bg-slate-300 dark:bg-slate-800
        text-slate-800 dark:text-slate-200
        hover:border-slate-400 dark:hover:border-slate-600
        tabular-nums"
      onClick={() => setCounter((c) => c + 1)}
    >
      Increment {counter}
    </button>
  )
}

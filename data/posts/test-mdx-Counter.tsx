'use client'

import React from "react"

export const initialCounterState = 4;

export function Counter() {
    const [counter, setCounter] = React.useState(initialCounterState);
    return (
        <button onClick={() => setCounter((c) => c + 1)}>
            Increment {counter}
        </button>
    );
};

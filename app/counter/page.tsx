'use client'

import { useState } from 'react'

export default function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</p>
      <button onClick={() => setCount(count + 10 )}>
        Click me +
      </button>
    </main>
  )
}
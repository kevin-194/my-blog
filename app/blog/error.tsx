'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Something went wrong!</h1>
      <p style={{ color: '#666' }}>
        We could not load the blog posts. Please try again.
      </p>
      <p style={{ color: '#999', fontSize: '0.8rem' }}>
        Error: {error.message}
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Try again
      </button>
    </main>
  )
}
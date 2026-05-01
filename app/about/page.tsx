import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My Blog</h1>
      <p>This is a Next.js app I am building while learning.</p>
      <Link href="/blog">Read the blog →</Link>
    </main>
  )
}
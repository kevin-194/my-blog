import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'My Blog',
  description: 'Learning Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}

      </body>
    </html>
  )
}
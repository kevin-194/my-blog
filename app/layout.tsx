import NavLink from './components/NavLink'
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
      <body className="min-h-screen bg-gray-50">

        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">
              My Blog
            </span>
            <div className="flex items-center gap-6">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/blog" label="Blog" />
              <NavLink href="/contact" label="Contact" />
              <NavLink href="/dashboard" label="Dashboard" />
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </div>

      </body>
    </html>
  )
}
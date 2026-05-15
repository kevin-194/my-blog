import NavLink from './components/NavLink'
import LogoutButton from './components/LogoutButton'
import Link from 'next/link'
import './globals.css'
import { createServerSupabaseClient } from './lib/supabase-server'

export const metadata = {
  title: 'My Blog',
  description: 'Learning Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">My Blog</span>
            <div className="flex items-center gap-6">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/blog" label="Blog" />
              <NavLink href="/contact" label="Contact" />
              {user ? (
                <>
                  <NavLink href="/admin" label="Admin" />
                  <LogoutButton />
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm font-medium bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Sign up
                  </Link>
                </div>
              )}
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
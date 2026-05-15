'use client'

import { useState } from 'react'
import { createClient } from '../lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin() {
  if (!email || !password) {
    setError('Please fill in all fields')
    return
  }

  setLoading(true)
  setError('')

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    setError(error.message)
    setLoading(false)
    return
  }

  // check if there's a redirect URL in the query params
  const params = new URLSearchParams(window.location.search)
  const redirectTo = params.get('redirectTo') || '/'

  router.push(redirectTo)
  router.refresh()
}

  return (
    <div className="flex flex-col gap-4">
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </div>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <Link href="/signup" className="text-blue-500 hover:text-blue-700">
          Sign up
        </Link>
      </p>
    </div>
  )
}
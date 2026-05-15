'use client'

import { useState } from 'react'
import { createClient } from '../lib/supabase'
const supabase = createClient()
import { useRouter } from 'next/navigation'

export default function NewPostForm() {
  const supabase = createClient()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit() {
    if (!title || !body) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    const { error } = await supabase
  .from('posts')
  .insert({ 
    title, 
    body,
    user_id: (await supabase.auth.getUser()).data.user?.id
  })

    if (error) {
      setError('Failed to create post. Please try again.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200">
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post content here"
            rows={6}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </div>
    </div>
  )
}
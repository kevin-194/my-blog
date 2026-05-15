'use client'

import { useState } from 'react'
import { createClient } from '../lib/supabase'
const supabase = createClient()
import { useRouter } from 'next/navigation'

type Post = {
  id: number
  title: string
  body: string
}

export default function EditPostForm({ post }: { post: Post }) {
  const supabase = createClient()
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleUpdate() {
    if (!title || !body) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    const { error } = await supabase
      .from('posts')
      .update({ title, body })
      .eq('id', post.id)

    if (error) {
      setError('Failed to update post. Please try again.')
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
            rows={6}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Updating...' : 'Update Post'}
        </button>
      </div>
    </div>
  )
}
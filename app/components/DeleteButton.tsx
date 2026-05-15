'use client'

import { createClient } from '../lib/supabase'
const supabase = createClient()
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteButton({ id }: { id: number }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    const confirmed = confirm('Are you sure you want to delete this post?')
    if (!confirmed) return

    setLoading(true)

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Failed to delete post')
      setLoading(false)
      return
    }

    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm text-red-400 hover:text-red-600 disabled:opacity-50"
    >
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  )
}
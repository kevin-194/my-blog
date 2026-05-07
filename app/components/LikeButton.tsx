'use client'

import { useState } from 'react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-1 rounded-full text-sm border transition cursor-pointer ${
        liked
          ? 'bg-red-50 border-red-300 text-red-500'
          : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'
      }`}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  )
}
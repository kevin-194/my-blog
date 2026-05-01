'use client'

import { useState } from 'react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <button 
      onClick={() => setLiked(!liked)}
      style={{ 
        marginTop: '0.5rem',
        padding: '0.3rem 1rem',
        cursor: 'pointer',
        background: 'none',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  )
}
import Link from 'next/link'
import LikeButton from '../components/LikeButton'
import { createServerSupabaseClient } from '../lib/supabase-server'

export default async function BlogPage() {
  const supabase = await createServerSupabaseClient()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <main>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>
        <p className="text-red-500">Failed to load posts.</p>
      </main>
    )
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog</h1>
      <p className="text-gray-500 text-sm mb-8">
        {posts?.length} {posts?.length === 1 ? 'post' : 'posts'} published
      </p>

      {posts?.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-bold text-gray-400 mb-2">
            No posts yet
          </h2>
          <p className="text-gray-400 text-sm">
            Check back soon for new content!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition"
            >
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {post.body}
              </p>
              <div className="flex items-center justify-between">
                <LikeButton />
                <p className="text-xs text-gray-400">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
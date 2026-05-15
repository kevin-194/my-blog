import { createServerSupabaseClient } from '../lib/supabase-server'
import DeleteButton from '../components/DeleteButton'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <p className="text-red-500 p-8">Failed to load posts.</p>
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Admin</h1>
          <p className="text-gray-500 text-sm mt-1">
            Logged in as {user?.email}
          </p>
        </div>
        <Link
          href="/admin/new"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
        >
          + New Post
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-between"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-400 text-sm mt-1">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/admin/edit/${post.id}`}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Edit
              </Link>
              <DeleteButton id={post.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
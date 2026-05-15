import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createServerSupabaseClient } from '../../lib/supabase-server'

type Props = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const supabase = await createServerSupabaseClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <main className="max-w-2xl">
      <Link
        href="/blog"
        className="text-blue-500 hover:text-blue-700 text-sm mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-400 mb-3">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500 leading-relaxed">
          {post.body}
        </p>
      </div>
    </main>
  )
}
import { createServerSupabaseClient } from '../../../lib/supabase-server'
import EditPostForm from '../../../components/EditPostForm'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
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
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Post</h1>
      <EditPostForm post={post} />
    </main>
  )
}
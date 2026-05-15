import NewPostForm from '../../components/NewPostForm'
import Link from 'next/link'

export default function NewPostPage() {
  return (
    <main className="max-w-2xl">
      <Link
        href="/admin"
        className="text-blue-500 hover:text-blue-700 text-sm mb-6 inline-block"
      >
        ← Back to Admin
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">New Post</h1>
      <NewPostForm />
    </main>
  )
}
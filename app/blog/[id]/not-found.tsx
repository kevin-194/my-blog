import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
      <p className="text-gray-500 mb-8">
        Sorry, this blog post does not exist.
      </p>
      <Link
        href="/blog"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        ← Back to Blog
      </Link>
    </main>
  )
}
import Link from 'next/link'
import LikeButton from '../components/LikeButton'

export default async function BlogPage() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    { next: { revalidate: 60 } }
  )
  const posts = await response.json()

  return (
    <main>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post: { id: number; title: string; body: string }) => (
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
            <LikeButton />
          </div>
        ))}
      </div>
    </main>
  )
}
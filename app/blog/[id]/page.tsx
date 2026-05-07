import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return posts.map((post: { id: number }) => ({
    id: String(post.id)
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  const post = await response.json()

  if (!post.title) {
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